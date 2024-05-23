import {_, navigate, setUser} from '../../js/tools.js';


const [firstNameInput, lastNameInput] = _(["#firstname", "#lastname"]);

_(["#submit-btn"])[0]
.addEventListener ('click', () => {
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;

  setUser( { firstName, lastName } )

  navigate("signature/index.html")
  // console.log( firstName, lastName );
})
