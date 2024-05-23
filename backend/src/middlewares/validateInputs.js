const validateBody = (schema) => async (req, res, next) => {
  try {
    const data = await schema.validate(req.body, { abortEarly: false });
    req.body = data;
    next();
  } catch (error) {
    res.status(400).json({ errors: error.errors });
  }
};

module.exports = validateBody;
