const dName = "clerov"
let coName = "NITHILA WAR"
let aa = "target=\"_blank\""
let arr = [
  "mailto:nithilawar@gmail.com",
  "nithilawar@gmail.com",
  "https://www.youtube.com/channel/UCn2CM862D3mvy5db4UsOcQQ/",
  "https://www.facebook.com/nithila.war",
  "https://www.instagram.com/nithila_herath/",
  "https://twitter.com/UdayaHerath4",
  "https://www.twitch.tv/nithilawar"
]
document.getElementById("footer").innerHTML = `
<div>The Most Popular Gaming Channel</div>
<hr>
<div>
<ul>
<li><a href="${arr[2]}" ${aa}><i class="fa-brands fa-youtube"></i>${coName}</a></li>
<li><a href="${arr[3]}" ${aa}><i class="fa-brands fa-facebook"></i>${coName}</a></li>
<li><a href="${arr[4]}" ${aa}><i class="fa-brands fa-twitter"></i>${coName}</a></li>
<li><a href="${arr[5]}" ${aa}><i class="fa-brands fa-discord"></i>${coName}</a></li>
<li><a href="${arr[6]}" ${aa}><i class="fa-brands fa-twitch"></i>${coName}</a></li>
</ul>
<a class="mail" href="${arr[0]}" ${aa}><i class="fa fa-envelope"></i>${arr[1]}</a>
</div>


<span>&copy ${new Date().getFullYear()} All rights reserved by <a href="https://nithilawar.vercel.app" ${aa}>${coName}</a></span><br>
<span>Designed and Developed By <a href="https://github.com/clerov" ${aa}>${dName}</a></span>
`

dName.toLowerCase() != "clerov" ? document.body.innerHTML = "COPYRIGHT" : console.log("webpage contents defined".toUpperCase())
