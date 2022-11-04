import { promise as glob } from "glob-promise";
import sharp from "sharp";
import fs from 'fs/promises'

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

const getImageDerivitePath = (originalPath, width) => getOutputPath(originalPath.replace(/(\d\d).jpg/, '$1' + `-${width}.jpg`));

await fs.rm('./static/generated', { recursive: true, force: true })

////
// img transformation

const files = await glob('./gallery/**/*.jpg')
const folders = await glob('./gallery/*')

await Promise.all(
    folders.map((folder) => fs.mkdir(getOutputPath(folder), { recursive: true }))
)

await Promise.all(
    files.map((image) =>
        SIZES.map((size) =>
            sharp(image)
                .resize(size)
                .toFile(getImageDerivitePath(image, size))
        )
    ).flat()
)

console.info('\x1b[36m')
console.info(`> ${files.length * SIZES.length} images created`, '\x1b[0m')
