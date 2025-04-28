import fs from 'node:fs/promises'
import getDirname from './dirname.js'
import path from 'node:path'

const remove = async () => {
  const filePath = path.join(getDirname(), 'files', 'fileToRemove.txt')
  try {
    await fs.unlink(filePath)
  } catch (e) {
    throw Error('FS operation failed')
  }
}

await remove()
