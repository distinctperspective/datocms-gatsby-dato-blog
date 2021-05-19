import Header from "../components/header";
import Footer from "../components/footer";
import React from "react"

export default function Layout({ children }) {
  return (
    <body class="font-sans antialiased text-gray-600 bg-f1 leading-normal tracking-normal">
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </body>
  )
}