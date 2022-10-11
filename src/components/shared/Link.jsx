import { Link as RouterLink } from 'react-router-dom';

export const Link = ({ href, text, uppercase }) => {
  return (
    <RouterLink to={href} className="link" uppercase="true">
      <span className={uppercase ? 'uppercase' : ''}>{text}</span>
    </RouterLink>
  );
};
