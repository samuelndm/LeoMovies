import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { IMAGE_SIZES } from "utils/constants";
import { handleImageUrl } from "utils/cardsUtil";
import * as UIPreview from "../UIPreviewCards";

const PopularPersonPreview = ({ preview }) => {
  const [imageSize] = useState(`/${IMAGE_SIZES.PROFILE_SIZES.WIDTH_780}`);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (preview) {
      const url = handleImageUrl(preview.profile_path, imageSize);
      setImageUrl(url);
    }
  }, [preview, imageSize]);

  return (
    <UIPreview.CardContainer>
      <UIPreview.Image
        imageUrl={imageUrl}
        redirectUrl={`/person/${preview?.id}`}
      />

      <UIPreview.Popularity popularity={preview?.popularity || 0} />

      <UIPreview.Title title={preview?.name || ""} />

      <UIPreview.Departament
        departament={preview?.known_for_department || ""}
      />
    </UIPreview.CardContainer>
  );
};

PopularPersonPreview.propTypes = {
  preview: PropTypes.object,
};

export default PopularPersonPreview;
