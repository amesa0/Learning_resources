var request = new XMLHttpRequest();
var parser = new DOMParser();
var site = 'https://cors-anywhere.herokuapp.com/https://gelbooru.com/index.php?page=dapi&s=post&q=index';


request.onreadystatechange = function() {

  var data = request.responseText;

  if(request.readyState == XMLHttpRequest.DONE) {
    alert(request.responseText);
    console.log(request.responseText.);


  }
}

request.open('GET', 'https://cors-anywhere.herokuapp.com/https://gelbooru.com/index.php?page=dapi&s=post&q=index', true);
request.send();
//
// request.onload = function () {
//
// var data = XML.parse(this.response);
//
//   if (request.status >= 200 && request.status < 400) {
//     data.forEach(post => {
//       console.log(post.file_url);
//     });
//   } else {
//     console.log('error');
//   }
// }
//
// request.send();
