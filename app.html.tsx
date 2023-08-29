import type { Operation } from "effection";

export function* AppHtml(): Operation<JSX.Element> {
  let title = "Micro Frontend Composer";
  let description = "Prototyping using Import Maps to create A Micro Frontend Architecture";
  return (
    <html lang="en-US" dir="ltr">
      <head>
        <meta charset="UTF-8" />
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <main>
          <h1>Hello World</h1>
        </main>
      </body>
    </html>
  );
}
