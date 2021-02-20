import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import * as GS from "assets/styles/GlobalStyles";
import * as C from "components";
import * as Card from "components/Cards";

const PersonsSlider = ({ persons, slidesToShow, title }) => {
  return (
    <S.Container>
      {title && <GS.ContainerTitle>{title}</GS.ContainerTitle>}

      <C.PreviewsSlider
        previews={persons}
        PreviewCard={Card.PersonPreview}
        slidesToShow={slidesToShow}
      />
    </S.Container>
  );
};

PersonsSlider.propTypes = {
  persons: PropTypes.array,
  title: PropTypes.string,
  slidesToShow: PropTypes.number,
};

export default PersonsSlider;
