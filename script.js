
const usernameInput = document.getElementById("usernameInput");
const searchBtn = document.getElementById("searchBtn");
const loading = document.getElementById("loading");
const error = document.getElementById("error");
const profileCard = document.getElementById("profileCard");

async function searchUser(username) {
  if (!username.trim()) return;

  //Hide previous results
  profileCard.classList.remove("show");
  error.classList.remove("show");
  loading.style.display = "block";

  try {
    const response = await fetch(
      `https://api.github.com/users/${encodeURIComponent(username)}`
    );

    if (!response) {
      if (response.status === 404) {
        throw new Error("User not Found");
      } else if (response.status === 403) {
        throw new Error("Rate limit exceeded");
      } else {
        throw new Error(`HTTP erro! status: ${response.data}`);
      }
    }

    const user = await response.json();
    console.log(user);
    document.getElementById("avatar").src = user.avatar_url;
    document.getElementById("avatar").alt = `${user.login}'s avatar`;
    document.getElementById("name").textContent = user.name || user.login;
    document.getElementById("username").textContent = `@${user.login}`;
    document.getElementById("bio").textContent =
      user.bio || "This user has no bio.";

    const locationContainer = document.getElementById("locationContainer");

    if (user.location) {
      document.getElementById("location").textContent = user.location;
      locationContainer.style.display = "flex";
    } else {
      locationContainer.style.display = "none";
    }

    //Stats
    document.getElementById("repos").textContent =
      user.public_repos.toLocaleString();
    document.getElementById("followers").textContent =
      user.followers.toLocaleString();
    document.getElementById("following").textContent =
      user.following.toLocaleString();
    document.getElementById("gists").textContent =
      user.public_gists.toLocaleString();

    //Links

    document.getElementById("profileLink").href = user.html_url;

    const blogLink = document.getElementById("blogLink");

    if (user.blog) {
      const blogUrl = user.blog.statsWith("http")
        ? user.blog
        : `https://${user.blog}`;
      blogLink.href = blogUrl;
      blogLink.style.display = "inlin-flex";
    } else {
      blogLink.style.display = "none";
    }

    loading.style.display = "none";
    setTimeout(() => {
      profileCard.classList.add("show");
    }, 100);
  } catch (err) {
    console.error('Seach error:', err);
    loading.style.display = 'none';

    const errorElement = document.getElementById('error');

    if(err.message.includes('Rate limit')) {
        errorElement.innerHTML = `
        <h3> Rate Limit Exceeded </h3>
        <p>Github API rate limit reached. Please try again in a few minutes. </p>
        `
    }else if(err.message.includes('Failed to fetch')){
        errorElement.innerHTML = `
        <h3> Connection Error </h3>
        <p>Unable to connect to Github. Please check you internet Connection.</p>
        `
    }else {
        errorElement.innerHTML = `
        <h3> User Not Found</h3>
        <p>Github User was not found. please check the username again and try agian. </p>
        `
    }

    error.classList.add('show');
  }
}

searchBtn.addEventListener('click', () =>{
    searchUser(usernameInput.value);
})

usernameInput.addEventListener('keypress', (e) =>{
    if(e.key === 'Enter') {
        searchUser(usernameInput.value);
    }
})

usernameInput.focus();