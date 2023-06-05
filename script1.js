document.getElementById("addItemForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get input values
    var name = document.getElementById("itemName").value;
    var description = document.getElementById("itemDescription").value;
    var imageUrl = document.getElementById("imageUrl").value;
    
    // Create a new list item
    var listItem = document.createElement("li");
    
    // Create an image element and set its source to the provided URL
    var image = document.createElement("img");
    image.src = imageUrl;
    
    // Create a heading element for the name
    var nameHeading = document.createElement("h3");
    nameHeading.textContent = name;
    
    // Create a paragraph element for the description
    var descriptionPara = document.createElement("p");
    descriptionPara.textContent = description;
    
    // Append the image, name, and description to the list item
    listItem.appendChild(image);
    listItem.appendChild(nameHeading);
    listItem.appendChild(descriptionPara);
    
    // Append the list item to the "addedItems" unordered list
    document.getElementById("addedItems").appendChild(listItem);
    
    // Reset the form
    document.getElementById("addItemForm").reset();
});
