var express=require('express');
var router = express();

router.post('/', function (req, res) {
  res.send('post method...');
})
module.exports=router;