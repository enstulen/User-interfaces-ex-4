//If localStorage doesn't have any hotels, this is the hotels that are added.
//If any changes are made here, make sure to clear the localstorage
const hotels = [
    {
        id: 0,
        name: "NH Hotel!",
        city: "oslo",
        image: "../images/restaurants/restaurant2.jpg",
        price: 400,
        description: "This hotel can be found everywhere across the city center. It is a great hotel for both couples and families as they provide different rooms. The spa and the pool next to the hotel are very clean and have a lot of space.",
        reviews: [{
            header: "This hotel has a great restaurant",
            text: "Good attention to detail. A little noisy, but the food was great. Would recommend trying the fish they serve. The hotel indeed has a great pool, which my kids and I really enjoyed.",
            score: 8,
        },
        {
            header: "NH is always a good option",
            text: "I stayed in this hotel with my wife for a week when we were visiting Oslo. I already had some great experience with NH hotels and this one didn't disappoint as well. We had a beautiful view from the fourth floor, so I recommend asking for a room from at least the third floor on in order to see the view.",
            score: 7,
        }]
    },
    {
        id: 1,
        name: "Cityhostel",
        city: "madrid",
        image: "../images/restaurants/restaurant1.jpg",
        price: 150,
        description: "This hostel is only five minutes walking from the central square and has plenty of rooms for 1,2,4 and 8 people.",
        reviews: [{
            header: "horrible hostel",
            text: "I just returned from a weekend with my friends here and got so angry I wanted to write a review as fast as possible. When we arrived in Madrid, we found out the room we booked was already full and no other rooms were available. We had to look for another accomodation and what made it even worse was that we only got half of our money back.",
            score: 3,
        },
        {
            header: "Cheapest is not always good enough.",
            text: "My friends and I were planning a trip to Madrid and as we are still students, we wanted to have the cheapest option. Then this one turned out the be cheapest, however for the next time we should also take quality in account, as this hostel indeed showed why it was so cheap. The beds were very hard and there was always noise from outside.",
            score: 4,
        }]
    },
    {
        id: 2,
        name: "The Crown hotel",
        city: "london",
        image: "../images/restaurants/hotel1.jpg",
        price: 650,
        description: "A very neat hotel which does honour its name. You feel like a king or queen sleeping here.",
        reviews: [{
            header: "Luxury experience",
            text: "Normally I never sleep in such pricy hotels, but as I had someting to celebrate, we decided to sleep here for one night. However the experience was so great, we decided to book two extra nights. That was no problem and everything was arranged for us. I fell in love with such expensive hotels.",
            score: 9,
        }]
    },
    {
        id: 3,
        name: "Seaview Hotel",
        city: "stockholm",
        image: "../images/restaurants/hotel2.jpg",
        price: 315,
        description: "This hotel is located next to the port in Stockholm and looks out over the sea. It is a great hotel with a beautiful lounge room.",
        reviews: [{
            header: "Header",
            text: "Regardless of the price, the staff treated my excellent during my short stay here. From the moment I entered I felt like a king and that feeling didn't disappear until I had left the hotel. They were really friendly and suggested great activities to do.",
            score: 9,
        },
        {
            header: "Best hotel I ever slept at.",
            text: "My brand new husband and I had planned a honeymoon to Stockholm and we wanted to be perfect. This hotel turned out to be the best option and it for sure did amaze us. The service, the lounge room, the restaurant everything was perfect. We had an excellent week.",
            score: 10,
        }]
    },
    {
        id: 4,
        name: "Hotel the milestone",
        city: "stockholm",
        image: "../images/restaurants/hotel3.jpg",
        price: 350,
        description: "When you want to escape the freezing cold during a winter in Stockholm, hop in the quaint sauna they have here!",
        reviews: [{
            header: "Great little secret",
            text: "When you book a room here, you really should ask where the name of the hotel comes from. You'll never believe what the history behind it is.",
            score: 7,
        },
        {
            header: "Very well-run hotel.",
            text: "I am a huge fan of spas and that was also the main reason for booking a room here. I prefer travelling on my own and that was definitely no problem here. The service was spectacular and I felt great in the spa.",
            score: 8,
        }]
    },
    {
        id: 5,
        name: "Four quarters hostel",
        city: "budapest",
        image: "../images/restaurants/hotel4.jpg",
        price: 180,
        description: "It is maybe a little hard to find, as the entrance of this hotel is inside a park, but they really try to give you a time of your live.",
        reviews: [{
            header: "Use google maps when arriving",
            text: "The previous statement of the hostel being hard to find is definitely true as we looked for it for over an hour. However once we phoned the reception, the guided us to the entrance as they are quite experienced with it. After that, only when we arrived home really drunk we had some problems finding the hostel back again.",
            score: 7,
        },
        {
            header: "Looked like a fairytale",
            text: "From the moment we entered the park and went trought the beautiful door, we felt like we entered a fairytale. On every wall and ceiling decoration was present and gave a cute and explosing impression. My daughter, who is seven years old, loved every part of it.",
            score: 9,
        },
        {
            header: "Cheapest is not always good enough.",
            text: "The rooms were very busy, which I did not really like. My personal opinion is that the service should be the most important part a hotel should focus on and not how the hotel is decorated. So that's maybe why I felt the service a bit below average. Nevertheless do I like the effort they put in designing the rooms.",
            score: 6,
        }]
    },
    {
        id: 6,
        name: "Prestige hotel",
        city: "madrid",
        image: "../images/restaurants/hotel5.jpg",
        price: 350,
        description: "The Prestige hotel is located very close to a hub of public transport, so going to the city center won't be any problem.",
        reviews: [{
            header: "Definitely not a place to stay!",
            text: "We were glad that the hotel was so close to a metro station to go the city center, because we didn't want to stay much longer in the hotel than needed. The beds were dirty when we checked in, and even after changing them, we didn't feel comfortable staying in our room.",
            score: 5,
        }]
    },
    {
        id: 7,
        name: "Holiday Inn",
        city: "madrid",
        image: "../images/restaurants/hotel6.jpg",
        price: 240,
        description: "A simple hotel close to the airport",
        reviews: [{
            header: "Recommended when arriving late",
            text: "Our flight would arrive in the middle of the night, and after 11 hours of flying, we didn't feel like travelling even further. That is why we decided to book a room at Holiday Inn just for one night as it was so close to the airport. Luckily it was only one night, as it indeed was a very basic hotel.",
            score: 6,
        },
        {
            header: "Cheap but logic option.",
            text: "Before the long flight back home, we wanted to sleep quite close to the airport. As we are experienced with missing flights, we didn't want that to happen once again. So it was a logic choice.",
            score: 4,
        }]
    },
];
//Clicking on a hotel takes you to the detailView
function containerItemPressed(e, i) {
    e = e || window.event;
    var target = e.target || e.srcElement;
    if (target.id !== "favorite" && target.id !== "favoriteImage") {
        var hotelsLocalStorage = JSON.parse(localStorage.getItem("hotels"));
        localStorage.setItem("currentHotel", JSON.stringify(hotelsLocalStorage[i]));
        localStorage.setItem("currentHotelIndex", JSON.stringify(i));
        window.parent.postMessage('goToDetailView', '*');
    }
};
//Clicking on the "star" to favorite a hotel. Will save the hotel as a favorite for the current loggedIn user
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

