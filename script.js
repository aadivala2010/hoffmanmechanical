const siteNav = document.querySelector(".site-nav");
const year = document.querySelector("#year");
const serviceForm = document.querySelector("#service-form");
const formStatus = document.querySelector("#form-status");
const progressBar = document.querySelector(".scroll-progress-bar");
const navLinks = document.querySelectorAll('.site-nav a[href^="#"]');
const revealItems = document.querySelectorAll("[data-reveal]");
const countItems = document.querySelectorAll("[data-count]");
const heroPanel = document.querySelector("#hero-service-panel");
const heroInfoLabel = document.querySelector(".hero-info-label");
const heroInfoTitle = document.querySelector("#hero-info-title");
const heroInfoText = document.querySelector("#hero-info-text");
const heroInfoIcon = document.querySelector(".hero-info-icon");
const hotspotButtons = document.querySelectorAll(".hotspot");
const mobileHotspotButtons = document.querySelectorAll(".mobile-hotspot");
const connectorPaths = document.querySelectorAll(".connector-path");
const testimonialTrack = document.querySelector("[data-testimonial-track]");
const testimonialDots = document.querySelectorAll("[data-testimonial-dot]");
const prevTestimonialButton = document.querySelector("[data-testimonial-prev]");
const nextTestimonialButton = document.querySelector("[data-testimonial-next]");

const heroServices = {
  oil: {
    label: "Oil Maintenance",
    title: "Annual oil system care for dependable heat.",
    text: "Burner cleaning, filter checks, system inspection, and performance tune-up.",
    connector: "connector-oil",
    tabId: "tab-oil",
    icon: `
      <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
        <path d="M12.48 2.43a.75.75 0 00-.96 0C8.08 5.34 6 8.18 6 11.25a6 6 0 0012 0c0-3.07-2.08-5.91-5.52-8.82zM12 18.75a4.5 4.5 0 01-4.5-4.5c0-2.04 1.25-4.16 4.5-7.08 3.25 2.92 4.5 5.04 4.5 7.08a4.5 4.5 0 01-4.5 4.5z"/>
      </svg>
    `
  },
  ac: {
    label: "AC / Heat Pump Maintenance",
    title: "Seasonal cooling and heat pump maintenance.",
    text: "Coil cleaning, refrigerant checks, electrical inspection, and airflow testing.",
    connector: "connector-ac",
    tabId: "tab-ac",
    icon: `
      <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
        <path d="M11.25 2.5h1.5v4.25L15.94 3.56l1.06 1.06-3.19 3.19H18.5v1.5h-4.69L17 12.5l-1.06 1.06-3.19-3.19v4.69h-1.5v-4.69l-3.19 3.19L7 12.5l3.19-3.19H5.5v-1.5h4.69L7 4.62l1.06-1.06 3.19 3.19V2.5zM11.25 16h1.5v2.5h-1.5zM11.25 20h1.5v1.5h-1.5z"/>
      </svg>
    `
  },
  gas: {
    label: "Gas Furnace Maintenance",
    title: "Clean, inspect, and test the furnace before peak season.",
    text: "Burner inspection, flame sensor cleaning, safety checks, and performance testing.",
    connector: "connector-gas",
    tabId: "tab-gas",
    icon: `
      <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
        <path d="M12.56 2.53a.75.75 0 00-1.12 0C8.14 6.17 6 9.18 6 12.17A6 6 0 0018 12c0-2.95-2.09-5.96-5.44-9.47zM12 19.5A4.5 4.5 0 017.5 15c0-1.78 1.11-3.94 4.5-7.78 3.39 3.84 4.5 6 4.5 7.78a4.5 4.5 0 01-4.5 4.5z"/>
      </svg>
    `
  },
  boiler: {
    label: "Boiler Maintenance",
    title: "Boiler service that supports steady, efficient heat.",
    text: "Pressure checks, component inspection, circulation review, and system safety testing.",
    connector: "connector-boiler",
    tabId: "tab-boiler",
    icon: `
      <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
        <path d="M7 3.25h10a2.75 2.75 0 012.75 2.75v12A2.75 2.75 0 0117 20.75H7A2.75 2.75 0 014.25 18V6A2.75 2.75 0 017 3.25zm0 1.5A1.25 1.25 0 005.75 6v12A1.25 1.25 0 007 19.25h10A1.25 1.25 0 0018.25 18V6A1.25 1.25 0 0017 4.75zm2 3h6v1.5H9zm3 4.25a2.75 2.75 0 110 5.5 2.75 2.75 0 010-5.5z"/>
      </svg>
    `
  },
  mini: {
    label: "Mini Split Maintenance",
    title: "Focused care for ductless comfort systems.",
    text: "Indoor head cleaning, drain checks, outdoor unit inspection, and operation testing.",
    connector: "connector-mini",
    tabId: "tab-mini",
    icon: `
      <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
        <path d="M4.75 6A2.75 2.75 0 017.5 3.25h9A2.75 2.75 0 0119.25 6v4.5a2.75 2.75 0 01-2.75 2.75h-9a2.75 2.75 0 01-2.75-2.75zm2.75-1.25A1.25 1.25 0 006.25 6v4.5a1.25 1.25 0 001.25 1.25h9a1.25 1.25 0 001.25-1.25V6a1.25 1.25 0 00-1.25-1.25zm.5 11.5h8v1.5H8zm2 3h4v1.5h-4z"/>
      </svg>
    `
  },
  indoor: {
    label: "Additional Indoor Unit",
    title: "Service for extra indoor heads on multi-zone systems.",
    text: "Additional unit cleaning, filter service, drain review, and comfort zone testing.",
    connector: "connector-indoor",
    tabId: "tab-indoor",
    icon: `
      <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
        <path d="M11.25 4.5a.75.75 0 011.5 0v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75z"/>
      </svg>
    `
  }
};

