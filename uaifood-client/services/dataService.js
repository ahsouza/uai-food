import http from "../src/utils/http-common";

const getAllRestaurants = () => {
  return http.get("/restaurants");
};

const getRestaurant = id => {
  return http.get(`/restaurants/${id}`);
};

const createRestaurant = data => {
  return http.post(`/register/restaurant`, data);
};

const createItensRestaurant = (id, data) => {
  return http.post(`/add/itens/restaurants/${id}`, data);
};

const updateRestaurant = (id, data) => {
  return http.put(`/update/restaurants/${id}`, data);
};

const findByOrigin = origin => {
  return http.get(`/restaurants/origin/${origin}`);
};
const findByOriginState = (origin, state) => {
  return http.get(`/restaurants/${origin}/${state}`);
};
const findByItens = origin => {
  return http.get(`/restaurants/origin/${origin}`);
};

export default {
  getAllRestaurants,
  getRestaurant,
  createRestaurant,
  createItensRestaurant,
  updateRestaurant,
  findByOrigin,
  findByOriginState,
  findByItens,
};