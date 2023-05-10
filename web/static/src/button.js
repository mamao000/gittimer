function close_settimerwin(){
                el = document.querySelector('.win_settimer');
                el.style.visibility = 'hidden'
}

function display_settimerwin(){
            el = document.querySelector('.win_settimer');
            el.style.visibility = 'visible'
}

function send_GL_Request(Porject_id, access_token) {
  // let url = "http://localhost:5000?proj_id=" + Porject_id;
  let url = "http://localhost:5000/get_data/" + Porject_id +"/" + access_token;
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


