module.exports = function(req, res, next) {
    const { session } = req;
  
    if (!session.user) {
      session.user = { username: '' };
    }
  
    console.log(session);
    next();
  };