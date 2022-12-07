import P from 'prop-types';
import { Title } from './styles';

export const Heading = ({ children }) => {
  return <Title>{children}</Title>;
};

Heading.propTypes = {
  children: P.node.isRequired,
};
