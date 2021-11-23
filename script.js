/*
Autoclicker for https://cpstest.org/
Steps:
1. Open console (Ctrl + shift + i or right click -> inspect - might be blocked on some computers)
2. Press "console" tab
3. Paste in the script
4. Yes :)
*/

let spammer = null;

document.querySelector("#start").onclick = function() {
    spammer = setInterval(function() {
    document.querySelector("#clickarea").dispatchEvent(new Event("click"));
}, 1);
};

const modalObserver = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
        if(mutation.type === 'attributes') {
            clearInterval(spammer);
        }
    }
}).observe(document.querySelector('#largesizemodal'), {attributes: true});


document.querySelector("#start").click();
