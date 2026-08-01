window.onload = function () {
    console.log("Smart College Website Loaded Successfully!");

    const button = document.querySelector(".btn");

    if (button) {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            alert("Welcome to Smart College! Explore our courses.");
        });
    }
};
