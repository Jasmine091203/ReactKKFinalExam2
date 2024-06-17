import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RouterHome, { ResultsLoader } from './components/RouterHome';
import RootLayout from './components/RootLayout';
import ErrorPage from './components/ErrorPage';

import UniversityDetail, { UniversityDetailLoader } from './components/UniversityDetail';
import UniversityPage, { UniversityLoader } from './components/UniversityPage';

import HighSchoolsDetail, { HighSchoolsDetailLoader } from './components/HighSchoolsDetail';
import HighSchoolsPage , { HighSchoolsLoader }from './components/HighSchoolsPage';


const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { path: '/', element: <RouterHome />, loader: ResultsLoader },
            { path: '/university', element: <UniversityPage />, loader: UniversityLoader },
            { path: '/university/:objectid', element: <UniversityDetail />, loader: UniversityDetailLoader },
            { path: '/highSchool', element: <HighSchoolsPage /> ,loader: HighSchoolsLoader},
            { path: '/highSchool/:objectid', element: <HighSchoolsDetail />, loader: HighSchoolsDetailLoader},
        ]
    }
]);
function App() {
    return (
        <div className="App">
            <RouterProvider router={router} />
            {/* react-router-dom 套件 裡面的 元件'RouterProvider'
            並沒有實際寫到它的程式碼 /}
            {/ 指引到對應的頁面的元件是RouterProvider，它的屬性是router={} */}
        </div>
    );
}
export default App;