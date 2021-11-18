const withAuth = (req, res, next) => {
    if(!req.session.loggedIn){
        res.redirect('/employee-login');
    } else {
        next();
    }
};

module.exports = withAuth;