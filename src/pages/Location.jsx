import { Navbar } from '../components/shared/Navbar';

const Location = () => {
  return (
    <>
      <Navbar />
      <div className="location-container">
        <div className="location-data">
          <div className="location-input">
            <h1>Find a location</h1>
            <input type="text" />
          </div>

          <div className="location-list">
            <h3>We are unable to access your exact location</h3>
            <p>
              To find an American Acres, use the search feature, navigate using
              the map, or turn on location services.
            </p>
          </div>

          <p>Privacy Statement | Terms of Use</p>
        </div>
        <div className="location-img">
          <img
            src="https://ik.imagekit.io/txdk54zsu/about/map?ik-sdk-version=javascript-1.4.3&updatedAt=1665190904323"
            alt="santa fe map"
          />
        </div>
      </div>
    </>
  );
};

export default Location;
