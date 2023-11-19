console.log("----Decorator----");
// component 
class Options{
    getType(){
        throw new Error ('777')
      
    }
}

// concrete component
class ProductType extends Options{
    constructor(type){
        super()
        this.type = type;
    }

    getType(){
        // console.log("7777");
        return this.type;
    }
}
// Decorator
class TypeDecorator extends Options{
    constructor(product){
        super();
        this.product = product
    }

    getType(){
        return this.product.getType()
    
    }
}
// Concrete Decorator
class SubType extends TypeDecorator{
    constructor(product, subtype, companyName, discount, deliveryDays, country, certificateStatus){
        super(product);
        this.subtype = subtype;
        this.companyName = companyName
        this.discount = discount
        this.deliveryDays = deliveryDays;
        this.country = country;
        this.certificateStatus = certificateStatus
    }

    getType(){
        let subTypeText = document.querySelector('.yearProduct')
        subTypeText.innerHTML =  `Year: ${this.subtype}`

        let ProductCompanyName = document.querySelector('.ProductCompanyName')
        ProductCompanyName.innerHTML = `Company: ${this.companyName}`

        let discountText = document.querySelector('.discount')
        discountText.innerHTML = `Discount: ${this.discount}`

        const deliveryText = document.querySelector('#deliveryText')
        deliveryText.innerHTML = `Delivery: approximately ${this.deliveryDays} days`

        let countryName = document.querySelector('.countryName')
        countryName.innerHTML = `Country: ${this.country}`

        let cerficateText = document.querySelector('.cerficateStatus')
        cerficateText.innerHTML = `Certificate availability: The product is ${this.certificateStatus}`
    }
}

class ProductImage extends TypeDecorator{
    constructor(product, productImage){
        super(product);
        this.productImage = productImage
    }

    getImage(){
        let imgCLass = document.querySelector('.imgCLass')
        imgCLass.src = this.productImage
    }
}

const options = new ProductType(null)
options.getType()



