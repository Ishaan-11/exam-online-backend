const LoginRequired = require('hooks/login-required');
const hasExamAttempt = require('hooks/has-exam-attempt');
const Controllers = require('./controllers');

module.exports = async (app, opts) => {
  app.get(
    '/',
    {
      preHandler: LoginRequired,
    },
    Controllers.ExamAttemptListController.asHandler('get'),
  );
  app.get(
    '/:id',
    {
      preHandler: [LoginRequired, hasExamAttempt()],
    },
    Controllers.ExamAttemptDetailController.asHandler('get'),
  );
  app.post(
    '/:id/submit',
    {
      preHandler: [LoginRequired, hasExamAttempt()],
    },
    Controllers.ExamAttemptSubmitController.asHandler('post'),
  );
};

module.exports.autoPrefix = '/exam-attempts';
