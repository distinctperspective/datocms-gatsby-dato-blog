import React from "react";
import { Link } from "gatsby"

const ListLink = props => (
  <li className="inline-block ml-10 hover:underline uppercase text-sm">
    <Link to={props.to}>{props.children}</Link>
  </li>
)


export default function Navbar({navlinks}) {
  console.log(navlinks)

  return (
    <header className="bg-white">
      <div className="container mx-auto flex-col md:flex-row flex items-center md:justify-between align-middle py-1">
        <Link to="/">
          <h1 className="text-xl md:text-2xl font-bold tracking-tighter leading-tight">AreYouModelMaterial.<span className="text-gold">Com</span></h1>
        </Link>
        <nav>
          <ul >
            <ListLink to="/">Home</ListLink>
            <ListLink to="/about">Discover</ListLink>
            <ListLink to="/contact">Contact</ListLink>
            <ListLink to="/login">Login</ListLink>
          </ul>
        </nav>
      </div>
    </header>
  )
}


//export const query = graphql`
// query NavLinks {
//    navlinks: allDatoCmsGlobal {
//      edges {
//        node {
//          navlinks {
//            linkLabel
//            linkUrl
//          }
//        }
//      }
//    }
//  }
//`;
