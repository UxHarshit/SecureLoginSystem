const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name : { type: String, required: true },
    lastname : { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email : { type: String, required: true, unique: true },
});

userSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;