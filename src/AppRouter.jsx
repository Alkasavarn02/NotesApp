import { Routes, Route } from 'react-router-dom';

import * as ROUTE from './constants/routes';
import HomeScreen from './screens/HomeScreen';
import NoteScreen from './screens/NoteScreen';

const AppRouter = () => {
    return (
        <Routes>
            <Route path={ROUTE.HOME} element={<HomeScreen />} />
            <Route path={ROUTE.NOTE} element={<NoteScreen />} />
        </Routes>
    );
};

export default AppRouter;