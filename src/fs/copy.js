import fs from 'node:fs/promises'
import getDirname from './dirname.js'
import path from 'node:path'

const copy = async () => {
  const newFilesPath = path.join(getDirname(), 'files_copy')
  const oldFilesPath = path.join(getDirname(), 'files')
  try {
    const pathStat = await fs.stat(newFilesPath).catch(() => {})
    if (pathStat && pathStat.isDirectory()) {
      throw Error('FS operation failed')
    }
    await fs.mkdir(newFilesPath, { recursive: false })
    const files = await fs.readdir(oldFilesPath, { withFileTypes: true })
    for (const file of files) {
      await fs.copyFile(path.join(oldFilesPath, file.name), path.join(newFilesPath, file.name))
    }
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw Error('FS operation failed')
    } else {
      throw error
    }
  }
}

await copy()
