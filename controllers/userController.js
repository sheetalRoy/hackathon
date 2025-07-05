let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ];
  
  // Get all users
  exports.getUsers = (req, res) => {
    res.json(users);
  };
  
  // Get a user by ID
  exports.getUserById = (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  };
  
  // Create a new user
//   exports.createUser = (req, res) => {
//     const { name, email } = req.body;
//     const newUser = {
//       id: users.length + 1,
//       name,
//       email
//     };
//     users.push(newUser);
//     res.status(201).json(newUser);
//   };