import React from "react";
import PropTypes from "prop-types";
import { useCountdownTimer } from "hooks";
import * as S from "./styles";
import * as UI from "components/UIComponents";

const Title = ({ title = null }) => {
  const { countdown } = useCountdownTimer(9);

  if (countdown === 0 && title === null) title = "";
  return title !== null ? (
    <S.Container>{title || "*"}</S.Container>
  ) : (
    <UI.Skeleton
      variant='text'
      animation='wave'
      SkeletonStyle={S.SkeletonStyle}
    />
  );
};

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
