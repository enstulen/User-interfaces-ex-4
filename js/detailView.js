function showHotel() {
    var currentHotel = JSON.parse(localStorage.getItem("currentHotel"));

    $("#detailView").contents().find("#hotelName").html(currentHotel.name);
    $("#detailView").contents().find("#price").html(currentHotel.price);
    $("#detailView").contents().find("#hotelDescription").html(currentHotel.description);
    $("#detailView").contents().find("#hotelImage").attr("src", currentHotel.image);

    $("#detailView").contents().find("#share").jsSocials({
        showLabel: false,
        showCount: false,
        shares: ["email", "twitter", "facebook", "googleplus", "linkedin", "pinterest", "stumbleupon", "whatsapp"]
    });
}

