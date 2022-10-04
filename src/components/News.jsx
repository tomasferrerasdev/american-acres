import { Fade } from 'react-awesome-reveal';
export const News = () => {
  return (
    <div className="news-screen">
      <Fade>
        <div className="news-title">
          <h2>MORE TO DISCOVER</h2>
        </div>
        <div className="news-posts container">
          <div className="news-post">
            <img src="/images/new-1.jpg" alt="" />
            <div className="data">
              <Fade delay={1}>
                <h2>Order and pick up. Easy as that.</h2>
                <div>
                  <p>
                    Just open the app, order your favorites, and enjoy
                    contactless pay. From there, choose whichever pickup method
                    is best for you.
                  </p>
                  <button className="signIn">Join to us</button>
                </div>
              </Fade>
            </div>
          </div>
          <div className="news-post">
            <img src="/images/new-2.jpg" alt="" />
            <Fade>
              <div className="data">
                <h2>Hurricane Cleanup and Recovery.</h2>
                <div>
                  <p>
                    Just open the app, order your favorites, and enjoy
                    contactless pay. From there, choose whichever pickup method
                    is best for you.
                  </p>
                  <button className="signIn">Join to us</button>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </Fade>
    </div>
  );
};
