const register = async (res, req) => {
    const { name, lastname, username, email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }
        user = new User({ name, lastname, username, email, password });
        await user.save();
        res.json({ msg: 'User registered' });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: user._id }, Buffer.from(process.env.JWT_SECRET, 'base64').toString(), { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
}

const user = async (req, res) => {
    try {
        const user = await User.findById(req.id).select('-password');
        const data = { name: user.name, lastname: user.lastname, username: user.username, email: user.email };
        res.json(data);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
}

const update = async (req, res) => {
    try {
        const user = await User.findById(req.id);
        if (!user) {
            return res.status(400).json({ msg: 'User not found' });
        }
        const { name, lastname, email } = req.body;
        user.name = name;
        user.lastname = lastname;
        user.email = email;
        await user.save();
        res.json({ msg: 'User updated' });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    register, login, user, update
}