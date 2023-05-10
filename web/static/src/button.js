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
    let url_2 = "http://localhost:5000/get_data/" + Porject_id +"/" + access_token;
    console.log(url_2)
    res_data = fetch(url_2)
    .then(response => response.text())
    .then(data => alert(data))
    .catch(error => console.log(error)); 
    // console.log(res_data);
    return res_data
  }

