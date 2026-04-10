function openInvite(){
  document.getElementById('overlay').style.display = 'none';
}

const timer = document.getElementById("timer");
const date = new Date("June 17, 2026 18:00:00").getTime();

setInterval(()=>{
  const now = new Date().getTime();
  const diff = date - now;

  const d = Math.floor(diff/(1000*60*60*24));
  const h = Math.floor((diff/(1000*60*60))%24);

  timer.innerHTML = d + " Days " + h + " Hours";
},1000);
