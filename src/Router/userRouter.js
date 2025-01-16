import LayoutUser from "../layout/LayoutUser";
import Main from "../pages/User/Main/Main.jsx";
import Shop from "../pages/User/Shop/Shop.jsx";
import Detail from "../pages/User/Detail/Detail.jsx";
import About from "../pages/User/About/About.jsx";
import Logout from "../components/Logout/Logout.jsx";
import Contact from "../pages/User/Contact/Contact.jsx";
import Cart from "../pages/User/Cart/Cart.jsx";
import Pay from "../pages/User/Pay/Pay.jsx";
import Search from "../pages/User/Shop/Search.jsx";
import Info from "../pages/User/Info/Info.jsx";

export const usersRouter = 
    // User
    {
        path: "/",
        element: <LayoutUser />,
        children: [
            {
                path: "main",
                element: <Main />,
            },
            {
                path: "shop",
                element: <Shop />
            },
            {
                path: "shop/:name",
                element: <Shop />
            },
            {
                path: "detail/:id",
                element: <Detail />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "cart",
                element: <Cart />
            },
            {
                path: "pay",
                element: <Pay />
            },
            {
                path: "search/:id",
                element: <Search />
            },
            {
                path: "info/:id",
                element: <Info />
            },
            {
                path: "logout",
                element: <Logout />
            },
        ]
    }
