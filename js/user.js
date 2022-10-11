const o = localStorage.getItem("Name")
if (o == null || o == undefined || o == "") {
  const j = prompt("Please Enter Your Name To Continue:\n")
  localStorage.setItem("Name", j)
  document.getElementById("user").innerText = j
}
else {
  document.getElementById("user").innerText = o
}


