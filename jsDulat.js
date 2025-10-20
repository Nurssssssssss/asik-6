const openPopup = document.getElementById("signIn");
const closePopup = document.getElementById("closeForm");
const signInForm = document.getElementById("signInForm");

const songBtn = new Audio("message-notification-sound-imassage-on-iphone.mp3");

if (openPopup && signInForm && closePopup) {
  openPopup.addEventListener("click", () => {
    signInForm.style.display = "flex";
    
    songBtn.play();
    signInForm.classList.add("show");
  });

  closePopup.addEventListener("click", () => {
    signInForm.style.display = "none";
  });
}



const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const userName = document.getElementById("nameUser").value.trim();
    const userPass = document.getElementById("passUser").value.trim();
    const userPassConf = document.getElementById("passUserConf").value.trim();
    const userEmail = document.getElementById("emailUser").value.trim();

    let mass = "";

    switch (true) {
        case userName === "":
            mass += "Enter name!<br>";
            break;
        case userEmail === "":
            mass += "Enter email!<br>";
            break;
        case userPass === "":
            mass += "Enter password!<br>";
            break;
        case userPass.length < 4 && userPass !== "":
            mass += "Long password!<br>";
            break;
        case userPass !== userPassConf:
            mass += "Passwords do not match!<br>";
            break;
    }

    document.getElementById("result").innerHTML = mass || "Well done!";
    if (mass === "") { 

      localStorage.setItem("textToFooter", `${userName}`);
      location.reload();
    }
  })
}

window.addEventListener("load", () => {
  const textResult = localStorage.getItem("textToFooter");
  const footerText = document.getElementById("footerText");
  if (textResult && footerText) {
    footerText.textContent = `${textResult}`;
  }
})



const headersOfAcc = document.querySelectorAll(".accordion-header");

if (headersOfAcc.length > 0) {
  headersOfAcc.forEach(headers => {
    headers.addEventListener("click", () => {
      const content = headers.nextElementSibling;
      document.querySelectorAll(".accordion-content").forEach(c => {
        if (c != content) c.style.display = "none";
      });
      content.style.display = (content.style.display === "block") ? "none" : "block";
    })
  })
}





const first = document.getElementById("firstS");
const second = document.getElementById("secondS"); 
const third = document.getElementById("thirdS");  
const btn1 = document.getElementById("forColorC");
const btnToCl = document.getElementById("forColorR");

if (first && second && third) {
  btn1.addEventListener("click", () => {
    const r = first.value;
    const g = second.value;
    const b = third.value;

    if (r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255) {
      document.body.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 1)`;
    }
  });

  btnToCl.addEventListener("click", () => {
    document.body.style.backgroundColor = "white";
  })
}





const dateTimeDisplay = document.getElementById("dateTimeDisplay");

if (dateTimeDisplay) {
  function updateDateTime() {
    const now = new Date();

    const nowDate = now.toLocaleDateString();
    const nowTime = now.toLocaleTimeString();

    dateTimeDisplay.textContent = `To day ${nowDate}, Time ${nowTime}`;
  }
  updateDateTime();
  setInterval(updateDateTime, 1000);
}



const btnOfCurr = document.getElementById("btndateCur");

function dateTim() {
  const now = new Date();

  const nowDate = now.toLocaleDateString();
  const nowTime = now.toLocaleTimeString();

  return `To day ${nowDate}, Time ${nowTime}`;
}

if (btnOfCurr) {
  btnOfCurr.addEventListener("click", () => {
    let timeNeed = dateTim();
    document.getElementById("datecur").textContent = timeNeed;
  })
}




const ThemeManager = {
    btn: document.getElementById('themeBtn'),
    html: document.documentElement,

    toggle() {
        const isDark = this.html.getAttribute("data-theme") === "dark";
        if (isDark) {
          this.html.removeAttribute("data-theme");
          localStorage.setItem("theme", "light");
        } else {
          this.html.setAttribute("data-theme", "dark");
          localStorage.setItem("theme", "dark");
        }
    },

    init() {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
          this.html.setAttribute("data-theme", "dark");
        } else {
          this.html.removeAttribute("data-theme");
        }
        if (this.btn) this.btn.addEventListener("click", this.toggle.bind(this));
    }
};

ThemeManager.init();



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




const menuItems = document.querySelectorAll('#menu li');
let currentIndex = 0;

function updateFocus(index) {
    menuItems.forEach((item, i) => {
        item.tabIndex = (i === index) ? 0 : -1;
        if (i === index) {
            item.focus();
        }
    });
}

function handleKeyDown(event) {
    if (event.key === 'ArrowDown') {
        currentIndex = (currentIndex + 1) % menuItems.length;
        updateFocus(currentIndex);
        event.preventDefault(); 
    } else if (event.key === 'ArrowUp') {
        currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
        updateFocus(currentIndex);
        event.preventDefault();
    }
}

document.addEventListener('keydown', handleKeyDown);

updateFocus(currentIndex);
