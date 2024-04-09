import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as Error;

  if (!isRouteErrorResponse(error)) {
    return null;
  }

  return (
    <div>
      <h2>Oups!</h2>
      <p>Erreur</p>
      <p>{error.data}</p>
    </div>
  );
}
