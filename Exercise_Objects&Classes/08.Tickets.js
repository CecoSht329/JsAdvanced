function solve(ticketInfo, sortingCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let tickets = [];
    ticketInfo.forEach(info => {
        let [destination, price, status] = info.split('|');
        let ticket = new Ticket(destination, price, status);
        tickets.push(ticket);
    });

    switch (sortingCriteria) {
        case "destination":
            tickets.sort(function (a, b) {
                if (a.destination < b.destination) {
                    return -1;
                }
                if (a.destination > b.destination) {
                    return 1;
                }
                return 0;
            }
            );
            break;
        case "price":
            tickets.sort();
            break;
        case "status":
            tickets.sort(function (a, b) {
                if (a.status < b.status) {
                    return -1;
                }
                if (a.status > b.status) {
                    return 1;
                }
                return 0;
            });
            break;
    }
    return tickets;
}



solve([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
);