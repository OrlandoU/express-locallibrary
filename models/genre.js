const mongoose = require('mongoose')

const Schema = mongoose.Schema

const GenreSchema = new Schema({
    name: {type: String, maxLength: 100, minLength: 3, required: true},
    category: {type: String, 
        enum: ['fiction', 'romance', 'fiction', 'Slice of Life'], 
        default: 'fiction'}
})

GenreSchema.virtual('url').get(function(){
    return `/catalog/genre/${this._id}`;
})

module.exports = mongoose.model('Genre', GenreSchema)