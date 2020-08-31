// all errors caught by async wrapper and send to error handler
export const asyncWrapper = func => ( req, res, next ) => func( req, res ).catch(next);