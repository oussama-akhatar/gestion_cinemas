function afficher_places() {

    let horaires = document.getElementById("horaire");
    if (horaires.style.display == "block") {
        document.getElementById("hora").classList.remove("active")
        horaires.style.display = "none"
    } else {
        document.getElementById("hora").classList.add("active")
        horaires.style.display = "block"
    }
}

function afficher_inputs() {
    let one = document.getElementById("one");
    let form = document.getElementById("form");
    if (form.style.display == "block") {
        one.classList.remove("btn-warning")
        one.classList.add("btn-primary")
        form.style.display = "none"
    } else {
        one.classList.remove("btn-primary")
        one.classList.add("btn-warning")
        form.style.display = "block"
    }
}