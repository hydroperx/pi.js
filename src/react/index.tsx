// third-party
import React from "react";
import { FluentVariable } from "@fluent/bundle";

// local
import * as base_pi from "..";

/**
 * Wraps a `PI` instance from the `@hydroperx/pi` module,
 * with an unique identity.
 */
export class PILayer {
  // underyling PI instance
  private readonly m_pi: null | base_pi.PI;

  // random identity
  private readonly m_identity: number[] = [
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random()
  ];

  /**
   * Constructor.
   * 
   * @param pi If `null`, then accessing the `pi` property
   * throws a `ReferenceError`.
   */
  public constructor(pi: null | base_pi.PI) {
    this.m_pi = pi;
  }

  /**
   * Returns the unique identity of this layer.
   */
  public get identity(): number[] {
    return this.m_identity.slice(0);
  }

  /**
   * Returns the underlying PI instance from the
   * `@hydroperx/pi` module. This PI instance
   * provides further locale properties and operations like
   * `locales`, `currentLocale` and `supportsLocale()`.
   */
  public get pi(): base_pi.PI {
    if (!this.m_pi) {
      throw new ReferenceError("PILayer has no underyling PI instance.");
    }
    return this.m_pi!;
  }

  /**
   * Retrieves message and formats it. Returns `null` if undefined.
   *
   * Look at [`@fluent/bundle`](https://www.npmjs.com/package/@fluent/bundle)
   * for `FluentVariable`.
   */
  get(
    id: string,
    args: undefined | Record<string, FluentVariable> = undefined,
    errors: null | Error[] = null,
  ): string | null {
    return this.pi.get(id, args, errors);
  }

  /**
   * Determines if a message is defined.
   */
  has(id: string): boolean {
    return this.pi.has(id);
  }
}

/**
 * PI context.
 */
export const PI = React.createContext(new PILayer(null));

/**
 * PI context provider.
 */
export function PIProvider(params: {
  layer: PILayer,
  children?: React.ReactNode,
}): React.ReactNode {
  return (
    <PI.Provider value={params.layer}>
      {params.children}
    </PI.Provider>
  );
}