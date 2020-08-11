//Database
var food = [
    {  
    Name: "Weight Loss",
    description: "High protein, low-calorie meals with a nutrient profile tuned for weight loss",
    category: "Weight loss",
    price: "from $145",
    itemNo: 1,
    image: "./images/wl.jpg",
    topPackage: true
},
    {
    Name: "Muscle Gain",
    description: "Higher protein and calorie portions to support your muscle gain momentum",
    category: "Muscle Gain",
    price: "from $159",
    itemNo: 2,
    image: "./images/mg.jpg",
    topPackage: false
},
{
    Name: "Keto",
    description: "High fat, low carb meals with moderate protein to achieve and sustain ketosis",
    category: "Weight loss",
    price: "from $159",
    itemNo: 3,
    image: "./images/keto.jpg",
    topPackage: false
},

{
    Name: "Fat Burner",
    description: "Low carb, nutrient-rich meals with fat-burning profiles to support fat loss",
    category: "Weight Loss",
    price: "$159",
    itemNo: 4,
    image: "./images/fb.jpg",
    topPackage: false
},

{
    Name: "Vegan",
    description: "A fully plant-based package featuring vegan meat and no animal products",
    category: "Vegan",
    price: "$159",
    itemNo: 5,
    image: "./images/vegan.jpg",
    topPackage: true
},

{
    Name: "Veggie",
    description: "A vegetarian-friendly package with a natural and nutrient-rich approach",
    category: "Vegan",
    price: "$159",
    itemNo: 6,
    image: "./images/veggie.jpg",
    topPackage: true
},

{
    Name: "Gluten Free",
    description: "A gluten-free package with the same balanced profile as our other packages",
    category: "Weight loss",
    price: "$117",
    itemNo: 7,
    image: "./images/gluten.jpg",
    topPackage: true
},

{
    Name: "Prebiotic Soup Cleanse",
    description: "A protein-packed meal and two superb prebiotic soups per day for up to 14 days",
    category: "Prebiotic",
    price: "$129",
    itemNo: 8,
    image: "./images/prebiotic.jpg",
    topPackage: false
}];


//Javascript Code
window.onload = function() {

    for (var i = 0; i < food.length; i++) {
    var item = document.createElement("div");
    item.setAttribute("id", "items" + i);
    document.querySelector("#items").appendChild(item);

    var foodImage = document.createElement("img");
    var src = food[i].image;
    foodImage.setAttribute("id", "pic");
    foodImage.setAttribute('src', src);
    foodImage.setAttribute('alt', src);
    document.querySelector("#items" + i).appendChild(foodImage);

    var foodName = document.createElement("p");
    foodName.setAttribute("id", "element");
    foodName.textContent = food[i].Name;
    document.querySelector("#items" + i).appendChild(foodName);

    var foodDescription = document.createElement("p");
    foodDescription.setAttribute("id", "element");
    foodDescription.textContent = "Description: " + food[i].description;
    document.querySelector("#items" + i).appendChild(foodDescription);

    var foodPrice = document.createElement("p");
    foodPrice.setAttribute("id", "element");
    foodPrice.textContent = "Price: " + food[i].price;
    document.querySelector("#items" + i).appendChild(foodPrice);
    }
}

//window.onload = function() {
    function getTopPackage() {
        for(var i = 0; i < food.length; i++) {
            if(food[i].topPackage == true) {
                var topName = document.createElement("p");
                topName.setAttribute("id", "tp");
                topName.textContent = food[i].Name;
                document.querySelector("#topPackage" + i).appendChild(topName);
            }
        }
    }
//}