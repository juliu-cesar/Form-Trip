export const Validate = {
  email: (tx: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return regex.test(tx);
  },

  password: (tx: string) => {
    const regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(.{8,})$/;
    return regex.test(tx);
  },

  password_2: (tx: string, prev: string) => {
    return tx == prev;
  },
  CEP: (tx: string) => {
    const regex = /^\d{8}$/;
    return regex.test(tx);
  },
};
