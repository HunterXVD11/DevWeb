import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import ItemPage from "../pages/ItemPage";
import Home from "../pages/Home";
import MinhaLista from "../pages/MinhaLista";
import VerTudo from "../pages/VerTudo";
import Cadastro from "../pages/CadastroDeItens";
import LoginPage from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";
import AlteraItem from "../pages/AlteraItem";

const router = createBrowserRouter([
    {
        path: "",
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children:[
            {path: "",element:<Home/>},
            {path: "item",element:<ItemPage/>},
            {path: "minhalista",element:<MinhaLista/>},
            {path: "vertudo",element:<VerTudo/>},
            {path: "cadastro",element:<Cadastro/>},
            {path: "/alteraItem", element:<AlteraItem />},
            {path: "login",element:<LoginPage/>}
        ]
    }
])
export default router;