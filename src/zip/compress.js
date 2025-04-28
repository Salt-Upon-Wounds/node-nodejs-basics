import { createReadStream, createWriteStream } from 'node:fs'
import path from 'node:path'
import { createGzip } from 'node:zlib'
import { pipeline } from 'node:stream/promises'
import getDirname from '../fs/dirname.js'

const compress = async () => {
  const gzip = createGzip()
  const filePath = path.join(getDirname(import.meta.url), 'files', 'fileToCompress.txt')
  const arcPath = path.join(getDirname(import.meta.url), 'files', 'archive.gz')
  const source = createReadStream(filePath);
  const destination = createWriteStream(arcPath);
  return pipeline(source, gzip, destination);
}

await compress()
