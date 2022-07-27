import styled from "styled-components";
import Flex from "./../../common/Flex";

const StyledNeko = styled.article`
  background-color: #30343f;
  max-inline-size: 600px;
  width: 100%;
  padding: 25px;
  margin-bottom: 25px;
  border-radius: 25px;
  flex-shrink: 1;
`;

const Image = styled.img`
  width: 100%;
  max-inline-size: 500px;
`;

const ImageInfoBlock = styled.div`
  margin-top: 10px;
`;

const Divisor = styled.span`
  margin: 0 5px;
`;

const ArtistNameLink = styled.a`
  &::before {
    content: "artist: ";
    color: white;
  }
`;

function Neko(props) {
  return (
    <StyledNeko>
      <Flex justify="center">
        <Image src={props.url} alt="anime girl" loading="lazy" />
      </Flex>
      <ImageInfoBlock>
        <ArtistNameLink href={props.artistHref}>
          {props.artistName}
        </ArtistNameLink>
        <Divisor>|</Divisor>
        <a href={props.sourceUrl}>source</a>
      </ImageInfoBlock>
    </StyledNeko>
  );
}

export default Neko;
