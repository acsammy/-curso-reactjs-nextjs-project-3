import { Container } from './styles';
import { KeyboardArrowUp } from '@styled-icons/material-outlined';

export const GotTop = () => {
  return (
    <Container href="#" aria-label="Go to top" title="Go to Top">
      <KeyboardArrowUp />
    </Container>
  );
};
