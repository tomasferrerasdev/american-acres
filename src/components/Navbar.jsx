export const Navbar = () => {
  return (
    <div className="header__container">
      <div className="header">
        <div className="header-inner">
          <div className="left">
            <div className="logo">
              <a href="/">
                <img
                  src={process.env.PUBLIC_URL + `/images/logo.svg`}
                  alt="american acres logo"
                />
              </a>
            </div>

            <nav className="nav">
              <ul>
                <li>
                  <a href="/cases">CASES</a>
                </li>
                <li>
                  <a href="/about">ABOUT</a>
                </li>
                <li>
                  <a href="/why">WHY WORK WITH US?</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="right">
            <div className="location">
              <img
                src={process.env.PUBLIC_URL + `/images/location.svg`}
                alt="decorative svg"
              />
              <a href="/location">Find a location</a>
            </div>

            <a href="/" className="work">
              Let’s work together
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
