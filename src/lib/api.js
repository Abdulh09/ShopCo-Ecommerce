import { client, urlFor } from "./sanityClient";

export const getNewArrivals = () =>
  client.fetch(`*[_type == "product" && newArrival == true && featured != true] | order(_createdAt desc)[0...4]{
    _id, name, "slug": slug.current, price, rating, image
  }`);

// Turns a Sanity product into the props your ProductCard needs
export const toCardProps = (p) => ({
  slug: p.slug,
  src: p.image ? urlFor(p.image).width(600).url() : "",
  title: p.name,
  rating: p.rating ?? 0,
  ratingOutOf: 5,
  price: p.price,
});
export const getProductBySlug = (slug) =>
  client.fetch(
    `*[_type == "product" && slug.current == $slug][0]{
      ...,
      "slug": slug.current
    }`,
    { slug }
  );
export const getFeaturedProducts = () =>
  client.fetch(`*[_type == "product" && featured == true][0...4]{
    _id, name, "slug": slug.current, price, rating, image
  }`);

export const getRelatedProducts = (category, excludeSlug) =>
  client.fetch(
    `*[_type == "product" && category == $category && slug.current != $excludeSlug][0...4]{
      _id, name, "slug": slug.current, price, rating, image
    }`,
    { category, excludeSlug }
  );