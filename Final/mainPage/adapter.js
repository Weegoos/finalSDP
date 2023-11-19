console.log("---- Adapter ----");
class PaymentCurrencies{
    constructor(price){
        this.price = price;
    }

    getDollar(){
        console.log(this.price);
    }

    getEuro(){
        console.log(this.price);
    }

    getRuble(){
        console.log(this.price);
    }
}

class PaymentAdapter{
    constructor(adaptee){
        this.adaptee = adaptee
    }

    getDollar(){
        const dollar = this.adaptee.data()
       

        if (deliveryPriceLocal == "undefined"){
            return dollar.discount / 457
        }else {
            return dollar.price / 457
        }
    }

    getEuro(){
        const euro = this.adaptee.data()

        if (deliveryPriceLocal == "undefined"){
            return euro.discount / 497
        }else {
            return euro.price / 497
        }
    }

    getRuble(){
        const ruble = this.adaptee.data()

        if (deliveryPriceLocal == "undefined"){
            return ruble.discount / 5
        }else {
            return ruble.price / 5
        }
    }
}

class PaymentService{
    data(){
        return {
            price: deliveryPriceLocal,
            discount: discountLocal
        }
    }
}

const paymentService = new PaymentService()
const adapter = new PaymentAdapter(paymentService)
console.log("Dollar:" + adapter.getDollar());
console.log("Euro: " + adapter.getEuro());
console.log("Ruble: " + adapter.getRuble());


