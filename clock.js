let hr = document.querySelector('#hr')
let mn = document.querySelector('#mn')
let sc = document.querySelector('#sc')
// ==============digital time================
let hour = document.querySelector('#hour')
let minutes = document.querySelector('#minutes')
let second = document.querySelector('#second')
let ampm = document.querySelector('#ampm')
let day ,hh, mm ,ss ;
let h ,m ,s,am;

function timeing(){
 day = new Date()
 hh=day.getHours() *30;
 mm=day.getMinutes() *6;
 ss=day.getSeconds() *6;
hr.style.transform =`rotateZ(${hh +(mm/12)}deg)`
mn.style.transform =`rotateZ(${mm}deg)`
sc.style.transform =`rotateZ(${ss}deg)`
// ===================digital time======================
h=day.getHours();
m=day.getMinutes();
s=day.getSeconds();
am=h>=12?"PM":"AM"
// ==========add zero :00:=========
h=h<10?"0"+h:h
m=m<10?"0"+m:m
s=s<10?"0"+s:s
// =============convert hours 12hr ==============
h=h>12?h-12:h
hour.innerHTML = h;
minutes.innerHTML = m;
second.innerHTML = s;
ampm.innerHTML=am

}
setInterval(timeing,1000)
