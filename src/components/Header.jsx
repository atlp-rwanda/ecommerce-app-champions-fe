import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="link">
      <Link to="/">Home</Link>
      <Link to="/Login" style={{ marginLeft: "10px" }}>
        Login
      </Link>
    </div>
  );
};
