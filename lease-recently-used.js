// i have to make their are only 5 items
// i can add something if i all last one remove
//  if i used something it will move to the first



const lru = {
  arr: [],
  addItem: function (title) {
      this.arr.unshift(title);
    if(this.arr.length>5){

        this.arr.pop();
    }
    return this.arr;
  },
  getItem: function (title) {
    let index = this.arr.indexOf(title);
    if (index != -1) {
      this.arr.splice(index,1);
      this.arr.unshift(title);
    }
    return this.arr
  },
};

lru.addItem('lokehs')
lru.addItem('dangwal')
console.log(lru.arr);

console.log(lru.getItem('lokesh'));