let notificationPart = document.querySelector('#notificationPart')
// Publisher
class ChooseItems {
    constructor() {
      this.subscribers = [];
    }
  
    subscribe(subscriber) {
      this.subscribers.push(subscriber);
    }
  
    unsubscribe(subscriber) {
      this.subscribers = this.subscribers.filter(sub => sub !== subscriber);
    }
  
    notify(message) {
      this.subscribers.forEach(subscriber => {
        subscriber.update(message);
        if (mensClothes != null && hat_local != null){
            notificationPart.setAttribute('style', 'display: flex')
            notificationPart.innerHTML = `${message}: ${hatChecker} ${mensCheckers}`
        }
      });
    }
  }
  
  // Subscriber interface
  class Customer {
    update(message) {
      console.log(`${message}`);
    }
  }
  
  // Concrete Subscriber
  class IndividualCustomer extends Customer {
    constructor(name) {
      super();
      this.name = name;
    }
  
    update(message) {
      console.log(`New notification: New products are available!`);
    }
  }
  
  // Client
  const chooseItems = new ChooseItems();
  
  const customer1 = new IndividualCustomer('Alice');
  
  chooseItems.subscribe(customer1);
  
  chooseItems.notify('New products are available! Such as');


  notificationPart.onmouseenter = function (){
    notificationPart.setAttribute('style', 'display: none')
  }
  
  