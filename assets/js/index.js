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
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare justo nec rutrum sodales. Sed pellentesque elementum nibh eget pulvinar. Morbi suscipit, eros id porta rhoncus, libero libero tincidunt ex, eget rhoncus tortor est ut metus. Vestibulum eget ligula eget nulla lobortis lacinia sed a augue. Suspendisse potenti. Integer non mi et erat tincidunt volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec purus nisl, varius ut lacus ac, blandit consectetur ligula. Aliquam in lobortis velit. Cras nec viverra ex. Etiam luctus dignissim turpis, a facilisis neque aliquet nec. Pellentesque egestas congue cursus. Quisque nec enim vulputate, ultrices augue a, dictum nulla."
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

posterX = new poster({
    title: "",
    owners: "",
    image: "../images/",
    info: ""
});

imageArray = [poster1, poster2, poster3];

//! HTML Elements
const headerTitle = document.getElementById("headerTitle");
const headerOwners = document.getElementById("headerOwners");

const reel = document.getElementById("reel");

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
}

drawPosters();