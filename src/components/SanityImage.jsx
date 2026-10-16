import { urlFor } from "../lib/sanityClient";

const SanityImage = ({
  image,
  alt = "",
  widths = [400, 800, 1200],
  sizes = "100vw",
  className,
  fetchPriority = "auto",
  loading = "lazy",
}) => {
  if (!image) return null;

  const build = (w) => urlFor(image).width(w).auto("format").url();

  return (
    <img
      className={className}
      src={build(widths[widths.length - 1])}
      srcSet={widths.map((w) => `${build(w)} ${w}w`).join(", ")}
      sizes={sizes}
      alt={alt}
      loading={loading}
      fetchPriority={fetchPriority}
    />
  );
};

export default SanityImage;
