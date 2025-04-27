import fs from 'node:fs/promises'
import getDirname from './dirname.js'
import path from 'node:path'

const rename = async () => {
  const oldFilePath = path.join(getDirname(), 'files', 'wrongFilename.txt')
  const newFilePath = path.join(getDirname(), 'files', 'properFilename.md')
  try {
    await fs.access(newFilePath, fs.constants.R_OK | fs.constants.W_OK)
    throw Error('FS operation failed')
  } catch (error) {
    if (error.code === 'ENOENT') {
      await fs.rename(oldFilePath, newFilePath).catch(() => {
        throw Error('FS operation failed')
      })
    } else {
      throw error
    }
  }
}

await rename()
