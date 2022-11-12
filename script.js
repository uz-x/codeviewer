function getHtml() {
  requestedURL = document.getElementById("web").value;
  fetch(requestedURL + "/" + htmlEnding).then((resp) => resp.text()).then(function(data) {
    document.getElementById("html").value = data;
  });

  if (document.getElementById("html").value == "" || document.getElementById("html").value == undefined) {
    document.getElementById("html").value = "Error: Code hidden / non-existent";
  }
}
function getCss() {
  requestedURL = document.getElementById("web").value;
  fetch(requestedURL + "/" + cssEnding).then((resp) => resp.text()).then(function(data) {
    document.getElementById("css").value = data;
  });
  if (document.getElementById("css").value == "" || document.getElementById("css").value == undefined) {
    document.getElementById("css").value = "Error: Code hidden / non-existent";
  }
}
function getJs() {
  requestedURL = document.getElementById("web").value;
  fetch(requestedURL + "/" + jsEnding).then((resp) => resp.text()).then(function(data) {
    document.getElementById("js").value = data;
  });
  if (document.getElementById("js").value == "" || document.getElementById("js").value == undefined) {
    document.getElementById("js").value = "Error: Code hidden / non-existent";
  }
}

function getData() {
  clearInterval(i);
  getHtml(); getCss(); getJs();
  document.getElementById("status").innerHTML = "Status: Done";
}

function run() {
  requestedURL = document.getElementById("web").value;
  if (requestedURL.startsWith("https://") == false && requestedURL.startsWith("http://") == false) {
    alert("Please add http:// or https:// to your website!");
  } else {
    document.getElementById("html").value = "";
    document.getElementById("css").value = "";
    document.getElementById("js").value = "";
  
    htmlEnding = document.getElementById("htmlc").value;
    cssEnding = document.getElementById("cssc").value;
    jsEnding = document.getElementById("jsc").value;

    document.getElementById("status").innerHTML = "Status: Getting data";
    i = setInterval(getData, Math.random()*2.14*1000);
  }
  /*
  document.getElementById("html").value = getData(requestedURL + "/" + htmlEnding);
  document.getElementById("css").value = getData(requestedURL + "/" + cssEnding);
  document.getElementById("js").value = getData(requestedURL + "/" + jsEnding);
  */
}
