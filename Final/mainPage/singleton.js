// Singleton Shop class
class Shop {
    constructor() {
      if (typeof Shop.instance === 'object') {
        return Shop.instance;
      }
  
      // Your shop properties/methods
      this.inventory = [];
      Shop.instance = this;
      return this;
    }
  
    addItem(item, price) {
        this.inventory.push(item);
        const itemList = document.createElement('li')
        itemList.classList.add('list-group-item')

        const line = document.createElement('hr')
      
        const productNameList = document.createElement('p')

       
      productNameList.textContent = `Product Name: ${item}; Price: $${price}`
      itemList.append(productNameList)

      itemList.append(line)
    document.getElementById('basketList').append(itemList)

    }
  
  
    showLog() {
      return this.inventory;
    }
  }
  


  