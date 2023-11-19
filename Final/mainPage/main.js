// var
let productArray = []
let productName = document.querySelector('.productName')
let paymentPage = document.querySelector('.paymentPage')
let buttonClosePaymentPage = document.querySelector('.buttonClosePaymentPage')
let btnCloseChoosePage = document.querySelector('.btnCloseChoosePage')
let chooseCorrectItems = document.querySelector('.chooseCorrectItems')
let menuIcon = document.querySelector('.menuIcon')
let sumMoney = document.querySelector('.sumMoney')

// storage
let listProduct = localStorage.getItem('product')
let mensClothes = localStorage.getItem('mensClothes')
let hat_local = localStorage.getItem('hat')
let deliveryDistance = localStorage.getItem('deliveryDistance')
let typeTransport = localStorage.getItem('typeTransport')
let discountLocal = localStorage.getItem('discount')
let deliveryPriceLocal = localStorage.getItem('deliveryPrice')


if (deliveryPriceLocal == "undefined"){
    sumMoney.innerHTML = `You have to pay about: ${discountLocal}`
}else {
    sumMoney.innerHTML = `You have to pay about: ${deliveryPriceLocal}`

}


new Vue({
    el: ".mainContent",

    data: {
        menClothing: "",
        hat: "",
        // delivery
        distance: "",
        typeofTransport: "",
    },

    methods: {
        checkLetter: function (){
            if (this.menClothing == "false" || this.menClothing == "true"){
                localStorage.setItem('mensClothes', this.menClothing)
            }

            if (this.hat == "false" || this.hat == "true"){
                localStorage.setItem('hat', this.hat)
            }
            let menu = this.$refs.menu
            if ((this.menClothing == "false" || this.menClothing == "true") && (this.hat == "false" || this.hat == "true")){
                menu.setAttribute('style', 'display: none')
                location.reload()
            }

        },
        menu: function (){
            console.log(888);
            let menu = this.$refs.menu
            menu.setAttribute('style', 'display: flex')
          
        },
        payDelivery: function (){
           alert("You paid for the delivery!")
        },
        deliveryPage: function (){
            let deliveryDiv = this.$refs.deliveryDiv

            deliveryDiv.setAttribute('style', 'display:flex')
        },

        putDistance: function (){
            if (this.distance > 0){
                localStorage.setItem('deliveryDistance', this.distance)
            }
        },
        putTransport: function (){
            if(this.typeofTransport == "Courier" || this.typeofTransport == "Taxi"){
                localStorage.setItem('typeTransport', this.typeofTransport)
            }
        },
        buttonClosePaymentPage: function (){
            document.querySelector('.paymentPage').setAttribute('style', 'display: none')

        },
        basketBtn: function (){
            let basketMenu = this.$refs.basketMenu
            basketMenu.setAttribute('style', 'display: flex')
        }
    }
})

let hatChecker;
let mensCheckers = "";
function CheckTrueOrFalse (){
    
    if (hat_local == "true"){
        hatChecker = "Hat, "
    }else {
        hatChecker = ""
    }
    
    if (mensClothes == "true"){
        mensCheckers = "Men's Clothes";
    }else {
        mensCheckers = ""
    }
    console.log(mensCheckers);
}

CheckTrueOrFalse()





