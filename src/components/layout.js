import Header from "../components/header";
import Footer from "../components/footer";
import React from "react"
import Helmet from 'react-helmet';

export default function Layout({ navlinks, children }) {
  return (
    <div className="font-sans antialiased text-gray-600 bg-f1 leading-normal tracking-normal">
      <Helmet>
        <link rel="preconnect" href="https://datocms-assets.com" />
      </Helmet>
      <Header navlinks={navlinks} />  
      <div className="container mx-auto">
        {children}
        <Footer />
      </div>
    </div>
  )
}