const hotels = [
    {
        name: "NH Hotel!",
        city: "oslo",
        image: "../images/restaurants/restaurant2.jpg",
        price: 400,
        description: "!This hotel can be found everywhere across the city center. It is a great hotel for both couples and families as they provide different rooms. The spa and the pool next to the hotel ...",
        reviews: [{
            header: "Header",
            text: "Good attention to detail. A little noisy, but the food was great. Would recommend trying the fish they serve",
            score: 5,
        },
        {
            header: "Header2",
            text: "Good attention to detail. A little noisy, but the food was great. Would recommend trying the fish they serve",
            score: 6
        }]
    },
    {
        name: "NH Hotel2",
        city: "madrid",
        image: "../images/restaurants/restaurant1.jpg",
        price: 350,
        description: "This hotel can be found everywhere across the city center. It is a great hotel for both couples and families as they provide different rooms. The spa and the pool next to the hotel ...",
        reviews: [{
            header: "Header",
            text: "Good attention to detail. A little noisy, but the food was great. Would recommend trying the fish they serve",
            score: 5
        }]
    },
    {
        name: "NH Hotel",
        city: "madrid",
        image: "../images/restaurants/restaurant1.jpg",
        price: 350,
        description: "This hotel can be found everywhere across the city center. It is a great hotel for both couples and families as they provide different rooms. The spa and the pool next to the hotel ...",
        reviews: [{
            header: "Header",
            text: "Good attention to detail. A little noisy, but the food was great. Would recommend trying the fish they serve",
            score: 5
        }]
    },
    {
        name: "NH Hotel",
        city: "stockholm",
        image: "../images/restaurants/restaurant1.jpg",
        price: 350,
        description: "This hotel can be found everywhere across the city center. It is a great hotel for both couples and families as they provide different rooms. The spa and the pool next to the hotel ...",
        reviews: [{
            header: "Header",
            text: "Good attention to detail. A little noisy, but the food was great. Would recommend trying the fish they serve",
            score: 5
        }]
    },
    {
        name: "NH Hotel",
        city: "helsinki",
        image: "../images/restaurants/restaurant1.jpg",
        price: 350,
        description: "This hotel can be found everywhere across the city center. It is a great hotel for both couples and families as they provide different rooms. The spa and the pool next to the hotel ...",
        reviews: [{
            header: "Header",
            text: "Good attention to detail. A little noisy, but the food was great. Would recommend trying the fish they serve",
            score: 5
        }]
    },
    {
        name: "NH Hotel",
        city: "budapest",
        image: "../images/restaurants/restaurant1.jpg",
        price: 350,
        description: "This hotel can be found everywhere across the city center. It is a great hotel for both couples and families as they provide different rooms. The spa and the pool next to the hotel ...",
        reviews: [{
            header: "Header",
            text: "Good attention to detail. A little noisy, but the food was great. Would recommend trying the fish they serve",
            score: 5
        }]
    },
    {
        name: "NH Hotel",
        city: "madrid",
        image: "../images/restaurants/restaurant1.jpg",
        price: 350,
        description: "This hotel can be found everywhere across the city center. It is a great hotel for both couples and families as they provide different rooms. The spa and the pool next to the hotel ...",
        reviews: [{
            header: "Header",
            text: "Good attention to detail. A little noisy, but the food was great. Would recommend trying the fish they serve",
            score: 5
        }]
    },
    {
        name: "NH Hotelz",
        city: "madrid",
        image: "../images/restaurants/restaurant1.jpg",
        price: 350,
        description: "This hotel can be found everywhere across the city center. It is a great hotel for both couples and families as they provide different rooms. The spa and the pool next to the hotel ...",
        reviews: [{
            header: "Header",
            text: "Good attention to detail. A little noisy, but the food was great. Would recommend trying the fish they serve",
            score: 5
        }]
    },
];

function containerItemPressed(i) {
    if (localStorage.getItem("hotels") == null) {
        localStorage.setItem("hotels", JSON.stringify(hotels));
    }
    var hotelsLocalStorage = JSON.parse(localStorage.getItem("hotels"));
    localStorage.setItem("currentHotelIndex", i);
    localStorage.setItem("currentHotel", JSON.stringify(hotelsLocalStorage[i]));
    window.parent.postMessage('goToDetailView', '*');
};

$(document).ready(function () {
    $(".search__field").search();
    for (i = 0; i < hotels.length; i++) {
        var image = hotels[i].image;
        var starImage = '../images/icons/star.png';
        var name = hotels[i].name;
        var price = hotels[i].price;
        var description = hotels[i].description;
        var city = hotels[i].city;
        $(".containerItems").append("<div data-search=" + city + " onClick='containerItemPressed(" + i + ")' class= 'container__item' > <div class='container__favoriteContainer'> <img class='container__favoriteContainer__image' src=" + starImage + "> </div> <img class='container__item__image' src=" + image + "> <div class='container__headerText'> <p class='container__item__text'>" + name + "</p> <p class='container__item__text'>" + price + "€" + "</p> </div> <p class='container__item__subtext'>" + description + "</p> </div>");
    }
});

