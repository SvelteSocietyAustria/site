import { promise as glob } from "glob-promise";
import fs from 'fs/promises'
import { ImagePool } from '@squoosh/lib';
import { cpus } from 'os';
const imagePool = new ImagePool(cpus().length);

////
// helpers

const SIZES = [
    150,
    640,
    1024,
    1280,
    1920,
];

const getOutputPath = (originalPath) => {
    const path = originalPath.split('gallery/')[1];
    return `./static/generated/${path}`;
}

/**
 * 
 * @param {string} originalPath 
 * @param {number} width 
 * @param {string} format 
 * @returns {string}
 */
const getImageDerivitePath = (originalPath, width, format) => getOutputPath(originalPath.replace(/(\d\d).jpg/, '$1' + `-${width}.${format}`));

await fs.rm('./static/generated', { recursive: true, force: true })

////
// img transformation

const start = new Date();
const files = await glob('./gallery/**/*.jpg')
const folders = await glob('./gallery/*')

await Promise.all(
    folders.map((folder) => fs.mkdir(getOutputPath(folder), { recursive: true }))
)

await Promise.all(
    files.map((file) =>
        SIZES.map(async (_width) => {
            const image = imagePool.ingestImage(file);
            const decoded = await image.decoded;
            const { height, width } = decoded.bitmap;
            const preprocessOptions = height < width
                ? {
                    resize: {
                        enabled: true,
                        width: _width,
                    }
                }
                : {
                    resize: {
                        enabled: true,
                        height: _width,
                    }
                };
            await image.preprocess(preprocessOptions);
            return image
                .encode({
                    mozjpeg: {},
                    webp: {},
                })
                .then(async () => {
                    for (const encodedImage of Object.values(image.encodedWith)) {
                        fs.writeFile(
                            getImageDerivitePath(file, _width, (await encodedImage).extension),
                            (await encodedImage).binary,
                        );
                    }
                })
        }
        )
    ).flat(Infinity)
)

await imagePool.close();

const ms = new Date() - start;

console.info('\x1b[36m')
console.info(`> ${files.length * SIZES.length * 2} images created in ${ms}ms`, '\x1b[0m')
