import Bordered from "@/Bordered/Bordered";
import { css } from "@emotion/css";

class BackToTopButton extends Bordered.of(css`
  display: flex;
  justify-content: center;
  align-items: center;

  grid-area: b;
  background: none;
  font: inherit;
  color: inherit;
  box-shadow: none;
  height: 12em;
  margin: 6em 0;
  cursor: pointer;
  transition: all 300ms ease;

  &:hover {
    background: var(--hl);
    color: black;
  }

  @media print {
    display: none;
  }
`) {
  connectedCallback() {
    super.connectedCallback();

    this.addEventListener("click", () => {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    });
  }
}

export default BackToTopButton;
