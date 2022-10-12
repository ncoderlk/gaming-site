document.getElementById("navbar").innerHTML = (
  `<nav class="navbar">
  <div class="flex-container">
    <div class="logo">
      <span>
        NITH<span>ILA W</span>AR
      </span>
      <div class="overlay"></div>
    </div>
    <div class="links">
      <button id="hamburger-btn" class="active">
        <span class="hamburger-top"></span>
        <span class="hamburger-middle"></span>
        <span class="hamburger-bottom"></span>
      </button>
    </div>
  </div>
  <div id="menu" class="z-10 flex rounded-xl flex-col fixed right-4 top-24 bg-blur_blue h-1/2 p-10 box-content  justify-center items-center">
    <div class="logo">
      <img src="./images/avatar-un.png" alt="Avatar" class="w-28 rounded-full" />
      <span id="user" class="text-neon font-bold">Unknown User</span>
    </div>
    <div class="flex flex-col mt-5 mb-5 border-t-2 border-b-2 border-white">
      <a class="text-white hover:text-gray-400 pt-2" href="/home">Home</a>
      <a class="text-white hover:text-gray-400 pt-2" href="/about">About</a>
      <a class="text-white hover:text-gray-400 pt-2" href="/service">Service</a>
      <a class="text-white hover:text-gray-400 pt-2 pb-2" href="/contact">Contact</a>
    </div>
    <button onclick="login()" id="login-btn" class="w-28 h-8 border-neon border-2 text-neon m-2 p-2 box-content hover:bg-neon btn-bx-shd hover:text-blur_blue  hover:border-black rounded-full ">Login</button>
  </div>
</nav>`
)
let x = document.getElementById("navbar").innerHTML;
x == null || x == undefined || x == "" ? console.log("navbar isn't defined".toUpperCase()) : console.log("navbar is defined".toUpperCase())
let menu_btn = document.getElementById("hamburger-btn");
if (menu_btn !== null) {
  console.log("Menu Button Defined".toUpperCase())
  menu_btn.addEventListener("click", () => {
    menu_btn.classList.toggle("active");
    menu_btn.classList.toggle("close");
    document.getElementById("menu").classList.toggle("active")
    setTimeout(() => {
      if (menu_btn.classList.contains("close")) {
        menu_btn.classList.toggle("active");
        menu_btn.classList.toggle("close");
        document.getElementById("menu").classList.toggle("active")
      }
    }, 3500)
  });
} else {
  menu_btn = document.getElementById("hamburger-btn");
  console.log("menu btn not defined".toUpperCase());
}