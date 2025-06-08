jQuery(document).ready(function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      document.querySelector("header").style.backgroundColor = "white";
      document.querySelector(".logo").style.color = "#000000";
      document.querySelector(".searchBar").style.backgroundColor = "#F9F9F9";
      document.querySelector(".signIn").style.backgroundColor = "#F1F1F1";
      document.querySelector(".signIn").style.color = "#565656";
      document.querySelector(".signUp").style.color = "#565656";

      document.querySelector(".searchBar").style.backgroundColor = "#F9F9F9";
      document.querySelector(".searchBar::placeholder").style.color = "#C3C3C3";
      document.querySelector(".searchBar").style.color = "#000000";
    } else {
      document.querySelector("header").style.backgroundColor = "transparent";
      document.querySelector(".logo").style.color = "white";
      document.querySelector(".searchBar").style.backgroundColor =
        "rgba(255, 255, 255, 0.06)";
      document.querySelector(".signIn").style.backgroundColor =
        "rgba(217, 217, 217, 0.18)";
      document.querySelector(".signIn").style.color = "#DCDCDC";
      document.querySelector(".signUp").style.color = "#DCDCDC";
      document.querySelector(".searchBar").style.backgroundColor =
        "rgba(255, 255, 255, 0.06)";
      document.querySelector(".searchBar::placeholder").style.color =
        "rgba(219, 219, 219, 0.62)";
      document.querySelector(".searchBar").style.color = "white";
    }
  });

  $(".navi>li")
    .mouseover(function () {
      $(this).find(".submenu").stop().slideDown(500);
    })
    .mouseout(function () {
      $(this).find(".submenu").stop().slideUp(500);
    });

  $(".imgslide a:gt(0)").hide();
  setInterval(function () {
    $(".imgslide a:first-child")
      .fadeOut()
      .next("a")
      .fadeIn()
      .end()
      .appendTo(".imgslide");
  }, 3000);

  $(function () {
    $(".tabmenu>li>a").click(function () {
      $(this).parent().addClass("active").siblings().removeClass("active");
      return false;
    });
  });

  $(".notice li:first").click(function () {
    $("#modal").addClass("active");
  });
  $(".btn").click(function () {
    $("#modal").removeClass("active");
  });
});
