import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  brunchItems = [
    {
      name: 'BIG WAFFLE',
      description: 'A golden, crisp delight, perfect for any time of day, served with your choice of sweet or savory toppings.',
      price: 13.70,
      quantity: 0
    },
    {
      name: 'Cookie okie',
      description: 'A classic treat with a rich, buttery taste, baked to perfection, perfect for satisfying your sweet tooth.',
      price: 20.70,
      quantity: 0
    },
    {
      name: 'Apple',
      description: 'A fresh and juicy apple, packed with nutrients, the perfect snack for a healthy lifestyle.',
      price: 450.70,
      quantity: 0
    }
  ];

  drinkItems = [
    {
      name: 'Carrot Juice',
      description: 'Freshly squeezed carrot juice, packed with vitamins and a vibrant taste, perfect for a refreshing boost any time of day.',
      price: 37.70,
      quantity: 0
    },
    {
      name: 'Fancy Wine',
      description: 'A luxurious blend of rich flavors, this fine wine offers a smooth finish, perfect for savoring on special occasions.',
      price: 290.90,
      quantity: 0
    }
  ];

  order: { [key: string]: any } = {};
  isModalOpen: boolean = false;

  increaseQuantity(item: any) {
    item.quantity++;
    this.addToOrder(item);
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 0) {
      item.quantity--;
      this.addToOrder(item);
    } else {
      this.removeFromOrder(item.name);
    }
  }

  addToOrder(item: any) {
    if (item.quantity > 0) {
      this.order[item.name] = {
        name: item.name,
        quantity: item.quantity,
        price: item.price
      };
    } else {
      this.removeFromOrder(item.name);
    }
  }

  getOrderKeys() {
    this.addToOrder;
    console.log(this.order);
    return Object.keys(this.order);
  }

  removeFromOrder(itemName: string) {

    this.brunchItems.forEach(item => {
      if (item.name === itemName) {
        item.quantity = 0;
      }
    });

    this.drinkItems.forEach(item => {
      if (item.name === itemName) {
        item.quantity = 0;
      }
    });

    delete this.order[itemName];
  }

  openOrderModal() {
    this.isModalOpen = true;
  }

  closeOrderModal() {
    this.isModalOpen = false;
  }

  finishOrder() {

    alert("Order sent successfully!");

    this.order = {};
    this.brunchItems.forEach(item => item.quantity = 0);
    this.drinkItems.forEach(item => item.quantity = 0);

    this.closeOrderModal();
  }
}