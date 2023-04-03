// Remember to import the data and Dog class!
import usersData from "./data.js";

let usersArray = [];
for (let i = 0; i < usersData.length; i++) {
  usersArray[i] = i;
}
let isWaiting = false;

function getNewUser() {
  const nextUserData = usersData[usersArray.shift()];
  console.log(nextUserData);
  return nextUserData ? new User(nextUserData) : {};
}

class User {
  constructor(data) {
    Object.assign(this, data);
  }

  getAlternateHtml() {
    return `<h2>We are sorry that there are No More users to see...</h2>`;
  }
  getUsersHtml() {
    const { name, avatar, age, bio } = this;
    return `<img src="${avatar}" alt="user's photo" class="mainimage" />
    <div id="liked" class="hidden "><img src="images/badge-like.png" class="badge green"/></div>
    <div id="rejected" class="hidden "><img src="images/badge-nope.png" class="badge red"/></div>
    <div class="user-info">
      <h2>${name}, ${age}</h2>
      <p> ${bio} </p>
    </div>`;
  }
}

document
  .getElementById("icon-heart")
  .addEventListener("click", renderNewUserLiked);
document
  .getElementById("icon-X")
  .addEventListener("click", renderNewUserRejected);

let usersInterface = getNewUser();

function renderNewUserRejected() {
  document.getElementById("rejected").classList.toggle("hidden");
  usersInterface = getNewUser();
  usersInterface.hasBeenSwiped = true;
  render();
}
function renderNewUserLiked() {
  document.getElementById("liked").classList.toggle("hidden");
  usersInterface = getNewUser();
  usersInterface.hasBeenLiked = true;
  render();
}

function render() {
  if (usersArray.length === 0) {
    document.getElementById("main").innerHTML =
      usersInterface.getAlternateHtml();
  }
  if (!isWaiting) {
    setTimeout(() => {
      document.getElementById("user-interface").innerHTML =
        usersInterface.getUsersHtml();
    }, 300);
  }
}
render();
console.log(usersInterface.hasBeenSwiped);
