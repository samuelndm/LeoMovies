import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import * as GS from "assets/styles/GlobalStyles";
import * as C from "components";
import * as Card from "components/Cards";

const PopularPersons = ({ persons }) => {
  return (
    <S.Container>
      <GS.ContainerTitle>Most Popular Persons</GS.ContainerTitle>

      <C.PreviewSlider
        previews={persons}
        PreviewCard={Card.PreviewPopularPerson}
      />
    </S.Container>
  );
};

PopularPersons.propTypes = {
  persons: PropTypes.array,
};

export default PopularPersons;