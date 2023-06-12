const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema
    (
        {
            name: { type: String },
            age: { type: Number },
            gender: { type: String },
            city: { type: String },
        },
        {
            timestamps: true,
        }
    );

  module.exports = mongoose.model('user', UserSchema, 'users');;