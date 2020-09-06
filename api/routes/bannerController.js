const express = require('express');
const router = express.Router();
const Banner = require('../models/BannerSchema');

//retorna todos os banners
router.get('/', async (req, res) => {
    try {
        const banner = await Banner.find();
        res.json(banner);
    } catch (err) {
        res.json({ message: err });
    }
});
//A const post está aguardando ser populado pelo reotorno do banco(mongo).

//envia posts

router.post('/', async (req, res) => {
    const banner = new Banner({
        link: req.body.link
    });
    try {
        const savedBanner = await banner.save();
        res.json(savedBanner);
    } catch (err) {
        res.json({ message: err })
    }
});
/*
//Pega um post especifico
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({ message:err });
    }
});

//deletar um post
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.remove({_id: req.params.postId})
        res.json(removedPost);
    } catch (err) {
        res.json({ message:err});
    };
});

//update em um post
router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            { _id: req.params.postId},
            {$set: {title: req.body.title}}
        );
        res.json(updatedPost);
    } catch (err) {
        res.json({ message : err})
    }
}) */

module.exports = router;