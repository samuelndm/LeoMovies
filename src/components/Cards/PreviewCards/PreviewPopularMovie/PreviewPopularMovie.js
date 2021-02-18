import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Skeleton from "@material-ui/lab/Skeleton";
import placeholder from "assets/images/vertical-placeholder.png";
import { IMAGE_SIZES } from "utils/constants";
import * as S from "./styles";
import * as UI from "components/UIComponents";

const PreviewPopularMovie = ({ preview }) => {
  const [baseUrl] = useState(`${process.env.REACT_APP_API_IMAGES}`);
  const [imageSize] = useState(`/${IMAGE_SIZES.POSTER_SIZES.WIDTH_780}`);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    setTimeout(() => {
      if (preview) {
        const url = preview.poster_path
          ? `${baseUrl}${imageSize}${preview.poster_path}`
          : placeholder;

        setImageUrl(url);
      }
    }, [1000]);
  }, [preview, baseUrl, imageSize]);

  return (
    <S.Container>
      {imageUrl ? (
        <>
          <UI.LinkHandler url={`/movie/${preview.id}`}>
            <S.Image src={imageUrl} alt='popular movie preview poster' />
          </UI.LinkHandler>

          <S.Popularity popularity={preview?.vote_average}>
            {preview?.vote_average || "NR"}
          </S.Popularity>

          <S.Title>{preview?.title || "*"}</S.Title>
          <S.ReleaseDate>{preview?.release_date || "*"}</S.ReleaseDate>
        </>
      ) : (
        <Skeleton className='skeleton-body' variant='rect' animation='wave' />
      )}
    </S.Container>
  );
};

PreviewPopularMovie.propTypes = {
  preview: PropTypes.object,
};

export default PreviewPopularMovie;
