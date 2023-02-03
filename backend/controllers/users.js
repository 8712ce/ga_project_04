// DEPENDENCIES //
const express = require('express')
const router = express.Router()
const jwt = require('jwt-simple')

// CONFIGS //
const passport = require('../config/passport')
const config = require('../config/config')

// MODELS //
const db = require('../models')
const User = db.User

// function isAuthenticated(req, res, next){
//     if(req.headers.authorization){
//         next()
//     } else {
//         res.sendStatus(401)
//     }
// }


// SIGN UP CREATE ROUTE //
router.post('/signup', (req, res) => {
	// verify the request body has an email and password
	if (req.body.username && req.body.password) {
		// make a newUser object with the request body and password
		let newUser = {
			username: req.body.username,
			password: req.body.password,
            location: req.body.location
		}
		// check if a user exists with the same email and password
		User.findOne({ username: req.body.username })
			.then((user) => {
				// if a user doesn't exist...
				if (!user) {
					// ...create a new one.
					User.create(newUser)
						.then(user => {
							// if the database creates a user successfully, assign a JWT to the user and send the JWT as the response
							if (user) {
								const payload = {
									id: user._id
								}
								const token = jwt.encode(payload, config.jwtSecret)
								res.json({
									token: token
								})
								// send an error if the database fails to create a user
							} else {
								res.sendStatus(401)
							}
						})
					// send an error if the user already exists
				} else {
					res.sendStatus(401)
				}
			})
		// send an error if the request body does not have an email and password
	} else {
		res.sendStatus(401)
	}
})


// router.post('/signup', async (req, res) => {
//     const foundUser = await db.User.findOne({ username: req.body.username})
//     console.log(foundUser)
//     if(!foundUser){
//         const createdUser = await db.User.create(req.body)
//         const payload = {id: createdUser._id}
//         const token = jwt.encode(payload, config.jwtSecret)
//         res.json({
//             user: createdUser,
//             token: token
//         })
//     } else {
//         res.sendStatus(401)
//     }
// })



// // LOG IN ROUTE //
// router.post('/login', async (req, res) => {
//     const foundUser = await db.User.findOne({ username: req.body.username})
//     if(req.body.password === foundUser.password){
//         const payload = {id: foundUser._id}
//         const token = jwt.encode(payload, config.jwtSecret)
//         const userPosts = await db.Post.find({ user: foundUser._id })
//         res.json({
//             user: foundUser,
//             token: token,
//             posts: userPosts
//         })
//     } else {
//         res.sendStatus(401)
//     }
// })



// // TOKEN SHOW //
// router.get('/token', isAuthenticated, async (req, res) => {
//     const token = req.headers.authorization
//     const decoded = jwt.decode(token, config.jwtSecret)
//     const foundUser = await db.User.findById(decoded.id)
//     const userPosts = await db.Post.find({ user: foundUser._id })
//     res.json({
//         user: foundUser,
//         posts: userPosts
//     })
// })



// // INDEX //
// router.get('/', async (req, res) => {
//     const allUsers = await db.User.find({})
//     res.json(allUsers)
// })



// // SHOW //
// router.get('/:id', async (req, res)=> {
//     const foundUser = await db.User.findById(req.params.id)
//     const userPosts = await db.Post.find({ user: foundUser._id })
//     res.json({
//         user: foundUser,
//         posts: userPosts
//     })
// })



// // UPDATE //
// router.put('/:id', isAuthenticated, async (req, res) => {
//     const updatedUser = await db.User.findByIdAndUpdate(
//         req.params.id,
//         req.body,
//         {new: true}
//     )
//     res.json(updatedUser)
// })



// // DELETE //
// router.delete('/:id', isAuthenticated, async (req, res)=> {
//     await db.Post.deleteMany({ user: req.params.id})
//     await db.User.findByIdAndDelete(req.params.id)
//     res.sendStatus(200)
// })

// module.exports = router



// LOG IN ROUTE (find existing user)
router.post('/login', async (req, res) => {
	// attempt to find the user by their email in the database
	const foundUser = await User.findOne({ username: req.body.username })
	// check to:
	// 1. make sure the user was found in the database
	// 2. make sure the user entered in the correct password
	if (foundUser && foundUser.password === req.body.password) {
		// if the above applies, send the JWT to the browser
		const payload = { id: foundUser.id }
		const token = jwt.encode(payload, config.jwtSecret)
		res.json({
			token: token,
			user: foundUser
		})
		// if the user was not found in the database OR their password was incorrect, send an error
	} else {
		res.sendStatus(401)
	}
})


// GET USER DATA (if user is logged in)
router.get('/', async (req, res) => {
	const token = req.headers.authorization
    const decode = jwt.decode(token, config.jwtSecret)
	const foundUser = await db.User.findById(decode.id)
	// console.log(decode.id)
	res.json(foundUser)
	// const foundUser = await User.findById(req.params.id)
	// if (foundUser) {
	// 	res.json(foundUser)
	// } else {
	// 	res.sendStatus(404)
	// }
})


module.exports = router; 