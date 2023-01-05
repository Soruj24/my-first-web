import React, { BrowserRouter, Routers, Route } from 'react'

import Home from './Pages/Home'
export default function Index() {
    return (
        <div>
            g
            <Home />
            <BrowserRouter>
                <Routers>
                    <Route path ="/home" element ={ <Home /> }  />
                </Routers>
            </BrowserRouter>
        </div>
    )
}
