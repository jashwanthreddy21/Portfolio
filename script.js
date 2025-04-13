function toggleMenu() {
  const mobileNav = document.getElementById("mobileNav");
  mobileNav.style.display =
    mobileNav.style.display === "flex" ? "none" : "flex";
}

/* ---------------Skills---------------*/

document.addEventListener("DOMContentLoaded", () => {
  const skillSection = document.querySelector("#skills");
  const skillBars = document.querySelectorAll(".fill");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animate IN — set width from data attribute
        skillBars.forEach(bar => {
          const width = bar.getAttribute("data-width");
          bar.style.width = width;
        });
      } else {
        // Animate OUT — reset width to 0
        skillBars.forEach(bar => {
          bar.style.width = "0";
        });
      }
    });
  }, {
    threshold: 0.4 // Adjust as needed
  });

  if (skillSection) {
    observer.observe(skillSection);
  }
});

/*------------Projects--------------*/

document.querySelectorAll('.flip-card-inner').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});

/*------------Contact--------------*/
const scriptURL = 'https://script.google.com/macros/s/AKfycbyZxvqhEBmLYVXWYrkE7s5znfvabteuP8-vfzBl0YQ8JEoUrYWsBc2g73TFUBPexLu0gQ/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.style.display = "block"
        setTimeout(function(){
          msg.style.display = "none"
        }, 5000)
        form.reset()
        console.log('Success!', response)
      })
      .catch(error => console.error('Error!', error.message))
  })
