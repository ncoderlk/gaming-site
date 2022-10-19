document.getElementById("contact").innerHTML = `
<h1 id="contact-title">Contact Me</h1>
<div class="g-ytsubscribe" data-channelid="UCn2CM862D3mvy5db4UsOcQQ" data-layout="full" data-count="default"></div>
<div class="rate-content">
<h1>Rate Us</h1>
<span id="rate-mark">
</span>
<div class="rate">
  <div id="rate" class="ratebox"></div>
  <div id="rate" class="ratebox"></div>
  <div id="rate" class="ratebox"></div>
  <div id="rate" class="ratebox"></div>
  <div id="rate" class="ratebox"></div>

</div>
</div>
<form>
<h1>Contact US</h1>
<label for="email">Email:</label>
<input type="email" id="email" required>
<label for="message">Message:</label>
<textarea name="message" id="message" required></textarea>
<button type="submit">Submit</button>
</form>
<div id="discord-status">
<header id="hide-ds"><i class="fa-brands fa-discord"></i> Discord Server Status</header>
<div id="dis-content">
<div id="server-about"></div>
<div id="users">
<span>onine members</span>
</div></div>
<a href="https://discord.gg/4BCHMBEEtA" target="_blank"><button id="join-dis-btn">Join</button></a>
</div>

`;

const btn = document.querySelectorAll('div[id="rate"]');
let p = 0;
document.getElementById("rate-mark").innerHTML = `
 0
<hr>
 25
`;
let server = `<img src="https://imgs.search.brave.com/FuPXsAQIcP9XcTIPWCrCIbwMgSdO9uIwRUVkAyMHews/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/LmV4cGxpY2l0LmJp/bmcubmV0L3RoP2lk/PU9JUC56Z2t1NnlO/NmZwTElnSkZsaEZQ/YVB3SGFIYSZwaWQ9/QXBp">`

btn.forEach(($) => {
  $.classList.remove("star");
  $.addEventListener("click", () => {
    $.classList.toggle("star");
    if ($.classList.contains("star")) {
      p += 5;
    } else {
      p -= 5;
    }
    document.getElementById("rate-mark").innerHTML = `
    ${p}
    <hr>
    25
    `;
  });
});
function discordAPI() {
  let discord_status = []
  fetch("https://discord.com/api/guilds/1017827341197660250/widget.json", {
    method: "GET",
    mode: "cors",
    cache: "reload"
  })
    .then(res => {
      if (res.status != 200) {
        console.log('discord widget dissconnect error: ' + res.status)
      }
      else {
        console.log('discord api connected ' + res.status)
      }
      res.json().then((data) => {
        let users = data.members
        let status;
        if (users != null) {
          users.forEach(user => {
            console.log(user.username + " " + user.status)
            if (user.status === "online") {
              status = `<i class="fa-solid fa-circle ${user.status}"></i>`
            }
            else if (user.status === "idle") {
              status = `<i class="fa-solid fa-moon  ${user.status}"></i>`
            }
            else if (user.status === "dnd") {
              status = `<i class="fa-solid fa-circle ${user.status}"></i>`
            }
            document.getElementById("server-about").innerHTML = `
            ${server}
            `
            document.getElementById("users").innerHTML += (`
           <div class="user">
           <img class="user_avatar" src="${user.avatar_url}">
           ${status}
           <div class="user_name">${user.username}</div>
           </div>
            `)
          })
        }

      })
    }).catch(err => {
      if (err != null) {
        console.log(err)
      }
    }).finally(() => {
      console.log('Finished working on discord API'.toUpperCase())
    })
}

discordAPI()

const $$ = document.getElementById("hide-ds")

$$.addEventListener("click", () => {
  document.getElementById("dis-content").classList.toggle("hidden")
})