
function goIni() {
    let n = document.createElement('div');
    n.innerHTML = 'Hi there!';
    document.body.appendChild(n);
    getCss();
  }

  function getxh(file, callbackFunction=null) {
    let xh = new XMLHttpRequest();
    xh.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //let data = JSON.parse(this.responseText);
            if (callbackFunction) {
                callbackFunction(this.responseText);
            }
        }
    };
    xh.open("GET", file, true);
    xh.send();
  }

function getCss() {
    getxh('css.css', revealText);
}

function revealText(data) {
    document.getElementById('div2').innerHTML = data;
}
