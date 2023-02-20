export class recipient {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is given ₹${this.amount} for ${this.details}`;
    }
}
