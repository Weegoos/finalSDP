class Product{
    constructor(isproductStatus){
        this.isproductStatus = isproductStatus
    }
    createProduct(){
        console.log("Correct");
    }
}

class Shirt extends Product{
    constructor(isproductStatus){
        super()
    }

    info(){
        this.isproductStatus = mensClothes

        if (this.isproductStatus == "true"){
            const shirtCreator = new ShirtCreator
            shirtCreator.createProduct()
        }
        
    }
}

class Hat extends Product{
    constructor(isproductStatus){
        super()
    }

    info(){
        this.isproductStatus = hat_local

        if (this.isproductStatus == "true"){
            const creatorHat = new HatCreator()
            creatorHat.createProduct()
            creatorHat.createBaseballHat()
            creatorHat.createFedora()
            creatorHat.createFlatCap()
        }
        
    }
}

class Mens extends Product{
    constructor(isproductStatus){
        super()
    }

    info(){
        this.isproductStatus = mensClothes
      
        if (this.isproductStatus == "true"){
            const creatorMans = new MensCreator()
            creatorMans.createTShirt()
            creatorMans.createPoloShirt()
            creatorMans.createHoodie()
            creatorMans.createJacket()
            creatorMans.createBlazer()
        }
    }
}

class Creator{
   
    createProduct(product, price, type){
        const itemPart = document.createElement('li')
    itemPart.classList.add('list-group-item')

    const productName = document.createElement('p')
    productName.textContent = `Product Name: ${product}`

    const divideLine = document.createElement('hr')

    const productPrice = document.createElement('p')
    productPrice.textContent = `Product Price: $${price}`

    const typeText = document.createElement('p')
    typeText.textContent = `Product Type : ${type}`
    
    const buyButton = document.createElement('button')
    buyButton.classList.add('buyBtnStyle')

    const basketButton = document.createElement('button')
    basketButton.classList.add('basketButton')
    basketButton.textContent = "Add"

    buyButton.onclick = function (){
        document.querySelector('.paymentPage').setAttribute('style', 'display: block')
        document.querySelector('.productName').textContent = `Product: ${product}`
       
        if (type == "Casual" || type == "Business Casual"){
            const type = new SubType(options, "2023", "Betty Barclay", "No", 12, "Turkey", "certified")
            type.getType()
        }

        if (type == "Headdress" || type == "Сotton knitwear"){
            const type = new SubType(options, "2022", "Jack & Jones", "Yes", 7, "Russia", "certified")
            type.getType()
        }

        if (product == "Hoodie"){
            const img = new ProductImage(options, "https://www.independenttradingco.com/cdn/shop/products/IND5000PC-OLV_68f7dfd3-a64d-459e-b641-81c487798209_2048x.jpg?v=1647286012")
            img.getImage()
        }

        if (product == "Hat"){
            const img = new ProductImage(options, "https://akubra.com.au/cdn/shop/products/traveller-bran-traveller-799_1200x1200.jpg?v=1632893769")
            img.getImage()
        }

        let img;
        switch (product) {
            case "Shirt":
                img = new ProductImage(options, "https://jonssonworkwear.com/images/thumbs/0002665_mens-long-sleeve-shirt_1024.jpeg")
                img.getImage()
                break;
            case "T-Shirt":
                img = new ProductImage(options, "https://thetshirtco.com.au/cdn/shop/files/TSCO_5000_Essential_Heavy_Tee_black.jpg?v=1692254864&width=1500")
                img.getImage()
                break;
            case "Polo Shirt":
                img = new ProductImage(options, "https://www.3wisemen.co.nz/media/catalog/product/p/o/polo_shorts_blazers11035.jpg?optimize=low&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700")
                img.getImage()

                break;
            case "Baseball Cap":
                img = new ProductImage(options, "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/S/t/Stylish-Unisex-Cap---Blue-6350474.jpg")
                img.getImage()
                break;
            case "Fedora":
                img = new ProductImage(options, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeZ7DSycFXu0DL_odxP5MzSOBHrJGLh7qITV-AhH0JeFiuzTsS")
                img.getImage()

                break;
            case "Flat Cap":
                img = new ProductImage(options, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0frc-QHvudZBzcFur5PfonPT9tMJCmOi6wA&usqp=CAU")
                img.getImage()
                break;
            case "Jacket":
                img = new ProductImage(options, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq6LP_BWK8mfzGz5wX-nrIYoEyL1s6XF0lqg&usqp=CAU")
                img.getImage()
                break;
            case 'Blazer':
                img = new ProductImage(options, "https://freepngimg.com/save/135116-3-piece-blazer-hd-image-free/1024x1243")
                img.getImage()
                break;
            default:
                break;
        }
    }
    basketButton.onclick = function (){
        const client1Shop = new Shop();
        client1Shop.addItem(product, price);          
        const itemList = document.createElement('li')
        itemList.classList.add('list-group-item') 
    }
    buyButton.textContent = "Info"
    itemPart.append(productName)
    itemPart.append(productPrice)
    itemPart.append(typeText)
    itemPart.append(buyButton)
    itemPart.append(basketButton)
    itemPart.append(divideLine)

    document.getElementById('productList').append(itemPart)
    }
}

class HatCreator extends Creator{
   
   createProduct(){

    const creator = new Creator()

    creator.createProduct("Hat", 25, "Headdress")
    
   }

   createBaseballHat(){
    const creator = new Creator()
    creator.createProduct('Baseball Cap', 30, "Headdress")
   }

   createFedora(){
    const creator = new Creator()
    creator.createProduct('Fedora', 35, 'Headdress')
   }

   createFlatCap(){
    const creator = new Creator()
    creator.createProduct('Flat Cap', 44, 'Headdress')
   }
}

class ShirtCreator extends Creator{
    createProduct(){
        const creator = new Creator()
        creator.createProduct("Shirt", 50, "Casual")
    }
}

class MensCreator extends Creator{
    createTShirt(){
        const creator = new Creator()
        creator.createProduct('T-Shirt', 45, "Casual")
    }

    createPoloShirt(){
        const creator = new Creator()
        creator.createProduct('Polo Shirt', 37, "Casual")
    }

    createHoodie(){
        const creator = new Creator()
        creator.createProduct('Hoodie', 38, "Сotton knitwear")
    }

    createJacket(){
        const creator = new Creator()
        creator.createProduct('Jacket', 50, "Business Casual")
    }

    createBlazer(){
        const creator = new Creator()
        creator.createProduct("Blazer", 63, 'Business Casual')
    }
}


const hat= new Hat()
hat.info()

const shirt = new Shirt()
shirt.info()

const menswear = new Mens()
menswear.info()




