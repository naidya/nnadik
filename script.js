const btnYes = document.getElementById('btn-yes');
const btnNo = document.getElementById('btn-no');
const msgDiv = document.getElementById('message');
const pic = document.getElementById('pic');

// Tombol ngga dihindari: terus geser posisi
btnNo.addEventListener('mouseenter', () => {
  const x = Math.random() * 60 + 20;
  const y = Math.random() * 60 + 20;
  btnNo.style.transform = `translate(${x}px, ${y}px)`;
});

// Kalau klik sayang:
btnYes.addEventListener('click', () => {
  msgDiv.style.display = 'block';
  msgDiv.innerHTML = 'yay! tukan benerr kamu ngefans berat sama akuuu wlee';
  pic.style.display = 'block';
  pic.alt= ' ini kita kalau lagi akur lucu banget yaa?';
});

// script-heart.js
const heartChars = ['💖','💗','💞','💕'];
document.addEventListener('mousemove', function(e){
  const span = document.createElement('span');
  span.innerText = heartChars[Math.floor(Math.random() * heartChars.length)];
  span.style.position = 'fixed';
  span.style.left = e.clientX + 'px';
  span.style.top = e.clientY + 'px';
  span.style.fontSize = '20px';
  span.style.pointerEvents = 'none';
  span.style.opacity = '1';
  span.style.transition = 'transform 0.6s ease-out, opacity 0.6s ease-out';
  document.body.appendChild(span);
  requestAnimationFrame(() => {
    span.style.transform = `translateY(-30px)`;
    span.style.opacity = '0';
  });
  setTimeout(() => document.body.removeChild(span), 600);
});
