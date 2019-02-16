window.onload=function() {
  picShowAuto();
  fixLeft();
}


var p, d, t, tt, x=0, a=6;
function picShowAuto() {
  p=document.getElementsByClassName("pic");
  d=document.getElementById("displayCase").getElementsByTagName("div");
  t=setTimeout(picShow,0);
}
function picShow() {
  if (x==p.length) {
    clearTimeout(t);
    x=0;
    tt=setTimeout(picBack,0);
  } else {
    picReset();
    p[x].style.zIndex=x+p.length;
    p[x].style.borderColor="#fff";
    d[x].style.opacity=0;
    d[x].style.transition="opacity 0.5s";
    x++;
    t=setTimeout(picShow,4000);
  }
}
function picBack() {
  if (a==0) {
    clearTimeout(tt);
    a=6;
    t=setTimeout(picShow,0);
  } else {
    picReset();
    p[a].style.zIndex=p.length-a;
    p[a-1].style.borderColor="#fff";
    d[a-1].style.opacity=0;
    d[a-1].style.transition="opacity 0.2s";
    a--;
    tt=setTimeout(picBack,150);
  }
}
function picReset() {
  for (var i=0; i<p.length; i++) {
    p[i].style.borderColor="#f00";
    d[i].style.opacity=0.5;
  }
}
function piczReset() {
  for (var i=0; i<p.length; i++) {
    p[i].style.zIndex=p.length-i;
  }
}
function picOver(n) {
  picReset();
  piczReset();
  p[n].style.zIndex=n+p.length;
  p[n].style.borderColor="#fff";
  d[n].style.opacity=0;
  d[n].style.transition="opacity 0.2s";
}
function picsOver() {
  clearTimeout(t);
  clearTimeout(tt);
  x=0;
  a=6;
}
function picsOut() {
  piczReset();
  t=setTimeout(picShow,0);
}


var r=1;
function rankClick(obj,n) {
  document.getElementById("rankU1").style.display="none";
  document.getElementById("rankU2").style.display="none";
  document.getElementById("rankU3").style.display="none";
  document.getElementById("rankU"+n).style.display="block";
  document.getElementById("rank1").style.backgroundColor="rgba(204,0,17,0.5)";
  document.getElementById("rank2").style.backgroundColor="rgba(204,0,17,0.5)";
  document.getElementById("rank3").style.backgroundColor="rgba(204,0,17,0.5)";
  obj.style.backgroundColor="rgba(204,0,17,1)";
  document.getElementById("rank1").style.borderColor="#c01";
  document.getElementById("rank2").style.borderColor="#c01";
  document.getElementById("rank3").style.borderColor="#c01";
  obj.style.borderColor="#fff";
  r=n;
}
function rankOver(obj) {
  document.getElementById("rank1").style.backgroundColor="rgba(204,0,17,0.5)";
  document.getElementById("rank2").style.backgroundColor="rgba(204,0,17,0.5)";
  document.getElementById("rank3").style.backgroundColor="rgba(204,0,17,0.5)";
  document.getElementById("rank"+r).style.backgroundColor="rgba(204,0,17,1)";
  obj.style.backgroundColor="rgba(204,0,17,1)";
}
function rankOut() {
  document.getElementById("rank1").style.backgroundColor="rgba(204,0,17,0.5)";
  document.getElementById("rank2").style.backgroundColor="rgba(204,0,17,0.5)";
  document.getElementById("rank3").style.backgroundColor="rgba(204,0,17,0.5)";
  document.getElementById("rank"+r).style.backgroundColor="rgba(204,0,17,1)";
}


var f, w;
function fixLeft() {
  f=parseInt(getComputedStyle(document.getElementsByTagName("html")[0]).fontSize);
  w=document.documentElement.clientWidth;
  document.getElementById("appEwm").style.left=(w/f+60)/2+"rem";
  document.getElementById("backTop").style.left=(w/f+60)/2+"rem";
}
window.onresize=function() {
  w=document.documentElement.clientWidth;
  document.getElementById("appEwm").style.left=(w/f+60)/2+"rem";
  document.getElementById("backTop").style.left=(w/f+60)/2+"rem";
}
window.onscroll=function() {
  var y=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;
  if (y<f*12) {
    document.getElementById("appEwm").style.display="none";
    document.getElementById("backTop").style.display="none";
  } else if (y<f*32) {
    document.getElementById("appEwm").style.display="block";
    document.getElementById("backTop").style.display="none";
  } else {
    document.getElementById("appEwm").style.display="block";
    document.getElementById("backTop").style.display="block";
  }
}
function backTopOver() {
  document.getElementById("backTopT").style.display="block";
  document.getElementById("backTopP").style.visibility="hidden";
}
function backTopOut() {
  document.getElementById("backTopT").style.display="none";
  document.getElementById("backTopP").style.visibility="visible";
}






