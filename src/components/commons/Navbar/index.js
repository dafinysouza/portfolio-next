import React from 'react';
import Link from 'next/link';

export default function Navbar() {
    const links = [
        {
            text: 'Início',
            url: '/',
        },
        {
            text: 'Sobre',
            url: '/sobre',
        },
        {
            text: 'Projetos',
            url: '/projetos'
        },
        {
            text: 'Contato',
            url: '/contato'
        }
    ];

    return (
        <nav>
            <ul>
                {links.map((link) => (
                    <li key={link.url}>
                        <Link href={link.url}>
                            <a>{link.text}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}