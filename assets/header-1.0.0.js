// construct jsx nodes directly to avoid transpilation step
import { jsx } from "hastx/jsx-runtime";

export function Header() {
  return jsx("h1", { children: "Header Version 1.0.0" });
}
