import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../App.tsx";
import ErrorPage from "../components/ErrorPage/ErrorPage.tsx";
import ViewBug from "../pages/ViewBug/ViewBug.tsx";
import CreateBug from "../pages/CreateBug/CreateBug.tsx";
import ComponentErrorPage from "../components/ErrorPage/ComponentErrorPage.tsx";

const routes: RouteObject[] = [
  { path: 'view-bug', element: <ViewBug />},
  { path: 'create-bug', element: <CreateBug />},   
  { path: 'component-error-page', element: <ComponentErrorPage />}
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [ ...routes ]
  },
]);