export default function formatMoney(value) {
  const options = {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 2,
  };

  if (value % 100 === 0) {
    options.minimumFractionDigits = 0;
  }

  const formatter = Intl.NumberFormat("en-GB", options);

  return formatter.format(value / 100);
}
