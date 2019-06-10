import { Component} from '@angular/core';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.css']
})

export class HomeworkComponent {
  counter = 10;
  name: string;
  meat = '...';
  veggie = '...';
  cookMsg = "Let's start...";
  counterMinus() {
    this.counter--;
  }
  counterReset() {
    this.counter = 0;
  }

  getChicken() {
    this.meat = 'chicken';
  }

  getFish() {
    this.meat = 'fish';
  }
  getPork() {
    this.meat = 'pork';
  }

  getBeef() {
    this.meat = 'beef';
  }

  getTofu() {
    this.veggie = 'tofu';
  }
  getCarrot() {
    this.veggie = 'carrot';
  }
  getTomato() {
    this.veggie = 'tomato';
  }
  cook() {
    let meatMap = new  Map();
    meatMap.set('beef', 1);
    meatMap.set('chicken', 2);

    let veggieMap = new Map();
    veggieMap.set('tofu', 1);
    veggieMap.set('tomato', 2);

    let dish = new Map();
    dish.set(11, 'beef tofu');
    dish.set(12, 'beef tomato');
    dish.set(21, 'chicken tofu');
    dish.set(22, 'chicken tomato');

    if (meatMap.has(this.meat) && veggieMap.has(this.veggie)) {
      var meatIndex = meatMap.get(this.meat);
      var veggieIndex = veggieMap.get(this.veggie);
      var index = meatIndex * 10 + veggieIndex;
      this.cookMsg = dish.get(index);
    } else {
      this.cookMsg = 'not in the menu';
    }
  }

  reset() {
    this.meat = '...';
    this.veggie = '...';
    this.cookMsg = 'waiting for ingredients...';
  }
}


