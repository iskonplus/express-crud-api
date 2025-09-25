import {errorResponse} from '../controllers/response.js'

export const notFound = (_req, res, _next) => {
   return  res.status(404).json(errorResponse('Page not found'));
}