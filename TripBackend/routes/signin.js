const {Router}=require('express')
const userMiddleware=require('../middlewares/user')
const {User}=require('../db/index')
const signupSchema=require('../middlewares/types')
const validate=require('../middlewares/validate')
const router=Router();
router.post('/signup',validate(signupSchema),(req,res)=>
{
    const username=req.body.username;
    const password=req.body.password;
    User.create({
        username:username,
        password:password
    }).then(function(){
        res.json({
            message:'User created successfully'
        })
    })
    .catch(function(){
        res.json({
            message:'User not created'
        })
    })
})
module.exports=router;