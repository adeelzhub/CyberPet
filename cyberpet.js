// let input = prompt("input your details here:")
// console.log(input)
// const txt = document.getElementById("txt");
const dogImg = document.getElementById("dogImg");
const catImg = document.getElementById("catImg");
const bunnyImg = document.getElementById("bunnyImg");
const dragonImg = document.getElementById("dragonImg");
const testBtn = document.getElementById("testBtn");
const progressbtn = document.getElementById("progress");
const hungerBar = document.getElementById("hungerBar");
const bordemBar = document.getElementById("bordemBar");
const hungerPercentage = document.getElementById("hungerPercentage");
const boredomPercentage = document.getElementById("boredomPercentage");
const maxHunger = 100
const maxBoredom = 100

const petName = document.getElementById("petName");
const petColour = document.getElementById("petColour");
const petSpecies = document.getElementById("petSpecies");
const yourPet = document.getElementById("yourPet");
const feedPet = document.getElementById("feedPet");
const playPet = document.getElementById("playPet");

class cyberPet{
    constructor(name,colour,species, hunger, boredom){
        this._name = name;
        this._colour = colour;
        this._species = species;
        this._hunger = hunger;
        this._boredom = boredom;
    }
    feed(){
        console.log(`${this._name} eats the food happily `);
    }
    play(){
        console.log(`You throw the ball for ${this._name}`);
    }
    stroke(){
        console.log(`${this._name} purrs happily`);
    }
    get hunger(){
        return this._hunger;
    }
    get boredom(){
        return this._boredom
    }
    set hunger(hunger){
        this._hunger = hunger;   
    }
    set boredom(boredom){
        this._boredom = boredom;
    }
}

function increaseHunger() {
    setInterval(function(){ 
        if(currentPet._hunger < 100){
            currentPet._hunger = currentPet._hunger+3; 
            petHunger.textContent = currentPet._hunger;    
            hungerBar.style.setProperty("--hunger",currentPet._hunger);
            hungerPercentage.textContent = `${currentPet._hunger} %`
        }else{
            // alert("Your pet is starving")
        }
    }, 1000);
}

// function increaseBoredom() {
//     setInterval(function(){ 
//         currentPet._boredom = currentPet._boredom+7; 
//         petBoredom.textContent = currentPet._boredom; 
//         bordemBar.style.setProperty("--bordem",currentPet._boredom);
//         boredomPercentage.textContent = `${currentPet._boredom} %`
//         if(currentPet._boredom >= 100){
//             alert("Your pet is dying of boredom")
//         }
//     }, 3000);
// }

// const dog = new cyberPet("Baxter","Brown","Dog", 50, 50)
// const cat = new cyberPet("Echo", "Black", "Cat", 50, 50)
// const bunny = new cyberPet("Thumper", "White", "Bunny", 50, 50)
// const dragon =new cyberPet("Ivan", "Gold", "Dragon", 50, 50)
// const currentPet = ""





dogImg.addEventListener("click",()=>{
    setTimeout(function(){dog = new cyberPet("Baxter","Brown","Dog", 50, 50);
    currentPet = {...dog}
    // petName.textContent = dog._name;
    // petColour.textContent = dog._colour; 
    // petSpecies.textContent = dog._species;
    // petHunger.textContent = dog._hunger;
    // petBoredom.textContent = dog._boredom
    // feedPet.style.backgroundImage = "url('images/cat.png')";
    catImg.style.display = "none"
    bunnyImg.style.display = "none"
    dragonImg.style.display = "none"
    petName.textContent = currentPet._name;
    petColour.textContent = currentPet._colour; 
    petSpecies.textContent = currentPet._species;
    petHunger.textContent = currentPet._hunger;
    petBoredom.textContent = currentPet._boredom
    hungerBar.style.setProperty("--hunger",currentPet._hunger)
    bordemBar.style.setProperty("--bordem",currentPet._boredom)
    hungerPercentage.textContent = `${currentPet._hunger} %`
    boredomPercentage.textContent = `${currentPet._boredom} %`
    increaseHunger()
    // increaseBoredom()

    },100)
    

})

catImg.addEventListener("click",()=>{
    setTimeout(function(){
        const cat = new cyberPet("Echo", "Black", "Cat", 50, 50)
    currentPet = {...cat}
    dogImg.style.display = "none"
    bunnyImg.style.display = "none"
    dragonImg.style.display = "none"
    petName.textContent = currentPet._name;
    petColour.textContent = currentPet._colour; 
    petSpecies.textContent = currentPet._species;
    petHunger.textContent = currentPet._hunger;
    petBoredom.textContent = currentPet._boredom
    hungerBar.style.setProperty("--hunger",currentPet._hunger)
    bordemBar.style.setProperty("--bordem",currentPet._boredom)
    hungerPercentage.textContent = `${currentPet._hunger} %`
    boredomPercentage.textContent = `${currentPet._boredom} %`
    increaseHunger()
    increaseBoredom()

    },150)
    
})

