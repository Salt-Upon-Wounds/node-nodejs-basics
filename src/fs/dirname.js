
import path from 'node:path'
import { fileURLToPath } from 'node:url'

export default function getDirname(caller = import.meta.url) {
  return path.dirname(fileURLToPath(caller))
}
