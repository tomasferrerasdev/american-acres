import { AnimatedTextCharacter } from '../AnimatedTextCharacter';

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
        <div className="heritage-data">
          <AnimatedTextCharacter text={'Hola heritage'} />
        </div>
      </div>
    </>
  );
};
