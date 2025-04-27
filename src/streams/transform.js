import { Transform } from 'node:stream'

const transform = async () => {
    const transformer = new Transform({
      transform(chunk, encoding, callback) {
        const newChunk = chunk.toString().split('').reverse().join('')
        callback(null, newChunk)
      }
    })
    process.stdin.pipe(transformer).pipe(process.stdout)
};

await transform();
