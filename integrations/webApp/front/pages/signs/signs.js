import { getSignUser, _, navigate } from "../../js/tools.js";

const [leftSideElement] = _([".signatorys-container"]);

const navBarButtons = document.querySelectorAll(".icon-container");

navBarButtons.forEach(el => {
    el.addEventListener('click', (e) => {
        
        // console.log(e.target);
        navigate(e.target.getAttribute("target"))
    })
})

const render = (pseudo, phoneNumber, level) => {
    return ` <div class="signatory-container" onclick= " window.location.href='https://wa.me/+221${phoneNumber}'"  > <div class="left-side" ><div class="signatory-user-name" >${pseudo}</div><div class="signatory-user-real-name" > <a href="${phoneNumber}" target='_blank' > </a> ${phoneNumber}</div></div><div class="signatureReceiver-user-signatureNumber" >${level}</div></div> </div>`
}


const res = getSignUser().reverse().map( v => {
    
    return  render(v.userDetails.pseudo, v.userDetails.phoneNumber , v.niveau  )
} ).join('')

leftSideElement.innerHTML = res
