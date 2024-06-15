import {customers, items, orders} from "../db/db.js";
import PlaceOrderModel from "../model/PlaceOrderModel.js";
import CustomerModel from "../model/CustomerModel";

var recordIndex;

var price;
var itemCount = null;
var discountAmount;
var paidPrice = null;
var total;
var subTotal;

$('#placeOrder-btnExit').on('click', () => {
    $('#login-group').css({display: 'block'});
    $('#dash-group').css({display: 'none'});
    $('#cus-group').css({display: 'none'});
    $('#item-group').css({display: 'none'});
    $('#placeOrder-group').css({display: 'none'});
    $('#viewOrder-group').css({display: 'none'});
    $('#sign-up-group').css({display: 'none'});

});

$('#placeOrder-logo').on('click', () => {
    $('#login-group').css({display: 'none'});
    $('#dash-group').css({display: 'block'});
    $('#cus-group').css({display: 'none'});
    $('#item-group').css({display: 'none'});
    $('#placeOrder-group').css({display: 'none'});
    $('#viewOrder-group').css({display: 'none'});
    $('#sign-up-group').css({display: 'none'});

});

$('#placeOrder-customer').on('click', () => {
    $('#login-group').css({display: 'none'});
    $('#dash-group').css({display: 'none'});
    $('#cus-group').css({display: 'block'});
    $('#item-group').css({display: 'none'});
    $('#placeOrder-group').css({display: 'none'});
    $('#viewOrder-group').css({display: 'none'});
    $('#sign-up-group').css({display: 'none'});

});


$('#placeOrder-item').on('click', () => {
    $('#login-group').css({display: 'none'});
    $('#dash-group').css({display: 'none'});
    $('#cus-group').css({display: 'none'});
    $('#item-group').css({display: 'block'});
    $('#placeOrder-group').css({display: 'none'});
    $('#viewOrder-group').css({display: 'none'});
    $('#sign-up-group').css({display: 'none'});

});

$('#placeOrder-view').on('click', () => {
    $('#login-group').css({display: 'none'});
    $('#dash-group').css({display: 'none'});
    $('#cus-group').css({display: 'none'});
    $('#item-group').css({display: 'none'});
    $('#placeOrder-group').css({display: 'none'});
    $('#viewOrder-group').css({display: 'block'});
    $('#sign-up-group').css({display: 'none'});

});

$('#placeOrder-placeOrder').on('click', () => {
    $('#login-group').css({display: 'none'});
    $('#dash-group').css({display: 'none'});
    $('#cus-group').css({display: 'none'});
    $('#item-group').css({display: 'none'});
    $('#placeOrder-group').css({display: 'block'});
    $('#viewOrder-group').css({display: 'none'});
    $('#sign-up-group').css({display: 'none'});

});

$(".placeOrder-inp-01").val("O-01");
$(document).ready(function () {
    var count = 2;
    $("#placeOrder-btnPurchase").click(function () {
        if (count <= 0) {
            count = 1;
        }
        $(".placeOrder-inp-01").val("O-0" + count);
        ++count;
        console.log(count);
    });

    $("#placeOrder-btnRemove").click(function () {
        --count;
        if (count > 0) {
            $(".placeOrder-inp-01").val("O-0" + count);
        } else {
            swal("Error!", "Can't change the Order ID!", "error");
        }
        console.log(count);
    });
});
$("document").ready(function () {
    $(".placeOrder-inp-02").on('input', function () {
        var inputV = $(this).val();
        var name = null;
        for (let i = 0; i < customers.length; i++) {
            if (inputV === customers[i].number) {
                name = customers[i].name;
                $(".placeOrder-inp-03").val(name);
                console.log(name);
                break;
            } else {
                $(".placeOrder-inp-03").val("");
            }
        }
    });
});
$("document").ready(function () {
    $(".placeOrder-inp-04").on('input', function () {
        var inputV = $(this).val();
        var itemName = null;
        for (let i = 0; i < items.length; i++) {
            if (inputV === items[i].itemCode) {
                itemName = items[i].itemName;
                itemCount = items[i].itemQty;
                price = items[i].price;
                $(".placeOrder-inp-05").val(itemName);
                $(".placeOrder-inp-06").val(itemCount);
                console.log(itemName);
                console.log(itemCount);
                break;
            } else {
                $(".placeOrder-inp-05").val("");
                $(".placeOrder-inp-06").val("");
            }
        }
    });
});
$("#placeOrder-btnAdd").on('click', () => {
    swal("Successfully Added!", "!", "success");
    total = price * itemCount;
    $("#total").val(total);
});
$("document").ready(function () {
    $(".placeOrder-inp-11").on('input', function () {
        discountAmount = $(".placeOrder-inp-11").val();
        $("#sub-total").text(total - discountAmount)
    });
});
$("document").ready(function () {
    $(".placeOrder-inp-11").on('input', function () {
        discountAmount = $(".placeOrder-inp-11").val();
        subTotal = $("#sub-total").val(total - discountAmount);
        // subTotal = $("#sub-total").val(total - discountAmount);
        paidPrice = $(".placeOrder-inp-12").val();
        // $(".placeOrder-inp-13").val(subTotal - paidPrice)
        console.log(subTotal - paidPrice);
    });
});

function loadTable() {

    $("#order-table-body").empty();

    orders.map((item, index) => {
        let record = `<tr>
                <td class="order-ID">${item.orderId}</td>
                <td class="customer-name">${item.customerName}</td>
                <td class="item-code">${item.itemCode}</td>
                <td class="qty">${item.quantity}</td>
                <td class="order-date">${item.orderDate}</td>
                <td class="total-price">${item.totalPrice}</td>
                <td class="paid-price">${item.paidPrice}</td>
            </tr>`;
        $("#order-table-body").append(record);
    });
}

$("#placeOrder-btnPurchase").on('click', () => {
    var orderId = $('.placeOrder-inp-01').val();
    var customerName = $('.placeOrder-inp-03').val();
    var itemCode = $('.placeOrder-inp-04').val();
    var qty = $('.placeOrder-inp-06').val();
    var orderDate = $('.placeOrder-inp').val();
    var totalPrice = $('#total').val();
    var PaidPrice = $('.placeOrder-inp-12').val();

    let orders1 = {
        orderId: orderId,
        customerName: customerName,
        itemCode: itemCode,
        quantity: qty,
        orderDate: orderDate,
        totalPrice: totalPrice,
        paidPrice: PaidPrice
    }
    orders.push(orders1);
    loadTable();
});
// $("#order-table-body").on('click', 'tr', function () {
//     let index = $(this).index();
//     recordIndex = index;
//
//     console.log("index: ", index);
//
//     let orderID = $(this).find(".order-ID").text();
//     let customerName = $(this).find(".customer-name").text();
//     let itemCode = $(this).find(".item-code").text();
//     let qty = $(this).find(".qty").text();
//     let orderDate = $(this).find(".order-date").text();
//     let totalPrice = $(this).find(".total-price").text();
//     let paidPrice = $(this).find(".paid-price").text();
//
//
//     $(".order-ID").val(orderID);
//     $(".customer-name").val(customerName);
//     $(".item-code").val(itemCode);
//     $(".qty").val(qty);
//     $(".order-date").val(orderDate);
//     $(".total-price").val(totalPrice);
//     $(".paid-price").val(paidPrice);
//
//     let order2 = new PlaceOrderModel(orderID, customerName,itemCode,qty,orderDate,totalPrice,paidPrice);
// });
// $("#viewOrder-btnDelete").on('click', () => {
//     orders.splice(recordIndex, 1);
//     loadTable();
// });



