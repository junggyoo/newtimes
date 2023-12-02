export interface Icons {
  HOME: JSX.Element;
  SCRAP: JSX.Element;
}

export const IconMap: Icons = {
  HOME: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 9.84135V22.3509C22 22.6704 21.6812 23.0001 21.3522 23.0001H16.6221C16.3033 23.0001 16.0874 22.7837 16.0874 22.4643V22.3613C16.0874 19.9912 14.1542 18.157 11.892 18.157C9.52699 18.157 7.69666 20.0943 7.69666 22.3613V22.4643C7.69666 22.7837 7.48072 23.0001 7.16195 23.0001H2.64781C2.32905 23.0001 2 22.6807 2 22.3509V9.84135C2 8.97577 2.31877 8.22354 2.96658 7.68771L10.1748 1.6493C11.1414 0.783729 12.653 0.783729 13.7224 1.6493L20.9306 7.68771C21.6812 8.22354 22 8.97577 22 9.84135Z"
        fill="currentColor"
      />
    </svg>
  ),
  SCRAP: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3"
        y="2"
        width="18"
        height="20"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M8 7H16M8 11.5H16M8 16H13.2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};
