import { serve } from "freejack/server.ts";
import { html } from "freejack/html.ts";
import { render } from "freejack/view.ts";

import { AppHtml } from "./html/app.html.tsx";

export default () =>
  serve({
    "/": html.get(function*() {
      return yield* render(AppHtml())
    })
  });
