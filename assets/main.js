import { jsx } from "hastx/jsx-runtime";
import { Header } from "header";
import { Content } from "content";
import { Footer } from "footer";

import { toHtml } from "https://esm.sh/hast-util-to-html@8.0.4";

const Page = () => jsx("section", {
  children: [
    jsx(Header),
    jsx("hr", {}),
    jsx(Content),
    jsx("hr", {}),
    jsx(Footer),
    jsx("hr", {}),
    jsx(Samples),
  ]
});


const Samples =  () => jsx("ol", {
  children: [
    jsx("h2", {
      children: "some examples:",
    }),
    jsx("li", {
      children: jsx("a", { href: "/?content=3.2.2", children: "content=3.2.2"})
    }),
    jsx("li", {
      children: jsx("a", { href: "/?header=1.0.0", children: "header=1.0.0"}),
    }),
    jsx("li", {
      children: jsx("a", { href: "/?header=1.0.0&content=2.2.2", children: "header=1.0.0&content=2.2.2"}),
    }),
  ]
});

let main = document.querySelector('main');

main.innerHTML = toHtml(Page());
