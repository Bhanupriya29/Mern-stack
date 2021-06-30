const { Router } = require("express");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
    console.log(req.body);
    try{
        fetch('https://jsonplaceholder.typicode.com/posts')
       .then(response => response.json())
       .then(data => console.log(data));
    }
    catch(err){
        res.json({message: err});
    }
  });

  module.exports=router;