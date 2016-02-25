import {Component} from 'angular2/core';
interface IListItem {
    name: string;
    purchased: boolean;
}
@Component({
    selector: "shopping-list",
    templateUrl: "shoppinglist.html"
})
export class ShoppingList {

    list: IListItem[];

    constructor() {
        this.list = [{
            name: "Apples",
            purchased: false
        }, {
            name: "Oranges",
            purchased: true
        }];        
    }
    
    toggleItem(item:IListItem): void{
        item.purchased = !item.purchased;
    }
    
    addItem(): void{
        this.list.push({
            name: this.newItem,
            purchased: false
        });
        this.newItem = '';
    }
    
    newItem: string;
}