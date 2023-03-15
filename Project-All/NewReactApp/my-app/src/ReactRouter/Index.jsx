import React, { BrowserRouter, Routers, Route } from 'react'

export default function Index() {
    return (
        <div>
            <BrowserRouter>
                <Routers>
                    <Route path ="/home" element ={ <Home /> }  />
                </Routers>
            </BrowserRouter>
        </div>
    )
}
