import { useState, useEffect } from "react";
import { FaSignInAlt, FaUser, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Initialize as 'false' to close modal by default
  const [user, setUser] = useState(null); // Track logged-in user

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    console.log(storedUser)
    
    // Ensure the stored value is valid before attempting to parse
    if (storedUser && storedUser !== "undefined") {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error("Error parsing stored user data:", error);
      }
    }
  }, []);

  const logOutHandler = () => {
    setIsOpen(false);
    localStorage.removeItem('user'); // Clear user data from localStorage
    setUser(null); // Clear user state
    // Add actual logout logic here, like redirecting to login
  };

  return (
    <nav className="header">
      <Link onClick={() => setIsOpen(false)} to={"/"}>
        Home
      </Link>

      {user ? (
        <>
          <button onClick={() => setIsOpen((prev) => !prev)}>
            <FaUser />
          </button>

          {isOpen && (
            <div className="modal">
              <div className="modal-content">
                <button onClick={logOutHandler}>
                  <FaSignOutAlt />
                  Logout
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        <Link to={"/login"}>
          <FaSignInAlt />
        </Link>
      )}
    </nav>
  );
};

export default Header;
