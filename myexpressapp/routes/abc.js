var express=require('express');
var router = express();

router.get('/', function (req, res) {
  res.send('testing get');
});

router.post('/', function (req, res) {
  res.send('testing post');
});

module.exports=router;
