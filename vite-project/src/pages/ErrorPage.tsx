import { isRouteErrorResponse, useRouteError } from "react-router-dom"
import Header from "../components/Header"

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Header />
      <div className="container mt-3">
        {isRouteErrorResponse(error) ? 
        "Página requisitada inválida." : error instanceof Error ?
        error.message : "Erro desconhecido" }
      </div>
    </>
  )
}

export default ErrorPage