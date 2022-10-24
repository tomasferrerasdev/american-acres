import { Fade } from 'react-awesome-reveal';

import { SubBanner } from '../../components/shared/SubBanner';
import { GoBack } from '../../components/shared/GoBack';

const pageData = {
  title: 'Transport',
  title2: 'Insurance',
  image:
    'https://ik.imagekit.io/txdk54zsu/about/truck-1?ik-sdk-version=javascript-1.4.3&updatedAt=1665500334787',
};

const Transportation = () => {
  return (
    <>
      <SubBanner pageData={pageData} />
      <div className="care care-container">
        <div className="care-data">
          <Fade direction="up" cascade damping={0.1} triggerOnce>
            <p>
              The commercial transportation industry covers a lot of ground—and
              air and water. With constant movement of large-scale vehicles
              comes constant large-scale risks.
            </p>
            <h2>
              What should transportation companies consider when choosing
              insurance protection?
            </h2>
            <p>
              Precious lives and millions of dollars of cargo move across the
              country daily. Whether it’s a boat full of cargo, a school bus
              carrying students or a long-haul truck, one wrong turn and it’s
              stopped.
            </p>

            <div className="care-list">
              <ul>
                <Fade cascade damping={0.2} triggerOnce>
                  <li>Coverage for physical damage</li>
                  <li>Coverage natural disaster damage</li>
                  <li>Occupational accident insurance</li>
                  <li>Cargo protection</li>
                  <li>Theft or equipment failure</li>
                  <li>Short-term basis</li>
                </Fade>
              </ul>
            </div>

            <p className="care-bold">
              To learn more about our coverage for the transportation industry,
              select a division below to see its specialized products and
              services.
            </p>

            <GoBack />
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Transportation;
