import { Fade } from 'react-awesome-reveal';

export const People = () => {
  return (
    <div className="home-screen container section">
      <Fade>
        <div className="home-screen__top">
          <div className="home-screen__title-container">
            <h3>We’re working hard to put the health and well</h3>
            <h3>-being of our partners and customers first in all</h3>
            <h3>
              that we do. <span>Learn more</span>.
            </h3>
          </div>
        </div>
      </Fade>
      <Fade>
        <div className="home-screen__bottom">
          <div className="img">
            <img src="/images/people-1.webp" alt="" />
          </div>
          <div className="img">
            <img src="/images/people-2.webp" alt="" />
          </div>
          <div className="img">
            <img src="/images/people-3.webp" alt="" />
          </div>
        </div>
      </Fade>
    </div>
  );
};
