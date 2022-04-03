import validate from 'validate.js';

export const constraint = {
  email: {
    presence: {
      message: '^Email tidak boleh kosong'
    },
    exclusion: {
      within: [''],
      message: '^Email tidak boleh kosong'
    },
  },
  password: {
    presence: {
      message: '^Password tidak boleh kosong'
    },
    exclusion: {
      within: [''],
      message: '^Password tidak boleh kosong'
    },
  }
};

const loginFormValidation = (data, rules = constraint) => validate(data, rules);

export default loginFormValidation;