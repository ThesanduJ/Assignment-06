$('#login-group').css({display: 'block'});
$('#dash-group').css({display: 'none'});
$('#cus-group').css({display: 'none'});
$('#item-group').css({display: 'none'});
$('#placeOrder-group').css({display: 'none'});
$('#viewOrder-group').css({display: 'none'});
$('#sign-up-group').css({display: 'none'});


$('#btnLogin').on('click', () => {
    $('#login-group').css({display: 'none'});
    $('#dash-group').css({display: 'block'});
    $('#cus-group').css({display: 'none'});
    $('#item-group').css({display: 'none'});
    $('#placeOrder-group').css({display: 'none'});
    $('#viewOrder-group').css({display: 'none'});
    $('#sign-up-group').css({display: 'none'});

});

$('#btnUser').on('click', () => {
    $('#login-group').css({display: 'none'});
    $('#dash-group').css({display: 'none'});
    $('#cus-group').css({display: 'none'});
    $('#item-group').css({display: 'none'});
    $('#placeOrder-group').css({display: 'none'});
    $('#viewOrder-group').css({display: 'none'});
    $('#sign-up-group').css({display: 'block'});

});

// ---------------------------------exit button--------------------------------------

$('#dash-btnExit').on('click', () => {
    $('#login-group').css({display: 'block'});
    $('#dash-group').css({display: 'none'});
    $('#cus-group').css({display: 'none'});
    $('#item-group').css({display: 'none'});
    $('#placeOrder-group').css({display: 'none'});
    $('#viewOrder-group').css({display: 'none'});
    $('#sign-up-group').css({display: 'none'});

});

$('#cus-btnExit').on('click', () => {
    $('#login-group').css({display: 'block'});
    $('#dash-group').css({display: 'none'});
    $('#cus-group').css({display: 'none'});
    $('#item-group').css({display: 'none'});
    $('#placeOrder-group').css({display: 'none'});
    $('#viewOrder-group').css({display: 'none'});
    $('#sign-up-group').css({display: 'none'});

});

$('#item-btnExit').on('click', () => {
    $('#login-group').css({display: 'block'});
    $('#dash-group').css({display: 'none'});
    $('#cus-group').css({display: 'none'});
    $('#item-group').css({display: 'none'});
    $('#placeOrder-group').css({display: 'none'});
    $('#viewOrder-group').css({display: 'none'});
    $('#sign-up-group').css({display: 'none'});

});

$('#viewOrder-btnExit').on('click', () => {
    $('#login-group').css({display: 'block'});
    $('#dash-group').css({display: 'none'});
    $('#cus-group').css({display: 'none'});
    $('#item-group').css({display: 'none'});
    $('#placeOrder-group').css({display: 'none'});
    $('#viewOrder-group').css({display: 'none'});
    $('#sign-up-group').css({display: 'none'});

});

$('#placeOrder-btnExit').on('click', () => {
    $('#login-group').css({display: 'block'});
    $('#dash-group').css({display: 'none'});
    $('#cus-group').css({display: 'none'});
    $('#item-group').css({display: 'none'});
    $('#placeOrder-group').css({display: 'none'});
    $('#viewOrder-group').css({display: 'none'});
    $('#sign-up-group').css({display: 'none'});

});

//--------------------------------------------------------------------------------------------

$('#dash-btnCustomer').on('click', () => {
    $('#login-group').css({display: 'none'});
    $('#dash-group').css({display: 'none'});
    $('#cus-group').css({display: 'block'});
    $('#item-group').css({display: 'none'});
    $('#placeOrder-group').css({display: 'none'});
    $('#viewOrder-group').css({display: 'none'});
    $('#sign-up-group').css({display: 'none'});

});

$('#dash-btnItems').on('click', () => {
    $('#login-group').css({display: 'none'});
    $('#dash-group').css({display: 'none'});
    $('#cus-group').css({display: 'none'});
    $('#item-group').css({display: 'block'});
    $('#placeOrder-group').css({display: 'none'});
    $('#viewOrder-group').css({display: 'none'});
    $('#sign-up-group').css({display: 'none'});

});

$('#dash-btnView').on('click', () => {
    $('#login-group').css({display: 'none'});
    $('#dash-group').css({display: 'none'});
    $('#cus-group').css({display: 'none'});
    $('#item-group').css({display: 'none'});
    $('#placeOrder-group').css({display: 'none'});
    $('#viewOrder-group').css({display: 'block'});
    $('#sign-up-group').css({display: 'none'});

});

$('#dash-btnPlaceOrder').on('click', () => {
    $('#login-group').css({display: 'none'});
    $('#dash-group').css({display: 'none'});
    $('#cus-group').css({display: 'none'});
    $('#item-group').css({display: 'none'});
    $('#placeOrder-group').css({display: 'block'});
    $('#viewOrder-group').css({display: 'none'});
    $('#sign-up-group').css({display: 'none'});

});

//----------------------customer---------------------------------------------------
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

//--------------------------------------------------------------------------------------------

