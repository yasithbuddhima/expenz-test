import { NavLink, useNavigate } from "react-router-dom";
import { userSignOut } from "../services/authServices";

export default function Navbar() {
  const navigate = useNavigate();
  const isAuth = !!localStorage.getItem("token");

  const handleLogout = async () => {
    await userSignOut();
    navigate("/login");
  };

  return (
    <nav style={styles.nav}>
      <h3 style={styles.logo}>MyApp</h3>

      <div style={styles.links}>
        <NavLink to="/" style={linkStyle}>
          Home
        </NavLink>

        {isAuth && (
          <NavLink to="/dashboard" style={linkStyle}>
            Dashboard
          </NavLink>
        )}

        {!isAuth ? (
          <NavLink to="/login" style={linkStyle}>
            Login
          </NavLink>
        ) : (
          <button onClick={handleLogout} style={styles.logout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

const linkStyle = ({ isActive }) => ({
  color: isActive ? "#00e5ff" : "#ffffff",
  textDecoration: "none",
  marginRight: "20px",
  fontWeight: 500,
});

const styles = {
  nav: {
    height: "60px",
    background: "#0f172a",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 30px",
  },
  logo: {
    color: "#ffffff",
  },
  links: {
    display: "flex",
    alignItems: "center",
  },
  logout: {
    background: "transparent",
    border: "1px solid #00e5ff",
    color: "#00e5ff",
    padding: "6px 12px",
    cursor: "pointer",
  },
};
