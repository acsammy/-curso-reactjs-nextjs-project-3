import P from 'prop-types';
import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';
import { Container, Html } from './styles';

export const GridContent = ({ title, html, background = false }) => {
  return (
    <SectionBackground background={background}>
      <Container>
        <Heading uppercase darkMode={background} as="h2">
          {title}
        </Heading>
        <Html>
          <TextComponent>{html}</TextComponent>
        </Html>
      </Container>
    </SectionBackground>
  );
};

GridContent.propTypes = {
  title: P.string.isRequired,
  html: P.string.isRequired,
  background: P.bool,
};
