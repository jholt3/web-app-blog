// GET /places
const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
    post: {type: String, required: true},
    pic: {type: String, default: 'http://placekitten.com/350/350'},
    name: {type: String, required: true},
    date: {type: Number, required: true,
}
})

placeSchema.methods.showEstablished = function() {
    return `${this.name} made this post on ${this.date}.`
}

module.exports = mongoose.model('Post', placeSchema)