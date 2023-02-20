export class renderList {
    constructor(container) {
        this.container = container;
    }
    render(item, title) {
        const li = document.createElement("li");
        const h4 = document.createElement("h4");
        h4.innerText = title;
        li.append(h4);
        const p = document.createElement("p");
        p.innerText = item.format();
        li.append(p);
    }
}
