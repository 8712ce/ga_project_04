import axios from "axios";




// CREATE USER //
export async function createUser(formData) {
    const { data } = await axios.post("users/signup",
    formData)
    return data
};



//  LOG IN TO USER ACCOUNT //
export async function logInToAccount(formData) {
    const { data } = await axios.post("users/login",
    formData)
    return data
};



// CREATE ZOMBIE //
export async function createOffspring(formState) {
    const config = {
        headers: {
            "Authorization": localStorage.getItem("token")
        }
    }
    const { data } = await axios.post("zombies", formState, config)
    return data
};



// EDIT ZOMBIE, GET DATA //
// export async function editOffspring(id) {
//     const editOffspringData = await axios.get(`zombies/${id}`)
//     return editOffspringData.data
// };



// SHOW ZOMBIE //
export async function showRoute() {
    const config = {
        headers: {
            "Authorization": localStorage.getItem("token")
        }
    }
    const shownZombie = await axios.get("zombies/show", config)
    return shownZombie.data
};
    


// GET ALL ZOMBIES // STRETCH GOAL //
// export async function getIndexRoute() {
//     const { data } = await axios.get("zombies")
//     return data
// };



// UPDATE BABY //
export async function updateOffspring(formState) {
    const {_id} = formState;
    const updatedData = await axios.put(`zombies/${_id}`, formState)
    return updatedData.data
};


// DELETE ZOMBIE //
export async function deleteZombie(id) {
    const deleteData = await axios.delete(`zombies/${id}`)
    return console.log("You killed the zombie!")
};