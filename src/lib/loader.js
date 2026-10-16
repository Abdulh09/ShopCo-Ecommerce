import {
  getNewArrivals,
  getFeaturedProducts,
  getProductBySlug,
  getRelatedProducts,
} from "./api";

export const homeLoader = async () => {
  const [newArrivals, topSelling] = await Promise.all([
    getNewArrivals(),
    getFeaturedProducts(),
  ]);
  return { newArrivals, topSelling };
};

export const productLoader = async ({ params }) => {
  const product = await getProductBySlug(params.slug);
  if (!product) throw new Response("Not Found", { status: 404 });

  const related = await getRelatedProducts(product.category, params.slug);
  return { product, related };
};