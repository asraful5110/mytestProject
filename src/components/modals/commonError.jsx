import style from "./commonError.module.css";

import { forwardRef } from "react";
import {Text} from '../../styled_components/bassic_styled'

const CommonError = forwardRef((props, ref) => {
  return (
    <div className={style.box} ref={ref}>
      <button
        className={style.closeBtn}
        onClick={(e) => {
          e.target.parentElement.parentElement.style.display = "none";
        }}
      >
        <i className="fas fa-times"></i>
      </button>
      <Text>{props.children}</Text>
    </div>
  );
});

export default CommonError;
