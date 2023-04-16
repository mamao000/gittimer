import gitlab
from log_tool import create_log


def push_log(requset_content, project_id, access_token):
    # Replace these values with your GitLab access token and project ID
    ACCESS_TOKEN = access_token
    PROJECT_ID = project_id

    # Create a GitLab API client using access token
    gl = gitlab.Gitlab('https://gitlab.com', private_token=ACCESS_TOKEN)

    # Find the project by ID
    project = gl.projects.get(PROJECT_ID)

    # Create a new file called readme.md with some initial content
    # file_content = 'This is a README file.\n' # create md format content
    file_content = create_log(request= requset_content)
    
    
    file = project.files.create({'file_path': 'test_readme.md', 'branch': 'main', 'content': file_content, 'author_email': 'api_test@example.com', 'author_name': 'api_test', "commit_message":"api testing"})

    ### debug ###
    # # commit the file upload to the project's default branch
    # project.default_branch().commit('Initial commit', actions=[{'action': 'create', 'file_path': 'test_readme.md', 'content': file_content}])

    return
