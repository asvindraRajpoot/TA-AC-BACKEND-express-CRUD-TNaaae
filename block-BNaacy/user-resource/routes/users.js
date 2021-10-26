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

router.get('/',(req,res)=>{
    res.render('userList');
})

module.exports=router;