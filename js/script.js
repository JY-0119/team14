// js/script.js

const songDB = {
  "BTS - Dynamite": {
    comment: "신나는 분위기의 대표적인 K-POP 곡",
    url: "https://www.youtube.com/watch?v=gdZLi9oWNZg",
    image: "image/dynamite.jpg",
  },
  "뉴진스 - Hype Boy": {
    comment: "중독성 강한 멜로디가 특징",
    url: "https://www.youtube.com/watch?v=11cta61wi0g",
    image: "image/hypeboy.jpg",
  },
  "아이유 - Love poem": {
    comment: "감성적인 발라드",
    url: "https://www.youtube.com/watch?v=OcVmaIlHZ1o",
    image: "image/lovepoem.jpg",
  },
  "Pharrell Williams - Happy": {
    comment: "기분 좋아지는 대표 팝송",
    url: "https://www.youtube.com/watch?v=ZbZSe6N_BXs",
    image: "image/happy.jpg",
  },
};

function showResult(song) {
  document.getElementById("resultText").innerText = song;

  const data = songDB[song];

  if (data) {
    document.getElementById("commentText").innerText = data.comment;
    document.getElementById("videoLink").innerText = "뮤직비디오 보러가기";
    document.getElementById("videoLink").href = data.url;

    const embedUrl = data.url.replace("watch?v=", "embed/");
    document.getElementById("videoFrame").src = embedUrl;

    const img = document.getElementById("songImage");
    img.src = data.image;
    img.style.display = "block";
  } else {
    document.getElementById("commentText").innerText = "";
    document.getElementById("videoLink").innerText = "";
    document.getElementById("videoFrame").src = "";
    document.getElementById("songImage").style.display = "none";
  }
}

function recommendGenre() {
  const songs = ["BTS - Dynamite", "뉴진스 - Hype Boy", "아이유 - Love poem"];
  const random = songs[Math.floor(Math.random() * songs.length)];
  showResult(random);
}

function recommendMood() {
  const songs = ["Pharrell Williams - Happy", "아이유 - Love poem"];
  const random = songs[Math.floor(Math.random() * songs.length)];
  showResult(random);
}

function recommendRandom() {
  const songs = Object.keys(songDB);
  const random = songs[Math.floor(Math.random() * songs.length)];
  showResult(random);
}

function resetResult() {
  document.getElementById("resultText").innerText =
    "버튼을 눌러 추천을 받아보세요";
  document.getElementById("commentText").innerText = "";
  document.getElementById("videoLink").innerText = "";
  document.getElementById("videoFrame").src = "";
  document.getElementById("songImage").style.display = "none";
}
