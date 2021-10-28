/*name : Yasaman Barzegar
  Student id: 301072907
  Date: 10/28/2021 
  COMP229 midterm*/
  
exports.home = function(req, res, next) {
    res.render('index', { title: 'Home' });
};
