import React, {Suspense} from "react";
import {DataBrowserRouter, Link, Outlet, Route, Routes} from "react-router-dom";

const RemoteApp = React.lazy(() => import("app2/App"));

const Root = () => <div>
    <nav>
        <Link to="/omg/local">App 1</Link>
        <Link to="/omg/remote">App 2</Link> |{" "}
    </nav>
    <Outlet/>
</div>

const SubComponent = () => {
    console.log('asd');
    return <h1>App 1</h1>
}
const App = () => {
    return (<Suspense fallback={null}>
        <DataBrowserRouter fallbackElement={null}>
            <Route path={"/omg/"} element={<Root/>}>
                <Route path={"remote/*"} element={<RemoteApp/>}/>
                <Route path={"local/*"} element={<SubComponent/>}/>
            </Route>
        </DataBrowserRouter>
    </Suspense>)
}


export default App;
