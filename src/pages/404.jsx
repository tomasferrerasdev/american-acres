import { Navbar } from '../components/Navbar';
import { Fade } from 'react-awesome-reveal';

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="not__found-container">
        <Fade duration={1000} cascade>
          <h1>404 Not found</h1>
          <a href="/">Back home</a>
        </Fade>
      </div>
    </>
  );
};

export default NotFound;
