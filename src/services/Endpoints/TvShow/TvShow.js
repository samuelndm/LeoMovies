import api from "services/api";

export const getTvShowDetailsById = (id, params = {}) => {
  return api.get(`tv/${id}`, {
    params: { ...params },
  });
};

export const getTvShowsList = (params = {}) => {
  return api.get(`tv/items`, {
    params: { ...params },
  });
};

export const getPopularTvShows = (params = {}) => {
  return api.get("tv/popular", {
    params: { ...params },
  });
};

export const getTvShowImagesById = (id, params = {}) => {
  return api.get(`tv/${id}/images`, {
    params: { ...params },
  });
};