export const INC = () => {
  return { type: "INC" };
};

export const DEC = () => {
  return { type: "DEC" };
};

export const ZERO = payload => {
  return { type: "ZERO", payload };
};

export const DOUBLE = (count) => {
  return { type: "DOUBLE", count };
};
