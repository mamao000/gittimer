from flask import Flask
from flask import render_template 
from flask import request
from utils.log_tool import read_project, push_log


app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/hello")
def hello():
    return "Hello, World!"

@app.route("/hey")
def hey():
    return "hey"

@app.route('/get_data/<project_id>/<token>', methods=['GET'])
def get_data(project_id, token):
    gitlab_res = read_project(project_id, token)
    return gitlab_res


@app.route('/update_log/<project_id>/<token>', methods=['GET', "POST"])
def update_log(project_id, token):
    request_content = request.json
    # print(type(request_content))
    push_log(request_content, project_id, token)
    return request_content

