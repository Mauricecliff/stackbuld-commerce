import Footer from "@/components/custom/footer";
import Header from "@/components/custom/Header";
import React from "react";


export default function RootLayout({
  children
}: {children: React.ReactNode}){
  return(
    <div className="flex h-screen flex-col">
        <Header />
        <main className="flex-1 wrapper">{children}</main>
        <Footer />
    </div>
  )
}