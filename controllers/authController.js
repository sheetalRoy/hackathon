const dummyUser = {
    email: 'admin',
    password: 'admin', // In real life, passwords should be hashed
    name: 'Admin User'
  };
  
  // POST /api/login
  exports.loginUser = (req, res) => {
    const { email, password } = req.body;
  
    if (email === dummyUser.email && password === dummyUser.password) {
      return res.status(200).json({
        message: 'Login successful',
        user: {
          name: dummyUser.name,
          email: dummyUser.email
        },
        token: 'dummy-jwt-token' 
      });
    } else {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
  };