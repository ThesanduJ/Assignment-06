export default class PlaceOrderModel{
    constructor(orderId,customerName,itemCode,quantity,orderDate,totalPrice,paidPrice) {
        this._orderId=orderId;
        this._customerName=customerName;
        this._itemCode=itemCode;
        this._quantity=quantity;
        this._orderDate=orderDate;
        this._totalPrice=totalPrice;
        this._paidPrice=paidPrice;
    }

    get orderId() {
        return this._orderId;
    }

    set orderId(value) {
        this._orderId = value;
    }

    get customerName() {
        return this._customerName;
    }

    set customerName(value) {
        this._customerName = value;
    }

    get itemCode() {
        return this._itemCode;
    }

    set itemCode(value) {
        this._itemCode = value;
    }

    get quantity() {
        return this._quantity;
    }

    set quantity(value) {
        this._quantity = value;
    }

    get orderDate() {
        return this._orderDate;
    }

    set orderDate(value) {
        this._orderDate = value;
    }

    get totalPrice() {
        return this._totalPrice;
    }

    set totalPrice(value) {
        this._totalPrice = value;
    }

    get paidPrice() {
        return this._paidPrice;
    }

    set paidPrice(value) {
        this._paidPrice = value;
    }
}