var json;
fetch("data.json")
  .then((response) => response.json())
  .then((data) => (json = data))
  .then(() => json);


function appendData(data) {
  let container = document.getElementById("jsondata");
  for (let i = 0; i < data.length; i++) {
    let div = document.createElement("div");

    
    let profilePicture = document.createElement("img");
    profilePicture.src = data[i].profile_image;
    profilePicture.setAttribute("class", "profilePic");
    div.appendChild(profilePicture);

    let name = document.createElement("h2");
    name.innerHTML = data[i].name;
    name.setAttribute("class", "name");
    div.appendChild(name);


    if (data[i].source_type == "facebook") {
      let sourcefacebook = document.createElement("span");
      sourcefacebook.innerHTML = `FB`;
      div.appendChild(sourcefacebook);
    } else {
      let sourceinstagram = document.createElement("span");
      sourceinstagram.innerHTML = `IG`;
      div.appendChild(sourceinstagram);
    }

    let img = document.createElement("img");
    img.src = data[i].image;
    img.setAttribute("class", "img");
    div.appendChild(img);

    let caption = document.createElement("p");
     caption.innerHTML = data[i].caption;
     caption.setAttribute("class", "caption");
     div.appendChild(caption);

    let likes = document.createElement("span");
    likes.innerHTML = "Likes: " + data[i].likes;
    likes.setAttribute("class", "likes");
    div.appendChild(likes);

    container.appendChild(div);
    for (let item of document.getElementById("jsondata").children) {
      if (!item.classList.contains("initialized")) {
        item.classList.add("initialized");
      }
    }
  }
}

let counter = 4;

window.onload = function () {
  let collection = [];
  {
    collection.push(json[0], json[1], json[2], json[3]);
  }
  appendData(collection);
};

document.getElementById("loadmore").onclick = function () {
  let collection = [];
  for (let i = 4; i < 8 && counter < json.length; i++) {
    collection.push(json[counter++]);
  }
  appendData(collection);
  if (counter >= json.length) this.style.display = "none";
};

const darkModeSlider = document.getElementById('dark-mode-slider');
const body = document.body;

darkModeSlider.addEventListener('change', function() {
  if (this.checked) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
});