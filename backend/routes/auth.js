const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");

//SignUp
router.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const hashpassword = bcrypt.hashSync(password);
    const user = new User({ email, username, password: hashpassword });
    await user.save().then(() => res.status(200).json({ message: "Sign Up Successfully" }));
  } catch (error) {
    res.status(200).json({ message: "User Already Exists" });
  }
});

//Login
router.post("/signin", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json({ message: "User not found. Please Sign Up First" });
    }
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) {rrweq
      return res.status(401).json({ message: "Password Is Not Correct" });
    }
    const { password, ...others } = user._doc;
    res.status(200).json({ others });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
