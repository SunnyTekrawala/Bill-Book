import { invoice } from './classes/invoice.js';
import { recipient } from './classes/recipient.js';
import { HasFormatter } from "./interfaces/HasFormatter.js"
import { renderList } from './classes/renderList.js';

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#toFrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLFormElement;
const amount = document.querySelector("#amount") as HTMLFormElement;
const btn = document.querySelector("#button") as HTMLButtonElement;
const ul = document.querySelector("ul")!;
const list = new renderList(ul);
const value = document.querySelector("#validate")!;

btn.addEventListener("click", (e: Event) => {
    e.preventDefault();
    if (tofrom.value,
        details.value,
        amount.valueAsNumber) {
        let doc: HasFormatter;
        if (type.value === "invoice") {
            doc = new invoice(tofrom.value,
                details.value,
                amount.valueAsNumber)
            tofrom.value = "";
            details.value = "";
            amount.valueAsNumber = "";
        } else {
            doc = new recipient(tofrom.value,
                details.value,
                amount.valueAsNumber);
            tofrom.value = "";
            details.value = "";
            amount.valueAsNumber = "";
        }
        value.innerHTML = "";
        list.render(doc, type.value);
    } else {
        value.innerHTML = "Fill all the fields first";
    }
})


