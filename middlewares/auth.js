const { GetUserBySessionId } = require('../controllers/auth');

 function RestrictToLog(req, res, next) {
  const sid = req.cookies.s_id;
  if (!sid) {
    console.log(' not found  session ID');
      console.log(req.body);
   return res.redirect('/login');
  }


    const user = GetUserBySessionId(sid);
    
    
    if (!user) {
      console.log('User not found for session ID:', sid);

       return res.render('login');
    }

    req.user = user;
    next();
}


function CheckAuth(req, res, next) {
  const sid = req.cookies?.s_id;
  const user =  GetUserBySessionId(sid);
    req.user = user;

    next();
}



module.exports = {
  RestrictToLog,
  CheckAuth,
};
