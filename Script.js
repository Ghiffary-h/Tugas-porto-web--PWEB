// Animasi scroll
const faders = document.querySelectorAll(".fade-in, .fade-up");
window.addEventListener("scroll", () => {
  faders.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add("show");
    }
  });
});

// Modal untuk proyek
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.querySelector(".close");

const projectDetails = {
  1: "Detail lengkap tentang Proyek 1. Bisa jelaskan fitur, teknologi yang dipakai, atau pengalaman saat membuatnya.",
  2: "Detail lengkap tentang Proyek 2. Misalnya ini aplikasi web sederhana, API, dsb.",
};

document.querySelectorAll(".more-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const id = btn.getAttribute("data-project");
    modalBody.innerHTML = projectDetails[id];
    modal.style.display = "block";
  });
});

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };
