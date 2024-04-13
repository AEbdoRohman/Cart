const CURENCY_FORMAT = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

const formatCurrency = (number) => {
  return CURENCY_FORMAT.format(number);
};

export default formatCurrency;
