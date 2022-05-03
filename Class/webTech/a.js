function funnct() {
    var cost = parseInt(document.getElementById('unitCost').value);
    var quantity = parseInt(document.getElementById('qtt').value);
    var tprice = cost * quantity;
    document.getElementById('finalPrice').value = tprice;
}