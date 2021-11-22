const router = require('express').Router();
const {Employee, Role} = require('../../models');

router.get('/', (req, res) => {
    Employee.findAll({
        attributes: {exclude: ['password','role_id']},
    }).then(userData => res.json(userData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Employee.findOne({
        attributes: {exclude: ['password']},
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Role,
                attributes: ['name']
            }
        ]
    }).then(userData => {
        if(!userData){
            res.status(404).json({ message: "No user found with this ID"});
            return;
        }
        res.json(userData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//create user
router.post('/', (req, res) => {
    Employee.create({
        email: req.body.email,
        password: req.body.password,
        role_id: req.body.role_id
    }).then(employeeDB => {
        req.session.save(() => {
            req.session.email = employeeDB.email,
            req.session.loggedIn = true;
            req.session.role_id = employeeDB.role_id;

            res.json(employeeDB);
        })
    }).catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
});

//login
router.post('/login', (req, res) => {
    Employee.findOne({
        where: {
            email: req.body.email
        }
    }).then(employeeDB => {
        if(!employeeDB){
            res.status(400).json({ message: 'No user with that email address'});
            return;
        }

        const validPassword = employeeDB.checkPassword(req.body.password);
        if(!validPassword){
            res.status(400).json({ message: 'Incorrect password' });
            return;
        }
        if(employeeDB.role_id === 1){
            req.session.save(() => {
                req.session.email = employeeDB.email;
                req.session.loggedIn = true;
                req.session.role_id = employeeDB.role_id;
                req.session.admin = true;

                res.json({ employee: employeeDB, message: 'You are now logged in'})
            })
        } else {
            req.session.save(() => {
                req.session.email = employeeDB.email;
                req.session.loggedIn = true;
                req.session.role_id = employeeDB.role_id;
                req.session.admin = false;

                res.json({ employee: employeeDB, message: 'You are now logged in'})
            })
        }
    })
});

//logout
router.post('/logout', (req, res) => {
    if(req.session.loggedIn){
        req.session.destroy(() => {
            res.status(204).end();
        })
    } else {
        res.status(404).end();
    }
})
router.delete('/:id', (req, res) => {
    Employee.delete({
        where:{
            id: req.params.id
        }
    }).then(employeeDB => {
        if(!employeeDB){
            res.status(400).json({ message: "No employee found with this ID"});
            return;
        }

        res.json(employeeDB);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
})

module.exports = router;