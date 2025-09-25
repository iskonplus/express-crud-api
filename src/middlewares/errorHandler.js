import {errorResponse} from '../controllers/response.js'

export const errorHandler = (err, _req, res, _next) => {
    console.error(`Error: ${err.message}`);
    res.json(errorResponse( 'Internal server error' ));
}