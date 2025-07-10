//! Classes
class poster {
    constructor({title, owners, image, info}){
        this.title = title;
        this.owners = owners;
        this.image = image;
        this.info = info;
    }
}

//! Objects
poster1 = new poster({
    title: "Kittens",
    owners: "Fernando, Peter & Ivan",
    image: "assets/images/poster1.jpg",
    info: ""
});

poster2 = new poster({
    title: "Greener World",
    owners: "Edgar & Zoe",
    image: "assets/images/poster2.png",
    info: ""
});

poster3 = new poster({
    title: "Respect",
    owners: "Edgar & Zoe",
    image: "assets/images/poster3.jpg",
    info: ""
});

poster4 = new poster({
    title: "Sad Axolotl",
    owners: "Irving, Santiago & Raúl",
    image: "assets/images/poster4.jpg",
    info: "Pollution destroyed it's home"
});

poster5 = new poster({
    title: "Intolerant to Straws",
    owners: "Irving, Santiago & Raúl",
    image: "assets/images/poster5.jpg",
    info: "Some turtles finding some trash in the ocean"
});

/* posterX = new poster({
    title: "",
    owners: "",
    image: "../images/",
    info: ""
}); */

imageArray = [poster1, poster2, poster3, poster4, poster5];

//! HTML Elements
const headerTitle = document.getElementById("headerTitle");
const headerOwners = document.getElementById("headerOwners");

const reel = document.getElementById("reel");

const slide = document.getElementById("slide");

//! Functions
function drawPosters(){
    let index = 0;
    imageArray.forEach(poster => {
        reel.innerHTML += '<img class="reelPoster" src="' + poster.image + '" onclick="focusPoster(this, ' + index + ');">'

        index++;
    });
}

function focusPoster(poster, index){
    headerTitle.innerText = imageArray[index].title;
    headerOwners.innerText = '"' + imageArray[index].owners + '"';

    poster.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    
    slide.innerText = "Poster " + (index + 1) + " of " + imageArray.length;
}

function advice(){
    msg = "";
    rnd = Math.floor(Math.random() * 4) + 1;

    switch(rnd){
        case 1:
            msg = "↑ Not here! Slide the images! ↑";
            break;

        case 2:
            msg = "↑ Slide right to left, on the section above! ↑";
            break;

        case 3:
            msg = "↑ Moving here won't move anything ↑";
            break;
        
        case 4:
            msg = "↑ Don't slide here! ↑";
            break;
    }

    slide.innerText = msg;
}

drawPosters();