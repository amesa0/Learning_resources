var request = new XMLHttpRequest();
var page_num = 1;
var tag = 'thighs';
var page = 'https://danbooru.donmai.us/posts.json?page=' + page + '&tags=' + tag + "'";


const app = document.getElementById('root');
const container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(container);


request.open('GET', 'https://danbooru.donmai.us/posts.json?page=1&tags=thighs' , true);
request.onload = function () {

  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    
    data.forEach(post => {
    console.log(post.large_file_url);

    var contains_webm = post.file_ext == 'webm';
    var contains_loli = post.tag_string.includes("loli");
    
    if(contains_webm || contains_loli) {
    }else{
        const img = document.createElement('img');
        img.setAttribute('src', post.large_file_url);
        img.setAttribute('class', 'center');
        container.appendChild(img);
        };
    });
  } else {
    console.log('error');
  }
}

request.send();


