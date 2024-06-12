import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Page404 } from './pages/Page404';
import { Resumos } from './pages/Resumos';
import { Registros } from './pages/Registros';
import { Lojinha } from './pages/Lojinha';
import { Contato } from './pages/Contato';
import BasePage from './pages/BasePage';
import React from 'react';

export function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<BasePage />}>
                        <Route index element={<Home />}></Route>
                        <Route path="/resumos" element={<Resumos />} />
                        <Route path="/registros" element={<Registros />} />
                        <Route path="/lojinha" element={<Lojinha />} />
                        <Route path="/contato" element={<Contato />} />
                        <Route path="*" element={<Page404 />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}