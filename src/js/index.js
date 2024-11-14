const nameElem = document.querySelector("input[name=fullname]");
// nameElem.style.color = "red";


nameElem.addEventListener("input", (e) => {
    // initialize get request

    // send reauest with input element's value

    // retrive       
})

// todo: search bar animation
const searchBarElem = document.querySelector(".search-bar");
searchBarElem.addEventListener("focus", (e) => { 
    e.target.style.animation = "search-animation";
})