import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

const careList = [
  {
    i: '/01',
    title: 'Specialty Property & Casualty Insurance',
    link: 'I want an example',
  },
  {
    i: '/02',
    title: 'Nonprofits & Social services',
    link: 'I want an example',
  },
  {
    i: '/03',
    title: 'Hurricane Cleanup and Recovery',
    link: 'I want an example',
  },
  {
    i: '/04',
    title: 'Concussion Prevention: Creating a safe sport culture',
    link: 'I want an example',
  },
];

export const AboutList = () => {
  return (
    <>
      <div className="about-list section">
        {careList.map(({ title, i, link }, index) => (
          <Fade direction="up" triggerOnce key={index}>
            <div className="item-container">
              <p>{i}</p>
              <p>{title}</p>
              <Link to={'special-property'}>{link}</Link>
            </div>
          </Fade>
        ))}
      </div>
    </>
  );
};
