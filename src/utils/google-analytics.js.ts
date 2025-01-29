import ReactGA from "react-ga4";

const initializeGA = () => {
  ReactGA.initialize("G-7SPHMHP3YC");
};

const trackGAEvent = (category, action, label) => {
  // Send GA4 Event
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};

export default initializeGA;
export { initializeGA, trackGAEvent };
