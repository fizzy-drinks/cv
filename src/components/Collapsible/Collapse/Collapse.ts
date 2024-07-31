import "./Collapse.css";

export default class Collapse extends HTMLElement {
  connectedCallback() {
    this.addEventListener("click", () => {
      const collapsibleId = this.getAttribute("collapsible");
      if (!collapsibleId) return;

      const collapsible = document.getElementById(collapsibleId);
      if (!collapsible) return;

      collapsible.toggleAttribute("collapse");
    });
  }
}
