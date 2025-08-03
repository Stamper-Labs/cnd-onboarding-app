import { render, screen } from "@testing-library/react";
import LandingPage from "./Landing";
import { describe, it, expect, vi } from "vitest";

vi.mock("../../components/layout/StickyAppBar/StickyAppBar", () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="mock-sticky-app-bar">{children}</div>
  ),
}));

describe("LandingPage Test Suite", () => {
  it("renders the LandingToolbar inside StickyAppBar", () => {
    render(<LandingPage />);
    expect(screen.getByTestId("mock-sticky-app-bar")).toBeInTheDocument();
  });
});
