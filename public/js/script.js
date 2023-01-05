const posty = document.getElementById('add-post')
const showpost = document.getElementById('post-box')
let isClicked = true;
posty.addEventListener('click', function onClick() {
  if(isClicked){
    showpost.style.display = 'block';
    isClicked = false;
  }else {
    showpost.style.display = 'none';
    isClicked = true;
  }
  });

