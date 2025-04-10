document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-theme");
        });
    }

    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("nameInput").value.trim();
            const message = document.getElementById("messageInput").value.trim();
            
            if (name === "" || message === "") {
                alert("Please fill out all required fields.");
                return;
            }

            const responseElement = document.getElementById("response");
            if (responseElement) {
                responseElement.textContent = `Thanks, ${name}. We'll get back to you soon!`;
                responseElement.style.display = "block";
            }
            
            e.target.reset();
        });
    }

    const loadUsersBtn = document.getElementById("loadUsersBtn");
    if (loadUsersBtn) {
        loadUsersBtn.addEventListener("click", async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users');
                const users = await res.json();
                const userList = document.getElementById("userList");
            
                userList.innerHTML = "";
            
                users.forEach(user => {
                    const li = document.createElement("li");
                    li.textContent = user.name;
                    userList.appendChild(li);
                });
            } catch (err) {
                console.error("Failed to load users:", err);
            }
        });
    }

    const question = document.querySelectorAll(".question");
    if (question) {
        question.forEach((q) => {
            q.addEventListener("click", () => {
                q.nextElementSibling.classList.toggle("visible");
            });
        });
    }
});

function updateTime() {
    const now = new Date();
    const timestring = now.toLocaleTimeString();
    document.getElementById("time").textContent = timestring;
}

setInterval(updateTime, 1000);