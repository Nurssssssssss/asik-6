// === МОДАЛЬНОЕ ОКНО ===
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("modal");

if (openModal && closeModal && modal) {
  openModal.addEventListener("click", () => modal.style.display = "flex");
  closeModal.addEventListener("click", () => modal.style.display = "none");
}

// === ВАЛИДАЦИЯ ФОРМЫ ===
const formAdd = document.getElementById('form_add');
if (formAdd) {
  formAdd.addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;
    let name = document.getElementById('name');
    let surname = document.getElementById('surname');
    let email = document.getElementById('email');
    document.querySelectorAll('.error-text').forEach(error => error.remove());

    const errorForm = (message, input) => {
      let errorEl = document.createElement('div');
      errorEl.className = 'error-text';
      errorEl.textContent = message;
      errorEl.style.color = 'red';
      errorEl.style.fontSize = '14px';
      input.parentElement.appendChild(errorEl);
      isValid = false;
    }

    if(!name.value.trim()) errorForm('Enter name', name);
    if(!surname.value.trim()) errorForm('Enter surname', surname);
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) errorForm('Enter correct email', email);

    if(isValid) {
      alert('Form successfully sent!');
      this.reset();
      modal.style.display = "none";
    }
  });
}

// === СМЕНА ЦВЕТА ===
document.getElementById("redBtn")?.addEventListener("click", () => document.body.style.backgroundColor = "red");
document.getElementById("blueBtn")?.addEventListener("click", () => document.body.style.backgroundColor = "blue");
document.getElementById("greenBtn")?.addEventListener("click", () => document.body.style.backgroundColor = "green");

// === АККОРДЕОН ===
const headersOfAcc = document.querySelectorAll(".accordion-header");
if (headersOfAcc.length > 0) {
  headersOfAcc.forEach(header => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      document.querySelectorAll(".accordion-content").forEach(c => {
        if (c != content) c.style.display = "none";
      });
      content.style.display = (content.style.display === "block") ? "none" : "block";
    });
  });
}

// === ДАТА И ВРЕМЯ ===
const dateTimeDisplay = document.getElementById("dateTimeDisplay");
const currentTime = document.getElementById("currentTime");
const currentDate = document.getElementById("currentDate");

function updateDateTime() {
  const now = new Date();
  const formattedDate = now.toLocaleDateString();
  const formattedTime = now.toLocaleTimeString();

  if (dateTimeDisplay)
    dateTimeDisplay.textContent = `Today: ${formattedDate}, Time: ${formattedTime}`;

  if (currentDate && currentTime) {
    currentDate.textContent = formattedDate;
    currentTime.textContent = formattedTime;
  }
}
updateDateTime();
setInterval(updateDateTime, 1000);


// Рейтинг таск 1
const stars = document.querySelectorAll(".star");
const rating = document.getElementById("rating-message");

if (stars && rating) {
  stars.forEach((star, index) => {
    star.addEventListener("click", () => {
      stars.forEach(s => s.classList.remove("selected"));

      for (let i = 0; i <= index; i++) {
        stars[i].classList.add("selected");
      }

      rating.textContent = `Your results: ${index + 1}`;
    });
  });
}

// Затемнение таск 1
const btn = document.getElementById('themeBtn');
const body = document.body

btn.addEventListener('click', () => {
    body.classList.toggle('dark_theme');

    if (body.classList.contains('dark_theme')) {
        btn.textContent = 'Light';
    }   else {
        btn.textContent = 'Dark';
    }
});

const years = document.querySelectorAll(".years");
const btnMore = document.querySelectorAll(".readMore");

if (years && btnMore) {
  btnMore.forEach((btnRead, index) => {
    btnRead.addEventListener("click", () => {
      const year = years[index];
      if (year.classList.contains("years")) {
        year.classList.remove("years");
        btnRead.textContent = "Hide"; 
      } else {
        year.classList.add("years"); 
        btnRead.textContent = "Read More";
      }
    });
  });
}