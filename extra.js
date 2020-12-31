
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

  parents = decodeURI(window.location.href).split('/');
  parent = parents[parents.length-3];
  url = parents.slice(0, parents.length-2).join('/');

  if(parents.length > 6) {
  menu = document.getElementsByClassName('md-nav--secondary')[0];
  if(menu.innerText == "") {
    menu.style["padding-left"] = "1rem";
    menu.innerHTML = '<a href="'+url+'"><i class="fa fa-arrow-left" aria-hidden="true"></i> '+parent+'</a><br/><br>';
  }
  else {
  x =  document.getElementsByClassName('md-nav__title');
  bartitle = x[x.length-1];
  bartitle.innerHTML = '<a href="'+url+'"><i class="fa fa-arrow-left" aria-hidden="true"></i> '+parent+'</a><br/><br>';
  bartitle.innerHTML += 'Aller à...';
  }
}

  var e_mainFrame = document.getElementById('frame');
  var e_title = document.getElementById('pvidtitle');
  var e_logo = document.getElementById('pchanlogo_img');
  var e_desc = document.getElementById('pvid_desc');
  var e_channame = document.getElementById('pchan_name');
  var e_extr = document.getElementById('extr');
  var e_social = document.querySelector('#pchan_social');
  
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var player;
      function onYouTubeIframeAPIReady() {}
      function ready_player(v) {
        player = new YT.Player('player', {
          width: '100%',
          //height:'30vw',
          videoId: v,
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });}

        function onPlayerReady(event) {
          lc = document.querySelector('#left_content');
          lc.style['padding-top']="";
          lc.style['background-color']="";
          a = lc.offsetWidth;
          player.setSize(a, 9/16*a);
          event.target.playVideo();
        }
        function onPlayerStateChange(event) {
          if (event.data == YT.PlayerState.ENDED) {
              idx = player.getVideoUrl().slice(-11);
              next_video = document.querySelector('#X'+idx).nextElementSibling.id.slice(1);
              changevid(next_video);
          }
        }

  function changevid(v) {
    if(player == null){
      ready_player(v);
    }
    else {
      player.loadVideoById(v);
      player.playVideo();
    }
    newtitle = document.querySelector('#X' +v+' .vidtitle').innerText
    newlogo = document.querySelector('#X' +v+' .chanlogo_img').src
    newchan = document.querySelector('#X' +v+' .chan_name').innerText
    newdesc = document.querySelector('#X' +v+' .viddesc').innerText
  //e_mainFrame.src = "https://www.youtube.com/embed/" + v+"?autoplay=1";
  e_title.innerHTML = newtitle;
  e_desc.innerHTML = newdesc + '';
  e_channame.innerText = newchan;
  e_logo.src = newlogo;
  e_extr.style.display='block';
  e_social.style.display='block';
  
  social = ['facebook', 'twitter', 'instagram', 'tip']
  for(i=0; i<4; i++) {
    el = document.querySelector('#pchan_social .'+social[i]);
    href = document.querySelector('#X' +v+' .'+social[i]).innerText;

    el.style.display='inline';
    el.href = href
    if(href == '') {
      el.style.display = 'none';
    }
  }
  //document.querySelector('#pchan_social .fa-tip').href = document.querySelector('#X' +v+' .tip').innerText;

  window.localStorage.setItem(v, 1);
  /* if small screen */
  if(window.innerWidth < 600) {
  document.getElementById("content").style.display="none";
  document.getElementById("left_content").style.display = "inline";
  document.getElementById("left_content").style.width="90%";
  document.getElementById("arrow").style.display = "block";
  }
}

function backsmallscreen() {
  document.getElementById("left_content").style.display="none";
  document.getElementById("content").style.display="block";
  e_mainFrame.src = "";}