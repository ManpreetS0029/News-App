'use strict';

const news = document.querySelector('.news');

if (window.location.href === 'http://127.0.0.1:5500/index.html') {
  location.replace('http://127.0.0.1:5500/index.html?category=all');
}

let urlString = window.location.href;
let paramString = urlString.split('?')[1];
let params_arr = paramString.split('&');

for (let i = 0; i < params_arr.length; i++) {
  let pair = params_arr[i].split('=');

  fetch(`https://inshorts.deta.dev/news?category=${pair[1]}`)
    .then(response => response.json())
    .then(data => {
      for (let j = 0; j < data.data.length; j++) {
        const html = `<div class="col-md-3 mt-4">
     <div class="card" style="width: auto; height: 305px; overflow: hidden; line-height:25px;">
      <div class="img-btn">
       <img src="${data.data[j].imageUrl}" class="card-img-top" alt="..." width="150" height="150">
       <a href="${data.data[i].url}" class="btn btn-danger bttn">Read More</a>
       </div>
       <div class="card-body">
         <a href="${data.data[i].url}" style="text-decoration:none;color:black;font-weight:bold;"><p class="card-title">${data.data[j].title}</p></a>
         <p class="card-text" >
           ${data.data[j].content}
         </p>
         <p class="mb-2">
         ...
         </p>
         
       </div>
     </div>
     
     </div>
     `;

        news.insertAdjacentHTML('beforeend', html);
      }
    });
}
