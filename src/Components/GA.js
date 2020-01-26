import ReactGA from "react-ga";
let trackingID = "UA-156655216-1";

export function pageviewGA() {
  ReactGA.pageview(window.location.pathname);
}
export function initGA() {
  ReactGA.initialize(trackingID);
}
