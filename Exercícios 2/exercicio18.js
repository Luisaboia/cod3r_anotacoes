const products = [
    { name: "Laptop", price: 2000 },
    { name: "Mouse", price: 80 },
    { name: "Monitor", price: 200 },
    { name: "HD Case", price: 30 },
    { name: "CPU", price: 500 },
    { name: "Keyboard", price: 120 },
    { name: "Mouse", price: 80 },
    { name: "Monitor", price: 200 },
    { name: "HD Case", price: 30 },
    { name: "CPU", price: 500 },
    { name: "Keyboard", price: 120 },
    { name: "Mouse", price: 80 },
    { name: "Monitor", price: 200 },
    { name: "HD Case", price: 30 },
    { name: "CPU", price: 500 },
    { name: "Keyboard", price: 120 },
    { name: "Mouse", price: 80 },
    { name: "Monitor", price: 200 },
    { name: "HD Case", price: 30 },
    { name: "CPU", price: 500 },
    { name: "Keyboard", price: 120 },
  ];
  
  function getTotalPrice(products) {
    let price = 0;
    for (let i = 0; i < products.length; i++) {
      price += products[i].price;
    }
    return price;
  }
  
  console.log(getTotalPrice(products));