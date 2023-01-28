const tweetInput = document.getElementById("tweet-input");
const errorMessage = document.getElementById("error-message");
const charCounter = document.getElementById("character-counter");
let maxChar = 150;
let tweetCounter = 0;

tweetInput.addEventListener("input", function () {
  if (this.value.length > maxChar) {
    this.value = this.value.substring(0, maxChar);
    errorMessage.innerHTML = "Maximum 150 characters allowed.";
  } else {
    errorMessage.innerHTML = "";
  }
});

tweetInput.addEventListener("input", function () {
  charCounter.innerHTML = maxChar - this.value.length;
});

document
  .getElementById("tweet-input")
  .addEventListener("keyup", function (event) {
    // If the enter key is pressed
    if (event.keyCode === 13) {
      addTweet();
    }
  });

const avatars = [
  "avataaars.png",
  "avataaars2.png",
  "avataaars3.png",
  "avataaars4.png",
];

function addTweet() {
  var tweet = document.getElementById("tweet-input").value;
  var tweetList = document.getElementById("tweet-list");

  var tweetDiv = document.createElement("div");
  tweetDiv.classList.add("tweet");

  var avatar = document.createElement("img");
  avatar.src = "avatars/" + avatars[Math.floor(Math.random() * avatars.length)];
  avatar.classList.add("avatar");

  var tweetP = document.createElement("p");
  tweetP.innerHTML = tweet;

  var likeButton = document.createElement("i");
  likeButton.classList.add("fa", "fa-thumbs-up", "like-button");
  likeButton.setAttribute("data-tweet-id", tweetCounter);

  var dislikeButton = document.createElement("i");
  dislikeButton.classList.add("fa", "fa-thumbs-down", "dislike-button");
  dislikeButton.setAttribute("data-tweet-id", tweetCounter);

  var likeCounter = document.createElement("span");
  likeCounter.classList.add("like-counter");
  likeCounter.innerHTML = "0";

  //Append elements to tweetDiv
  tweetDiv.appendChild(avatar);
  tweetDiv.appendChild(tweetP);
  tweetDiv.appendChild(likeButton);
  tweetDiv.appendChild(dislikeButton);
  tweetDiv.appendChild(likeCounter);
  tweetList.appendChild(tweetDiv);

  // Add event listener for like button
  likeButton.addEventListener("click", function () {
    let tweetId = this.getAttribute("data-tweet-id");
    let likeCounter = document.querySelector(
      `[data-tweet-id='${tweetId}'] + .like-counter`
    );
    let count = parseInt(likeCounter.innerHTML);
    likeCounter.innerHTML = count + 1;
    tweetCounter++;
  });

  dislikeButton.addEventListener("click", function () {
    let tweetId = this.getAttribute("data-tweet-id");
    let likeCounter = document.querySelector(
      `[data-tweet-id='${tweetId}'] + .like-counter`
    );
    let count = parseInt(likeCounter.innerHTML);
    if (count > 0) {
      likeCounter.innerHTML = count - 1;
    }
  });

  clearTweetInput();
}

function clearTweetInput() {
  document.getElementById("tweet-input").value = "";
  charCounter.innerHTML = "150";
}
