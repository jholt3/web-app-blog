require('dotenv').config()
import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://atlas-user-22:Pc0MWTi86uix4FiU@cluster0.exc4v.mongodb.net/post-it')

module.exports.Post = require('./posts')

