import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata={
    title:"XTracker",
    description:"A simple expenses tracker app",
    keywords:"Expenses, Tracker, App"
}

const layout=({children})=>{
    return(
        <html lang="en">
            <body>
                <Provider>
                    <Nav/>
                    {children}
                </Provider>
            </body>
        </html>
    )
}

export default layout;