import NavBar from "./navibar";
import Footer from "./footer";

export default function Layouts({children}) {
    return (
        <>
        <NavBar/>
        {children}
        <Footer/>
        </>
    )
}
