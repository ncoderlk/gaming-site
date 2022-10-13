document.getElementById("contact").innerHTML =
  `
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

`

const btn = document.querySelectorAll('div[id="rate"]')
let p = 0;
document.getElementById('rate-mark').innerHTML = `
 0
<hr>
 25
`;
btn.forEach($ => {
  $.classList.remove('star')
  $.addEventListener('click', () => {
    $.classList.toggle('star')
    if ($.classList.contains('star')) {
      p += 5
    }
    else {
      p -= 5
    }
    document.getElementById('rate-mark').innerHTML = `
    ${p}
    <hr>
    25
    `;
  })
})