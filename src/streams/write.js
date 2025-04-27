import fs from 'node:fs'
import getDirname from '../fs/dirname.js'
import path from 'node:path'

const write = async () => {
  const filePath = path.join(getDirname(import.meta.url), 'files', 'fileToWrite.txt')
  const stream = fs.createWriteStream(filePath)
  process.stdin.pipe(stream)
}

await write()
