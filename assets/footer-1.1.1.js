import { jsx } from "hastx/jsx-runtime";

export function Footer() {
  return jsx("footer", {
    children: `footer@1.1.1 © ${new Date().getFullYear()} Micro Machines LLC`
  })
}
