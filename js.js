'use strict';

function sendRequest() {

    let req = document.querySelector('#txt').value;
    let resp = document.querySelector('#resp');
    resp.innerHTML = '<span class="spinner-grow spinner-grow-sm"></span> <span class="spinner-grow spinner-grow-sm"></span> <span class="spinner-grow spinner-grow-sm"></span> ';
    resp.innerHTML += '<span class="spinner-grow spinner-grow-sm"></span> <span class="spinner-grow spinner-grow-sm"></span> <span class="spinner-grow spinner-grow-sm"></span>';

    if (req) {
        req = 'http://localhost/xavi-mat.github.io/api.php?input=' + req;
        let reqbtn = document.querySelector('#reqbtn');
        reqbtn.disabled = true;
        reqbtn.innerHTML = '<span class="spinner-border spinner-border-sm"></span> Enviando...';
        fetch(req, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((resp)=>resp.json())
            .then((data)=>{
                resp.innerHTML = data.response;
                reqbtn.innerHTML = 'Enviar';
                reqbtn.disabled = false;
            });

    } else {
        resp.innerHTML = 'Please enter a URL';
    }
}