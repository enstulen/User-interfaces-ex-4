function showHotel() {
    var currentHotel = JSON.parse(localStorage.getItem("currentHotel"));

    $("#detailView").contents().find("#hotelName").html(currentHotel.name);
    $("#detailView").contents().find("#price").html(currentHotel.price);
    $("#detailView").contents().find("#hotelDescription").html(currentHotel.description);
    $("#detailView").contents().find("#hotelImage").attr("src", currentHotel.image);
    $("#detailView").contents().find(".detailView__reviews__container").empty();

    $("#detailView").contents().find(".detailView__reviews__inputs").hide();
    $("#detailView").contents().find(".shareContainer").hide();

    for (var i = 0; i < currentHotel.reviews.length; i++) {
        var image = "../images/profile.svg"
        var header = currentHotel.reviews[i].header;
        var text = currentHotel.reviews[i].text;
        var score = currentHotel.reviews[i].score;
        $("#detailView").contents().find(".detailView__reviews__container").append("<div class='detailView__reviews__review flex-row'><img class= 'detailView__reviews__review__image' src=" + image + "> <div class= 'detailView__reviews__review__text' > <h2>" + header + "</h2> <p class='detailView__reviews__review__subtext'>" + text + "</p> </div > <h1 class='detailView__reviews__review__score'>" + score + "/10</h1> </div> ");
    }
    if (loggedIn()) {
        $("#detailView").contents().find(".detailView__reviews__inputs").show();
        $("#detailView").contents().find(".shareContainer").show();

        $("#detailView").contents().find("#share").jsSocials({
            showLabel: false,
            showCount: false,
            shares: ["email", "twitter", "facebook", "googleplus", "linkedin", "pinterest", "stumbleupon", "whatsapp"]
        });
    }
}

function submitReviewButtonPressed() {
    var currentHotelIndex = JSON.parse(localStorage.getItem("currentHotelIndex"));
    var hotelsLocalStorage = JSON.parse(localStorage.getItem("hotels"));

    var header = $("#reviewTitle").val();
    var text = $("#reviewText").val();
    var score = $("#reviewScore").val();
    var image = "../images/profile.svg"

    hotelsLocalStorage[currentHotelIndex].reviews.push({
        header: header,
        text: text,
        score: score
    })
    localStorage.setItem("hotels", JSON.stringify(hotelsLocalStorage));

    $(".detailView__reviews__container").append("<div class='detailView__reviews__review flex-row'><img class= 'detailView__reviews__review__image' src=" + image + "> <div class= 'detailView__reviews__review__text' > <h2>" + header + "</h2> <p class='detailView__reviews__review__subtext'>" + text + "</p> </div > <h1 class='detailView__reviews__review__score'>" + score + "/10</h1> </div> ");


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

