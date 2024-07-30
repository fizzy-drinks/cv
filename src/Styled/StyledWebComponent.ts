class WebComponent extends HTMLElement {
  connectedCallback() {}
}

class StyledWebComponent extends WebComponent {
  static of(...classNames: string[]) {
    return class extends this {
      connectedCallback() {
        super.connectedCallback();

        this.classList.add(...classNames);
      }
    };
  }
}

export default StyledWebComponent;
