/* define your functions here */
function calculateTotal(q, p) {
    return q * p;
}

function outputCartRow(item, total) {
    // write the element's content
    const row = `         <tr>
    <td><img src="images/${item.product.filename}"></td>
    <td>${item.product.title}</td>
    <td>${item.quantity}</td>
    <td>\$${item.product.price}</td>
    <td>\$${total}</td>
    </tr>`;
    document.write(row);
}


// table head
document.write("<table class= \"table-fill\">");
const row = `       
<thead>
        <tr>
            <th colspan="2">Product</th>
            <th>#</th>
            <th>Price</th>
            <th>Amount</th>
        </tr>
    </thead>`;
document.write(row);

// table body
function ouptutTableBody() {
    let subtotal = 0;
    for(let item of cart) {
        let total = calculateTotal(item.quantity, item.product.price);
        outputCartRow(item, total);
        subtotal += total;
    }
    // table footer
    let tax = subtotal * 0.1;
    const footer = ` 
    <tr class="totals">
            <td colspan="4">Subtotal</td>
            <td>\$${subtotal}</td>
        </tr>
        <tr class="totals">
            <td colspan="4">Tax</td>
            <td>\$${tax}</td>
        </tr>
        <tr class="totals">
            <td colspan="4">Shipping</td>
            <td>$0.00</td>
        </tr>
        <tr class="totals">
            <td colspan="4" class="focus">Grand Total</td>
            <td class="focus">\$${subtotal + tax}</td>
        </tr>`;
    document.write(footer);
    document.write("</table>");
}

ouptutTableBody();






        
