let linksSet = document.querySelectorAll('a[href^="#"]');
linksSet.forEach((linkT) => {
  linkT.onclick = function (e) {
    e.preventDefault();

    let hrefT = document.querySelector(this.hash);
    hrefT.scrollIntoView({
      behavior: "smooth",
      duration: "3s",
    });
  };
});