const passLength = document.getElementById("passLength");
const genrateBtn = document.querySelector(".generate-btn");
const yourPassword = document.getElementById("yourPassword");

let myPassword = "";
let myLength = Number(passLength.value);
genrateBtn.addEventListener("click",() => {
  GeneratPass();
})

function GeneratPass(){
  const allChars = "abcdefghijklmn|~ÁâäÈêËopqrstuvwxyz0123456789ABCDEFGHIJK)¥£€$¢&#*}LMNOPQRSTUVWXYZ@!%$/_-(:.;?"; 
  let myLength = Number(passLength.value);
  for(let i = 0 ; i< myLength ;i++){
    let random = Math.floor(Math.random()*allChars.length);
    myPassword = myPassword + allChars.charAt(random);
  }
  yourPassword.textContent = `${myPassword}`;
  yourPassword.classList.add("yourPasswordDisplay");
  myPassword="";
}
