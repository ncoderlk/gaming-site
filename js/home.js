document.getElementById("home").innerHTML += (`
<div id="home-sec">
  <h1 class=" mt-20 text-4xl font-extrabold text-white">Welcome To<br><span class="text-neon">NITHILA</span><br>WAR</h1>
  <p class="mb-4 pb-0 mt-4 text-white font-bold text-xl">Evolution <span class="text-neon">2</span> Revolution</p>
  <a class="venobox play-btn mb-4 mx-auto" data-vbtype="video" id="ply-btn" data-autoplay="true"></a>
  <a href="#about" class="about-btn">Explore</a>
</div>`)
const v_btn = document.getElementById("video-close")
const ply_btn = document.getElementById("ply-btn")
v_btn.addEventListener("click", () => {
  document.getElementById("home-sec").classList.toggle("hidden")
  document.getElementById("intro-sec").classList.toggle("hidden")
})
ply_btn.addEventListener("click", () => {
  document.getElementById("home-sec").classList.toggle("hidden")
  document.getElementById("intro-sec").classList.toggle("hidden")
})