// authMiddleware.js

const authMiddleware = (req, res, next) => {
    // Check if user is authenticated (you can use session, token, etc.)
    if (req.isAuthenticated()) { // Example: Using session-based authentication
      // User is authenticated, proceed to the next middleware
      next();
    } else {
      // User is not authenticated, send an error response or redirect to login page
      res.status(401).json({ error: 'Authentication required' });
      // Alternatively, you can redirect to a login page
      
      // res.redirect('/login');
    }
  };
  
  module.exports = authMiddleware;
  