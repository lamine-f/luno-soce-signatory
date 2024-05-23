import { _, getSignatureNumber, addSignUser, getSignUser, navigate, getUser } from "../../js/tools.js"
const [countElement, levelElement, pseudoElement, phoneNumberElement, submitButton, imageElement, nameElement ] = _(["#count", "#niveau", "#pseudo", "#phonenumber", "#submit", "#image-el", "#dut1-name"]);

const navBarButtons = document.querySelectorAll(".icon-container");

navBarButtons.forEach(el => {
    el.addEventListener('click', (e) => {
        
        // console.log(e.target);
        navigate(e.target.getAttribute("target"))
    })
})

let levelValue = "";
let pseudoValue = "";
let phoneNumberValue = "";


const reloadSignatureNumber = () => {
    countElement.innerHTML = getSignatureNumber();
}

const check = () => {
    if (levelValue == "" || pseudoValue == "" || phoneNumberValue == "") submitButton.setAttribute("disabled", "true")
    else submitButton.removeAttribute("disabled")
}

levelElement.addEventListener( 'change', ({currentTarget}) => {
    levelValue = currentTarget.value ;
    imageElement.setAttribute("src", images[levelValue]);
    

    check();
});

pseudoElement.addEventListener( 'input', ({currentTarget}) => {
    pseudoValue = currentTarget.value ;
    check();
});

phoneNumberElement.addEventListener( 'input', ({currentTarget}) => {
    phoneNumberValue = currentTarget.value ;
    check();
});

submitButton.addEventListener( 'click', () => {
    pseudoValue = pseudoElement.value;
    phoneNumberValue = phoneNumberElement.value;

    // levelElement.value = ""
    // phoneNumberElement.value = "";
    // pseudoElement.value = "";

    const signUser = {
        niveau: levelValue,
        userDetails: {
            pseudo: pseudoValue,
            phoneNumber: phoneNumberValue,
        },
    }
    
    addSignUser( signUser );
    reloadSignatureNumber();
    window.location.reload()
});


const images = {
    none: "/webApp/front/pages/signature/static/yo.jpg",
    dic1: "/webApp/front/pages/signature/static/black_cat.jpeg",
    dic2: "/webApp/front/pages/signature/static/frog.webp",
    dic3: "/webApp/front/pages/signature/static/rat.jpg",
    dut2: "/webApp/front/pages/signature/static/black_goat.jpeg",
}

reloadSignatureNumber();

nameElement.innerText = getUser().firstName + " " + getUser().lastName 