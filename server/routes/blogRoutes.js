const express = require('express');
const router = express.Router();
// const recipeController = require('../controllers/recipeController')

/**
 * App Routes
 */

// router.get('/blog', recipeController)
router.get('/ ', (req, res)=>{
    res.send('This is blog')
})

module.exports= router;
