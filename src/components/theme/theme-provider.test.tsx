import { act, cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { ThemeProvider, useTheme } from "./theme-provider";

function ThemeControl() {
  const { theme, toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>{theme}</button>;
}

afterEach(() => {
  cleanup();
  localStorage.clear();
  document.documentElement.classList.remove("dark");
});

describe("Appearance", () => {
  it("switches between the required light and dark themes", () => {
    render(<ThemeProvider><ThemeControl /></ThemeProvider>);
    act(() => screen.getByRole("button").click());
    expect(document.documentElement.classList.contains("dark")).toBe(true);
    act(() => screen.getByRole("button").click());
    expect(document.documentElement.classList.contains("dark")).toBe(false);
  });

  it("restores a saved appearance preference", () => {
    localStorage.setItem("campus-career-connect-theme", "dark");
    render(<ThemeProvider><ThemeControl /></ThemeProvider>);
    expect(document.documentElement.classList.contains("dark")).toBe(true);
    act(() => screen.getByRole("button").click());
    expect(localStorage.getItem("campus-career-connect-theme")).toBe("light");
  });
});