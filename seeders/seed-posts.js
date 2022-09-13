const db = require('../models')

db.Post.create([{
    post: 'This is the first test post.',
    pic: 'http://placekitten.com/300/300',
    name: 'User 1',
    date: '09.13.2022'
}, {
    post: 'This is the second test post.',
    pic: 'http://placekitten.com/300/300',
    name: 'User 2',
    date: '09.13.2022'
}])
.then(() => {console.log('Success!')
process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})
