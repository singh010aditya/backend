exports.calculateRefund = (hours, amount) => {
  let refund = 0;

  if (hours > 48) refund = 0.9 * amount;
  else if (hours > 24) refund = 0.7 * amount;
  else if (hours > 0) refund = 0.5 * amount;

  return refund * 0.95;
};