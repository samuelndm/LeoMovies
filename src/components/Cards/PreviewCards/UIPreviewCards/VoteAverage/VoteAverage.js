import React from "react";
import PropTypes from "prop-types";
import { useCountdownTimer } from "hooks";
import * as S from "./styles";
import * as UI from "components/UIComponents";

const VoteAverage = ({ voteAverage, style }) => {
  const { countdown } = useCountdownTimer();

  return voteAverage || countdown === 0 ? (
    <S.Container voteAverage={voteAverage} style={style}>
      {voteAverage || "NR"}
    </S.Container>
  ) : (
    <UI.Skeleton
      variant='circle'
      animation='wave'
      SkeletonStyle={S.SkeletonStyle}
    />
  );
};

VoteAverage.propTypes = {
  voteAverage: PropTypes.number,
  style: PropTypes.object,
};

export default VoteAverage;
