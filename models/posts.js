// GET /places
const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    post: {type: String, required: true},
    pic: {type: String, default: 'http://placekitten.com/350/350'},
    name: {type: String, required: true},
    time: {type: Date, default: Date.now}
})

//Function that sets time parameter equal to the current time referenced this website "https://www.koyeb.com/tutorials/get-started-with-the-mern-stack-build-a-blog-with-mongodb-atlas"

postSchema.pre('save', (next) => {
    now = new Date();
    if (!this.time) {
        this.time = now;
    }

    next();
})

postSchema.methods.showEstablished = function() {
    return `${this.name} made this post on ${this.date}.`
}

module.exports = mongoose.model('Post', postSchema)