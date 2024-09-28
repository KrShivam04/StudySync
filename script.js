
const buttonClicked  = () => {
    let userConfirmed  = confirm("Navigating to contact us page");
    if  (userConfirmed) {
        console.log("Hello")
        LoadHTML();
    }
    else {
        console.log("Nahi h ")
    }
}

document.getElementById('contactButton').addEventListener('click', buttonClicked);

const LoadHTML = () => {
    console.log("hello")
    window.open("ContactFolder/contact.html", "_blank");

}

document.querySelector('.menuButton').addEventListener('click', function() {
    console.log("button clicked!");
    window.location.href = "ResNav/index.html";
});






