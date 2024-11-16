import express from 'express';
import User from '../models/User';
import Owner from '../models/Owner';
import Shelter from '../models/Shelter';

const router = express.Router();

// Register route
router.post('/signup', async (req:any, res:any) => {
    const { name, email, password } = req.body;
    
    try {
        // Check if user already exists with the same email
        const existingUser = await User.find({ email });
        const newUser = new User({ name, email, password });
        await newUser.save();

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating user' });
    }
});



// Login route
router.post('/login', async (req:any, res:any) => {
    const { email, password } = req.body;

    try {
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        // Check if password matches
        if (user.password !== password) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        res.json({ message: 'Login successful', user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error logging in' });
    }
});

// ownersignup

router.post('/ownersignup', async (req:any, res:any) => {
    const { name, email, password } = req.body;
    
    try {
        const existingUser = await Owner.find({ email });
        const newOwner = new Owner({ name, email, password });
        await newOwner.save();

        res.status(201).json({ message: 'Owner created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating Owner' });
    }
});


router.post('/ownerlogin', async (req:any, res:any) => {
    const { email, password } = req.body;

    try {
        // Find user by email
        const owner = await Owner.findOne({ email });
        if (!owner) {
            return res.status(400).json({ message: 'Owner not found' });
        }

        // Check if password matches
        if (owner.password !== password) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        res.json({ message: 'Login successful', owner });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error logging in' });
    }
});



router.post('/add', async (req:any, res:any) => {
    console.log("sasdasidssodfhs");
    const src = "data:image/jpeg;base64,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"
    const { shelter_name, location, contact, active_inactive, ratings, slogan} = req.body;
    try {
        console.log("ddgdgdfg")
      const shelter = new Shelter({ shelter_name, location, contact, active_inactive, ratings, slogan,src });
      console.log(shelter)
      await shelter.save();
      res.status(201).json({ message: 'Shelter added successfully!', shelter });
    } catch (error) {
      res.status(400).json({ message: 'Error adding shelter', error });
    }
  });
  
  // Get All Shelters
  router.get('/all', async (req:any, res:any) => {
    // console.log("he")
    try {
      const shelters = await Shelter.find();
      res.status(200).json(shelters);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching shelters', error });
    }
  });
  
router.get('/search', async (req: any, res: any) => {
    try {
      const location = req.query.location as string;
  
      // If location is provided, search for shelters with matching locations
      const shelters = await Shelter.find({
        location: { $regex: location, $options: 'i' }, // Case-insensitive search
      });
  
      if (shelters.length === 0) {
        return res.status(200).json([]); // Return an empty array if no shelters found
      } else {
        return res.status(200).json(shelters);
      }
    } catch (error) {
      res.status(500).json({ message: 'Error searching shelters', error });
    }
  });
  

export default router;
