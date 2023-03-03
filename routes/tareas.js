const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
	const tareas = {
    tareas:[
      {id:"12fre423",name:"Lavar ropa",completed:false},
      {id:"ei8432wr",name:"Cocinar el almuerzo",completed:false},
      {id:"fioe9032",name:"Comprar pan",completed:false},
      {id:"fdkei395",name:"Hacer tarea de Ciencias",completed:true}
    ]
  };

	res.send(tareas);
});

module.exports = router;