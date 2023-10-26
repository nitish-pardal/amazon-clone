export function formatCurrency(priceCents){
  return (Math.round(priceCents) /100).toFixed(2);
}

export default formatCurrency; //this is being used for formatting the currency . this is a default export and this can only be done once in a file.