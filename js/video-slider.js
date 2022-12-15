let videosYouTube = document.querySelectorAll(".video-item");
let mainVideo = document.querySelector(".main-movie");
let dotsNavigation = document.querySelectorAll(".nav-dot");
let currentVideoItem = 0;
let nextVideoItem = 0;
let dotActiveNumber = 0;
let isVideoEnabled = true;

let videoContainer = [
  "./assets/video/video0.mp4",
  "./assets/video/video1.mp4",
  "./assets/video/video2.mp4",
  "./assets/video/video3.mp4",
  "./assets/video/video4.mp4",
];

let posterContainer = [
  "./assets/video/poster0.jpg",
  "./assets/video/poster1.jpg",
  "./assets/video/poster2.jpg",
  "./assets/video/poster3.jpg",
  "./assets/video/poster4.jpg",
];

function changeMainVideo(n) {
  mainVideo.src = videoContainer[n];
  mainVideo.poster = posterContainer[n];
  returnInitialSettings();
}

function dotActivate(n) {
  dotsNavigation[n].classList.add("activated-dot");
}

function dotRemoveActivate(n) {
  dotsNavigation[n].classList.remove("activated-dot");
}

function changeCurrentVideoItem(n) {
  currentVideoItem = (n + videosYouTube.length) % videosYouTube.length;
}

function hideVideoItemArrows(direction) {
  isVideoEnabled = false;
  videosYouTube[currentVideoItem].classList.add(direction);
  videosYouTube[currentVideoItem].addEventListener("animationend", function () {
    this.classList.remove("active", direction);
    setTimeout(1000);
  });
}

function showVideoItemArrows(direction) {
  nextVideoItem =
    (currentVideoItem + videosYouTube.length) % videosYouTube.length;
  videosYouTube[nextVideoItem].classList.add("next", direction);
  videosYouTube[nextVideoItem].addEventListener("animationend", function () {
    this.classList.remove("next", direction);
    this.classList.add("active");
    this.style.order = "0";
    setTimeout(500);
  });
  nextVideoItem =
    (currentVideoItem + 1 + videosYouTube.length) % videosYouTube.length;
  videosYouTube[nextVideoItem].classList.add("next", direction);
  videosYouTube[nextVideoItem].addEventListener("animationend", function () {
    this.classList.remove("next", direction);
    this.classList.add("active");
    this.style.order = "1";
    setTimeout(500);
  });
  nextVideoItem =
    (currentVideoItem + 2 + videosYouTube.length) % videosYouTube.length;

  videosYouTube[nextVideoItem].classList.add("next", direction);
  videosYouTube[nextVideoItem].addEventListener("animationend", function () {
    this.classList.remove("next", direction);
    this.classList.add("active");
    this.style.order = "2";
  });
  isVideoEnabled = true;
}

function previousVideoItem(n) {
  hideVideoItemArrows("to-right");
  changeCurrentVideoItem(n + 1);
  showVideoItemArrows("from-left");
}

function nextVideoItemArrows(n) {
  hideNextVideoItemArrows("to-left");
  changeCurrentVideoItem(n - 1);
  showNextVideoItemArrows("from-right");
}

function hideNextVideoItemArrows(direction) {
  isVideoEnabled = false;

  nextVideoItem =
    (currentVideoItem + 2 + videosYouTube.length) % videosYouTube.length;

  videosYouTube[nextVideoItem].classList.add(direction);
  videosYouTube[nextVideoItem].addEventListener("animationend", function () {
    this.classList.remove("active", direction);
    setTimeout(1000);
  });
}

function showNextVideoItemArrows(direction) {
  nextVideoItem =
    (currentVideoItem + 1 + videosYouTube.length) % videosYouTube.length;
  videosYouTube[nextVideoItem].classList.add("next", direction);
  videosYouTube[nextVideoItem].addEventListener("animationend", function () {
    this.classList.remove("next", direction);
    this.classList.add("active");
    this.style.order = "1";
    setTimeout(500);
  });

  nextVideoItem =
    (currentVideoItem + videosYouTube.length) % videosYouTube.length;
  videosYouTube[nextVideoItem].classList.add("next", direction);
  videosYouTube[nextVideoItem].addEventListener("animationend", function () {
    this.classList.remove("next", direction);
    this.classList.add("active");
    this.style.order = "0";
    setTimeout(500);
  });

  nextVideoItem =
    (currentVideoItem + 2 + videosYouTube.length) % videosYouTube.length;

  videosYouTube[nextVideoItem].classList.add("next", direction);
  videosYouTube[nextVideoItem].addEventListener("animationend", function () {
    this.classList.remove("next", direction);
    this.classList.add("active");
    this.style.order = "2";
  });
  isVideoEnabled = true;
}

function findActiveDot(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].classList.contains("activated-dot")) {
      return i;
    }
  }
}

for (let i = 0; i < dotsNavigation.length; i++) {
  dotsNavigation[i].addEventListener("click", function () {
    console.log(findActiveDot(dotsNavigation));

    currentVideoItem = findActiveDot(dotsNavigation);
    console.log(currentVideoItem);
    dotRemoveActivate(currentVideoItem);
    do {
      nextVideoItemArrows(currentVideoItem);
    } while (currentVideoItem != (i - 1 + dotsNavigation.length) % dotsNavigation.length);

    dotActivate(
      (currentVideoItem + 1 + videosYouTube.length) % videosYouTube.length
    );
    changeMainVideo(
      (currentVideoItem + 1 + videosYouTube.length) % videosYouTube.length
    );
  });
}

document
  .querySelector(".video-arrows.left")
  .addEventListener("click", function () {
    if (isVideoEnabled) {
      dotRemoveActivate(
        (currentVideoItem + 1 + videosYouTube.length) % videosYouTube.length
      );
      nextVideoItemArrows(currentVideoItem);

      changeMainVideo(
        (currentVideoItem + 1 + videosYouTube.length) % videosYouTube.length
      );
      dotActivate(
        (currentVideoItem + 1 + videosYouTube.length) % videosYouTube.length
      );
    }
  });

document
  .querySelector(".video-arrows.right")
  .addEventListener("click", function () {
    if (isVideoEnabled) {
      dotRemoveActivate(
        (currentVideoItem + 1 + videosYouTube.length) % videosYouTube.length
      );
      previousVideoItem(currentVideoItem);
      changeMainVideo(
        (currentVideoItem + 1 + videosYouTube.length) % videosYouTube.length
      );
      dotActivate(
        (currentVideoItem + 1 + videosYouTube.length) % videosYouTube.length
      );
    }
  });
