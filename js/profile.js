window.onload = function () {
    updateFields();
    //updateFavorites();
};

function onFormSubmit() {
    var user = $('#form__register')
        .serializeArray()
        .reduce(function (obj, item) {
            obj[item.name] = item.value;
            return obj;
        }, {});
    var users = JSON.parse(localStorage.getItem('users'));
    var updatedUsers = users.map(function (userMap) {
        if (userMap.loggedIn) {
            var newUser = Object.assign({}, userMap);
            newUser.firstName = user.firstName;
            newUser.lastName = user.lastName;
            newUser.email = user.email;
            newUser.address = user.address;
            newUser.phone = user.phone;
            newUser.birthday = user.birthday;
            return newUser;
        } else {
            return userMap;
        }
    });

    localStorage.setItem('users', JSON.stringify(updatedUsers));

    alert('Updated!');
}
function updateFields() {
    var firstName = document.getElementById('personal_info_first_name');
    var lastName = document.getElementById('personal_info_last_name');
    var email = document.getElementById('personal_info_email');
    var address = document.getElementById('personal_info_address');
    var phone = document.getElementById('personal_info_phone');
    var birthday = document.getElementById('personal_info_birthday');

    var users = JSON.parse(localStorage.getItem('users'));
    if (users) {
        users.forEach(function (user) {
            if (user.loggedIn) {
                firstName.value = user.firstName;
                lastName.value = user.lastName;
                email.value = user.email;
                address.value = user.address;
                phone.value = user.phone;
                birthday.value = user.birthday;
            }
        });
    }
}

function updateFavorites() {
    var hotelsLocalStorage = JSON.parse(localStorage.getItem("hotels"));
    $("#profile").contents().find(".containerItems").empty()
    $(".containerItems").empty()
    for (i = 0; i < hotelsLocalStorage.length; i++) {

        var image = hotelsLocalStorage[i].image;
        var starImage = '../images/icons/star.png';
        var starImageFilled = '../images/icons/star_filled.png';
        var name = hotelsLocalStorage[i].name;
        var price = hotelsLocalStorage[i].price;
        var description = hotelsLocalStorage[i].description;
        var city = hotelsLocalStorage[i].city;
        if (isFavorite(i)) {
            $("#profile").contents().find(".containerItems").append("<div data-search=" + city + " onClick='containerItemPressed(event, " + i + ")' class= 'container__item' >  <img class='container__item__image' src=" + image + "> <div class='container__headerText'> <p class='container__item__text'>" + name + "</p> <p class='container__item__text'>" + price + "€" + "</p> </div> <p class='container__item__subtext'>" + description + "</p> </div>");
        }
    }
}

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

function getUser() {
    var users = JSON.parse(localStorage.getItem("users"));
    if (users) {
        var returnUser;
        users.forEach(function (user) {
            if (user.loggedIn) {
                returnUser = user;
            }
        });
    }
    return returnUser;
}

function isFavorite(i) {
    if (loggedIn()) {
        var user = getUser();
        for (var j = 0; j < user.favorites.length; j++) {
            if (i === user.favorites[j]) {
                return true
            }
        }
        return false
    }
}

function containerItemPressed(e, i) {
    e = e || window.event;
    var target = e.target || e.srcElement;
    if (target.id !== "favorite" && target.id !== "favoriteImage") {
        var hotelsLocalStorage = JSON.parse(localStorage.getItem("hotels"));
        localStorage.setItem("currentHotel", JSON.stringify(hotelsLocalStorage[i]));
        window.parent.postMessage('goToDetailView', '*');
    }
};

function favoriteContainerPressed(element, i) {
    changeFavoriteImage(element);

    var users = JSON.parse(localStorage.getItem('users'));
    var updatedUsers = users.map(function (userMap) {
        if (userMap.loggedIn) {
            var newUser = Object.assign({}, userMap);
            if (newUser.favorites.includes(i)) {
                var index = newUser.favorites.indexOf(i);
                if (index > -1) {
                    newUser.favorites.splice(index, 1);
                }
            } else {
                newUser.favorites.push(i);
            }
            return newUser;
        } else {
            return userMap;
        }
    });
    localStorage.setItem('users', JSON.stringify(updatedUsers));
}

function hover(element) {
    changeFavoriteImage(element);
}

function unhover(element) {
    changeFavoriteImage(element);
}

function changeFavoriteImage(element) {
    if (element.getElementsByTagName('img')[0].getAttribute('src') === '../images/icons/star.png') {
        element.getElementsByTagName('img')[0].setAttribute('src', '../images/icons/star_filled.png');
    } else {
        element.getElementsByTagName('img')[0].setAttribute('src', '../images/icons/star.png');
    }
}