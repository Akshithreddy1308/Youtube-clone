export const API_KEY = "AIzaSyCBmlMQp5GgmHrOOy8w-Xoswckjy2CtmxY";

export const value_converter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};
