const usersData = [
  {
    name: "Bella",
    avatar: "dog-bella.jpg",
    age: 43,
    bio: "Yup, that's my dog. U can meet him if you want",
    hasBeenSwiped: false,
    hasBeenLiked: false,
  },
  {
    name: "Andre",
    avatar: "andre-tan.jpg",
    age: 30,
    bio: "How you doin?",
    hasBeenSwiped: false,
    hasBeenLiked: false,
  },
  {
    name: "Austin",
    avatar: "austin-wade.jpg",
    age: 22,
    bio: "I'm looking a girl from Scotland. I am crazy guy, you will never get bored",
    hasBeenSwiped: false,
    hasBeenLiked: false,
  },
  {
    name: "Henri",
    avatar: "henri-pham.jpg",
    age: 23,
    bio: "I'm really pretty and fun, please text me to chat with you <3",
    hasBeenSwiped: false,
    hasBeenLiked: false,
  },
  {
    name: "Joshua",
    avatar: "joshua-rawson.jpg",
    age: 20,
    bio: "I have nothing to say. I just need love!",
    hasBeenSwiped: false,
    hasBeenLiked: false,
  },
  {
    name: "Marcos",
    avatar: "marcos-paulo.jpg",
    age: 26,
    bio: "Love Travel, fun, drink and I love life. join me to have fun!",
    hasBeenSwiped: false,
    hasBeenLiked: false,
  },
  {
    name: "Vince",
    avatar: "vince-fleming.jpg",
    age: 25,
    bio: "I am programer with high salary and really wonderful carrer path. I need girl who become my best-girlfriend",
    hasBeenSwiped: false,
    hasBeenLiked: false,
  },
];

let usersArray = [];
for (let i = 0; i < usersData.length; i++) {
  usersArray[i] = i;
}
let isWaiting = false;

function getNewUser() {
  const nextUserData = usersData[usersArray.shift()];
  return nextUserData ? new User(nextUserData) : {};
}

class User {
  constructor(data) {
    Object.assign(this, data);
  }

  getAlternateHtml() {
    return `<h2 class="NoMoreFeed">We are sorry that there are No More users to see...<br> Please Try To Refresh a page</h2>`;
  }
  getUsersHtml() {
    const { name, avatar, age, bio } = this;
    return `<img src="${avatar}" alt="user's photo" class="mainimage" />
    <div id="liked" class="hidden "><img src="badge-like.png" class="badge green"/></div>
    <div id="rejected" class="hidden "><img src="badge-nope.png" class="badge red"/></div>
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
