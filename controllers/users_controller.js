module.exports.profile = function(req, res) {
    return res.render('users', {title: "Users Page"});
}

module.exports.sign_in = function(req, res) {
    return res.render('signin', {title: "Sign-in Page"});
}

module.exports.sign_up = function(req, res) {
    return res.render('signup', {title: "Sign-up Page"});
}