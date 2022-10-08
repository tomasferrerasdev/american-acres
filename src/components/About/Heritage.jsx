import { Fade } from 'react-awesome-reveal';
import { Footer } from '../Footer';
import { AboutList } from './AboutList';

export const Heritage = () => {
  return (
    <>
      <div className="container">
        <div className="heritage-image">
          <img
            src="https://ik.imagekit.io/txdk54zsu/about/about-1?ik-sdk-version=javascript-1.4.3&updatedAt=1665190888198"
            alt="man pointing"
          />
        </div>
        <div className="heritage-title section">
          <div className="title-row">
            <Fade direction="up" triggerOnce>
              <div className="left">
                <p>
                  Our thoughts are with those affected. If you need assistance
                  with a claim, please contact your agent or one of our claims
                  professionals.
                </p>
                <h1>We care</h1>
              </div>
            </Fade>
          </div>
          <div className="title-row">
            <Fade direction="up" triggerOnce>
              <div>
                <h1>About these</h1>
              </div>
            </Fade>
          </div>
        </div>
        <AboutList />
        <Footer />
      </div>
    </>
  );
};