$(document).ready(function () {
    //Set the hotels in localstorage if it's empty
    if (localStorage.getItem("hotels") == null) {
        localStorage.setItem("hotels", JSON.stringify(hotels));
    }
    //Initialize search JQuery plugin (the empty search is implemented inside the plugin)
    $(".search__field").search();

    //Get hotels from localstorage and present them with Jquery. Data-search is for the search param
    var hotelsLocalStorage = JSON.parse(localStorage.getItem("hotels"));
    for (i = 0; i < hotelsLocalStorage.length; i++) {
        var image = hotelsLocalStorage[i].image;
        var starImage = '../images/icons/star.png';
        var starImageFilled = '../images/icons/star_filled.png';
        var name = hotelsLocalStorage[i].name;
        var price = hotelsLocalStorage[i].price;
        var description = hotelsLocalStorage[i].description;
        var city = hotelsLocalStorage[i].city;
        if (loggedIn()) {
            if (isFavorite(i)) {
                $("#profile").contents().find(".containerItems").append("<div data-search=" + city + " onClick='containerItemPressed(event, " + i + ")' class= 'container__item' >  <img class='container__item__image' src=" + image + "> <div class='container__headerText'> <p class='container__item__text'>" + name + "</p> <p class='container__item__text'>" + price + "€" + "</p> </div> <p class='container__item__subtext'>" + description + "</p> </div>");
                $(".containerItems").append("<div data-search=" + city + " onClick='containerItemPressed(event, " + i + ")' class= 'container__item' > <div class='container__favoriteContainer' onmouseover='hover(this);' onmouseout='unhover(this);' onClick='favoriteContainerPressed(this," + i + ")' id='favorite'> <img class='container__favoriteContainer__image' id='favoriteImage' src=" + starImageFilled + "> </div> <img class='container__item__image' src=" + image + "> <div class='container__headerText'> <p class='container__item__text'>" + name + "</p> <p class='container__item__text'>" + price + "€" + "</p> </div> <p class='container__item__subtext'>" + description + "</p> </div>");
            } else {
                $(".containerItems").append("<div data-search=" + city + " onClick='containerItemPressed(event, " + i + ")' class= 'container__item' > <div class='container__favoriteContainer' onmouseover='hover(this);' onmouseout='unhover(this);' onClick='favoriteContainerPressed(this," + i + ")' id='favorite'> <img class='container__favoriteContainer__image' id='favoriteImage' src=" + starImage + "> </div> <img class='container__item__image' src=" + image + "> <div class='container__headerText'> <p class='container__item__text'>" + name + "</p> <p class='container__item__text'>" + price + "€" + "</p> </div> <p class='container__item__subtext'>" + description + "</p> </div>");
            }
        } else {
            $(".containerItems").append("<div data-search=" + city + " onClick='containerItemPressed(event, " + i + ")' class= 'container__item' >  <img class='container__item__image' src=" + image + "> <div class='container__headerText'> <p class='container__item__text'>" + name + "</p> <p class='container__item__text'>" + price + "€" + "</p> </div> <p class='container__item__subtext'>" + description + "</p> </div>");
        }
    }
});

//Hovering the favorite button
function hover(element) {
    changeFavoriteImage(element);
}
//Hovering the favorite button
function unhover(element) {
    changeFavoriteImage(element);
}
//Change favoriteImage on hover to filled/not-filled
function changeFavoriteImage(element) {
    if (element.getElementsByTagName('img')[0].getAttribute('src') === '../images/icons/star.png') {
        element.getElementsByTagName('img')[0].setAttribute('src', '../images/icons/star_filled.png');
    } else {
        element.getElementsByTagName('img')[0].setAttribute('src', '../images/icons/star.png');
    }
}
//Check if user is logged in
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
//Get the currently logged in user
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
//Check if "i" is favorite for the currently logged in user
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
