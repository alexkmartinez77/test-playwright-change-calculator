// Write your JavaScript here
document.getElementById('calculate-change').addEventListener('click', function() {
    const amountDue = parseFloat(document.getElementById('amount-due').value);
    const amountReceived = parseFloat(document.getElementById('amount-received').value);
    
    let change = amountReceived - amountDue;

    if (change < 0) {
        alert("Amount received must be greater than or equal to amount due.");
        return;
    }

    // Calculate dollar and coins
    const dollars = Math.floor(change);
    change = (change - dollars) * 100; // remaining cents

    const quarters = Math.floor(change / 25);
    change %= 25;

    const dimes = Math.floor(change / 10);
    change %= 10;

    const nickels = Math.floor(change / 5);
    change %= 5;

    const pennies = Math.round(change); // round off the remaining cents

    // Update output with formatted values
    document.getElementById('dollars-output').textContent = `${dollars}`;
    document.getElementById('quarters-output').textContent = `${quarters}`;
    document.getElementById('dimes-output').textContent = `${dimes}`;
    document.getElementById('nickels-output').textContent = `${nickels}`;
    document.getElementById('pennies-output').textContent = `${pennies}`;
});