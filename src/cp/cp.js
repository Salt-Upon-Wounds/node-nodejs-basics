import cp from 'node:child_process'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const spawnChildProcess = async (args) => {
    const child = cp.fork(path.join(__dirname, 'files', 'script.js'), args, {
        stdio: ['pipe', 'pipe', 'inherit', 'ipc']
    })
    process.stdin.pipe(child.stdin)
    child.stdout.pipe(process.stdout)
}

spawnChildProcess(['asd', 1, { 'zxc': 'zxc' }])
