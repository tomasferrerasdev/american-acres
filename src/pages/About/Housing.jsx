import { Fade } from 'react-awesome-reveal';
import { SubBanner } from '../../components/shared/SubBanner';
import { GoBack } from '../../components/shared/GoBack';

const pageData = {
  title: 'Housing',
  title2: 'Insurance',
  image:
    'https://ik.imagekit.io/txdk54zsu/about/house-1?ik-sdk-version=javascript-1.4.3&updatedAt=1665373402207',
};

const Housing = () => {
  return (
    <>
      <SubBanner pageData={pageData} />
      <div className="care care-container">
        <div className="care-data">
          <Fade direction="up" cascade damping={0.1} triggerOnce>
            <p>
              Even the most detailed construction plans can go awry.
              Construction companies can look to Great American to build custom
              coverage to protect workers and projects from the ground up.
            </p>
            <h2>
              What should construction companies consider when choosing
              construction insurance protection?
            </h2>
            <p>
              Your employees, equipment, materials and finances are just a few
              areas of your business that require special coverage. Our
              specialized construction and contractors’ insurance can help
              protect businesses from property damage lawsuits, equipment
              damage, theft, injuries, loss of business due to delays and more.
            </p>

            <div className="care-list">
              <ul>
                <Fade cascade damping={0.2} triggerOnce>
                  <li>General contractors</li>
                  <li>HVAC companies</li>
                  <li>Electricians</li>
                  <li>Concrete work</li>
                  <li>Carpentry and floor work</li>
                  <li>Roofing, siding and sheet metal work</li>
                </Fade>
              </ul>
            </div>

            <p className="care-bold">
              Even the most detailed construction plans can go awry.
              Construction companies can look to Great American to build custom
              coverage to protect workers and projects from the ground up.
            </p>

            <GoBack />
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Housing;
