class ItemsController{
    constructor(currentId = 0) {
        this.items = [];
        this.currentId = currentId;
    }
    
    // Create the addItem method
    addItem(name, description,imageUrl) {
        const item = {
            // Increment the currentId property
            id: this.currentId++,
            name: name,
            description: description,
            imageUrl: imageUrl
        };
    
        // Push the item to the items property
        this.items.push(item);
    }   
    
    loadItemsFromLocalStorage() {
        const storageItems = localStorage.getItem("items")
        if (storageItems) {
            const items = JSON.parse(storageItems)
            for (var i = 0, size = items.length; i < size; i++) {
                const item = items[i];
                this.items.push(item);
            }
        }
    }
    }
    const itemsController = new ItemsController(0);
    
    
    function addItemCard(item){
        const itemHTML = '<div class="card" style="width: 20rem;">\n' +
            '    <img src="'+item.img +'" width="300" height="250"  alt="product image">\n' +
            '    <div class="card-body">\n' +
            '        <h5 class="card-title">'+item.name+'</h5>\n' +
            '        <p class="card-text">'+item.description+'</p>\n' +
            '        <a href="#" class="btn btn-primary">Add</a>\n' +
            '    </div>\n' +
            '</div>\n' +
            '<br/>';
        const itemsContainer = document.getElementById("list-items");
        itemsContainer.innerHTML += itemHTML;
    }
    
    function loadStorageSampleData(){
        if(!localStorage.getItem("items")){
            const sampleItems = [{'name':'juice',
            'img':'img/1.jpg',
            'description':'Orange and Apple juice fresh and delicious'},
            {'name':'Ruffles Chicken',
            'img':'img/2.jpg',
            'description':'Ruffles Potato Chips - Chicken'}];
            localStorage.setItem("items", JSON.stringify(sampleItems));
        }
    }
    
    function loadCardsListFromItemsController(){
        for(var i = 0, size = itemsController.items.length; i < size ; i++){
            const item = itemsController.items[i];
            addItemCard(item);
        }
    }
    
    loadStorageSampleData();
    itemsController.loadItemsFromLocalStorage();
    loadCardsListFromItemsController();