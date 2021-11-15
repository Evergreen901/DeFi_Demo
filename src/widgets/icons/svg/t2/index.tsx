const Icon: React.FC<IconProps> = ({ color = "#fff", width = "21px" }) => {
  return (
    <svg
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.316 4.24599C17.324 4.40799 17.327 4.57199 17.327 4.73399C17.327 9.72399 13.53 15.476 6.58699 15.476C4.45399 15.476 2.47099 14.851 0.799988 13.779C1.09599 13.814 1.39599 13.832 1.69999 13.832C3.46999 13.832 5.09699 13.228 6.38799 12.217C4.73699 12.186 3.34199 11.096 2.86199 9.59599C3.09199 9.63899 3.32899 9.66199 3.57199 9.66199C3.91699 9.66199 4.25099 9.61699 4.56699 9.53099C2.83999 9.18299 1.53899 7.65799 1.53899 5.82799C1.53899 5.81199 1.53899 5.79699 1.53899 5.78099C2.04799 6.06399 2.63099 6.23399 3.24899 6.25399C2.23599 5.57599 1.56899 4.42199 1.56899 3.11099C1.56899 2.41999 1.75499 1.77099 2.08099 1.21299C3.94199 3.49799 6.72499 4.99999 9.86199 5.15799C9.79799 4.88099 9.76499 4.59399 9.76499 4.29699C9.76499 2.21299 11.454 0.523987 13.539 0.523987C14.625 0.523987 15.606 0.980987 16.295 1.71499C17.154 1.54499 17.962 1.23099 18.692 0.798987C18.41 1.67999 17.811 2.41999 17.032 2.88699C17.796 2.79499 18.522 2.59399 19.2 2.29299C18.694 3.05099 18.054 3.71499 17.316 4.24599Z"
        fill="white"
      />
    </svg>
  );
};

export default Icon;
