export const logger = (req, _res, next) => {
    const dateStamp = new Date().toLocaleTimeString('en-GB', { hour12: false });
    console.log(`[${dateStamp}] - ${req.method}: ${req.originalUrl}`);
    
    next();
}