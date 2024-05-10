export default class ItemModel{
    constructor(itemCode,itemName,price,itemQty) {
        this._itemCode=itemCode;
        this._itemName=itemName;
        this._price=price;
        this._itemQty=itemQty;
    }

    get itemCode() {
        return this._itemCode;
    }

    set itemCode(value) {
        this._itemCode = value;
    }

    get itemName() {
        return this._itemName;
    }

    set itemName(value) {
        this._itemName = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    get itemQty() {
        return this._itemQty;
    }

    set itemQty(value) {
        this._itemQty = value;
    }
}