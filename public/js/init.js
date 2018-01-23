$(document).ready(function(){
    $(".button-collapse").sideNav();
    $('.parallax').parallax();
    $('.single-item').slick({
        vertical: true,
        mobileFirst: true
    });
});

function handleClick(e) {
    e.preventDefault();
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;

    document.getElementById('thanks').innerHTML = 'Thank you ' + firstName + ' ' + lastName + ', ' + 'for your interest. I will reach out to you at ' + email + ' shortly.'
}