import validate from 'validate.js';

export const constraint = {
  username: {
    presence: {
      message: '^Username tidak boleh kosong'
    },
    exclusion: {
      within: [''],
      message: '^Username tidak boleh kosong'
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

const exampleFormValidation = (data, rules = constraint) => validate(data, rules);

export default exampleFormValidation;