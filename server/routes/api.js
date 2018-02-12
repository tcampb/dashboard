const express = require('express');
const router = express.Router();
const Target = require('../models/table/target');

router.get('/', (req, res) => {
    Target.findAll({
        where:{userId: 1}
    }).then((targets) => res.json(targets))
});

module.exports = router;
