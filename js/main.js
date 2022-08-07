let navbar = document.querySelector('.navbar');
let cart = document.querySelector('.cart-items-container');
let search_form = document.querySelector('.search-form');
document.querySelector('#menu-btn').onclick =()=>{
    navbar.classList.toggle('active');
    cart.classList.remove('active');
    search_form.classList.remove('active');
}
document.querySelector('#cart-btn').onclick =()=>{
    cart.classList.toggle('active');
    navbar.classList.remove('active');
    search_form.classList.remove('active');

}
document.querySelector('#search-btn').onclick =()=>{
    search_form.classList.toggle('active');
    navbar.classList.remove('active');
    cart.classList.remove('active');
} 
window.onscroll = ()=>{
    navbar.classList.remove('active');
    cart.classList.remove('active');
    search_form.classList.remove('active');
}