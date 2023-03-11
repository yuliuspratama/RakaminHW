const express = require('express');
const router = express.Router();
const moviesRouter = require('./moviesRouter');
const userRouter = require('./userRouter');

router.use(moviesRouter)
router.use(userRouter)

module.exports = router;
