import React from "react";
import Header from "@/lib/custom/Header";
import Footer from "@/lib/custom/footer";

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