const hotels = [
    {
        name: "NH Hotel!",
        city: "Oslo",
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
        name: "Cityhostel",
        city: "Madrid",
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
        name: "The Crown hotel",
        city: "London",
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
        name: "Seaview Hotel",
        city: "Stockholm",
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
        name: "Hotel the milestone",
        city: "Stockholm",
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
        name: "Four quarters hostel",
        city: "Budapest",
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
        name: "Prestige hotel",
        city: "Madrid",
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
        name: "Holiday Inn",
        city: "Madrid",
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

function containerItemPressed(i) {
    //if (localStorage.getItem("hotels") == null) {
    localStorage.setItem("hotels", JSON.stringify(hotels));
    //}
    var hotelsLocalStorage = JSON.parse(localStorage.getItem("hotels"));
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
