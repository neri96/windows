import isEmpty from "lodash.isempty";

const useValidation = (requiredFields: string[]) => {
  const validate = (value: { [key: string]: string }) => {
    const errorTemp: { [key: string]: string } = {};

    Object.keys(value).forEach((key) => {
      if (key === "name") {
        if (value[key] && value[key].length < 2) {
          errorTemp.name = "Name is too short, at 2 characters required";
        } else if (value[key].length > 20) {
          errorTemp.name = "Name is too long, 20 characters maximum";
        } else if (!/(^$)|(^[A-Za-z]+$)/.test(value[key])) {
          errorTemp.name = "Invalid name";
        }
      }

      if (key === "email") {
        const isEmail = /^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$/i.test(value[key]);

        if (!isEmail) {
          errorTemp.email = "Invalid email";
        }
      }

      if (key === "phone") {
        const isNumber =
          /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(
            value[key]
          );

        if (!isNumber) {
          errorTemp.phone = "Invalid phone number";
        }
      }

      if (key === "details") {
        if (value[key] && value[key].length > 3000) {
          errorTemp.details = "Maximum amount of characters is 3000";
        }
      }

      if (!value[key] && requiredFields.includes(key)) {
        errorTemp[key] = "This field cannot be empty";
      }
    });

    return isEmpty(errorTemp) ? null : errorTemp;
  };

  return { validate };
};

export default useValidation;
