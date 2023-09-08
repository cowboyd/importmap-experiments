import { serve } from "freejack/server.ts";
import { html } from "freejack/html.ts";
import { render } from "freejack/view.ts";
import { AppHtml } from "./html/app.html.tsx";

import { RequestContext } from "./hooks/use-request.ts";

export default function() {

  return serve({
    "/": html.get(function*({request}) {
      yield* RequestContext.set(request);

      return yield* render(AppHtml());
    })
  });
}
