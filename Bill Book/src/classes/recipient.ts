import { HasFormatter } from "../interfaces/HasFormatter"

export class recipient implements HasFormatter {
    constructor(
        public recipient: string,
        public details: string,
        public amount: number
    ) { }

    format() {
        return `${this.recipient} is given ₹${this.amount} for ${this.details}`
    }
}