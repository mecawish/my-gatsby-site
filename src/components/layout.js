/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";

const NavItem = ({ to, label }) => (
  <li sx={{ pr: 4 }}>
    <Link to={to} sx={{ color: "text" }}>
      {label}
    </Link>
  </li>
);

const Layout = ({ pageTitle, children }) => {
  return (
    <main sx={{ m: "auto", maxWidth: 0, fontFamily: "body" }}>
      <title>{pageTitle}</title>
      <nav>
        <ul sx={{ display: "flex", listStyle: "none", pl: 0 }}>
          <NavItem to="/" label="Home" />
          <NavItem to="/about" label="About" />
        </ul>
      </nav>
      <h1 sx={{ color: "primary" }}>{pageTitle}</h1>
      {children}
    </main>
  );
};

export default Layout;
