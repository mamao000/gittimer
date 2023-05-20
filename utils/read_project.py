import gitlab


def read_project(project_id, access_token):
    # Replace these values with your GitLab access token and project ID
    ACCESS_TOKEN = access_token
    PROJECT_ID = project_id

    # Create a GitLab API client using your access token
    gl = gitlab.Gitlab('https://gitlab.com', private_token=ACCESS_TOKEN)

    # Find the project by ID
    project = gl.projects.get(PROJECT_ID)

    # Get a list of branches in the project
    branches = project.branches.list()
    print('Branches:')
    for branch in branches:
        print(f'- {branch.name}')

    # Get a list of issues in the project
    issues = project.issues.list(all=True)
    print('Issues:')
    for issue in issues:
        print(f'- #{issue.iid} {issue.title}')

    ### generate response content ###
    project_content = {}
    #################################
    return project_content
