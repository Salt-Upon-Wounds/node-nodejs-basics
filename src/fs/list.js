import fs from 'node:fs/promises'
import getDirname from './dirname.js'
import path from 'node:path'

const list = async () => {
  const filesPath = path.join(getDirname(), 'files')
  try {
    const pathStat = await fs.stat(filesPath).catch(() => {})
    if (!pathStat || !pathStat.isDirectory()) {
      throw Error('FS operation failed')
    }
    const files = await fs.readdir(filesPath, { withFileTypes: true })
    for (const file of files) {
      console.log(file.name)
    }
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw Error('FS operation failed')
    } else {
      throw error
    }
  }
}

await list()
