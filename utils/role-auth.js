const roleAuth = (req, res, next) => {
    if(req.session.role_id !== 1){
        alert("You don't have permission to do this")
        res.redirect('/dashboard');
    } else {
        next();
    }
};

module.exports = roleAuth;