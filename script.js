//const h2 = document.createElement("h2");
//h2.textContent = "This content added by Javascript";
//document.querySelector("body").appendChild(h2);

//---Start code here---

//functions grab mainPhoto and change img source
function changePageEnchantments() {
    //const mainPhoto = document.getElementById("mainPhoto");
    //mainPhoto.src = "./images/enchantments-image.jpg";
    changeMainPhoto("./images/enchantments-image.jpg");
    document.getElementById("hikeName").textContent = "THE ENCHANTMENTS"
    
}

function changePageGothicBasin() {
    //const mainPhoto = document.getElementById("mainPhoto");
    //mainPhoto.src = "./images/gothic-basin-image.jpg";
    changeMainPhoto("./images/gothic-basin-image.jpg")
    document.getElementById("hikeName").textContent = "GOTHIC BASIN"
}

function changePageSpectacleLake() {
    //const mainPhoto = document.getElementById("mainPhoto");
    //mainPhoto.src = "./images/spectacle-lake-image.jpg";
    //const imageLocation = "./images/spectacle-lake-image.jpg";
    changeMainPhoto("./images/spectacle-lake-image.jpg")
    document.getElementById("hikeName").textContent = "SPECTACLE LAKE"
}

function changeMainPhoto(link) {
    const mainPhoto = document.getElementById("mainPhoto");
    mainPhoto.src = link;
}



//grab the button and assign to input variable, listen for click and call function
const input1 = document.getElementById("enchantments");
input1.addEventListener('click', changePageEnchantments);

const input2 = document.getElementById("gothic");
input2.addEventListener('click', changePageGothicBasin);

const input3 = document.getElementById("spectacle");
input3.addEventListener('click', changePageSpectacleLake);




