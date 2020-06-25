
vid_overlays = document.getElementsByClassName("opaque");
for (e of vid_overlays) {
  vid = e.classList[1];
  if(window.localStorage.getItem(vid) != null) {
    e.style.display="flex";
    }
}
/*  hide home page */
document.querySelector(".md-nav__item").style.display = "none";


function random_page() {
  elements = document.querySelectorAll("a.md-nav__link");
  el = elements[Math.floor(Math.random()*elements.length)];
  document.location.href = el.href;
}
  
  function changelang(l) {
    elements = document.getElementsByClassName('viden');
    window.localStorage.setItem('lang', l);
    if(l == "fr"){
      for(let i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
      }
    }
    if(l == "bi"){
      for(let i = 0; i < elements.length; i++) {
        elements[i].style.display = "";
      }
    }
  }
  
  if(window.localStorage.getItem("lang") == "fr"){
    elements = document.getElementsByClassName('viden');
    for(let i = 0; i < elements.length; i++) {
      elements[i].style.display = "none";
    }
  }