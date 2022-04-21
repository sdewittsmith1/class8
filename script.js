function DogInfo(){
    let getdog = prompt("Do you LOVE dogs?")
    while (getdog != "yes") {
        console.log ("You do not own a dog, you answered: " + getdog);
        getdog = prompt ("NO WAY?!, Do you Own a Dog Now?")
}
}
function writeName(){
    let username = prompt("What is your Dog's Name?");
    document.write("Such a cute name!");
}

function DogCount (){
    let dogs = prompt("How many dogs does this page make you want to buy?");
    for (let i = 1; i <= dogs; i++){
        document.write("<p>ROOF</p>");
    }}