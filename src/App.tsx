import { createBrowserRouter, RouterProvider, Link, useLoaderData, type LoaderFunctionArgs } from "react-router-dom";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField, useTina } from "tinacms/dist/react";
import client from "../tina/__generated__/client";

const load = ({ params }: LoaderFunctionArgs) =>
  client.queries.page({ relativePath: `${params.slug ?? "home"}.mdx` });

function Page() {
  const { data } = useTina(useLoaderData() as Awaited<ReturnType<typeof load>>);
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        <a href="/admin/index.html">Admin</a>
      </nav>
      <main data-tina-field={tinaField(data.page, "body")}>
        <TinaMarkdown content={data.page.body} />
      </main>
    </>
  );
}

const router = createBrowserRouter([
  { path: "/", loader: load, element: <Page /> },
  { path: "/:slug", loader: load, element: <Page /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
