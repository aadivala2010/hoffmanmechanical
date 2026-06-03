const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const year = document.querySelector("#year");
const serviceForm = document.querySelector("#service-form");
const formStatus = document.querySelector("#form-status");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuToggle && siteNav) {
  const closeMenu = () => {
    siteNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 760) {
      closeMenu();
    }
  });
}

if (serviceForm && formStatus) {
  serviceForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(serviceForm);
    const name = formData.get("name")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();
    const service = formData.get("service")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!name || !phone || !service || !message) {
      formStatus.textContent = "Please complete all fields before sending your request.";
      return;
    }

    const subject = encodeURIComponent(`Service Request: ${service}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nService: ${service}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:hoffmanmech@yahoo.com?subject=${subject}&body=${body}`;
    formStatus.textContent = "Your email app should open with the request ready to send.";
    serviceForm.reset();
  });
}
