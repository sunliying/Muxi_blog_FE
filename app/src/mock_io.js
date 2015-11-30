var fs = require('fs'),
	path = require('path'),
	Mock = require('mockjs');
var data1 = require('./mock_template/index.js');
var data2 = require('./mock_template/post.js');

var result1 = Mock.mock(data1.obj);
var result2 = Mock.mock(data2.obj);

var json_s1 = JSON.stringify(result1);
var json_s2 = JSON.stringify(result2);

fs.open("../mock/index.json","w",0644,function(e,fd){
	if (e) throw e;
	fs.write(fd,json_s1,0,'utf8',function(e){
		if (e) throw e;
		fs.closeSync(fd);
	});
});

fs.open("../mock/post.json","w",0644,function(e,fd){
	if (e) throw e;
	fs.write(fd,json_s2,0,'utf8',function(e){
		if (e) throw e;
		fs.closeSync(fd);
	});
});