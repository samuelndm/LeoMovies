import React from "react";
import PropTypes from "prop-types";
import { useCountdownTimer } from "hooks";
import * as UTIL from "utils/cardsUtil";
import * as S from "./styles";
import * as UI from "components/UIComponents";

export const Duration = ({ duration }) => {
  const { countdown } = useCountdownTimer();

  return duration || countdown === 0 ? (
    <S.Container>{UTIL.formatDuration(duration) || "*"}</S.Container>
  ) : (
    <UI.Skeleton
      variant='text'
      animation='wave'
      SkeletonStyle={S.SkeletonStyle}
    />
  );
};

Duration.propTypes = {
  duration: PropTypes.number,
};

export default Duration;
