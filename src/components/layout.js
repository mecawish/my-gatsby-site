/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link, useStaticQuery, graphql } from "gatsby";

const NavItem = ({ to, label }) => (
  <li sx={{ pr: 4 }}>
    <Link to={to} sx={{ color: "text" }}>
      {label}
    </Link>
  </li>
);

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <main sx={{ m: "auto", maxWidth: 0, fontFamily: "body" }}>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <p sx={{ fontSize: "3rem", color: "secondary", fontWeight: "heading" }}>
        {data.site.siteMetadata.title}
      </p>
      <nav>
        <ul sx={{ display: "flex", listStyle: "none", pl: 0 }}>
          <NavItem to="/" label="Home" />
          <NavItem to="/about" label="About" />
          <NavItem to="/blog" label="Blog" />
        </ul>
      </nav>
      <h1 sx={{ color: "primary" }}>{pageTitle}</h1>
      {children}
    </main>
  );
};

export default Layout;
