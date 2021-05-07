var header = document.getElementsByTagName("header")[0];
fetch("/nav.html")
 .then(response => response.text())
 .then(text => header.innerHTML = text);