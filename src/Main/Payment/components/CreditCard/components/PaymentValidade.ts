export const PaymentValidade = {
  name: (tx: string) => {
    return tx.trim().length > 2;
  },
  CPF: (cpf: string) => {
    cpf = cpf.replace(/[^\d]+/g, "");
    if (cpf == "") return false;
    if (
      cpf.length != 11 ||
      cpf == "00000000000" ||
      cpf == "11111111111" ||
      cpf == "22222222222" ||
      cpf == "33333333333" ||
      cpf == "44444444444" ||
      cpf == "55555555555" ||
      cpf == "66666666666" ||
      cpf == "77777777777" ||
      cpf == "88888888888" ||
      cpf == "99999999999"
    )
      return false;
    let add = 0;
    for (let i = 0; i < 9; i++) {
      add += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let rev = 11 - (add % 11);
    if (rev == 10 || rev == 11) rev = 0;
    if (rev != parseInt(cpf.charAt(9))) return false;
    add = 0;
    for (let i = 0; i < 10; i++) {
      add += parseInt(cpf.charAt(i)) * (11 - i);
    }
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11) rev = 0;
    if (rev != parseInt(cpf.charAt(10))) return false;
    return true;
  },
  cardNumber: (tx: string) => {
    tx = tx.replace(/[^\d]+/g, "");
    return tx.length == 16;
  },
  monthYear: (tx: string) => {
    tx = tx.replace(/[^\d]+/g, "");
    let firstPart = tx[0] + tx[1];
    if (Number(firstPart) > 12) return false;
    return tx.length == 4;
  },
  CVV: (tx: string) => {
    return tx.trim().length == 3;
  },
};
