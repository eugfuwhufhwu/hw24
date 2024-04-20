const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config()


const port = process.env.PORT || 3001
const app = express()


const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
})


const UserModel = mongoose.model('users', userSchema)

mongoose.connect(process.env.URL_MONGODB)


app.get('/users', async (req, res) => {
    try {
        await UserModel.updateOne({ name: "Ned Stark" }, { $set: { email: "abcdefghik@gmail.com" } })
        const user = UserModel.findOne({ name: "Ned Stark" })
        res.send(user)
    }
    catch (err) {
        console.error(err, 'ошибка при получении пользователя')
    }
})


app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})