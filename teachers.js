const fs = require("fs")
const data = require("./data.json")

//validação dos dados 
exports.post =  function(req, res){

    const keys = Object.keys(req.body)

    for(key of keys){
        if(req.body[key] == ""){
            return res.send("Por Favor! Preencha dos os campos ")
        }
    }
    
    //tratamento dos dados 

    let { avatar_url, name, birth, selec, tipo_aula, atuacao} = req.body


    birth = Date.parse(birth)
    const created_at = Date.now()
    const id = Number(data.instructors.length + 1)

   

    data.instructors.push({
        id,
        avatar_url,
        name,
        birth,
        created_at,
        selec, //seleção
        tipo_aula,
        atuacao
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if(err) return res.send("Erro")

        return res.redirect("/instructors")
    })

    
    //return res.send(req.body)
}


