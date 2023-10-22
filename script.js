document.getElementById("calculate").addEventListener("click", function () {
    const destination = document.getElementById("destination").value;
    const ticketAmount = parseInt(document.getElementById("ticket-amount").value);
    const isMember = document.getElementById("is-member").checked;
    const ticketName = document.getElementById("ticket-name").value;

    // Harga tiket berdasarkan tujuan
    const ticketPrices = {
        "Jakarta": 500,
        "Bali": 800,
        "Yogyakarta": 600,
    };

    const price = ticketPrices[destination] * ticketAmount;

    // Diskon 10% jika member
    const discount = isMember ? price * 0.1 : 0;

    // Total bayar
    const totalPrice = price - discount;

    document.getElementById("ticket-price").value = price;
    document.getElementById("ticket-discount").value = discount;
    document.getElementById("total-price").value = totalPrice;
    document.getElementById("name-ticket").value = ticketName;
});
