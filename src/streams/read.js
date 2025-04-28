import fs from 'node:fs'
import getDirname from '../fs/dirname.js'
import path from 'node:path'
import { EOL } from 'node:os'

const read = async () => {
  const filePath = path.join(getDirname(import.meta.url), 'files', 'fileToRead.txt')
  const stream = fs.createReadStream(filePath)
  stream.pipe(process.stdout)
  stream.on('end', () => process.stdout.write(EOL))
}

await read()
