import process from 'node:process'

const parseArgs = () => {
  for (let idx = 2; idx < process.argv.length; idx++) {
    const el = process.argv[idx]
    if (idx === process.argv.length - 1) {
      process.stdout.write(`${el}\n`)
    } else if (idx % 2) {
      process.stdout.write(`${el}, `)
    } else {
      process.stdout.write(`${el} is `)
    }
  }
}

parseArgs()
