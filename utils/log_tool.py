"""
create MD/JSON format content based on request object
"""
import gitlab
import json


def create_log(request, log_name, project_id, access_token, branch_name):
    ### parse request content to json format log###
    log_json = read_log(project_id=project_id, access_token=access_token, log_name=log_name, branch_name=branch_name)
    log_json.append(request)
    ###############################################
    
    return log_json

def read_log(project_id, access_token, log_name, branch_name):
    ACCESS_TOKEN = access_token
    PROJECT_ID = project_id

    # Create a GitLab API client using your access token
    gl = gitlab.Gitlab('https://gitlab.com', private_token=ACCESS_TOKEN)

    # Find the project by ID
    project = gl.projects.get(PROJECT_ID)

    # Find the log file in the project (need file path, branch name)
    readme_file = project.files.get(file_path=log_name, ref=branch_name)

    # Print the contents of the README.md file
    # print(readme_file.decode())

    ### parse log to json data ###
    log_content = json.loads(readme_file.decode())
    ##############################
    return log_content

def push_log(request_content: dict, project_id, access_token):
    # Replace these values with your GitLab access token and project ID
    ACCESS_TOKEN = access_token
    PROJECT_ID = project_id

    # Create a GitLab API client using access token
    gl = gitlab.Gitlab('https://gitlab.com', private_token=ACCESS_TOKEN)

    # Find the project by ID
    project = gl.projects.get(PROJECT_ID)

    # Create a new file called readme.md with some initial content
    # file_content = 'This is a README file.\n' # create md format content
    new_file_content = create_log(request= request_content, 
                              log_name="timer_log.json", 
                              project_id=project_id,
                              access_token=access_token,
                              branch_name="api_test")

    # file_dir = '../timer_log.json'
    # write_dict_in_json(file_dir, request_content)

    readme_file = project.files.get(file_path="timer_log.json", ref="api_test")
    readme_file.content = new_file_content
    readme_file.save(branch='api_test', commit_message='log update')
    print('file updated successfully')
    # file = project.files.create({'file_path': 'timer_log.json', 'branch': 'api_test', 'content': file_content, 'author_email': 'api_test@example.com', 'author_name': 'api_test', "commit_message":"api testing"})

    ### debug ###
    # # commit the file upload to the project's default branch
    # project.default_branch().commit('Initial commit', actions=[{'action': 'create', 'file_path': 'test_readme.md', 'content': file_content}])

    return