document.getElementById("home").innerHTML += (`
<div id="home-sec">
  <h1 class=" pt-60 text-4xl font-extrabold text-white">Welcome To<br><span class="text-neon">NITHILA</span><br>WAR</h1>
  <p class="mb-4 pb-0 mt-4 text-white font-bold text-xl">Evolution <span class="text-neon">2</span> Revolution</p>
  <a href="https://www.youtube.com/embed/eM7ZTQHAXwg" target="_blank" class="venobox play-btn mb-4 mx-auto" data-vbtype="video" id="ply-btn" data-autoplay="true"></a>
  <a href="#about" class="about-btn">Explore</a>
</div>`)

const ply_btn = document.getElementById("ply-btn")

ply_btn.addEventListener("click", () => {
  document.getElementById("home-sec").classList.toggle("hidden")
  document.getElementById("intro-sec").classList.toggle("hidden")
})