import { Router } from "express";
import { User } from "../models/User.js";


const router = Router();


router.post("/users", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "Email already exists" });

    const user = new User({ name, email, password });
    await user.save();

    res.status(201).json({ message: "User created", user: { id: user._id, name, email } });
  } catch (error) {
    res.status(500).json({ message: "Error"});
  }
});

export default router;

router.get('/users')
router.get('/users/:id')
router.put('/users/:id')
router.delete('/users/:id')

