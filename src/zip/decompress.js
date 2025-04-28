import { createReadStream, createWriteStream } from 'node:fs'
import path from 'node:path'
import { createUnzip } from 'node:zlib'
import { pipeline } from 'node:stream/promises'
import getDirname from '../fs/dirname.js'

const decompress = async () => {
  const gzip = createUnzip()
  const filePath = path.join(getDirname(import.meta.url), 'files', 'fileToCompress.txt')
  const arcPath = path.join(getDirname(import.meta.url), 'files', 'archive.gz')
  const source = createReadStream(arcPath);
  const destination = createWriteStream(filePath);
  return pipeline(source, gzip, destination);
}

await decompress()
