import "./BackToTop.css";

class BackToTopButton extends HTMLElement {
  connectedCallback() {
    this.addEventListener("click", () => {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    });
  }
}

export default BackToTopButton;
