const router = require('express').Router();
const {Resource} = require('../../models');

router.get('/', (req, res) => {
    Resource.findAll().then(resourceDB => res.json(resourceDB))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    Resource.create(
        {
            name: req.body.name,
            description: req.body.description,
            link: req.body.link
        }
    ).then(resourceDB => {
        res.json(resourceDB);
    }).catch(err => {
        console.log(err);
        res.status(400).json(err)
    });
});

router.delete('/:id', (req, res) => {
    Resource.destroy({
        where: {
            id: req.params.id
        }
    }).then(resourceDB => {
        if(!resourceDB){
            res.status(4040).json({ message: 'No link found with this ID'})
            return;
        };
        res.json(resourceDB);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

module.exports = router;