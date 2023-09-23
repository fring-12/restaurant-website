type Svg = (props: { className: string }) => JSX.Element;
export const ArrowUpSvg: Svg = ({ className }) => (
  <svg
    className={className}
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18 27.0001C18.2983 27.0001 18.5845 26.8815 18.7955 26.6706C19.0064 26.4596 19.125 26.1734 19.125 25.8751V12.8408L23.9535 17.6716C24.0581 17.7762 24.1822 17.8591 24.3189 17.9157C24.4556 17.9723 24.602 18.0015 24.75 18.0015C24.8979 18.0015 25.0444 17.9723 25.181 17.9157C25.3177 17.8591 25.4419 17.7762 25.5465 17.6716C25.6511 17.567 25.734 17.4428 25.7906 17.3061C25.8472 17.1695 25.8764 17.023 25.8764 16.8751C25.8764 16.7271 25.8472 16.5807 25.7906 16.444C25.734 16.3073 25.6511 16.1832 25.5465 16.0786L18.7965 9.32856C18.692 9.22379 18.5678 9.14067 18.4311 9.08395C18.2945 9.02724 18.1479 8.99805 18 8.99805C17.852 8.99805 17.7055 9.02724 17.5688 9.08395C17.4321 9.14067 17.308 9.22379 17.2035 9.32856L10.4535 16.0786C10.2422 16.2898 10.1235 16.5763 10.1235 16.8751C10.1235 17.1738 10.2422 17.4603 10.4535 17.6716C10.6647 17.8828 10.9512 18.0015 11.25 18.0015C11.5487 18.0015 11.8352 17.8828 12.0465 17.6716L16.875 12.8408V25.8751C16.875 26.1734 16.9935 26.4596 17.2045 26.6706C17.4154 26.8815 17.7016 27.0001 18 27.0001Z" />
  </svg>
);
