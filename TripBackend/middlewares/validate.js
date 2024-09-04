function validate(schema) {
    return async (req, res, next) => {
        try {
            // Parse and validate the request body using the provided schema
            const parseBody = await schema.parseAsync(req.body);
            
            // If validation passes, assign the validated data back to req.body
            req.body = parseBody;
            
            // Pass control to the next middleware or route handler
            next();
        } catch (error) {
            // If validation fails, send a 400 response with the error details
            res.status(400).json({
                message: error.errors ? error.errors.map(err => err.message) : 'Validation failed',
            });
        }
    };
}

module.exports = validate;
