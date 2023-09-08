import type { Operation } from "effection";
import { useImports } from "../hooks/use-imports.ts";

export function* AppHtml(): Operation<JSX.Element> {
  let title = "Micro Frontend Composer";
  let description = "Prototyping using Import Maps to create A Micro Frontend Architecture";

  let imports = yield* useImports();

  return (
    <html lang="en-US" dir="ltr">
      <head>
        <meta charset="UTF-8" />
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="stylesheet" href="https://use.typekit.net/ugs0ewy.css" />
        <script type="importmap">
          {JSON.stringify(imports)}
        </script>
      </head>
      <body>
        <main class="prose m-auto">
        </main>
        <script type="module" src="/assets/main.js"></script>
      </body>
    </html>
  );
}
