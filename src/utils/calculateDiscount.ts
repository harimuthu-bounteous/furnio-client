function calculateDiscountedPrice(
  actualPrice: number,
  discountPercent: number
): number {
  if (discountPercent < 0 || discountPercent > 100) {
    throw new Error("Discount percent should be between 0 and 100");
  }
  const discountAmount = (actualPrice * discountPercent) / 100;
  const newPrice = actualPrice - discountAmount;
  return newPrice;
}

export { calculateDiscountedPrice };
