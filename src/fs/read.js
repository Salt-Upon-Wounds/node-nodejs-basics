import fs from 'node:fs/promises'
import getDirname from './dirname.js'
import path from 'node:path'

const read = async () => {
  try {
    const filePath = path.join(getDirname(), 'files', 'fileToRead.txt')
    const contents = await fs.readFile(filePath, { encoding: 'utf8' });
    console.log(contents);
  } catch (err) {
    throw Error('FS operation failed')
  }
};

await read();
