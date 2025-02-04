import { Routes, Route } from 'react-router-dom';

import { NewInterface } from '../Pages/NewInterface';
import { Home } from '../Pages/Home';
import { Details } from '../Pages/Details';
import { Profile } from '../Pages/Profile';

export function AppRoutes() {
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/new' element={<NewInterface />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/details/:id' element={<Details />} />
        </Routes>
    )
}