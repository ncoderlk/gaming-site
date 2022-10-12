const o = localStorage.getItem("Name")
if (o == null || o == undefined || o == "") {
  console.log("login button defined".toUpperCase())

  const j = prompt("Please Enter Your Name To Continue:\n")

  localStorage.setItem("Name", j)
  document.getElementById("user").innerText = j


}




else {
  console.log("login button defined".toUpperCase())
  document.getElementById("user").innerText = o
  document.getElementById("login-btn").classList.toggle("disabled")
  document.getElementById("login-btn").toggleAttribute("disabled", true)
  document.getElementById("login-btn").textContent = "Logged In"
}


