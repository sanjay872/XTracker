import "@styles/global.css";
import Nav from "@components/nav";

export const metadata={
    title:"XTracker",
    description:"A simple expenses tracker app",
    keywords:"Expenses, Tracker, App"
}

const layout=({children})=>{
    return(
        <html lang="en">
            <body>
            <Nav/> 
                {children}
            </body>
        </html>
    )
}

export default layout;