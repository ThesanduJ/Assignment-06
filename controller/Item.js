import db from "../model/ItemModel.js";
import {items} from "../db/db.js";
import ItemModel from "../model/ItemModel.js";
var recordIndex;

$('#item-btnExit').on('click', () => {
    $('#login-group').css({display: 'block'});
    $('#dash-group').css({display: 'none'});
    $('#cus-group').css({display: 'none'});
    $('#item-group').css({display: 'none'});
    $('#placeOrder-group').css({display: 'none'});
    $('#viewOrder-group').css({display: 'none'});
    $('#sign-up-group').css({display: 'none'});

});

$('#item-logo').on('click', () => {
    $('#login-group').css({display: 'none'});
    $('#dash-group').css({display: 'block'});
    $('#cus-group').css({display: 'none'});
    $('#item-group').css({display: 'none'});
    $('#placeOrder-group').css({display: 'none'});
    $('#viewOrder-group').css({display: 'none'});
    $('#sign-up-group').css({display: 'none'});

});

$('#item-customer').on('click', () => {
    $('#login-group').css({display: 'none'});
    $('#dash-group').css({display: 'none'});
    $('#cus-group').css({display: 'block'});
    $('#item-group').css({display: 'none'});
    $('#placeOrder-group').css({display: 'none'});
    $('#viewOrder-group').css({display: 'none'});
    $('#sign-up-group').css({display: 'none'});

});


$('#item-item').on('click', () => {
    $('#login-group').css({display: 'none'});
    $('#dash-group').css({display: 'none'});
    $('#cus-group').css({display: 'none'});
    $('#item-group').css({display: 'block'});
    $('#placeOrder-group').css({display: 'none'});
    $('#viewOrder-group').css({display: 'none'});
    $('#sign-up-group').css({display: 'none'});

});

$('#item-view').on('click', () => {
    $('#login-group').css({display: 'none'});
    $('#dash-group').css({display: 'none'});
    $('#cus-group').css({display: 'none'});
    $('#item-group').css({display: 'none'});
    $('#placeOrder-group').css({display: 'none'});
    $('#viewOrder-group').css({display: 'block'});
    $('#sign-up-group').css({display: 'none'});

});

$('#item-placeOrder').on('click', () => {
    $('#login-group').css({display: 'none'});
    $('#dash-group').css({display: 'none'});
    $('#cus-group').css({display: 'none'});
    $('#item-group').css({display: 'none'});
    $('#placeOrder-group').css({display: 'block'});
    $('#viewOrder-group').css({display: 'none'});
    $('#sign-up-group').css({display: 'none'});

});
function loadTable() {

    $("#item-table-body").empty();

    items.map((item, index) => {
        let record = `<tr>
                <td class="item-id">${item.itemCode}</td>
                <td class="item-description">${item.itemName}</td>
                <td class="item-price">${item.price}</td>
                <td class="item-qty">${item.itemQty}</td>
            </tr>`;
        $("#item-table-body").append(record);
    });
}
$("#item-btnSave").on('click', () => {

    var itemID = $('.item-ids').val();
    var itemDes = $('.item-name').val();
    var itemPrice = $('.item-prices').val();
    var itemQty = $('.item-quantities').val();

    // create an object
    let itemsDetails = {
        itemCode: itemID,
        itemName: itemDes,
        price: itemPrice,
        itemQty: itemQty
    }
    // push to the array
    items.push(itemsDetails);

    loadTable();
});

$("#item-btnDelete").on('click', () => {
    items.splice(recordIndex, 1);
    loadTable();
});

$("#item-table-body").on('click', 'tr', function() {
    let index = $(this).index();
    recordIndex = index;
    console.log("index: ", index);

    let code = $(this).find(".item-id").text();
    let itemName = $(this).find(".item-description").text();
    let price = $(this).find(".item-price").text();
    let qty = $(this).find(".item-qty").text();

    $(".item-ids").val(code);
    $(".item-name").val(itemName);
    $(".item-prices").val(price);
    $(".item-quantities").val(qty);

    let item=new ItemModel(code,itemName,price,qty);
})

$("#item-btnUpdate").on('click', () => {
    var itemID = $('.item-ids').val();
    var itemName = $('.item-name').val();
    var price = $('.item-prices').val();
    var qty = $('.item-quantities').val();

    let itemObj = items[recordIndex];
    // let studentObj = {...students[recordIndex]}; // clone object
    itemObj.itemCode = itemID;
    itemObj.itemName = itemName;
    itemObj.price = price;
    itemObj.itemQty = qty;

    // console.log("S1: ", studentObj);
    // console.log("S2: ", students[recordIndex]);

    loadTable();
});