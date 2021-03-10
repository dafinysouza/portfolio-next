import React from 'react';
import { Logo } from '../../../theme/Logo';
import Navbar from '../Navbar';

export default function Header() {
    return (
        <header>
            <Logo />
            <Navbar />
        </header>
    );
}