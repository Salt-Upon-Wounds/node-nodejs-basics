const parseEnv = () => {
    console.log(Object.keys(process.env).filter(el => /^RSS_/.test(el)).join('; '))
}

parseEnv()
