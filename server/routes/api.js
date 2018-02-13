const express = require('express');
const router = express.Router();
const Target = require('../models/table/target');
const Contact = require('../models/table/contact');

router.get('/targets', (req, res) => {
    Target.findAll({
        where:{userId: 1}
    }).then((targets) => res.json(targets))
})
.get('/contacts', (req, res) => {
    Contact.findAll({
        where:{userId: 1}
    }).then((contacts) => res.json(contacts))
})

module.exports = router;
