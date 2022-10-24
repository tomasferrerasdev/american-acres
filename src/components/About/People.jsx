import { Fade } from 'react-awesome-reveal';

export const People = () => {
  return (
    <div className="container">
      <Fade>
        <div className="people-header">
          <div className="people-header-container">
            <Fade cascade damping={0.2} direction="up">
              <h3>We’re working hard to put the health and well</h3>
              <h3>-being of our partners and customers first in all</h3>
              <h3>
                that we do. <span>Learn more</span>.
              </h3>
            </Fade>
          </div>
        </div>
      </Fade>

      <div className="people-images-container"></div>
    </div>
  );
};
