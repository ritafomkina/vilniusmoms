export default class HTMLBuilder {

    constructor() {
        this.fragment = document.createDocumentFragment();
    }

    createContainer(className) {
        const container = document.createElement('div');
        container.classList.add(className);
        this.fragment.append(container);
        return this;
      }


createElement(tagName, content, className, position) {
    const parent = this.fragment.firstElementChild;
    const tag = document.createElement(tagName);
    tag.classList.add(className);
    tag.innerHTML = content;
    // console.log(tag);
    parent[position](tag);
    return this;
    }

    insertAddInfo(content, ...classNames) {
        const p = document.createElement('p');
        p.classList.add(...classNames);
        p.innerHTML = content;
        p.after
    }

insertFragment(parent) {
    // console.log(this.fragment);
    parent.after(this.fragment);
}
}