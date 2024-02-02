/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Sydney Bohl",
    photo: "images/mysmallphoto.jpg",
    favoriteFoods: [
        "Pizza",
        "Chicken Alfredo",
        "French Fries",
        "Cantaloupe",
        "Chocolate"
    ],
    hobbies: [
        "Drawing",
        "Writing",
        "Listening to Music",
        "Watching Sports",
        "Reading"
    ],
    placesLived: []

};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Milwaukee, WI",
        length: "19 years"
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").setAttribute("src", myProfile.photo);
document.querySelector("#photo").setAttribute("alt", myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    let dd = document.createElement("dd");
    dt.textContent = place.place;
    dd.textContent = place.length;
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
});



