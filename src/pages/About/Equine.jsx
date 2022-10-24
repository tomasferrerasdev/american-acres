import { useEffect } from 'react';

import { Fade } from 'react-awesome-reveal';

import { SubBanner } from '../../components/shared/SubBanner';
import { GoBack } from '../../components/shared/GoBack';

const pageData = {
  title: 'Equine',
  title2: 'Insurance',
  image:
    'https://ik.imagekit.io/txdk54zsu/about/equine-1?ik-sdk-version=javascript-1.4.3&updatedAt=1665499892213',
};

const Equine = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SubBanner pageData={pageData} />
      <div className="care care-container">
        <div className="care-data">
          <Fade direction="up" cascade damping={0.1} triggerOnce>
            <p>
              There are more than 350 breeds of horses and just about as many
              ways to include them in our lives. Horse owners expect their
              horses to perform with strength and grace.
            </p>
            <h2>
              What should horse owners consider when choosing equine insurance
              protection?
            </h2>
            <p>
              Horses are an ongoing investment for those who own one pleasure
              horse to those who own a barn full of thoroughbreds. Risks to
              those who own horses can include everything from an illness to
              damage to a horse building.
            </p>

            <div className="care-list">
              <ul>
                <Fade cascade damping={0.2} triggerOnce>
                  <li>Equine mortality</li>
                  <li>Liability for both bodily injury</li>
                  <li>Liability for property damage to others</li>
                  <li>Coverage for events</li>
                  <li>Meetings and fundraisers</li>
                  <li>Short-term basis</li>
                </Fade>
              </ul>
            </div>

            <p className="care-bold">
              To learn more about our coverage for horse owners, select a
              division below to see its specialized products and services.
            </p>

            <GoBack />
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Equine;
