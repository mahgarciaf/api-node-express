// cada função que passa na sequência, recebe um dos valores do parâmetro
const logger = (req, res, next) => {
    // console.log(req.baseUrl)
    // console.log(req.hostname)
    // console.log(req.ip)
    // console.log(req.originalUrl)

    console.log(`${req.method} - ${req.originalUrl}`)

    next()
}

export default logger