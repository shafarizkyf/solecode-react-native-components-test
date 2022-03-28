import validate from "validate.js";

const useValidate = (data, constraint) => {
  return validate(data, constraint);
};

export default useValidate;