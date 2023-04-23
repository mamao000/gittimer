import gitlab

def read_project(project_id, access_token):
    # Replace these values with your GitLab access token and project ID
    PROJECT_ID = project_id
    ACCESS_TOKEN = access_token

    # Create a GitLab API client using your access token
    gl = gitlab.Gitlab('https://gitlab.com', private_token=ACCESS_TOKEN)

    # Find the project by ID
    project = gl.projects.get(PROJECT_ID)

    branches = project.branches.list()
    issues = project.issues.list()

    project_content = {
        'branches': [branch.name for branch in branches],
        'issues': [issue.title for issue in issues],
        'description': [issue.description for issue in issues]        
    }
    
    project_content['issues'] = [str(issue) for issue in project_content['issues']]
    project_content['description'] = [str(issue) for issue in project_content['description']]
    
    print(type(project_content))
    print(project_content)

    return project_content

if __name__ == '__main__':
    # token name: test
    # token: glpat-xHwrRZyVh7Vkjjx7yxbs
    project_id = 44680445
    access_token = 'glpat-xHwrRZyVh7Vkjjx7yxbs'
    read_project(project_id, access_token)