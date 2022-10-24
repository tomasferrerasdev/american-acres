import { Fade } from 'react-awesome-reveal';

export const Care = () => {
  return (
    <div className="heritage-title">
      <Fade cascade damping={0.15} direction="up" triggerOnce>
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
              <h1>about these</h1>
            </div>
          </Fade>
        </div>
      </Fade>
    </div>
  );
};
