const db = require('./')


const seed_zombies = [
    {
        name: "David",
        age: 10,
        image: "/assets/no_image.jpg",
        eye_color: "brown",
        appetite: "Picky Eater",
        personality_type: "Codependent",

    },
    {
        name: "Jeanette",
        age: 9,
        image: "/assets/no_image.jpg",
        eye_color: "brown",
        appetite: "Always Hungry",
        personality_type: "Cry Baby",
    },
    {
        name: "PJ",
        age: 13,
        image: "/assets/no_image.jpg",
        eye_color: "blue",
        appetite: "Would Totally Eat Everyone's Brain",
        personality_type: "Extroverted",
    },
    {
        name: "Sid",
        age: 12,
        image: "/assets/no_image.jpg",
        eye_color: "brown",
        appetite: "Picky Eater",
        personality_type: "Introverted",
    },
    {
        name: "Madeleine",
        age: 18,
        image: "/assets/no_image.jpg",
        eye_color: "green",
        appetite: "Always Hungry",
        personality_type: "Untrusting",
    },
    {
        name: "Ruth",
        age: 14,
        image: "/assets/no_image.jpg",
        eye_color: "brown",
        appetite: "Would Totally Eat Everyone's Brain",
        personality_type: "Close Talker",
    },
]

const seed_users = [
    {
        username: "DMilton",
        password: "123",
        location: "Los Angeles"
    }
]


db.Zombie.deleteMany({}, (err, zombies) => {
    if (err) {
        console.log("Error occured in remove", err)
    } else {
        console.log("Removed all zombies")

        db.Zombie.insertMany(seed_zombies, (err, zombies) => {
            if (err) {
                console.log("Error occured in insertMany", err)
            } else {
                console.log("Created", zombies.length, "zombies")
            }
        })
    }
})

db.User.deleteMany({}, (err, user) => {
    if (err) {
        console.log("Error occured in remove", err)
    } else {
        console.log("Removed all user entries")

        db.User.insertMany(seed_users, (err, users) => {
            if (err) {
                console.log("Error occured in insertMany", err)
            } else {
                console.log("Created", users.length, "users")
            }
        })
    }
})