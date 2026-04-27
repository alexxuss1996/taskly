import { HelloApiClient } from "#/api/HelloApiClient";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
  loader: () => HelloApiClient.getHello(),
});

function App() {
  const { useLoaderData } = Route;
  const data = useLoaderData();

  return (
    <main>
      <h1>Home</h1>
      <code>{data}</code>
    </main>
  );
}
