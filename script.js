const input = document.querySelector("#pass-field"),
    copyBtn = document.querySelector("#copyBtn"),
    btn = document.querySelector("#btn"),
    char = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789@#$%^&*()_+/-|=";


btn.addEventListener('click', () => {
    let i, passList = "";
    for (i = 0; i < 16; i++) {
        passList = passList + char.charAt(
            Math.floor(Math.random() * char.length)
        );
    }
    input.value = passList;
});

copyBtn.addEventListener("click", () => {
    input.select();
    document.execCommand('copy');
})