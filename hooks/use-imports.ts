import type { Operation } from "effection";
import { useRequest } from './use-request.ts';

export interface ImportMap {
  imports: Record<string, string>;
}

const versions = {
  "header": ["1.0.0", "2.3.1"],
  "content": ["2.2.2", "3.2.2"],
  "footer": ["1.1.1"],
}

export function* useImports(): Operation<ImportMap> {
  let request = yield* useRequest();
  let url = new URL(request.url);

  let params = url.searchParams;

  let versions = getVersions(params);

  return {
    "imports": {
      "header": versions.header,
      "content": versions.content,
      "footer": versions.footer,
      "hastx/jsx-runtime": "https://esm.sh/hastx@0.0.6/jsx-runtime"
    }
  }
}

function getVersions(params: URLSearchParams) {

  function find(libname: keyof typeof versions) {
    let [defaultVersion] = versions[libname].toReversed();
    let param = params.get(libname);
    if (!param) {
      console.dir({ [libname]: defaultVersion})
      return defaultVersion;
    } else if (versions[libname].includes(param)) {
      console.dir({ [libname]: param })
      return param;
    } else {
      console.dir({ [libname]: defaultVersion})
      return defaultVersion;
    }
  }
  return {
    get header() {
      return `/assets/header-${find("header")}.js`;
    },
    get content() {
      return `/assets/content-${find("content")}.js`;
    },
    get footer() {
      return `/assets/footer-${find("footer")}.js`;
    }
  }
}
