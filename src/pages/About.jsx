import { People } from '../components/About/People';
import { SubBanner } from '../components/shared/SubBanner';

const pageData = {
  title: "Let's get",
  title2: 'familiar',
  image:
    'https://ik.imagekit.io/txdk54zsu/about/about-1?ik-sdk-version=javascript-1.4.3&updatedAt=1665190888198',
};

const About = () => {
  return (
    <>
      <SubBanner pageData={pageData} />
      <People />
    </>
  );
};

export default About;
