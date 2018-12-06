//Update buttons and show the frontpage 
$(document).ready(function () {
  updateButtons();
  logoButtonPressed();
});

//Log the user in
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

//Log the user out
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

//Update buttons in navbar based on if the user is logged in or not 
function updateButtons() {
  if (loggedIn()) {
    var registerButton = document.getElementById("register__button");
    var loginLogoutButton = document.getElementById("login__logout__button");
    var profileButton = document.getElementById("profile__button");

    profileButton.style.display = "block";
    registerButton.style.display = "none";
    loginLogoutButton.innerHTML = "Logout";
  } else {
    var registerButton = document.getElementById("register__button");
    var loginLogoutButton = document.getElementById("login__logout__button");
    var profileButton = document.getElementById("profile__button");

    profileButton.style.display = "none";
    registerButton.style.display = "block";
    loginLogoutButton.innerHTML = "Login";
  }
}

//Go to profile and update the favorites if there has been any change
function profileButtonPressed() {
  showPage("content__container__profile");
  updateFavorites();
}

//Listening to messages from iframes to switch pages or other functionality
window.addEventListener("message", function (event) {
  if (event.data == "searchButtonPressed") {
    showPage("content__container__searchResults");
  } else if (event.data == "goToDetailView") {
    showPage("content__container__detailView");
    showHotel();
  } else if (event.data == "exitButtonPressed") {
    showPage("content__container__searchResults");
  } else {
    logoButtonPressed();
    window.location.reload(true);
  }
});

//Hide every iframe
function hideEveryPage() {
  var contentRegister = document.getElementById("content__container__register");
  var contentLogin = document.getElementById("content__container__login");
  var frontpage = document.getElementById("content__container__frontpage");
  var searchResults = document.getElementById("content__container__searchResults");
  var detailView = document.getElementById("content__container__detailView");
  var profile = document.getElementById("content__container__profile");
  var aboutUs = document.getElementById("content__container__aboutUs");
  var help = document.getElementById("content__container__help");
  var policies = document.getElementById("content__container__policies");

  contentRegister.style.display = "none";
  contentLogin.style.display = "none";
  frontpage.style.display = "none";
  searchResults.style.display = "none";
  detailView.style.display = "none";
  profile.style.display = "none";
  aboutUs.style.display = "none";
  help.style.display = "none";
  policies.style.display = "none";

}
//Show the specified iframe based on id
function showPage(pageID) {
  hideEveryPage();
  document.getElementById(pageID).style.display = "flex";
}

//Go to the frontpage after pressing the logo on the top left
function logoButtonPressed() {
  showPage("content__container__frontpage");
}

//Log in or log out
function loginLogoutButtonPressed() {
  if (loggedIn()) {
    logout();
  } else {
    showPage("content__container__login");
  }
  updateButtons();
}

//Go to the register page
function registerButtonPressed() {
  showPage("content__container__register");
}
//Go to the policy page
function policyButtonPressed() {
  showPage("content__container__policies");
}
//Go to the help page
function helpButtonPressed() {
  showPage("content__container__help");
}
//Go to the about page
function aboutButtonPressed() {
  showPage("content__container__aboutUs");
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

