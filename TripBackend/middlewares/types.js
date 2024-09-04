const {z}=require('zod');
const signupSchema=z.object({
    username:z.string({
        required_error:"Name is required"
    })
    .trim()
    .min(3,{message:"Name must be at least of 3 characters"})
    .max(255,{message:"Name must not be more than 255 characters"}),
    password:z.string({
        required_error:"Password is required"
    })
    .trim()
    .min(6,{message:"Password must be at least of 6 characters"})
    .max(255,{message:"Password must not be more than 255 characters"})

});
module.exports=signupSchema