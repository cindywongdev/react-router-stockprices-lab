// import dependencies
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom"
import App from "./App"
import Main from "./pages/main"
import Stocks from "./pages/stocks"
import Price from "./pages/price"
import About from "./pages/about"
import { priceLoader } from "./loaders"
import { stocksLoader } from "./loaders"

// create the router and save in a variable
const router = createBrowserRouter(
    createRoutesFromElements(
        // import and use App component here
        // and App.js file needs to have the Outlet component to connect this router to it
        <Route path="/" element={<App/>}>
            <Route path="" element={<Main/>}/>
            <Route 
                path="stocks"
                loader={stocksLoader}
                element={<Stocks/>}/>
            <Route 
                path="price/:symbol" 
                loader={priceLoader} 
                element={<Price/>}/>
            <Route path="about" element={<About/>}
            />
        </Route>
    )
)

// export router
export default router