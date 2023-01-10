import React from "react";
import { BaseIconProps, iconDefaultProps } from "types";

const Cart = ({ size, fill, ...props }: BaseIconProps) => {
  return (
    <svg width={size} height={size} fill={fill} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M1 1H3L3.4 3M5 11H15L19 3H3.4M5 11L3.4 3M5 11L2.70711 13.2929C2.07714 13.9229 2.52331 15 3.41421 15H15M15 15C13.8954 15 13 15.8954 13 17C13 18.1046 13.8954 19 15 19C16.1046 19 17 18.1046 17 17C17 15.8954 16.1046 15 15 15ZM7 17C7 18.1046 6.10457 19 5 19C3.89543 19 3 18.1046 3 17C3 15.8954 3.89543 15 5 15C6.10457 15 7 15.8954 7 17Z"
        stroke="#1C1C1C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

Cart.defaultProps = {
  ...iconDefaultProps,
};

export default Cart;
