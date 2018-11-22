$(document).ready(function () {
  $(".slideshow").slick({
    autoplay: true,
    dots: true,
    arrows: true,
    centerMode: true
  });
  $(".search__field").search();
});

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
    ' <div class="preferences__selection"> <span class="preferences__selection__input" contenteditable="true"></span> <img class="preferences__selection__img" onclick="deletePreferenceButtonPressed(this)" src="../images/icons/cross.png" alt="preferenes" /> </div>';
  container.insertAdjacentHTML("afterbegin", child);
}

// Delete selected preference
function deletePreferenceButtonPressed(element) {
  var container = document.getElementById("preferences__selections__container");
  var parent = element.parentNode;
  container.removeChild(parent);
}
