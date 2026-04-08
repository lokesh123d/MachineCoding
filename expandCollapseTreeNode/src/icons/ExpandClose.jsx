import * as React from "react";
const ExpandClose = (props) => (
<svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={8}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-chevron-right-icon lucide-chevron-right"
    {...props}
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);
export default ExpandClose;