// DEPENDENCIES //
const db = require("../models")
const express = require('express')
const router = express.Router()
const jwt = require('jwt-simple')
const config = require('../config/config')


function isAuthenticated(req, res, next){
    if(req.headers.authorization){
        next()
    } else {
        console.log(req.headers)
        res.sendStatus(401)
    }
}


// NEW (GET/READ) ROUTE:  THIS ROUTE RENDERS A FORM THE USER WILL USE TO POST (CREATE) A NEW ZOMBIE. //
// router.get('/new', (req, res) => {
//     res.render('newZombie', {
//         tabTitle: "Post a Zombie"
//     })
// })





// CREATE (POST) ROUTE:  THIS ROUTE RECEIVES THE POST REQUEST SENT FROM THE NEW ROUTE ABOVE, PARSES IT INTO A ZOMBIE OBJECT, CREATES THE ZOMBIE OBJECT AS A DOCUMENT IN THE ZOMBIES COLLECTION, AND REDIRECTS THE USER BACK TO THE ROOT/HOME PAGE. //
router.post('/', isAuthenticated, async (req, res) => {
    const createdZombie = await db.Zombie.create(req.body)
    const token = req.headers.authorization
    const decoded = jwt.decode(token, config.jwtSecret)
    createdZombie.user = decoded.id
    createdZombie.save()
    res.json(createdZombie)
})





// INDEX ROUTE (STRETCH GOAL FEATURE) //
router.get('/', async (req, res) => {
    const allZombies = await db.Zombie.find({}).populate('user')
    res.json(allZombies)
})





// SHOW (GET/READ) ROUTE:  THIS ROUTE WILL SHOW AN INDIVIDUAL ZOMBIE DOCUMENT USING THE URL PARAMETER (WHICH WILL ALWAYS BE THE ZOMBIE DOCUMENT'S ID). //
// router.get('/show/:id', (req, res) => {
//     db.Zombie.findById(req.params.id, (err, zombie) => {
        
//     })
// })

router.get("/show", async (req, res) => {
    // console.log(req.headers.authorization)
    const token = req.headers.authorization
    const decoded = jwt.decode(token, config.jwtSecret)
    const zombie = await db.Zombie.findOne({"user": decoded.id})
    res.json(zombie);
})



// router.get('/:id', async (req, res) => {
// 	const zombie = await db.Zombie.findById(req.params.id);
// 	res.json(zombie);
// });





// DELETE ROUTE:  THIS ROUTE ALLOWS US TO DELETE AN INDIVIDUAL ZOMBIE DOCUMENT USING THE URL PARAMETER (WHICH WILL ALWAYS BE THE ZOMBIE DOCUMENT'S ID). //
router.delete('/:id', async (req, res) => {
	await db.Zombie.findByIdAndDelete(req.params.id);
	res.json({ status: 200 });
});






// UPDATE (PUT) ROUTE:  THIS ROUTE RECEIVES THE PUT REQUEST SENT FROM THE EDIT ROUTE ABOVE, PARSES IT INTO A ZOMBIE OBJECT, EDITS THE SPECIFIED ZOMBIE OBJECT AS A DOCUMENT IN THE ZOMBIES COLLECTION, AND REDIRECTS TEH USER BACK TO THE SHOW PAGE FOR TEH UPDATED ZOMBIE. //
router.put("/:id", async (req, res) => {
	const updatedZombie = await db.Zombie.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true }
	);
	res.json(updatedZombie);
});


// IS AUTHENTICATED UPDATE //
// router.put('/:id', isAuthenticated, async (req, res) => {
//     const foundZombie = await db.Post.findById(req.params.id)
//     const token = req.headers.authorization
//     const decoded = jwt.decode(token, config.jwtSecret)
//     if(foundZombie.user == decoded.id){
//         const updatedZombie = await db.Zombie.findByIdAndUpdate(
//             req.params.id,
//             req.body,
//             {new: true}
//         )
//         res.json(updatedZombie)
//     }
// })



module.exports = router