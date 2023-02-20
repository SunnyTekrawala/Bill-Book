import { invoice } from './classes/invoice.js';
import { recipient } from './classes/recipient.js';
import { renderList } from './classes/renderList.js';
const type = document.querySelector("#type");
const tofrom = document.querySelector("#toFrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const btn = document.querySelector("#button");
const ul = document.querySelector("ul");
const list = new renderList(ul);
const value = document.querySelector("#validate");
btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (tofrom.value,
        details.value,
        amount.valueAsNumber) {
        let doc;
        if (type.value === "invoice") {
            doc = new invoice(tofrom.value, details.value, amount.valueAsNumber);
            tofrom.value = "";
            details.value = "";
            amount.valueAsNumber = "";
        }
        else {
            doc = new recipient(tofrom.value, details.value, amount.valueAsNumber);
            tofrom.value = "";
            details.value = "";
            amount.valueAsNumber = "";
        }
        value.innerHTML = "";
        list.render(doc, type.value);
    }
    else {
        value.innerHTML = "Fill all the fields first";
    }
});
