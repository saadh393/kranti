document.querySelector("#hamburger").addEventListener("click", function () {
  if (document.querySelector("#hamburger").dataset.state === "closed") {
    document.querySelector("#one").style.display = "none";
    $("#two").attr({ x: "3.04272", y: "1.48621", width: "15.5153", height: "1.49418", rx: "0.747088", transform: "rotate(45 3.04272 1.48621)", fill: "#fff" });
    $("#three").attr({ x: "1.98462", y: "12.4589", width: "15.52", height: "1.49418", rx: "0.747088", transform: "rotate(-45 1.98462 12.4589)", fill: "#fff" });

    document.querySelector("#hamburger").dataset.state = "opened";
    $("#mobileNav").css({ height: "190px" });
  } else {
    document.querySelector("#one").style.display = "block";
    $("#two").attr({ x: "0.193237", y: "7.26367", width: "15.5153", height: "1.49418", rx: "0.747088", transform: "rotate(0 0 0)" });
    $("#three").attr({ x: "4.2196", y: "13.2584", width: "11.4889", height: "1.49418", rx: "0.747088", transform: "rotate(0 0 0)" });
    $("#mobileNav").css({ height: "0px" });
    document.querySelector("#hamburger").dataset.state = "closed";
  }
});
$(document).ready(function () {
  console.log("ready");
  $(window).on("resize", function (event) {
    if ($(this).width() > 768 && document.querySelector("#hamburger").dataset.state === "opened") {
      $("#two").attr({ x: "0.193237", y: "7.26367", width: "15.5153", height: "1.49418", rx: "0.747088", transform: "rotate(0 0 0)" });
      $("#three").attr({ x: "4.2196", y: "13.2584", width: "11.4889", height: "1.49418", rx: "0.747088", transform: "rotate(0 0 0)" });
      $("#mobileNav").css({ height: "0px" });
      document.querySelector("#hamburger").dataset.state = "closed";
    }
  });
});

document.querySelector(".place-card-large").styles.display = "none";
