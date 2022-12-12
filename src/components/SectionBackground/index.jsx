import P from 'prop-types';
import { Container } from './styles';

export const SectionBackground = ({ children, background = false }) => {
  return <Container background={background}>{children}</Container>;
};

SectionBackground.propTypes = {
  children: P.node.isRequired,
  background: P.bool,
};
