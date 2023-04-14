"""
create MD/JSON format content based on request object
"""
import gitlab

def create_log(request, previous_log):
    ### parse request content to json format log###
    log_json = {}
    ###############################################
    
    return log_json

def read_log(project_id, access_token, log_name):
    ACCESS_TOKEN = access_token
    PROJECT_ID = project_id

    # Create a GitLab API client using your access token
    gl = gitlab.Gitlab('https://gitlab.com', private_token=ACCESS_TOKEN)

    # Find the project by ID
    project = gl.projects.get(PROJECT_ID)

    # Find the log file in the project (need file path, branch name)
    readme_file = project.files.get(file_path=log_name, ref='main')

    # Print the contents of the README.md file
    print(readme_file.decode())

    ### parse log to json data ###
    log_content = {}
    ##############################
    return log_content