interface Props {
  type: "OpenEye" | "CloseEye";
}
export default function Icon({ type }: Props) {
  if (type === "OpenEye") {
    return (
      <svg
        className="svg-eye"
        width="18"
        height="16"
        viewBox="0 0 18 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.7972 7.11029C17.1941 7.64171 17.1941 8.35914 16.7972 8.88971C15.5474 10.5603 12.5486 14 9.04756 14C5.54651 14 2.54776 10.5603 1.29787 8.88971C1.1048 8.63526 1 8.32222 1 8C1 7.67778 1.1048 7.36474 1.29787 7.11029C2.54776 5.43971 5.54651 2 9.04756 2C12.5486 2 15.5474 5.43971 16.7972 7.11029Z"
          stroke="black"
          strokeWidth="1.71429"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.14286 10.5714C10.5464 10.5714 11.6841 9.42018 11.6841 8.00002C11.6841 6.57986 10.5464 5.42859 9.14286 5.42859C7.73934 5.42859 6.60156 6.57986 6.60156 8.00002C6.60156 9.42018 7.73934 10.5714 9.14286 10.5714Z"
          stroke="black"
          strokeWidth="1.71429"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (type === "CloseEye") {
    return (
      <svg
        className="svg-eye"
        width="18"
        height="16"
        viewBox="0 0 18 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 6C1 6 3.8 9.2 9 9.2C14.2 9.2 17 6 17 6M2.6 7.316L1 9.2M17 9.2L15.4032 7.3184M6.5312 8.944L5.8 11.2M11.4504 8.9504L12.2 11.2"
          stroke="black"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
}
