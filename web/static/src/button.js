function close_win(win_id){
                el = document.querySelector(win_id);
                el.style.visibility = 'hidden'
}

function display_win(win_id){
            el = document.querySelector(win_id);
            el.style.visibility = 'visible'
}

function send_GL_Request(Project_id, access_token) {
  // let url = "http://localhost:5000?proj_id=" + Project_id;
  let url = "http://localhost:5000/get_data/" + Project_id +"/" + access_token;
  // console.log(url_2)
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      // console.log(data);
      // console.log("in fetch function");
      return data
    })
    .catch(error => console.log(error));
}


