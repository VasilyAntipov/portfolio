import { scroller } from "react-scroll"
export const scrollTo = (to) => {
    scroller.scrollTo(to, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
    })
}