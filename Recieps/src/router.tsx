import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Desserts from "./pages/Desserts";
import Home from "./pages/Home";
import NewReciep from "./pages/NewReciep";


const router = createBrowserRouter([
{
path:'/',
element:<RootLayout/>,
children:[{
index:true,
element:<Home/>
},{
path:'/desserts',
element:<Desserts/>  
},{
path:'/new-reciep',
element:<NewReciep/>  
}
]  
}  
])

export default router