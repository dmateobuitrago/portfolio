import ReactGA from "react-ga"
 
export const initGA = () => {
  ReactGA.initialize("UA-113086011-2",{debug: false})
  console.log('initGA')
}
 
export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}
