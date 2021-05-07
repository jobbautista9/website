var header = document.getElementsByTagName("header")[0];
fetch("/~job/nav.html")
 .then(response => response.text())
 .then(text => header.innerHTML = text);