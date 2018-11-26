//Economic class: 1 = Cheap, 2 = Middle, 3 = Expensive
const more_information = {
  cornerBear: {
    name: "The Corner Bear",
    image: "./images/restaurants/restaurant1.jpg",
    contactName: "Carlos Johnson",
    website: "http://www.cornerbear.com/",
    phoneNumber: 860730589,
    description: "Jalla",
    typeOfFood: ["Fish", "Lobster"],
    economicClass: 1,
    review:
      "Good attention to detail. A little noisy, but the food was great. Would recommend trying the fish they serve. 6/10"
  },
  parlour: {
    name: "The Parlour",
    image: "./images/restaurants/restaurant2.jpg",
    contactName: "George Read",
    website: "http://www.Theparlour.com/",
    phoneNumber: 234980234,
    description: "Fast",
    typeOfFood: ["Meat", "Cereals"],
    economicClass: 1,
    review:
      "Very nice staff. The food was OK, but the service was amazing. The decorations were also on point. I would still recommend a trip to this restaurant. I visited this back in 2013, but I bet it is still the same as it was then. 5/10"
  },
  frenchClove: {
    name: "The French Clove",
    image: "./images/restaurants/restaurant3.jpg",
    contactName: "Trinette Moquin",
    website: "http://www.frenchClove.com/",
    phoneNumber: 740770465,
    description: "Serius",
    typeOfFood: ["Salads", "Sandwiches"],
    economicClass: 3,
    review:
      "Excusite food. Very helpful and kind staff. The wine, although expensive, is amazing. Would love to go again. 9/10"
  }
};

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

  contentRegister.style.display = "none";
  contentLogin.style.display = "none";
  frontpage.style.display = "none";
  searchResults.style.display = "none";

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
