function onBtnClickHandle(href){
  var body = document.getElementById('body');
  body.classList.add('fade-out');
  setTimeout(function(){
    window.location = href;
  }, 2000);
}
