const navLinks = document.querySelectorAll(".nav-bar__link");

      navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const parent = link.parentNode;
          const activeLink = parent.querySelector(".is-active");

          activeLink.classList.remove("is-active");
          link.classList.add("is-active");
        });
      });