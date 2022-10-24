import { Link } from './Link';

const navLinks = [];

export const Navbar = () => {
  return (
    <div className="header__container">
      <div className="header">
        <div className="header-inner">
          <div className="left">
            <div className="logo">
              <a href="/">
                <img
                  src={process.env.PUBLIC_URL + `/images/eagle.png`}
                  alt="american acres logo"
                />
              </a>
              <p>American Acres</p>
              <p>Insurance</p>
            </div>

            <nav className="nav">
              <ul>
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} text={link.text} uppercase />
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="right">
            <div className="location">
              <img
                src={process.env.PUBLIC_URL + `/images/location.svg`}
                alt="decorative svg"
              />
              <Link href={`/location`} text={`Find a location`} />
            </div>

            <Link href={`/contact`} text={`Let's work together`} />
          </div>
        </div>
      </div>
    </div>
  );
};
