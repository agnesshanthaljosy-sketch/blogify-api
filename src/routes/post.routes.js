const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('A new post has been created!');
});

module.exports = router;