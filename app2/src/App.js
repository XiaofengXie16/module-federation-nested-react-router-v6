import React, {Suspense} from "react";
import {BrowserRouter, Link, Outlet, Route,Routes} from "react-router-dom";

const Root = () => <div>
    <nav>
        <Link to="/app2-basics">App2-basics</Link>
        <br/>
        <Link to="/app2-info">App2-info</Link>
    </nav>
    <Outlet/>
</div>;

const App = () => {
    return (
        <div>
            <Suspense fallback={null}>
                <BrowserRouter basename={"/omg/remote"}>
                    <Routes>
                        <Route path={"/"} element={<Root/>}>
                            <Route path={"/app2-basics"} element={<h1>Basics</h1>}/>
                            <Route path={"/app2-info"} element={<h1>Info</h1>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </div>
    )
}

export default App;

