// function selectText() {
//     const input = document.getElementById("text-box");
//     input.focus();
//     input.select();
// }

// selectText();

document.querySelectorAll('button').forEach((button) => {
    button.addEventListener("click", (e) => {
        const input = e.srcElement.previousElementSibling;
        try {
            input.showPicker();
        } catch {
            window.alert(console.error())
}

    })
})
