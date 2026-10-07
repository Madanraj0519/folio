import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders Madanraj's profile, selected work, and local CV download", () => {
  render(<App />);

  expect(screen.getByRole("heading", { name: /i build digital things that just work/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /technical skills/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Projects", exact: true })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Experience", exact: true })).toBeInTheDocument();
  expect(screen.getByText("8 projects")).toBeInTheDocument();
  expect(screen.queryByText(/professional work/i)).not.toBeInTheDocument();
  expect(screen.queryByRole("heading", { name: "CRM & Customer Workflows" })).not.toBeInTheDocument();
  expect(screen.queryByRole("heading", { name: "REST API & Service Architecture" })).not.toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Expense Tracker" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Disney+ Clone" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Expense Tracker on GitHub" })).toHaveAttribute(
    "href",
    "https://github.com/Madanraj0519/Expenses-Tracker"
  );
  expect(screen.getByRole("link", { name: /download cv/i })).toHaveAttribute("href", "/Madanraj_P_CV.pdf");
});

test("shows Expense Tracker first and the movie project second", () => {
  const { container } = render(<App />);
  const projectHeadings = Array.from(container.querySelectorAll(".project-card h3"), (heading) => heading.textContent);

  expect(projectHeadings).toEqual([
    "Expense Tracker",
    "Disney+ Clone",
    "Underdogs Gym",
    "Home Page",
    "Zendesk",
    "Note-App",
    "Portfolio Site",
    "E-commerce website",
  ]);
});

test("filters projects by freelance, full-stack, and front-end work", () => {
  render(<App />);

  fireEvent.click(screen.getByRole("button", { name: "Freelance" }));

  expect(screen.getByText("2 projects")).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Underdogs Gym" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Home Page" })).toBeInTheDocument();
  expect(screen.queryByRole("heading", { name: "Expense Tracker" })).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: "Full stack" }));

  expect(screen.getByText("5 projects")).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Expense Tracker" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Disney+ Clone" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Underdogs Gym" })).toBeInTheDocument();
  expect(screen.queryByRole("heading", { name: "Home Page" })).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: "Frontend" }));

  expect(screen.getByText("3 projects")).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Home Page" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Portfolio Site" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "E-commerce website" })).toBeInTheDocument();
  expect(screen.queryByRole("heading", { name: "Expense Tracker" })).not.toBeInTheDocument();
});
