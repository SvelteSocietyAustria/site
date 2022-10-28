import { glob } from "glob-promise";
import sharp from "sharp";


const files = await glob('./gallery/**/*.jpg')
const images = Object.keys(files)

images.forEach((image) => {
    const path = image.split('gallery/')[1];
    sharp(image)
        .resize(150)
        .toFile(`./src/lib/assests/${path}`)
})