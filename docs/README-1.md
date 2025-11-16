[**@hydroperx/pi**](README.md)

***

# PI

<p align="center">
  <a href="./docs/globals.md"><img src="https://img.shields.io/badge/TypeScript%20API%20Documentation-gray"></a>
</p>

Rapidly support [Project Fluent](https://projectfluent.org) translation in your web application. Both client-side and server-side applications are supported.

This package depends on `@fluent/bundle`.

> **Note:** That is an updated version of [com.hydroper.ftl](https://www.npmjs.com/package/com.hydroper.ftl).

## Getting Started

Install dependency:

```sh
npm install @hydroperx/pi
```

Example TypeScript:

```ts
import { PI } from "@hydroperx/pi";

class Main {
    pi: PI;

    constructor() {
        this.pi = new PI({
            locales: ["en"],
            fallbacks: {
                // "pt-BR": ["en"],
            },
            defaultLocale: "en",

            source: "res/lang",
            files: [
                "_", // res/lang/LANG/_.ftl
            ],

            clean: true,

            // specify either 'http' or 'fileSystem' as load method
            method: "fileSystem",
        });
        this.initialize();
    }

    async initialize() {
        if (!(await this.pi.load())) {
            // failed to load
            return;
        }

        console.log(this.pi.get("hello", { to: "Diantha" }));
    }
}

new Main();
```

Example FTL file at `res/lang/en/_.ftl`:

```
hello = Hello, { $to }!
```

## Server Usage

Usually, for server applications, set the `clean` option to `false` and clone the `PI` object when necessary by invoking `pi.clone();` to change the current locale.

The `pi.clone();` method clones the `PI` object, but still re-uses resources from the original object, avoiding resource duplication.

## Events

Note that the `PI` object dispatches two events `load` and `error` as an alternative in case you cannot await for the result of the `.load()` method in the same code region.

## React

The `@hydroperx/pi/react` module contains a bit of React.js boilerplate.

- Use the `PI` context inside any components you need internationalization for. React.js will re-render the component when the context changes; for example, if you need to change language, you can cause a full re-render of your application by providing a new `PILayer` to `PIProvider`.

```tsx
// Application.tsx
import React from "react";
import { PI, PIStatus } from "@hydroperx/pi";
import { PIProvider, PILayer } from "@hydroperx/pi/react";
import { Consumer } from "./Consumer";

// construct your PI instance
const pi = new PI(...);

//
function Application(): undefined | React.ReactNode {
    const [pi_status, set_pi_status] = React.useState<PIStatus>("loading");

    // initialization
    React.useEffect(() => {
        pi
            .load()
            .then(success => {
                set_pi_status(success ? "ok" : "error");
            })
            .catch(() => {
                set_pi_status("error");
            });
    }, []);

    return (
        pi_status == "ok" ?
            <PIProvider layer={new PILayer()}>
                <Consumer/>
            </PIProvider> : undefined
    );
}

// Consumer.tsx
import React from "react";
import { PI } from "@hydroperx/pi/react";

//
export function Consumer(): React.ReactNode {
    // pi
    const pi = React.useContext(PI);

    // note that `pi.pi` is the underlying PI
    // instance, containing further properties
    // and methods.

    return (
        <>
            <span>{pi.get("hello-world")}</span>
        </>
    );
}
```
