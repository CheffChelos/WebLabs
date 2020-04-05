document.querySelector('.navbar').addEventListener('click', () => {
    document.getElementById("burger-check").checked = true
});
document.querySelector('.times').addEventListener('click', () =>
    document.querySelector('.popup').style.display = "none"
);
document.querySelector('.order__btn').addEventListener('click', () =>
    document.querySelector('.popup').style.display = "block"
);
