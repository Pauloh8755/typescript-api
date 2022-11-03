import express from 'express'

const app = express()

app.get('/', (_, res) => {
    return res.send('Olá, Dev')
})

export default app