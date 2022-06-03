const mongoose = require("mongoose");
const validator = require("validator");





const rent_a_car = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },

    

    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("invalide email")
            }
        }
    },

    Phone: {
        type: String,
        required: true,
    },
    CNIC: {
        type: String,
        required: true,
    },


    Address: {
        type: String,
        required: true,
    },


    SelectedCity: {
        type: String,
        required: true,
    },

    Date: [{
        type: String,
        required: true,
    }],

    Carid: {
        type: String,
        required: true,
    },

    CarOnweremail: {
        type: String,
        required: true,
    },

    Carname: {
        type: String,
        required: true,
    },

    CarModel: {
        type: String,
        required: true,
    },

    Carusername: {
        type: String,
        required: true,
    },

    Carnumber: {
        type: String,
        required: true,
    },

    Carimage: {
        type: String,
        required: true,
    },

    Carprice:{
        type: String,
        required: true,
    },




});



const bookingrequests = new mongoose.model('USERS', rent_a_car)
module.exports = bookingrequests;