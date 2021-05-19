import React from "react";
import { Link } from "gatsby"
import { graphql } from "gatsby";


const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)


export default function Navbar() {
  return (
    <header className="flex-col md:flex-row flex items-center md:justify-between pt-16 pb-16 pd:pb-12">
      <h1 className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight md:pr-8">
        AreYouModelMaterial.<span class="text-gold">Com</span>
      </h1>
      <navbar style={{ marginBottom: `1.5rem` }}>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </navbar>
    </header>
  )
}


export const query = graphql`
  query NavLinks {
    navlinks: allDatoCmsGlobal {
      edges {
        node {
          navlinks {
            linkLabel
            linkUrl
          }
        }
      }
    }
  }
`;
