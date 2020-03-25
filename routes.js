const express = require("express")
const routes = express.Router()
const teachers = require("./teachers")

routes.get("/", function(req, res){
    return res.redirect("/instructors")
})

routes.get("/instructors", function(req, res){
    return res.render("instructors/students")
})

routes.get("/instructors/teachers", function(req, res){
    return res.render("instructors/teachers")
})

routes.post("/instructors", teachers.post)

routes.post("/instructors", function(req,res){
    return res.send("recebido")
})





module.exports = routes