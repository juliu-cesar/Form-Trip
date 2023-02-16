export function vEmail(tx: string) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return regex.test(tx);
}

export function vPassword(tx: string) {
  const regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(.{8,})$/;
  return regex.test(tx);
}

export function vCheckPassword(tx: string, prev: string) {
  return tx == prev
}

