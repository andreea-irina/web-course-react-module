import { useContext } from "react";

import { ThemeContext } from "../store/Theme/context";

import Header from "./Header";

export default function Layout({ children }) {
  const { state } = useContext(ThemeContext);

  return (
    <div className={`bg-${state.theme} d-flex flex-column min-vh-100`}>
      <Header />

      <div className="my-auto">{children}</div>
    </div>
  );
}
