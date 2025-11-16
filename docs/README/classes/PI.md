[**@hydroperx/pi**](../../README.md)

***

[@hydroperx/pi](../../README.md) / [](../../README.md) / PI

# Class: PI

Defined in: [src/index.ts:10](https://github.com/hydroperx/pi.js/blob/0b2902cfdf1decfacb1fa5b6e092b0230252d9cf/src/index.ts#L10)

`PI` stands for product internationalization.
`PI` manages Project Fluent translation lists (FTL) and translates
messages.

## Extends

- `EventTarget`

## Constructors

### Constructor

> **new PI**(`params`): `PI`

Defined in: [src/index.ts:47](https://github.com/hydroperx/pi.js/blob/0b2902cfdf1decfacb1fa5b6e092b0230252d9cf/src/index.ts#L47)

#### Parameters

##### params

[`PIParams`](../type-aliases/PIParams.md)

#### Returns

`PI`

#### Overrides

`EventTarget.constructor`

## Accessors

### currentLocale

#### Get Signature

> **get** **currentLocale**(): `Locale` \| `null`

Defined in: [src/index.ts:138](https://github.com/hydroperx/pi.js/blob/0b2902cfdf1decfacb1fa5b6e092b0230252d9cf/src/index.ts#L138)

Returns the currently loaded locale or null if none.

##### Returns

`Locale` \| `null`

***

### fallbacks

#### Get Signature

> **get** **fallbacks**(): `Locale`[]

Defined in: [src/index.ts:157](https://github.com/hydroperx/pi.js/blob/0b2902cfdf1decfacb1fa5b6e092b0230252d9cf/src/index.ts#L157)

Returns the currently loaded fallbacks.

##### Returns

`Locale`[]

***

### localeAndFallbacks

#### Get Signature

> **get** **localeAndFallbacks**(): `Locale`[]

Defined in: [src/index.ts:145](https://github.com/hydroperx/pi.js/blob/0b2902cfdf1decfacb1fa5b6e092b0230252d9cf/src/index.ts#L145)

Returns the currently loaded locale followed by its fallbacks or empty if no locale is loaded.

##### Returns

`Locale`[]

***

### locales

#### Get Signature

> **get** **locales**(): `Set`\<`Locale`\>

Defined in: [src/index.ts:118](https://github.com/hydroperx/pi.js/blob/0b2902cfdf1decfacb1fa5b6e092b0230252d9cf/src/index.ts#L118)

Returns a set of supported locales, reflecting
the ones that were specified when constructing the `PI` object.

##### Returns

`Set`\<`Locale`\>

***

### status

#### Get Signature

> **get** **status**(): [`PIStatus`](../type-aliases/PIStatus.md)

Defined in: [src/index.ts:170](https://github.com/hydroperx/pi.js/blob/0b2902cfdf1decfacb1fa5b6e092b0230252d9cf/src/index.ts#L170)

Returns the status of the `PI` instance
(e.g., `"ok"`, `"loading"` or `"error"`).

##### Returns

[`PIStatus`](../type-aliases/PIStatus.md)

## Methods

### addBundleInitializer()

> **addBundleInitializer**(`fn`): `void`

Defined in: [src/index.ts:110](https://github.com/hydroperx/pi.js/blob/0b2902cfdf1decfacb1fa5b6e092b0230252d9cf/src/index.ts#L110)

Adds a bundle initializer. This allows defining custom functions and more.

#### Parameters

##### fn

[`BundleInitializer`](../type-aliases/BundleInitializer.md)

#### Returns

`void`

***

### addEventListener()

> **addEventListener**(`type`, `callback`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8303

Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)

#### Parameters

##### type

`string`

##### callback

`EventListenerOrEventListenerObject` | `null`

##### options?

`boolean` | `AddEventListenerOptions`

#### Returns

`void`

#### Inherited from

`EventTarget.addEventListener`

***

### clone()

> **clone**(): `PI`

Defined in: [src/index.ts:385](https://github.com/hydroperx/pi.js/blob/0b2902cfdf1decfacb1fa5b6e092b0230252d9cf/src/index.ts#L385)

Clones the `PI` object, but returning an object that is
in sync with the original `PI` object.

#### Returns

`PI`

***

### dispatchEvent()

> **dispatchEvent**(`event`): `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8309

Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/dispatchEvent)

#### Parameters

##### event

`Event`

#### Returns

`boolean`

#### Inherited from

`EventTarget.dispatchEvent`

***

### get()

> **get**(`id`, `args`, `errors`): `string` \| `null`

Defined in: [src/index.ts:269](https://github.com/hydroperx/pi.js/blob/0b2902cfdf1decfacb1fa5b6e092b0230252d9cf/src/index.ts#L269)

Retrieves message and formats it. Returns `null` if undefined.

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

Defined in: [src/index.ts:322](https://github.com/hydroperx/pi.js/blob/0b2902cfdf1decfacb1fa5b6e092b0230252d9cf/src/index.ts#L322)

Determines if a message is defined.

#### Parameters

##### id

`string`

#### Returns

`boolean`

***

### load()

> **load**(`newLocale`): `Promise`\<`boolean`\>

Defined in: [src/index.ts:186](https://github.com/hydroperx/pi.js/blob/0b2902cfdf1decfacb1fa5b6e092b0230252d9cf/src/index.ts#L186)

Attempts to load a locale and its fallbacks.
If the locale argument is specified, it is loaded.
Otherwise, if there is a default locale, it is loaded, and if not,
the method throws an error.

If any resource fails to load, the returned `Promise`
resolves to `false`, otherwise `true`.

Also dispatches either the `load` or `error` event,
when loading is completed.

#### Parameters

##### newLocale

`Locale` | `null`

#### Returns

`Promise`\<`boolean`\>

***

### off()

#### Call Signature

> **off**\<`T`\>(`type`, `listener`, `params?`): `void`

Defined in: [src/index.ts:370](https://github.com/hydroperx/pi.js/blob/0b2902cfdf1decfacb1fa5b6e092b0230252d9cf/src/index.ts#L370)

Shortcut for the `removeEventListener()` method.

##### Type Parameters

###### T

`T` *extends* keyof [`PIEventMap`](../type-aliases/PIEventMap.md)

##### Parameters

###### type

`T`

###### listener

(`event`) => `void`

###### params?

`boolean` | `EventListenerOptions`

##### Returns

`void`

#### Call Signature

> **off**(`type`, `listener`, `params?`): `void`

Defined in: [src/index.ts:375](https://github.com/hydroperx/pi.js/blob/0b2902cfdf1decfacb1fa5b6e092b0230252d9cf/src/index.ts#L375)

Shortcut for the `removeEventListener()` method.

##### Parameters

###### type

`string`

###### listener

`Function`

###### params?

`boolean` | `EventListenerOptions`

##### Returns

`void`

***

### on()

#### Call Signature

> **on**\<`T`\>(`type`, `listener`, `params?`): `void`

Defined in: [src/index.ts:356](https://github.com/hydroperx/pi.js/blob/0b2902cfdf1decfacb1fa5b6e092b0230252d9cf/src/index.ts#L356)

Shortcut for the `addEventListener()` method.

##### Type Parameters

###### T

`T` *extends* keyof [`PIEventMap`](../type-aliases/PIEventMap.md)

##### Parameters

###### type

`T`

###### listener

(`event`) => `void`

###### params?

`boolean` | `AddEventListenerOptions`

##### Returns

`void`

#### Call Signature

> **on**(`type`, `listener`, `params?`): `void`

Defined in: [src/index.ts:361](https://github.com/hydroperx/pi.js/blob/0b2902cfdf1decfacb1fa5b6e092b0230252d9cf/src/index.ts#L361)

Shortcut for the `addEventListener()` method.

##### Parameters

###### type

`string`

###### listener

`Function`

###### params?

`boolean` | `AddEventListenerOptions`

##### Returns

`void`

***

### removeEventListener()

> **removeEventListener**(`type`, `callback`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8315

Removes the event listener in target's event listener list with the same type, callback, and options.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)

#### Parameters

##### type

`string`

##### callback

`EventListenerOrEventListenerObject` | `null`

##### options?

`boolean` | `EventListenerOptions`

#### Returns

`void`

#### Inherited from

`EventTarget.removeEventListener`

***

### supportsLocale()

> **supportsLocale**(`argument`): `boolean`

Defined in: [src/index.ts:131](https://github.com/hydroperx/pi.js/blob/0b2902cfdf1decfacb1fa5b6e092b0230252d9cf/src/index.ts#L131)

Returns `true` if the locale is one of the supported locales
that were specified when constructing the `PI` object,
otherwise `false`.

#### Parameters

##### argument

`string` | `Locale`

#### Returns

`boolean`
