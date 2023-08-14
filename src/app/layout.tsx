import './globals.css'
import type {Metadata} from 'next'
// import {Inter} from 'next/font/google'
import React, {PropsWithChildren} from "react";
import AuthLayout from "@/AuthLayout";

// const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Rostelekom Boilerplate',
    description: 'Rostelekom Boilerplate',
}

const RootLayout = ({children}: PropsWithChildren) => {
    return (
        <html lang="en">
        <body><AuthLayout>{children}</AuthLayout></body>
        </html>
    )
}
export default RootLayout