const nav=document.getElementById('nav'),burger=document.querySelector('.burger');
burger.addEventListener('click',()=>{const o=nav.classList.toggle('open');burger.setAttribute('aria-expanded',o)});
nav.addEventListener('click',e=>{if(e.target.closest('a'))nav.classList.remove('open')});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
document.getElementById('form').addEventListener('submit',e=>{e.preventDefault();document.getElementById('ok').hidden=false;e.target.reset()});
