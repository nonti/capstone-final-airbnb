import User from "../models/user.model.js";
import jwt from 'jsonwebtoken';
export const signup = async (req, res) => {
    try {
        const { username, email, password, confirmPassword, role } = req.body;

        const existingUser = await User.findOne({
          $or: [{ username }, { email }] 
      });

      if (existingUser) {
          res.status(400);
          throw new Error("Username or email already exists.");
      }
        if (password !== confirmPassword) {
           res.status(400)
          throw new Error("Passwords do not match.");
      }
        const user_doc = await User.create({
            username,
            email,
            password,
            confirmPassword,
            role
        });


        res.status(200).json(user_doc);

    }
    catch (error) {
      res.status(409) 
      throw new Error(error.message);
    }
  }

  export const signin = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user_doc = await User.findOne({ username });
        if (user_doc) {
            const isMatch = await user_doc.matchPassword(password, user_doc.password);
            if (isMatch) {
                // Create a payload with the user information
                const payload = {
                    username: user_doc.username,
                    id: user_doc._id,
                    role: user_doc.role // Assuming the role is stored in user_doc
                };

                // Sign the JWT token
                jwt.sign(payload, process.env.JWT_SECRET, {}, (err, token) => {
                    if (err) throw err;
                    
                    // Send the token as a cookie and include user information in the response
                    res.cookie('token', token).json({
                        id: user_doc._id,
                        username: user_doc.username,
                        role: user_doc.role // Return the role as well
                    });
                });
            } else {
                res.status(422).json('Password unmatched');
            }
        } else {
            res.status(404).json('User not found');
        }
    } catch (error) {
        console.error(error);
        res.status(500).json('Internal server error');
    }
};

    export const profile = (req, res) => {
      const {token} = req.cookies;
      if(token){
        jwt.verify(token, process.env.JWT_SECRET,{}, async (err, user_data) =>{
          if(err) throw err
          const {username, role, email, _id} = await User.findById(user_data.id)
          res.json({username,role, email, _id});
        })
      }else{
      res.json(null);
    
      }
    }

    export const signout = (req, res) => {
      res.cookie(token,'').json(true);
    }
  