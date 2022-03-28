/**
 * @file Implements mongoose schema for tuits
 */
const mongoose = require('mongoose');
const TuitSchema = new mongoose.Schema({
    tuit: {type: String, required: true},
    postedOn: {type: Date, default: Date.now},
    postedBy: {type: mongoose.Schema.Types.ObjectId,ref: "UserModel"},
    stats: {
        replies: {type: Number, default: 0},
        retuits: {type: Number, default: 0},
        likes: {type: Number, default: 0}
    }

}, {collection: 'tuits'});

export default TuitSchema;