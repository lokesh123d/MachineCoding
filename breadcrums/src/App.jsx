import React from "react";
import { Link, Outlet, isRouteErrorResponse, useLocation, useRouteError } from "react-router-dom";

async function getProducts() {
  const response = await fetch("https://dummyjson.com/products/?limit=194");
  if (!response.ok) {
    throw new Response("Failed to fetch products", { status: response.status });
  }

  const result = await response.json();
  return result.products.reverse();
}

export async function homeLoader() {
  const products = await getProducts();
  return products.slice(70, 80);
}

export async function productsLoader() {
  const products = await getProducts();
  return products.slice(70);
}

export async function productItemLoader({ params }) {
  if (!params.id) {
    throw new Response("Product id is required", { status: 400 });
  }

  const response = await fetch(`https://dummyjson.com/products/${params.id}`);
  if (!response.ok) {
    throw new Response("Product not found", { status: response.status });
  }

  return response.json();
}

export function RootLayout() {
  const location = useLocation();
  const crumbs = location.pathname.split("/").filter(Boolean);

  return (
    <div className="app-shell">
      <header className="top-nav">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </header>

      <div className="breadcrumbs">
        <Link to="/">root</Link>
        {crumbs.map((crumb, index) => {
          const to = `/${crumbs.slice(0, index + 1).join("/")}`;
          return (
            <span key={to}>
              {" / "}
              <Link to={to}>{crumb}</Link>
            </span>
          );
        })}
      </div>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export function RouteErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h2>{error.status}</h2>
        <p>{error.statusText || "Something went wrong"}</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Unexpected Error</h2>
      <p>{error?.message || "Something went wrong"}</p>
    </div>
  );
}

export function NotFound() {
  return (
    <div>
      <h2>404 - Page Not Found</h2>
      <Link to="/">Back to Home</Link>
    </div>
  );
}
