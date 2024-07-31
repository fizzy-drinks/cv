import "./CollapseIndicator.css";

export default class CollapseIndicator extends HTMLElement {
  connectedCallback() {
    const collapsibleId = this.getAttribute("collapsible");
    if (!collapsibleId) return;

    const collapsible = document.getElementById(collapsibleId);
    if (!collapsible) return;

    const updateCollapseStatus = () => {
      if (collapsible.hasAttribute("collapse")) {
        this.textContent = "[+]";
      } else {
        this.textContent = "[-]";
      }
    };

    updateCollapseStatus();

    const observer = new MutationObserver(updateCollapseStatus);
    observer.observe(collapsible, { attributes: true });
  }
}
