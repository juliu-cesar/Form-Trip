import config from "@/config.json";

export const RegisterValidate = {
  email: (tx: string) => {
    let email = config.form_register[0].err_msg;
    const regex = [/^[^\s@]+@/, /@[^\s@]+\.[^\s@]{2,}$/];
    let aClass: string[] = [];

    email!.forEach((e, i) => {
      if (regex[i].test(tx)) {
        aClass.push(e.class);
      } else {
        aClass.slice(aClass.indexOf(e.class));
      }
    });
    return aClass;
  },
  password: (tx: string) => {
    let password = config.form_register[1].err_msg;
    const regex = [
      /(?=.*[!@#$%^&*])/,
      /(?=.*[0-9])/,
      /(?=.*[A-Z])/,
      /(.{8,})$/,
    ];
    let aClass: string[] = [];

    password!.forEach((e, i) => {
      if (regex[i].test(tx)) {
        aClass.push(e.class);
      } else {
        aClass.slice(aClass.indexOf(e.class));
      }
    });
    return aClass;
  },
  password_2: (tx: string, prev: string) => {
    let password_2 = config.form_register[2].err_msg;
    let aClass: string[] = [];

    password_2!.forEach((e, i) => {
      if (tx == prev && tx.trim() != "") {
        aClass.push(e.class);
      } else {
        aClass.slice(aClass.indexOf(e.class));
      }
    });
    return aClass;
  },
  CEP: (tx: string) => {
    let CEP = config.form_register[3].err_msg;
    tx = tx.replace(/[^\d]+/g, "");
    const regex = [/^\d{8}$/];
    let aClass: string[] = [];

    CEP!.forEach((e, i) => {
      if (regex[i].test(tx)) {
        aClass.push(e.class);
      } else {
        aClass.slice(aClass.indexOf(e.class));
      }
    });
    return aClass;
  },
};
