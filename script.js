var data = {
    "images": [{

       "image1": "../sprint-2/resources/Images/ricebag.jpg",
       "Description":"Organic Basmati Rice",
       "Name":"Rice Bag"
    },  
    {
      "image1": "../sprint-2/resources/Images/oil5.jpg",
      "Description":"Naturally Refined from Sunflower seeds",
      "Name":"Sunflower oil"
   }, 
   {
      "image1": "../sprint-2/resources/Images/haircare.jpg",
      "Description":"Strong and healthy hair",
      "Name":"Hair care"
   }, 
   {
      "image1": "../sprint-2/resources/Images/mushrom3.jpg",
      "Description":"Organic mushrooms",
      "Name":"Mushrooms"
   }, 
   {
      "image1": "../sprint-2/resources/Images/potato chips.jpg",
      "Description":"Spicy potato chips",
      "Name":"Lays"
   }, 
   {
      "image1": "../sprint-2/resources/Images/dettol.jpg",
      "Description":"100% germ protection",
      "Name":"Dettol"
   }, 
   {
      "image1": "../sprint-2/resources/Images/diet meal.jpg",
      "Description":"Diet meal for you",
      "Name":"Kelloggs Whole Grain"
   }, 
   {
      "image1": "../sprint-2/resources/Images/milk4.jpg",
      "Description":"Natural Cow milk",
      "Name":"Arokya Milk"
   }, 
   {
      "image1": "../sprint-2/resources/Images/spicy1.jpg",
      "Description":"Add magic to your recepies",
      "Name":"Spices"
   }, 
   {
      "image1": "../sprint-2/resources/Images/soaps.jpg",
      "Description":" Refined with Sandal and Turmeric",
      "Name":"Soaps"
   }, 
   {
      "image1": "../sprint-2/resources/Images/dryfruits.jpg",
      "Description":"Tasty and healthy.",
      "Name":"Dry Fruits"
   },
   {
      "image1": "../sprint-2/resources/Images/babycare.jpg",
      "Description":"For smooth and soft skin",
      "Name":"Baby Care"
   },
    ]
 };
 data.images.forEach(function(obj) {
    var image = new Image();
    image.src = obj.image1;
    image.width="200";
    let getName = obj.Name;
    let getDesc = obj.Description;
    let name = document.createElement("h1");
    name.innerText=getName;
    let desc = document.createElement("p");
    
    desc.innerText=getDesc;
    document.getElementById("Cards").appendChild(name)
    document.getElementById("Cards").appendChild(image)
    document.getElementById("Cards").appendChild(desc)
 })