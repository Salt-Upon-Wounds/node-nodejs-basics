import { cpus } from 'node:os'
import { Worker } from 'node:worker_threads'
import path from 'node:path'
import getDirname from '../fs/dirname.js'

const performCalculations = async () => {
  const howMany = cpus().length
  const res = await Promise.allSettled([...Array(howMany)].map((el, idx) => {
    return new Promise((resolve) => {
      const worker = new Worker(path.join(getDirname(import.meta.url), 'worker.js'))
      worker.postMessage(10 + idx)
      worker.on('message', (data) => {
        worker.terminate()
        resolve({ status: 'resolved', data})
      })
      worker.on('error', () => {
        worker.terminate()
        resolve({ status: 'resolved', data: null})
      })
    })
  }))
  console.log(res)
}

await performCalculations()
