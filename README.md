# Project Post-it Backend 

This is the server directory for a blog web application named "Post-it"

## Posts Routes
| Method | Path  | Purpose |
| :---:  | :---: |  :---  |
| GET | /api/get/allposts  | Retrieve all posts |
| POST | /api/post/newpost  | Add a new post |
| PUT | /api/put/post | Edit an existing post|
| DELETE | /api/delete/post  | Delete a post |

## User Routes

| Method | Path  | Purpose |
| :---:  | :---: |  :---  |
| POST | /api/posts/newuserprofile  | Create a new user profile |
| GET | /api/get/euserprofile  | Retrieve an existing user profile |
| GET | /api/get/userposts  | Retrieve all posts by a specific user |
| GET | /api/get/ouserprofile  | Retrieve proflie date from another user |
| GET | /api/get/ouserposts  | Retrieve posts from another user |

## Technologies

Express
PostgreSQL

## References

For initial setup of Express Server and PSQL database: https://www.freecodecamp.org/news/fullstack-react-blog-app-with-express-and-psql/