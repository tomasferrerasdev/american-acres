import { Fade } from 'react-awesome-reveal';
import { Link } from '../shared/Link';

const careList = [
  {
    i: '/01',
    title: 'Equine Insurance',
    url: '/about/equine',
  },
  {
    i: '/02',
    title: 'Housing Insurance',
    url: '/about/housing',
  },
  {
    i: '/03',
    title: 'Transportation Insurance',
    url: '/about/transportation',
  },
];

export const AboutList = () => {
  return (
    <>
      <div className="about-list section">
        {careList.map(({ title, i, url }, index) => (
          <Fade direction="up" triggerOnce key={index}>
            <div className="item-container">
              <p>{i}</p>
              <p>{title}</p>
              <Link href={url} text={`I want an example`} />
            </div>
          </Fade>
        ))}
      </div>
    </>
  );
};
