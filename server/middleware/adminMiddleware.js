// adminMiddleware.js

const requireAdminLogin = (req, res, next) => {
    if (req.session.isAdminLoggedIn) {
      next();
    } else {
      res.redirect('/admin/login');
    }
  };
  
  module.exports = { requireAdminLogin };
  