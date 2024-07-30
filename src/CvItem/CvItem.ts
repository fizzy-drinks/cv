import Bordered from "@/Bordered/Bordered";
import { css } from "@emotion/css";

class CvItem extends Bordered.of(css`
  overflow: auto;
  margin-right: 3rem;
  margin-left: 2rem;
  page-break-inside: avoid;

  &:first-of-type {
    border-width: 2px 2px 0 0;
    margin-left: 0;
  }

  &:nth-child(even) {
    border-width: 2px 2px 0 0;
  }

  &:nth-child(odd) {
    border-width: 2px 0 0 2px;
  }
`) {}

export default CvItem;
