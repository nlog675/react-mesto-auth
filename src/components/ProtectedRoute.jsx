import { Navigate, Route } from "react-router-dom"


const ProtectedRoute = ({element: Element, ...props}) => {
  return(
    // <Route>
      // {() => 
      props.loggedIn ? <Element {...props} /> : <Navigate to="/sign-in" />
    // </Route>
  );
};

export default ProtectedRoute;