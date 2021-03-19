const express = require('express')
const router = express.Router()
const Post = require('../models/post')

//get back all the post
router.get('/',async (req,res)=>{
    
try {
    const posts = await Post.find() 
    res.json(posts)

} catch (error) {
    res.json({message:err})
}

})
//submi the post
router.post('/',async (req,res) =>{

    const post = new Post({
        title : req.body.title,
        description : req.body.description
    });
try{
    const newPost = await post.save()
  res.json(newPost)
}
catch(err){
    res.json({message:err})    

}
});
//getting specific post
router.get('/:postId', async (req,res)=>{

try {
    const post = await Post.findById(req.params.postId)
    res.json(post)
} catch (err) {
    res.json({message:err})
}
})
//deleting
router.delete('/:postId', async (req,res)=>{

    try {
        const removePost = await Post.remove({_id:req.params.postId})
        res.json(removePost)
    } catch (err) {
        res.json({message:err})
    }
})
//update the post
router.patch('/:postId', async (req,res)=>{

    try {
        const updatePost = await Post.updateOne({_id:req.params.postId},{$set:{title:req.body.title}})
        res.json(updatePost)
    } catch (err) {
        res.json({message:err})
    }
})
module.exports = router