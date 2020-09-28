const successResponse = body => ({
  success: true,
  error: null,
  body,
});

const failureResponse = () => ({
  succes: false,
  // TODO make error codes
  error: 'custom error',
  body: null,
});

module.exports = { successResponse, failureResponse };