let testimonialIndex = 0;
let testimonialTimer = null;
let activeHeroService = null;

const ensureHeroPanelVisible = () => {
  if (!heroPanel || heroPanel.classList.contains("is-hidden")) {
    return;
  }

  const rect = heroPanel.getBoundingClientRect();
  const topPadding = 96;
  const bottomPadding = 24;
  let delta = 0;

  if (rect.top < topPadding) {
    delta = rect.top - topPadding;
  } else if (rect.bottom > window.innerHeight - bottomPadding) {
    delta = rect.bottom - (window.innerHeight - bottomPadding);
  }

  if (delta !== 0) {
    window.scrollBy({
      top: delta,
      behavior: "smooth"
    });
  }
};

if (year) {
  year.textContent = new Date().getFullYear();
}

const setActiveService = (serviceKey) => {
  const service = heroServices[serviceKey];
  if (!service || !heroPanel || !heroInfoLabel || !heroInfoTitle || !heroInfoText || !heroInfoIcon) {
    return;
  }

  if (activeHeroService === serviceKey) {
    activeHeroService = null;
    heroPanel.classList.add("is-hidden");
    hotspotButtons.forEach((button) => {
      button.classList.remove("is-active");
      button.setAttribute("aria-selected", "false");
    });
    mobileHotspotButtons.forEach((button) => {
      button.classList.remove("is-active");
    });
    connectorPaths.forEach((path) => {
      path.classList.remove("active");
    });
    return;
  }

  activeHeroService = serviceKey;
  hotspotButtons.forEach((button) => {
    const isActive = button.dataset.service === serviceKey;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  mobileHotspotButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.service === serviceKey);
  });

  connectorPaths.forEach((path) => {
    path.classList.toggle("active", path.classList.contains(service.connector));
  });

  heroPanel.classList.remove("is-changing");
  heroPanel.classList.remove("is-hidden");
  void heroPanel.offsetWidth;
  heroPanel.classList.add("is-changing");
  heroPanel.setAttribute("aria-labelledby", service.tabId);
  heroInfoLabel.textContent = service.label;
  heroInfoTitle.textContent = service.title;
  heroInfoText.textContent = service.text;
  heroInfoIcon.innerHTML = service.icon;
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(ensureHeroPanelVisible);
  });
};

hotspotButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    setActiveService(button.dataset.service);
  });
});

mobileHotspotButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    setActiveService(button.dataset.service);
  });
});

if (heroPanel) {
  heroPanel.addEventListener("click", (event) => {
    event.stopPropagation();
  });
}

document.addEventListener("click", () => {
  if (!activeHeroService || !heroPanel) {
    return;
  }

  activeHeroService = null;
  heroPanel.classList.add("is-hidden");
  hotspotButtons.forEach((button) => {
    button.classList.remove("is-active");
    button.setAttribute("aria-selected", "false");
  });
  mobileHotspotButtons.forEach((button) => {
    button.classList.remove("is-active");
  });
  connectorPaths.forEach((path) => {
    path.classList.remove("active");
  });
});

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

