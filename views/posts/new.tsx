import React from 'react'
const Def = require('../default')

function new_form () {
    return (
        <Def>
            <main>
                <h1>Add a New Post</h1>
                <form method='POST' action='/posts'>
                    <div className='form-group'>
                        <label htmlFor='title'>Title</label>
                        <input className='form-control' id='title' name='title' required/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='post'>Post</label>
                        <input className='form-control' id='post' name='post' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='pic'>Pic</label>
                        <input className='form-control' type='url' id='pic' name='pic' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='user'>Username</label>
                        <input className='form-control' id='user' name='user' />
                    </div>
                    <input className='btn-primary' type='submit' value='Add Post' />
                </form>
            </main>
        </Def>
    )
}

module.exports = new_form
