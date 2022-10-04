export const Navbar = () => {
  return (
    <div className="header__container">
      <div className="header">
        <div className="header-inner">
          <div className="left">
            <div className="logo">
              <img
                src={process.env.PUBLIC_URL + `/images/logo.svg`}
                alt="algo"
              />
            </div>

            <nav className="nav">
              <li>
                <a href="/cases">Cases</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/why">Why work with us?</a>
              </li>
            </nav>
          </div>

          <div className="right">
            <div className="location">
              <img
                src={process.env.PUBLIC_URL + `/images/location.svg`}
                alt="algo"
              />
              <a href="/location">Find a location</a>
            </div>

            <button className="signIn">Sign In</button>
            <button className="join">Join to us</button>
          </div>
        </div>
      </div>
    </div>
  );
};
