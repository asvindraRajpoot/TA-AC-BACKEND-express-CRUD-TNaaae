var express=require('express');
var router=express.Router();
var User=require('../models/user');


router.get('/new',(req,res)=>{

    res.render('userForm');
})

router.post('/',(req,res)=>{
    console.log(req.body);
    User.create(req.body,(err,user)=>{
        if(err)return err;
        console.log(`${user.name} is created`);
    })
    res.redirect('/users');
})





router.get('/',(req,res,next)=>{
    User.find({},(err,users)=>{

        if(err)return next(err);
        res.render('userList',{users:users});
    })
   
})


router.get('/:id',(req,res,next)=>{
    const id=req.params.id;


    User.findById(id,(err,user)=>{
        if(err)return next(err);
        res.render('user',{user:user});
    })

})
module.exports=router;