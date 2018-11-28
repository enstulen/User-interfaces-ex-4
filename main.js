$(document).ready(function () {
  updateButtons();
  logoButtonPressed();
  updateProfile();
});

function loggedIn() {
  var users = JSON.parse(localStorage.getItem("users"));
  if (users) {
    var loggedIn = false;
    users.forEach(function (user) {
      if (user.loggedIn) {
        loggedIn = true;
      }
    });
  }
  return loggedIn;
}

function logout() {
  var users = JSON.parse(localStorage.getItem("users"));
  if (users) {
    users.map(function (user) {
      if (user.loggedIn) {
        var index = users.indexOf(user);
        if (index > -1) {
          users.splice(index, 1);
        }
        user.loggedIn = false;
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
      }
    });
  }
}

function updateButtons() {
  if (loggedIn()) {
    var registerButton = document.getElementById("register__button");
    var loginLogoutButton = document.getElementById("login__logout__button");
    registerButton.style.display = "none";
    loginLogoutButton.innerHTML = "Logout";
  } else {
    var registerButton = document.getElementById("register__button");
    var loginLogoutButton = document.getElementById("login__logout__button");
    registerButton.style.display = "block";
    loginLogoutButton.innerHTML = "Login";
  }
}

window.addEventListener("message", function (event) {
  if (event.data == "searchButtonPressed") {
    showPage("content__container__searchResults");
  } else if (event.data == "goToDetailView") {
    showPage("content__container__detailView");
    showHotel();
  } else {
    logoButtonPressed();
    window.location.reload(true);
  }
});

window.addEventListener("login", function (event) {
  if (loggedIn()) {
    logoButtonPressed();
    window.location.reload(true);
  }
});


function hideEveryPage() {
  var contentRegister = document.getElementById("content__container__register");
  var contentLogin = document.getElementById("content__container__login");
  var frontpage = document.getElementById("content__container__frontpage");
  var searchResults = document.getElementById("content__container__searchResults");
  var detailView = document.getElementById("content__container__detailView");

  contentRegister.style.display = "none";
  contentLogin.style.display = "none";
  frontpage.style.display = "none";
  searchResults.style.display = "none";
  detailView.style.display = "none";
}

function showPage(pageID) {
  hideEveryPage();
  document.getElementById(pageID).style.display = "flex";
}

function logoButtonPressed() {
  if (loggedIn()) {
    showPage("content__container__frontpage");
  } else {
    showPage("content__container__frontpage");
  }
}

function loginLogoutButtonPressed() {
  if (loggedIn()) {
    logout();
  } else {
    showPage("content__container__login");
  }
  updateButtons();
}

function registerButtonPressed() {
  showPage("content__container__register");
}

// Add a new preference
function plusButtonPressed() {
  var container = document.getElementById("preferences__selections__container");
  const inputs = document.querySelectorAll(".preferences__selection__input");

  for (const input of inputs) {
    if (input.innerHTML === "") {
      return;
    }
  }

  var child =
    ' <div class="preferences__selection"> <span class="preferences__selection__input" contenteditable="true"></span> <img class="preferences__selection__img" onclick="deletePreferenceButtonPressed(this)" src="images/icons/cross.png" alt="preferenes" /> </div>';
  container.insertAdjacentHTML("afterbegin", child);
}

// Delete selected preference
function deletePreferenceButtonPressed(element) {
  var container = document.getElementById("preferences__selections__container");
  var parent = element.parentNode;
  container.removeChild(parent);
}

function updateProfile() {
  var name = document.getElementById("profile__header");
  var text = document.getElementById("personal__information__text");
  var image = document.getElementById("profile__img");
  var image2 = document.getElementById("profile__img2");

  var users = JSON.parse(localStorage.getItem("users"));
  if (users) {
    users.forEach(function (user) {
      if (user.loggedIn) {
        if (user.image) {
          image.src = user.image;
          image2.src = user.image;
        } else {
          image.src = "images/profile.svg";
          image2.src = "images/profile.svg";
        }
        name.innerHTML = user.firstName + " " + user.lastName;
        text.innerHTML =
          user.firstName +
          " " +
          user.lastName +
          " is a renowned restaurant reviewer from Spain. His favorite restaurants are McDonald's and Burger King. Member since 2015.";
      }
    });
  }
}
