const express = require("express")
const routes = express.Router()

routes.get("/", function(req, res){
    return res.redirect("/instructors")
})

routes.get("/instructors", function(req, res){
    return res.render("instructors/students")
})

routes.get("/instructors", function(req, res){
    return res.render("instructors/teachers")
})





module.exports = routes