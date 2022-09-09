const router = require('express').Router()
const Comment = require('../models/comment')
const User = require('../models/user')

//HOMEPAGE
router.get('/', async (req, res) => {
    try {
        console.log('Home page')
    } catch (error) {
        console.log(error)
        res.status(500).json({ 'message': 'Error' })
    }
})

//BLOG INDEX PAGE
router.get('/blogs', async (req, res) => {
try {
    console.log('blog index page')
} catch (error) {
    console.log(error)
    res.status(500).json({ 'message': 'Error' })
}
},

//CREATE A NEW BLOG
router.post('/blogs', async (req, res) => {
    try {
        let comments = await Comment.find()
        res.send(comments)
    } catch (error) {
        console.log(error)
        res.status(500).json({ 'message': 'Error' })
    }
},

//NEW BLOG FORM PAGE
router.get('/blogs/new', async (req, res) => {
    try {
        console.log('new blog page')
    } catch (error) {
        console.log(error)
        res.status(500).json({ 'message': 'Error' })
    }
    },

//BLOG POST DETAILS
router.get('/blogs/:id', async (req, res) => {
    try {
        console.log('blog details page')
    } catch (error) {
        console.log(error)
        res.status(500).json({ 'message': 'Error' })
    }
    },

//UPDATE A BLOG POST
router.put('/blogs/:id', async (req, res) => {
    try {
        console.log('update blog')
    } catch (error) {
        console.log(error)
        res.status(500).json({ 'message': 'Error' })
    }
    },

//FORM PAGE FOR EDITING EXISTING BLOG
router.get('/blogs/:id/edit', async (req, res) => {
    try {
        console.log('edit existing blog')
    } catch (error) {
        console.log(error)
        res.status(500).json({ 'message': 'Error' })
    }
    },

//DELETE A BLOG POST
router.delete('/blogs/:id', async (req, res) => {
    try {
        console.log('delete blog')
    } catch (error) {
        console.log(error)
        res.status(500).json({ 'message': 'Error' })
    }
    },




module.exports = router