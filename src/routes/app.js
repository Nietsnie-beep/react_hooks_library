import React from 'react'
import Layout from '../components/Layout';
import Home from '../Home';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import characters from './../components/characters';
import HookUseRef from '../components/HookUseRef';
import HookUseState from './../components/HookUseState';
import HookUseEffect from './../components/HookUseEffect';
const app = () => {
    
  return (
    <Router>
        <Layout>

        <h1>Navbar</h1>
        <hr/>
        <Routes>
            <Route path='/' />
            <Route path='contacto' element={<HookUseState />}/>
            <Route path='useRef' element={<HookUseRef />}/>
            <Route path='useEffect' element={<HookUseEffect />}/>


        </Routes>
        </Layout>
  </Router>
  )
}

export default app