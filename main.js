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

// Show modal
function opinionClicked(restaurantName) {
  var restaurant = more_information[restaurantName];

  var modal = document.getElementById("myModal");
  modal.style.display = "block";

  var span = document.getElementsByClassName("close")[0];
  span.onclick = function() {
    modal.style.display = "none";
  };

  var modalHeader = document.getElementById("modal__header");
  var modalImage = document.getElementById("modal__image");
  var modalContactPerson = document.getElementById("modal__contact__person");
  var modalPhoneNumber = document.getElementById("modal__phone__number");
  var modalWebsite = document.getElementById("modal__website");
  var modalReview = document.getElementById("modal__review");
  var modalDescription = document.getElementById("modal__description");
  var modalFoodType = document.getElementById("modal__food_type");
  var modalPrice = document.getElementById("modal__price");

  modalHeader.innerHTML = restaurant.name;
  modalImage.src = restaurant.image;
  modalContactPerson.innerHTML = restaurant.contactName;
  modalPhoneNumber.innerHTML = restaurant.phoneNumber;
  modalWebsite.href = restaurant.website;
  modalWebsite.innerHTML = restaurant.website;
  modalReview.innerHTML = restaurant.review;
  modalDescription.innerHTML = restaurant.description;
  modalFoodType.innerHTML = restaurant.typeOfFood;
  modalPrice.innerHTML = restaurant.economicClass;

  if (restaurant.economicClass === 3) {
    modalPrice.innerHTML = "Expensive";
  } else if (restaurant.economicClass === 2) {
    modalPrice.innerHTML = "Medium";
  } else if (restaurant.economicClass === 1) {
    modalPrice.innerHTML = "Cheap";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

$(document).ready(function() {
  updateButtons();
  logoButtonPressed();
  updateProfile();
});

function loggedIn() {
  var users = JSON.parse(localStorage.getItem("users"));
  if (users) {
    var loggedIn = false;
    users.forEach(function(user) {
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
    users.map(function(user) {
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

window.addEventListener("message", function(event) {
  logoButtonPressed();
  window.location.reload(true);
});

window.addEventListener("login", function(event) {
  if (loggedIn()) {
    logoButtonPressed();
    window.location.reload(true);
  }
});

function logoButtonPressed() {
  var contentRegister = document.getElementById("content__container__register");
  var contentLogin = document.getElementById("content__container__login");
  var frontpage = document.getElementById("frontpage__container");

  if (loggedIn()) {
    frontpage.style.display = "none";
  } else {
    contentLogin.style.display = "none";
    frontpage.style.display = "flex";
  }
  contentRegister.style.display = "none";
}

function loginLogoutButtonPressed() {
  if (loggedIn()) {
    logout();
  } else {
    var contentRegister = document.getElementById(
      "content__container__register"
    );
    var frontpage = document.getElementById("frontpage__container");
    var contentLogin = document.getElementById("content__container__login");
    contentRegister.style.display = "none";
    contentLogin.style.display = "flex";
    frontpage.style.display = "none";
  }
  updateButtons();
}

function registerButtonPressed() {
  var contentRegister = document.getElementById("content__container__register");
  var contentLogin = document.getElementById("content__container__login");
  var frontpage = document.getElementById("frontpage__container");

  contentLogin.style.display = "none";
  frontpage.style.display = "none";
  contentRegister.style.display = "block";
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
    users.forEach(function(user) {
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