bunnyImg.addEventListener("click",()=>{
    setTimeout(function(){
        const bunny = new cyberPet("Thumper", "White", "Bunny", 50, 50)
    currentPet = {...bunny}
    catImg.style.display = "none"
    dogImg.style.display = "none"
    dragonImg.style.display = "none"
    petName.textContent = currentPet._name;
    petColour.textContent = currentPet._colour; 
    petSpecies.textContent = currentPet._species;
    petHunger.textContent = currentPet._hunger;
    petBoredom.textContent = currentPet._boredom
    hungerBar.style.setProperty("--hunger",currentPet._hunger)
    bordemBar.style.setProperty("--bordem",currentPet._boredom)
    hungerPercentage.textContent = `${currentPet._hunger} %`
    boredomPercentage.textContent = `${currentPet._boredom} %`
    // increaseHunger()
    // increaseBoredom()

    },150)
    
})

dragonImg.addEventListener("click",()=>{
    setTimeout(function(){
        const dragon =new cyberPet("Ivan", "Gold", "Dragon", 50, 50)
    currentPet = {...dragon}
    catImg.style.display = "none"
    bunnyImg.style.display = "none"
    dogImg.style.display = "none"
    petName.textContent = currentPet._name;
    petColour.textContent = currentPet._colour; 
    petSpecies.textContent = currentPet._species;
    petHunger.textContent = currentPet._hunger;
    petBoredom.textContent = currentPet._boredom
    hungerBar.style.setProperty("--hunger",currentPet._hunger)
    bordemBar.style.setProperty("--bordem",currentPet._boredom)
    hungerPercentage.textContent = `${currentPet._hunger} %`
    boredomPercentage.textContent = `${currentPet._boredom} %`
    // increaseHunger()
    // increaseBoredom()

    },150)
    
})

function updateHunger(){

    if(currentPet._species == "Dog"){
        currentPet._hunger = currentPet._hunger-7;
        petHunger.textContent = currentPet._hunger;
    }
    else if(currentPet._species == "Cat"){
        currentPet._hunger = currentPet._hunger-5;
        petHunger.textContent = currentPet._hunger;
    }
    else if(currentPet._species == "Bunny"){
        currentPet._hunger = currentPet._hunger-3;
        petHunger.textContent = currentPet._hunger;
    }
    else{
        currentPet._hunger = currentPet._hunger-15;
        petHunger.textContent = currentPet._hunger;
    }





function updateBoredom(){
    if(currentPet._species == "Dog"){
        currentPet._boredom = currentPet._boredom -10;
        petBoredom.textContent = currentPet._boredom;
    }
    else if(currentPet._species == "Cat"){
        currentPet._boredom = currentPet._boredom -4;
        petBoredom.textContent = currentPet._boredom;
    }
    else if(currentPet._species == "Bunny"){
        currentPet._boredom = currentPet._boredom -3;
        petBoredom.textContent = currentPet._boredom;
    }
    else{
        currentPet._boredom = currentPet._boredom-8;
        petBoredom.textContent = currentPet._boredom;
    }
}

yourPet.addEventListener("click",()=>{
    updateHunger()
    // dog._name = "BAXTER";
    // dog.hunger = 100;
    // petName.textContent = dog._name;
    // petColour.textContent = dog._colour; 
    // petSpecies.textContent = dog._species;
    petHunger.textContent = currentPet._hunger;
    petBoredom.textContent = currentPet._boredom;
    // currentPet = "dog"
})

feedPet.addEventListener("click",()=>{
    setTimeout(function(){
        if(currentPet._hunger <= 0){
            alert("I am not hungery.")
        }else{
            updateHunger();
        petHunger.textContent = currentPet._hunger;
        petBoredom.textContent = currentPet._boredom;
        hungerBar.style.setProperty("--hunger",currentPet._hunger)
        hungerPercentage.textContent = `${currentPet._hunger} %`
        }},200)
    // if(currentPet._hunger <= 0){
    //     alert("I am not hungery.")
    // }else{
    //     updateHunger();
    // petHunger.textContent = currentPet._hunger;
    // petBoredom.textContent = currentPet._boredom;
    // hungerBar.style.setProperty("--hunger",currentPet._hunger)
    // hungerPercentage.textContent = `${currentPet._hunger} %`
    // } 
})

playPet.addEventListener("click",()=>{
    if(currentPet._boredom <= 0){
        alert("I am tired.")
    }else{   
        updateBoredom();
    petHunger.textContent = currentPet._hunger;
    petBoredom.textContent = currentPet._boredom;
    bordemBar.style.setProperty("--bordem",currentPet._boredom);
    boredomPercentage.textContent = `${currentPet._boredom} %`
    }
})

}


