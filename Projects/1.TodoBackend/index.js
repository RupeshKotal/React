const express = require('express');
const app = express();
app.use(express.json());
const { createTodo,updateTodo } = require("./zod") ; 
const {todoDb} =require('./db')
const cors = require('cors')

app.use(cors({}));


app.post('/Todo',async (req,res)=>{
  const createpayload = req.body;
  const parsepayload = createTodo.safeParse(createpayload)

  if(!parsepayload.success){
    res.status(411).json({
        msg:"invalid input"
    })
  }else{
      await todoDb.create({
        title:req.body.title,
        description:req.body.description,
        status:false
      })
      res.json({
        msg:"todo created"
      })
  }

})


app.get( '/Todos',async(req,res)=>{
 const get = await todoDb.find({})

 res.json({
    get
 })
    
})

app.put('/complete',async (req,res)=>{
const createpayload = req.body;
const parsepayload = updateTodo.safeParse(createpayload);

if(!parsepayload.success){
    res.status(411).json({
        msg:"invalid input"
    })
  }else{
   await todoDb.updateOne({
      _id:req.body.id
    },{
       status:true
    })
  }

  res.json({
    msg:"to do updated"
  })
  

})

app.listen(3000)