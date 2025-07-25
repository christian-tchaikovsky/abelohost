import React from "react";

type Props = {
  className?: string;
};

export const View = ({ className }: Props) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.6026 19.8833C7.04399 19.2862 3.87705 16.4272 2 12C3.87705 7.57275 7.04399 4.7138 10.6026 4.11668C11.0618 4.03963 11.5275 4.00024 11.9978 4H12.0022C12.4725 4.00024 12.9382 4.03963 13.3974 4.11668C16.956 4.7138 20.1229 7.57275 22 12C20.1229 16.4273 16.956 19.2862 13.3974 19.8833C12.9382 19.9604 12.4725 19.9998 12.0022 20H12H11.9978C11.5275 19.9998 11.0618 19.9604 10.6026 19.8833ZM20.4685 12C18.4611 7.67665 15.2343 5.40101 12 5.4C8.76566 5.40101 5.53893 7.67665 3.53149 12C5.53937 16.3243 8.7671 18.6 12.0022 18.6M20.4685 12C18.4606 16.3243 15.2372 18.6 12.0022 18.6L20.4685 12Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9994 14.6C13.4358 14.6 14.6 13.4359 14.6 12.0006C14.6 10.5638 13.4355 9.4 11.9994 9.4C10.5638 9.4 9.4 10.5632 9.4 12.0006C9.4 13.4365 10.5635 14.6 11.9994 14.6ZM11.9994 16C14.2084 16 16 14.2097 16 12.0006C16 9.79029 14.2084 8 11.9994 8C9.79029 8 8 9.79029 8 12.0006C8 14.2097 9.79029 16 11.9994 16Z"
        fill="black"
      />
    </svg>
  );
};
