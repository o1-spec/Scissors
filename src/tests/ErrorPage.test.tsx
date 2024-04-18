import { screen, render } from "@testing-library/react";
import ErrorPage from "../Components/pages/ErrorPage";
import { BrowserRouter as Router } from "react-router-dom";

it("Should show redirect back to previous page", () => {
  render(
    <Router>
      <ErrorPage />
    </Router>
  );
  const message = screen.getByText(/Redirecting back in/i);
  expect(message).toBeVisible();
});
