var express=require('express');
var router=express.Router();



router.get('/',(req,res)=>{
    //
    res.send('it is index');
})



module.exports=router;