const updateScrollProgress = () => {
  if (progressBar) {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
    progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  }

  updateActiveNav();
};

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  {
    threshold: 0.18,
    rootMargin: "0px 0px -40px 0px"
  }
);

revealItems.forEach((item) => {
  sectionObserver.observe(item);
});

const countObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const target = entry.target;
      const endValue = Number(target.dataset.count || 0);
      const duration = 1300;
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const value = Math.round(endValue * (1 - Math.pow(1 - progress, 3)));
        target.textContent = String(value);

        if (progress < 1) {
          window.requestAnimationFrame(animate);
        }
      };

      window.requestAnimationFrame(animate);
      countObserver.unobserve(target);
    });
  },
  { threshold: 0.5 }
);

countItems.forEach((item) => {
  countObserver.observe(item);
});

const sections = Array.from(document.querySelectorAll("main section[id]"));

const updateActiveNav = () => {
  const navOffset = 140;
  const currentSection = sections
    .filter((section) => section.offsetTop <= window.scrollY + navOffset)
    .at(-1);

  navLinks.forEach((link) => {
    link.classList.toggle("is-active", Boolean(currentSection) && link.getAttribute("href") === `#${currentSection.id}`);
  });
};

const showTestimonial = (index) => {
  if (!testimonialTrack) {
    return;
  }

  const slides = Array.from(testimonialTrack.children);
  if (!slides.length) {
    return;
  }

  testimonialIndex = (index + slides.length) % slides.length;
  testimonialTrack.style.transform = `translateX(-${testimonialIndex * 100}%)`;
  testimonialTrack.style.transition = "transform 420ms ease";

  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("is-active", slideIndex === testimonialIndex);
  });

  testimonialDots.forEach((dot, dotIndex) => {
    dot.classList.toggle("is-active", dotIndex === testimonialIndex);
  });
};

const startTestimonialAutoplay = () => {
  if (!testimonialTrack) {
    return;
  }

  window.clearInterval(testimonialTimer);
  testimonialTimer = window.setInterval(() => {
    showTestimonial(testimonialIndex + 1);
  }, 5200);
};

testimonialDots.forEach((dot) => {
  dot.addEventListener("click", () => {
    showTestimonial(Number(dot.dataset.testimonialDot || 0));
    startTestimonialAutoplay();
  });
});

if (prevTestimonialButton) {
  prevTestimonialButton.addEventListener("click", () => {
    showTestimonial(testimonialIndex - 1);
    startTestimonialAutoplay();
  });
}

if (nextTestimonialButton) {
  nextTestimonialButton.addEventListener("click", () => {
    showTestimonial(testimonialIndex + 1);
    startTestimonialAutoplay();
  });
}

if (testimonialTrack) {
  let pointerStartX = 0;
  let pointerDelta = 0;

  testimonialTrack.addEventListener("pointerdown", (event) => {
    pointerStartX = event.clientX;
    pointerDelta = 0;
  });

  testimonialTrack.addEventListener("pointermove", (event) => {
    if (!pointerStartX) {
      return;
    }

    pointerDelta = event.clientX - pointerStartX;
  });

  const finishSwipe = () => {
    if (Math.abs(pointerDelta) > 40) {
      showTestimonial(testimonialIndex + (pointerDelta < 0 ? 1 : -1));
      startTestimonialAutoplay();
    }

    pointerStartX = 0;
    pointerDelta = 0;
  };

  testimonialTrack.addEventListener("pointerup", finishSwipe);
  testimonialTrack.addEventListener("pointercancel", finishSwipe);
  testimonialTrack.addEventListener("pointerleave", finishSwipe);

  showTestimonial(0);
  startTestimonialAutoplay();
}

document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", (event) => {
    const ripple = document.createElement("span");
    ripple.className = "button-ripple";

    const rect = button.getBoundingClientRect();
    ripple.style.left = `${event.clientX - rect.left}px`;
    ripple.style.top = `${event.clientY - rect.top}px`;

    button.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
  });
});

window.addEventListener("scroll", updateScrollProgress, { passive: true });
window.addEventListener("load", updateScrollProgress);
