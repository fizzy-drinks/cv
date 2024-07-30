import StyledWebComponent from "@/Styled/StyledWebComponent";
import { css } from "@emotion/css";

const Bordered = StyledWebComponent.of(css`
  display: block;
  border: 2px solid var(--border-color);
  border-image: var(--border-gradient) 1;
`);

export default Bordered;
