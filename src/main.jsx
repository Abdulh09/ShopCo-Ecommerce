import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import {
  getNewArrivals,
  getProductBySlug,
  getRelatedProducts,
  getFeaturedProducts,
} from "./lib/api";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./pages/Home.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";

import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    hydrateFallbackElement: <p className="text-center py-5">Loading…</p>,
    children: [
      {
        path: "",
        element: <Home />,
        loader: async () => {
          const [newArrivals, topSelling] = await Promise.all([
            getNewArrivals(),
            getFeaturedProducts(),
          ]);
          return { newArrivals, topSelling };
        },
      },
      {
        path: "product/:slug",
        element: <ProductDetail />,
        loader: async ({ params }) => {
          const product = await getProductBySlug(params.slug);
          if (!product) throw new Response("Not Found", { status: 404 });
          const related = await getRelatedProducts(product.category, params.slug);
          return { product, related };
        },
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
