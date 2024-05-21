import db from "../model/CustomerModel.js";
import {customers} from "../db/db.js";

$('#cus-btnExit').on('click', () => {
    $('#login-group').css({display: 'block'});
    $('#dash-group').css({display: 'none'});
    $('#cus-group').css({display: 'none'});
    $('#item-group').css({display: 'none'});
    $('#placeOrder-group').css({display: 'none'});
    $('#viewOrder-group').css({display: 'none'});
    $('#sign-up-group').css({display: 'none'});

});

$('#cus-logo').on('click', () => {
    $('#login-group').css({display: 'none'});
    $('#dash-group').css({display: 'block'});
    $('#cus-group').css({display: 'none'});
    $('#item-group').css({display: 'none'});
    $('#placeOrder-group').css({display: 'none'});
    $('#viewOrder-group').css({display: 'none'});
    $('#sign-up-group').css({display: 'none'});

});

$('#cus-customer').on('click', () => {
    $('#login-group').css({display: 'none'});
    $('#dash-group').css({display: 'none'});
    $('#cus-group').css({display: 'block'});
    $('#item-group').css({display: 'none'});
    $('#placeOrder-group').css({display: 'none'});
    $('#viewOrder-group').css({display: 'none'});
    $('#sign-up-group').css({display: 'none'});

});


$('#cus-item').on('click', () => {
    $('#login-group').css({display: 'none'});
    $('#dash-group').css({display: 'none'});
    $('#cus-group').css({display: 'none'});
    $('#item-group').css({display: 'block'});
    $('#placeOrder-group').css({display: 'none'});
    $('#viewOrder-group').css({display: 'none'});
    $('#sign-up-group').css({display: 'none'});

});

$('#cus-view').on('click', () => {
    $('#login-group').css({display: 'none'});
    $('#dash-group').css({display: 'none'});
    $('#cus-group').css({display: 'none'});
    $('#item-group').css({display: 'none'});
    $('#placeOrder-group').css({display: 'none'});
    $('#viewOrder-group').css({display: 'block'});
    $('#sign-up-group').css({display: 'none'});

});

$('#cus-placeOrder').on('click', () => {
    $('#login-group').css({display: 'none'});
    $('#dash-group').css({display: 'none'});
    $('#cus-group').css({display: 'none'});
    $('#item-group').css({display: 'none'});
    $('#placeOrder-group').css({display: 'block'});
    $('#viewOrder-group').css({display: 'none'});
    $('#sign-up-group').css({display: 'none'});

});
function loadTable() {

    $("#cus-table-body").empty();

    customers.map((item, index) => {
        let record = `<tr>
                <td class="cus-name">${item.name}</td>
                <td class="cus-nic">${item.nic}</td>
                <td class="cus-address">${item.address}</td>
                <td class="cus-number">${item.number}</td>
            </tr>`;
        $("#cus-table-body").append(record);
    });
}
$("#customer-btnSave").on('click', () => {

    var customerName = $('.customer-name').val();
    var customerNIC = $('.customer-nic').val();
    var customerAddress = $('.customer-address').val();
    var customerNumber = $('.customer-number').val();

    // create an object
    let customer = {
        name: customerName,
        nic: customerNIC,
        address: customerAddress,
        number: customerNumber
    }
    // push to the array
    customers.push(customer);

    loadTable();
});