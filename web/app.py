from flask import Flask
from flask import render_template
from utils.log_tool import read_project

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

