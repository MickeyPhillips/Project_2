const withAuth = (req, res, next) => {
    console.log('here');
    if(!req.session.loggedIn){
        res.redirect('/employee-login');
    } else {
        next();
    }
};

module.exports = withAuth;