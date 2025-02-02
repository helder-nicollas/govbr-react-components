import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { rawline } from '@/styles/fonts';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
    title: 'govbr react components',
    description: 'Biblioteca de componentes react do dsgovbr',
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt">
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
                />
            </head>
            <body
                className={`${rawline.variable} ${rawline.className} ${inter.variable}`}
            >
                {children}
            </body>
        </html>
    );
}
