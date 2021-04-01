import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('UA-000000-01');
  ReactGA.pageview(window.location.pathname + window.location.search);
};
