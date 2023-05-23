// wishlistUtils.js
export const isInWishlist = (productId, wishlistItems) => {
	return wishlistItems.some((item) => item.productId === productId);
};
