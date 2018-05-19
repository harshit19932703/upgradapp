var express = require('express');
var router = express.Router();
var readqlistfile=require('../queries/qlist');
var addlist=require('../queries/addlist')
var studentlist=require('../queries/studentlist')
var updatestudent=require('../queries/updatestudent');
var deleteques=require('../queries/deleteques');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'UpGradApp' });
});
router.get('/teacher', function(req, res, next) {
res.render('index', { title: 'UpGradApp' });
});
router.get('/student', function(req, res, next) {
res.render('index', { title: 'UpGradApp' });
});
router.get('/author', function(req, res, next) {
res.render('index', { title: 'UpGradApp' });
});

router.get('/getlist',function(req,res){
  readqlistfile(req, function(obj){
			res.json(obj).end();
	})
});
router.post('/addlist',addlist);
router.post('/updatestudent',updatestudent);
router.post('/deleteques',deleteques);
router.get('/getstudentlist',function(req,res){
  studentlist(req, function(obj){
			res.json(obj).end();
	})
});

module.exports = router;
