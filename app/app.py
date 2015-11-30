
import json
from flask import Flask
from flask import render_template

app = Flask (__name__)

@app.route('/')
def index():
	file = open('mock/index.json','r')
	json_dict = json.loads(file.read())
	file.close()
	return render_template('pages/index.html',blog_list = json_dict["blog_list"],article_tag = json_dict["article_tag"],article_date = json_dict["article_date"],tag= json_dict["tag"]);

@app.route('/post')
def post():
	file = open('mock/post.json','r')
	json_dict = json.loads(file.read())
	file.close()
	return render_template('pages/post.html',comment_list = json_dict["comment_list"],blog = json_dict["blog"]);

if __name__ == '__main__':
	app.run(debug=True)