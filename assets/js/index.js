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
    info: "Please, take care of them!"
});

poster2 = new poster({
    title: "A Greener Possibility",
    owners: "Sebastián, Edgar & Zoe",
    image: "assets/images/poster2.png",
    info: "Represents the contrast between nature and a neglected field, using a single bright and leafy tree symbolizing hope."
});

poster3 = new poster({
    title: "Nature's Silent Request",
    owners: "Sebastián, Edgar & Zoe",
    image: "assets/images/poster3.jpg",
    info: "It reminds us that nature’s beauty doesn't ask for much—only our respect. "
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

poster6 = new poster({
    title: "Angry Seal",
    owners: "Vicoddini",
    image: "assets/images/poster6.png",
    info: "Poor seal"
});

poster7 = new poster({
    title: "Every Piece Counts",
    owners: "Jimena, Bryan & Julio",
    image: "assets/images/poster7.jpg",
    info: "It highlights the environmental consequences of littering on polar wildlife. It features a family of sad penguins stranded on a shrinking ice block, surrounded by floating garbage."
});

/* posterX = new poster({
    title: "",
    owners: "",
    image: "../images/",
    info: ""
}); */

imageArray = [poster1, poster2, poster3, poster4, poster5, poster6, poster7];

//! HTML Elements
const headerTitle = document.getElementById("headerTitle");
const headerOwners = document.getElementById("headerOwners");

const reel = document.getElementById("reel");

const slide = document.getElementById("slide");

const infoButton = document.getElementById("infoButton");
const info = document.getElementById("info");

//! Functions
function drawPosters(){
    let index = 0;
    imageArray.forEach(poster => {
        reel.innerHTML += '<img class="reelPoster" src="' + poster.image + '" onclick="focusPoster(this, ' + index + ');">'

        index++;
    });
}

function toggleInfo(action){
    if(action){
        info.style.bottom = "0%";
        toggleInfoButton(false);
    }
    
    if(!action){
        info.style.bottom = "-20%";
        toggleInfoButton(true);
    }

}

function toggleInfoButton(action){
    if(action){
        infoButton.style.bottom = "0.25rem";
    }
    
    if(!action){
        infoButton.style.bottom = "-4rem";
    }
}

function focusPoster(poster, index){
    headerTitle.innerText = imageArray[index].title;
    headerOwners.innerText = '"' + imageArray[index].owners + '"';

    poster.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    
    toggleInfoButton(true);

    slide.innerText = "Poster " + (index + 1) + " of " + imageArray.length;

    info.innerText = imageArray[index].info;
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