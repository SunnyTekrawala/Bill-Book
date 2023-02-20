import { HasFormatter } from "../interfaces/HasFormatter";

export class renderList {
    constructor(private container: HTMLUListElement) { }

    render(item: HasFormatter, title: string) {
        const li = document.createElement("li");

        const h4 = document.createElement("h4");
        h4.innerText = title;
        li.append(h4);

        const p = document.createElement("p");
        p.innerText = item.format();
        li.append(p);

        this.container.append(li);
    }
}