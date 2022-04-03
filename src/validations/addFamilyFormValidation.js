export const constraint = {
  fullName: {
    presence: {
      message: '^Nama tidak boleh kosong'
    },
    exclusion: {
      within: [''],
      message: '^Nama tidak boleh kosong'
    },
  },
  nik: {
    presence: {
      message: '^NIK tidak boleh kosong'
    },
    exclusion: {
      within: [''],
      message: '^NIK tidak boleh kosong'
    },
  }
};

const validation = (data) => ({ data, constraint });

export default validation;