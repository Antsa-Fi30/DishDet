import axios from "axios";

const FOURSQUARE_CLIENT_ID = "NPLZSPH4R1VZ2WPVWC1KSXHFSIRHJNSCECGFE311MJCD40PD";

const FOURSQUARE_CLIENT_SECRET =
  "GH2WVM2P4XTMEBGXGEQEAZEN2DHHUXQWXT3ZQTF1OYWK45ES";

const Foursquare = "fsq3N7raVaNIbphpvNu/Wn0e/5AajPf7ixOYOsQaMxyIUc4=";

export const FoursquareAPI = axios.create({
  baseURL: "https://api.foursquare.com/v2",
  params: {
    client_id: FOURSQUARE_CLIENT_ID,
    client_secret: FOURSQUARE_CLIENT_SECRET,
  },
});

export const getSpecialOffers = async (latitude, longitude) => {
  try {
    const response = await axios.get(
      "https://api.foursquare.com/v3/places/search",
      {
        headers: {
          Authorization: Foursquare,
        },
        params: {
          query: "restaurant special",
          ll: `${latitude},${longitude}`,
          radius: 10000,
          limit: 10,
        },
      }
    );
    return response.data.results;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des offres spéciales:",
      error
    );
    throw error;
  }
};

export const getRestaurantNearby = async (latitude, longitude) => {
  try {
    const response = await FoursquareAPI.get(
      "https://api.foursquare.com/v3/places/search",
      {
        headers: {
          Authorization: Foursquare,
        },
        params: {
          query: "restaurant",
          ll: `${latitude},${longitude}`,
          radius: 5000, // Radius in meters
          limit: 10,
        },
      }
    );
    return response.data.results;
  } catch (error) {
    console.error("Erreur lors de la récupération des Restos proches:", error);
    throw error;
  }
};

export const getPhotos = async (fsq_id) => {
  const options = {
    method: "GET",
    url: `https://api.foursquare.com/v3/places/${fsq_id}/photos`,
    params: { limit: "10" },
    headers: {
      accept: "application/json",
      Authorization: Foursquare,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (err) {
    console.log("Erreur : " + err);
  }
};

export const getTips = async (fsq_id) => {
  const options = {
    method: "GET",
    url: `https://api.foursquare.com/v3/places/${fsq_id}/tips`,
    headers: {
      accept: "application/json",
      Authorization: "fsq3N7raVaNIbphpvNu/Wn0e/5AajPf7ixOYOsQaMxyIUc4=",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (err) {
    console.log("Erreur : " + err);
  }
};
