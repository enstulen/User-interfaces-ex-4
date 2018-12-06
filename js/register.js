//On submitting for, a new user is created and added to localStorage
function onFormSubmit() {
  var user = $("#form__register")
    .serializeArray()
    .reduce(function (obj, item) {
      obj[item.name] = item.value;
      return obj;
    }, {});

  user.loggedIn = true;
  user.favorites = []

  var pic = document.getElementById("file__input__profilePicture").files[0];

  var reader = new FileReader();
  reader.onload = function (e) {
    var imgURL = reader.result;
    user.image = imgURL;
    saveUser(user);
  };
  if (pic) {
    reader.readAsDataURL(pic);
  } else {
    saveUser(user);
  }
}
//User saved in localstorage
function saveUser(user) {
  var users = JSON.parse(localStorage.getItem("users"));
  if (!users) {
    var users = [];
    users.push(user);
  } else {
    users.push(user);
  }
  localStorage.setItem("users", JSON.stringify(users));

  window.parent.postMessage("message", "*");
}
