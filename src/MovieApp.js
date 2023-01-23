import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import Account from './Pages/Account'
import Downloads from './Pages/Downloads'
import Error from './Pages/Error'

const MovieApp = () => {
  return (
    <div>
       
<Routes>
<Route path="/" element={<App />} />
<Route path="/Downloads" element={<Downloads />} />
<Route path="/Account" element={<Account />} />
<Route path="/*" element={<Error />} />
</Routes>
    </div>
  )
}

export default MovieApp


