
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Metric
 * 
 */
export type Metric = $Result.DefaultSelection<Prisma.$MetricPayload>
/**
 * Model MetricData
 * 
 */
export type MetricData = $Result.DefaultSelection<Prisma.$MetricDataPayload>
/**
 * Model NavigationTiming
 * 
 */
export type NavigationTiming = $Result.DefaultSelection<Prisma.$NavigationTimingPayload>
/**
 * Model ConnectionData
 * 
 */
export type ConnectionData = $Result.DefaultSelection<Prisma.$ConnectionDataPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Metrics
 * const metrics = await prisma.metric.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Metrics
   * const metrics = await prisma.metric.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.metric`: Exposes CRUD operations for the **Metric** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Metrics
    * const metrics = await prisma.metric.findMany()
    * ```
    */
  get metric(): Prisma.MetricDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.metricData`: Exposes CRUD operations for the **MetricData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MetricData
    * const metricData = await prisma.metricData.findMany()
    * ```
    */
  get metricData(): Prisma.MetricDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.navigationTiming`: Exposes CRUD operations for the **NavigationTiming** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NavigationTimings
    * const navigationTimings = await prisma.navigationTiming.findMany()
    * ```
    */
  get navigationTiming(): Prisma.NavigationTimingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.connectionData`: Exposes CRUD operations for the **ConnectionData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConnectionData
    * const connectionData = await prisma.connectionData.findMany()
    * ```
    */
  get connectionData(): Prisma.ConnectionDataDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Metric: 'Metric',
    MetricData: 'MetricData',
    NavigationTiming: 'NavigationTiming',
    ConnectionData: 'ConnectionData'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "metric" | "metricData" | "navigationTiming" | "connectionData"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Metric: {
        payload: Prisma.$MetricPayload<ExtArgs>
        fields: Prisma.MetricFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MetricFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MetricFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          findFirst: {
            args: Prisma.MetricFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MetricFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          findMany: {
            args: Prisma.MetricFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>[]
          }
          create: {
            args: Prisma.MetricCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          createMany: {
            args: Prisma.MetricCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MetricCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>[]
          }
          delete: {
            args: Prisma.MetricDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          update: {
            args: Prisma.MetricUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          deleteMany: {
            args: Prisma.MetricDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MetricUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MetricUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>[]
          }
          upsert: {
            args: Prisma.MetricUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          aggregate: {
            args: Prisma.MetricAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMetric>
          }
          groupBy: {
            args: Prisma.MetricGroupByArgs<ExtArgs>
            result: $Utils.Optional<MetricGroupByOutputType>[]
          }
          count: {
            args: Prisma.MetricCountArgs<ExtArgs>
            result: $Utils.Optional<MetricCountAggregateOutputType> | number
          }
        }
      }
      MetricData: {
        payload: Prisma.$MetricDataPayload<ExtArgs>
        fields: Prisma.MetricDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MetricDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MetricDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricDataPayload>
          }
          findFirst: {
            args: Prisma.MetricDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MetricDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricDataPayload>
          }
          findMany: {
            args: Prisma.MetricDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricDataPayload>[]
          }
          create: {
            args: Prisma.MetricDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricDataPayload>
          }
          createMany: {
            args: Prisma.MetricDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MetricDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricDataPayload>[]
          }
          delete: {
            args: Prisma.MetricDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricDataPayload>
          }
          update: {
            args: Prisma.MetricDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricDataPayload>
          }
          deleteMany: {
            args: Prisma.MetricDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MetricDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MetricDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricDataPayload>[]
          }
          upsert: {
            args: Prisma.MetricDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricDataPayload>
          }
          aggregate: {
            args: Prisma.MetricDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMetricData>
          }
          groupBy: {
            args: Prisma.MetricDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<MetricDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.MetricDataCountArgs<ExtArgs>
            result: $Utils.Optional<MetricDataCountAggregateOutputType> | number
          }
        }
      }
      NavigationTiming: {
        payload: Prisma.$NavigationTimingPayload<ExtArgs>
        fields: Prisma.NavigationTimingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NavigationTimingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavigationTimingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NavigationTimingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavigationTimingPayload>
          }
          findFirst: {
            args: Prisma.NavigationTimingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavigationTimingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NavigationTimingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavigationTimingPayload>
          }
          findMany: {
            args: Prisma.NavigationTimingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavigationTimingPayload>[]
          }
          create: {
            args: Prisma.NavigationTimingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavigationTimingPayload>
          }
          createMany: {
            args: Prisma.NavigationTimingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NavigationTimingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavigationTimingPayload>[]
          }
          delete: {
            args: Prisma.NavigationTimingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavigationTimingPayload>
          }
          update: {
            args: Prisma.NavigationTimingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavigationTimingPayload>
          }
          deleteMany: {
            args: Prisma.NavigationTimingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NavigationTimingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NavigationTimingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavigationTimingPayload>[]
          }
          upsert: {
            args: Prisma.NavigationTimingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavigationTimingPayload>
          }
          aggregate: {
            args: Prisma.NavigationTimingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNavigationTiming>
          }
          groupBy: {
            args: Prisma.NavigationTimingGroupByArgs<ExtArgs>
            result: $Utils.Optional<NavigationTimingGroupByOutputType>[]
          }
          count: {
            args: Prisma.NavigationTimingCountArgs<ExtArgs>
            result: $Utils.Optional<NavigationTimingCountAggregateOutputType> | number
          }
        }
      }
      ConnectionData: {
        payload: Prisma.$ConnectionDataPayload<ExtArgs>
        fields: Prisma.ConnectionDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConnectionDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConnectionDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionDataPayload>
          }
          findFirst: {
            args: Prisma.ConnectionDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConnectionDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionDataPayload>
          }
          findMany: {
            args: Prisma.ConnectionDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionDataPayload>[]
          }
          create: {
            args: Prisma.ConnectionDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionDataPayload>
          }
          createMany: {
            args: Prisma.ConnectionDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConnectionDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionDataPayload>[]
          }
          delete: {
            args: Prisma.ConnectionDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionDataPayload>
          }
          update: {
            args: Prisma.ConnectionDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionDataPayload>
          }
          deleteMany: {
            args: Prisma.ConnectionDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConnectionDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConnectionDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionDataPayload>[]
          }
          upsert: {
            args: Prisma.ConnectionDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionDataPayload>
          }
          aggregate: {
            args: Prisma.ConnectionDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConnectionData>
          }
          groupBy: {
            args: Prisma.ConnectionDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConnectionDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConnectionDataCountArgs<ExtArgs>
            result: $Utils.Optional<ConnectionDataCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    metric?: MetricOmit
    metricData?: MetricDataOmit
    navigationTiming?: NavigationTimingOmit
    connectionData?: ConnectionDataOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Metric
   */

  export type AggregateMetric = {
    _count: MetricCountAggregateOutputType | null
    _min: MetricMinAggregateOutputType | null
    _max: MetricMaxAggregateOutputType | null
  }

  export type MetricMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    path: string | null
    userAgent: string | null
    metricDataId: string | null
    connectionDataId: string | null
  }

  export type MetricMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    path: string | null
    userAgent: string | null
    metricDataId: string | null
    connectionDataId: string | null
  }

  export type MetricCountAggregateOutputType = {
    id: number
    createdAt: number
    path: number
    userAgent: number
    metricDataId: number
    connectionDataId: number
    _all: number
  }


  export type MetricMinAggregateInputType = {
    id?: true
    createdAt?: true
    path?: true
    userAgent?: true
    metricDataId?: true
    connectionDataId?: true
  }

  export type MetricMaxAggregateInputType = {
    id?: true
    createdAt?: true
    path?: true
    userAgent?: true
    metricDataId?: true
    connectionDataId?: true
  }

  export type MetricCountAggregateInputType = {
    id?: true
    createdAt?: true
    path?: true
    userAgent?: true
    metricDataId?: true
    connectionDataId?: true
    _all?: true
  }

  export type MetricAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Metric to aggregate.
     */
    where?: MetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrics to fetch.
     */
    orderBy?: MetricOrderByWithRelationInput | MetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Metrics
    **/
    _count?: true | MetricCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MetricMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MetricMaxAggregateInputType
  }

  export type GetMetricAggregateType<T extends MetricAggregateArgs> = {
        [P in keyof T & keyof AggregateMetric]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMetric[P]>
      : GetScalarType<T[P], AggregateMetric[P]>
  }




  export type MetricGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetricWhereInput
    orderBy?: MetricOrderByWithAggregationInput | MetricOrderByWithAggregationInput[]
    by: MetricScalarFieldEnum[] | MetricScalarFieldEnum
    having?: MetricScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MetricCountAggregateInputType | true
    _min?: MetricMinAggregateInputType
    _max?: MetricMaxAggregateInputType
  }

  export type MetricGroupByOutputType = {
    id: string
    createdAt: Date
    path: string
    userAgent: string
    metricDataId: string
    connectionDataId: string | null
    _count: MetricCountAggregateOutputType | null
    _min: MetricMinAggregateOutputType | null
    _max: MetricMaxAggregateOutputType | null
  }

  type GetMetricGroupByPayload<T extends MetricGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MetricGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MetricGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MetricGroupByOutputType[P]>
            : GetScalarType<T[P], MetricGroupByOutputType[P]>
        }
      >
    >


  export type MetricSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    path?: boolean
    userAgent?: boolean
    metricDataId?: boolean
    connectionDataId?: boolean
    metrics?: boolean | MetricDataDefaultArgs<ExtArgs>
    connection?: boolean | Metric$connectionArgs<ExtArgs>
  }, ExtArgs["result"]["metric"]>

  export type MetricSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    path?: boolean
    userAgent?: boolean
    metricDataId?: boolean
    connectionDataId?: boolean
    metrics?: boolean | MetricDataDefaultArgs<ExtArgs>
    connection?: boolean | Metric$connectionArgs<ExtArgs>
  }, ExtArgs["result"]["metric"]>

  export type MetricSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    path?: boolean
    userAgent?: boolean
    metricDataId?: boolean
    connectionDataId?: boolean
    metrics?: boolean | MetricDataDefaultArgs<ExtArgs>
    connection?: boolean | Metric$connectionArgs<ExtArgs>
  }, ExtArgs["result"]["metric"]>

  export type MetricSelectScalar = {
    id?: boolean
    createdAt?: boolean
    path?: boolean
    userAgent?: boolean
    metricDataId?: boolean
    connectionDataId?: boolean
  }

  export type MetricOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "path" | "userAgent" | "metricDataId" | "connectionDataId", ExtArgs["result"]["metric"]>
  export type MetricInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    metrics?: boolean | MetricDataDefaultArgs<ExtArgs>
    connection?: boolean | Metric$connectionArgs<ExtArgs>
  }
  export type MetricIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    metrics?: boolean | MetricDataDefaultArgs<ExtArgs>
    connection?: boolean | Metric$connectionArgs<ExtArgs>
  }
  export type MetricIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    metrics?: boolean | MetricDataDefaultArgs<ExtArgs>
    connection?: boolean | Metric$connectionArgs<ExtArgs>
  }

  export type $MetricPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Metric"
    objects: {
      metrics: Prisma.$MetricDataPayload<ExtArgs>
      connection: Prisma.$ConnectionDataPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      path: string
      userAgent: string
      metricDataId: string
      connectionDataId: string | null
    }, ExtArgs["result"]["metric"]>
    composites: {}
  }

  type MetricGetPayload<S extends boolean | null | undefined | MetricDefaultArgs> = $Result.GetResult<Prisma.$MetricPayload, S>

  type MetricCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MetricFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MetricCountAggregateInputType | true
    }

  export interface MetricDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Metric'], meta: { name: 'Metric' } }
    /**
     * Find zero or one Metric that matches the filter.
     * @param {MetricFindUniqueArgs} args - Arguments to find a Metric
     * @example
     * // Get one Metric
     * const metric = await prisma.metric.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MetricFindUniqueArgs>(args: SelectSubset<T, MetricFindUniqueArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Metric that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MetricFindUniqueOrThrowArgs} args - Arguments to find a Metric
     * @example
     * // Get one Metric
     * const metric = await prisma.metric.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MetricFindUniqueOrThrowArgs>(args: SelectSubset<T, MetricFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Metric that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricFindFirstArgs} args - Arguments to find a Metric
     * @example
     * // Get one Metric
     * const metric = await prisma.metric.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MetricFindFirstArgs>(args?: SelectSubset<T, MetricFindFirstArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Metric that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricFindFirstOrThrowArgs} args - Arguments to find a Metric
     * @example
     * // Get one Metric
     * const metric = await prisma.metric.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MetricFindFirstOrThrowArgs>(args?: SelectSubset<T, MetricFindFirstOrThrowArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Metrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Metrics
     * const metrics = await prisma.metric.findMany()
     * 
     * // Get first 10 Metrics
     * const metrics = await prisma.metric.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const metricWithIdOnly = await prisma.metric.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MetricFindManyArgs>(args?: SelectSubset<T, MetricFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Metric.
     * @param {MetricCreateArgs} args - Arguments to create a Metric.
     * @example
     * // Create one Metric
     * const Metric = await prisma.metric.create({
     *   data: {
     *     // ... data to create a Metric
     *   }
     * })
     * 
     */
    create<T extends MetricCreateArgs>(args: SelectSubset<T, MetricCreateArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Metrics.
     * @param {MetricCreateManyArgs} args - Arguments to create many Metrics.
     * @example
     * // Create many Metrics
     * const metric = await prisma.metric.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MetricCreateManyArgs>(args?: SelectSubset<T, MetricCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Metrics and returns the data saved in the database.
     * @param {MetricCreateManyAndReturnArgs} args - Arguments to create many Metrics.
     * @example
     * // Create many Metrics
     * const metric = await prisma.metric.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Metrics and only return the `id`
     * const metricWithIdOnly = await prisma.metric.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MetricCreateManyAndReturnArgs>(args?: SelectSubset<T, MetricCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Metric.
     * @param {MetricDeleteArgs} args - Arguments to delete one Metric.
     * @example
     * // Delete one Metric
     * const Metric = await prisma.metric.delete({
     *   where: {
     *     // ... filter to delete one Metric
     *   }
     * })
     * 
     */
    delete<T extends MetricDeleteArgs>(args: SelectSubset<T, MetricDeleteArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Metric.
     * @param {MetricUpdateArgs} args - Arguments to update one Metric.
     * @example
     * // Update one Metric
     * const metric = await prisma.metric.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MetricUpdateArgs>(args: SelectSubset<T, MetricUpdateArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Metrics.
     * @param {MetricDeleteManyArgs} args - Arguments to filter Metrics to delete.
     * @example
     * // Delete a few Metrics
     * const { count } = await prisma.metric.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MetricDeleteManyArgs>(args?: SelectSubset<T, MetricDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Metrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Metrics
     * const metric = await prisma.metric.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MetricUpdateManyArgs>(args: SelectSubset<T, MetricUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Metrics and returns the data updated in the database.
     * @param {MetricUpdateManyAndReturnArgs} args - Arguments to update many Metrics.
     * @example
     * // Update many Metrics
     * const metric = await prisma.metric.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Metrics and only return the `id`
     * const metricWithIdOnly = await prisma.metric.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MetricUpdateManyAndReturnArgs>(args: SelectSubset<T, MetricUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Metric.
     * @param {MetricUpsertArgs} args - Arguments to update or create a Metric.
     * @example
     * // Update or create a Metric
     * const metric = await prisma.metric.upsert({
     *   create: {
     *     // ... data to create a Metric
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Metric we want to update
     *   }
     * })
     */
    upsert<T extends MetricUpsertArgs>(args: SelectSubset<T, MetricUpsertArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Metrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricCountArgs} args - Arguments to filter Metrics to count.
     * @example
     * // Count the number of Metrics
     * const count = await prisma.metric.count({
     *   where: {
     *     // ... the filter for the Metrics we want to count
     *   }
     * })
    **/
    count<T extends MetricCountArgs>(
      args?: Subset<T, MetricCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MetricCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Metric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MetricAggregateArgs>(args: Subset<T, MetricAggregateArgs>): Prisma.PrismaPromise<GetMetricAggregateType<T>>

    /**
     * Group by Metric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MetricGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MetricGroupByArgs['orderBy'] }
        : { orderBy?: MetricGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MetricGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetricGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Metric model
   */
  readonly fields: MetricFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Metric.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MetricClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    metrics<T extends MetricDataDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MetricDataDefaultArgs<ExtArgs>>): Prisma__MetricDataClient<$Result.GetResult<Prisma.$MetricDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    connection<T extends Metric$connectionArgs<ExtArgs> = {}>(args?: Subset<T, Metric$connectionArgs<ExtArgs>>): Prisma__ConnectionDataClient<$Result.GetResult<Prisma.$ConnectionDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Metric model
   */
  interface MetricFieldRefs {
    readonly id: FieldRef<"Metric", 'String'>
    readonly createdAt: FieldRef<"Metric", 'DateTime'>
    readonly path: FieldRef<"Metric", 'String'>
    readonly userAgent: FieldRef<"Metric", 'String'>
    readonly metricDataId: FieldRef<"Metric", 'String'>
    readonly connectionDataId: FieldRef<"Metric", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Metric findUnique
   */
  export type MetricFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * Filter, which Metric to fetch.
     */
    where: MetricWhereUniqueInput
  }

  /**
   * Metric findUniqueOrThrow
   */
  export type MetricFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * Filter, which Metric to fetch.
     */
    where: MetricWhereUniqueInput
  }

  /**
   * Metric findFirst
   */
  export type MetricFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * Filter, which Metric to fetch.
     */
    where?: MetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrics to fetch.
     */
    orderBy?: MetricOrderByWithRelationInput | MetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Metrics.
     */
    cursor?: MetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Metrics.
     */
    distinct?: MetricScalarFieldEnum | MetricScalarFieldEnum[]
  }

  /**
   * Metric findFirstOrThrow
   */
  export type MetricFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * Filter, which Metric to fetch.
     */
    where?: MetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrics to fetch.
     */
    orderBy?: MetricOrderByWithRelationInput | MetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Metrics.
     */
    cursor?: MetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Metrics.
     */
    distinct?: MetricScalarFieldEnum | MetricScalarFieldEnum[]
  }

  /**
   * Metric findMany
   */
  export type MetricFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * Filter, which Metrics to fetch.
     */
    where?: MetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrics to fetch.
     */
    orderBy?: MetricOrderByWithRelationInput | MetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Metrics.
     */
    cursor?: MetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrics.
     */
    skip?: number
    distinct?: MetricScalarFieldEnum | MetricScalarFieldEnum[]
  }

  /**
   * Metric create
   */
  export type MetricCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * The data needed to create a Metric.
     */
    data: XOR<MetricCreateInput, MetricUncheckedCreateInput>
  }

  /**
   * Metric createMany
   */
  export type MetricCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Metrics.
     */
    data: MetricCreateManyInput | MetricCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Metric createManyAndReturn
   */
  export type MetricCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * The data used to create many Metrics.
     */
    data: MetricCreateManyInput | MetricCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Metric update
   */
  export type MetricUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * The data needed to update a Metric.
     */
    data: XOR<MetricUpdateInput, MetricUncheckedUpdateInput>
    /**
     * Choose, which Metric to update.
     */
    where: MetricWhereUniqueInput
  }

  /**
   * Metric updateMany
   */
  export type MetricUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Metrics.
     */
    data: XOR<MetricUpdateManyMutationInput, MetricUncheckedUpdateManyInput>
    /**
     * Filter which Metrics to update
     */
    where?: MetricWhereInput
    /**
     * Limit how many Metrics to update.
     */
    limit?: number
  }

  /**
   * Metric updateManyAndReturn
   */
  export type MetricUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * The data used to update Metrics.
     */
    data: XOR<MetricUpdateManyMutationInput, MetricUncheckedUpdateManyInput>
    /**
     * Filter which Metrics to update
     */
    where?: MetricWhereInput
    /**
     * Limit how many Metrics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Metric upsert
   */
  export type MetricUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * The filter to search for the Metric to update in case it exists.
     */
    where: MetricWhereUniqueInput
    /**
     * In case the Metric found by the `where` argument doesn't exist, create a new Metric with this data.
     */
    create: XOR<MetricCreateInput, MetricUncheckedCreateInput>
    /**
     * In case the Metric was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MetricUpdateInput, MetricUncheckedUpdateInput>
  }

  /**
   * Metric delete
   */
  export type MetricDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * Filter which Metric to delete.
     */
    where: MetricWhereUniqueInput
  }

  /**
   * Metric deleteMany
   */
  export type MetricDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Metrics to delete
     */
    where?: MetricWhereInput
    /**
     * Limit how many Metrics to delete.
     */
    limit?: number
  }

  /**
   * Metric.connection
   */
  export type Metric$connectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionData
     */
    select?: ConnectionDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectionData
     */
    omit?: ConnectionDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionDataInclude<ExtArgs> | null
    where?: ConnectionDataWhereInput
  }

  /**
   * Metric without action
   */
  export type MetricDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
  }


  /**
   * Model MetricData
   */

  export type AggregateMetricData = {
    _count: MetricDataCountAggregateOutputType | null
    _avg: MetricDataAvgAggregateOutputType | null
    _sum: MetricDataSumAggregateOutputType | null
    _min: MetricDataMinAggregateOutputType | null
    _max: MetricDataMaxAggregateOutputType | null
  }

  export type MetricDataAvgAggregateOutputType = {
    CLS: number | null
    FCP: number | null
    INP: number | null
    LCP: number | null
    TTFB: number | null
  }

  export type MetricDataSumAggregateOutputType = {
    CLS: number | null
    FCP: number | null
    INP: number | null
    LCP: number | null
    TTFB: number | null
  }

  export type MetricDataMinAggregateOutputType = {
    id: string | null
    CLS: number | null
    FCP: number | null
    INP: number | null
    LCP: number | null
    TTFB: number | null
    navigationTimingId: string | null
  }

  export type MetricDataMaxAggregateOutputType = {
    id: string | null
    CLS: number | null
    FCP: number | null
    INP: number | null
    LCP: number | null
    TTFB: number | null
    navigationTimingId: string | null
  }

  export type MetricDataCountAggregateOutputType = {
    id: number
    CLS: number
    FCP: number
    INP: number
    LCP: number
    TTFB: number
    navigationTimingId: number
    _all: number
  }


  export type MetricDataAvgAggregateInputType = {
    CLS?: true
    FCP?: true
    INP?: true
    LCP?: true
    TTFB?: true
  }

  export type MetricDataSumAggregateInputType = {
    CLS?: true
    FCP?: true
    INP?: true
    LCP?: true
    TTFB?: true
  }

  export type MetricDataMinAggregateInputType = {
    id?: true
    CLS?: true
    FCP?: true
    INP?: true
    LCP?: true
    TTFB?: true
    navigationTimingId?: true
  }

  export type MetricDataMaxAggregateInputType = {
    id?: true
    CLS?: true
    FCP?: true
    INP?: true
    LCP?: true
    TTFB?: true
    navigationTimingId?: true
  }

  export type MetricDataCountAggregateInputType = {
    id?: true
    CLS?: true
    FCP?: true
    INP?: true
    LCP?: true
    TTFB?: true
    navigationTimingId?: true
    _all?: true
  }

  export type MetricDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MetricData to aggregate.
     */
    where?: MetricDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetricData to fetch.
     */
    orderBy?: MetricDataOrderByWithRelationInput | MetricDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MetricDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetricData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetricData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MetricData
    **/
    _count?: true | MetricDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MetricDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MetricDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MetricDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MetricDataMaxAggregateInputType
  }

  export type GetMetricDataAggregateType<T extends MetricDataAggregateArgs> = {
        [P in keyof T & keyof AggregateMetricData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMetricData[P]>
      : GetScalarType<T[P], AggregateMetricData[P]>
  }




  export type MetricDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetricDataWhereInput
    orderBy?: MetricDataOrderByWithAggregationInput | MetricDataOrderByWithAggregationInput[]
    by: MetricDataScalarFieldEnum[] | MetricDataScalarFieldEnum
    having?: MetricDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MetricDataCountAggregateInputType | true
    _avg?: MetricDataAvgAggregateInputType
    _sum?: MetricDataSumAggregateInputType
    _min?: MetricDataMinAggregateInputType
    _max?: MetricDataMaxAggregateInputType
  }

  export type MetricDataGroupByOutputType = {
    id: string
    CLS: number | null
    FCP: number | null
    INP: number | null
    LCP: number | null
    TTFB: number | null
    navigationTimingId: string
    _count: MetricDataCountAggregateOutputType | null
    _avg: MetricDataAvgAggregateOutputType | null
    _sum: MetricDataSumAggregateOutputType | null
    _min: MetricDataMinAggregateOutputType | null
    _max: MetricDataMaxAggregateOutputType | null
  }

  type GetMetricDataGroupByPayload<T extends MetricDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MetricDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MetricDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MetricDataGroupByOutputType[P]>
            : GetScalarType<T[P], MetricDataGroupByOutputType[P]>
        }
      >
    >


  export type MetricDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    CLS?: boolean
    FCP?: boolean
    INP?: boolean
    LCP?: boolean
    TTFB?: boolean
    navigationTimingId?: boolean
    navigationTiming?: boolean | NavigationTimingDefaultArgs<ExtArgs>
    metric?: boolean | MetricData$metricArgs<ExtArgs>
  }, ExtArgs["result"]["metricData"]>

  export type MetricDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    CLS?: boolean
    FCP?: boolean
    INP?: boolean
    LCP?: boolean
    TTFB?: boolean
    navigationTimingId?: boolean
    navigationTiming?: boolean | NavigationTimingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metricData"]>

  export type MetricDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    CLS?: boolean
    FCP?: boolean
    INP?: boolean
    LCP?: boolean
    TTFB?: boolean
    navigationTimingId?: boolean
    navigationTiming?: boolean | NavigationTimingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metricData"]>

  export type MetricDataSelectScalar = {
    id?: boolean
    CLS?: boolean
    FCP?: boolean
    INP?: boolean
    LCP?: boolean
    TTFB?: boolean
    navigationTimingId?: boolean
  }

  export type MetricDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "CLS" | "FCP" | "INP" | "LCP" | "TTFB" | "navigationTimingId", ExtArgs["result"]["metricData"]>
  export type MetricDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    navigationTiming?: boolean | NavigationTimingDefaultArgs<ExtArgs>
    metric?: boolean | MetricData$metricArgs<ExtArgs>
  }
  export type MetricDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    navigationTiming?: boolean | NavigationTimingDefaultArgs<ExtArgs>
  }
  export type MetricDataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    navigationTiming?: boolean | NavigationTimingDefaultArgs<ExtArgs>
  }

  export type $MetricDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MetricData"
    objects: {
      navigationTiming: Prisma.$NavigationTimingPayload<ExtArgs>
      metric: Prisma.$MetricPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      CLS: number | null
      FCP: number | null
      INP: number | null
      LCP: number | null
      TTFB: number | null
      navigationTimingId: string
    }, ExtArgs["result"]["metricData"]>
    composites: {}
  }

  type MetricDataGetPayload<S extends boolean | null | undefined | MetricDataDefaultArgs> = $Result.GetResult<Prisma.$MetricDataPayload, S>

  type MetricDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MetricDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MetricDataCountAggregateInputType | true
    }

  export interface MetricDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MetricData'], meta: { name: 'MetricData' } }
    /**
     * Find zero or one MetricData that matches the filter.
     * @param {MetricDataFindUniqueArgs} args - Arguments to find a MetricData
     * @example
     * // Get one MetricData
     * const metricData = await prisma.metricData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MetricDataFindUniqueArgs>(args: SelectSubset<T, MetricDataFindUniqueArgs<ExtArgs>>): Prisma__MetricDataClient<$Result.GetResult<Prisma.$MetricDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MetricData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MetricDataFindUniqueOrThrowArgs} args - Arguments to find a MetricData
     * @example
     * // Get one MetricData
     * const metricData = await prisma.metricData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MetricDataFindUniqueOrThrowArgs>(args: SelectSubset<T, MetricDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MetricDataClient<$Result.GetResult<Prisma.$MetricDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MetricData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricDataFindFirstArgs} args - Arguments to find a MetricData
     * @example
     * // Get one MetricData
     * const metricData = await prisma.metricData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MetricDataFindFirstArgs>(args?: SelectSubset<T, MetricDataFindFirstArgs<ExtArgs>>): Prisma__MetricDataClient<$Result.GetResult<Prisma.$MetricDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MetricData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricDataFindFirstOrThrowArgs} args - Arguments to find a MetricData
     * @example
     * // Get one MetricData
     * const metricData = await prisma.metricData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MetricDataFindFirstOrThrowArgs>(args?: SelectSubset<T, MetricDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__MetricDataClient<$Result.GetResult<Prisma.$MetricDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MetricData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MetricData
     * const metricData = await prisma.metricData.findMany()
     * 
     * // Get first 10 MetricData
     * const metricData = await prisma.metricData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const metricDataWithIdOnly = await prisma.metricData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MetricDataFindManyArgs>(args?: SelectSubset<T, MetricDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MetricData.
     * @param {MetricDataCreateArgs} args - Arguments to create a MetricData.
     * @example
     * // Create one MetricData
     * const MetricData = await prisma.metricData.create({
     *   data: {
     *     // ... data to create a MetricData
     *   }
     * })
     * 
     */
    create<T extends MetricDataCreateArgs>(args: SelectSubset<T, MetricDataCreateArgs<ExtArgs>>): Prisma__MetricDataClient<$Result.GetResult<Prisma.$MetricDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MetricData.
     * @param {MetricDataCreateManyArgs} args - Arguments to create many MetricData.
     * @example
     * // Create many MetricData
     * const metricData = await prisma.metricData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MetricDataCreateManyArgs>(args?: SelectSubset<T, MetricDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MetricData and returns the data saved in the database.
     * @param {MetricDataCreateManyAndReturnArgs} args - Arguments to create many MetricData.
     * @example
     * // Create many MetricData
     * const metricData = await prisma.metricData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MetricData and only return the `id`
     * const metricDataWithIdOnly = await prisma.metricData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MetricDataCreateManyAndReturnArgs>(args?: SelectSubset<T, MetricDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MetricData.
     * @param {MetricDataDeleteArgs} args - Arguments to delete one MetricData.
     * @example
     * // Delete one MetricData
     * const MetricData = await prisma.metricData.delete({
     *   where: {
     *     // ... filter to delete one MetricData
     *   }
     * })
     * 
     */
    delete<T extends MetricDataDeleteArgs>(args: SelectSubset<T, MetricDataDeleteArgs<ExtArgs>>): Prisma__MetricDataClient<$Result.GetResult<Prisma.$MetricDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MetricData.
     * @param {MetricDataUpdateArgs} args - Arguments to update one MetricData.
     * @example
     * // Update one MetricData
     * const metricData = await prisma.metricData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MetricDataUpdateArgs>(args: SelectSubset<T, MetricDataUpdateArgs<ExtArgs>>): Prisma__MetricDataClient<$Result.GetResult<Prisma.$MetricDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MetricData.
     * @param {MetricDataDeleteManyArgs} args - Arguments to filter MetricData to delete.
     * @example
     * // Delete a few MetricData
     * const { count } = await prisma.metricData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MetricDataDeleteManyArgs>(args?: SelectSubset<T, MetricDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MetricData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MetricData
     * const metricData = await prisma.metricData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MetricDataUpdateManyArgs>(args: SelectSubset<T, MetricDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MetricData and returns the data updated in the database.
     * @param {MetricDataUpdateManyAndReturnArgs} args - Arguments to update many MetricData.
     * @example
     * // Update many MetricData
     * const metricData = await prisma.metricData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MetricData and only return the `id`
     * const metricDataWithIdOnly = await prisma.metricData.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MetricDataUpdateManyAndReturnArgs>(args: SelectSubset<T, MetricDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MetricData.
     * @param {MetricDataUpsertArgs} args - Arguments to update or create a MetricData.
     * @example
     * // Update or create a MetricData
     * const metricData = await prisma.metricData.upsert({
     *   create: {
     *     // ... data to create a MetricData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MetricData we want to update
     *   }
     * })
     */
    upsert<T extends MetricDataUpsertArgs>(args: SelectSubset<T, MetricDataUpsertArgs<ExtArgs>>): Prisma__MetricDataClient<$Result.GetResult<Prisma.$MetricDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MetricData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricDataCountArgs} args - Arguments to filter MetricData to count.
     * @example
     * // Count the number of MetricData
     * const count = await prisma.metricData.count({
     *   where: {
     *     // ... the filter for the MetricData we want to count
     *   }
     * })
    **/
    count<T extends MetricDataCountArgs>(
      args?: Subset<T, MetricDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MetricDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MetricData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MetricDataAggregateArgs>(args: Subset<T, MetricDataAggregateArgs>): Prisma.PrismaPromise<GetMetricDataAggregateType<T>>

    /**
     * Group by MetricData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MetricDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MetricDataGroupByArgs['orderBy'] }
        : { orderBy?: MetricDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MetricDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetricDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MetricData model
   */
  readonly fields: MetricDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MetricData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MetricDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    navigationTiming<T extends NavigationTimingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NavigationTimingDefaultArgs<ExtArgs>>): Prisma__NavigationTimingClient<$Result.GetResult<Prisma.$NavigationTimingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    metric<T extends MetricData$metricArgs<ExtArgs> = {}>(args?: Subset<T, MetricData$metricArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MetricData model
   */
  interface MetricDataFieldRefs {
    readonly id: FieldRef<"MetricData", 'String'>
    readonly CLS: FieldRef<"MetricData", 'Float'>
    readonly FCP: FieldRef<"MetricData", 'Float'>
    readonly INP: FieldRef<"MetricData", 'Float'>
    readonly LCP: FieldRef<"MetricData", 'Float'>
    readonly TTFB: FieldRef<"MetricData", 'Float'>
    readonly navigationTimingId: FieldRef<"MetricData", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MetricData findUnique
   */
  export type MetricDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricData
     */
    select?: MetricDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricData
     */
    omit?: MetricDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricDataInclude<ExtArgs> | null
    /**
     * Filter, which MetricData to fetch.
     */
    where: MetricDataWhereUniqueInput
  }

  /**
   * MetricData findUniqueOrThrow
   */
  export type MetricDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricData
     */
    select?: MetricDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricData
     */
    omit?: MetricDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricDataInclude<ExtArgs> | null
    /**
     * Filter, which MetricData to fetch.
     */
    where: MetricDataWhereUniqueInput
  }

  /**
   * MetricData findFirst
   */
  export type MetricDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricData
     */
    select?: MetricDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricData
     */
    omit?: MetricDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricDataInclude<ExtArgs> | null
    /**
     * Filter, which MetricData to fetch.
     */
    where?: MetricDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetricData to fetch.
     */
    orderBy?: MetricDataOrderByWithRelationInput | MetricDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MetricData.
     */
    cursor?: MetricDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetricData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetricData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MetricData.
     */
    distinct?: MetricDataScalarFieldEnum | MetricDataScalarFieldEnum[]
  }

  /**
   * MetricData findFirstOrThrow
   */
  export type MetricDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricData
     */
    select?: MetricDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricData
     */
    omit?: MetricDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricDataInclude<ExtArgs> | null
    /**
     * Filter, which MetricData to fetch.
     */
    where?: MetricDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetricData to fetch.
     */
    orderBy?: MetricDataOrderByWithRelationInput | MetricDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MetricData.
     */
    cursor?: MetricDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetricData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetricData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MetricData.
     */
    distinct?: MetricDataScalarFieldEnum | MetricDataScalarFieldEnum[]
  }

  /**
   * MetricData findMany
   */
  export type MetricDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricData
     */
    select?: MetricDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricData
     */
    omit?: MetricDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricDataInclude<ExtArgs> | null
    /**
     * Filter, which MetricData to fetch.
     */
    where?: MetricDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetricData to fetch.
     */
    orderBy?: MetricDataOrderByWithRelationInput | MetricDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MetricData.
     */
    cursor?: MetricDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetricData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetricData.
     */
    skip?: number
    distinct?: MetricDataScalarFieldEnum | MetricDataScalarFieldEnum[]
  }

  /**
   * MetricData create
   */
  export type MetricDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricData
     */
    select?: MetricDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricData
     */
    omit?: MetricDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricDataInclude<ExtArgs> | null
    /**
     * The data needed to create a MetricData.
     */
    data: XOR<MetricDataCreateInput, MetricDataUncheckedCreateInput>
  }

  /**
   * MetricData createMany
   */
  export type MetricDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MetricData.
     */
    data: MetricDataCreateManyInput | MetricDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MetricData createManyAndReturn
   */
  export type MetricDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricData
     */
    select?: MetricDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MetricData
     */
    omit?: MetricDataOmit<ExtArgs> | null
    /**
     * The data used to create many MetricData.
     */
    data: MetricDataCreateManyInput | MetricDataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricDataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MetricData update
   */
  export type MetricDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricData
     */
    select?: MetricDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricData
     */
    omit?: MetricDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricDataInclude<ExtArgs> | null
    /**
     * The data needed to update a MetricData.
     */
    data: XOR<MetricDataUpdateInput, MetricDataUncheckedUpdateInput>
    /**
     * Choose, which MetricData to update.
     */
    where: MetricDataWhereUniqueInput
  }

  /**
   * MetricData updateMany
   */
  export type MetricDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MetricData.
     */
    data: XOR<MetricDataUpdateManyMutationInput, MetricDataUncheckedUpdateManyInput>
    /**
     * Filter which MetricData to update
     */
    where?: MetricDataWhereInput
    /**
     * Limit how many MetricData to update.
     */
    limit?: number
  }

  /**
   * MetricData updateManyAndReturn
   */
  export type MetricDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricData
     */
    select?: MetricDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MetricData
     */
    omit?: MetricDataOmit<ExtArgs> | null
    /**
     * The data used to update MetricData.
     */
    data: XOR<MetricDataUpdateManyMutationInput, MetricDataUncheckedUpdateManyInput>
    /**
     * Filter which MetricData to update
     */
    where?: MetricDataWhereInput
    /**
     * Limit how many MetricData to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricDataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MetricData upsert
   */
  export type MetricDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricData
     */
    select?: MetricDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricData
     */
    omit?: MetricDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricDataInclude<ExtArgs> | null
    /**
     * The filter to search for the MetricData to update in case it exists.
     */
    where: MetricDataWhereUniqueInput
    /**
     * In case the MetricData found by the `where` argument doesn't exist, create a new MetricData with this data.
     */
    create: XOR<MetricDataCreateInput, MetricDataUncheckedCreateInput>
    /**
     * In case the MetricData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MetricDataUpdateInput, MetricDataUncheckedUpdateInput>
  }

  /**
   * MetricData delete
   */
  export type MetricDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricData
     */
    select?: MetricDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricData
     */
    omit?: MetricDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricDataInclude<ExtArgs> | null
    /**
     * Filter which MetricData to delete.
     */
    where: MetricDataWhereUniqueInput
  }

  /**
   * MetricData deleteMany
   */
  export type MetricDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MetricData to delete
     */
    where?: MetricDataWhereInput
    /**
     * Limit how many MetricData to delete.
     */
    limit?: number
  }

  /**
   * MetricData.metric
   */
  export type MetricData$metricArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    where?: MetricWhereInput
  }

  /**
   * MetricData without action
   */
  export type MetricDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricData
     */
    select?: MetricDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricData
     */
    omit?: MetricDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricDataInclude<ExtArgs> | null
  }


  /**
   * Model NavigationTiming
   */

  export type AggregateNavigationTiming = {
    _count: NavigationTimingCountAggregateOutputType | null
    _avg: NavigationTimingAvgAggregateOutputType | null
    _sum: NavigationTimingSumAggregateOutputType | null
    _min: NavigationTimingMinAggregateOutputType | null
    _max: NavigationTimingMaxAggregateOutputType | null
  }

  export type NavigationTimingAvgAggregateOutputType = {
    domComplete: number | null
    domInteractive: number | null
    domContentLoadedEventEnd: number | null
    loadEventEnd: number | null
  }

  export type NavigationTimingSumAggregateOutputType = {
    domComplete: number | null
    domInteractive: number | null
    domContentLoadedEventEnd: number | null
    loadEventEnd: number | null
  }

  export type NavigationTimingMinAggregateOutputType = {
    id: string | null
    domComplete: number | null
    domInteractive: number | null
    domContentLoadedEventEnd: number | null
    loadEventEnd: number | null
  }

  export type NavigationTimingMaxAggregateOutputType = {
    id: string | null
    domComplete: number | null
    domInteractive: number | null
    domContentLoadedEventEnd: number | null
    loadEventEnd: number | null
  }

  export type NavigationTimingCountAggregateOutputType = {
    id: number
    domComplete: number
    domInteractive: number
    domContentLoadedEventEnd: number
    loadEventEnd: number
    _all: number
  }


  export type NavigationTimingAvgAggregateInputType = {
    domComplete?: true
    domInteractive?: true
    domContentLoadedEventEnd?: true
    loadEventEnd?: true
  }

  export type NavigationTimingSumAggregateInputType = {
    domComplete?: true
    domInteractive?: true
    domContentLoadedEventEnd?: true
    loadEventEnd?: true
  }

  export type NavigationTimingMinAggregateInputType = {
    id?: true
    domComplete?: true
    domInteractive?: true
    domContentLoadedEventEnd?: true
    loadEventEnd?: true
  }

  export type NavigationTimingMaxAggregateInputType = {
    id?: true
    domComplete?: true
    domInteractive?: true
    domContentLoadedEventEnd?: true
    loadEventEnd?: true
  }

  export type NavigationTimingCountAggregateInputType = {
    id?: true
    domComplete?: true
    domInteractive?: true
    domContentLoadedEventEnd?: true
    loadEventEnd?: true
    _all?: true
  }

  export type NavigationTimingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NavigationTiming to aggregate.
     */
    where?: NavigationTimingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NavigationTimings to fetch.
     */
    orderBy?: NavigationTimingOrderByWithRelationInput | NavigationTimingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NavigationTimingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NavigationTimings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NavigationTimings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NavigationTimings
    **/
    _count?: true | NavigationTimingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NavigationTimingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NavigationTimingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NavigationTimingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NavigationTimingMaxAggregateInputType
  }

  export type GetNavigationTimingAggregateType<T extends NavigationTimingAggregateArgs> = {
        [P in keyof T & keyof AggregateNavigationTiming]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNavigationTiming[P]>
      : GetScalarType<T[P], AggregateNavigationTiming[P]>
  }




  export type NavigationTimingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NavigationTimingWhereInput
    orderBy?: NavigationTimingOrderByWithAggregationInput | NavigationTimingOrderByWithAggregationInput[]
    by: NavigationTimingScalarFieldEnum[] | NavigationTimingScalarFieldEnum
    having?: NavigationTimingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NavigationTimingCountAggregateInputType | true
    _avg?: NavigationTimingAvgAggregateInputType
    _sum?: NavigationTimingSumAggregateInputType
    _min?: NavigationTimingMinAggregateInputType
    _max?: NavigationTimingMaxAggregateInputType
  }

  export type NavigationTimingGroupByOutputType = {
    id: string
    domComplete: number | null
    domInteractive: number | null
    domContentLoadedEventEnd: number | null
    loadEventEnd: number | null
    _count: NavigationTimingCountAggregateOutputType | null
    _avg: NavigationTimingAvgAggregateOutputType | null
    _sum: NavigationTimingSumAggregateOutputType | null
    _min: NavigationTimingMinAggregateOutputType | null
    _max: NavigationTimingMaxAggregateOutputType | null
  }

  type GetNavigationTimingGroupByPayload<T extends NavigationTimingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NavigationTimingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NavigationTimingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NavigationTimingGroupByOutputType[P]>
            : GetScalarType<T[P], NavigationTimingGroupByOutputType[P]>
        }
      >
    >


  export type NavigationTimingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domComplete?: boolean
    domInteractive?: boolean
    domContentLoadedEventEnd?: boolean
    loadEventEnd?: boolean
    metricData?: boolean | NavigationTiming$metricDataArgs<ExtArgs>
  }, ExtArgs["result"]["navigationTiming"]>

  export type NavigationTimingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domComplete?: boolean
    domInteractive?: boolean
    domContentLoadedEventEnd?: boolean
    loadEventEnd?: boolean
  }, ExtArgs["result"]["navigationTiming"]>

  export type NavigationTimingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domComplete?: boolean
    domInteractive?: boolean
    domContentLoadedEventEnd?: boolean
    loadEventEnd?: boolean
  }, ExtArgs["result"]["navigationTiming"]>

  export type NavigationTimingSelectScalar = {
    id?: boolean
    domComplete?: boolean
    domInteractive?: boolean
    domContentLoadedEventEnd?: boolean
    loadEventEnd?: boolean
  }

  export type NavigationTimingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "domComplete" | "domInteractive" | "domContentLoadedEventEnd" | "loadEventEnd", ExtArgs["result"]["navigationTiming"]>
  export type NavigationTimingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    metricData?: boolean | NavigationTiming$metricDataArgs<ExtArgs>
  }
  export type NavigationTimingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type NavigationTimingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $NavigationTimingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NavigationTiming"
    objects: {
      metricData: Prisma.$MetricDataPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      domComplete: number | null
      domInteractive: number | null
      domContentLoadedEventEnd: number | null
      loadEventEnd: number | null
    }, ExtArgs["result"]["navigationTiming"]>
    composites: {}
  }

  type NavigationTimingGetPayload<S extends boolean | null | undefined | NavigationTimingDefaultArgs> = $Result.GetResult<Prisma.$NavigationTimingPayload, S>

  type NavigationTimingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NavigationTimingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NavigationTimingCountAggregateInputType | true
    }

  export interface NavigationTimingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NavigationTiming'], meta: { name: 'NavigationTiming' } }
    /**
     * Find zero or one NavigationTiming that matches the filter.
     * @param {NavigationTimingFindUniqueArgs} args - Arguments to find a NavigationTiming
     * @example
     * // Get one NavigationTiming
     * const navigationTiming = await prisma.navigationTiming.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NavigationTimingFindUniqueArgs>(args: SelectSubset<T, NavigationTimingFindUniqueArgs<ExtArgs>>): Prisma__NavigationTimingClient<$Result.GetResult<Prisma.$NavigationTimingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NavigationTiming that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NavigationTimingFindUniqueOrThrowArgs} args - Arguments to find a NavigationTiming
     * @example
     * // Get one NavigationTiming
     * const navigationTiming = await prisma.navigationTiming.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NavigationTimingFindUniqueOrThrowArgs>(args: SelectSubset<T, NavigationTimingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NavigationTimingClient<$Result.GetResult<Prisma.$NavigationTimingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NavigationTiming that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavigationTimingFindFirstArgs} args - Arguments to find a NavigationTiming
     * @example
     * // Get one NavigationTiming
     * const navigationTiming = await prisma.navigationTiming.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NavigationTimingFindFirstArgs>(args?: SelectSubset<T, NavigationTimingFindFirstArgs<ExtArgs>>): Prisma__NavigationTimingClient<$Result.GetResult<Prisma.$NavigationTimingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NavigationTiming that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavigationTimingFindFirstOrThrowArgs} args - Arguments to find a NavigationTiming
     * @example
     * // Get one NavigationTiming
     * const navigationTiming = await prisma.navigationTiming.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NavigationTimingFindFirstOrThrowArgs>(args?: SelectSubset<T, NavigationTimingFindFirstOrThrowArgs<ExtArgs>>): Prisma__NavigationTimingClient<$Result.GetResult<Prisma.$NavigationTimingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NavigationTimings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavigationTimingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NavigationTimings
     * const navigationTimings = await prisma.navigationTiming.findMany()
     * 
     * // Get first 10 NavigationTimings
     * const navigationTimings = await prisma.navigationTiming.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const navigationTimingWithIdOnly = await prisma.navigationTiming.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NavigationTimingFindManyArgs>(args?: SelectSubset<T, NavigationTimingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NavigationTimingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NavigationTiming.
     * @param {NavigationTimingCreateArgs} args - Arguments to create a NavigationTiming.
     * @example
     * // Create one NavigationTiming
     * const NavigationTiming = await prisma.navigationTiming.create({
     *   data: {
     *     // ... data to create a NavigationTiming
     *   }
     * })
     * 
     */
    create<T extends NavigationTimingCreateArgs>(args: SelectSubset<T, NavigationTimingCreateArgs<ExtArgs>>): Prisma__NavigationTimingClient<$Result.GetResult<Prisma.$NavigationTimingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NavigationTimings.
     * @param {NavigationTimingCreateManyArgs} args - Arguments to create many NavigationTimings.
     * @example
     * // Create many NavigationTimings
     * const navigationTiming = await prisma.navigationTiming.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NavigationTimingCreateManyArgs>(args?: SelectSubset<T, NavigationTimingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NavigationTimings and returns the data saved in the database.
     * @param {NavigationTimingCreateManyAndReturnArgs} args - Arguments to create many NavigationTimings.
     * @example
     * // Create many NavigationTimings
     * const navigationTiming = await prisma.navigationTiming.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NavigationTimings and only return the `id`
     * const navigationTimingWithIdOnly = await prisma.navigationTiming.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NavigationTimingCreateManyAndReturnArgs>(args?: SelectSubset<T, NavigationTimingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NavigationTimingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NavigationTiming.
     * @param {NavigationTimingDeleteArgs} args - Arguments to delete one NavigationTiming.
     * @example
     * // Delete one NavigationTiming
     * const NavigationTiming = await prisma.navigationTiming.delete({
     *   where: {
     *     // ... filter to delete one NavigationTiming
     *   }
     * })
     * 
     */
    delete<T extends NavigationTimingDeleteArgs>(args: SelectSubset<T, NavigationTimingDeleteArgs<ExtArgs>>): Prisma__NavigationTimingClient<$Result.GetResult<Prisma.$NavigationTimingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NavigationTiming.
     * @param {NavigationTimingUpdateArgs} args - Arguments to update one NavigationTiming.
     * @example
     * // Update one NavigationTiming
     * const navigationTiming = await prisma.navigationTiming.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NavigationTimingUpdateArgs>(args: SelectSubset<T, NavigationTimingUpdateArgs<ExtArgs>>): Prisma__NavigationTimingClient<$Result.GetResult<Prisma.$NavigationTimingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NavigationTimings.
     * @param {NavigationTimingDeleteManyArgs} args - Arguments to filter NavigationTimings to delete.
     * @example
     * // Delete a few NavigationTimings
     * const { count } = await prisma.navigationTiming.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NavigationTimingDeleteManyArgs>(args?: SelectSubset<T, NavigationTimingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NavigationTimings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavigationTimingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NavigationTimings
     * const navigationTiming = await prisma.navigationTiming.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NavigationTimingUpdateManyArgs>(args: SelectSubset<T, NavigationTimingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NavigationTimings and returns the data updated in the database.
     * @param {NavigationTimingUpdateManyAndReturnArgs} args - Arguments to update many NavigationTimings.
     * @example
     * // Update many NavigationTimings
     * const navigationTiming = await prisma.navigationTiming.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NavigationTimings and only return the `id`
     * const navigationTimingWithIdOnly = await prisma.navigationTiming.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NavigationTimingUpdateManyAndReturnArgs>(args: SelectSubset<T, NavigationTimingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NavigationTimingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NavigationTiming.
     * @param {NavigationTimingUpsertArgs} args - Arguments to update or create a NavigationTiming.
     * @example
     * // Update or create a NavigationTiming
     * const navigationTiming = await prisma.navigationTiming.upsert({
     *   create: {
     *     // ... data to create a NavigationTiming
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NavigationTiming we want to update
     *   }
     * })
     */
    upsert<T extends NavigationTimingUpsertArgs>(args: SelectSubset<T, NavigationTimingUpsertArgs<ExtArgs>>): Prisma__NavigationTimingClient<$Result.GetResult<Prisma.$NavigationTimingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NavigationTimings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavigationTimingCountArgs} args - Arguments to filter NavigationTimings to count.
     * @example
     * // Count the number of NavigationTimings
     * const count = await prisma.navigationTiming.count({
     *   where: {
     *     // ... the filter for the NavigationTimings we want to count
     *   }
     * })
    **/
    count<T extends NavigationTimingCountArgs>(
      args?: Subset<T, NavigationTimingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NavigationTimingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NavigationTiming.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavigationTimingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NavigationTimingAggregateArgs>(args: Subset<T, NavigationTimingAggregateArgs>): Prisma.PrismaPromise<GetNavigationTimingAggregateType<T>>

    /**
     * Group by NavigationTiming.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavigationTimingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NavigationTimingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NavigationTimingGroupByArgs['orderBy'] }
        : { orderBy?: NavigationTimingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NavigationTimingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNavigationTimingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NavigationTiming model
   */
  readonly fields: NavigationTimingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NavigationTiming.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NavigationTimingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    metricData<T extends NavigationTiming$metricDataArgs<ExtArgs> = {}>(args?: Subset<T, NavigationTiming$metricDataArgs<ExtArgs>>): Prisma__MetricDataClient<$Result.GetResult<Prisma.$MetricDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NavigationTiming model
   */
  interface NavigationTimingFieldRefs {
    readonly id: FieldRef<"NavigationTiming", 'String'>
    readonly domComplete: FieldRef<"NavigationTiming", 'Float'>
    readonly domInteractive: FieldRef<"NavigationTiming", 'Float'>
    readonly domContentLoadedEventEnd: FieldRef<"NavigationTiming", 'Float'>
    readonly loadEventEnd: FieldRef<"NavigationTiming", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * NavigationTiming findUnique
   */
  export type NavigationTimingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavigationTiming
     */
    select?: NavigationTimingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NavigationTiming
     */
    omit?: NavigationTimingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavigationTimingInclude<ExtArgs> | null
    /**
     * Filter, which NavigationTiming to fetch.
     */
    where: NavigationTimingWhereUniqueInput
  }

  /**
   * NavigationTiming findUniqueOrThrow
   */
  export type NavigationTimingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavigationTiming
     */
    select?: NavigationTimingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NavigationTiming
     */
    omit?: NavigationTimingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavigationTimingInclude<ExtArgs> | null
    /**
     * Filter, which NavigationTiming to fetch.
     */
    where: NavigationTimingWhereUniqueInput
  }

  /**
   * NavigationTiming findFirst
   */
  export type NavigationTimingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavigationTiming
     */
    select?: NavigationTimingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NavigationTiming
     */
    omit?: NavigationTimingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavigationTimingInclude<ExtArgs> | null
    /**
     * Filter, which NavigationTiming to fetch.
     */
    where?: NavigationTimingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NavigationTimings to fetch.
     */
    orderBy?: NavigationTimingOrderByWithRelationInput | NavigationTimingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NavigationTimings.
     */
    cursor?: NavigationTimingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NavigationTimings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NavigationTimings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NavigationTimings.
     */
    distinct?: NavigationTimingScalarFieldEnum | NavigationTimingScalarFieldEnum[]
  }

  /**
   * NavigationTiming findFirstOrThrow
   */
  export type NavigationTimingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavigationTiming
     */
    select?: NavigationTimingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NavigationTiming
     */
    omit?: NavigationTimingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavigationTimingInclude<ExtArgs> | null
    /**
     * Filter, which NavigationTiming to fetch.
     */
    where?: NavigationTimingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NavigationTimings to fetch.
     */
    orderBy?: NavigationTimingOrderByWithRelationInput | NavigationTimingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NavigationTimings.
     */
    cursor?: NavigationTimingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NavigationTimings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NavigationTimings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NavigationTimings.
     */
    distinct?: NavigationTimingScalarFieldEnum | NavigationTimingScalarFieldEnum[]
  }

  /**
   * NavigationTiming findMany
   */
  export type NavigationTimingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavigationTiming
     */
    select?: NavigationTimingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NavigationTiming
     */
    omit?: NavigationTimingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavigationTimingInclude<ExtArgs> | null
    /**
     * Filter, which NavigationTimings to fetch.
     */
    where?: NavigationTimingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NavigationTimings to fetch.
     */
    orderBy?: NavigationTimingOrderByWithRelationInput | NavigationTimingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NavigationTimings.
     */
    cursor?: NavigationTimingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NavigationTimings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NavigationTimings.
     */
    skip?: number
    distinct?: NavigationTimingScalarFieldEnum | NavigationTimingScalarFieldEnum[]
  }

  /**
   * NavigationTiming create
   */
  export type NavigationTimingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavigationTiming
     */
    select?: NavigationTimingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NavigationTiming
     */
    omit?: NavigationTimingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavigationTimingInclude<ExtArgs> | null
    /**
     * The data needed to create a NavigationTiming.
     */
    data?: XOR<NavigationTimingCreateInput, NavigationTimingUncheckedCreateInput>
  }

  /**
   * NavigationTiming createMany
   */
  export type NavigationTimingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NavigationTimings.
     */
    data: NavigationTimingCreateManyInput | NavigationTimingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NavigationTiming createManyAndReturn
   */
  export type NavigationTimingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavigationTiming
     */
    select?: NavigationTimingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NavigationTiming
     */
    omit?: NavigationTimingOmit<ExtArgs> | null
    /**
     * The data used to create many NavigationTimings.
     */
    data: NavigationTimingCreateManyInput | NavigationTimingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NavigationTiming update
   */
  export type NavigationTimingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavigationTiming
     */
    select?: NavigationTimingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NavigationTiming
     */
    omit?: NavigationTimingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavigationTimingInclude<ExtArgs> | null
    /**
     * The data needed to update a NavigationTiming.
     */
    data: XOR<NavigationTimingUpdateInput, NavigationTimingUncheckedUpdateInput>
    /**
     * Choose, which NavigationTiming to update.
     */
    where: NavigationTimingWhereUniqueInput
  }

  /**
   * NavigationTiming updateMany
   */
  export type NavigationTimingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NavigationTimings.
     */
    data: XOR<NavigationTimingUpdateManyMutationInput, NavigationTimingUncheckedUpdateManyInput>
    /**
     * Filter which NavigationTimings to update
     */
    where?: NavigationTimingWhereInput
    /**
     * Limit how many NavigationTimings to update.
     */
    limit?: number
  }

  /**
   * NavigationTiming updateManyAndReturn
   */
  export type NavigationTimingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavigationTiming
     */
    select?: NavigationTimingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NavigationTiming
     */
    omit?: NavigationTimingOmit<ExtArgs> | null
    /**
     * The data used to update NavigationTimings.
     */
    data: XOR<NavigationTimingUpdateManyMutationInput, NavigationTimingUncheckedUpdateManyInput>
    /**
     * Filter which NavigationTimings to update
     */
    where?: NavigationTimingWhereInput
    /**
     * Limit how many NavigationTimings to update.
     */
    limit?: number
  }

  /**
   * NavigationTiming upsert
   */
  export type NavigationTimingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavigationTiming
     */
    select?: NavigationTimingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NavigationTiming
     */
    omit?: NavigationTimingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavigationTimingInclude<ExtArgs> | null
    /**
     * The filter to search for the NavigationTiming to update in case it exists.
     */
    where: NavigationTimingWhereUniqueInput
    /**
     * In case the NavigationTiming found by the `where` argument doesn't exist, create a new NavigationTiming with this data.
     */
    create: XOR<NavigationTimingCreateInput, NavigationTimingUncheckedCreateInput>
    /**
     * In case the NavigationTiming was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NavigationTimingUpdateInput, NavigationTimingUncheckedUpdateInput>
  }

  /**
   * NavigationTiming delete
   */
  export type NavigationTimingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavigationTiming
     */
    select?: NavigationTimingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NavigationTiming
     */
    omit?: NavigationTimingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavigationTimingInclude<ExtArgs> | null
    /**
     * Filter which NavigationTiming to delete.
     */
    where: NavigationTimingWhereUniqueInput
  }

  /**
   * NavigationTiming deleteMany
   */
  export type NavigationTimingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NavigationTimings to delete
     */
    where?: NavigationTimingWhereInput
    /**
     * Limit how many NavigationTimings to delete.
     */
    limit?: number
  }

  /**
   * NavigationTiming.metricData
   */
  export type NavigationTiming$metricDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricData
     */
    select?: MetricDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricData
     */
    omit?: MetricDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricDataInclude<ExtArgs> | null
    where?: MetricDataWhereInput
  }

  /**
   * NavigationTiming without action
   */
  export type NavigationTimingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavigationTiming
     */
    select?: NavigationTimingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NavigationTiming
     */
    omit?: NavigationTimingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavigationTimingInclude<ExtArgs> | null
  }


  /**
   * Model ConnectionData
   */

  export type AggregateConnectionData = {
    _count: ConnectionDataCountAggregateOutputType | null
    _avg: ConnectionDataAvgAggregateOutputType | null
    _sum: ConnectionDataSumAggregateOutputType | null
    _min: ConnectionDataMinAggregateOutputType | null
    _max: ConnectionDataMaxAggregateOutputType | null
  }

  export type ConnectionDataAvgAggregateOutputType = {
    rtt: number | null
    downlink: number | null
  }

  export type ConnectionDataSumAggregateOutputType = {
    rtt: number | null
    downlink: number | null
  }

  export type ConnectionDataMinAggregateOutputType = {
    id: string | null
    effectiveType: string | null
    rtt: number | null
    downlink: number | null
  }

  export type ConnectionDataMaxAggregateOutputType = {
    id: string | null
    effectiveType: string | null
    rtt: number | null
    downlink: number | null
  }

  export type ConnectionDataCountAggregateOutputType = {
    id: number
    effectiveType: number
    rtt: number
    downlink: number
    _all: number
  }


  export type ConnectionDataAvgAggregateInputType = {
    rtt?: true
    downlink?: true
  }

  export type ConnectionDataSumAggregateInputType = {
    rtt?: true
    downlink?: true
  }

  export type ConnectionDataMinAggregateInputType = {
    id?: true
    effectiveType?: true
    rtt?: true
    downlink?: true
  }

  export type ConnectionDataMaxAggregateInputType = {
    id?: true
    effectiveType?: true
    rtt?: true
    downlink?: true
  }

  export type ConnectionDataCountAggregateInputType = {
    id?: true
    effectiveType?: true
    rtt?: true
    downlink?: true
    _all?: true
  }

  export type ConnectionDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConnectionData to aggregate.
     */
    where?: ConnectionDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConnectionData to fetch.
     */
    orderBy?: ConnectionDataOrderByWithRelationInput | ConnectionDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConnectionDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConnectionData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConnectionData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConnectionData
    **/
    _count?: true | ConnectionDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConnectionDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConnectionDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConnectionDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConnectionDataMaxAggregateInputType
  }

  export type GetConnectionDataAggregateType<T extends ConnectionDataAggregateArgs> = {
        [P in keyof T & keyof AggregateConnectionData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConnectionData[P]>
      : GetScalarType<T[P], AggregateConnectionData[P]>
  }




  export type ConnectionDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConnectionDataWhereInput
    orderBy?: ConnectionDataOrderByWithAggregationInput | ConnectionDataOrderByWithAggregationInput[]
    by: ConnectionDataScalarFieldEnum[] | ConnectionDataScalarFieldEnum
    having?: ConnectionDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConnectionDataCountAggregateInputType | true
    _avg?: ConnectionDataAvgAggregateInputType
    _sum?: ConnectionDataSumAggregateInputType
    _min?: ConnectionDataMinAggregateInputType
    _max?: ConnectionDataMaxAggregateInputType
  }

  export type ConnectionDataGroupByOutputType = {
    id: string
    effectiveType: string | null
    rtt: number | null
    downlink: number | null
    _count: ConnectionDataCountAggregateOutputType | null
    _avg: ConnectionDataAvgAggregateOutputType | null
    _sum: ConnectionDataSumAggregateOutputType | null
    _min: ConnectionDataMinAggregateOutputType | null
    _max: ConnectionDataMaxAggregateOutputType | null
  }

  type GetConnectionDataGroupByPayload<T extends ConnectionDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConnectionDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConnectionDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConnectionDataGroupByOutputType[P]>
            : GetScalarType<T[P], ConnectionDataGroupByOutputType[P]>
        }
      >
    >


  export type ConnectionDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    effectiveType?: boolean
    rtt?: boolean
    downlink?: boolean
    metric?: boolean | ConnectionData$metricArgs<ExtArgs>
  }, ExtArgs["result"]["connectionData"]>

  export type ConnectionDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    effectiveType?: boolean
    rtt?: boolean
    downlink?: boolean
  }, ExtArgs["result"]["connectionData"]>

  export type ConnectionDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    effectiveType?: boolean
    rtt?: boolean
    downlink?: boolean
  }, ExtArgs["result"]["connectionData"]>

  export type ConnectionDataSelectScalar = {
    id?: boolean
    effectiveType?: boolean
    rtt?: boolean
    downlink?: boolean
  }

  export type ConnectionDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "effectiveType" | "rtt" | "downlink", ExtArgs["result"]["connectionData"]>
  export type ConnectionDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    metric?: boolean | ConnectionData$metricArgs<ExtArgs>
  }
  export type ConnectionDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ConnectionDataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ConnectionDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConnectionData"
    objects: {
      metric: Prisma.$MetricPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      effectiveType: string | null
      rtt: number | null
      downlink: number | null
    }, ExtArgs["result"]["connectionData"]>
    composites: {}
  }

  type ConnectionDataGetPayload<S extends boolean | null | undefined | ConnectionDataDefaultArgs> = $Result.GetResult<Prisma.$ConnectionDataPayload, S>

  type ConnectionDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConnectionDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConnectionDataCountAggregateInputType | true
    }

  export interface ConnectionDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConnectionData'], meta: { name: 'ConnectionData' } }
    /**
     * Find zero or one ConnectionData that matches the filter.
     * @param {ConnectionDataFindUniqueArgs} args - Arguments to find a ConnectionData
     * @example
     * // Get one ConnectionData
     * const connectionData = await prisma.connectionData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConnectionDataFindUniqueArgs>(args: SelectSubset<T, ConnectionDataFindUniqueArgs<ExtArgs>>): Prisma__ConnectionDataClient<$Result.GetResult<Prisma.$ConnectionDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ConnectionData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConnectionDataFindUniqueOrThrowArgs} args - Arguments to find a ConnectionData
     * @example
     * // Get one ConnectionData
     * const connectionData = await prisma.connectionData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConnectionDataFindUniqueOrThrowArgs>(args: SelectSubset<T, ConnectionDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConnectionDataClient<$Result.GetResult<Prisma.$ConnectionDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConnectionData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionDataFindFirstArgs} args - Arguments to find a ConnectionData
     * @example
     * // Get one ConnectionData
     * const connectionData = await prisma.connectionData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConnectionDataFindFirstArgs>(args?: SelectSubset<T, ConnectionDataFindFirstArgs<ExtArgs>>): Prisma__ConnectionDataClient<$Result.GetResult<Prisma.$ConnectionDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConnectionData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionDataFindFirstOrThrowArgs} args - Arguments to find a ConnectionData
     * @example
     * // Get one ConnectionData
     * const connectionData = await prisma.connectionData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConnectionDataFindFirstOrThrowArgs>(args?: SelectSubset<T, ConnectionDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConnectionDataClient<$Result.GetResult<Prisma.$ConnectionDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ConnectionData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConnectionData
     * const connectionData = await prisma.connectionData.findMany()
     * 
     * // Get first 10 ConnectionData
     * const connectionData = await prisma.connectionData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const connectionDataWithIdOnly = await prisma.connectionData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConnectionDataFindManyArgs>(args?: SelectSubset<T, ConnectionDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectionDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ConnectionData.
     * @param {ConnectionDataCreateArgs} args - Arguments to create a ConnectionData.
     * @example
     * // Create one ConnectionData
     * const ConnectionData = await prisma.connectionData.create({
     *   data: {
     *     // ... data to create a ConnectionData
     *   }
     * })
     * 
     */
    create<T extends ConnectionDataCreateArgs>(args: SelectSubset<T, ConnectionDataCreateArgs<ExtArgs>>): Prisma__ConnectionDataClient<$Result.GetResult<Prisma.$ConnectionDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ConnectionData.
     * @param {ConnectionDataCreateManyArgs} args - Arguments to create many ConnectionData.
     * @example
     * // Create many ConnectionData
     * const connectionData = await prisma.connectionData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConnectionDataCreateManyArgs>(args?: SelectSubset<T, ConnectionDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ConnectionData and returns the data saved in the database.
     * @param {ConnectionDataCreateManyAndReturnArgs} args - Arguments to create many ConnectionData.
     * @example
     * // Create many ConnectionData
     * const connectionData = await prisma.connectionData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ConnectionData and only return the `id`
     * const connectionDataWithIdOnly = await prisma.connectionData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConnectionDataCreateManyAndReturnArgs>(args?: SelectSubset<T, ConnectionDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectionDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ConnectionData.
     * @param {ConnectionDataDeleteArgs} args - Arguments to delete one ConnectionData.
     * @example
     * // Delete one ConnectionData
     * const ConnectionData = await prisma.connectionData.delete({
     *   where: {
     *     // ... filter to delete one ConnectionData
     *   }
     * })
     * 
     */
    delete<T extends ConnectionDataDeleteArgs>(args: SelectSubset<T, ConnectionDataDeleteArgs<ExtArgs>>): Prisma__ConnectionDataClient<$Result.GetResult<Prisma.$ConnectionDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ConnectionData.
     * @param {ConnectionDataUpdateArgs} args - Arguments to update one ConnectionData.
     * @example
     * // Update one ConnectionData
     * const connectionData = await prisma.connectionData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConnectionDataUpdateArgs>(args: SelectSubset<T, ConnectionDataUpdateArgs<ExtArgs>>): Prisma__ConnectionDataClient<$Result.GetResult<Prisma.$ConnectionDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ConnectionData.
     * @param {ConnectionDataDeleteManyArgs} args - Arguments to filter ConnectionData to delete.
     * @example
     * // Delete a few ConnectionData
     * const { count } = await prisma.connectionData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConnectionDataDeleteManyArgs>(args?: SelectSubset<T, ConnectionDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConnectionData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConnectionData
     * const connectionData = await prisma.connectionData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConnectionDataUpdateManyArgs>(args: SelectSubset<T, ConnectionDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConnectionData and returns the data updated in the database.
     * @param {ConnectionDataUpdateManyAndReturnArgs} args - Arguments to update many ConnectionData.
     * @example
     * // Update many ConnectionData
     * const connectionData = await prisma.connectionData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ConnectionData and only return the `id`
     * const connectionDataWithIdOnly = await prisma.connectionData.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConnectionDataUpdateManyAndReturnArgs>(args: SelectSubset<T, ConnectionDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectionDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ConnectionData.
     * @param {ConnectionDataUpsertArgs} args - Arguments to update or create a ConnectionData.
     * @example
     * // Update or create a ConnectionData
     * const connectionData = await prisma.connectionData.upsert({
     *   create: {
     *     // ... data to create a ConnectionData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConnectionData we want to update
     *   }
     * })
     */
    upsert<T extends ConnectionDataUpsertArgs>(args: SelectSubset<T, ConnectionDataUpsertArgs<ExtArgs>>): Prisma__ConnectionDataClient<$Result.GetResult<Prisma.$ConnectionDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ConnectionData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionDataCountArgs} args - Arguments to filter ConnectionData to count.
     * @example
     * // Count the number of ConnectionData
     * const count = await prisma.connectionData.count({
     *   where: {
     *     // ... the filter for the ConnectionData we want to count
     *   }
     * })
    **/
    count<T extends ConnectionDataCountArgs>(
      args?: Subset<T, ConnectionDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConnectionDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConnectionData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConnectionDataAggregateArgs>(args: Subset<T, ConnectionDataAggregateArgs>): Prisma.PrismaPromise<GetConnectionDataAggregateType<T>>

    /**
     * Group by ConnectionData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConnectionDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConnectionDataGroupByArgs['orderBy'] }
        : { orderBy?: ConnectionDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConnectionDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConnectionDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConnectionData model
   */
  readonly fields: ConnectionDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConnectionData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConnectionDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    metric<T extends ConnectionData$metricArgs<ExtArgs> = {}>(args?: Subset<T, ConnectionData$metricArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ConnectionData model
   */
  interface ConnectionDataFieldRefs {
    readonly id: FieldRef<"ConnectionData", 'String'>
    readonly effectiveType: FieldRef<"ConnectionData", 'String'>
    readonly rtt: FieldRef<"ConnectionData", 'Float'>
    readonly downlink: FieldRef<"ConnectionData", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * ConnectionData findUnique
   */
  export type ConnectionDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionData
     */
    select?: ConnectionDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectionData
     */
    omit?: ConnectionDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionDataInclude<ExtArgs> | null
    /**
     * Filter, which ConnectionData to fetch.
     */
    where: ConnectionDataWhereUniqueInput
  }

  /**
   * ConnectionData findUniqueOrThrow
   */
  export type ConnectionDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionData
     */
    select?: ConnectionDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectionData
     */
    omit?: ConnectionDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionDataInclude<ExtArgs> | null
    /**
     * Filter, which ConnectionData to fetch.
     */
    where: ConnectionDataWhereUniqueInput
  }

  /**
   * ConnectionData findFirst
   */
  export type ConnectionDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionData
     */
    select?: ConnectionDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectionData
     */
    omit?: ConnectionDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionDataInclude<ExtArgs> | null
    /**
     * Filter, which ConnectionData to fetch.
     */
    where?: ConnectionDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConnectionData to fetch.
     */
    orderBy?: ConnectionDataOrderByWithRelationInput | ConnectionDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConnectionData.
     */
    cursor?: ConnectionDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConnectionData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConnectionData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConnectionData.
     */
    distinct?: ConnectionDataScalarFieldEnum | ConnectionDataScalarFieldEnum[]
  }

  /**
   * ConnectionData findFirstOrThrow
   */
  export type ConnectionDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionData
     */
    select?: ConnectionDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectionData
     */
    omit?: ConnectionDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionDataInclude<ExtArgs> | null
    /**
     * Filter, which ConnectionData to fetch.
     */
    where?: ConnectionDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConnectionData to fetch.
     */
    orderBy?: ConnectionDataOrderByWithRelationInput | ConnectionDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConnectionData.
     */
    cursor?: ConnectionDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConnectionData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConnectionData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConnectionData.
     */
    distinct?: ConnectionDataScalarFieldEnum | ConnectionDataScalarFieldEnum[]
  }

  /**
   * ConnectionData findMany
   */
  export type ConnectionDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionData
     */
    select?: ConnectionDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectionData
     */
    omit?: ConnectionDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionDataInclude<ExtArgs> | null
    /**
     * Filter, which ConnectionData to fetch.
     */
    where?: ConnectionDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConnectionData to fetch.
     */
    orderBy?: ConnectionDataOrderByWithRelationInput | ConnectionDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConnectionData.
     */
    cursor?: ConnectionDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConnectionData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConnectionData.
     */
    skip?: number
    distinct?: ConnectionDataScalarFieldEnum | ConnectionDataScalarFieldEnum[]
  }

  /**
   * ConnectionData create
   */
  export type ConnectionDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionData
     */
    select?: ConnectionDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectionData
     */
    omit?: ConnectionDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionDataInclude<ExtArgs> | null
    /**
     * The data needed to create a ConnectionData.
     */
    data?: XOR<ConnectionDataCreateInput, ConnectionDataUncheckedCreateInput>
  }

  /**
   * ConnectionData createMany
   */
  export type ConnectionDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConnectionData.
     */
    data: ConnectionDataCreateManyInput | ConnectionDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConnectionData createManyAndReturn
   */
  export type ConnectionDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionData
     */
    select?: ConnectionDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectionData
     */
    omit?: ConnectionDataOmit<ExtArgs> | null
    /**
     * The data used to create many ConnectionData.
     */
    data: ConnectionDataCreateManyInput | ConnectionDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConnectionData update
   */
  export type ConnectionDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionData
     */
    select?: ConnectionDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectionData
     */
    omit?: ConnectionDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionDataInclude<ExtArgs> | null
    /**
     * The data needed to update a ConnectionData.
     */
    data: XOR<ConnectionDataUpdateInput, ConnectionDataUncheckedUpdateInput>
    /**
     * Choose, which ConnectionData to update.
     */
    where: ConnectionDataWhereUniqueInput
  }

  /**
   * ConnectionData updateMany
   */
  export type ConnectionDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConnectionData.
     */
    data: XOR<ConnectionDataUpdateManyMutationInput, ConnectionDataUncheckedUpdateManyInput>
    /**
     * Filter which ConnectionData to update
     */
    where?: ConnectionDataWhereInput
    /**
     * Limit how many ConnectionData to update.
     */
    limit?: number
  }

  /**
   * ConnectionData updateManyAndReturn
   */
  export type ConnectionDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionData
     */
    select?: ConnectionDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectionData
     */
    omit?: ConnectionDataOmit<ExtArgs> | null
    /**
     * The data used to update ConnectionData.
     */
    data: XOR<ConnectionDataUpdateManyMutationInput, ConnectionDataUncheckedUpdateManyInput>
    /**
     * Filter which ConnectionData to update
     */
    where?: ConnectionDataWhereInput
    /**
     * Limit how many ConnectionData to update.
     */
    limit?: number
  }

  /**
   * ConnectionData upsert
   */
  export type ConnectionDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionData
     */
    select?: ConnectionDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectionData
     */
    omit?: ConnectionDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionDataInclude<ExtArgs> | null
    /**
     * The filter to search for the ConnectionData to update in case it exists.
     */
    where: ConnectionDataWhereUniqueInput
    /**
     * In case the ConnectionData found by the `where` argument doesn't exist, create a new ConnectionData with this data.
     */
    create: XOR<ConnectionDataCreateInput, ConnectionDataUncheckedCreateInput>
    /**
     * In case the ConnectionData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConnectionDataUpdateInput, ConnectionDataUncheckedUpdateInput>
  }

  /**
   * ConnectionData delete
   */
  export type ConnectionDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionData
     */
    select?: ConnectionDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectionData
     */
    omit?: ConnectionDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionDataInclude<ExtArgs> | null
    /**
     * Filter which ConnectionData to delete.
     */
    where: ConnectionDataWhereUniqueInput
  }

  /**
   * ConnectionData deleteMany
   */
  export type ConnectionDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConnectionData to delete
     */
    where?: ConnectionDataWhereInput
    /**
     * Limit how many ConnectionData to delete.
     */
    limit?: number
  }

  /**
   * ConnectionData.metric
   */
  export type ConnectionData$metricArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    where?: MetricWhereInput
  }

  /**
   * ConnectionData without action
   */
  export type ConnectionDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionData
     */
    select?: ConnectionDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectionData
     */
    omit?: ConnectionDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionDataInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MetricScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    path: 'path',
    userAgent: 'userAgent',
    metricDataId: 'metricDataId',
    connectionDataId: 'connectionDataId'
  };

  export type MetricScalarFieldEnum = (typeof MetricScalarFieldEnum)[keyof typeof MetricScalarFieldEnum]


  export const MetricDataScalarFieldEnum: {
    id: 'id',
    CLS: 'CLS',
    FCP: 'FCP',
    INP: 'INP',
    LCP: 'LCP',
    TTFB: 'TTFB',
    navigationTimingId: 'navigationTimingId'
  };

  export type MetricDataScalarFieldEnum = (typeof MetricDataScalarFieldEnum)[keyof typeof MetricDataScalarFieldEnum]


  export const NavigationTimingScalarFieldEnum: {
    id: 'id',
    domComplete: 'domComplete',
    domInteractive: 'domInteractive',
    domContentLoadedEventEnd: 'domContentLoadedEventEnd',
    loadEventEnd: 'loadEventEnd'
  };

  export type NavigationTimingScalarFieldEnum = (typeof NavigationTimingScalarFieldEnum)[keyof typeof NavigationTimingScalarFieldEnum]


  export const ConnectionDataScalarFieldEnum: {
    id: 'id',
    effectiveType: 'effectiveType',
    rtt: 'rtt',
    downlink: 'downlink'
  };

  export type ConnectionDataScalarFieldEnum = (typeof ConnectionDataScalarFieldEnum)[keyof typeof ConnectionDataScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type MetricWhereInput = {
    AND?: MetricWhereInput | MetricWhereInput[]
    OR?: MetricWhereInput[]
    NOT?: MetricWhereInput | MetricWhereInput[]
    id?: StringFilter<"Metric"> | string
    createdAt?: DateTimeFilter<"Metric"> | Date | string
    path?: StringFilter<"Metric"> | string
    userAgent?: StringFilter<"Metric"> | string
    metricDataId?: StringFilter<"Metric"> | string
    connectionDataId?: StringNullableFilter<"Metric"> | string | null
    metrics?: XOR<MetricDataScalarRelationFilter, MetricDataWhereInput>
    connection?: XOR<ConnectionDataNullableScalarRelationFilter, ConnectionDataWhereInput> | null
  }

  export type MetricOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    path?: SortOrder
    userAgent?: SortOrder
    metricDataId?: SortOrder
    connectionDataId?: SortOrderInput | SortOrder
    metrics?: MetricDataOrderByWithRelationInput
    connection?: ConnectionDataOrderByWithRelationInput
  }

  export type MetricWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    metricDataId?: string
    connectionDataId?: string
    AND?: MetricWhereInput | MetricWhereInput[]
    OR?: MetricWhereInput[]
    NOT?: MetricWhereInput | MetricWhereInput[]
    createdAt?: DateTimeFilter<"Metric"> | Date | string
    path?: StringFilter<"Metric"> | string
    userAgent?: StringFilter<"Metric"> | string
    metrics?: XOR<MetricDataScalarRelationFilter, MetricDataWhereInput>
    connection?: XOR<ConnectionDataNullableScalarRelationFilter, ConnectionDataWhereInput> | null
  }, "id" | "metricDataId" | "connectionDataId">

  export type MetricOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    path?: SortOrder
    userAgent?: SortOrder
    metricDataId?: SortOrder
    connectionDataId?: SortOrderInput | SortOrder
    _count?: MetricCountOrderByAggregateInput
    _max?: MetricMaxOrderByAggregateInput
    _min?: MetricMinOrderByAggregateInput
  }

  export type MetricScalarWhereWithAggregatesInput = {
    AND?: MetricScalarWhereWithAggregatesInput | MetricScalarWhereWithAggregatesInput[]
    OR?: MetricScalarWhereWithAggregatesInput[]
    NOT?: MetricScalarWhereWithAggregatesInput | MetricScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Metric"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Metric"> | Date | string
    path?: StringWithAggregatesFilter<"Metric"> | string
    userAgent?: StringWithAggregatesFilter<"Metric"> | string
    metricDataId?: StringWithAggregatesFilter<"Metric"> | string
    connectionDataId?: StringNullableWithAggregatesFilter<"Metric"> | string | null
  }

  export type MetricDataWhereInput = {
    AND?: MetricDataWhereInput | MetricDataWhereInput[]
    OR?: MetricDataWhereInput[]
    NOT?: MetricDataWhereInput | MetricDataWhereInput[]
    id?: StringFilter<"MetricData"> | string
    CLS?: FloatNullableFilter<"MetricData"> | number | null
    FCP?: FloatNullableFilter<"MetricData"> | number | null
    INP?: FloatNullableFilter<"MetricData"> | number | null
    LCP?: FloatNullableFilter<"MetricData"> | number | null
    TTFB?: FloatNullableFilter<"MetricData"> | number | null
    navigationTimingId?: StringFilter<"MetricData"> | string
    navigationTiming?: XOR<NavigationTimingScalarRelationFilter, NavigationTimingWhereInput>
    metric?: XOR<MetricNullableScalarRelationFilter, MetricWhereInput> | null
  }

  export type MetricDataOrderByWithRelationInput = {
    id?: SortOrder
    CLS?: SortOrderInput | SortOrder
    FCP?: SortOrderInput | SortOrder
    INP?: SortOrderInput | SortOrder
    LCP?: SortOrderInput | SortOrder
    TTFB?: SortOrderInput | SortOrder
    navigationTimingId?: SortOrder
    navigationTiming?: NavigationTimingOrderByWithRelationInput
    metric?: MetricOrderByWithRelationInput
  }

  export type MetricDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    navigationTimingId?: string
    AND?: MetricDataWhereInput | MetricDataWhereInput[]
    OR?: MetricDataWhereInput[]
    NOT?: MetricDataWhereInput | MetricDataWhereInput[]
    CLS?: FloatNullableFilter<"MetricData"> | number | null
    FCP?: FloatNullableFilter<"MetricData"> | number | null
    INP?: FloatNullableFilter<"MetricData"> | number | null
    LCP?: FloatNullableFilter<"MetricData"> | number | null
    TTFB?: FloatNullableFilter<"MetricData"> | number | null
    navigationTiming?: XOR<NavigationTimingScalarRelationFilter, NavigationTimingWhereInput>
    metric?: XOR<MetricNullableScalarRelationFilter, MetricWhereInput> | null
  }, "id" | "navigationTimingId">

  export type MetricDataOrderByWithAggregationInput = {
    id?: SortOrder
    CLS?: SortOrderInput | SortOrder
    FCP?: SortOrderInput | SortOrder
    INP?: SortOrderInput | SortOrder
    LCP?: SortOrderInput | SortOrder
    TTFB?: SortOrderInput | SortOrder
    navigationTimingId?: SortOrder
    _count?: MetricDataCountOrderByAggregateInput
    _avg?: MetricDataAvgOrderByAggregateInput
    _max?: MetricDataMaxOrderByAggregateInput
    _min?: MetricDataMinOrderByAggregateInput
    _sum?: MetricDataSumOrderByAggregateInput
  }

  export type MetricDataScalarWhereWithAggregatesInput = {
    AND?: MetricDataScalarWhereWithAggregatesInput | MetricDataScalarWhereWithAggregatesInput[]
    OR?: MetricDataScalarWhereWithAggregatesInput[]
    NOT?: MetricDataScalarWhereWithAggregatesInput | MetricDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MetricData"> | string
    CLS?: FloatNullableWithAggregatesFilter<"MetricData"> | number | null
    FCP?: FloatNullableWithAggregatesFilter<"MetricData"> | number | null
    INP?: FloatNullableWithAggregatesFilter<"MetricData"> | number | null
    LCP?: FloatNullableWithAggregatesFilter<"MetricData"> | number | null
    TTFB?: FloatNullableWithAggregatesFilter<"MetricData"> | number | null
    navigationTimingId?: StringWithAggregatesFilter<"MetricData"> | string
  }

  export type NavigationTimingWhereInput = {
    AND?: NavigationTimingWhereInput | NavigationTimingWhereInput[]
    OR?: NavigationTimingWhereInput[]
    NOT?: NavigationTimingWhereInput | NavigationTimingWhereInput[]
    id?: StringFilter<"NavigationTiming"> | string
    domComplete?: FloatNullableFilter<"NavigationTiming"> | number | null
    domInteractive?: FloatNullableFilter<"NavigationTiming"> | number | null
    domContentLoadedEventEnd?: FloatNullableFilter<"NavigationTiming"> | number | null
    loadEventEnd?: FloatNullableFilter<"NavigationTiming"> | number | null
    metricData?: XOR<MetricDataNullableScalarRelationFilter, MetricDataWhereInput> | null
  }

  export type NavigationTimingOrderByWithRelationInput = {
    id?: SortOrder
    domComplete?: SortOrderInput | SortOrder
    domInteractive?: SortOrderInput | SortOrder
    domContentLoadedEventEnd?: SortOrderInput | SortOrder
    loadEventEnd?: SortOrderInput | SortOrder
    metricData?: MetricDataOrderByWithRelationInput
  }

  export type NavigationTimingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NavigationTimingWhereInput | NavigationTimingWhereInput[]
    OR?: NavigationTimingWhereInput[]
    NOT?: NavigationTimingWhereInput | NavigationTimingWhereInput[]
    domComplete?: FloatNullableFilter<"NavigationTiming"> | number | null
    domInteractive?: FloatNullableFilter<"NavigationTiming"> | number | null
    domContentLoadedEventEnd?: FloatNullableFilter<"NavigationTiming"> | number | null
    loadEventEnd?: FloatNullableFilter<"NavigationTiming"> | number | null
    metricData?: XOR<MetricDataNullableScalarRelationFilter, MetricDataWhereInput> | null
  }, "id">

  export type NavigationTimingOrderByWithAggregationInput = {
    id?: SortOrder
    domComplete?: SortOrderInput | SortOrder
    domInteractive?: SortOrderInput | SortOrder
    domContentLoadedEventEnd?: SortOrderInput | SortOrder
    loadEventEnd?: SortOrderInput | SortOrder
    _count?: NavigationTimingCountOrderByAggregateInput
    _avg?: NavigationTimingAvgOrderByAggregateInput
    _max?: NavigationTimingMaxOrderByAggregateInput
    _min?: NavigationTimingMinOrderByAggregateInput
    _sum?: NavigationTimingSumOrderByAggregateInput
  }

  export type NavigationTimingScalarWhereWithAggregatesInput = {
    AND?: NavigationTimingScalarWhereWithAggregatesInput | NavigationTimingScalarWhereWithAggregatesInput[]
    OR?: NavigationTimingScalarWhereWithAggregatesInput[]
    NOT?: NavigationTimingScalarWhereWithAggregatesInput | NavigationTimingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NavigationTiming"> | string
    domComplete?: FloatNullableWithAggregatesFilter<"NavigationTiming"> | number | null
    domInteractive?: FloatNullableWithAggregatesFilter<"NavigationTiming"> | number | null
    domContentLoadedEventEnd?: FloatNullableWithAggregatesFilter<"NavigationTiming"> | number | null
    loadEventEnd?: FloatNullableWithAggregatesFilter<"NavigationTiming"> | number | null
  }

  export type ConnectionDataWhereInput = {
    AND?: ConnectionDataWhereInput | ConnectionDataWhereInput[]
    OR?: ConnectionDataWhereInput[]
    NOT?: ConnectionDataWhereInput | ConnectionDataWhereInput[]
    id?: StringFilter<"ConnectionData"> | string
    effectiveType?: StringNullableFilter<"ConnectionData"> | string | null
    rtt?: FloatNullableFilter<"ConnectionData"> | number | null
    downlink?: FloatNullableFilter<"ConnectionData"> | number | null
    metric?: XOR<MetricNullableScalarRelationFilter, MetricWhereInput> | null
  }

  export type ConnectionDataOrderByWithRelationInput = {
    id?: SortOrder
    effectiveType?: SortOrderInput | SortOrder
    rtt?: SortOrderInput | SortOrder
    downlink?: SortOrderInput | SortOrder
    metric?: MetricOrderByWithRelationInput
  }

  export type ConnectionDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConnectionDataWhereInput | ConnectionDataWhereInput[]
    OR?: ConnectionDataWhereInput[]
    NOT?: ConnectionDataWhereInput | ConnectionDataWhereInput[]
    effectiveType?: StringNullableFilter<"ConnectionData"> | string | null
    rtt?: FloatNullableFilter<"ConnectionData"> | number | null
    downlink?: FloatNullableFilter<"ConnectionData"> | number | null
    metric?: XOR<MetricNullableScalarRelationFilter, MetricWhereInput> | null
  }, "id">

  export type ConnectionDataOrderByWithAggregationInput = {
    id?: SortOrder
    effectiveType?: SortOrderInput | SortOrder
    rtt?: SortOrderInput | SortOrder
    downlink?: SortOrderInput | SortOrder
    _count?: ConnectionDataCountOrderByAggregateInput
    _avg?: ConnectionDataAvgOrderByAggregateInput
    _max?: ConnectionDataMaxOrderByAggregateInput
    _min?: ConnectionDataMinOrderByAggregateInput
    _sum?: ConnectionDataSumOrderByAggregateInput
  }

  export type ConnectionDataScalarWhereWithAggregatesInput = {
    AND?: ConnectionDataScalarWhereWithAggregatesInput | ConnectionDataScalarWhereWithAggregatesInput[]
    OR?: ConnectionDataScalarWhereWithAggregatesInput[]
    NOT?: ConnectionDataScalarWhereWithAggregatesInput | ConnectionDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ConnectionData"> | string
    effectiveType?: StringNullableWithAggregatesFilter<"ConnectionData"> | string | null
    rtt?: FloatNullableWithAggregatesFilter<"ConnectionData"> | number | null
    downlink?: FloatNullableWithAggregatesFilter<"ConnectionData"> | number | null
  }

  export type MetricCreateInput = {
    id?: string
    createdAt?: Date | string
    path: string
    userAgent: string
    metrics: MetricDataCreateNestedOneWithoutMetricInput
    connection?: ConnectionDataCreateNestedOneWithoutMetricInput
  }

  export type MetricUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    path: string
    userAgent: string
    metricDataId: string
    connectionDataId?: string | null
  }

  export type MetricUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    path?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    metrics?: MetricDataUpdateOneRequiredWithoutMetricNestedInput
    connection?: ConnectionDataUpdateOneWithoutMetricNestedInput
  }

  export type MetricUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    path?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    metricDataId?: StringFieldUpdateOperationsInput | string
    connectionDataId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MetricCreateManyInput = {
    id?: string
    createdAt?: Date | string
    path: string
    userAgent: string
    metricDataId: string
    connectionDataId?: string | null
  }

  export type MetricUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    path?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
  }

  export type MetricUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    path?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    metricDataId?: StringFieldUpdateOperationsInput | string
    connectionDataId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MetricDataCreateInput = {
    id?: string
    CLS?: number | null
    FCP?: number | null
    INP?: number | null
    LCP?: number | null
    TTFB?: number | null
    navigationTiming: NavigationTimingCreateNestedOneWithoutMetricDataInput
    metric?: MetricCreateNestedOneWithoutMetricsInput
  }

  export type MetricDataUncheckedCreateInput = {
    id?: string
    CLS?: number | null
    FCP?: number | null
    INP?: number | null
    LCP?: number | null
    TTFB?: number | null
    navigationTimingId: string
    metric?: MetricUncheckedCreateNestedOneWithoutMetricsInput
  }

  export type MetricDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    CLS?: NullableFloatFieldUpdateOperationsInput | number | null
    FCP?: NullableFloatFieldUpdateOperationsInput | number | null
    INP?: NullableFloatFieldUpdateOperationsInput | number | null
    LCP?: NullableFloatFieldUpdateOperationsInput | number | null
    TTFB?: NullableFloatFieldUpdateOperationsInput | number | null
    navigationTiming?: NavigationTimingUpdateOneRequiredWithoutMetricDataNestedInput
    metric?: MetricUpdateOneWithoutMetricsNestedInput
  }

  export type MetricDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    CLS?: NullableFloatFieldUpdateOperationsInput | number | null
    FCP?: NullableFloatFieldUpdateOperationsInput | number | null
    INP?: NullableFloatFieldUpdateOperationsInput | number | null
    LCP?: NullableFloatFieldUpdateOperationsInput | number | null
    TTFB?: NullableFloatFieldUpdateOperationsInput | number | null
    navigationTimingId?: StringFieldUpdateOperationsInput | string
    metric?: MetricUncheckedUpdateOneWithoutMetricsNestedInput
  }

  export type MetricDataCreateManyInput = {
    id?: string
    CLS?: number | null
    FCP?: number | null
    INP?: number | null
    LCP?: number | null
    TTFB?: number | null
    navigationTimingId: string
  }

  export type MetricDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    CLS?: NullableFloatFieldUpdateOperationsInput | number | null
    FCP?: NullableFloatFieldUpdateOperationsInput | number | null
    INP?: NullableFloatFieldUpdateOperationsInput | number | null
    LCP?: NullableFloatFieldUpdateOperationsInput | number | null
    TTFB?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type MetricDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    CLS?: NullableFloatFieldUpdateOperationsInput | number | null
    FCP?: NullableFloatFieldUpdateOperationsInput | number | null
    INP?: NullableFloatFieldUpdateOperationsInput | number | null
    LCP?: NullableFloatFieldUpdateOperationsInput | number | null
    TTFB?: NullableFloatFieldUpdateOperationsInput | number | null
    navigationTimingId?: StringFieldUpdateOperationsInput | string
  }

  export type NavigationTimingCreateInput = {
    id?: string
    domComplete?: number | null
    domInteractive?: number | null
    domContentLoadedEventEnd?: number | null
    loadEventEnd?: number | null
    metricData?: MetricDataCreateNestedOneWithoutNavigationTimingInput
  }

  export type NavigationTimingUncheckedCreateInput = {
    id?: string
    domComplete?: number | null
    domInteractive?: number | null
    domContentLoadedEventEnd?: number | null
    loadEventEnd?: number | null
    metricData?: MetricDataUncheckedCreateNestedOneWithoutNavigationTimingInput
  }

  export type NavigationTimingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    domComplete?: NullableFloatFieldUpdateOperationsInput | number | null
    domInteractive?: NullableFloatFieldUpdateOperationsInput | number | null
    domContentLoadedEventEnd?: NullableFloatFieldUpdateOperationsInput | number | null
    loadEventEnd?: NullableFloatFieldUpdateOperationsInput | number | null
    metricData?: MetricDataUpdateOneWithoutNavigationTimingNestedInput
  }

  export type NavigationTimingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    domComplete?: NullableFloatFieldUpdateOperationsInput | number | null
    domInteractive?: NullableFloatFieldUpdateOperationsInput | number | null
    domContentLoadedEventEnd?: NullableFloatFieldUpdateOperationsInput | number | null
    loadEventEnd?: NullableFloatFieldUpdateOperationsInput | number | null
    metricData?: MetricDataUncheckedUpdateOneWithoutNavigationTimingNestedInput
  }

  export type NavigationTimingCreateManyInput = {
    id?: string
    domComplete?: number | null
    domInteractive?: number | null
    domContentLoadedEventEnd?: number | null
    loadEventEnd?: number | null
  }

  export type NavigationTimingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    domComplete?: NullableFloatFieldUpdateOperationsInput | number | null
    domInteractive?: NullableFloatFieldUpdateOperationsInput | number | null
    domContentLoadedEventEnd?: NullableFloatFieldUpdateOperationsInput | number | null
    loadEventEnd?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type NavigationTimingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    domComplete?: NullableFloatFieldUpdateOperationsInput | number | null
    domInteractive?: NullableFloatFieldUpdateOperationsInput | number | null
    domContentLoadedEventEnd?: NullableFloatFieldUpdateOperationsInput | number | null
    loadEventEnd?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ConnectionDataCreateInput = {
    id?: string
    effectiveType?: string | null
    rtt?: number | null
    downlink?: number | null
    metric?: MetricCreateNestedOneWithoutConnectionInput
  }

  export type ConnectionDataUncheckedCreateInput = {
    id?: string
    effectiveType?: string | null
    rtt?: number | null
    downlink?: number | null
    metric?: MetricUncheckedCreateNestedOneWithoutConnectionInput
  }

  export type ConnectionDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    effectiveType?: NullableStringFieldUpdateOperationsInput | string | null
    rtt?: NullableFloatFieldUpdateOperationsInput | number | null
    downlink?: NullableFloatFieldUpdateOperationsInput | number | null
    metric?: MetricUpdateOneWithoutConnectionNestedInput
  }

  export type ConnectionDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    effectiveType?: NullableStringFieldUpdateOperationsInput | string | null
    rtt?: NullableFloatFieldUpdateOperationsInput | number | null
    downlink?: NullableFloatFieldUpdateOperationsInput | number | null
    metric?: MetricUncheckedUpdateOneWithoutConnectionNestedInput
  }

  export type ConnectionDataCreateManyInput = {
    id?: string
    effectiveType?: string | null
    rtt?: number | null
    downlink?: number | null
  }

  export type ConnectionDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    effectiveType?: NullableStringFieldUpdateOperationsInput | string | null
    rtt?: NullableFloatFieldUpdateOperationsInput | number | null
    downlink?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ConnectionDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    effectiveType?: NullableStringFieldUpdateOperationsInput | string | null
    rtt?: NullableFloatFieldUpdateOperationsInput | number | null
    downlink?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type MetricDataScalarRelationFilter = {
    is?: MetricDataWhereInput
    isNot?: MetricDataWhereInput
  }

  export type ConnectionDataNullableScalarRelationFilter = {
    is?: ConnectionDataWhereInput | null
    isNot?: ConnectionDataWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MetricCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    path?: SortOrder
    userAgent?: SortOrder
    metricDataId?: SortOrder
    connectionDataId?: SortOrder
  }

  export type MetricMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    path?: SortOrder
    userAgent?: SortOrder
    metricDataId?: SortOrder
    connectionDataId?: SortOrder
  }

  export type MetricMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    path?: SortOrder
    userAgent?: SortOrder
    metricDataId?: SortOrder
    connectionDataId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NavigationTimingScalarRelationFilter = {
    is?: NavigationTimingWhereInput
    isNot?: NavigationTimingWhereInput
  }

  export type MetricNullableScalarRelationFilter = {
    is?: MetricWhereInput | null
    isNot?: MetricWhereInput | null
  }

  export type MetricDataCountOrderByAggregateInput = {
    id?: SortOrder
    CLS?: SortOrder
    FCP?: SortOrder
    INP?: SortOrder
    LCP?: SortOrder
    TTFB?: SortOrder
    navigationTimingId?: SortOrder
  }

  export type MetricDataAvgOrderByAggregateInput = {
    CLS?: SortOrder
    FCP?: SortOrder
    INP?: SortOrder
    LCP?: SortOrder
    TTFB?: SortOrder
  }

  export type MetricDataMaxOrderByAggregateInput = {
    id?: SortOrder
    CLS?: SortOrder
    FCP?: SortOrder
    INP?: SortOrder
    LCP?: SortOrder
    TTFB?: SortOrder
    navigationTimingId?: SortOrder
  }

  export type MetricDataMinOrderByAggregateInput = {
    id?: SortOrder
    CLS?: SortOrder
    FCP?: SortOrder
    INP?: SortOrder
    LCP?: SortOrder
    TTFB?: SortOrder
    navigationTimingId?: SortOrder
  }

  export type MetricDataSumOrderByAggregateInput = {
    CLS?: SortOrder
    FCP?: SortOrder
    INP?: SortOrder
    LCP?: SortOrder
    TTFB?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type MetricDataNullableScalarRelationFilter = {
    is?: MetricDataWhereInput | null
    isNot?: MetricDataWhereInput | null
  }

  export type NavigationTimingCountOrderByAggregateInput = {
    id?: SortOrder
    domComplete?: SortOrder
    domInteractive?: SortOrder
    domContentLoadedEventEnd?: SortOrder
    loadEventEnd?: SortOrder
  }

  export type NavigationTimingAvgOrderByAggregateInput = {
    domComplete?: SortOrder
    domInteractive?: SortOrder
    domContentLoadedEventEnd?: SortOrder
    loadEventEnd?: SortOrder
  }

  export type NavigationTimingMaxOrderByAggregateInput = {
    id?: SortOrder
    domComplete?: SortOrder
    domInteractive?: SortOrder
    domContentLoadedEventEnd?: SortOrder
    loadEventEnd?: SortOrder
  }

  export type NavigationTimingMinOrderByAggregateInput = {
    id?: SortOrder
    domComplete?: SortOrder
    domInteractive?: SortOrder
    domContentLoadedEventEnd?: SortOrder
    loadEventEnd?: SortOrder
  }

  export type NavigationTimingSumOrderByAggregateInput = {
    domComplete?: SortOrder
    domInteractive?: SortOrder
    domContentLoadedEventEnd?: SortOrder
    loadEventEnd?: SortOrder
  }

  export type ConnectionDataCountOrderByAggregateInput = {
    id?: SortOrder
    effectiveType?: SortOrder
    rtt?: SortOrder
    downlink?: SortOrder
  }

  export type ConnectionDataAvgOrderByAggregateInput = {
    rtt?: SortOrder
    downlink?: SortOrder
  }

  export type ConnectionDataMaxOrderByAggregateInput = {
    id?: SortOrder
    effectiveType?: SortOrder
    rtt?: SortOrder
    downlink?: SortOrder
  }

  export type ConnectionDataMinOrderByAggregateInput = {
    id?: SortOrder
    effectiveType?: SortOrder
    rtt?: SortOrder
    downlink?: SortOrder
  }

  export type ConnectionDataSumOrderByAggregateInput = {
    rtt?: SortOrder
    downlink?: SortOrder
  }

  export type MetricDataCreateNestedOneWithoutMetricInput = {
    create?: XOR<MetricDataCreateWithoutMetricInput, MetricDataUncheckedCreateWithoutMetricInput>
    connectOrCreate?: MetricDataCreateOrConnectWithoutMetricInput
    connect?: MetricDataWhereUniqueInput
  }

  export type ConnectionDataCreateNestedOneWithoutMetricInput = {
    create?: XOR<ConnectionDataCreateWithoutMetricInput, ConnectionDataUncheckedCreateWithoutMetricInput>
    connectOrCreate?: ConnectionDataCreateOrConnectWithoutMetricInput
    connect?: ConnectionDataWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MetricDataUpdateOneRequiredWithoutMetricNestedInput = {
    create?: XOR<MetricDataCreateWithoutMetricInput, MetricDataUncheckedCreateWithoutMetricInput>
    connectOrCreate?: MetricDataCreateOrConnectWithoutMetricInput
    upsert?: MetricDataUpsertWithoutMetricInput
    connect?: MetricDataWhereUniqueInput
    update?: XOR<XOR<MetricDataUpdateToOneWithWhereWithoutMetricInput, MetricDataUpdateWithoutMetricInput>, MetricDataUncheckedUpdateWithoutMetricInput>
  }

  export type ConnectionDataUpdateOneWithoutMetricNestedInput = {
    create?: XOR<ConnectionDataCreateWithoutMetricInput, ConnectionDataUncheckedCreateWithoutMetricInput>
    connectOrCreate?: ConnectionDataCreateOrConnectWithoutMetricInput
    upsert?: ConnectionDataUpsertWithoutMetricInput
    disconnect?: ConnectionDataWhereInput | boolean
    delete?: ConnectionDataWhereInput | boolean
    connect?: ConnectionDataWhereUniqueInput
    update?: XOR<XOR<ConnectionDataUpdateToOneWithWhereWithoutMetricInput, ConnectionDataUpdateWithoutMetricInput>, ConnectionDataUncheckedUpdateWithoutMetricInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NavigationTimingCreateNestedOneWithoutMetricDataInput = {
    create?: XOR<NavigationTimingCreateWithoutMetricDataInput, NavigationTimingUncheckedCreateWithoutMetricDataInput>
    connectOrCreate?: NavigationTimingCreateOrConnectWithoutMetricDataInput
    connect?: NavigationTimingWhereUniqueInput
  }

  export type MetricCreateNestedOneWithoutMetricsInput = {
    create?: XOR<MetricCreateWithoutMetricsInput, MetricUncheckedCreateWithoutMetricsInput>
    connectOrCreate?: MetricCreateOrConnectWithoutMetricsInput
    connect?: MetricWhereUniqueInput
  }

  export type MetricUncheckedCreateNestedOneWithoutMetricsInput = {
    create?: XOR<MetricCreateWithoutMetricsInput, MetricUncheckedCreateWithoutMetricsInput>
    connectOrCreate?: MetricCreateOrConnectWithoutMetricsInput
    connect?: MetricWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NavigationTimingUpdateOneRequiredWithoutMetricDataNestedInput = {
    create?: XOR<NavigationTimingCreateWithoutMetricDataInput, NavigationTimingUncheckedCreateWithoutMetricDataInput>
    connectOrCreate?: NavigationTimingCreateOrConnectWithoutMetricDataInput
    upsert?: NavigationTimingUpsertWithoutMetricDataInput
    connect?: NavigationTimingWhereUniqueInput
    update?: XOR<XOR<NavigationTimingUpdateToOneWithWhereWithoutMetricDataInput, NavigationTimingUpdateWithoutMetricDataInput>, NavigationTimingUncheckedUpdateWithoutMetricDataInput>
  }

  export type MetricUpdateOneWithoutMetricsNestedInput = {
    create?: XOR<MetricCreateWithoutMetricsInput, MetricUncheckedCreateWithoutMetricsInput>
    connectOrCreate?: MetricCreateOrConnectWithoutMetricsInput
    upsert?: MetricUpsertWithoutMetricsInput
    disconnect?: MetricWhereInput | boolean
    delete?: MetricWhereInput | boolean
    connect?: MetricWhereUniqueInput
    update?: XOR<XOR<MetricUpdateToOneWithWhereWithoutMetricsInput, MetricUpdateWithoutMetricsInput>, MetricUncheckedUpdateWithoutMetricsInput>
  }

  export type MetricUncheckedUpdateOneWithoutMetricsNestedInput = {
    create?: XOR<MetricCreateWithoutMetricsInput, MetricUncheckedCreateWithoutMetricsInput>
    connectOrCreate?: MetricCreateOrConnectWithoutMetricsInput
    upsert?: MetricUpsertWithoutMetricsInput
    disconnect?: MetricWhereInput | boolean
    delete?: MetricWhereInput | boolean
    connect?: MetricWhereUniqueInput
    update?: XOR<XOR<MetricUpdateToOneWithWhereWithoutMetricsInput, MetricUpdateWithoutMetricsInput>, MetricUncheckedUpdateWithoutMetricsInput>
  }

  export type MetricDataCreateNestedOneWithoutNavigationTimingInput = {
    create?: XOR<MetricDataCreateWithoutNavigationTimingInput, MetricDataUncheckedCreateWithoutNavigationTimingInput>
    connectOrCreate?: MetricDataCreateOrConnectWithoutNavigationTimingInput
    connect?: MetricDataWhereUniqueInput
  }

  export type MetricDataUncheckedCreateNestedOneWithoutNavigationTimingInput = {
    create?: XOR<MetricDataCreateWithoutNavigationTimingInput, MetricDataUncheckedCreateWithoutNavigationTimingInput>
    connectOrCreate?: MetricDataCreateOrConnectWithoutNavigationTimingInput
    connect?: MetricDataWhereUniqueInput
  }

  export type MetricDataUpdateOneWithoutNavigationTimingNestedInput = {
    create?: XOR<MetricDataCreateWithoutNavigationTimingInput, MetricDataUncheckedCreateWithoutNavigationTimingInput>
    connectOrCreate?: MetricDataCreateOrConnectWithoutNavigationTimingInput
    upsert?: MetricDataUpsertWithoutNavigationTimingInput
    disconnect?: MetricDataWhereInput | boolean
    delete?: MetricDataWhereInput | boolean
    connect?: MetricDataWhereUniqueInput
    update?: XOR<XOR<MetricDataUpdateToOneWithWhereWithoutNavigationTimingInput, MetricDataUpdateWithoutNavigationTimingInput>, MetricDataUncheckedUpdateWithoutNavigationTimingInput>
  }

  export type MetricDataUncheckedUpdateOneWithoutNavigationTimingNestedInput = {
    create?: XOR<MetricDataCreateWithoutNavigationTimingInput, MetricDataUncheckedCreateWithoutNavigationTimingInput>
    connectOrCreate?: MetricDataCreateOrConnectWithoutNavigationTimingInput
    upsert?: MetricDataUpsertWithoutNavigationTimingInput
    disconnect?: MetricDataWhereInput | boolean
    delete?: MetricDataWhereInput | boolean
    connect?: MetricDataWhereUniqueInput
    update?: XOR<XOR<MetricDataUpdateToOneWithWhereWithoutNavigationTimingInput, MetricDataUpdateWithoutNavigationTimingInput>, MetricDataUncheckedUpdateWithoutNavigationTimingInput>
  }

  export type MetricCreateNestedOneWithoutConnectionInput = {
    create?: XOR<MetricCreateWithoutConnectionInput, MetricUncheckedCreateWithoutConnectionInput>
    connectOrCreate?: MetricCreateOrConnectWithoutConnectionInput
    connect?: MetricWhereUniqueInput
  }

  export type MetricUncheckedCreateNestedOneWithoutConnectionInput = {
    create?: XOR<MetricCreateWithoutConnectionInput, MetricUncheckedCreateWithoutConnectionInput>
    connectOrCreate?: MetricCreateOrConnectWithoutConnectionInput
    connect?: MetricWhereUniqueInput
  }

  export type MetricUpdateOneWithoutConnectionNestedInput = {
    create?: XOR<MetricCreateWithoutConnectionInput, MetricUncheckedCreateWithoutConnectionInput>
    connectOrCreate?: MetricCreateOrConnectWithoutConnectionInput
    upsert?: MetricUpsertWithoutConnectionInput
    disconnect?: MetricWhereInput | boolean
    delete?: MetricWhereInput | boolean
    connect?: MetricWhereUniqueInput
    update?: XOR<XOR<MetricUpdateToOneWithWhereWithoutConnectionInput, MetricUpdateWithoutConnectionInput>, MetricUncheckedUpdateWithoutConnectionInput>
  }

  export type MetricUncheckedUpdateOneWithoutConnectionNestedInput = {
    create?: XOR<MetricCreateWithoutConnectionInput, MetricUncheckedCreateWithoutConnectionInput>
    connectOrCreate?: MetricCreateOrConnectWithoutConnectionInput
    upsert?: MetricUpsertWithoutConnectionInput
    disconnect?: MetricWhereInput | boolean
    delete?: MetricWhereInput | boolean
    connect?: MetricWhereUniqueInput
    update?: XOR<XOR<MetricUpdateToOneWithWhereWithoutConnectionInput, MetricUpdateWithoutConnectionInput>, MetricUncheckedUpdateWithoutConnectionInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type MetricDataCreateWithoutMetricInput = {
    id?: string
    CLS?: number | null
    FCP?: number | null
    INP?: number | null
    LCP?: number | null
    TTFB?: number | null
    navigationTiming: NavigationTimingCreateNestedOneWithoutMetricDataInput
  }

  export type MetricDataUncheckedCreateWithoutMetricInput = {
    id?: string
    CLS?: number | null
    FCP?: number | null
    INP?: number | null
    LCP?: number | null
    TTFB?: number | null
    navigationTimingId: string
  }

  export type MetricDataCreateOrConnectWithoutMetricInput = {
    where: MetricDataWhereUniqueInput
    create: XOR<MetricDataCreateWithoutMetricInput, MetricDataUncheckedCreateWithoutMetricInput>
  }

  export type ConnectionDataCreateWithoutMetricInput = {
    id?: string
    effectiveType?: string | null
    rtt?: number | null
    downlink?: number | null
  }

  export type ConnectionDataUncheckedCreateWithoutMetricInput = {
    id?: string
    effectiveType?: string | null
    rtt?: number | null
    downlink?: number | null
  }

  export type ConnectionDataCreateOrConnectWithoutMetricInput = {
    where: ConnectionDataWhereUniqueInput
    create: XOR<ConnectionDataCreateWithoutMetricInput, ConnectionDataUncheckedCreateWithoutMetricInput>
  }

  export type MetricDataUpsertWithoutMetricInput = {
    update: XOR<MetricDataUpdateWithoutMetricInput, MetricDataUncheckedUpdateWithoutMetricInput>
    create: XOR<MetricDataCreateWithoutMetricInput, MetricDataUncheckedCreateWithoutMetricInput>
    where?: MetricDataWhereInput
  }

  export type MetricDataUpdateToOneWithWhereWithoutMetricInput = {
    where?: MetricDataWhereInput
    data: XOR<MetricDataUpdateWithoutMetricInput, MetricDataUncheckedUpdateWithoutMetricInput>
  }

  export type MetricDataUpdateWithoutMetricInput = {
    id?: StringFieldUpdateOperationsInput | string
    CLS?: NullableFloatFieldUpdateOperationsInput | number | null
    FCP?: NullableFloatFieldUpdateOperationsInput | number | null
    INP?: NullableFloatFieldUpdateOperationsInput | number | null
    LCP?: NullableFloatFieldUpdateOperationsInput | number | null
    TTFB?: NullableFloatFieldUpdateOperationsInput | number | null
    navigationTiming?: NavigationTimingUpdateOneRequiredWithoutMetricDataNestedInput
  }

  export type MetricDataUncheckedUpdateWithoutMetricInput = {
    id?: StringFieldUpdateOperationsInput | string
    CLS?: NullableFloatFieldUpdateOperationsInput | number | null
    FCP?: NullableFloatFieldUpdateOperationsInput | number | null
    INP?: NullableFloatFieldUpdateOperationsInput | number | null
    LCP?: NullableFloatFieldUpdateOperationsInput | number | null
    TTFB?: NullableFloatFieldUpdateOperationsInput | number | null
    navigationTimingId?: StringFieldUpdateOperationsInput | string
  }

  export type ConnectionDataUpsertWithoutMetricInput = {
    update: XOR<ConnectionDataUpdateWithoutMetricInput, ConnectionDataUncheckedUpdateWithoutMetricInput>
    create: XOR<ConnectionDataCreateWithoutMetricInput, ConnectionDataUncheckedCreateWithoutMetricInput>
    where?: ConnectionDataWhereInput
  }

  export type ConnectionDataUpdateToOneWithWhereWithoutMetricInput = {
    where?: ConnectionDataWhereInput
    data: XOR<ConnectionDataUpdateWithoutMetricInput, ConnectionDataUncheckedUpdateWithoutMetricInput>
  }

  export type ConnectionDataUpdateWithoutMetricInput = {
    id?: StringFieldUpdateOperationsInput | string
    effectiveType?: NullableStringFieldUpdateOperationsInput | string | null
    rtt?: NullableFloatFieldUpdateOperationsInput | number | null
    downlink?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ConnectionDataUncheckedUpdateWithoutMetricInput = {
    id?: StringFieldUpdateOperationsInput | string
    effectiveType?: NullableStringFieldUpdateOperationsInput | string | null
    rtt?: NullableFloatFieldUpdateOperationsInput | number | null
    downlink?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type NavigationTimingCreateWithoutMetricDataInput = {
    id?: string
    domComplete?: number | null
    domInteractive?: number | null
    domContentLoadedEventEnd?: number | null
    loadEventEnd?: number | null
  }

  export type NavigationTimingUncheckedCreateWithoutMetricDataInput = {
    id?: string
    domComplete?: number | null
    domInteractive?: number | null
    domContentLoadedEventEnd?: number | null
    loadEventEnd?: number | null
  }

  export type NavigationTimingCreateOrConnectWithoutMetricDataInput = {
    where: NavigationTimingWhereUniqueInput
    create: XOR<NavigationTimingCreateWithoutMetricDataInput, NavigationTimingUncheckedCreateWithoutMetricDataInput>
  }

  export type MetricCreateWithoutMetricsInput = {
    id?: string
    createdAt?: Date | string
    path: string
    userAgent: string
    connection?: ConnectionDataCreateNestedOneWithoutMetricInput
  }

  export type MetricUncheckedCreateWithoutMetricsInput = {
    id?: string
    createdAt?: Date | string
    path: string
    userAgent: string
    connectionDataId?: string | null
  }

  export type MetricCreateOrConnectWithoutMetricsInput = {
    where: MetricWhereUniqueInput
    create: XOR<MetricCreateWithoutMetricsInput, MetricUncheckedCreateWithoutMetricsInput>
  }

  export type NavigationTimingUpsertWithoutMetricDataInput = {
    update: XOR<NavigationTimingUpdateWithoutMetricDataInput, NavigationTimingUncheckedUpdateWithoutMetricDataInput>
    create: XOR<NavigationTimingCreateWithoutMetricDataInput, NavigationTimingUncheckedCreateWithoutMetricDataInput>
    where?: NavigationTimingWhereInput
  }

  export type NavigationTimingUpdateToOneWithWhereWithoutMetricDataInput = {
    where?: NavigationTimingWhereInput
    data: XOR<NavigationTimingUpdateWithoutMetricDataInput, NavigationTimingUncheckedUpdateWithoutMetricDataInput>
  }

  export type NavigationTimingUpdateWithoutMetricDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    domComplete?: NullableFloatFieldUpdateOperationsInput | number | null
    domInteractive?: NullableFloatFieldUpdateOperationsInput | number | null
    domContentLoadedEventEnd?: NullableFloatFieldUpdateOperationsInput | number | null
    loadEventEnd?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type NavigationTimingUncheckedUpdateWithoutMetricDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    domComplete?: NullableFloatFieldUpdateOperationsInput | number | null
    domInteractive?: NullableFloatFieldUpdateOperationsInput | number | null
    domContentLoadedEventEnd?: NullableFloatFieldUpdateOperationsInput | number | null
    loadEventEnd?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type MetricUpsertWithoutMetricsInput = {
    update: XOR<MetricUpdateWithoutMetricsInput, MetricUncheckedUpdateWithoutMetricsInput>
    create: XOR<MetricCreateWithoutMetricsInput, MetricUncheckedCreateWithoutMetricsInput>
    where?: MetricWhereInput
  }

  export type MetricUpdateToOneWithWhereWithoutMetricsInput = {
    where?: MetricWhereInput
    data: XOR<MetricUpdateWithoutMetricsInput, MetricUncheckedUpdateWithoutMetricsInput>
  }

  export type MetricUpdateWithoutMetricsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    path?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    connection?: ConnectionDataUpdateOneWithoutMetricNestedInput
  }

  export type MetricUncheckedUpdateWithoutMetricsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    path?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    connectionDataId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MetricDataCreateWithoutNavigationTimingInput = {
    id?: string
    CLS?: number | null
    FCP?: number | null
    INP?: number | null
    LCP?: number | null
    TTFB?: number | null
    metric?: MetricCreateNestedOneWithoutMetricsInput
  }

  export type MetricDataUncheckedCreateWithoutNavigationTimingInput = {
    id?: string
    CLS?: number | null
    FCP?: number | null
    INP?: number | null
    LCP?: number | null
    TTFB?: number | null
    metric?: MetricUncheckedCreateNestedOneWithoutMetricsInput
  }

  export type MetricDataCreateOrConnectWithoutNavigationTimingInput = {
    where: MetricDataWhereUniqueInput
    create: XOR<MetricDataCreateWithoutNavigationTimingInput, MetricDataUncheckedCreateWithoutNavigationTimingInput>
  }

  export type MetricDataUpsertWithoutNavigationTimingInput = {
    update: XOR<MetricDataUpdateWithoutNavigationTimingInput, MetricDataUncheckedUpdateWithoutNavigationTimingInput>
    create: XOR<MetricDataCreateWithoutNavigationTimingInput, MetricDataUncheckedCreateWithoutNavigationTimingInput>
    where?: MetricDataWhereInput
  }

  export type MetricDataUpdateToOneWithWhereWithoutNavigationTimingInput = {
    where?: MetricDataWhereInput
    data: XOR<MetricDataUpdateWithoutNavigationTimingInput, MetricDataUncheckedUpdateWithoutNavigationTimingInput>
  }

  export type MetricDataUpdateWithoutNavigationTimingInput = {
    id?: StringFieldUpdateOperationsInput | string
    CLS?: NullableFloatFieldUpdateOperationsInput | number | null
    FCP?: NullableFloatFieldUpdateOperationsInput | number | null
    INP?: NullableFloatFieldUpdateOperationsInput | number | null
    LCP?: NullableFloatFieldUpdateOperationsInput | number | null
    TTFB?: NullableFloatFieldUpdateOperationsInput | number | null
    metric?: MetricUpdateOneWithoutMetricsNestedInput
  }

  export type MetricDataUncheckedUpdateWithoutNavigationTimingInput = {
    id?: StringFieldUpdateOperationsInput | string
    CLS?: NullableFloatFieldUpdateOperationsInput | number | null
    FCP?: NullableFloatFieldUpdateOperationsInput | number | null
    INP?: NullableFloatFieldUpdateOperationsInput | number | null
    LCP?: NullableFloatFieldUpdateOperationsInput | number | null
    TTFB?: NullableFloatFieldUpdateOperationsInput | number | null
    metric?: MetricUncheckedUpdateOneWithoutMetricsNestedInput
  }

  export type MetricCreateWithoutConnectionInput = {
    id?: string
    createdAt?: Date | string
    path: string
    userAgent: string
    metrics: MetricDataCreateNestedOneWithoutMetricInput
  }

  export type MetricUncheckedCreateWithoutConnectionInput = {
    id?: string
    createdAt?: Date | string
    path: string
    userAgent: string
    metricDataId: string
  }

  export type MetricCreateOrConnectWithoutConnectionInput = {
    where: MetricWhereUniqueInput
    create: XOR<MetricCreateWithoutConnectionInput, MetricUncheckedCreateWithoutConnectionInput>
  }

  export type MetricUpsertWithoutConnectionInput = {
    update: XOR<MetricUpdateWithoutConnectionInput, MetricUncheckedUpdateWithoutConnectionInput>
    create: XOR<MetricCreateWithoutConnectionInput, MetricUncheckedCreateWithoutConnectionInput>
    where?: MetricWhereInput
  }

  export type MetricUpdateToOneWithWhereWithoutConnectionInput = {
    where?: MetricWhereInput
    data: XOR<MetricUpdateWithoutConnectionInput, MetricUncheckedUpdateWithoutConnectionInput>
  }

  export type MetricUpdateWithoutConnectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    path?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    metrics?: MetricDataUpdateOneRequiredWithoutMetricNestedInput
  }

  export type MetricUncheckedUpdateWithoutConnectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    path?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    metricDataId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}