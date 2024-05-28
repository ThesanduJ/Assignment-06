import db from "../model/CustomerModel.js";
import {customers} from "../db/db.js";
import CustomerModel from "../model/CustomerModel.js";
var recordIndex;

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
    while (true) {
        if ($('.customer-name').val() === null || $('.customer-name').val() === '') {
            swal("Error!", "Something went wrong in customer name!", "error");
            break;
        }
        if ($('.customer-nic').val() === null || $('.customer-nic').val() === '') {
            swal("Error!", "Something went wrong in customer nic!", "error");
            break;
        }
        if ($('.customer-address').val() === null || $('.customer-address').val() === '') {
            swal("Error!", "Something went wrong in customer address!", "error");
            break;
        }
        if ($('.customer-number').val() === null || $('.customer-number').val() === '') {
            swal("Error!", "Something went wrong in customer contact number!", "error");
            break;
        }
        else {
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
            break;
        }
    }
});

$("#cus-btnDelete").on('click', () => {
    customers.splice(recordIndex, 1);
    loadTable();
});

$("#cus-table-body").on('click', 'tr', function() {
    let index = $(this).index();
    recordIndex = index;

    console.log("index: ", index);

    let name = $(this).find(".cus-name").text();
    let nic = $(this).find(".cus-nic").text();
    let address = $(this).find(".cus-address").text();
    let number = $(this).find(".cus-number").text();

    $(".customer-name").val(name);
    $(".customer-nic").val(nic);
    $(".customer-address").val(address);
    $(".customer-number").val(number);

    let customer=new CustomerModel(name,nic,address,number);
})

$("#customer-btnUpdate").on('click', () => {
    var customerName = $('.customer-name').val();
    var customerNIC = $('.customer-nic').val();
    var customerAddress = $('.customer-address').val();
    var customerNumber = $('.customer-number').val();

    let customerObj = customers[recordIndex];
    // let studentObj = {...students[recordIndex]}; // clone object
    customerObj.name = customerName;
    customerObj.nic = customerNIC;
    customerObj.address = customerAddress;
    customerObj.number = customerNumber;

    // console.log("S1: ", studentObj);
    // console.log("S2: ", students[recordIndex]);

    loadTable();
});
