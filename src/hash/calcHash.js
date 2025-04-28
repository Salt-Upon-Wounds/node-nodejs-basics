import fs from 'node:fs'
import getDirname from '../fs/dirname.js'
import path from 'node:path'
import crypto from 'node:crypto'

const calculateHash = async () => {
  try {
    const filePath = path.join(getDirname(import.meta.url), 'files', 'fileToCalculateHashFor.txt')
    const stream = fs.createReadStream(filePath)
    const hash = crypto.createHash('sha256')

    stream.on('data', chunk => hash.update(chunk))
    stream.on('end', () => console.log(hash.digest('hex')))
    stream.on('error', err => console.error(err))
  } catch (err) {
    throw Error('FS operation failed')
  }
}

await calculateHash()
