import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import * as GS from "assets/styles/GlobalStyles";
import * as Card from "components/Cards";

const PersonsList = ({ persons }) => {
  return (
    <S.Container>
      <GS.ContainerTitle>Persons</GS.ContainerTitle>

      <S.Persons>
        {persons.map((person) => (
          <Card.PreviewPerson
            preview={person}
            key={`previewPerson-${person.id}`}
          />
        ))}
      </S.Persons>
    </S.Container>
  );
};

PersonsList.propTypes = {
  persons: PropTypes.array,
};

export default PersonsList;
