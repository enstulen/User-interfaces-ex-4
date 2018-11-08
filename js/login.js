function onFormSubmit() {
  var user = $('#form__login')
    .serializeArray()
    .reduce(function(obj, item) {
      obj[item.name] = item.value;
      return obj;
    }, {});

  var users = JSON.parse(localStorage.getItem('users'));
  var shouldRedirect = false;
  if (users) {
    var updatedUsers = users.map(function(userMap) {
      if (
        user.username == userMap.username &&
        user.password == userMap.password
      ) {
        var newUser = Object.assign({}, userMap);
        newUser.loggedIn = true;
        shouldRedirect = true;
        return newUser;
      } else {
        return userMap;
      }
    });

    localStorage.setItem('users', JSON.stringify(updatedUsers));
    if (shouldRedirect) {
      window.parent.postMessage('message', '*');
    }
  }
}
