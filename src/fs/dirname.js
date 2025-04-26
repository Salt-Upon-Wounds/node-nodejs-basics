
import path from 'node:path'
import { fileURLToPath } from 'url'

export function getDirname(caller = import.meta.url) {
  return path.dirname(fileURLToPath(caller))
}
