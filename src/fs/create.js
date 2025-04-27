import fs from 'node:fs/promises'
import getDirname from './dirname.js'
import path from 'node:path'

const create = async () => {
  const filePath = path.join(getDirname(), 'files', 'fresh.txt')
  try {
    await fs.access(filePath, fs.constants.R_OK | fs.constants.W_OK)
    throw Error('FS operation failed')
  } catch (error) {
    if (error.code === 'ENOENT') {
      await fs.writeFile(filePath, 'I am fresh and young')
    } else {
      throw error
    }
  }
}

await create()
