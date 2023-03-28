let order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  function customerInfo(order) {
    let customerName = order.name;
    let deliveryPersonName = order.order.delivery.deliveryPerson;
    let customerPhone = order.phoneNumber;
    let customerAddress = order.address.street + ', ' + order.address.number + ' - Apto. ' + order.address.number;
    console.log('Olá,', deliveryPersonName + ', entrega para:', customerName + ', Telefone:', customerPhone + ', R.', customerAddress);
  }
  
  customerInfo(order);
  
  function orderModifier(order) {
    let newBuyer = order.name = 'Luiz Silva';
    let newTotal = order.payment.total = '50';
    let pizzas = Object.keys(order.order.pizza);
    let drinks = order.order.drinks.coke.type;

    console.log('Olá, ' + newBuyer + ', o valor total de seu pedido de ' + pizzas[0] + ', ' + pizzas[1] + ' e ' + drinks + ' é R$ ' + newTotal + ',00.');
  }
  
  orderModifier(order);