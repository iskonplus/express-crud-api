export const timer = (req, res, next) => {
    const start = Date.now();

    res.on('finish', () => {
        const end = Date.now();
        console.log(`The request ${req.method} was processed in [${end - start}] ms`);
    })
    next();
}