class PricingDelivery{
   create(){
   
   }
}

class RegularPricing extends PricingDelivery{
   
    сalculate(type, distance){
        let deliveryPrice;
       if (distance > 5){
        const discount = new Discount
        discount.calculate(typeTransport, JSON.parse(deliveryDistance))
       }else {
        if (type == "Courier"){
            deliveryPrice = distance *  1200
        }else {
            deliveryPrice = distance * 2000
        }
       }
        console.log(deliveryPrice);
        localStorage.setItem('deliveryPrice', deliveryPrice)

    }
}

class Discount extends PricingDelivery{
    
    calculate(type, distance){
        let deliveryPrice;
        let distanceLocal = JSON.parse( deliveryDistance)
        let discount = 0.015;
        
        if (type == "Courier"){
            deliveryPrice = (distance *  1200) - (distance *  1200 * discount)
        }else {
            deliveryPrice = (distance * 2000) - (distance * 2000 * discount)
        }
        console.log(deliveryPrice);
        localStorage.setItem('discount', deliveryPrice)
    }
}

class DeliveryShop{


    travel(transport){
        return transport.create()
    }
}

const regularPrice = new RegularPricing()
regularPrice.сalculate(typeTransport, JSON.parse(deliveryDistance))

