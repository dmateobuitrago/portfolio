import ReactGA from "react-ga"
 
export const initGA = () => {
  ReactGA.initialize("UA-113086011-2",{debug: true})
}
 
export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}