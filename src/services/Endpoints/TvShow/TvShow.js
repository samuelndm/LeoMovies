import api from "services/api";

export const getTvShowDetailsById = (id, params = {}) => {
  return api.get(`tv/${id}`, {
    params: { ...params },
  });
};

export const getTvShowsList = (params = {}) => {
  return api.get(`discover/tv`, {
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

export const getSearchedTvShows = (params = {}) => {
  return api.get(`search/tv`, {
    params: { ...params },
  });
};
