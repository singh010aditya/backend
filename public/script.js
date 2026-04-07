let seatNo;
let bookingID;
let price = 0;

function show(id) {
    let pages = document.querySelectorAll(".page");
    pages.forEach(p => p.style.display = "none");

    document.getElementById(id).style.display = "block";
}

function search() {
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let type = document.getElementById("type").value;

    if (type === "Train") price = 500;
    else if (type === "Bus") price = 300;
    else price = 2000;

    document.getElementById("results").innerHTML =
        `
        <p><b>Route:</b> ${from} → ${to}</p>
        <p><b>Transport:</b> ${type}</p>
        <p><b>Price:</b> ₹${price}</p>
        <button onclick='openSeats()'>Select Seat</button>
        `;
}

function openSeats() {
    show("seats");

    let grid = document.getElementById("grid");
    grid.innerHTML = "";

    for (let i = 1; i <= 20; i++) {
        let s = document.createElement("div");
        s.className = "seat";
        s.innerText = i;

        s.onclick = function () {
            seatNo = i;
            show("payment");
        };

        grid.appendChild(s);
    }
}

function pay() {
    bookingID = "BK" + Math.floor(Math.random() * 10000);

    show("ticket");

    document.getElementById("info").innerHTML =
        "Booking ID: " + bookingID +
        "<br>From: " + document.getElementById("from").value +
        "<br>To: " + document.getElementById("to").value +
        "<br>Seat: " + seatNo +
        "<br>Price: ₹" + price +
        "<br>Payment Done 💳<br>Email & SMS Sent ✔";
}

function cancel() {
    alert("Ticket Cancelled & Refund Initiated 💰");
}

function users() {
    document.getElementById("adminData").innerHTML =
        "Total Users: 15";
}

function reports() {
    document.getElementById("adminData").innerHTML =
        "Bookings Today: 8<br>Revenue: ₹5000";
}