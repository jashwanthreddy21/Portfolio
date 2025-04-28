function toggleMenu() {
  const mobileNav = document.getElementById("mobileNav");
  mobileNav.style.display =
    mobileNav.style.display === "flex" ? "none" : "flex";
}

/* ---------------tools used---------------*/

const tools = document.querySelectorAll('.tool');

window.addEventListener('scroll', () => {
  const section = document.getElementById('tools');
  const rect = section.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top <= windowHeight * 0.75 && rect.bottom >= windowHeight * 0.25) {
    // Animate each tool one by one when section is in view
    tools.forEach((tool, index) => {
      setTimeout(() => {
        tool.style.transform = 'translateX(0)';
        tool.style.opacity = '1';
      }, index * 200); // delay each tool 200ms more than the previous
    });
  } else if (rect.top < 0 && rect.bottom < windowHeight * 0.25) {
    // Animate each tool out to the left
    tools.forEach((tool, index) => {
      setTimeout(() => {
        tool.style.transform = 'translateX(100vw)';
        tool.style.opacity = '0';
      }, index * 200); 
    });
  } else {
    // Reset back to right when scrolling up
    tools.forEach((tool) => {
      tool.style.transform = 'translateX(-100vw)';
      tool.style.opacity = '0';
    });
  }
});

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
