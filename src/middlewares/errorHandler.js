export const errorHandler = (err, _req, res, _next) => {
    console.error(`Error: ${err.message}`);
    res.json({ error: true, errorText: 'Internal server error' });
}