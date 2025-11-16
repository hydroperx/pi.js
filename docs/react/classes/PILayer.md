[**@hydroperx/pi**](../../README.md)

***

[@hydroperx/pi](../../README.md) / [react](../README.md) / PILayer

# Class: PILayer

Defined in: [src/react/index.tsx:12](https://github.com/hydroperx/pi.js/blob/d465d3fb87289907ebdaa3e89bf8ff899785ee98/src/react/index.tsx#L12)

Wraps a `PI` instance from the `@hydroperx/pi` module,
with an unique identity.

## Constructors

### Constructor

> **new PILayer**(`pi`): `PILayer`

Defined in: [src/react/index.tsx:31](https://github.com/hydroperx/pi.js/blob/d465d3fb87289907ebdaa3e89bf8ff899785ee98/src/react/index.tsx#L31)

Constructor.

#### Parameters

##### pi

If `null`, then accessing the `pi` property
throws a `ReferenceError`.

[`PI`](../../README/classes/PI.md) | `null`

#### Returns

`PILayer`

## Accessors

### identity

#### Get Signature

> **get** **identity**(): `number`[]

Defined in: [src/react/index.tsx:38](https://github.com/hydroperx/pi.js/blob/d465d3fb87289907ebdaa3e89bf8ff899785ee98/src/react/index.tsx#L38)

Returns the unique identity of this layer.

##### Returns

`number`[]

***

### pi

#### Get Signature

> **get** **pi**(): [`PI`](../../README/classes/PI.md)

Defined in: [src/react/index.tsx:48](https://github.com/hydroperx/pi.js/blob/d465d3fb87289907ebdaa3e89bf8ff899785ee98/src/react/index.tsx#L48)

Returns the underlying PI instance from the
`@hydroperx/pi` module. This PI instance
provides further locale properties and operations like
`locales`, `currentLocale` and `supportsLocale()`.

##### Returns

[`PI`](../../README/classes/PI.md)

## Methods

### get()

> **get**(`id`, `args`, `errors`): `string` \| `null`

Defined in: [src/react/index.tsx:61](https://github.com/hydroperx/pi.js/blob/d465d3fb87289907ebdaa3e89bf8ff899785ee98/src/react/index.tsx#L61)

Retrieves message and formats it. Returns `null` if undefined.

Look at [`@fluent/bundle`](https://www.npmjs.com/package/@fluent/bundle)
for `FluentVariable`.

#### Parameters

##### id

`string`

##### args

`Record`\<`string`, `FluentVariable`\> | `undefined`

##### errors

`Error`[] | `null`

#### Returns

`string` \| `null`

***

### has()

> **has**(`id`): `boolean`

Defined in: [src/react/index.tsx:72](https://github.com/hydroperx/pi.js/blob/d465d3fb87289907ebdaa3e89bf8ff899785ee98/src/react/index.tsx#L72)

Determines if a message is defined.

#### Parameters

##### id

`string`

#### Returns

`boolean`
