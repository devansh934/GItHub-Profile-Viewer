# 🐙 GitHub Profile Viewer

A modern and interactive web application to search and explore GitHub user profiles in real time using the GitHub REST API.

This project helps users quickly view essential GitHub profile details such as repositories, followers, following count, gists, bio, and more — all in a clean dark-themed UI.

---

## 🚀 Live Preview

Check out the live version of GitHub-Profile-Viewer here:  
[GitHub-Profile-Viewer – Live Demo](https://devansh934.github.io/GItHub-Profile-Viewer/)

---
## **Screenshots**

![App Screenshot]

<img width="1897" height="864" alt="Screenshot 2025-12-28 002831" src="https://github.com/user-attachments/assets/0505909d-d228-4486-b064-60540e091d60" />

---

## ✨ Features

- 🔍 Search any GitHub username
- 👤 View profile details (avatar, name, username, bio)
- 📊 See public stats:
  - Repositories
  - Followers
  - Following
  - Gists
- 📍 Location display (if available)
- 🔗 Direct links to:
  - GitHub profile
  - Personal blog/website (if provided)
- ⚡ Smooth animations & transitions
- 🌙 Modern dark UI inspired by GitHub
- ❌ Proper error handling:
  - User not found
  - API rate limit exceeded
  - Network issues

---

## 🛠️ Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla)
- GitHub REST API

---

## 📂 Project Structure

├── index.html
├── style.css
├── script.js
└── README.md


## ⚙️ How It Works

1. User enters a GitHub username
2. App sends a request to:
   https://api.github.com/users/{username}
3. Data is fetched using async/await
4. UI updates dynamically with profile information
5. Errors are handled gracefully with user-friendly messages

---

## 🧠 Key Learnings

- Working with REST APIs
- Async/Await and error handling
- DOM manipulation
- Responsive UI design
- Clean project structuring

---

## 🖥️ How to Run Locally

1. Clone the repository
   ```bash
   git clone https://github.com/devansh934/Github-Profile-Viewer.git
Open the project folder

Open index.html in your browser

🔮 Future Improvements
Show top repositories

Display contribution stats

Theme switcher (light/dark)

Search history

GitHub token support to avoid rate limits

👨‍💻 Author
Devansh Patel
GitHub: https://github.com/devansh934

---










