const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

const contactForm = document.querySelector("#contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get("name") || "Website visitor";
    const email = formData.get("email") || "";
    const updates = formData.get("updates") === "yes" ? "Yes" : "No";
    const message = formData.get("message") || "";
    const subject = encodeURIComponent("Hōʻola ʻŌiwi Foundation contact");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nWants updates: ${updates}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:hoolaoiwi@outlook.com?subject=${subject}&body=${body}`;
  });
}
