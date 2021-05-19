import React from "react";
import { Link } from "gatsby"

const ListLink = props => (
  <li class="inline-block ml-10">
    <Link to={props.to}>{props.children}</Link>
  </li>
)


export default function Navbar() {
  return (
    <header className="bg-white">
      <div class="container mx-auto flex-col md:flex-row flex items-center md:justify-between align-middle">
        <Link to="/"><h1 className="text-xl md:text-2xl font-bold tracking-tighter leading-tight md:pr-8">AreYouModelMaterial.<span class="text-gold">Com</span></h1></Link>
        <navbar >
          <ul >
            <ListLink to="/">Home</ListLink>
            <ListLink to="/about">Discover</ListLink>
            <ListLink to="/contact">Contact</ListLink>
            <ListLink to="/login">Login</ListLink>
          </ul>
        </navbar>
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
