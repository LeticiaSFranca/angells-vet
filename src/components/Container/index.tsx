import './Container.style.css';
import React from 'react';

export function Container({ children }) {
    return (
        <section className="container">
            {children}
        </section>
    );
}