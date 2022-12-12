import P from 'prop-types';
import { Container, ImageContainer, TextContainer, Image } from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridTwoColumns = ({ title, text, srcImg, background }) => {
  return (
    <SectionBackground background={background}>
      <Container background={background}>
        <TextContainer>
          <Heading uppercase as="h2">
            {title}
          </Heading>
          <TextComponent>{text}</TextComponent>
        </TextContainer>
        <ImageContainer>
          <Image src={srcImg} alt={title}></Image>
        </ImageContainer>
      </Container>
    </SectionBackground>
  );
};

GridTwoColumns.propTypes = {
  title: P.string.isRequired,
  text: P.string.isRequired,
  srcImg: P.string.isRequired,
  background: P.bool,
};
