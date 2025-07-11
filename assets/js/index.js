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
    info: "Butts aren't only bad for you! Please, also take care of them!"
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
    info: "Pollution destroyed it's home. Maybe that's why there are on risk of extinction?"
});

poster5 = new poster({
    title: "Intolerant to Straws",
    owners: "Irving, Santiago & Raúl",
    image: "assets/images/poster5.jpg",
    info: "Some turtles finding some trash in the ocean. This can't finish well"
});

poster6 = new poster({
    title: "Angry Seal",
    owners: "Vicoddini",
    image: "assets/images/poster6.png",
    info: "Poor seal, don't be rude and help taking care of the nature."
});

poster7 = new poster({
    title: "Every Piece Counts",
    owners: "Jimena, Bryan & Julio",
    image: "assets/images/poster7.jpg",
    info: "It highlights the environmental consequences of littering on polar wildlife."
});

poster8 = new poster({
    title: "Protect the World",
    owners: "Sam, Ale & Ana",
    image: "assets/images/poster8.jpg",
    info: "Our world is theirs too. Protect nature so all creatures can thrive."
});

poster9 = new poster({
    title: "Protect their paws",
    owners: "Sam, Ale & Ana",
    image: "assets/images/poster9.jpg",
    info: "That sad puppy face says it all. Your trash can hurt them. Be kind. Pick it up."
});

poster10 = new poster({
    title: "Recycle for them",
    owners: "Sam, Ale & Ana",
    image: "assets/images/poster10.png",
    info: "Recycling reduces litter that harms animals. Help keep raccoons and all wildlife safe."
});

poster11 = new poster({
    title: "Pokemons prefer the green",
    owners: "The Koko Díaz",
    image: "assets/images/poster11.png",
    info: "Wanna have a Pokemon? At first, they're going to need a green space where to grow and train with their master."
});

poster12 = new poster({
    title: "Hoot Hoot?",
    owners: "Fernando, Peter & Ivan",
    image: "assets/images/poster12.jpg",
    info: "Despite their ecological importance, owls are often persecuted and hunted because of superstitions. Activists and environmental organizations are working to educate the public about the value of owls and promote their protection."
});

/* posterX = new poster({
    title: "",
    owners: "",
    image: "../images/",
    info: ""
}); */

imageArray = [poster1, poster2, poster3, poster4, poster5, poster6, poster7, poster8, poster9, poster10, poster11, poster12];

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
        info.style.bottom = "-14%";
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