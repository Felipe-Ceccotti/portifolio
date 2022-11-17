
class Item{

    static lastId =0;
    constructor(text){
         this.check = false;
      this.text = text;
      this.id = Item.lastId++;
     
    }
}

export default Item;