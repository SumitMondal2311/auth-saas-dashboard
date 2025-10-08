/**
 * Client
 **/

import * as runtime from "./runtime/library.js";
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model CliSession
 *
 */
export type CliSession = $Result.DefaultSelection<Prisma.$CliSessionPayload>;
/**
 * Model Application
 *
 */
export type Application = $Result.DefaultSelection<Prisma.$ApplicationPayload>;
/**
 * Model AppUser
 *
 */
export type AppUser = $Result.DefaultSelection<Prisma.$AppUserPayload>;
/**
 * Model AppUserAccount
 *
 */
export type AppUserAccount = $Result.DefaultSelection<Prisma.$AppUserAccountPayload>;
/**
 * Model AppUserEmail
 *
 */
export type AppUserEmail = $Result.DefaultSelection<Prisma.$AppUserEmailPayload>;
/**
 * Model AppUserSession
 *
 */
export type AppUserSession = $Result.DefaultSelection<Prisma.$AppUserSessionPayload>;
/**
 * Model AppUserOAuthAccount
 *
 */
export type AppUserOAuthAccount = $Result.DefaultSelection<Prisma.$AppUserOAuthAccountPayload>;

/**
 * Enums
 */
export namespace $Enums {
    export const OAuthProvider: {
        GITHUB: "GITHUB";
        GOOGLE: "GOOGLE";
    };

    export type OAuthProvider = (typeof OAuthProvider)[keyof typeof OAuthProvider];
}

export type OAuthProvider = $Enums.OAuthProvider;

export const OAuthProvider: typeof $Enums.OAuthProvider;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
    ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
    const U = "log" extends keyof ClientOptions
        ? ClientOptions["log"] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
            ? Prisma.GetEvents<ClientOptions["log"]>
            : never
        : never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["other"] };

    /**
     * ##  Prisma Client ʲˢ
     *
     * Type-safe database client for TypeScript & Node.js
     * @example
     * ```
     * const prisma = new PrismaClient()
     * // Fetch zero or more Users
     * const users = await prisma.user.findMany()
     * ```
     *
     *
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
     */

    constructor(optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
    $on<V extends U>(
        eventType: V,
        callback: (event: V extends "query" ? Prisma.QueryEvent : Prisma.LogEvent) => void
    ): PrismaClient;

    /**
     * Connect with the database
     */
    $connect(): $Utils.JsPromise<void>;

    /**
     * Disconnect from the database
     */
    $disconnect(): $Utils.JsPromise<void>;

    /**
     * Executes a prepared raw query and returns the number of affected rows.
     * @example
     * ```
     * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
     */
    $executeRaw<T = unknown>(
        query: TemplateStringsArray | Prisma.Sql,
        ...values: any[]
    ): Prisma.PrismaPromise<number>;

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
    $queryRaw<T = unknown>(
        query: TemplateStringsArray | Prisma.Sql,
        ...values: any[]
    ): Prisma.PrismaPromise<T>;

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
    $transaction<P extends Prisma.PrismaPromise<any>[]>(
        arg: [...P],
        options?: { isolationLevel?: Prisma.TransactionIsolationLevel }
    ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

    $transaction<R>(
        fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
        options?: {
            maxWait?: number;
            timeout?: number;
            isolationLevel?: Prisma.TransactionIsolationLevel;
        }
    ): $Utils.JsPromise<R>;

    $extends: $Extensions.ExtendsHook<
        "extends",
        Prisma.TypeMapCb<ClientOptions>,
        ExtArgs,
        $Utils.Call<
            Prisma.TypeMapCb<ClientOptions>,
            {
                extArgs: ExtArgs;
            }
        >
    >;

    /**
     * `prisma.user`: Exposes CRUD operations for the **User** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Users
     * const users = await prisma.user.findMany()
     * ```
     */
    get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

    /**
     * `prisma.cliSession`: Exposes CRUD operations for the **CliSession** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more CliSessions
     * const cliSessions = await prisma.cliSession.findMany()
     * ```
     */
    get cliSession(): Prisma.CliSessionDelegate<ExtArgs, ClientOptions>;

    /**
     * `prisma.application`: Exposes CRUD operations for the **Application** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Applications
     * const applications = await prisma.application.findMany()
     * ```
     */
    get application(): Prisma.ApplicationDelegate<ExtArgs, ClientOptions>;

    /**
     * `prisma.appUser`: Exposes CRUD operations for the **AppUser** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more AppUsers
     * const appUsers = await prisma.appUser.findMany()
     * ```
     */
    get appUser(): Prisma.AppUserDelegate<ExtArgs, ClientOptions>;

    /**
     * `prisma.appUserAccount`: Exposes CRUD operations for the **AppUserAccount** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more AppUserAccounts
     * const appUserAccounts = await prisma.appUserAccount.findMany()
     * ```
     */
    get appUserAccount(): Prisma.AppUserAccountDelegate<ExtArgs, ClientOptions>;

    /**
     * `prisma.appUserEmail`: Exposes CRUD operations for the **AppUserEmail** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more AppUserEmails
     * const appUserEmails = await prisma.appUserEmail.findMany()
     * ```
     */
    get appUserEmail(): Prisma.AppUserEmailDelegate<ExtArgs, ClientOptions>;

    /**
     * `prisma.appUserSession`: Exposes CRUD operations for the **AppUserSession** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more AppUserSessions
     * const appUserSessions = await prisma.appUserSession.findMany()
     * ```
     */
    get appUserSession(): Prisma.AppUserSessionDelegate<ExtArgs, ClientOptions>;

    /**
     * `prisma.appUserOAuthAccount`: Exposes CRUD operations for the **AppUserOAuthAccount** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more AppUserOAuthAccounts
     * const appUserOAuthAccounts = await prisma.appUserOAuthAccount.findMany()
     * ```
     */
    get appUserOAuthAccount(): Prisma.AppUserOAuthAccountDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
    export import DMMF = runtime.DMMF;

    export type PrismaPromise<T> = $Public.PrismaPromise<T>;

    /**
     * Validator
     */
    export import validator = runtime.Public.validator;

    /**
     * Prisma Errors
     */
    export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
    export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
    export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
    export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
    export import PrismaClientValidationError = runtime.PrismaClientValidationError;

    /**
     * Re-export of sql-template-tag
     */
    export import sql = runtime.sqltag;
    export import empty = runtime.empty;
    export import join = runtime.join;
    export import raw = runtime.raw;
    export import Sql = runtime.Sql;

    /**
     * Decimal.js
     */
    export import Decimal = runtime.Decimal;

    export type DecimalJsLike = runtime.DecimalJsLike;

    /**
     * Metrics
     */
    export type Metrics = runtime.Metrics;
    export type Metric<T> = runtime.Metric<T>;
    export type MetricHistogram = runtime.MetricHistogram;
    export type MetricHistogramBucket = runtime.MetricHistogramBucket;

    /**
     * Extensions
     */
    export import Extension = $Extensions.UserArgs;
    export import getExtensionContext = runtime.Extensions.getExtensionContext;
    export import Args = $Public.Args;
    export import Payload = $Public.Payload;
    export import Result = $Public.Result;
    export import Exact = $Public.Exact;

    /**
     * Prisma Client JS version: 6.17.0
     * Query Engine version: c0aafc03b8ef6cdced8654b9a817999e02457d6a
     */
    export type PrismaVersion = {
        client: string;
    };

    export const prismaVersion: PrismaVersion;

    /**
     * Utility Types
     */

    export import JsonObject = runtime.JsonObject;
    export import JsonArray = runtime.JsonArray;
    export import JsonValue = runtime.JsonValue;
    export import InputJsonObject = runtime.InputJsonObject;
    export import InputJsonArray = runtime.InputJsonArray;
    export import InputJsonValue = runtime.InputJsonValue;

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
            private DbNull: never;
            private constructor();
        }

        /**
         * Type of `Prisma.JsonNull`.
         *
         * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
         *
         * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
         */
        class JsonNull {
            private JsonNull: never;
            private constructor();
        }

        /**
         * Type of `Prisma.AnyNull`.
         *
         * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
         *
         * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
         */
        class AnyNull {
            private AnyNull: never;
            private constructor();
        }
    }

    /**
     * Helper for filtering JSON entries that have `null` on the database (empty on the db)
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    export const DbNull: NullTypes.DbNull;

    /**
     * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    export const JsonNull: NullTypes.JsonNull;

    /**
     * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    export const AnyNull: NullTypes.AnyNull;

    type SelectAndInclude = {
        select: any;
        include: any;
    };

    type SelectAndOmit = {
        select: any;
        omit: any;
    };

    /**
     * Get the type of the value, that the Promise holds.
     */
    export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

    /**
     * Get the return type of a function which returns a Promise.
     */
    export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<
        ReturnType<T>
    >;

    /**
     * From T, pick a set of properties whose keys are in the union K
     */
    type Prisma__Pick<T, K extends keyof T> = {
        [P in K]: T[P];
    };

    export type Enumerable<T> = T | Array<T>;

    export type RequiredKeys<T> = {
        [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
    }[keyof T];

    export type TruthyKeys<T> = keyof {
        [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
    };

    export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
        [key in keyof T]: key extends keyof U ? T[key] : never;
    } & (T extends SelectAndInclude
        ? "Please either choose `select` or `include`."
        : T extends SelectAndOmit
          ? "Please either choose `select` or `omit`."
          : {});

    /**
     * Subset + Intersection
     * @desc From `T` pick properties that exist in `U` and intersect `K`
     */
    export type SubsetIntersection<T, U, K> = {
        [key in keyof T]: key extends keyof U ? T[key] : never;
    } & K;

    type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

    /**
     * XOR is needed to have a real mutually exclusive union type
     * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
     */
    type XOR<T, U> = T extends object
        ? U extends object
            ? (Without<T, U> & U) | (Without<U, T> & T)
            : U
        : T;

    /**
     * Is T a Record?
     */
    type IsObject<T extends any> =
        T extends Array<any>
            ? False
            : T extends Date
              ? False
              : T extends Uint8Array
                ? False
                : T extends BigInt
                  ? False
                  : T extends object
                    ? True
                    : False;

    /**
     * If it's T[], return T
     */
    export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

    /**
     * From ts-toolbelt
     */

    type __Either<O extends object, K extends Key> = Omit<O, K> &
        {
            // Merge all but K
            [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
        }[K];

    type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

    type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

    type _Either<O extends object, K extends Key, strict extends Boolean> = {
        1: EitherStrict<O, K>;
        0: EitherLoose<O, K>;
    }[strict];

    type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
        ? _Either<O, K, strict>
        : never;

    export type Union = any;

    type PatchUndefined<O extends object, O1 extends object> = {
        [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
    } & {};

    /** Helper Types for "Merge" **/
    export type IntersectOf<U extends Union> = (
        U extends unknown ? (k: U) => void : never
    ) extends (k: infer I) => void
        ? I
        : never;

    export type Overwrite<O extends object, O1 extends object> = {
        [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
    } & {};

    type _Merge<U extends object> = IntersectOf<
        Overwrite<
            U,
            {
                [K in keyof U]-?: At<U, K>;
            }
        >
    >;

    type Key = string | number | symbol;
    type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
    type AtStrict<O extends object, K extends Key> = O[K & keyof O];
    type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
    export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
        1: AtStrict<O, K>;
        0: AtLoose<O, K>;
    }[strict];

    export type ComputeRaw<A extends any> = A extends Function
        ? A
        : {
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
            ?
                  | (K extends keyof O ? { [P in K]: O[P] } & O : O)
                  | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
            : never
    >;

    type _Strict<U, _U = U> = U extends unknown
        ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
        : never;

    export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
    /** End Helper Types for "Merge" **/

    export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

    /**
  A [[Boolean]]
  */
    export type Boolean = True | False;

    // /**
    // 1
    // */
    export type True = 1;

    /**
  0
  */
    export type False = 0;

    export type Not<B extends Boolean> = {
        0: 1;
        1: 0;
    }[B];

    export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
        ? 0 // anything `never` is false
        : A1 extends A2
          ? 1
          : 0;

    export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

    export type Or<B1 extends Boolean, B2 extends Boolean> = {
        0: {
            0: 0;
            1: 1;
        };
        1: {
            0: 1;
            1: 1;
        };
    }[B1][B2];

    export type Keys<U extends Union> = U extends unknown ? keyof U : never;

    type Cast<A, B> = A extends B ? A : B;

    export const type: unique symbol;

    /**
     * Used by group by
     */

    export type GetScalarType<T, O> = O extends object
        ? {
              [P in keyof T]: P extends keyof O ? O[P] : never;
          }
        : never;

    type FieldPaths<T, U = Omit<T, "_avg" | "_sum" | "_count" | "_min" | "_max">> =
        IsObject<T> extends True ? U : T;

    type GetHavingFields<T> = {
        [K in keyof T]: Or<Or<Extends<"OR", K>, Extends<"AND", K>>, Extends<"NOT", K>> extends True
            ? // infer is only needed to not hit TS limit
              // based on the brilliant idea of Pierre-Antoine Mills
              // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
              T[K] extends infer TK
                ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
                : never
            : {} extends FieldPaths<T[K]>
              ? never
              : K;
    }[keyof T];

    /**
     * Convert tuple to union
     */
    type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
    type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
    type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

    /**
     * Like `Pick`, but additionally can also accept an array of keys
     */
    type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<
        T,
        MaybeTupleToUnion<K>
    >;

    /**
     * Exclude all keys with underscores
     */
    type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

    export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

    type FieldRefInputType<Model, FieldType> = Model extends never
        ? never
        : FieldRef<Model, FieldType>;

    export const ModelName: {
        User: "User";
        CliSession: "CliSession";
        Application: "Application";
        AppUser: "AppUser";
        AppUserAccount: "AppUserAccount";
        AppUserEmail: "AppUserEmail";
        AppUserSession: "AppUserSession";
        AppUserOAuthAccount: "AppUserOAuthAccount";
    };

    export type ModelName = (typeof ModelName)[keyof typeof ModelName];

    export type Datasources = {
        db?: Datasource;
    };

    interface TypeMapCb<ClientOptions = {}>
        extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
        returns: Prisma.TypeMap<
            this["params"]["extArgs"],
            ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
        >;
    }

    export type TypeMap<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > = {
        globalOmitOptions: {
            omit: GlobalOmitOptions;
        };
        meta: {
            modelProps:
                | "user"
                | "cliSession"
                | "application"
                | "appUser"
                | "appUserAccount"
                | "appUserEmail"
                | "appUserSession"
                | "appUserOAuthAccount";
            txIsolationLevel: Prisma.TransactionIsolationLevel;
        };
        model: {
            User: {
                payload: Prisma.$UserPayload<ExtArgs>;
                fields: Prisma.UserFieldRefs;
                operations: {
                    findUnique: {
                        args: Prisma.UserFindUniqueArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
                    };
                    findUniqueOrThrow: {
                        args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$UserPayload>;
                    };
                    findFirst: {
                        args: Prisma.UserFindFirstArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
                    };
                    findFirstOrThrow: {
                        args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$UserPayload>;
                    };
                    findMany: {
                        args: Prisma.UserFindManyArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
                    };
                    create: {
                        args: Prisma.UserCreateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$UserPayload>;
                    };
                    createMany: {
                        args: Prisma.UserCreateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    createManyAndReturn: {
                        args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
                    };
                    delete: {
                        args: Prisma.UserDeleteArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$UserPayload>;
                    };
                    update: {
                        args: Prisma.UserUpdateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$UserPayload>;
                    };
                    deleteMany: {
                        args: Prisma.UserDeleteManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateMany: {
                        args: Prisma.UserUpdateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateManyAndReturn: {
                        args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
                    };
                    upsert: {
                        args: Prisma.UserUpsertArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$UserPayload>;
                    };
                    aggregate: {
                        args: Prisma.UserAggregateArgs<ExtArgs>;
                        result: $Utils.Optional<AggregateUser>;
                    };
                    groupBy: {
                        args: Prisma.UserGroupByArgs<ExtArgs>;
                        result: $Utils.Optional<UserGroupByOutputType>[];
                    };
                    count: {
                        args: Prisma.UserCountArgs<ExtArgs>;
                        result: $Utils.Optional<UserCountAggregateOutputType> | number;
                    };
                };
            };
            CliSession: {
                payload: Prisma.$CliSessionPayload<ExtArgs>;
                fields: Prisma.CliSessionFieldRefs;
                operations: {
                    findUnique: {
                        args: Prisma.CliSessionFindUniqueArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$CliSessionPayload> | null;
                    };
                    findUniqueOrThrow: {
                        args: Prisma.CliSessionFindUniqueOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$CliSessionPayload>;
                    };
                    findFirst: {
                        args: Prisma.CliSessionFindFirstArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$CliSessionPayload> | null;
                    };
                    findFirstOrThrow: {
                        args: Prisma.CliSessionFindFirstOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$CliSessionPayload>;
                    };
                    findMany: {
                        args: Prisma.CliSessionFindManyArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$CliSessionPayload>[];
                    };
                    create: {
                        args: Prisma.CliSessionCreateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$CliSessionPayload>;
                    };
                    createMany: {
                        args: Prisma.CliSessionCreateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    createManyAndReturn: {
                        args: Prisma.CliSessionCreateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$CliSessionPayload>[];
                    };
                    delete: {
                        args: Prisma.CliSessionDeleteArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$CliSessionPayload>;
                    };
                    update: {
                        args: Prisma.CliSessionUpdateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$CliSessionPayload>;
                    };
                    deleteMany: {
                        args: Prisma.CliSessionDeleteManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateMany: {
                        args: Prisma.CliSessionUpdateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateManyAndReturn: {
                        args: Prisma.CliSessionUpdateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$CliSessionPayload>[];
                    };
                    upsert: {
                        args: Prisma.CliSessionUpsertArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$CliSessionPayload>;
                    };
                    aggregate: {
                        args: Prisma.CliSessionAggregateArgs<ExtArgs>;
                        result: $Utils.Optional<AggregateCliSession>;
                    };
                    groupBy: {
                        args: Prisma.CliSessionGroupByArgs<ExtArgs>;
                        result: $Utils.Optional<CliSessionGroupByOutputType>[];
                    };
                    count: {
                        args: Prisma.CliSessionCountArgs<ExtArgs>;
                        result: $Utils.Optional<CliSessionCountAggregateOutputType> | number;
                    };
                };
            };
            Application: {
                payload: Prisma.$ApplicationPayload<ExtArgs>;
                fields: Prisma.ApplicationFieldRefs;
                operations: {
                    findUnique: {
                        args: Prisma.ApplicationFindUniqueArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null;
                    };
                    findUniqueOrThrow: {
                        args: Prisma.ApplicationFindUniqueOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>;
                    };
                    findFirst: {
                        args: Prisma.ApplicationFindFirstArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null;
                    };
                    findFirstOrThrow: {
                        args: Prisma.ApplicationFindFirstOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>;
                    };
                    findMany: {
                        args: Prisma.ApplicationFindManyArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[];
                    };
                    create: {
                        args: Prisma.ApplicationCreateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>;
                    };
                    createMany: {
                        args: Prisma.ApplicationCreateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    createManyAndReturn: {
                        args: Prisma.ApplicationCreateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[];
                    };
                    delete: {
                        args: Prisma.ApplicationDeleteArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>;
                    };
                    update: {
                        args: Prisma.ApplicationUpdateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>;
                    };
                    deleteMany: {
                        args: Prisma.ApplicationDeleteManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateMany: {
                        args: Prisma.ApplicationUpdateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateManyAndReturn: {
                        args: Prisma.ApplicationUpdateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[];
                    };
                    upsert: {
                        args: Prisma.ApplicationUpsertArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>;
                    };
                    aggregate: {
                        args: Prisma.ApplicationAggregateArgs<ExtArgs>;
                        result: $Utils.Optional<AggregateApplication>;
                    };
                    groupBy: {
                        args: Prisma.ApplicationGroupByArgs<ExtArgs>;
                        result: $Utils.Optional<ApplicationGroupByOutputType>[];
                    };
                    count: {
                        args: Prisma.ApplicationCountArgs<ExtArgs>;
                        result: $Utils.Optional<ApplicationCountAggregateOutputType> | number;
                    };
                };
            };
            AppUser: {
                payload: Prisma.$AppUserPayload<ExtArgs>;
                fields: Prisma.AppUserFieldRefs;
                operations: {
                    findUnique: {
                        args: Prisma.AppUserFindUniqueArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AppUserPayload> | null;
                    };
                    findUniqueOrThrow: {
                        args: Prisma.AppUserFindUniqueOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AppUserPayload>;
                    };
                    findFirst: {
                        args: Prisma.AppUserFindFirstArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AppUserPayload> | null;
                    };
                    findFirstOrThrow: {
                        args: Prisma.AppUserFindFirstOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AppUserPayload>;
                    };
                    findMany: {
                        args: Prisma.AppUserFindManyArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AppUserPayload>[];
                    };
                    create: {
                        args: Prisma.AppUserCreateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AppUserPayload>;
                    };
                    createMany: {
                        args: Prisma.AppUserCreateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    createManyAndReturn: {
                        args: Prisma.AppUserCreateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AppUserPayload>[];
                    };
                    delete: {
                        args: Prisma.AppUserDeleteArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AppUserPayload>;
                    };
                    update: {
                        args: Prisma.AppUserUpdateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AppUserPayload>;
                    };
                    deleteMany: {
                        args: Prisma.AppUserDeleteManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateMany: {
                        args: Prisma.AppUserUpdateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateManyAndReturn: {
                        args: Prisma.AppUserUpdateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AppUserPayload>[];
                    };
                    upsert: {
                        args: Prisma.AppUserUpsertArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AppUserPayload>;
                    };
                    aggregate: {
                        args: Prisma.AppUserAggregateArgs<ExtArgs>;
                        result: $Utils.Optional<AggregateAppUser>;
                    };
                    groupBy: {
                        args: Prisma.AppUserGroupByArgs<ExtArgs>;
                        result: $Utils.Optional<AppUserGroupByOutputType>[];
                    };
                    count: {
                        args: Prisma.AppUserCountArgs<ExtArgs>;
                        result: $Utils.Optional<AppUserCountAggregateOutputType> | number;
                    };
                };
            };
            AppUserAccount: {
                payload: Prisma.$AppUserAccountPayload<ExtArgs>;
                fields: Prisma.AppUserAccountFieldRefs;
                operations: {
                    findUnique: {
                        args: Prisma.AppUserAccountFindUniqueArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AppUserAccountPayload> | null;
                    };
                    findUniqueOrThrow: {
                        args: Prisma.AppUserAccountFindUniqueOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AppUserAccountPayload>;
                    };
                    findFirst: {
                        args: Prisma.AppUserAccountFindFirstArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AppUserAccountPayload> | null;
                    };
                    findFirstOrThrow: {
                        args: Prisma.AppUserAccountFindFirstOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AppUserAccountPayload>;
                    };
                    findMany: {
                        args: Prisma.AppUserAccountFindManyArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AppUserAccountPayload>[];
                    };
                    create: {
                        args: Prisma.AppUserAccountCreateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AppUserAccountPayload>;
                    };
                    createMany: {
                        args: Prisma.AppUserAccountCreateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    createManyAndReturn: {
                        args: Prisma.AppUserAccountCreateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AppUserAccountPayload>[];
                    };
                    delete: {
                        args: Prisma.AppUserAccountDeleteArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AppUserAccountPayload>;
                    };
                    update: {
                        args: Prisma.AppUserAccountUpdateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AppUserAccountPayload>;
                    };
                    deleteMany: {
                        args: Prisma.AppUserAccountDeleteManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateMany: {
                        args: Prisma.AppUserAccountUpdateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateManyAndReturn: {
                        args: Prisma.AppUserAccountUpdateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AppUserAccountPayload>[];
                    };
                    upsert: {
                        args: Prisma.AppUserAccountUpsertArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AppUserAccountPayload>;
                    };
                    aggregate: {
                        args: Prisma.AppUserAccountAggregateArgs<ExtArgs>;
                        result: $Utils.Optional<AggregateAppUserAccount>;
                    };
                    groupBy: {
                        args: Prisma.AppUserAccountGroupByArgs<ExtArgs>;
                        result: $Utils.Optional<AppUserAccountGroupByOutputType>[];
                    };
                    count: {
                        args: Prisma.AppUserAccountCountArgs<ExtArgs>;
                        result: $Utils.Optional<AppUserAccountCountAggregateOutputType> | number;
                    };
                };
            };
            AppUserEmail: {
                payload: Prisma.$AppUserEmailPayload<ExtArgs>;
                fields: Prisma.AppUserEmailFieldRefs;
                operations: {
                    findUnique: {
                        args: Prisma.AppUserEmailFindUniqueArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AppUserEmailPayload> | null;
                    };
                    findUniqueOrThrow: {
                        args: Prisma.AppUserEmailFindUniqueOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AppUserEmailPayload>;
                    };
                    findFirst: {
                        args: Prisma.AppUserEmailFindFirstArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AppUserEmailPayload> | null;
                    };
                    findFirstOrThrow: {
                        args: Prisma.AppUserEmailFindFirstOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AppUserEmailPayload>;
                    };
                    findMany: {
                        args: Prisma.AppUserEmailFindManyArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AppUserEmailPayload>[];
                    };
                    create: {
                        args: Prisma.AppUserEmailCreateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AppUserEmailPayload>;
                    };
                    createMany: {
                        args: Prisma.AppUserEmailCreateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    createManyAndReturn: {
                        args: Prisma.AppUserEmailCreateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AppUserEmailPayload>[];
                    };
                    delete: {
                        args: Prisma.AppUserEmailDeleteArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AppUserEmailPayload>;
                    };
                    update: {
                        args: Prisma.AppUserEmailUpdateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AppUserEmailPayload>;
                    };
                    deleteMany: {
                        args: Prisma.AppUserEmailDeleteManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateMany: {
                        args: Prisma.AppUserEmailUpdateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateManyAndReturn: {
                        args: Prisma.AppUserEmailUpdateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AppUserEmailPayload>[];
                    };
                    upsert: {
                        args: Prisma.AppUserEmailUpsertArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AppUserEmailPayload>;
                    };
                    aggregate: {
                        args: Prisma.AppUserEmailAggregateArgs<ExtArgs>;
                        result: $Utils.Optional<AggregateAppUserEmail>;
                    };
                    groupBy: {
                        args: Prisma.AppUserEmailGroupByArgs<ExtArgs>;
                        result: $Utils.Optional<AppUserEmailGroupByOutputType>[];
                    };
                    count: {
                        args: Prisma.AppUserEmailCountArgs<ExtArgs>;
                        result: $Utils.Optional<AppUserEmailCountAggregateOutputType> | number;
                    };
                };
            };
            AppUserSession: {
                payload: Prisma.$AppUserSessionPayload<ExtArgs>;
                fields: Prisma.AppUserSessionFieldRefs;
                operations: {
                    findUnique: {
                        args: Prisma.AppUserSessionFindUniqueArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AppUserSessionPayload> | null;
                    };
                    findUniqueOrThrow: {
                        args: Prisma.AppUserSessionFindUniqueOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AppUserSessionPayload>;
                    };
                    findFirst: {
                        args: Prisma.AppUserSessionFindFirstArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AppUserSessionPayload> | null;
                    };
                    findFirstOrThrow: {
                        args: Prisma.AppUserSessionFindFirstOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AppUserSessionPayload>;
                    };
                    findMany: {
                        args: Prisma.AppUserSessionFindManyArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AppUserSessionPayload>[];
                    };
                    create: {
                        args: Prisma.AppUserSessionCreateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AppUserSessionPayload>;
                    };
                    createMany: {
                        args: Prisma.AppUserSessionCreateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    createManyAndReturn: {
                        args: Prisma.AppUserSessionCreateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AppUserSessionPayload>[];
                    };
                    delete: {
                        args: Prisma.AppUserSessionDeleteArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AppUserSessionPayload>;
                    };
                    update: {
                        args: Prisma.AppUserSessionUpdateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AppUserSessionPayload>;
                    };
                    deleteMany: {
                        args: Prisma.AppUserSessionDeleteManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateMany: {
                        args: Prisma.AppUserSessionUpdateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateManyAndReturn: {
                        args: Prisma.AppUserSessionUpdateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AppUserSessionPayload>[];
                    };
                    upsert: {
                        args: Prisma.AppUserSessionUpsertArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AppUserSessionPayload>;
                    };
                    aggregate: {
                        args: Prisma.AppUserSessionAggregateArgs<ExtArgs>;
                        result: $Utils.Optional<AggregateAppUserSession>;
                    };
                    groupBy: {
                        args: Prisma.AppUserSessionGroupByArgs<ExtArgs>;
                        result: $Utils.Optional<AppUserSessionGroupByOutputType>[];
                    };
                    count: {
                        args: Prisma.AppUserSessionCountArgs<ExtArgs>;
                        result: $Utils.Optional<AppUserSessionCountAggregateOutputType> | number;
                    };
                };
            };
            AppUserOAuthAccount: {
                payload: Prisma.$AppUserOAuthAccountPayload<ExtArgs>;
                fields: Prisma.AppUserOAuthAccountFieldRefs;
                operations: {
                    findUnique: {
                        args: Prisma.AppUserOAuthAccountFindUniqueArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AppUserOAuthAccountPayload> | null;
                    };
                    findUniqueOrThrow: {
                        args: Prisma.AppUserOAuthAccountFindUniqueOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AppUserOAuthAccountPayload>;
                    };
                    findFirst: {
                        args: Prisma.AppUserOAuthAccountFindFirstArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AppUserOAuthAccountPayload> | null;
                    };
                    findFirstOrThrow: {
                        args: Prisma.AppUserOAuthAccountFindFirstOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AppUserOAuthAccountPayload>;
                    };
                    findMany: {
                        args: Prisma.AppUserOAuthAccountFindManyArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AppUserOAuthAccountPayload>[];
                    };
                    create: {
                        args: Prisma.AppUserOAuthAccountCreateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AppUserOAuthAccountPayload>;
                    };
                    createMany: {
                        args: Prisma.AppUserOAuthAccountCreateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    createManyAndReturn: {
                        args: Prisma.AppUserOAuthAccountCreateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AppUserOAuthAccountPayload>[];
                    };
                    delete: {
                        args: Prisma.AppUserOAuthAccountDeleteArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AppUserOAuthAccountPayload>;
                    };
                    update: {
                        args: Prisma.AppUserOAuthAccountUpdateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AppUserOAuthAccountPayload>;
                    };
                    deleteMany: {
                        args: Prisma.AppUserOAuthAccountDeleteManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateMany: {
                        args: Prisma.AppUserOAuthAccountUpdateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateManyAndReturn: {
                        args: Prisma.AppUserOAuthAccountUpdateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AppUserOAuthAccountPayload>[];
                    };
                    upsert: {
                        args: Prisma.AppUserOAuthAccountUpsertArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$AppUserOAuthAccountPayload>;
                    };
                    aggregate: {
                        args: Prisma.AppUserOAuthAccountAggregateArgs<ExtArgs>;
                        result: $Utils.Optional<AggregateAppUserOAuthAccount>;
                    };
                    groupBy: {
                        args: Prisma.AppUserOAuthAccountGroupByArgs<ExtArgs>;
                        result: $Utils.Optional<AppUserOAuthAccountGroupByOutputType>[];
                    };
                    count: {
                        args: Prisma.AppUserOAuthAccountCountArgs<ExtArgs>;
                        result:
                            | $Utils.Optional<AppUserOAuthAccountCountAggregateOutputType>
                            | number;
                    };
                };
            };
        };
    } & {
        other: {
            payload: any;
            operations: {
                $executeRaw: {
                    args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
                    result: any;
                };
                $executeRawUnsafe: {
                    args: [query: string, ...values: any[]];
                    result: any;
                };
                $queryRaw: {
                    args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
                    result: any;
                };
                $queryRawUnsafe: {
                    args: [query: string, ...values: any[]];
                    result: any;
                };
            };
        };
    };
    export const defineExtension: $Extensions.ExtendsHook<
        "define",
        Prisma.TypeMapCb,
        $Extensions.DefaultArgs
    >;
    export type DefaultPrismaClient = PrismaClient;
    export type ErrorFormat = "pretty" | "colorless" | "minimal";
    export interface PrismaClientOptions {
        /**
         * Overwrites the datasource url from your schema.prisma file
         */
        datasources?: Datasources;
        /**
         * Overwrites the datasource url from your schema.prisma file
         */
        datasourceUrl?: string;
        /**
         * @default "colorless"
         */
        errorFormat?: ErrorFormat;
        /**
         * @example
         * ```
         * // Shorthand for `emit: 'stdout'`
         * log: ['query', 'info', 'warn', 'error']
         *
         * // Emit as events only
         * log: [
         *   { emit: 'event', level: 'query' },
         *   { emit: 'event', level: 'info' },
         *   { emit: 'event', level: 'warn' }
         *   { emit: 'event', level: 'error' }
         * ]
         *
         * / Emit as events and log to stdout
         * og: [
         *  { emit: 'stdout', level: 'query' },
         *  { emit: 'stdout', level: 'info' },
         *  { emit: 'stdout', level: 'warn' }
         *  { emit: 'stdout', level: 'error' }
         *
         * ```
         * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
         */
        log?: (LogLevel | LogDefinition)[];
        /**
         * The default values for transactionOptions
         * maxWait ?= 2000
         * timeout ?= 5000
         */
        transactionOptions?: {
            maxWait?: number;
            timeout?: number;
            isolationLevel?: Prisma.TransactionIsolationLevel;
        };
        /**
         * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
         */
        adapter?: runtime.SqlDriverAdapterFactory | null;
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
        omit?: Prisma.GlobalOmitConfig;
    }
    export type GlobalOmitConfig = {
        user?: UserOmit;
        cliSession?: CliSessionOmit;
        application?: ApplicationOmit;
        appUser?: AppUserOmit;
        appUserAccount?: AppUserAccountOmit;
        appUserEmail?: AppUserEmailOmit;
        appUserSession?: AppUserSessionOmit;
        appUserOAuthAccount?: AppUserOAuthAccountOmit;
    };

    /* Types for Logging */
    export type LogLevel = "info" | "query" | "warn" | "error";
    export type LogDefinition = {
        level: LogLevel;
        emit: "stdout" | "event";
    };

    export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

    export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T["level"] : T>;

    export type GetEvents<T extends any[]> =
        T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;

    export type QueryEvent = {
        timestamp: Date;
        query: string;
        params: string;
        duration: number;
        target: string;
    };

    export type LogEvent = {
        timestamp: Date;
        message: string;
        target: string;
    };
    /* End Types for Logging */

    export type PrismaAction =
        | "findUnique"
        | "findUniqueOrThrow"
        | "findMany"
        | "findFirst"
        | "findFirstOrThrow"
        | "create"
        | "createMany"
        | "createManyAndReturn"
        | "update"
        | "updateMany"
        | "updateManyAndReturn"
        | "upsert"
        | "delete"
        | "deleteMany"
        | "executeRaw"
        | "queryRaw"
        | "aggregate"
        | "count"
        | "runCommandRaw"
        | "findRaw"
        | "groupBy";

    // tested in getLogLevel.test.ts
    export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

    /**
     * `PrismaClient` proxy available in interactive transactions.
     */
    export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

    export type Datasource = {
        url?: string;
    };

    /**
     * Count Types
     */

    /**
     * Count Type UserCountOutputType
     */

    export type UserCountOutputType = {
        applications: number;
        cliSessions: number;
    };

    export type UserCountOutputTypeSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        applications?: boolean | UserCountOutputTypeCountApplicationsArgs;
        cliSessions?: boolean | UserCountOutputTypeCountCliSessionsArgs;
    };

    // Custom InputTypes
    /**
     * UserCountOutputType without action
     */
    export type UserCountOutputTypeDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the UserCountOutputType
         */
        select?: UserCountOutputTypeSelect<ExtArgs> | null;
    };

    /**
     * UserCountOutputType without action
     */
    export type UserCountOutputTypeCountApplicationsArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: ApplicationWhereInput;
    };

    /**
     * UserCountOutputType without action
     */
    export type UserCountOutputTypeCountCliSessionsArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: CliSessionWhereInput;
    };

    /**
     * Count Type ApplicationCountOutputType
     */

    export type ApplicationCountOutputType = {
        accounts: number;
        users: number;
        sessions: number;
        emails: number;
        oauthAccounts: number;
    };

    export type ApplicationCountOutputTypeSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        accounts?: boolean | ApplicationCountOutputTypeCountAccountsArgs;
        users?: boolean | ApplicationCountOutputTypeCountUsersArgs;
        sessions?: boolean | ApplicationCountOutputTypeCountSessionsArgs;
        emails?: boolean | ApplicationCountOutputTypeCountEmailsArgs;
        oauthAccounts?: boolean | ApplicationCountOutputTypeCountOauthAccountsArgs;
    };

    // Custom InputTypes
    /**
     * ApplicationCountOutputType without action
     */
    export type ApplicationCountOutputTypeDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ApplicationCountOutputType
         */
        select?: ApplicationCountOutputTypeSelect<ExtArgs> | null;
    };

    /**
     * ApplicationCountOutputType without action
     */
    export type ApplicationCountOutputTypeCountAccountsArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: AppUserAccountWhereInput;
    };

    /**
     * ApplicationCountOutputType without action
     */
    export type ApplicationCountOutputTypeCountUsersArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: AppUserWhereInput;
    };

    /**
     * ApplicationCountOutputType without action
     */
    export type ApplicationCountOutputTypeCountSessionsArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: AppUserSessionWhereInput;
    };

    /**
     * ApplicationCountOutputType without action
     */
    export type ApplicationCountOutputTypeCountEmailsArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: AppUserEmailWhereInput;
    };

    /**
     * ApplicationCountOutputType without action
     */
    export type ApplicationCountOutputTypeCountOauthAccountsArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: AppUserOAuthAccountWhereInput;
    };

    /**
     * Count Type AppUserCountOutputType
     */

    export type AppUserCountOutputType = {
        accounts: number;
    };

    export type AppUserCountOutputTypeSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        accounts?: boolean | AppUserCountOutputTypeCountAccountsArgs;
    };

    // Custom InputTypes
    /**
     * AppUserCountOutputType without action
     */
    export type AppUserCountOutputTypeDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserCountOutputType
         */
        select?: AppUserCountOutputTypeSelect<ExtArgs> | null;
    };

    /**
     * AppUserCountOutputType without action
     */
    export type AppUserCountOutputTypeCountAccountsArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: AppUserAccountWhereInput;
    };

    /**
     * Count Type AppUserAccountCountOutputType
     */

    export type AppUserAccountCountOutputType = {
        sessions: number;
        emails: number;
        oauthAccounts: number;
    };

    export type AppUserAccountCountOutputTypeSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        sessions?: boolean | AppUserAccountCountOutputTypeCountSessionsArgs;
        emails?: boolean | AppUserAccountCountOutputTypeCountEmailsArgs;
        oauthAccounts?: boolean | AppUserAccountCountOutputTypeCountOauthAccountsArgs;
    };

    // Custom InputTypes
    /**
     * AppUserAccountCountOutputType without action
     */
    export type AppUserAccountCountOutputTypeDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserAccountCountOutputType
         */
        select?: AppUserAccountCountOutputTypeSelect<ExtArgs> | null;
    };

    /**
     * AppUserAccountCountOutputType without action
     */
    export type AppUserAccountCountOutputTypeCountSessionsArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: AppUserSessionWhereInput;
    };

    /**
     * AppUserAccountCountOutputType without action
     */
    export type AppUserAccountCountOutputTypeCountEmailsArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: AppUserEmailWhereInput;
    };

    /**
     * AppUserAccountCountOutputType without action
     */
    export type AppUserAccountCountOutputTypeCountOauthAccountsArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: AppUserOAuthAccountWhereInput;
    };

    /**
     * Count Type AppUserEmailCountOutputType
     */

    export type AppUserEmailCountOutputType = {
        oauthAccounts: number;
    };

    export type AppUserEmailCountOutputTypeSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        oauthAccounts?: boolean | AppUserEmailCountOutputTypeCountOauthAccountsArgs;
    };

    // Custom InputTypes
    /**
     * AppUserEmailCountOutputType without action
     */
    export type AppUserEmailCountOutputTypeDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserEmailCountOutputType
         */
        select?: AppUserEmailCountOutputTypeSelect<ExtArgs> | null;
    };

    /**
     * AppUserEmailCountOutputType without action
     */
    export type AppUserEmailCountOutputTypeCountOauthAccountsArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: AppUserOAuthAccountWhereInput;
    };

    /**
     * Models
     */

    /**
     * Model User
     */

    export type AggregateUser = {
        _count: UserCountAggregateOutputType | null;
        _min: UserMinAggregateOutputType | null;
        _max: UserMaxAggregateOutputType | null;
    };

    export type UserMinAggregateOutputType = {
        id: string | null;
        isVerified: boolean | null;
        username: string | null;
        emailAddress: string | null;
        passwordHash: string | null;
        createdAt: Date | null;
        updatedAt: Date | null;
    };

    export type UserMaxAggregateOutputType = {
        id: string | null;
        isVerified: boolean | null;
        username: string | null;
        emailAddress: string | null;
        passwordHash: string | null;
        createdAt: Date | null;
        updatedAt: Date | null;
    };

    export type UserCountAggregateOutputType = {
        id: number;
        isVerified: number;
        username: number;
        emailAddress: number;
        passwordHash: number;
        createdAt: number;
        updatedAt: number;
        _all: number;
    };

    export type UserMinAggregateInputType = {
        id?: true;
        isVerified?: true;
        username?: true;
        emailAddress?: true;
        passwordHash?: true;
        createdAt?: true;
        updatedAt?: true;
    };

    export type UserMaxAggregateInputType = {
        id?: true;
        isVerified?: true;
        username?: true;
        emailAddress?: true;
        passwordHash?: true;
        createdAt?: true;
        updatedAt?: true;
    };

    export type UserCountAggregateInputType = {
        id?: true;
        isVerified?: true;
        username?: true;
        emailAddress?: true;
        passwordHash?: true;
        createdAt?: true;
        updatedAt?: true;
        _all?: true;
    };

    export type UserAggregateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which User to aggregate.
         */
        where?: UserWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Users to fetch.
         */
        orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: UserWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Users from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Users.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned Users
         **/
        _count?: true | UserCountAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: UserMinAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: UserMaxAggregateInputType;
    };

    export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends "_count" | "count"
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateUser[P]>
            : GetScalarType<T[P], AggregateUser[P]>;
    };

    export type UserGroupByArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: UserWhereInput;
        orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[];
        by: UserScalarFieldEnum[] | UserScalarFieldEnum;
        having?: UserScalarWhereWithAggregatesInput;
        take?: number;
        skip?: number;
        _count?: UserCountAggregateInputType | true;
        _min?: UserMinAggregateInputType;
        _max?: UserMaxAggregateInputType;
    };

    export type UserGroupByOutputType = {
        id: string;
        isVerified: boolean;
        username: string;
        emailAddress: string;
        passwordHash: string;
        createdAt: Date;
        updatedAt: Date;
        _count: UserCountAggregateOutputType | null;
        _min: UserMinAggregateOutputType | null;
        _max: UserMaxAggregateOutputType | null;
    };

    type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
        Array<
            PickEnumerable<UserGroupByOutputType, T["by"]> & {
                [P in keyof T & keyof UserGroupByOutputType]: P extends "_count"
                    ? T[P] extends boolean
                        ? number
                        : GetScalarType<T[P], UserGroupByOutputType[P]>
                    : GetScalarType<T[P], UserGroupByOutputType[P]>;
            }
        >
    >;

    export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        $Extensions.GetSelect<
            {
                id?: boolean;
                isVerified?: boolean;
                username?: boolean;
                emailAddress?: boolean;
                passwordHash?: boolean;
                createdAt?: boolean;
                updatedAt?: boolean;
                applications?: boolean | User$applicationsArgs<ExtArgs>;
                cliSessions?: boolean | User$cliSessionsArgs<ExtArgs>;
                _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
            },
            ExtArgs["result"]["user"]
        >;

    export type UserSelectCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            isVerified?: boolean;
            username?: boolean;
            emailAddress?: boolean;
            passwordHash?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
        },
        ExtArgs["result"]["user"]
    >;

    export type UserSelectUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            isVerified?: boolean;
            username?: boolean;
            emailAddress?: boolean;
            passwordHash?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
        },
        ExtArgs["result"]["user"]
    >;

    export type UserSelectScalar = {
        id?: boolean;
        isVerified?: boolean;
        username?: boolean;
        emailAddress?: boolean;
        passwordHash?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
    };

    export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        $Extensions.GetOmit<
            | "id"
            | "isVerified"
            | "username"
            | "emailAddress"
            | "passwordHash"
            | "createdAt"
            | "updatedAt",
            ExtArgs["result"]["user"]
        >;
    export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        applications?: boolean | User$applicationsArgs<ExtArgs>;
        cliSessions?: boolean | User$cliSessionsArgs<ExtArgs>;
        _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    };
    export type UserIncludeCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {};
    export type UserIncludeUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {};

    export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
        name: "User";
        objects: {
            applications: Prisma.$ApplicationPayload<ExtArgs>[];
            cliSessions: Prisma.$CliSessionPayload<ExtArgs>[];
        };
        scalars: $Extensions.GetPayloadResult<
            {
                id: string;
                isVerified: boolean;
                username: string;
                emailAddress: string;
                passwordHash: string;
                createdAt: Date;
                updatedAt: Date;
            },
            ExtArgs["result"]["user"]
        >;
        composites: {};
    };

    type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<
        Prisma.$UserPayload,
        S
    >;

    type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
        UserFindManyArgs,
        "select" | "include" | "distinct" | "omit"
    > & {
        select?: UserCountAggregateInputType | true;
    };

    export interface UserDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["model"]["User"]; meta: { name: "User" } };
        /**
         * Find zero or one User that matches the filter.
         * @param {UserFindUniqueArgs} args - Arguments to find a User
         * @example
         * // Get one User
         * const user = await prisma.user.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends UserFindUniqueArgs>(
            args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
        ): Prisma__UserClient<
            $Result.GetResult<
                Prisma.$UserPayload<ExtArgs>,
                T,
                "findUnique",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find one User that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
         * @example
         * // Get one User
         * const user = await prisma.user.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
            args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
        ): Prisma__UserClient<
            $Result.GetResult<
                Prisma.$UserPayload<ExtArgs>,
                T,
                "findUniqueOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first User that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {UserFindFirstArgs} args - Arguments to find a User
         * @example
         * // Get one User
         * const user = await prisma.user.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends UserFindFirstArgs>(
            args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
        ): Prisma__UserClient<
            $Result.GetResult<
                Prisma.$UserPayload<ExtArgs>,
                T,
                "findFirst",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first User that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
         * @example
         * // Get one User
         * const user = await prisma.user.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
            args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
        ): Prisma__UserClient<
            $Result.GetResult<
                Prisma.$UserPayload<ExtArgs>,
                T,
                "findFirstOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find zero or more Users that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all Users
         * const users = await prisma.user.findMany()
         *
         * // Get first 10 Users
         * const users = await prisma.user.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
         *
         */
        findMany<T extends UserFindManyArgs>(
            args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>
        >;

        /**
         * Create a User.
         * @param {UserCreateArgs} args - Arguments to create a User.
         * @example
         * // Create one User
         * const User = await prisma.user.create({
         *   data: {
         *     // ... data to create a User
         *   }
         * })
         *
         */
        create<T extends UserCreateArgs>(
            args: SelectSubset<T, UserCreateArgs<ExtArgs>>
        ): Prisma__UserClient<
            $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Create many Users.
         * @param {UserCreateManyArgs} args - Arguments to create many Users.
         * @example
         * // Create many Users
         * const user = await prisma.user.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends UserCreateManyArgs>(
            args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Create many Users and returns the data saved in the database.
         * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
         * @example
         * // Create many Users
         * const user = await prisma.user.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many Users and only return the `id`
         * const userWithIdOnly = await prisma.user.createManyAndReturn({
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
            args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$UserPayload<ExtArgs>,
                T,
                "createManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Delete a User.
         * @param {UserDeleteArgs} args - Arguments to delete one User.
         * @example
         * // Delete one User
         * const User = await prisma.user.delete({
         *   where: {
         *     // ... filter to delete one User
         *   }
         * })
         *
         */
        delete<T extends UserDeleteArgs>(
            args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
        ): Prisma__UserClient<
            $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Update one User.
         * @param {UserUpdateArgs} args - Arguments to update one User.
         * @example
         * // Update one User
         * const user = await prisma.user.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends UserUpdateArgs>(
            args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
        ): Prisma__UserClient<
            $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Delete zero or more Users.
         * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
         * @example
         * // Delete a few Users
         * const { count } = await prisma.user.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends UserDeleteManyArgs>(
            args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more Users.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many Users
         * const user = await prisma.user.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends UserUpdateManyArgs>(
            args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more Users and returns the data updated in the database.
         * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
         * @example
         * // Update many Users
         * const user = await prisma.user.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more Users and only return the `id`
         * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
        updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
            args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$UserPayload<ExtArgs>,
                T,
                "updateManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Create or update one User.
         * @param {UserUpsertArgs} args - Arguments to update or create a User.
         * @example
         * // Update or create a User
         * const user = await prisma.user.upsert({
         *   create: {
         *     // ... data to create a User
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the User we want to update
         *   }
         * })
         */
        upsert<T extends UserUpsertArgs>(
            args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
        ): Prisma__UserClient<
            $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Count the number of Users.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {UserCountArgs} args - Arguments to filter Users to count.
         * @example
         * // Count the number of Users
         * const count = await prisma.user.count({
         *   where: {
         *     // ... the filter for the Users we want to count
         *   }
         * })
         **/
        count<T extends UserCountArgs>(
            args?: Subset<T, UserCountArgs>
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<"select", any>
                ? T["select"] extends true
                    ? number
                    : GetScalarType<T["select"], UserCountAggregateOutputType>
                : number
        >;

        /**
         * Allows you to perform aggregations operations on a User.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
        aggregate<T extends UserAggregateArgs>(
            args: Subset<T, UserAggregateArgs>
        ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

        /**
         * Group by User.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {UserGroupByArgs} args - Group by arguments.
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
            T extends UserGroupByArgs,
            HasSelectOrTake extends Or<Extends<"skip", Keys<T>>, Extends<"take", Keys<T>>>,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: UserGroupByArgs["orderBy"] }
                : { orderBy?: UserGroupByArgs["orderBy"] },
            OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T["orderBy"]>>>,
            ByFields extends MaybeTupleToUnion<T["by"]>,
            ByValid extends Has<ByFields, OrderFields>,
            HavingFields extends GetHavingFields<T["having"]>,
            HavingValid extends Has<ByFields, HavingFields>,
            ByEmpty extends T["by"] extends never[] ? True : False,
            InputErrors extends ByEmpty extends True
                ? `Error: "by" must not be empty.`
                : HavingValid extends False
                  ? {
                        [P in HavingFields]: P extends ByFields
                            ? never
                            : P extends string
                              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                              : [Error, "Field ", P, ` in "having" needs to be provided in "by"`];
                    }[HavingFields]
                  : "take" extends Keys<T>
                    ? "orderBy" extends Keys<T>
                        ? ByValid extends True
                            ? {}
                            : {
                                  [P in OrderFields]: P extends ByFields
                                      ? never
                                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                              }[OrderFields]
                        : 'Error: If you provide "take", you also need to provide "orderBy"'
                    : "skip" extends Keys<T>
                      ? "orderBy" extends Keys<T>
                          ? ByValid extends True
                              ? {}
                              : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                                }[OrderFields]
                          : 'Error: If you provide "skip", you also need to provide "orderBy"'
                      : ByValid extends True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields],
        >(
            args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors
        ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
        /**
         * Fields of the User model
         */
        readonly fields: UserFieldRefs;
    }

    /**
     * The delegate class that acts as a "Promise-like" for User.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__UserClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise";
        applications<T extends User$applicationsArgs<ExtArgs> = {}>(
            args?: Subset<T, User$applicationsArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            | $Result.GetResult<
                  Prisma.$ApplicationPayload<ExtArgs>,
                  T,
                  "findMany",
                  GlobalOmitOptions
              >
            | Null
        >;
        cliSessions<T extends User$cliSessionsArgs<ExtArgs> = {}>(
            args?: Subset<T, User$cliSessionsArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            | $Result.GetResult<
                  Prisma.$CliSessionPayload<ExtArgs>,
                  T,
                  "findMany",
                  GlobalOmitOptions
              >
            | Null
        >;
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
            onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
        ): $Utils.JsPromise<TResult1 | TResult2>;
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(
            onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
        ): $Utils.JsPromise<T | TResult>;
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
    }

    /**
     * Fields of the User model
     */
    interface UserFieldRefs {
        readonly id: FieldRef<"User", "String">;
        readonly isVerified: FieldRef<"User", "Boolean">;
        readonly username: FieldRef<"User", "String">;
        readonly emailAddress: FieldRef<"User", "String">;
        readonly passwordHash: FieldRef<"User", "String">;
        readonly createdAt: FieldRef<"User", "DateTime">;
        readonly updatedAt: FieldRef<"User", "DateTime">;
    }

    // Custom InputTypes
    /**
     * User findUnique
     */
    export type UserFindUniqueArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null;
        /**
         * Filter, which User to fetch.
         */
        where: UserWhereUniqueInput;
    };

    /**
     * User findUniqueOrThrow
     */
    export type UserFindUniqueOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null;
        /**
         * Filter, which User to fetch.
         */
        where: UserWhereUniqueInput;
    };

    /**
     * User findFirst
     */
    export type UserFindFirstArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null;
        /**
         * Filter, which User to fetch.
         */
        where?: UserWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Users to fetch.
         */
        orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Users.
         */
        cursor?: UserWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Users from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Users.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Users.
         */
        distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
    };

    /**
     * User findFirstOrThrow
     */
    export type UserFindFirstOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null;
        /**
         * Filter, which User to fetch.
         */
        where?: UserWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Users to fetch.
         */
        orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Users.
         */
        cursor?: UserWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Users from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Users.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Users.
         */
        distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
    };

    /**
     * User findMany
     */
    export type UserFindManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null;
        /**
         * Filter, which Users to fetch.
         */
        where?: UserWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Users to fetch.
         */
        orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing Users.
         */
        cursor?: UserWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Users from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Users.
         */
        skip?: number;
        distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
    };

    /**
     * User create
     */
    export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        {
            /**
             * Select specific fields to fetch from the User
             */
            select?: UserSelect<ExtArgs> | null;
            /**
             * Omit specific fields from the User
             */
            omit?: UserOmit<ExtArgs> | null;
            /**
             * Choose, which related nodes to fetch as well
             */
            include?: UserInclude<ExtArgs> | null;
            /**
             * The data needed to create a User.
             */
            data: XOR<UserCreateInput, UserUncheckedCreateInput>;
        };

    /**
     * User createMany
     */
    export type UserCreateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to create many Users.
         */
        data: UserCreateManyInput | UserCreateManyInput[];
        skipDuplicates?: boolean;
    };

    /**
     * User createManyAndReturn
     */
    export type UserCreateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null;
        /**
         * The data used to create many Users.
         */
        data: UserCreateManyInput | UserCreateManyInput[];
        skipDuplicates?: boolean;
    };

    /**
     * User update
     */
    export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        {
            /**
             * Select specific fields to fetch from the User
             */
            select?: UserSelect<ExtArgs> | null;
            /**
             * Omit specific fields from the User
             */
            omit?: UserOmit<ExtArgs> | null;
            /**
             * Choose, which related nodes to fetch as well
             */
            include?: UserInclude<ExtArgs> | null;
            /**
             * The data needed to update a User.
             */
            data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
            /**
             * Choose, which User to update.
             */
            where: UserWhereUniqueInput;
        };

    /**
     * User updateMany
     */
    export type UserUpdateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to update Users.
         */
        data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
        /**
         * Filter which Users to update
         */
        where?: UserWhereInput;
        /**
         * Limit how many Users to update.
         */
        limit?: number;
    };

    /**
     * User updateManyAndReturn
     */
    export type UserUpdateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelectUpdateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null;
        /**
         * The data used to update Users.
         */
        data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
        /**
         * Filter which Users to update
         */
        where?: UserWhereInput;
        /**
         * Limit how many Users to update.
         */
        limit?: number;
    };

    /**
     * User upsert
     */
    export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        {
            /**
             * Select specific fields to fetch from the User
             */
            select?: UserSelect<ExtArgs> | null;
            /**
             * Omit specific fields from the User
             */
            omit?: UserOmit<ExtArgs> | null;
            /**
             * Choose, which related nodes to fetch as well
             */
            include?: UserInclude<ExtArgs> | null;
            /**
             * The filter to search for the User to update in case it exists.
             */
            where: UserWhereUniqueInput;
            /**
             * In case the User found by the `where` argument doesn't exist, create a new User with this data.
             */
            create: XOR<UserCreateInput, UserUncheckedCreateInput>;
            /**
             * In case the User was found with the provided `where` argument, update it with this data.
             */
            update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
        };

    /**
     * User delete
     */
    export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        {
            /**
             * Select specific fields to fetch from the User
             */
            select?: UserSelect<ExtArgs> | null;
            /**
             * Omit specific fields from the User
             */
            omit?: UserOmit<ExtArgs> | null;
            /**
             * Choose, which related nodes to fetch as well
             */
            include?: UserInclude<ExtArgs> | null;
            /**
             * Filter which User to delete.
             */
            where: UserWhereUniqueInput;
        };

    /**
     * User deleteMany
     */
    export type UserDeleteManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which Users to delete
         */
        where?: UserWhereInput;
        /**
         * Limit how many Users to delete.
         */
        limit?: number;
    };

    /**
     * User.applications
     */
    export type User$applicationsArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Application
         */
        select?: ApplicationSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Application
         */
        omit?: ApplicationOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ApplicationInclude<ExtArgs> | null;
        where?: ApplicationWhereInput;
        orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[];
        cursor?: ApplicationWhereUniqueInput;
        take?: number;
        skip?: number;
        distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[];
    };

    /**
     * User.cliSessions
     */
    export type User$cliSessionsArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the CliSession
         */
        select?: CliSessionSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the CliSession
         */
        omit?: CliSessionOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: CliSessionInclude<ExtArgs> | null;
        where?: CliSessionWhereInput;
        orderBy?: CliSessionOrderByWithRelationInput | CliSessionOrderByWithRelationInput[];
        cursor?: CliSessionWhereUniqueInput;
        take?: number;
        skip?: number;
        distinct?: CliSessionScalarFieldEnum | CliSessionScalarFieldEnum[];
    };

    /**
     * User without action
     */
    export type UserDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the User
         */
        select?: UserSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the User
         */
        omit?: UserOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: UserInclude<ExtArgs> | null;
    };

    /**
     * Model CliSession
     */

    export type AggregateCliSession = {
        _count: CliSessionCountAggregateOutputType | null;
        _min: CliSessionMinAggregateOutputType | null;
        _max: CliSessionMaxAggregateOutputType | null;
    };

    export type CliSessionMinAggregateOutputType = {
        id: string | null;
        userId: string | null;
        tokenHash: string | null;
        createdAt: Date | null;
    };

    export type CliSessionMaxAggregateOutputType = {
        id: string | null;
        userId: string | null;
        tokenHash: string | null;
        createdAt: Date | null;
    };

    export type CliSessionCountAggregateOutputType = {
        id: number;
        userId: number;
        tokenHash: number;
        createdAt: number;
        _all: number;
    };

    export type CliSessionMinAggregateInputType = {
        id?: true;
        userId?: true;
        tokenHash?: true;
        createdAt?: true;
    };

    export type CliSessionMaxAggregateInputType = {
        id?: true;
        userId?: true;
        tokenHash?: true;
        createdAt?: true;
    };

    export type CliSessionCountAggregateInputType = {
        id?: true;
        userId?: true;
        tokenHash?: true;
        createdAt?: true;
        _all?: true;
    };

    export type CliSessionAggregateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which CliSession to aggregate.
         */
        where?: CliSessionWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of CliSessions to fetch.
         */
        orderBy?: CliSessionOrderByWithRelationInput | CliSessionOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: CliSessionWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` CliSessions from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` CliSessions.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned CliSessions
         **/
        _count?: true | CliSessionCountAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: CliSessionMinAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: CliSessionMaxAggregateInputType;
    };

    export type GetCliSessionAggregateType<T extends CliSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateCliSession]: P extends "_count" | "count"
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateCliSession[P]>
            : GetScalarType<T[P], AggregateCliSession[P]>;
    };

    export type CliSessionGroupByArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: CliSessionWhereInput;
        orderBy?: CliSessionOrderByWithAggregationInput | CliSessionOrderByWithAggregationInput[];
        by: CliSessionScalarFieldEnum[] | CliSessionScalarFieldEnum;
        having?: CliSessionScalarWhereWithAggregatesInput;
        take?: number;
        skip?: number;
        _count?: CliSessionCountAggregateInputType | true;
        _min?: CliSessionMinAggregateInputType;
        _max?: CliSessionMaxAggregateInputType;
    };

    export type CliSessionGroupByOutputType = {
        id: string;
        userId: string;
        tokenHash: string;
        createdAt: Date;
        _count: CliSessionCountAggregateOutputType | null;
        _min: CliSessionMinAggregateOutputType | null;
        _max: CliSessionMaxAggregateOutputType | null;
    };

    type GetCliSessionGroupByPayload<T extends CliSessionGroupByArgs> = Prisma.PrismaPromise<
        Array<
            PickEnumerable<CliSessionGroupByOutputType, T["by"]> & {
                [P in keyof T & keyof CliSessionGroupByOutputType]: P extends "_count"
                    ? T[P] extends boolean
                        ? number
                        : GetScalarType<T[P], CliSessionGroupByOutputType[P]>
                    : GetScalarType<T[P], CliSessionGroupByOutputType[P]>;
            }
        >
    >;

    export type CliSessionSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            userId?: boolean;
            tokenHash?: boolean;
            createdAt?: boolean;
            user?: boolean | UserDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["cliSession"]
    >;

    export type CliSessionSelectCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            userId?: boolean;
            tokenHash?: boolean;
            createdAt?: boolean;
            user?: boolean | UserDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["cliSession"]
    >;

    export type CliSessionSelectUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            userId?: boolean;
            tokenHash?: boolean;
            createdAt?: boolean;
            user?: boolean | UserDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["cliSession"]
    >;

    export type CliSessionSelectScalar = {
        id?: boolean;
        userId?: boolean;
        tokenHash?: boolean;
        createdAt?: boolean;
    };

    export type CliSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        $Extensions.GetOmit<
            "id" | "userId" | "tokenHash" | "createdAt",
            ExtArgs["result"]["cliSession"]
        >;
    export type CliSessionInclude<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        user?: boolean | UserDefaultArgs<ExtArgs>;
    };
    export type CliSessionIncludeCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        user?: boolean | UserDefaultArgs<ExtArgs>;
    };
    export type CliSessionIncludeUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        user?: boolean | UserDefaultArgs<ExtArgs>;
    };

    export type $CliSessionPayload<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        name: "CliSession";
        objects: {
            user: Prisma.$UserPayload<ExtArgs>;
        };
        scalars: $Extensions.GetPayloadResult<
            {
                id: string;
                userId: string;
                tokenHash: string;
                createdAt: Date;
            },
            ExtArgs["result"]["cliSession"]
        >;
        composites: {};
    };

    type CliSessionGetPayload<S extends boolean | null | undefined | CliSessionDefaultArgs> =
        $Result.GetResult<Prisma.$CliSessionPayload, S>;

    type CliSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        Omit<CliSessionFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
            select?: CliSessionCountAggregateInputType | true;
        };

    export interface CliSessionDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: {
            types: Prisma.TypeMap<ExtArgs>["model"]["CliSession"];
            meta: { name: "CliSession" };
        };
        /**
         * Find zero or one CliSession that matches the filter.
         * @param {CliSessionFindUniqueArgs} args - Arguments to find a CliSession
         * @example
         * // Get one CliSession
         * const cliSession = await prisma.cliSession.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends CliSessionFindUniqueArgs>(
            args: SelectSubset<T, CliSessionFindUniqueArgs<ExtArgs>>
        ): Prisma__CliSessionClient<
            $Result.GetResult<
                Prisma.$CliSessionPayload<ExtArgs>,
                T,
                "findUnique",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find one CliSession that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {CliSessionFindUniqueOrThrowArgs} args - Arguments to find a CliSession
         * @example
         * // Get one CliSession
         * const cliSession = await prisma.cliSession.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends CliSessionFindUniqueOrThrowArgs>(
            args: SelectSubset<T, CliSessionFindUniqueOrThrowArgs<ExtArgs>>
        ): Prisma__CliSessionClient<
            $Result.GetResult<
                Prisma.$CliSessionPayload<ExtArgs>,
                T,
                "findUniqueOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first CliSession that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {CliSessionFindFirstArgs} args - Arguments to find a CliSession
         * @example
         * // Get one CliSession
         * const cliSession = await prisma.cliSession.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends CliSessionFindFirstArgs>(
            args?: SelectSubset<T, CliSessionFindFirstArgs<ExtArgs>>
        ): Prisma__CliSessionClient<
            $Result.GetResult<
                Prisma.$CliSessionPayload<ExtArgs>,
                T,
                "findFirst",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first CliSession that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {CliSessionFindFirstOrThrowArgs} args - Arguments to find a CliSession
         * @example
         * // Get one CliSession
         * const cliSession = await prisma.cliSession.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends CliSessionFindFirstOrThrowArgs>(
            args?: SelectSubset<T, CliSessionFindFirstOrThrowArgs<ExtArgs>>
        ): Prisma__CliSessionClient<
            $Result.GetResult<
                Prisma.$CliSessionPayload<ExtArgs>,
                T,
                "findFirstOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find zero or more CliSessions that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {CliSessionFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all CliSessions
         * const cliSessions = await prisma.cliSession.findMany()
         *
         * // Get first 10 CliSessions
         * const cliSessions = await prisma.cliSession.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const cliSessionWithIdOnly = await prisma.cliSession.findMany({ select: { id: true } })
         *
         */
        findMany<T extends CliSessionFindManyArgs>(
            args?: SelectSubset<T, CliSessionFindManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<Prisma.$CliSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>
        >;

        /**
         * Create a CliSession.
         * @param {CliSessionCreateArgs} args - Arguments to create a CliSession.
         * @example
         * // Create one CliSession
         * const CliSession = await prisma.cliSession.create({
         *   data: {
         *     // ... data to create a CliSession
         *   }
         * })
         *
         */
        create<T extends CliSessionCreateArgs>(
            args: SelectSubset<T, CliSessionCreateArgs<ExtArgs>>
        ): Prisma__CliSessionClient<
            $Result.GetResult<Prisma.$CliSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Create many CliSessions.
         * @param {CliSessionCreateManyArgs} args - Arguments to create many CliSessions.
         * @example
         * // Create many CliSessions
         * const cliSession = await prisma.cliSession.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends CliSessionCreateManyArgs>(
            args?: SelectSubset<T, CliSessionCreateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Create many CliSessions and returns the data saved in the database.
         * @param {CliSessionCreateManyAndReturnArgs} args - Arguments to create many CliSessions.
         * @example
         * // Create many CliSessions
         * const cliSession = await prisma.cliSession.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many CliSessions and only return the `id`
         * const cliSessionWithIdOnly = await prisma.cliSession.createManyAndReturn({
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends CliSessionCreateManyAndReturnArgs>(
            args?: SelectSubset<T, CliSessionCreateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$CliSessionPayload<ExtArgs>,
                T,
                "createManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Delete a CliSession.
         * @param {CliSessionDeleteArgs} args - Arguments to delete one CliSession.
         * @example
         * // Delete one CliSession
         * const CliSession = await prisma.cliSession.delete({
         *   where: {
         *     // ... filter to delete one CliSession
         *   }
         * })
         *
         */
        delete<T extends CliSessionDeleteArgs>(
            args: SelectSubset<T, CliSessionDeleteArgs<ExtArgs>>
        ): Prisma__CliSessionClient<
            $Result.GetResult<Prisma.$CliSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Update one CliSession.
         * @param {CliSessionUpdateArgs} args - Arguments to update one CliSession.
         * @example
         * // Update one CliSession
         * const cliSession = await prisma.cliSession.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends CliSessionUpdateArgs>(
            args: SelectSubset<T, CliSessionUpdateArgs<ExtArgs>>
        ): Prisma__CliSessionClient<
            $Result.GetResult<Prisma.$CliSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Delete zero or more CliSessions.
         * @param {CliSessionDeleteManyArgs} args - Arguments to filter CliSessions to delete.
         * @example
         * // Delete a few CliSessions
         * const { count } = await prisma.cliSession.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends CliSessionDeleteManyArgs>(
            args?: SelectSubset<T, CliSessionDeleteManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more CliSessions.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {CliSessionUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many CliSessions
         * const cliSession = await prisma.cliSession.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends CliSessionUpdateManyArgs>(
            args: SelectSubset<T, CliSessionUpdateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more CliSessions and returns the data updated in the database.
         * @param {CliSessionUpdateManyAndReturnArgs} args - Arguments to update many CliSessions.
         * @example
         * // Update many CliSessions
         * const cliSession = await prisma.cliSession.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more CliSessions and only return the `id`
         * const cliSessionWithIdOnly = await prisma.cliSession.updateManyAndReturn({
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
        updateManyAndReturn<T extends CliSessionUpdateManyAndReturnArgs>(
            args: SelectSubset<T, CliSessionUpdateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$CliSessionPayload<ExtArgs>,
                T,
                "updateManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Create or update one CliSession.
         * @param {CliSessionUpsertArgs} args - Arguments to update or create a CliSession.
         * @example
         * // Update or create a CliSession
         * const cliSession = await prisma.cliSession.upsert({
         *   create: {
         *     // ... data to create a CliSession
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the CliSession we want to update
         *   }
         * })
         */
        upsert<T extends CliSessionUpsertArgs>(
            args: SelectSubset<T, CliSessionUpsertArgs<ExtArgs>>
        ): Prisma__CliSessionClient<
            $Result.GetResult<Prisma.$CliSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Count the number of CliSessions.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {CliSessionCountArgs} args - Arguments to filter CliSessions to count.
         * @example
         * // Count the number of CliSessions
         * const count = await prisma.cliSession.count({
         *   where: {
         *     // ... the filter for the CliSessions we want to count
         *   }
         * })
         **/
        count<T extends CliSessionCountArgs>(
            args?: Subset<T, CliSessionCountArgs>
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<"select", any>
                ? T["select"] extends true
                    ? number
                    : GetScalarType<T["select"], CliSessionCountAggregateOutputType>
                : number
        >;

        /**
         * Allows you to perform aggregations operations on a CliSession.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {CliSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
        aggregate<T extends CliSessionAggregateArgs>(
            args: Subset<T, CliSessionAggregateArgs>
        ): Prisma.PrismaPromise<GetCliSessionAggregateType<T>>;

        /**
         * Group by CliSession.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {CliSessionGroupByArgs} args - Group by arguments.
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
            T extends CliSessionGroupByArgs,
            HasSelectOrTake extends Or<Extends<"skip", Keys<T>>, Extends<"take", Keys<T>>>,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: CliSessionGroupByArgs["orderBy"] }
                : { orderBy?: CliSessionGroupByArgs["orderBy"] },
            OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T["orderBy"]>>>,
            ByFields extends MaybeTupleToUnion<T["by"]>,
            ByValid extends Has<ByFields, OrderFields>,
            HavingFields extends GetHavingFields<T["having"]>,
            HavingValid extends Has<ByFields, HavingFields>,
            ByEmpty extends T["by"] extends never[] ? True : False,
            InputErrors extends ByEmpty extends True
                ? `Error: "by" must not be empty.`
                : HavingValid extends False
                  ? {
                        [P in HavingFields]: P extends ByFields
                            ? never
                            : P extends string
                              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                              : [Error, "Field ", P, ` in "having" needs to be provided in "by"`];
                    }[HavingFields]
                  : "take" extends Keys<T>
                    ? "orderBy" extends Keys<T>
                        ? ByValid extends True
                            ? {}
                            : {
                                  [P in OrderFields]: P extends ByFields
                                      ? never
                                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                              }[OrderFields]
                        : 'Error: If you provide "take", you also need to provide "orderBy"'
                    : "skip" extends Keys<T>
                      ? "orderBy" extends Keys<T>
                          ? ByValid extends True
                              ? {}
                              : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                                }[OrderFields]
                          : 'Error: If you provide "skip", you also need to provide "orderBy"'
                      : ByValid extends True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields],
        >(
            args: SubsetIntersection<T, CliSessionGroupByArgs, OrderByArg> & InputErrors
        ): {} extends InputErrors
            ? GetCliSessionGroupByPayload<T>
            : Prisma.PrismaPromise<InputErrors>;
        /**
         * Fields of the CliSession model
         */
        readonly fields: CliSessionFieldRefs;
    }

    /**
     * The delegate class that acts as a "Promise-like" for CliSession.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__CliSessionClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise";
        user<T extends UserDefaultArgs<ExtArgs> = {}>(
            args?: Subset<T, UserDefaultArgs<ExtArgs>>
        ): Prisma__UserClient<
            | $Result.GetResult<
                  Prisma.$UserPayload<ExtArgs>,
                  T,
                  "findUniqueOrThrow",
                  GlobalOmitOptions
              >
            | Null,
            Null,
            ExtArgs,
            GlobalOmitOptions
        >;
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
            onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
        ): $Utils.JsPromise<TResult1 | TResult2>;
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(
            onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
        ): $Utils.JsPromise<T | TResult>;
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
    }

    /**
     * Fields of the CliSession model
     */
    interface CliSessionFieldRefs {
        readonly id: FieldRef<"CliSession", "String">;
        readonly userId: FieldRef<"CliSession", "String">;
        readonly tokenHash: FieldRef<"CliSession", "String">;
        readonly createdAt: FieldRef<"CliSession", "DateTime">;
    }

    // Custom InputTypes
    /**
     * CliSession findUnique
     */
    export type CliSessionFindUniqueArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the CliSession
         */
        select?: CliSessionSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the CliSession
         */
        omit?: CliSessionOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: CliSessionInclude<ExtArgs> | null;
        /**
         * Filter, which CliSession to fetch.
         */
        where: CliSessionWhereUniqueInput;
    };

    /**
     * CliSession findUniqueOrThrow
     */
    export type CliSessionFindUniqueOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the CliSession
         */
        select?: CliSessionSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the CliSession
         */
        omit?: CliSessionOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: CliSessionInclude<ExtArgs> | null;
        /**
         * Filter, which CliSession to fetch.
         */
        where: CliSessionWhereUniqueInput;
    };

    /**
     * CliSession findFirst
     */
    export type CliSessionFindFirstArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the CliSession
         */
        select?: CliSessionSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the CliSession
         */
        omit?: CliSessionOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: CliSessionInclude<ExtArgs> | null;
        /**
         * Filter, which CliSession to fetch.
         */
        where?: CliSessionWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of CliSessions to fetch.
         */
        orderBy?: CliSessionOrderByWithRelationInput | CliSessionOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for CliSessions.
         */
        cursor?: CliSessionWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` CliSessions from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` CliSessions.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of CliSessions.
         */
        distinct?: CliSessionScalarFieldEnum | CliSessionScalarFieldEnum[];
    };

    /**
     * CliSession findFirstOrThrow
     */
    export type CliSessionFindFirstOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the CliSession
         */
        select?: CliSessionSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the CliSession
         */
        omit?: CliSessionOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: CliSessionInclude<ExtArgs> | null;
        /**
         * Filter, which CliSession to fetch.
         */
        where?: CliSessionWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of CliSessions to fetch.
         */
        orderBy?: CliSessionOrderByWithRelationInput | CliSessionOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for CliSessions.
         */
        cursor?: CliSessionWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` CliSessions from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` CliSessions.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of CliSessions.
         */
        distinct?: CliSessionScalarFieldEnum | CliSessionScalarFieldEnum[];
    };

    /**
     * CliSession findMany
     */
    export type CliSessionFindManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the CliSession
         */
        select?: CliSessionSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the CliSession
         */
        omit?: CliSessionOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: CliSessionInclude<ExtArgs> | null;
        /**
         * Filter, which CliSessions to fetch.
         */
        where?: CliSessionWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of CliSessions to fetch.
         */
        orderBy?: CliSessionOrderByWithRelationInput | CliSessionOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing CliSessions.
         */
        cursor?: CliSessionWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` CliSessions from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` CliSessions.
         */
        skip?: number;
        distinct?: CliSessionScalarFieldEnum | CliSessionScalarFieldEnum[];
    };

    /**
     * CliSession create
     */
    export type CliSessionCreateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the CliSession
         */
        select?: CliSessionSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the CliSession
         */
        omit?: CliSessionOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: CliSessionInclude<ExtArgs> | null;
        /**
         * The data needed to create a CliSession.
         */
        data: XOR<CliSessionCreateInput, CliSessionUncheckedCreateInput>;
    };

    /**
     * CliSession createMany
     */
    export type CliSessionCreateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to create many CliSessions.
         */
        data: CliSessionCreateManyInput | CliSessionCreateManyInput[];
        skipDuplicates?: boolean;
    };

    /**
     * CliSession createManyAndReturn
     */
    export type CliSessionCreateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the CliSession
         */
        select?: CliSessionSelectCreateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the CliSession
         */
        omit?: CliSessionOmit<ExtArgs> | null;
        /**
         * The data used to create many CliSessions.
         */
        data: CliSessionCreateManyInput | CliSessionCreateManyInput[];
        skipDuplicates?: boolean;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: CliSessionIncludeCreateManyAndReturn<ExtArgs> | null;
    };

    /**
     * CliSession update
     */
    export type CliSessionUpdateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the CliSession
         */
        select?: CliSessionSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the CliSession
         */
        omit?: CliSessionOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: CliSessionInclude<ExtArgs> | null;
        /**
         * The data needed to update a CliSession.
         */
        data: XOR<CliSessionUpdateInput, CliSessionUncheckedUpdateInput>;
        /**
         * Choose, which CliSession to update.
         */
        where: CliSessionWhereUniqueInput;
    };

    /**
     * CliSession updateMany
     */
    export type CliSessionUpdateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to update CliSessions.
         */
        data: XOR<CliSessionUpdateManyMutationInput, CliSessionUncheckedUpdateManyInput>;
        /**
         * Filter which CliSessions to update
         */
        where?: CliSessionWhereInput;
        /**
         * Limit how many CliSessions to update.
         */
        limit?: number;
    };

    /**
     * CliSession updateManyAndReturn
     */
    export type CliSessionUpdateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the CliSession
         */
        select?: CliSessionSelectUpdateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the CliSession
         */
        omit?: CliSessionOmit<ExtArgs> | null;
        /**
         * The data used to update CliSessions.
         */
        data: XOR<CliSessionUpdateManyMutationInput, CliSessionUncheckedUpdateManyInput>;
        /**
         * Filter which CliSessions to update
         */
        where?: CliSessionWhereInput;
        /**
         * Limit how many CliSessions to update.
         */
        limit?: number;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: CliSessionIncludeUpdateManyAndReturn<ExtArgs> | null;
    };

    /**
     * CliSession upsert
     */
    export type CliSessionUpsertArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the CliSession
         */
        select?: CliSessionSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the CliSession
         */
        omit?: CliSessionOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: CliSessionInclude<ExtArgs> | null;
        /**
         * The filter to search for the CliSession to update in case it exists.
         */
        where: CliSessionWhereUniqueInput;
        /**
         * In case the CliSession found by the `where` argument doesn't exist, create a new CliSession with this data.
         */
        create: XOR<CliSessionCreateInput, CliSessionUncheckedCreateInput>;
        /**
         * In case the CliSession was found with the provided `where` argument, update it with this data.
         */
        update: XOR<CliSessionUpdateInput, CliSessionUncheckedUpdateInput>;
    };

    /**
     * CliSession delete
     */
    export type CliSessionDeleteArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the CliSession
         */
        select?: CliSessionSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the CliSession
         */
        omit?: CliSessionOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: CliSessionInclude<ExtArgs> | null;
        /**
         * Filter which CliSession to delete.
         */
        where: CliSessionWhereUniqueInput;
    };

    /**
     * CliSession deleteMany
     */
    export type CliSessionDeleteManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which CliSessions to delete
         */
        where?: CliSessionWhereInput;
        /**
         * Limit how many CliSessions to delete.
         */
        limit?: number;
    };

    /**
     * CliSession without action
     */
    export type CliSessionDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the CliSession
         */
        select?: CliSessionSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the CliSession
         */
        omit?: CliSessionOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: CliSessionInclude<ExtArgs> | null;
    };

    /**
     * Model Application
     */

    export type AggregateApplication = {
        _count: ApplicationCountAggregateOutputType | null;
        _min: ApplicationMinAggregateOutputType | null;
        _max: ApplicationMaxAggregateOutputType | null;
    };

    export type ApplicationMinAggregateOutputType = {
        id: string | null;
        ownerId: string | null;
        publishableKey: string | null;
        secretKey: string | null;
        name: string | null;
        createdAt: Date | null;
        updatedAt: Date | null;
    };

    export type ApplicationMaxAggregateOutputType = {
        id: string | null;
        ownerId: string | null;
        publishableKey: string | null;
        secretKey: string | null;
        name: string | null;
        createdAt: Date | null;
        updatedAt: Date | null;
    };

    export type ApplicationCountAggregateOutputType = {
        id: number;
        ownerId: number;
        publishableKey: number;
        secretKey: number;
        name: number;
        createdAt: number;
        updatedAt: number;
        _all: number;
    };

    export type ApplicationMinAggregateInputType = {
        id?: true;
        ownerId?: true;
        publishableKey?: true;
        secretKey?: true;
        name?: true;
        createdAt?: true;
        updatedAt?: true;
    };

    export type ApplicationMaxAggregateInputType = {
        id?: true;
        ownerId?: true;
        publishableKey?: true;
        secretKey?: true;
        name?: true;
        createdAt?: true;
        updatedAt?: true;
    };

    export type ApplicationCountAggregateInputType = {
        id?: true;
        ownerId?: true;
        publishableKey?: true;
        secretKey?: true;
        name?: true;
        createdAt?: true;
        updatedAt?: true;
        _all?: true;
    };

    export type ApplicationAggregateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which Application to aggregate.
         */
        where?: ApplicationWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Applications to fetch.
         */
        orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: ApplicationWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Applications from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Applications.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned Applications
         **/
        _count?: true | ApplicationCountAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: ApplicationMinAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: ApplicationMaxAggregateInputType;
    };

    export type GetApplicationAggregateType<T extends ApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateApplication]: P extends "_count" | "count"
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateApplication[P]>
            : GetScalarType<T[P], AggregateApplication[P]>;
    };

    export type ApplicationGroupByArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: ApplicationWhereInput;
        orderBy?: ApplicationOrderByWithAggregationInput | ApplicationOrderByWithAggregationInput[];
        by: ApplicationScalarFieldEnum[] | ApplicationScalarFieldEnum;
        having?: ApplicationScalarWhereWithAggregatesInput;
        take?: number;
        skip?: number;
        _count?: ApplicationCountAggregateInputType | true;
        _min?: ApplicationMinAggregateInputType;
        _max?: ApplicationMaxAggregateInputType;
    };

    export type ApplicationGroupByOutputType = {
        id: string;
        ownerId: string;
        publishableKey: string;
        secretKey: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        _count: ApplicationCountAggregateOutputType | null;
        _min: ApplicationMinAggregateOutputType | null;
        _max: ApplicationMaxAggregateOutputType | null;
    };

    type GetApplicationGroupByPayload<T extends ApplicationGroupByArgs> = Prisma.PrismaPromise<
        Array<
            PickEnumerable<ApplicationGroupByOutputType, T["by"]> & {
                [P in keyof T & keyof ApplicationGroupByOutputType]: P extends "_count"
                    ? T[P] extends boolean
                        ? number
                        : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
                    : GetScalarType<T[P], ApplicationGroupByOutputType[P]>;
            }
        >
    >;

    export type ApplicationSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            ownerId?: boolean;
            publishableKey?: boolean;
            secretKey?: boolean;
            name?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            owner?: boolean | UserDefaultArgs<ExtArgs>;
            accounts?: boolean | Application$accountsArgs<ExtArgs>;
            users?: boolean | Application$usersArgs<ExtArgs>;
            sessions?: boolean | Application$sessionsArgs<ExtArgs>;
            emails?: boolean | Application$emailsArgs<ExtArgs>;
            oauthAccounts?: boolean | Application$oauthAccountsArgs<ExtArgs>;
            _count?: boolean | ApplicationCountOutputTypeDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["application"]
    >;

    export type ApplicationSelectCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            ownerId?: boolean;
            publishableKey?: boolean;
            secretKey?: boolean;
            name?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            owner?: boolean | UserDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["application"]
    >;

    export type ApplicationSelectUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            ownerId?: boolean;
            publishableKey?: boolean;
            secretKey?: boolean;
            name?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            owner?: boolean | UserDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["application"]
    >;

    export type ApplicationSelectScalar = {
        id?: boolean;
        ownerId?: boolean;
        publishableKey?: boolean;
        secretKey?: boolean;
        name?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
    };

    export type ApplicationOmit<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetOmit<
        "id" | "ownerId" | "publishableKey" | "secretKey" | "name" | "createdAt" | "updatedAt",
        ExtArgs["result"]["application"]
    >;
    export type ApplicationInclude<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        owner?: boolean | UserDefaultArgs<ExtArgs>;
        accounts?: boolean | Application$accountsArgs<ExtArgs>;
        users?: boolean | Application$usersArgs<ExtArgs>;
        sessions?: boolean | Application$sessionsArgs<ExtArgs>;
        emails?: boolean | Application$emailsArgs<ExtArgs>;
        oauthAccounts?: boolean | Application$oauthAccountsArgs<ExtArgs>;
        _count?: boolean | ApplicationCountOutputTypeDefaultArgs<ExtArgs>;
    };
    export type ApplicationIncludeCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        owner?: boolean | UserDefaultArgs<ExtArgs>;
    };
    export type ApplicationIncludeUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        owner?: boolean | UserDefaultArgs<ExtArgs>;
    };

    export type $ApplicationPayload<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        name: "Application";
        objects: {
            owner: Prisma.$UserPayload<ExtArgs>;
            accounts: Prisma.$AppUserAccountPayload<ExtArgs>[];
            users: Prisma.$AppUserPayload<ExtArgs>[];
            sessions: Prisma.$AppUserSessionPayload<ExtArgs>[];
            emails: Prisma.$AppUserEmailPayload<ExtArgs>[];
            oauthAccounts: Prisma.$AppUserOAuthAccountPayload<ExtArgs>[];
        };
        scalars: $Extensions.GetPayloadResult<
            {
                id: string;
                ownerId: string;
                publishableKey: string;
                secretKey: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
            },
            ExtArgs["result"]["application"]
        >;
        composites: {};
    };

    type ApplicationGetPayload<S extends boolean | null | undefined | ApplicationDefaultArgs> =
        $Result.GetResult<Prisma.$ApplicationPayload, S>;

    type ApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        Omit<ApplicationFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
            select?: ApplicationCountAggregateInputType | true;
        };

    export interface ApplicationDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: {
            types: Prisma.TypeMap<ExtArgs>["model"]["Application"];
            meta: { name: "Application" };
        };
        /**
         * Find zero or one Application that matches the filter.
         * @param {ApplicationFindUniqueArgs} args - Arguments to find a Application
         * @example
         * // Get one Application
         * const application = await prisma.application.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends ApplicationFindUniqueArgs>(
            args: SelectSubset<T, ApplicationFindUniqueArgs<ExtArgs>>
        ): Prisma__ApplicationClient<
            $Result.GetResult<
                Prisma.$ApplicationPayload<ExtArgs>,
                T,
                "findUnique",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find one Application that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {ApplicationFindUniqueOrThrowArgs} args - Arguments to find a Application
         * @example
         * // Get one Application
         * const application = await prisma.application.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends ApplicationFindUniqueOrThrowArgs>(
            args: SelectSubset<T, ApplicationFindUniqueOrThrowArgs<ExtArgs>>
        ): Prisma__ApplicationClient<
            $Result.GetResult<
                Prisma.$ApplicationPayload<ExtArgs>,
                T,
                "findUniqueOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first Application that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ApplicationFindFirstArgs} args - Arguments to find a Application
         * @example
         * // Get one Application
         * const application = await prisma.application.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends ApplicationFindFirstArgs>(
            args?: SelectSubset<T, ApplicationFindFirstArgs<ExtArgs>>
        ): Prisma__ApplicationClient<
            $Result.GetResult<
                Prisma.$ApplicationPayload<ExtArgs>,
                T,
                "findFirst",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first Application that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ApplicationFindFirstOrThrowArgs} args - Arguments to find a Application
         * @example
         * // Get one Application
         * const application = await prisma.application.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends ApplicationFindFirstOrThrowArgs>(
            args?: SelectSubset<T, ApplicationFindFirstOrThrowArgs<ExtArgs>>
        ): Prisma__ApplicationClient<
            $Result.GetResult<
                Prisma.$ApplicationPayload<ExtArgs>,
                T,
                "findFirstOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find zero or more Applications that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all Applications
         * const applications = await prisma.application.findMany()
         *
         * // Get first 10 Applications
         * const applications = await prisma.application.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const applicationWithIdOnly = await prisma.application.findMany({ select: { id: true } })
         *
         */
        findMany<T extends ApplicationFindManyArgs>(
            args?: SelectSubset<T, ApplicationFindManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>
        >;

        /**
         * Create a Application.
         * @param {ApplicationCreateArgs} args - Arguments to create a Application.
         * @example
         * // Create one Application
         * const Application = await prisma.application.create({
         *   data: {
         *     // ... data to create a Application
         *   }
         * })
         *
         */
        create<T extends ApplicationCreateArgs>(
            args: SelectSubset<T, ApplicationCreateArgs<ExtArgs>>
        ): Prisma__ApplicationClient<
            $Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Create many Applications.
         * @param {ApplicationCreateManyArgs} args - Arguments to create many Applications.
         * @example
         * // Create many Applications
         * const application = await prisma.application.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends ApplicationCreateManyArgs>(
            args?: SelectSubset<T, ApplicationCreateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Create many Applications and returns the data saved in the database.
         * @param {ApplicationCreateManyAndReturnArgs} args - Arguments to create many Applications.
         * @example
         * // Create many Applications
         * const application = await prisma.application.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many Applications and only return the `id`
         * const applicationWithIdOnly = await prisma.application.createManyAndReturn({
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends ApplicationCreateManyAndReturnArgs>(
            args?: SelectSubset<T, ApplicationCreateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$ApplicationPayload<ExtArgs>,
                T,
                "createManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Delete a Application.
         * @param {ApplicationDeleteArgs} args - Arguments to delete one Application.
         * @example
         * // Delete one Application
         * const Application = await prisma.application.delete({
         *   where: {
         *     // ... filter to delete one Application
         *   }
         * })
         *
         */
        delete<T extends ApplicationDeleteArgs>(
            args: SelectSubset<T, ApplicationDeleteArgs<ExtArgs>>
        ): Prisma__ApplicationClient<
            $Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Update one Application.
         * @param {ApplicationUpdateArgs} args - Arguments to update one Application.
         * @example
         * // Update one Application
         * const application = await prisma.application.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends ApplicationUpdateArgs>(
            args: SelectSubset<T, ApplicationUpdateArgs<ExtArgs>>
        ): Prisma__ApplicationClient<
            $Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Delete zero or more Applications.
         * @param {ApplicationDeleteManyArgs} args - Arguments to filter Applications to delete.
         * @example
         * // Delete a few Applications
         * const { count } = await prisma.application.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends ApplicationDeleteManyArgs>(
            args?: SelectSubset<T, ApplicationDeleteManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more Applications.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ApplicationUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many Applications
         * const application = await prisma.application.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends ApplicationUpdateManyArgs>(
            args: SelectSubset<T, ApplicationUpdateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more Applications and returns the data updated in the database.
         * @param {ApplicationUpdateManyAndReturnArgs} args - Arguments to update many Applications.
         * @example
         * // Update many Applications
         * const application = await prisma.application.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more Applications and only return the `id`
         * const applicationWithIdOnly = await prisma.application.updateManyAndReturn({
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
        updateManyAndReturn<T extends ApplicationUpdateManyAndReturnArgs>(
            args: SelectSubset<T, ApplicationUpdateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$ApplicationPayload<ExtArgs>,
                T,
                "updateManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Create or update one Application.
         * @param {ApplicationUpsertArgs} args - Arguments to update or create a Application.
         * @example
         * // Update or create a Application
         * const application = await prisma.application.upsert({
         *   create: {
         *     // ... data to create a Application
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the Application we want to update
         *   }
         * })
         */
        upsert<T extends ApplicationUpsertArgs>(
            args: SelectSubset<T, ApplicationUpsertArgs<ExtArgs>>
        ): Prisma__ApplicationClient<
            $Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Count the number of Applications.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ApplicationCountArgs} args - Arguments to filter Applications to count.
         * @example
         * // Count the number of Applications
         * const count = await prisma.application.count({
         *   where: {
         *     // ... the filter for the Applications we want to count
         *   }
         * })
         **/
        count<T extends ApplicationCountArgs>(
            args?: Subset<T, ApplicationCountArgs>
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<"select", any>
                ? T["select"] extends true
                    ? number
                    : GetScalarType<T["select"], ApplicationCountAggregateOutputType>
                : number
        >;

        /**
         * Allows you to perform aggregations operations on a Application.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
        aggregate<T extends ApplicationAggregateArgs>(
            args: Subset<T, ApplicationAggregateArgs>
        ): Prisma.PrismaPromise<GetApplicationAggregateType<T>>;

        /**
         * Group by Application.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ApplicationGroupByArgs} args - Group by arguments.
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
            T extends ApplicationGroupByArgs,
            HasSelectOrTake extends Or<Extends<"skip", Keys<T>>, Extends<"take", Keys<T>>>,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: ApplicationGroupByArgs["orderBy"] }
                : { orderBy?: ApplicationGroupByArgs["orderBy"] },
            OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T["orderBy"]>>>,
            ByFields extends MaybeTupleToUnion<T["by"]>,
            ByValid extends Has<ByFields, OrderFields>,
            HavingFields extends GetHavingFields<T["having"]>,
            HavingValid extends Has<ByFields, HavingFields>,
            ByEmpty extends T["by"] extends never[] ? True : False,
            InputErrors extends ByEmpty extends True
                ? `Error: "by" must not be empty.`
                : HavingValid extends False
                  ? {
                        [P in HavingFields]: P extends ByFields
                            ? never
                            : P extends string
                              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                              : [Error, "Field ", P, ` in "having" needs to be provided in "by"`];
                    }[HavingFields]
                  : "take" extends Keys<T>
                    ? "orderBy" extends Keys<T>
                        ? ByValid extends True
                            ? {}
                            : {
                                  [P in OrderFields]: P extends ByFields
                                      ? never
                                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                              }[OrderFields]
                        : 'Error: If you provide "take", you also need to provide "orderBy"'
                    : "skip" extends Keys<T>
                      ? "orderBy" extends Keys<T>
                          ? ByValid extends True
                              ? {}
                              : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                                }[OrderFields]
                          : 'Error: If you provide "skip", you also need to provide "orderBy"'
                      : ByValid extends True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields],
        >(
            args: SubsetIntersection<T, ApplicationGroupByArgs, OrderByArg> & InputErrors
        ): {} extends InputErrors
            ? GetApplicationGroupByPayload<T>
            : Prisma.PrismaPromise<InputErrors>;
        /**
         * Fields of the Application model
         */
        readonly fields: ApplicationFieldRefs;
    }

    /**
     * The delegate class that acts as a "Promise-like" for Application.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__ApplicationClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise";
        owner<T extends UserDefaultArgs<ExtArgs> = {}>(
            args?: Subset<T, UserDefaultArgs<ExtArgs>>
        ): Prisma__UserClient<
            | $Result.GetResult<
                  Prisma.$UserPayload<ExtArgs>,
                  T,
                  "findUniqueOrThrow",
                  GlobalOmitOptions
              >
            | Null,
            Null,
            ExtArgs,
            GlobalOmitOptions
        >;
        accounts<T extends Application$accountsArgs<ExtArgs> = {}>(
            args?: Subset<T, Application$accountsArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            | $Result.GetResult<
                  Prisma.$AppUserAccountPayload<ExtArgs>,
                  T,
                  "findMany",
                  GlobalOmitOptions
              >
            | Null
        >;
        users<T extends Application$usersArgs<ExtArgs> = {}>(
            args?: Subset<T, Application$usersArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            | $Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>
            | Null
        >;
        sessions<T extends Application$sessionsArgs<ExtArgs> = {}>(
            args?: Subset<T, Application$sessionsArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            | $Result.GetResult<
                  Prisma.$AppUserSessionPayload<ExtArgs>,
                  T,
                  "findMany",
                  GlobalOmitOptions
              >
            | Null
        >;
        emails<T extends Application$emailsArgs<ExtArgs> = {}>(
            args?: Subset<T, Application$emailsArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            | $Result.GetResult<
                  Prisma.$AppUserEmailPayload<ExtArgs>,
                  T,
                  "findMany",
                  GlobalOmitOptions
              >
            | Null
        >;
        oauthAccounts<T extends Application$oauthAccountsArgs<ExtArgs> = {}>(
            args?: Subset<T, Application$oauthAccountsArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            | $Result.GetResult<
                  Prisma.$AppUserOAuthAccountPayload<ExtArgs>,
                  T,
                  "findMany",
                  GlobalOmitOptions
              >
            | Null
        >;
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
            onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
        ): $Utils.JsPromise<TResult1 | TResult2>;
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(
            onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
        ): $Utils.JsPromise<T | TResult>;
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
    }

    /**
     * Fields of the Application model
     */
    interface ApplicationFieldRefs {
        readonly id: FieldRef<"Application", "String">;
        readonly ownerId: FieldRef<"Application", "String">;
        readonly publishableKey: FieldRef<"Application", "String">;
        readonly secretKey: FieldRef<"Application", "String">;
        readonly name: FieldRef<"Application", "String">;
        readonly createdAt: FieldRef<"Application", "DateTime">;
        readonly updatedAt: FieldRef<"Application", "DateTime">;
    }

    // Custom InputTypes
    /**
     * Application findUnique
     */
    export type ApplicationFindUniqueArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Application
         */
        select?: ApplicationSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Application
         */
        omit?: ApplicationOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ApplicationInclude<ExtArgs> | null;
        /**
         * Filter, which Application to fetch.
         */
        where: ApplicationWhereUniqueInput;
    };

    /**
     * Application findUniqueOrThrow
     */
    export type ApplicationFindUniqueOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Application
         */
        select?: ApplicationSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Application
         */
        omit?: ApplicationOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ApplicationInclude<ExtArgs> | null;
        /**
         * Filter, which Application to fetch.
         */
        where: ApplicationWhereUniqueInput;
    };

    /**
     * Application findFirst
     */
    export type ApplicationFindFirstArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Application
         */
        select?: ApplicationSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Application
         */
        omit?: ApplicationOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ApplicationInclude<ExtArgs> | null;
        /**
         * Filter, which Application to fetch.
         */
        where?: ApplicationWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Applications to fetch.
         */
        orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Applications.
         */
        cursor?: ApplicationWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Applications from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Applications.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Applications.
         */
        distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[];
    };

    /**
     * Application findFirstOrThrow
     */
    export type ApplicationFindFirstOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Application
         */
        select?: ApplicationSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Application
         */
        omit?: ApplicationOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ApplicationInclude<ExtArgs> | null;
        /**
         * Filter, which Application to fetch.
         */
        where?: ApplicationWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Applications to fetch.
         */
        orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Applications.
         */
        cursor?: ApplicationWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Applications from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Applications.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Applications.
         */
        distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[];
    };

    /**
     * Application findMany
     */
    export type ApplicationFindManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Application
         */
        select?: ApplicationSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Application
         */
        omit?: ApplicationOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ApplicationInclude<ExtArgs> | null;
        /**
         * Filter, which Applications to fetch.
         */
        where?: ApplicationWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Applications to fetch.
         */
        orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing Applications.
         */
        cursor?: ApplicationWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Applications from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Applications.
         */
        skip?: number;
        distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[];
    };

    /**
     * Application create
     */
    export type ApplicationCreateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Application
         */
        select?: ApplicationSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Application
         */
        omit?: ApplicationOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ApplicationInclude<ExtArgs> | null;
        /**
         * The data needed to create a Application.
         */
        data: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>;
    };

    /**
     * Application createMany
     */
    export type ApplicationCreateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to create many Applications.
         */
        data: ApplicationCreateManyInput | ApplicationCreateManyInput[];
        skipDuplicates?: boolean;
    };

    /**
     * Application createManyAndReturn
     */
    export type ApplicationCreateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Application
         */
        select?: ApplicationSelectCreateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the Application
         */
        omit?: ApplicationOmit<ExtArgs> | null;
        /**
         * The data used to create many Applications.
         */
        data: ApplicationCreateManyInput | ApplicationCreateManyInput[];
        skipDuplicates?: boolean;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ApplicationIncludeCreateManyAndReturn<ExtArgs> | null;
    };

    /**
     * Application update
     */
    export type ApplicationUpdateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Application
         */
        select?: ApplicationSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Application
         */
        omit?: ApplicationOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ApplicationInclude<ExtArgs> | null;
        /**
         * The data needed to update a Application.
         */
        data: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>;
        /**
         * Choose, which Application to update.
         */
        where: ApplicationWhereUniqueInput;
    };

    /**
     * Application updateMany
     */
    export type ApplicationUpdateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to update Applications.
         */
        data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>;
        /**
         * Filter which Applications to update
         */
        where?: ApplicationWhereInput;
        /**
         * Limit how many Applications to update.
         */
        limit?: number;
    };

    /**
     * Application updateManyAndReturn
     */
    export type ApplicationUpdateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Application
         */
        select?: ApplicationSelectUpdateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the Application
         */
        omit?: ApplicationOmit<ExtArgs> | null;
        /**
         * The data used to update Applications.
         */
        data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>;
        /**
         * Filter which Applications to update
         */
        where?: ApplicationWhereInput;
        /**
         * Limit how many Applications to update.
         */
        limit?: number;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ApplicationIncludeUpdateManyAndReturn<ExtArgs> | null;
    };

    /**
     * Application upsert
     */
    export type ApplicationUpsertArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Application
         */
        select?: ApplicationSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Application
         */
        omit?: ApplicationOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ApplicationInclude<ExtArgs> | null;
        /**
         * The filter to search for the Application to update in case it exists.
         */
        where: ApplicationWhereUniqueInput;
        /**
         * In case the Application found by the `where` argument doesn't exist, create a new Application with this data.
         */
        create: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>;
        /**
         * In case the Application was found with the provided `where` argument, update it with this data.
         */
        update: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>;
    };

    /**
     * Application delete
     */
    export type ApplicationDeleteArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Application
         */
        select?: ApplicationSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Application
         */
        omit?: ApplicationOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ApplicationInclude<ExtArgs> | null;
        /**
         * Filter which Application to delete.
         */
        where: ApplicationWhereUniqueInput;
    };

    /**
     * Application deleteMany
     */
    export type ApplicationDeleteManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which Applications to delete
         */
        where?: ApplicationWhereInput;
        /**
         * Limit how many Applications to delete.
         */
        limit?: number;
    };

    /**
     * Application.accounts
     */
    export type Application$accountsArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserAccount
         */
        select?: AppUserAccountSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserAccount
         */
        omit?: AppUserAccountOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserAccountInclude<ExtArgs> | null;
        where?: AppUserAccountWhereInput;
        orderBy?: AppUserAccountOrderByWithRelationInput | AppUserAccountOrderByWithRelationInput[];
        cursor?: AppUserAccountWhereUniqueInput;
        take?: number;
        skip?: number;
        distinct?: AppUserAccountScalarFieldEnum | AppUserAccountScalarFieldEnum[];
    };

    /**
     * Application.users
     */
    export type Application$usersArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUser
         */
        select?: AppUserSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUser
         */
        omit?: AppUserOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserInclude<ExtArgs> | null;
        where?: AppUserWhereInput;
        orderBy?: AppUserOrderByWithRelationInput | AppUserOrderByWithRelationInput[];
        cursor?: AppUserWhereUniqueInput;
        take?: number;
        skip?: number;
        distinct?: AppUserScalarFieldEnum | AppUserScalarFieldEnum[];
    };

    /**
     * Application.sessions
     */
    export type Application$sessionsArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserSession
         */
        select?: AppUserSessionSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserSession
         */
        omit?: AppUserSessionOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserSessionInclude<ExtArgs> | null;
        where?: AppUserSessionWhereInput;
        orderBy?: AppUserSessionOrderByWithRelationInput | AppUserSessionOrderByWithRelationInput[];
        cursor?: AppUserSessionWhereUniqueInput;
        take?: number;
        skip?: number;
        distinct?: AppUserSessionScalarFieldEnum | AppUserSessionScalarFieldEnum[];
    };

    /**
     * Application.emails
     */
    export type Application$emailsArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserEmail
         */
        select?: AppUserEmailSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserEmail
         */
        omit?: AppUserEmailOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserEmailInclude<ExtArgs> | null;
        where?: AppUserEmailWhereInput;
        orderBy?: AppUserEmailOrderByWithRelationInput | AppUserEmailOrderByWithRelationInput[];
        cursor?: AppUserEmailWhereUniqueInput;
        take?: number;
        skip?: number;
        distinct?: AppUserEmailScalarFieldEnum | AppUserEmailScalarFieldEnum[];
    };

    /**
     * Application.oauthAccounts
     */
    export type Application$oauthAccountsArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserOAuthAccount
         */
        select?: AppUserOAuthAccountSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserOAuthAccount
         */
        omit?: AppUserOAuthAccountOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserOAuthAccountInclude<ExtArgs> | null;
        where?: AppUserOAuthAccountWhereInput;
        orderBy?:
            | AppUserOAuthAccountOrderByWithRelationInput
            | AppUserOAuthAccountOrderByWithRelationInput[];
        cursor?: AppUserOAuthAccountWhereUniqueInput;
        take?: number;
        skip?: number;
        distinct?: AppUserOAuthAccountScalarFieldEnum | AppUserOAuthAccountScalarFieldEnum[];
    };

    /**
     * Application without action
     */
    export type ApplicationDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Application
         */
        select?: ApplicationSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Application
         */
        omit?: ApplicationOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ApplicationInclude<ExtArgs> | null;
    };

    /**
     * Model AppUser
     */

    export type AggregateAppUser = {
        _count: AppUserCountAggregateOutputType | null;
        _min: AppUserMinAggregateOutputType | null;
        _max: AppUserMaxAggregateOutputType | null;
    };

    export type AppUserMinAggregateOutputType = {
        id: string | null;
        applicationId: string | null;
        createdAt: Date | null;
        updatedAt: Date | null;
    };

    export type AppUserMaxAggregateOutputType = {
        id: string | null;
        applicationId: string | null;
        createdAt: Date | null;
        updatedAt: Date | null;
    };

    export type AppUserCountAggregateOutputType = {
        id: number;
        applicationId: number;
        createdAt: number;
        updatedAt: number;
        _all: number;
    };

    export type AppUserMinAggregateInputType = {
        id?: true;
        applicationId?: true;
        createdAt?: true;
        updatedAt?: true;
    };

    export type AppUserMaxAggregateInputType = {
        id?: true;
        applicationId?: true;
        createdAt?: true;
        updatedAt?: true;
    };

    export type AppUserCountAggregateInputType = {
        id?: true;
        applicationId?: true;
        createdAt?: true;
        updatedAt?: true;
        _all?: true;
    };

    export type AppUserAggregateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which AppUser to aggregate.
         */
        where?: AppUserWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of AppUsers to fetch.
         */
        orderBy?: AppUserOrderByWithRelationInput | AppUserOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: AppUserWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` AppUsers from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` AppUsers.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned AppUsers
         **/
        _count?: true | AppUserCountAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: AppUserMinAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: AppUserMaxAggregateInputType;
    };

    export type GetAppUserAggregateType<T extends AppUserAggregateArgs> = {
        [P in keyof T & keyof AggregateAppUser]: P extends "_count" | "count"
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateAppUser[P]>
            : GetScalarType<T[P], AggregateAppUser[P]>;
    };

    export type AppUserGroupByArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: AppUserWhereInput;
        orderBy?: AppUserOrderByWithAggregationInput | AppUserOrderByWithAggregationInput[];
        by: AppUserScalarFieldEnum[] | AppUserScalarFieldEnum;
        having?: AppUserScalarWhereWithAggregatesInput;
        take?: number;
        skip?: number;
        _count?: AppUserCountAggregateInputType | true;
        _min?: AppUserMinAggregateInputType;
        _max?: AppUserMaxAggregateInputType;
    };

    export type AppUserGroupByOutputType = {
        id: string;
        applicationId: string;
        createdAt: Date;
        updatedAt: Date;
        _count: AppUserCountAggregateOutputType | null;
        _min: AppUserMinAggregateOutputType | null;
        _max: AppUserMaxAggregateOutputType | null;
    };

    type GetAppUserGroupByPayload<T extends AppUserGroupByArgs> = Prisma.PrismaPromise<
        Array<
            PickEnumerable<AppUserGroupByOutputType, T["by"]> & {
                [P in keyof T & keyof AppUserGroupByOutputType]: P extends "_count"
                    ? T[P] extends boolean
                        ? number
                        : GetScalarType<T[P], AppUserGroupByOutputType[P]>
                    : GetScalarType<T[P], AppUserGroupByOutputType[P]>;
            }
        >
    >;

    export type AppUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        $Extensions.GetSelect<
            {
                id?: boolean;
                applicationId?: boolean;
                createdAt?: boolean;
                updatedAt?: boolean;
                application?: boolean | ApplicationDefaultArgs<ExtArgs>;
                accounts?: boolean | AppUser$accountsArgs<ExtArgs>;
                _count?: boolean | AppUserCountOutputTypeDefaultArgs<ExtArgs>;
            },
            ExtArgs["result"]["appUser"]
        >;

    export type AppUserSelectCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            applicationId?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            application?: boolean | ApplicationDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["appUser"]
    >;

    export type AppUserSelectUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            applicationId?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            application?: boolean | ApplicationDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["appUser"]
    >;

    export type AppUserSelectScalar = {
        id?: boolean;
        applicationId?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
    };

    export type AppUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        $Extensions.GetOmit<
            "id" | "applicationId" | "createdAt" | "updatedAt",
            ExtArgs["result"]["appUser"]
        >;
    export type AppUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        {
            application?: boolean | ApplicationDefaultArgs<ExtArgs>;
            accounts?: boolean | AppUser$accountsArgs<ExtArgs>;
            _count?: boolean | AppUserCountOutputTypeDefaultArgs<ExtArgs>;
        };
    export type AppUserIncludeCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        application?: boolean | ApplicationDefaultArgs<ExtArgs>;
    };
    export type AppUserIncludeUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        application?: boolean | ApplicationDefaultArgs<ExtArgs>;
    };

    export type $AppUserPayload<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        name: "AppUser";
        objects: {
            application: Prisma.$ApplicationPayload<ExtArgs>;
            accounts: Prisma.$AppUserAccountPayload<ExtArgs>[];
        };
        scalars: $Extensions.GetPayloadResult<
            {
                id: string;
                applicationId: string;
                createdAt: Date;
                updatedAt: Date;
            },
            ExtArgs["result"]["appUser"]
        >;
        composites: {};
    };

    type AppUserGetPayload<S extends boolean | null | undefined | AppUserDefaultArgs> =
        $Result.GetResult<Prisma.$AppUserPayload, S>;

    type AppUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        Omit<AppUserFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
            select?: AppUserCountAggregateInputType | true;
        };

    export interface AppUserDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: {
            types: Prisma.TypeMap<ExtArgs>["model"]["AppUser"];
            meta: { name: "AppUser" };
        };
        /**
         * Find zero or one AppUser that matches the filter.
         * @param {AppUserFindUniqueArgs} args - Arguments to find a AppUser
         * @example
         * // Get one AppUser
         * const appUser = await prisma.appUser.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends AppUserFindUniqueArgs>(
            args: SelectSubset<T, AppUserFindUniqueArgs<ExtArgs>>
        ): Prisma__AppUserClient<
            $Result.GetResult<
                Prisma.$AppUserPayload<ExtArgs>,
                T,
                "findUnique",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find one AppUser that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {AppUserFindUniqueOrThrowArgs} args - Arguments to find a AppUser
         * @example
         * // Get one AppUser
         * const appUser = await prisma.appUser.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends AppUserFindUniqueOrThrowArgs>(
            args: SelectSubset<T, AppUserFindUniqueOrThrowArgs<ExtArgs>>
        ): Prisma__AppUserClient<
            $Result.GetResult<
                Prisma.$AppUserPayload<ExtArgs>,
                T,
                "findUniqueOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first AppUser that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AppUserFindFirstArgs} args - Arguments to find a AppUser
         * @example
         * // Get one AppUser
         * const appUser = await prisma.appUser.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends AppUserFindFirstArgs>(
            args?: SelectSubset<T, AppUserFindFirstArgs<ExtArgs>>
        ): Prisma__AppUserClient<
            $Result.GetResult<
                Prisma.$AppUserPayload<ExtArgs>,
                T,
                "findFirst",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first AppUser that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AppUserFindFirstOrThrowArgs} args - Arguments to find a AppUser
         * @example
         * // Get one AppUser
         * const appUser = await prisma.appUser.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends AppUserFindFirstOrThrowArgs>(
            args?: SelectSubset<T, AppUserFindFirstOrThrowArgs<ExtArgs>>
        ): Prisma__AppUserClient<
            $Result.GetResult<
                Prisma.$AppUserPayload<ExtArgs>,
                T,
                "findFirstOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find zero or more AppUsers that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AppUserFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all AppUsers
         * const appUsers = await prisma.appUser.findMany()
         *
         * // Get first 10 AppUsers
         * const appUsers = await prisma.appUser.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const appUserWithIdOnly = await prisma.appUser.findMany({ select: { id: true } })
         *
         */
        findMany<T extends AppUserFindManyArgs>(
            args?: SelectSubset<T, AppUserFindManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>
        >;

        /**
         * Create a AppUser.
         * @param {AppUserCreateArgs} args - Arguments to create a AppUser.
         * @example
         * // Create one AppUser
         * const AppUser = await prisma.appUser.create({
         *   data: {
         *     // ... data to create a AppUser
         *   }
         * })
         *
         */
        create<T extends AppUserCreateArgs>(
            args: SelectSubset<T, AppUserCreateArgs<ExtArgs>>
        ): Prisma__AppUserClient<
            $Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Create many AppUsers.
         * @param {AppUserCreateManyArgs} args - Arguments to create many AppUsers.
         * @example
         * // Create many AppUsers
         * const appUser = await prisma.appUser.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends AppUserCreateManyArgs>(
            args?: SelectSubset<T, AppUserCreateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Create many AppUsers and returns the data saved in the database.
         * @param {AppUserCreateManyAndReturnArgs} args - Arguments to create many AppUsers.
         * @example
         * // Create many AppUsers
         * const appUser = await prisma.appUser.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many AppUsers and only return the `id`
         * const appUserWithIdOnly = await prisma.appUser.createManyAndReturn({
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends AppUserCreateManyAndReturnArgs>(
            args?: SelectSubset<T, AppUserCreateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$AppUserPayload<ExtArgs>,
                T,
                "createManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Delete a AppUser.
         * @param {AppUserDeleteArgs} args - Arguments to delete one AppUser.
         * @example
         * // Delete one AppUser
         * const AppUser = await prisma.appUser.delete({
         *   where: {
         *     // ... filter to delete one AppUser
         *   }
         * })
         *
         */
        delete<T extends AppUserDeleteArgs>(
            args: SelectSubset<T, AppUserDeleteArgs<ExtArgs>>
        ): Prisma__AppUserClient<
            $Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Update one AppUser.
         * @param {AppUserUpdateArgs} args - Arguments to update one AppUser.
         * @example
         * // Update one AppUser
         * const appUser = await prisma.appUser.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends AppUserUpdateArgs>(
            args: SelectSubset<T, AppUserUpdateArgs<ExtArgs>>
        ): Prisma__AppUserClient<
            $Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Delete zero or more AppUsers.
         * @param {AppUserDeleteManyArgs} args - Arguments to filter AppUsers to delete.
         * @example
         * // Delete a few AppUsers
         * const { count } = await prisma.appUser.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends AppUserDeleteManyArgs>(
            args?: SelectSubset<T, AppUserDeleteManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more AppUsers.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AppUserUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many AppUsers
         * const appUser = await prisma.appUser.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends AppUserUpdateManyArgs>(
            args: SelectSubset<T, AppUserUpdateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more AppUsers and returns the data updated in the database.
         * @param {AppUserUpdateManyAndReturnArgs} args - Arguments to update many AppUsers.
         * @example
         * // Update many AppUsers
         * const appUser = await prisma.appUser.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more AppUsers and only return the `id`
         * const appUserWithIdOnly = await prisma.appUser.updateManyAndReturn({
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
        updateManyAndReturn<T extends AppUserUpdateManyAndReturnArgs>(
            args: SelectSubset<T, AppUserUpdateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$AppUserPayload<ExtArgs>,
                T,
                "updateManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Create or update one AppUser.
         * @param {AppUserUpsertArgs} args - Arguments to update or create a AppUser.
         * @example
         * // Update or create a AppUser
         * const appUser = await prisma.appUser.upsert({
         *   create: {
         *     // ... data to create a AppUser
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the AppUser we want to update
         *   }
         * })
         */
        upsert<T extends AppUserUpsertArgs>(
            args: SelectSubset<T, AppUserUpsertArgs<ExtArgs>>
        ): Prisma__AppUserClient<
            $Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Count the number of AppUsers.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AppUserCountArgs} args - Arguments to filter AppUsers to count.
         * @example
         * // Count the number of AppUsers
         * const count = await prisma.appUser.count({
         *   where: {
         *     // ... the filter for the AppUsers we want to count
         *   }
         * })
         **/
        count<T extends AppUserCountArgs>(
            args?: Subset<T, AppUserCountArgs>
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<"select", any>
                ? T["select"] extends true
                    ? number
                    : GetScalarType<T["select"], AppUserCountAggregateOutputType>
                : number
        >;

        /**
         * Allows you to perform aggregations operations on a AppUser.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AppUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
        aggregate<T extends AppUserAggregateArgs>(
            args: Subset<T, AppUserAggregateArgs>
        ): Prisma.PrismaPromise<GetAppUserAggregateType<T>>;

        /**
         * Group by AppUser.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AppUserGroupByArgs} args - Group by arguments.
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
            T extends AppUserGroupByArgs,
            HasSelectOrTake extends Or<Extends<"skip", Keys<T>>, Extends<"take", Keys<T>>>,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: AppUserGroupByArgs["orderBy"] }
                : { orderBy?: AppUserGroupByArgs["orderBy"] },
            OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T["orderBy"]>>>,
            ByFields extends MaybeTupleToUnion<T["by"]>,
            ByValid extends Has<ByFields, OrderFields>,
            HavingFields extends GetHavingFields<T["having"]>,
            HavingValid extends Has<ByFields, HavingFields>,
            ByEmpty extends T["by"] extends never[] ? True : False,
            InputErrors extends ByEmpty extends True
                ? `Error: "by" must not be empty.`
                : HavingValid extends False
                  ? {
                        [P in HavingFields]: P extends ByFields
                            ? never
                            : P extends string
                              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                              : [Error, "Field ", P, ` in "having" needs to be provided in "by"`];
                    }[HavingFields]
                  : "take" extends Keys<T>
                    ? "orderBy" extends Keys<T>
                        ? ByValid extends True
                            ? {}
                            : {
                                  [P in OrderFields]: P extends ByFields
                                      ? never
                                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                              }[OrderFields]
                        : 'Error: If you provide "take", you also need to provide "orderBy"'
                    : "skip" extends Keys<T>
                      ? "orderBy" extends Keys<T>
                          ? ByValid extends True
                              ? {}
                              : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                                }[OrderFields]
                          : 'Error: If you provide "skip", you also need to provide "orderBy"'
                      : ByValid extends True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields],
        >(
            args: SubsetIntersection<T, AppUserGroupByArgs, OrderByArg> & InputErrors
        ): {} extends InputErrors ? GetAppUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
        /**
         * Fields of the AppUser model
         */
        readonly fields: AppUserFieldRefs;
    }

    /**
     * The delegate class that acts as a "Promise-like" for AppUser.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__AppUserClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise";
        application<T extends ApplicationDefaultArgs<ExtArgs> = {}>(
            args?: Subset<T, ApplicationDefaultArgs<ExtArgs>>
        ): Prisma__ApplicationClient<
            | $Result.GetResult<
                  Prisma.$ApplicationPayload<ExtArgs>,
                  T,
                  "findUniqueOrThrow",
                  GlobalOmitOptions
              >
            | Null,
            Null,
            ExtArgs,
            GlobalOmitOptions
        >;
        accounts<T extends AppUser$accountsArgs<ExtArgs> = {}>(
            args?: Subset<T, AppUser$accountsArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            | $Result.GetResult<
                  Prisma.$AppUserAccountPayload<ExtArgs>,
                  T,
                  "findMany",
                  GlobalOmitOptions
              >
            | Null
        >;
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
            onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
        ): $Utils.JsPromise<TResult1 | TResult2>;
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(
            onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
        ): $Utils.JsPromise<T | TResult>;
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
    }

    /**
     * Fields of the AppUser model
     */
    interface AppUserFieldRefs {
        readonly id: FieldRef<"AppUser", "String">;
        readonly applicationId: FieldRef<"AppUser", "String">;
        readonly createdAt: FieldRef<"AppUser", "DateTime">;
        readonly updatedAt: FieldRef<"AppUser", "DateTime">;
    }

    // Custom InputTypes
    /**
     * AppUser findUnique
     */
    export type AppUserFindUniqueArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUser
         */
        select?: AppUserSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUser
         */
        omit?: AppUserOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserInclude<ExtArgs> | null;
        /**
         * Filter, which AppUser to fetch.
         */
        where: AppUserWhereUniqueInput;
    };

    /**
     * AppUser findUniqueOrThrow
     */
    export type AppUserFindUniqueOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUser
         */
        select?: AppUserSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUser
         */
        omit?: AppUserOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserInclude<ExtArgs> | null;
        /**
         * Filter, which AppUser to fetch.
         */
        where: AppUserWhereUniqueInput;
    };

    /**
     * AppUser findFirst
     */
    export type AppUserFindFirstArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUser
         */
        select?: AppUserSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUser
         */
        omit?: AppUserOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserInclude<ExtArgs> | null;
        /**
         * Filter, which AppUser to fetch.
         */
        where?: AppUserWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of AppUsers to fetch.
         */
        orderBy?: AppUserOrderByWithRelationInput | AppUserOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for AppUsers.
         */
        cursor?: AppUserWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` AppUsers from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` AppUsers.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of AppUsers.
         */
        distinct?: AppUserScalarFieldEnum | AppUserScalarFieldEnum[];
    };

    /**
     * AppUser findFirstOrThrow
     */
    export type AppUserFindFirstOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUser
         */
        select?: AppUserSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUser
         */
        omit?: AppUserOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserInclude<ExtArgs> | null;
        /**
         * Filter, which AppUser to fetch.
         */
        where?: AppUserWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of AppUsers to fetch.
         */
        orderBy?: AppUserOrderByWithRelationInput | AppUserOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for AppUsers.
         */
        cursor?: AppUserWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` AppUsers from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` AppUsers.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of AppUsers.
         */
        distinct?: AppUserScalarFieldEnum | AppUserScalarFieldEnum[];
    };

    /**
     * AppUser findMany
     */
    export type AppUserFindManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUser
         */
        select?: AppUserSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUser
         */
        omit?: AppUserOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserInclude<ExtArgs> | null;
        /**
         * Filter, which AppUsers to fetch.
         */
        where?: AppUserWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of AppUsers to fetch.
         */
        orderBy?: AppUserOrderByWithRelationInput | AppUserOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing AppUsers.
         */
        cursor?: AppUserWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` AppUsers from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` AppUsers.
         */
        skip?: number;
        distinct?: AppUserScalarFieldEnum | AppUserScalarFieldEnum[];
    };

    /**
     * AppUser create
     */
    export type AppUserCreateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUser
         */
        select?: AppUserSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUser
         */
        omit?: AppUserOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserInclude<ExtArgs> | null;
        /**
         * The data needed to create a AppUser.
         */
        data: XOR<AppUserCreateInput, AppUserUncheckedCreateInput>;
    };

    /**
     * AppUser createMany
     */
    export type AppUserCreateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to create many AppUsers.
         */
        data: AppUserCreateManyInput | AppUserCreateManyInput[];
        skipDuplicates?: boolean;
    };

    /**
     * AppUser createManyAndReturn
     */
    export type AppUserCreateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUser
         */
        select?: AppUserSelectCreateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUser
         */
        omit?: AppUserOmit<ExtArgs> | null;
        /**
         * The data used to create many AppUsers.
         */
        data: AppUserCreateManyInput | AppUserCreateManyInput[];
        skipDuplicates?: boolean;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserIncludeCreateManyAndReturn<ExtArgs> | null;
    };

    /**
     * AppUser update
     */
    export type AppUserUpdateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUser
         */
        select?: AppUserSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUser
         */
        omit?: AppUserOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserInclude<ExtArgs> | null;
        /**
         * The data needed to update a AppUser.
         */
        data: XOR<AppUserUpdateInput, AppUserUncheckedUpdateInput>;
        /**
         * Choose, which AppUser to update.
         */
        where: AppUserWhereUniqueInput;
    };

    /**
     * AppUser updateMany
     */
    export type AppUserUpdateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to update AppUsers.
         */
        data: XOR<AppUserUpdateManyMutationInput, AppUserUncheckedUpdateManyInput>;
        /**
         * Filter which AppUsers to update
         */
        where?: AppUserWhereInput;
        /**
         * Limit how many AppUsers to update.
         */
        limit?: number;
    };

    /**
     * AppUser updateManyAndReturn
     */
    export type AppUserUpdateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUser
         */
        select?: AppUserSelectUpdateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUser
         */
        omit?: AppUserOmit<ExtArgs> | null;
        /**
         * The data used to update AppUsers.
         */
        data: XOR<AppUserUpdateManyMutationInput, AppUserUncheckedUpdateManyInput>;
        /**
         * Filter which AppUsers to update
         */
        where?: AppUserWhereInput;
        /**
         * Limit how many AppUsers to update.
         */
        limit?: number;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserIncludeUpdateManyAndReturn<ExtArgs> | null;
    };

    /**
     * AppUser upsert
     */
    export type AppUserUpsertArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUser
         */
        select?: AppUserSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUser
         */
        omit?: AppUserOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserInclude<ExtArgs> | null;
        /**
         * The filter to search for the AppUser to update in case it exists.
         */
        where: AppUserWhereUniqueInput;
        /**
         * In case the AppUser found by the `where` argument doesn't exist, create a new AppUser with this data.
         */
        create: XOR<AppUserCreateInput, AppUserUncheckedCreateInput>;
        /**
         * In case the AppUser was found with the provided `where` argument, update it with this data.
         */
        update: XOR<AppUserUpdateInput, AppUserUncheckedUpdateInput>;
    };

    /**
     * AppUser delete
     */
    export type AppUserDeleteArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUser
         */
        select?: AppUserSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUser
         */
        omit?: AppUserOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserInclude<ExtArgs> | null;
        /**
         * Filter which AppUser to delete.
         */
        where: AppUserWhereUniqueInput;
    };

    /**
     * AppUser deleteMany
     */
    export type AppUserDeleteManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which AppUsers to delete
         */
        where?: AppUserWhereInput;
        /**
         * Limit how many AppUsers to delete.
         */
        limit?: number;
    };

    /**
     * AppUser.accounts
     */
    export type AppUser$accountsArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserAccount
         */
        select?: AppUserAccountSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserAccount
         */
        omit?: AppUserAccountOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserAccountInclude<ExtArgs> | null;
        where?: AppUserAccountWhereInput;
        orderBy?: AppUserAccountOrderByWithRelationInput | AppUserAccountOrderByWithRelationInput[];
        cursor?: AppUserAccountWhereUniqueInput;
        take?: number;
        skip?: number;
        distinct?: AppUserAccountScalarFieldEnum | AppUserAccountScalarFieldEnum[];
    };

    /**
     * AppUser without action
     */
    export type AppUserDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUser
         */
        select?: AppUserSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUser
         */
        omit?: AppUserOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserInclude<ExtArgs> | null;
    };

    /**
     * Model AppUserAccount
     */

    export type AggregateAppUserAccount = {
        _count: AppUserAccountCountAggregateOutputType | null;
        _min: AppUserAccountMinAggregateOutputType | null;
        _max: AppUserAccountMaxAggregateOutputType | null;
    };

    export type AppUserAccountMinAggregateOutputType = {
        id: string | null;
        applicationId: string | null;
        username: string | null;
        lastName: string | null;
        imageUrl: string | null;
        firstName: string | null;
        userId: string | null;
        passwordHash: string | null;
        createdAt: Date | null;
        updatedAt: Date | null;
    };

    export type AppUserAccountMaxAggregateOutputType = {
        id: string | null;
        applicationId: string | null;
        username: string | null;
        lastName: string | null;
        imageUrl: string | null;
        firstName: string | null;
        userId: string | null;
        passwordHash: string | null;
        createdAt: Date | null;
        updatedAt: Date | null;
    };

    export type AppUserAccountCountAggregateOutputType = {
        id: number;
        applicationId: number;
        username: number;
        lastName: number;
        imageUrl: number;
        firstName: number;
        userId: number;
        passwordHash: number;
        createdAt: number;
        updatedAt: number;
        _all: number;
    };

    export type AppUserAccountMinAggregateInputType = {
        id?: true;
        applicationId?: true;
        username?: true;
        lastName?: true;
        imageUrl?: true;
        firstName?: true;
        userId?: true;
        passwordHash?: true;
        createdAt?: true;
        updatedAt?: true;
    };

    export type AppUserAccountMaxAggregateInputType = {
        id?: true;
        applicationId?: true;
        username?: true;
        lastName?: true;
        imageUrl?: true;
        firstName?: true;
        userId?: true;
        passwordHash?: true;
        createdAt?: true;
        updatedAt?: true;
    };

    export type AppUserAccountCountAggregateInputType = {
        id?: true;
        applicationId?: true;
        username?: true;
        lastName?: true;
        imageUrl?: true;
        firstName?: true;
        userId?: true;
        passwordHash?: true;
        createdAt?: true;
        updatedAt?: true;
        _all?: true;
    };

    export type AppUserAccountAggregateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which AppUserAccount to aggregate.
         */
        where?: AppUserAccountWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of AppUserAccounts to fetch.
         */
        orderBy?: AppUserAccountOrderByWithRelationInput | AppUserAccountOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: AppUserAccountWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` AppUserAccounts from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` AppUserAccounts.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned AppUserAccounts
         **/
        _count?: true | AppUserAccountCountAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: AppUserAccountMinAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: AppUserAccountMaxAggregateInputType;
    };

    export type GetAppUserAccountAggregateType<T extends AppUserAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAppUserAccount]: P extends "_count" | "count"
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateAppUserAccount[P]>
            : GetScalarType<T[P], AggregateAppUserAccount[P]>;
    };

    export type AppUserAccountGroupByArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: AppUserAccountWhereInput;
        orderBy?:
            | AppUserAccountOrderByWithAggregationInput
            | AppUserAccountOrderByWithAggregationInput[];
        by: AppUserAccountScalarFieldEnum[] | AppUserAccountScalarFieldEnum;
        having?: AppUserAccountScalarWhereWithAggregatesInput;
        take?: number;
        skip?: number;
        _count?: AppUserAccountCountAggregateInputType | true;
        _min?: AppUserAccountMinAggregateInputType;
        _max?: AppUserAccountMaxAggregateInputType;
    };

    export type AppUserAccountGroupByOutputType = {
        id: string;
        applicationId: string;
        username: string | null;
        lastName: string | null;
        imageUrl: string | null;
        firstName: string | null;
        userId: string;
        passwordHash: string | null;
        createdAt: Date;
        updatedAt: Date;
        _count: AppUserAccountCountAggregateOutputType | null;
        _min: AppUserAccountMinAggregateOutputType | null;
        _max: AppUserAccountMaxAggregateOutputType | null;
    };

    type GetAppUserAccountGroupByPayload<T extends AppUserAccountGroupByArgs> =
        Prisma.PrismaPromise<
            Array<
                PickEnumerable<AppUserAccountGroupByOutputType, T["by"]> & {
                    [P in keyof T & keyof AppUserAccountGroupByOutputType]: P extends "_count"
                        ? T[P] extends boolean
                            ? number
                            : GetScalarType<T[P], AppUserAccountGroupByOutputType[P]>
                        : GetScalarType<T[P], AppUserAccountGroupByOutputType[P]>;
                }
            >
        >;

    export type AppUserAccountSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            applicationId?: boolean;
            username?: boolean;
            lastName?: boolean;
            imageUrl?: boolean;
            firstName?: boolean;
            userId?: boolean;
            passwordHash?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            application?: boolean | ApplicationDefaultArgs<ExtArgs>;
            user?: boolean | AppUserDefaultArgs<ExtArgs>;
            sessions?: boolean | AppUserAccount$sessionsArgs<ExtArgs>;
            emails?: boolean | AppUserAccount$emailsArgs<ExtArgs>;
            oauthAccounts?: boolean | AppUserAccount$oauthAccountsArgs<ExtArgs>;
            _count?: boolean | AppUserAccountCountOutputTypeDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["appUserAccount"]
    >;

    export type AppUserAccountSelectCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            applicationId?: boolean;
            username?: boolean;
            lastName?: boolean;
            imageUrl?: boolean;
            firstName?: boolean;
            userId?: boolean;
            passwordHash?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            application?: boolean | ApplicationDefaultArgs<ExtArgs>;
            user?: boolean | AppUserDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["appUserAccount"]
    >;

    export type AppUserAccountSelectUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            applicationId?: boolean;
            username?: boolean;
            lastName?: boolean;
            imageUrl?: boolean;
            firstName?: boolean;
            userId?: boolean;
            passwordHash?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            application?: boolean | ApplicationDefaultArgs<ExtArgs>;
            user?: boolean | AppUserDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["appUserAccount"]
    >;

    export type AppUserAccountSelectScalar = {
        id?: boolean;
        applicationId?: boolean;
        username?: boolean;
        lastName?: boolean;
        imageUrl?: boolean;
        firstName?: boolean;
        userId?: boolean;
        passwordHash?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
    };

    export type AppUserAccountOmit<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetOmit<
        | "id"
        | "applicationId"
        | "username"
        | "lastName"
        | "imageUrl"
        | "firstName"
        | "userId"
        | "passwordHash"
        | "createdAt"
        | "updatedAt",
        ExtArgs["result"]["appUserAccount"]
    >;
    export type AppUserAccountInclude<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        application?: boolean | ApplicationDefaultArgs<ExtArgs>;
        user?: boolean | AppUserDefaultArgs<ExtArgs>;
        sessions?: boolean | AppUserAccount$sessionsArgs<ExtArgs>;
        emails?: boolean | AppUserAccount$emailsArgs<ExtArgs>;
        oauthAccounts?: boolean | AppUserAccount$oauthAccountsArgs<ExtArgs>;
        _count?: boolean | AppUserAccountCountOutputTypeDefaultArgs<ExtArgs>;
    };
    export type AppUserAccountIncludeCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        application?: boolean | ApplicationDefaultArgs<ExtArgs>;
        user?: boolean | AppUserDefaultArgs<ExtArgs>;
    };
    export type AppUserAccountIncludeUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        application?: boolean | ApplicationDefaultArgs<ExtArgs>;
        user?: boolean | AppUserDefaultArgs<ExtArgs>;
    };

    export type $AppUserAccountPayload<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        name: "AppUserAccount";
        objects: {
            application: Prisma.$ApplicationPayload<ExtArgs>;
            user: Prisma.$AppUserPayload<ExtArgs>;
            sessions: Prisma.$AppUserSessionPayload<ExtArgs>[];
            emails: Prisma.$AppUserEmailPayload<ExtArgs>[];
            oauthAccounts: Prisma.$AppUserOAuthAccountPayload<ExtArgs>[];
        };
        scalars: $Extensions.GetPayloadResult<
            {
                id: string;
                applicationId: string;
                username: string | null;
                lastName: string | null;
                imageUrl: string | null;
                firstName: string | null;
                userId: string;
                passwordHash: string | null;
                createdAt: Date;
                updatedAt: Date;
            },
            ExtArgs["result"]["appUserAccount"]
        >;
        composites: {};
    };

    type AppUserAccountGetPayload<
        S extends boolean | null | undefined | AppUserAccountDefaultArgs,
    > = $Result.GetResult<Prisma.$AppUserAccountPayload, S>;

    type AppUserAccountCountArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = Omit<AppUserAccountFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
        select?: AppUserAccountCountAggregateInputType | true;
    };

    export interface AppUserAccountDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: {
            types: Prisma.TypeMap<ExtArgs>["model"]["AppUserAccount"];
            meta: { name: "AppUserAccount" };
        };
        /**
         * Find zero or one AppUserAccount that matches the filter.
         * @param {AppUserAccountFindUniqueArgs} args - Arguments to find a AppUserAccount
         * @example
         * // Get one AppUserAccount
         * const appUserAccount = await prisma.appUserAccount.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends AppUserAccountFindUniqueArgs>(
            args: SelectSubset<T, AppUserAccountFindUniqueArgs<ExtArgs>>
        ): Prisma__AppUserAccountClient<
            $Result.GetResult<
                Prisma.$AppUserAccountPayload<ExtArgs>,
                T,
                "findUnique",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find one AppUserAccount that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {AppUserAccountFindUniqueOrThrowArgs} args - Arguments to find a AppUserAccount
         * @example
         * // Get one AppUserAccount
         * const appUserAccount = await prisma.appUserAccount.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends AppUserAccountFindUniqueOrThrowArgs>(
            args: SelectSubset<T, AppUserAccountFindUniqueOrThrowArgs<ExtArgs>>
        ): Prisma__AppUserAccountClient<
            $Result.GetResult<
                Prisma.$AppUserAccountPayload<ExtArgs>,
                T,
                "findUniqueOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first AppUserAccount that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AppUserAccountFindFirstArgs} args - Arguments to find a AppUserAccount
         * @example
         * // Get one AppUserAccount
         * const appUserAccount = await prisma.appUserAccount.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends AppUserAccountFindFirstArgs>(
            args?: SelectSubset<T, AppUserAccountFindFirstArgs<ExtArgs>>
        ): Prisma__AppUserAccountClient<
            $Result.GetResult<
                Prisma.$AppUserAccountPayload<ExtArgs>,
                T,
                "findFirst",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first AppUserAccount that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AppUserAccountFindFirstOrThrowArgs} args - Arguments to find a AppUserAccount
         * @example
         * // Get one AppUserAccount
         * const appUserAccount = await prisma.appUserAccount.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends AppUserAccountFindFirstOrThrowArgs>(
            args?: SelectSubset<T, AppUserAccountFindFirstOrThrowArgs<ExtArgs>>
        ): Prisma__AppUserAccountClient<
            $Result.GetResult<
                Prisma.$AppUserAccountPayload<ExtArgs>,
                T,
                "findFirstOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find zero or more AppUserAccounts that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AppUserAccountFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all AppUserAccounts
         * const appUserAccounts = await prisma.appUserAccount.findMany()
         *
         * // Get first 10 AppUserAccounts
         * const appUserAccounts = await prisma.appUserAccount.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const appUserAccountWithIdOnly = await prisma.appUserAccount.findMany({ select: { id: true } })
         *
         */
        findMany<T extends AppUserAccountFindManyArgs>(
            args?: SelectSubset<T, AppUserAccountFindManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$AppUserAccountPayload<ExtArgs>,
                T,
                "findMany",
                GlobalOmitOptions
            >
        >;

        /**
         * Create a AppUserAccount.
         * @param {AppUserAccountCreateArgs} args - Arguments to create a AppUserAccount.
         * @example
         * // Create one AppUserAccount
         * const AppUserAccount = await prisma.appUserAccount.create({
         *   data: {
         *     // ... data to create a AppUserAccount
         *   }
         * })
         *
         */
        create<T extends AppUserAccountCreateArgs>(
            args: SelectSubset<T, AppUserAccountCreateArgs<ExtArgs>>
        ): Prisma__AppUserAccountClient<
            $Result.GetResult<
                Prisma.$AppUserAccountPayload<ExtArgs>,
                T,
                "create",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Create many AppUserAccounts.
         * @param {AppUserAccountCreateManyArgs} args - Arguments to create many AppUserAccounts.
         * @example
         * // Create many AppUserAccounts
         * const appUserAccount = await prisma.appUserAccount.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends AppUserAccountCreateManyArgs>(
            args?: SelectSubset<T, AppUserAccountCreateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Create many AppUserAccounts and returns the data saved in the database.
         * @param {AppUserAccountCreateManyAndReturnArgs} args - Arguments to create many AppUserAccounts.
         * @example
         * // Create many AppUserAccounts
         * const appUserAccount = await prisma.appUserAccount.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many AppUserAccounts and only return the `id`
         * const appUserAccountWithIdOnly = await prisma.appUserAccount.createManyAndReturn({
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends AppUserAccountCreateManyAndReturnArgs>(
            args?: SelectSubset<T, AppUserAccountCreateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$AppUserAccountPayload<ExtArgs>,
                T,
                "createManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Delete a AppUserAccount.
         * @param {AppUserAccountDeleteArgs} args - Arguments to delete one AppUserAccount.
         * @example
         * // Delete one AppUserAccount
         * const AppUserAccount = await prisma.appUserAccount.delete({
         *   where: {
         *     // ... filter to delete one AppUserAccount
         *   }
         * })
         *
         */
        delete<T extends AppUserAccountDeleteArgs>(
            args: SelectSubset<T, AppUserAccountDeleteArgs<ExtArgs>>
        ): Prisma__AppUserAccountClient<
            $Result.GetResult<
                Prisma.$AppUserAccountPayload<ExtArgs>,
                T,
                "delete",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Update one AppUserAccount.
         * @param {AppUserAccountUpdateArgs} args - Arguments to update one AppUserAccount.
         * @example
         * // Update one AppUserAccount
         * const appUserAccount = await prisma.appUserAccount.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends AppUserAccountUpdateArgs>(
            args: SelectSubset<T, AppUserAccountUpdateArgs<ExtArgs>>
        ): Prisma__AppUserAccountClient<
            $Result.GetResult<
                Prisma.$AppUserAccountPayload<ExtArgs>,
                T,
                "update",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Delete zero or more AppUserAccounts.
         * @param {AppUserAccountDeleteManyArgs} args - Arguments to filter AppUserAccounts to delete.
         * @example
         * // Delete a few AppUserAccounts
         * const { count } = await prisma.appUserAccount.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends AppUserAccountDeleteManyArgs>(
            args?: SelectSubset<T, AppUserAccountDeleteManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more AppUserAccounts.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AppUserAccountUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many AppUserAccounts
         * const appUserAccount = await prisma.appUserAccount.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends AppUserAccountUpdateManyArgs>(
            args: SelectSubset<T, AppUserAccountUpdateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more AppUserAccounts and returns the data updated in the database.
         * @param {AppUserAccountUpdateManyAndReturnArgs} args - Arguments to update many AppUserAccounts.
         * @example
         * // Update many AppUserAccounts
         * const appUserAccount = await prisma.appUserAccount.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more AppUserAccounts and only return the `id`
         * const appUserAccountWithIdOnly = await prisma.appUserAccount.updateManyAndReturn({
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
        updateManyAndReturn<T extends AppUserAccountUpdateManyAndReturnArgs>(
            args: SelectSubset<T, AppUserAccountUpdateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$AppUserAccountPayload<ExtArgs>,
                T,
                "updateManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Create or update one AppUserAccount.
         * @param {AppUserAccountUpsertArgs} args - Arguments to update or create a AppUserAccount.
         * @example
         * // Update or create a AppUserAccount
         * const appUserAccount = await prisma.appUserAccount.upsert({
         *   create: {
         *     // ... data to create a AppUserAccount
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the AppUserAccount we want to update
         *   }
         * })
         */
        upsert<T extends AppUserAccountUpsertArgs>(
            args: SelectSubset<T, AppUserAccountUpsertArgs<ExtArgs>>
        ): Prisma__AppUserAccountClient<
            $Result.GetResult<
                Prisma.$AppUserAccountPayload<ExtArgs>,
                T,
                "upsert",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Count the number of AppUserAccounts.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AppUserAccountCountArgs} args - Arguments to filter AppUserAccounts to count.
         * @example
         * // Count the number of AppUserAccounts
         * const count = await prisma.appUserAccount.count({
         *   where: {
         *     // ... the filter for the AppUserAccounts we want to count
         *   }
         * })
         **/
        count<T extends AppUserAccountCountArgs>(
            args?: Subset<T, AppUserAccountCountArgs>
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<"select", any>
                ? T["select"] extends true
                    ? number
                    : GetScalarType<T["select"], AppUserAccountCountAggregateOutputType>
                : number
        >;

        /**
         * Allows you to perform aggregations operations on a AppUserAccount.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AppUserAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
        aggregate<T extends AppUserAccountAggregateArgs>(
            args: Subset<T, AppUserAccountAggregateArgs>
        ): Prisma.PrismaPromise<GetAppUserAccountAggregateType<T>>;

        /**
         * Group by AppUserAccount.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AppUserAccountGroupByArgs} args - Group by arguments.
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
            T extends AppUserAccountGroupByArgs,
            HasSelectOrTake extends Or<Extends<"skip", Keys<T>>, Extends<"take", Keys<T>>>,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: AppUserAccountGroupByArgs["orderBy"] }
                : { orderBy?: AppUserAccountGroupByArgs["orderBy"] },
            OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T["orderBy"]>>>,
            ByFields extends MaybeTupleToUnion<T["by"]>,
            ByValid extends Has<ByFields, OrderFields>,
            HavingFields extends GetHavingFields<T["having"]>,
            HavingValid extends Has<ByFields, HavingFields>,
            ByEmpty extends T["by"] extends never[] ? True : False,
            InputErrors extends ByEmpty extends True
                ? `Error: "by" must not be empty.`
                : HavingValid extends False
                  ? {
                        [P in HavingFields]: P extends ByFields
                            ? never
                            : P extends string
                              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                              : [Error, "Field ", P, ` in "having" needs to be provided in "by"`];
                    }[HavingFields]
                  : "take" extends Keys<T>
                    ? "orderBy" extends Keys<T>
                        ? ByValid extends True
                            ? {}
                            : {
                                  [P in OrderFields]: P extends ByFields
                                      ? never
                                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                              }[OrderFields]
                        : 'Error: If you provide "take", you also need to provide "orderBy"'
                    : "skip" extends Keys<T>
                      ? "orderBy" extends Keys<T>
                          ? ByValid extends True
                              ? {}
                              : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                                }[OrderFields]
                          : 'Error: If you provide "skip", you also need to provide "orderBy"'
                      : ByValid extends True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields],
        >(
            args: SubsetIntersection<T, AppUserAccountGroupByArgs, OrderByArg> & InputErrors
        ): {} extends InputErrors
            ? GetAppUserAccountGroupByPayload<T>
            : Prisma.PrismaPromise<InputErrors>;
        /**
         * Fields of the AppUserAccount model
         */
        readonly fields: AppUserAccountFieldRefs;
    }

    /**
     * The delegate class that acts as a "Promise-like" for AppUserAccount.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__AppUserAccountClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise";
        application<T extends ApplicationDefaultArgs<ExtArgs> = {}>(
            args?: Subset<T, ApplicationDefaultArgs<ExtArgs>>
        ): Prisma__ApplicationClient<
            | $Result.GetResult<
                  Prisma.$ApplicationPayload<ExtArgs>,
                  T,
                  "findUniqueOrThrow",
                  GlobalOmitOptions
              >
            | Null,
            Null,
            ExtArgs,
            GlobalOmitOptions
        >;
        user<T extends AppUserDefaultArgs<ExtArgs> = {}>(
            args?: Subset<T, AppUserDefaultArgs<ExtArgs>>
        ): Prisma__AppUserClient<
            | $Result.GetResult<
                  Prisma.$AppUserPayload<ExtArgs>,
                  T,
                  "findUniqueOrThrow",
                  GlobalOmitOptions
              >
            | Null,
            Null,
            ExtArgs,
            GlobalOmitOptions
        >;
        sessions<T extends AppUserAccount$sessionsArgs<ExtArgs> = {}>(
            args?: Subset<T, AppUserAccount$sessionsArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            | $Result.GetResult<
                  Prisma.$AppUserSessionPayload<ExtArgs>,
                  T,
                  "findMany",
                  GlobalOmitOptions
              >
            | Null
        >;
        emails<T extends AppUserAccount$emailsArgs<ExtArgs> = {}>(
            args?: Subset<T, AppUserAccount$emailsArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            | $Result.GetResult<
                  Prisma.$AppUserEmailPayload<ExtArgs>,
                  T,
                  "findMany",
                  GlobalOmitOptions
              >
            | Null
        >;
        oauthAccounts<T extends AppUserAccount$oauthAccountsArgs<ExtArgs> = {}>(
            args?: Subset<T, AppUserAccount$oauthAccountsArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            | $Result.GetResult<
                  Prisma.$AppUserOAuthAccountPayload<ExtArgs>,
                  T,
                  "findMany",
                  GlobalOmitOptions
              >
            | Null
        >;
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
            onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
        ): $Utils.JsPromise<TResult1 | TResult2>;
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(
            onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
        ): $Utils.JsPromise<T | TResult>;
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
    }

    /**
     * Fields of the AppUserAccount model
     */
    interface AppUserAccountFieldRefs {
        readonly id: FieldRef<"AppUserAccount", "String">;
        readonly applicationId: FieldRef<"AppUserAccount", "String">;
        readonly username: FieldRef<"AppUserAccount", "String">;
        readonly lastName: FieldRef<"AppUserAccount", "String">;
        readonly imageUrl: FieldRef<"AppUserAccount", "String">;
        readonly firstName: FieldRef<"AppUserAccount", "String">;
        readonly userId: FieldRef<"AppUserAccount", "String">;
        readonly passwordHash: FieldRef<"AppUserAccount", "String">;
        readonly createdAt: FieldRef<"AppUserAccount", "DateTime">;
        readonly updatedAt: FieldRef<"AppUserAccount", "DateTime">;
    }

    // Custom InputTypes
    /**
     * AppUserAccount findUnique
     */
    export type AppUserAccountFindUniqueArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserAccount
         */
        select?: AppUserAccountSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserAccount
         */
        omit?: AppUserAccountOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserAccountInclude<ExtArgs> | null;
        /**
         * Filter, which AppUserAccount to fetch.
         */
        where: AppUserAccountWhereUniqueInput;
    };

    /**
     * AppUserAccount findUniqueOrThrow
     */
    export type AppUserAccountFindUniqueOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserAccount
         */
        select?: AppUserAccountSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserAccount
         */
        omit?: AppUserAccountOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserAccountInclude<ExtArgs> | null;
        /**
         * Filter, which AppUserAccount to fetch.
         */
        where: AppUserAccountWhereUniqueInput;
    };

    /**
     * AppUserAccount findFirst
     */
    export type AppUserAccountFindFirstArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserAccount
         */
        select?: AppUserAccountSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserAccount
         */
        omit?: AppUserAccountOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserAccountInclude<ExtArgs> | null;
        /**
         * Filter, which AppUserAccount to fetch.
         */
        where?: AppUserAccountWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of AppUserAccounts to fetch.
         */
        orderBy?: AppUserAccountOrderByWithRelationInput | AppUserAccountOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for AppUserAccounts.
         */
        cursor?: AppUserAccountWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` AppUserAccounts from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` AppUserAccounts.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of AppUserAccounts.
         */
        distinct?: AppUserAccountScalarFieldEnum | AppUserAccountScalarFieldEnum[];
    };

    /**
     * AppUserAccount findFirstOrThrow
     */
    export type AppUserAccountFindFirstOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserAccount
         */
        select?: AppUserAccountSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserAccount
         */
        omit?: AppUserAccountOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserAccountInclude<ExtArgs> | null;
        /**
         * Filter, which AppUserAccount to fetch.
         */
        where?: AppUserAccountWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of AppUserAccounts to fetch.
         */
        orderBy?: AppUserAccountOrderByWithRelationInput | AppUserAccountOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for AppUserAccounts.
         */
        cursor?: AppUserAccountWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` AppUserAccounts from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` AppUserAccounts.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of AppUserAccounts.
         */
        distinct?: AppUserAccountScalarFieldEnum | AppUserAccountScalarFieldEnum[];
    };

    /**
     * AppUserAccount findMany
     */
    export type AppUserAccountFindManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserAccount
         */
        select?: AppUserAccountSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserAccount
         */
        omit?: AppUserAccountOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserAccountInclude<ExtArgs> | null;
        /**
         * Filter, which AppUserAccounts to fetch.
         */
        where?: AppUserAccountWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of AppUserAccounts to fetch.
         */
        orderBy?: AppUserAccountOrderByWithRelationInput | AppUserAccountOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing AppUserAccounts.
         */
        cursor?: AppUserAccountWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` AppUserAccounts from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` AppUserAccounts.
         */
        skip?: number;
        distinct?: AppUserAccountScalarFieldEnum | AppUserAccountScalarFieldEnum[];
    };

    /**
     * AppUserAccount create
     */
    export type AppUserAccountCreateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserAccount
         */
        select?: AppUserAccountSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserAccount
         */
        omit?: AppUserAccountOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserAccountInclude<ExtArgs> | null;
        /**
         * The data needed to create a AppUserAccount.
         */
        data: XOR<AppUserAccountCreateInput, AppUserAccountUncheckedCreateInput>;
    };

    /**
     * AppUserAccount createMany
     */
    export type AppUserAccountCreateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to create many AppUserAccounts.
         */
        data: AppUserAccountCreateManyInput | AppUserAccountCreateManyInput[];
        skipDuplicates?: boolean;
    };

    /**
     * AppUserAccount createManyAndReturn
     */
    export type AppUserAccountCreateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserAccount
         */
        select?: AppUserAccountSelectCreateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserAccount
         */
        omit?: AppUserAccountOmit<ExtArgs> | null;
        /**
         * The data used to create many AppUserAccounts.
         */
        data: AppUserAccountCreateManyInput | AppUserAccountCreateManyInput[];
        skipDuplicates?: boolean;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserAccountIncludeCreateManyAndReturn<ExtArgs> | null;
    };

    /**
     * AppUserAccount update
     */
    export type AppUserAccountUpdateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserAccount
         */
        select?: AppUserAccountSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserAccount
         */
        omit?: AppUserAccountOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserAccountInclude<ExtArgs> | null;
        /**
         * The data needed to update a AppUserAccount.
         */
        data: XOR<AppUserAccountUpdateInput, AppUserAccountUncheckedUpdateInput>;
        /**
         * Choose, which AppUserAccount to update.
         */
        where: AppUserAccountWhereUniqueInput;
    };

    /**
     * AppUserAccount updateMany
     */
    export type AppUserAccountUpdateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to update AppUserAccounts.
         */
        data: XOR<AppUserAccountUpdateManyMutationInput, AppUserAccountUncheckedUpdateManyInput>;
        /**
         * Filter which AppUserAccounts to update
         */
        where?: AppUserAccountWhereInput;
        /**
         * Limit how many AppUserAccounts to update.
         */
        limit?: number;
    };

    /**
     * AppUserAccount updateManyAndReturn
     */
    export type AppUserAccountUpdateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserAccount
         */
        select?: AppUserAccountSelectUpdateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserAccount
         */
        omit?: AppUserAccountOmit<ExtArgs> | null;
        /**
         * The data used to update AppUserAccounts.
         */
        data: XOR<AppUserAccountUpdateManyMutationInput, AppUserAccountUncheckedUpdateManyInput>;
        /**
         * Filter which AppUserAccounts to update
         */
        where?: AppUserAccountWhereInput;
        /**
         * Limit how many AppUserAccounts to update.
         */
        limit?: number;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserAccountIncludeUpdateManyAndReturn<ExtArgs> | null;
    };

    /**
     * AppUserAccount upsert
     */
    export type AppUserAccountUpsertArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserAccount
         */
        select?: AppUserAccountSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserAccount
         */
        omit?: AppUserAccountOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserAccountInclude<ExtArgs> | null;
        /**
         * The filter to search for the AppUserAccount to update in case it exists.
         */
        where: AppUserAccountWhereUniqueInput;
        /**
         * In case the AppUserAccount found by the `where` argument doesn't exist, create a new AppUserAccount with this data.
         */
        create: XOR<AppUserAccountCreateInput, AppUserAccountUncheckedCreateInput>;
        /**
         * In case the AppUserAccount was found with the provided `where` argument, update it with this data.
         */
        update: XOR<AppUserAccountUpdateInput, AppUserAccountUncheckedUpdateInput>;
    };

    /**
     * AppUserAccount delete
     */
    export type AppUserAccountDeleteArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserAccount
         */
        select?: AppUserAccountSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserAccount
         */
        omit?: AppUserAccountOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserAccountInclude<ExtArgs> | null;
        /**
         * Filter which AppUserAccount to delete.
         */
        where: AppUserAccountWhereUniqueInput;
    };

    /**
     * AppUserAccount deleteMany
     */
    export type AppUserAccountDeleteManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which AppUserAccounts to delete
         */
        where?: AppUserAccountWhereInput;
        /**
         * Limit how many AppUserAccounts to delete.
         */
        limit?: number;
    };

    /**
     * AppUserAccount.sessions
     */
    export type AppUserAccount$sessionsArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserSession
         */
        select?: AppUserSessionSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserSession
         */
        omit?: AppUserSessionOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserSessionInclude<ExtArgs> | null;
        where?: AppUserSessionWhereInput;
        orderBy?: AppUserSessionOrderByWithRelationInput | AppUserSessionOrderByWithRelationInput[];
        cursor?: AppUserSessionWhereUniqueInput;
        take?: number;
        skip?: number;
        distinct?: AppUserSessionScalarFieldEnum | AppUserSessionScalarFieldEnum[];
    };

    /**
     * AppUserAccount.emails
     */
    export type AppUserAccount$emailsArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserEmail
         */
        select?: AppUserEmailSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserEmail
         */
        omit?: AppUserEmailOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserEmailInclude<ExtArgs> | null;
        where?: AppUserEmailWhereInput;
        orderBy?: AppUserEmailOrderByWithRelationInput | AppUserEmailOrderByWithRelationInput[];
        cursor?: AppUserEmailWhereUniqueInput;
        take?: number;
        skip?: number;
        distinct?: AppUserEmailScalarFieldEnum | AppUserEmailScalarFieldEnum[];
    };

    /**
     * AppUserAccount.oauthAccounts
     */
    export type AppUserAccount$oauthAccountsArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserOAuthAccount
         */
        select?: AppUserOAuthAccountSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserOAuthAccount
         */
        omit?: AppUserOAuthAccountOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserOAuthAccountInclude<ExtArgs> | null;
        where?: AppUserOAuthAccountWhereInput;
        orderBy?:
            | AppUserOAuthAccountOrderByWithRelationInput
            | AppUserOAuthAccountOrderByWithRelationInput[];
        cursor?: AppUserOAuthAccountWhereUniqueInput;
        take?: number;
        skip?: number;
        distinct?: AppUserOAuthAccountScalarFieldEnum | AppUserOAuthAccountScalarFieldEnum[];
    };

    /**
     * AppUserAccount without action
     */
    export type AppUserAccountDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserAccount
         */
        select?: AppUserAccountSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserAccount
         */
        omit?: AppUserAccountOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserAccountInclude<ExtArgs> | null;
    };

    /**
     * Model AppUserEmail
     */

    export type AggregateAppUserEmail = {
        _count: AppUserEmailCountAggregateOutputType | null;
        _min: AppUserEmailMinAggregateOutputType | null;
        _max: AppUserEmailMaxAggregateOutputType | null;
    };

    export type AppUserEmailMinAggregateOutputType = {
        id: string | null;
        accountId: string | null;
        applicationId: string | null;
        isVerified: boolean | null;
        address: string | null;
        isPrimary: boolean | null;
        createdAt: Date | null;
        updatedAt: Date | null;
    };

    export type AppUserEmailMaxAggregateOutputType = {
        id: string | null;
        accountId: string | null;
        applicationId: string | null;
        isVerified: boolean | null;
        address: string | null;
        isPrimary: boolean | null;
        createdAt: Date | null;
        updatedAt: Date | null;
    };

    export type AppUserEmailCountAggregateOutputType = {
        id: number;
        accountId: number;
        applicationId: number;
        isVerified: number;
        address: number;
        isPrimary: number;
        createdAt: number;
        updatedAt: number;
        _all: number;
    };

    export type AppUserEmailMinAggregateInputType = {
        id?: true;
        accountId?: true;
        applicationId?: true;
        isVerified?: true;
        address?: true;
        isPrimary?: true;
        createdAt?: true;
        updatedAt?: true;
    };

    export type AppUserEmailMaxAggregateInputType = {
        id?: true;
        accountId?: true;
        applicationId?: true;
        isVerified?: true;
        address?: true;
        isPrimary?: true;
        createdAt?: true;
        updatedAt?: true;
    };

    export type AppUserEmailCountAggregateInputType = {
        id?: true;
        accountId?: true;
        applicationId?: true;
        isVerified?: true;
        address?: true;
        isPrimary?: true;
        createdAt?: true;
        updatedAt?: true;
        _all?: true;
    };

    export type AppUserEmailAggregateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which AppUserEmail to aggregate.
         */
        where?: AppUserEmailWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of AppUserEmails to fetch.
         */
        orderBy?: AppUserEmailOrderByWithRelationInput | AppUserEmailOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: AppUserEmailWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` AppUserEmails from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` AppUserEmails.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned AppUserEmails
         **/
        _count?: true | AppUserEmailCountAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: AppUserEmailMinAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: AppUserEmailMaxAggregateInputType;
    };

    export type GetAppUserEmailAggregateType<T extends AppUserEmailAggregateArgs> = {
        [P in keyof T & keyof AggregateAppUserEmail]: P extends "_count" | "count"
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateAppUserEmail[P]>
            : GetScalarType<T[P], AggregateAppUserEmail[P]>;
    };

    export type AppUserEmailGroupByArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: AppUserEmailWhereInput;
        orderBy?:
            | AppUserEmailOrderByWithAggregationInput
            | AppUserEmailOrderByWithAggregationInput[];
        by: AppUserEmailScalarFieldEnum[] | AppUserEmailScalarFieldEnum;
        having?: AppUserEmailScalarWhereWithAggregatesInput;
        take?: number;
        skip?: number;
        _count?: AppUserEmailCountAggregateInputType | true;
        _min?: AppUserEmailMinAggregateInputType;
        _max?: AppUserEmailMaxAggregateInputType;
    };

    export type AppUserEmailGroupByOutputType = {
        id: string;
        accountId: string;
        applicationId: string;
        isVerified: boolean;
        address: string;
        isPrimary: boolean;
        createdAt: Date;
        updatedAt: Date;
        _count: AppUserEmailCountAggregateOutputType | null;
        _min: AppUserEmailMinAggregateOutputType | null;
        _max: AppUserEmailMaxAggregateOutputType | null;
    };

    type GetAppUserEmailGroupByPayload<T extends AppUserEmailGroupByArgs> = Prisma.PrismaPromise<
        Array<
            PickEnumerable<AppUserEmailGroupByOutputType, T["by"]> & {
                [P in keyof T & keyof AppUserEmailGroupByOutputType]: P extends "_count"
                    ? T[P] extends boolean
                        ? number
                        : GetScalarType<T[P], AppUserEmailGroupByOutputType[P]>
                    : GetScalarType<T[P], AppUserEmailGroupByOutputType[P]>;
            }
        >
    >;

    export type AppUserEmailSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            accountId?: boolean;
            applicationId?: boolean;
            isVerified?: boolean;
            address?: boolean;
            isPrimary?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            oauthAccounts?: boolean | AppUserEmail$oauthAccountsArgs<ExtArgs>;
            account?: boolean | AppUserAccountDefaultArgs<ExtArgs>;
            application?: boolean | ApplicationDefaultArgs<ExtArgs>;
            _count?: boolean | AppUserEmailCountOutputTypeDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["appUserEmail"]
    >;

    export type AppUserEmailSelectCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            accountId?: boolean;
            applicationId?: boolean;
            isVerified?: boolean;
            address?: boolean;
            isPrimary?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            account?: boolean | AppUserAccountDefaultArgs<ExtArgs>;
            application?: boolean | ApplicationDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["appUserEmail"]
    >;

    export type AppUserEmailSelectUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            accountId?: boolean;
            applicationId?: boolean;
            isVerified?: boolean;
            address?: boolean;
            isPrimary?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            account?: boolean | AppUserAccountDefaultArgs<ExtArgs>;
            application?: boolean | ApplicationDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["appUserEmail"]
    >;

    export type AppUserEmailSelectScalar = {
        id?: boolean;
        accountId?: boolean;
        applicationId?: boolean;
        isVerified?: boolean;
        address?: boolean;
        isPrimary?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
    };

    export type AppUserEmailOmit<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetOmit<
        | "id"
        | "accountId"
        | "applicationId"
        | "isVerified"
        | "address"
        | "isPrimary"
        | "createdAt"
        | "updatedAt",
        ExtArgs["result"]["appUserEmail"]
    >;
    export type AppUserEmailInclude<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        oauthAccounts?: boolean | AppUserEmail$oauthAccountsArgs<ExtArgs>;
        account?: boolean | AppUserAccountDefaultArgs<ExtArgs>;
        application?: boolean | ApplicationDefaultArgs<ExtArgs>;
        _count?: boolean | AppUserEmailCountOutputTypeDefaultArgs<ExtArgs>;
    };
    export type AppUserEmailIncludeCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        account?: boolean | AppUserAccountDefaultArgs<ExtArgs>;
        application?: boolean | ApplicationDefaultArgs<ExtArgs>;
    };
    export type AppUserEmailIncludeUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        account?: boolean | AppUserAccountDefaultArgs<ExtArgs>;
        application?: boolean | ApplicationDefaultArgs<ExtArgs>;
    };

    export type $AppUserEmailPayload<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        name: "AppUserEmail";
        objects: {
            oauthAccounts: Prisma.$AppUserOAuthAccountPayload<ExtArgs>[];
            account: Prisma.$AppUserAccountPayload<ExtArgs>;
            application: Prisma.$ApplicationPayload<ExtArgs>;
        };
        scalars: $Extensions.GetPayloadResult<
            {
                id: string;
                accountId: string;
                applicationId: string;
                isVerified: boolean;
                address: string;
                isPrimary: boolean;
                createdAt: Date;
                updatedAt: Date;
            },
            ExtArgs["result"]["appUserEmail"]
        >;
        composites: {};
    };

    type AppUserEmailGetPayload<S extends boolean | null | undefined | AppUserEmailDefaultArgs> =
        $Result.GetResult<Prisma.$AppUserEmailPayload, S>;

    type AppUserEmailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        Omit<AppUserEmailFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
            select?: AppUserEmailCountAggregateInputType | true;
        };

    export interface AppUserEmailDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: {
            types: Prisma.TypeMap<ExtArgs>["model"]["AppUserEmail"];
            meta: { name: "AppUserEmail" };
        };
        /**
         * Find zero or one AppUserEmail that matches the filter.
         * @param {AppUserEmailFindUniqueArgs} args - Arguments to find a AppUserEmail
         * @example
         * // Get one AppUserEmail
         * const appUserEmail = await prisma.appUserEmail.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends AppUserEmailFindUniqueArgs>(
            args: SelectSubset<T, AppUserEmailFindUniqueArgs<ExtArgs>>
        ): Prisma__AppUserEmailClient<
            $Result.GetResult<
                Prisma.$AppUserEmailPayload<ExtArgs>,
                T,
                "findUnique",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find one AppUserEmail that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {AppUserEmailFindUniqueOrThrowArgs} args - Arguments to find a AppUserEmail
         * @example
         * // Get one AppUserEmail
         * const appUserEmail = await prisma.appUserEmail.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends AppUserEmailFindUniqueOrThrowArgs>(
            args: SelectSubset<T, AppUserEmailFindUniqueOrThrowArgs<ExtArgs>>
        ): Prisma__AppUserEmailClient<
            $Result.GetResult<
                Prisma.$AppUserEmailPayload<ExtArgs>,
                T,
                "findUniqueOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first AppUserEmail that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AppUserEmailFindFirstArgs} args - Arguments to find a AppUserEmail
         * @example
         * // Get one AppUserEmail
         * const appUserEmail = await prisma.appUserEmail.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends AppUserEmailFindFirstArgs>(
            args?: SelectSubset<T, AppUserEmailFindFirstArgs<ExtArgs>>
        ): Prisma__AppUserEmailClient<
            $Result.GetResult<
                Prisma.$AppUserEmailPayload<ExtArgs>,
                T,
                "findFirst",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first AppUserEmail that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AppUserEmailFindFirstOrThrowArgs} args - Arguments to find a AppUserEmail
         * @example
         * // Get one AppUserEmail
         * const appUserEmail = await prisma.appUserEmail.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends AppUserEmailFindFirstOrThrowArgs>(
            args?: SelectSubset<T, AppUserEmailFindFirstOrThrowArgs<ExtArgs>>
        ): Prisma__AppUserEmailClient<
            $Result.GetResult<
                Prisma.$AppUserEmailPayload<ExtArgs>,
                T,
                "findFirstOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find zero or more AppUserEmails that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AppUserEmailFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all AppUserEmails
         * const appUserEmails = await prisma.appUserEmail.findMany()
         *
         * // Get first 10 AppUserEmails
         * const appUserEmails = await prisma.appUserEmail.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const appUserEmailWithIdOnly = await prisma.appUserEmail.findMany({ select: { id: true } })
         *
         */
        findMany<T extends AppUserEmailFindManyArgs>(
            args?: SelectSubset<T, AppUserEmailFindManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$AppUserEmailPayload<ExtArgs>,
                T,
                "findMany",
                GlobalOmitOptions
            >
        >;

        /**
         * Create a AppUserEmail.
         * @param {AppUserEmailCreateArgs} args - Arguments to create a AppUserEmail.
         * @example
         * // Create one AppUserEmail
         * const AppUserEmail = await prisma.appUserEmail.create({
         *   data: {
         *     // ... data to create a AppUserEmail
         *   }
         * })
         *
         */
        create<T extends AppUserEmailCreateArgs>(
            args: SelectSubset<T, AppUserEmailCreateArgs<ExtArgs>>
        ): Prisma__AppUserEmailClient<
            $Result.GetResult<Prisma.$AppUserEmailPayload<ExtArgs>, T, "create", GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Create many AppUserEmails.
         * @param {AppUserEmailCreateManyArgs} args - Arguments to create many AppUserEmails.
         * @example
         * // Create many AppUserEmails
         * const appUserEmail = await prisma.appUserEmail.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends AppUserEmailCreateManyArgs>(
            args?: SelectSubset<T, AppUserEmailCreateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Create many AppUserEmails and returns the data saved in the database.
         * @param {AppUserEmailCreateManyAndReturnArgs} args - Arguments to create many AppUserEmails.
         * @example
         * // Create many AppUserEmails
         * const appUserEmail = await prisma.appUserEmail.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many AppUserEmails and only return the `id`
         * const appUserEmailWithIdOnly = await prisma.appUserEmail.createManyAndReturn({
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends AppUserEmailCreateManyAndReturnArgs>(
            args?: SelectSubset<T, AppUserEmailCreateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$AppUserEmailPayload<ExtArgs>,
                T,
                "createManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Delete a AppUserEmail.
         * @param {AppUserEmailDeleteArgs} args - Arguments to delete one AppUserEmail.
         * @example
         * // Delete one AppUserEmail
         * const AppUserEmail = await prisma.appUserEmail.delete({
         *   where: {
         *     // ... filter to delete one AppUserEmail
         *   }
         * })
         *
         */
        delete<T extends AppUserEmailDeleteArgs>(
            args: SelectSubset<T, AppUserEmailDeleteArgs<ExtArgs>>
        ): Prisma__AppUserEmailClient<
            $Result.GetResult<Prisma.$AppUserEmailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Update one AppUserEmail.
         * @param {AppUserEmailUpdateArgs} args - Arguments to update one AppUserEmail.
         * @example
         * // Update one AppUserEmail
         * const appUserEmail = await prisma.appUserEmail.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends AppUserEmailUpdateArgs>(
            args: SelectSubset<T, AppUserEmailUpdateArgs<ExtArgs>>
        ): Prisma__AppUserEmailClient<
            $Result.GetResult<Prisma.$AppUserEmailPayload<ExtArgs>, T, "update", GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Delete zero or more AppUserEmails.
         * @param {AppUserEmailDeleteManyArgs} args - Arguments to filter AppUserEmails to delete.
         * @example
         * // Delete a few AppUserEmails
         * const { count } = await prisma.appUserEmail.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends AppUserEmailDeleteManyArgs>(
            args?: SelectSubset<T, AppUserEmailDeleteManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more AppUserEmails.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AppUserEmailUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many AppUserEmails
         * const appUserEmail = await prisma.appUserEmail.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends AppUserEmailUpdateManyArgs>(
            args: SelectSubset<T, AppUserEmailUpdateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more AppUserEmails and returns the data updated in the database.
         * @param {AppUserEmailUpdateManyAndReturnArgs} args - Arguments to update many AppUserEmails.
         * @example
         * // Update many AppUserEmails
         * const appUserEmail = await prisma.appUserEmail.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more AppUserEmails and only return the `id`
         * const appUserEmailWithIdOnly = await prisma.appUserEmail.updateManyAndReturn({
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
        updateManyAndReturn<T extends AppUserEmailUpdateManyAndReturnArgs>(
            args: SelectSubset<T, AppUserEmailUpdateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$AppUserEmailPayload<ExtArgs>,
                T,
                "updateManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Create or update one AppUserEmail.
         * @param {AppUserEmailUpsertArgs} args - Arguments to update or create a AppUserEmail.
         * @example
         * // Update or create a AppUserEmail
         * const appUserEmail = await prisma.appUserEmail.upsert({
         *   create: {
         *     // ... data to create a AppUserEmail
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the AppUserEmail we want to update
         *   }
         * })
         */
        upsert<T extends AppUserEmailUpsertArgs>(
            args: SelectSubset<T, AppUserEmailUpsertArgs<ExtArgs>>
        ): Prisma__AppUserEmailClient<
            $Result.GetResult<Prisma.$AppUserEmailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Count the number of AppUserEmails.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AppUserEmailCountArgs} args - Arguments to filter AppUserEmails to count.
         * @example
         * // Count the number of AppUserEmails
         * const count = await prisma.appUserEmail.count({
         *   where: {
         *     // ... the filter for the AppUserEmails we want to count
         *   }
         * })
         **/
        count<T extends AppUserEmailCountArgs>(
            args?: Subset<T, AppUserEmailCountArgs>
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<"select", any>
                ? T["select"] extends true
                    ? number
                    : GetScalarType<T["select"], AppUserEmailCountAggregateOutputType>
                : number
        >;

        /**
         * Allows you to perform aggregations operations on a AppUserEmail.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AppUserEmailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
        aggregate<T extends AppUserEmailAggregateArgs>(
            args: Subset<T, AppUserEmailAggregateArgs>
        ): Prisma.PrismaPromise<GetAppUserEmailAggregateType<T>>;

        /**
         * Group by AppUserEmail.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AppUserEmailGroupByArgs} args - Group by arguments.
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
            T extends AppUserEmailGroupByArgs,
            HasSelectOrTake extends Or<Extends<"skip", Keys<T>>, Extends<"take", Keys<T>>>,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: AppUserEmailGroupByArgs["orderBy"] }
                : { orderBy?: AppUserEmailGroupByArgs["orderBy"] },
            OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T["orderBy"]>>>,
            ByFields extends MaybeTupleToUnion<T["by"]>,
            ByValid extends Has<ByFields, OrderFields>,
            HavingFields extends GetHavingFields<T["having"]>,
            HavingValid extends Has<ByFields, HavingFields>,
            ByEmpty extends T["by"] extends never[] ? True : False,
            InputErrors extends ByEmpty extends True
                ? `Error: "by" must not be empty.`
                : HavingValid extends False
                  ? {
                        [P in HavingFields]: P extends ByFields
                            ? never
                            : P extends string
                              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                              : [Error, "Field ", P, ` in "having" needs to be provided in "by"`];
                    }[HavingFields]
                  : "take" extends Keys<T>
                    ? "orderBy" extends Keys<T>
                        ? ByValid extends True
                            ? {}
                            : {
                                  [P in OrderFields]: P extends ByFields
                                      ? never
                                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                              }[OrderFields]
                        : 'Error: If you provide "take", you also need to provide "orderBy"'
                    : "skip" extends Keys<T>
                      ? "orderBy" extends Keys<T>
                          ? ByValid extends True
                              ? {}
                              : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                                }[OrderFields]
                          : 'Error: If you provide "skip", you also need to provide "orderBy"'
                      : ByValid extends True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields],
        >(
            args: SubsetIntersection<T, AppUserEmailGroupByArgs, OrderByArg> & InputErrors
        ): {} extends InputErrors
            ? GetAppUserEmailGroupByPayload<T>
            : Prisma.PrismaPromise<InputErrors>;
        /**
         * Fields of the AppUserEmail model
         */
        readonly fields: AppUserEmailFieldRefs;
    }

    /**
     * The delegate class that acts as a "Promise-like" for AppUserEmail.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__AppUserEmailClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise";
        oauthAccounts<T extends AppUserEmail$oauthAccountsArgs<ExtArgs> = {}>(
            args?: Subset<T, AppUserEmail$oauthAccountsArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            | $Result.GetResult<
                  Prisma.$AppUserOAuthAccountPayload<ExtArgs>,
                  T,
                  "findMany",
                  GlobalOmitOptions
              >
            | Null
        >;
        account<T extends AppUserAccountDefaultArgs<ExtArgs> = {}>(
            args?: Subset<T, AppUserAccountDefaultArgs<ExtArgs>>
        ): Prisma__AppUserAccountClient<
            | $Result.GetResult<
                  Prisma.$AppUserAccountPayload<ExtArgs>,
                  T,
                  "findUniqueOrThrow",
                  GlobalOmitOptions
              >
            | Null,
            Null,
            ExtArgs,
            GlobalOmitOptions
        >;
        application<T extends ApplicationDefaultArgs<ExtArgs> = {}>(
            args?: Subset<T, ApplicationDefaultArgs<ExtArgs>>
        ): Prisma__ApplicationClient<
            | $Result.GetResult<
                  Prisma.$ApplicationPayload<ExtArgs>,
                  T,
                  "findUniqueOrThrow",
                  GlobalOmitOptions
              >
            | Null,
            Null,
            ExtArgs,
            GlobalOmitOptions
        >;
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
            onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
        ): $Utils.JsPromise<TResult1 | TResult2>;
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(
            onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
        ): $Utils.JsPromise<T | TResult>;
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
    }

    /**
     * Fields of the AppUserEmail model
     */
    interface AppUserEmailFieldRefs {
        readonly id: FieldRef<"AppUserEmail", "String">;
        readonly accountId: FieldRef<"AppUserEmail", "String">;
        readonly applicationId: FieldRef<"AppUserEmail", "String">;
        readonly isVerified: FieldRef<"AppUserEmail", "Boolean">;
        readonly address: FieldRef<"AppUserEmail", "String">;
        readonly isPrimary: FieldRef<"AppUserEmail", "Boolean">;
        readonly createdAt: FieldRef<"AppUserEmail", "DateTime">;
        readonly updatedAt: FieldRef<"AppUserEmail", "DateTime">;
    }

    // Custom InputTypes
    /**
     * AppUserEmail findUnique
     */
    export type AppUserEmailFindUniqueArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserEmail
         */
        select?: AppUserEmailSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserEmail
         */
        omit?: AppUserEmailOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserEmailInclude<ExtArgs> | null;
        /**
         * Filter, which AppUserEmail to fetch.
         */
        where: AppUserEmailWhereUniqueInput;
    };

    /**
     * AppUserEmail findUniqueOrThrow
     */
    export type AppUserEmailFindUniqueOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserEmail
         */
        select?: AppUserEmailSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserEmail
         */
        omit?: AppUserEmailOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserEmailInclude<ExtArgs> | null;
        /**
         * Filter, which AppUserEmail to fetch.
         */
        where: AppUserEmailWhereUniqueInput;
    };

    /**
     * AppUserEmail findFirst
     */
    export type AppUserEmailFindFirstArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserEmail
         */
        select?: AppUserEmailSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserEmail
         */
        omit?: AppUserEmailOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserEmailInclude<ExtArgs> | null;
        /**
         * Filter, which AppUserEmail to fetch.
         */
        where?: AppUserEmailWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of AppUserEmails to fetch.
         */
        orderBy?: AppUserEmailOrderByWithRelationInput | AppUserEmailOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for AppUserEmails.
         */
        cursor?: AppUserEmailWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` AppUserEmails from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` AppUserEmails.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of AppUserEmails.
         */
        distinct?: AppUserEmailScalarFieldEnum | AppUserEmailScalarFieldEnum[];
    };

    /**
     * AppUserEmail findFirstOrThrow
     */
    export type AppUserEmailFindFirstOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserEmail
         */
        select?: AppUserEmailSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserEmail
         */
        omit?: AppUserEmailOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserEmailInclude<ExtArgs> | null;
        /**
         * Filter, which AppUserEmail to fetch.
         */
        where?: AppUserEmailWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of AppUserEmails to fetch.
         */
        orderBy?: AppUserEmailOrderByWithRelationInput | AppUserEmailOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for AppUserEmails.
         */
        cursor?: AppUserEmailWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` AppUserEmails from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` AppUserEmails.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of AppUserEmails.
         */
        distinct?: AppUserEmailScalarFieldEnum | AppUserEmailScalarFieldEnum[];
    };

    /**
     * AppUserEmail findMany
     */
    export type AppUserEmailFindManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserEmail
         */
        select?: AppUserEmailSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserEmail
         */
        omit?: AppUserEmailOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserEmailInclude<ExtArgs> | null;
        /**
         * Filter, which AppUserEmails to fetch.
         */
        where?: AppUserEmailWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of AppUserEmails to fetch.
         */
        orderBy?: AppUserEmailOrderByWithRelationInput | AppUserEmailOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing AppUserEmails.
         */
        cursor?: AppUserEmailWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` AppUserEmails from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` AppUserEmails.
         */
        skip?: number;
        distinct?: AppUserEmailScalarFieldEnum | AppUserEmailScalarFieldEnum[];
    };

    /**
     * AppUserEmail create
     */
    export type AppUserEmailCreateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserEmail
         */
        select?: AppUserEmailSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserEmail
         */
        omit?: AppUserEmailOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserEmailInclude<ExtArgs> | null;
        /**
         * The data needed to create a AppUserEmail.
         */
        data: XOR<AppUserEmailCreateInput, AppUserEmailUncheckedCreateInput>;
    };

    /**
     * AppUserEmail createMany
     */
    export type AppUserEmailCreateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to create many AppUserEmails.
         */
        data: AppUserEmailCreateManyInput | AppUserEmailCreateManyInput[];
        skipDuplicates?: boolean;
    };

    /**
     * AppUserEmail createManyAndReturn
     */
    export type AppUserEmailCreateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserEmail
         */
        select?: AppUserEmailSelectCreateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserEmail
         */
        omit?: AppUserEmailOmit<ExtArgs> | null;
        /**
         * The data used to create many AppUserEmails.
         */
        data: AppUserEmailCreateManyInput | AppUserEmailCreateManyInput[];
        skipDuplicates?: boolean;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserEmailIncludeCreateManyAndReturn<ExtArgs> | null;
    };

    /**
     * AppUserEmail update
     */
    export type AppUserEmailUpdateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserEmail
         */
        select?: AppUserEmailSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserEmail
         */
        omit?: AppUserEmailOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserEmailInclude<ExtArgs> | null;
        /**
         * The data needed to update a AppUserEmail.
         */
        data: XOR<AppUserEmailUpdateInput, AppUserEmailUncheckedUpdateInput>;
        /**
         * Choose, which AppUserEmail to update.
         */
        where: AppUserEmailWhereUniqueInput;
    };

    /**
     * AppUserEmail updateMany
     */
    export type AppUserEmailUpdateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to update AppUserEmails.
         */
        data: XOR<AppUserEmailUpdateManyMutationInput, AppUserEmailUncheckedUpdateManyInput>;
        /**
         * Filter which AppUserEmails to update
         */
        where?: AppUserEmailWhereInput;
        /**
         * Limit how many AppUserEmails to update.
         */
        limit?: number;
    };

    /**
     * AppUserEmail updateManyAndReturn
     */
    export type AppUserEmailUpdateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserEmail
         */
        select?: AppUserEmailSelectUpdateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserEmail
         */
        omit?: AppUserEmailOmit<ExtArgs> | null;
        /**
         * The data used to update AppUserEmails.
         */
        data: XOR<AppUserEmailUpdateManyMutationInput, AppUserEmailUncheckedUpdateManyInput>;
        /**
         * Filter which AppUserEmails to update
         */
        where?: AppUserEmailWhereInput;
        /**
         * Limit how many AppUserEmails to update.
         */
        limit?: number;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserEmailIncludeUpdateManyAndReturn<ExtArgs> | null;
    };

    /**
     * AppUserEmail upsert
     */
    export type AppUserEmailUpsertArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserEmail
         */
        select?: AppUserEmailSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserEmail
         */
        omit?: AppUserEmailOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserEmailInclude<ExtArgs> | null;
        /**
         * The filter to search for the AppUserEmail to update in case it exists.
         */
        where: AppUserEmailWhereUniqueInput;
        /**
         * In case the AppUserEmail found by the `where` argument doesn't exist, create a new AppUserEmail with this data.
         */
        create: XOR<AppUserEmailCreateInput, AppUserEmailUncheckedCreateInput>;
        /**
         * In case the AppUserEmail was found with the provided `where` argument, update it with this data.
         */
        update: XOR<AppUserEmailUpdateInput, AppUserEmailUncheckedUpdateInput>;
    };

    /**
     * AppUserEmail delete
     */
    export type AppUserEmailDeleteArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserEmail
         */
        select?: AppUserEmailSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserEmail
         */
        omit?: AppUserEmailOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserEmailInclude<ExtArgs> | null;
        /**
         * Filter which AppUserEmail to delete.
         */
        where: AppUserEmailWhereUniqueInput;
    };

    /**
     * AppUserEmail deleteMany
     */
    export type AppUserEmailDeleteManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which AppUserEmails to delete
         */
        where?: AppUserEmailWhereInput;
        /**
         * Limit how many AppUserEmails to delete.
         */
        limit?: number;
    };

    /**
     * AppUserEmail.oauthAccounts
     */
    export type AppUserEmail$oauthAccountsArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserOAuthAccount
         */
        select?: AppUserOAuthAccountSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserOAuthAccount
         */
        omit?: AppUserOAuthAccountOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserOAuthAccountInclude<ExtArgs> | null;
        where?: AppUserOAuthAccountWhereInput;
        orderBy?:
            | AppUserOAuthAccountOrderByWithRelationInput
            | AppUserOAuthAccountOrderByWithRelationInput[];
        cursor?: AppUserOAuthAccountWhereUniqueInput;
        take?: number;
        skip?: number;
        distinct?: AppUserOAuthAccountScalarFieldEnum | AppUserOAuthAccountScalarFieldEnum[];
    };

    /**
     * AppUserEmail without action
     */
    export type AppUserEmailDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserEmail
         */
        select?: AppUserEmailSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserEmail
         */
        omit?: AppUserEmailOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserEmailInclude<ExtArgs> | null;
    };

    /**
     * Model AppUserSession
     */

    export type AggregateAppUserSession = {
        _count: AppUserSessionCountAggregateOutputType | null;
        _min: AppUserSessionMinAggregateOutputType | null;
        _max: AppUserSessionMaxAggregateOutputType | null;
    };

    export type AppUserSessionMinAggregateOutputType = {
        id: string | null;
        accountId: string | null;
        refreshTokenId: string | null;
        userAgent: string | null;
        ipAddress: string | null;
        applicationId: string | null;
        expiresAt: Date | null;
        createdAt: Date | null;
        updatedAt: Date | null;
    };

    export type AppUserSessionMaxAggregateOutputType = {
        id: string | null;
        accountId: string | null;
        refreshTokenId: string | null;
        userAgent: string | null;
        ipAddress: string | null;
        applicationId: string | null;
        expiresAt: Date | null;
        createdAt: Date | null;
        updatedAt: Date | null;
    };

    export type AppUserSessionCountAggregateOutputType = {
        id: number;
        accountId: number;
        refreshTokenId: number;
        userAgent: number;
        ipAddress: number;
        applicationId: number;
        expiresAt: number;
        createdAt: number;
        updatedAt: number;
        _all: number;
    };

    export type AppUserSessionMinAggregateInputType = {
        id?: true;
        accountId?: true;
        refreshTokenId?: true;
        userAgent?: true;
        ipAddress?: true;
        applicationId?: true;
        expiresAt?: true;
        createdAt?: true;
        updatedAt?: true;
    };

    export type AppUserSessionMaxAggregateInputType = {
        id?: true;
        accountId?: true;
        refreshTokenId?: true;
        userAgent?: true;
        ipAddress?: true;
        applicationId?: true;
        expiresAt?: true;
        createdAt?: true;
        updatedAt?: true;
    };

    export type AppUserSessionCountAggregateInputType = {
        id?: true;
        accountId?: true;
        refreshTokenId?: true;
        userAgent?: true;
        ipAddress?: true;
        applicationId?: true;
        expiresAt?: true;
        createdAt?: true;
        updatedAt?: true;
        _all?: true;
    };

    export type AppUserSessionAggregateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which AppUserSession to aggregate.
         */
        where?: AppUserSessionWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of AppUserSessions to fetch.
         */
        orderBy?: AppUserSessionOrderByWithRelationInput | AppUserSessionOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: AppUserSessionWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` AppUserSessions from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` AppUserSessions.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned AppUserSessions
         **/
        _count?: true | AppUserSessionCountAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: AppUserSessionMinAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: AppUserSessionMaxAggregateInputType;
    };

    export type GetAppUserSessionAggregateType<T extends AppUserSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateAppUserSession]: P extends "_count" | "count"
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateAppUserSession[P]>
            : GetScalarType<T[P], AggregateAppUserSession[P]>;
    };

    export type AppUserSessionGroupByArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: AppUserSessionWhereInput;
        orderBy?:
            | AppUserSessionOrderByWithAggregationInput
            | AppUserSessionOrderByWithAggregationInput[];
        by: AppUserSessionScalarFieldEnum[] | AppUserSessionScalarFieldEnum;
        having?: AppUserSessionScalarWhereWithAggregatesInput;
        take?: number;
        skip?: number;
        _count?: AppUserSessionCountAggregateInputType | true;
        _min?: AppUserSessionMinAggregateInputType;
        _max?: AppUserSessionMaxAggregateInputType;
    };

    export type AppUserSessionGroupByOutputType = {
        id: string;
        accountId: string;
        refreshTokenId: string;
        userAgent: string;
        ipAddress: string;
        applicationId: string;
        expiresAt: Date;
        createdAt: Date;
        updatedAt: Date;
        _count: AppUserSessionCountAggregateOutputType | null;
        _min: AppUserSessionMinAggregateOutputType | null;
        _max: AppUserSessionMaxAggregateOutputType | null;
    };

    type GetAppUserSessionGroupByPayload<T extends AppUserSessionGroupByArgs> =
        Prisma.PrismaPromise<
            Array<
                PickEnumerable<AppUserSessionGroupByOutputType, T["by"]> & {
                    [P in keyof T & keyof AppUserSessionGroupByOutputType]: P extends "_count"
                        ? T[P] extends boolean
                            ? number
                            : GetScalarType<T[P], AppUserSessionGroupByOutputType[P]>
                        : GetScalarType<T[P], AppUserSessionGroupByOutputType[P]>;
                }
            >
        >;

    export type AppUserSessionSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            accountId?: boolean;
            refreshTokenId?: boolean;
            userAgent?: boolean;
            ipAddress?: boolean;
            applicationId?: boolean;
            expiresAt?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            account?: boolean | AppUserAccountDefaultArgs<ExtArgs>;
            application?: boolean | ApplicationDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["appUserSession"]
    >;

    export type AppUserSessionSelectCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            accountId?: boolean;
            refreshTokenId?: boolean;
            userAgent?: boolean;
            ipAddress?: boolean;
            applicationId?: boolean;
            expiresAt?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            account?: boolean | AppUserAccountDefaultArgs<ExtArgs>;
            application?: boolean | ApplicationDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["appUserSession"]
    >;

    export type AppUserSessionSelectUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            accountId?: boolean;
            refreshTokenId?: boolean;
            userAgent?: boolean;
            ipAddress?: boolean;
            applicationId?: boolean;
            expiresAt?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            account?: boolean | AppUserAccountDefaultArgs<ExtArgs>;
            application?: boolean | ApplicationDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["appUserSession"]
    >;

    export type AppUserSessionSelectScalar = {
        id?: boolean;
        accountId?: boolean;
        refreshTokenId?: boolean;
        userAgent?: boolean;
        ipAddress?: boolean;
        applicationId?: boolean;
        expiresAt?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
    };

    export type AppUserSessionOmit<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetOmit<
        | "id"
        | "accountId"
        | "refreshTokenId"
        | "userAgent"
        | "ipAddress"
        | "applicationId"
        | "expiresAt"
        | "createdAt"
        | "updatedAt",
        ExtArgs["result"]["appUserSession"]
    >;
    export type AppUserSessionInclude<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        account?: boolean | AppUserAccountDefaultArgs<ExtArgs>;
        application?: boolean | ApplicationDefaultArgs<ExtArgs>;
    };
    export type AppUserSessionIncludeCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        account?: boolean | AppUserAccountDefaultArgs<ExtArgs>;
        application?: boolean | ApplicationDefaultArgs<ExtArgs>;
    };
    export type AppUserSessionIncludeUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        account?: boolean | AppUserAccountDefaultArgs<ExtArgs>;
        application?: boolean | ApplicationDefaultArgs<ExtArgs>;
    };

    export type $AppUserSessionPayload<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        name: "AppUserSession";
        objects: {
            account: Prisma.$AppUserAccountPayload<ExtArgs>;
            application: Prisma.$ApplicationPayload<ExtArgs>;
        };
        scalars: $Extensions.GetPayloadResult<
            {
                id: string;
                accountId: string;
                refreshTokenId: string;
                userAgent: string;
                ipAddress: string;
                applicationId: string;
                expiresAt: Date;
                createdAt: Date;
                updatedAt: Date;
            },
            ExtArgs["result"]["appUserSession"]
        >;
        composites: {};
    };

    type AppUserSessionGetPayload<
        S extends boolean | null | undefined | AppUserSessionDefaultArgs,
    > = $Result.GetResult<Prisma.$AppUserSessionPayload, S>;

    type AppUserSessionCountArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = Omit<AppUserSessionFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
        select?: AppUserSessionCountAggregateInputType | true;
    };

    export interface AppUserSessionDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: {
            types: Prisma.TypeMap<ExtArgs>["model"]["AppUserSession"];
            meta: { name: "AppUserSession" };
        };
        /**
         * Find zero or one AppUserSession that matches the filter.
         * @param {AppUserSessionFindUniqueArgs} args - Arguments to find a AppUserSession
         * @example
         * // Get one AppUserSession
         * const appUserSession = await prisma.appUserSession.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends AppUserSessionFindUniqueArgs>(
            args: SelectSubset<T, AppUserSessionFindUniqueArgs<ExtArgs>>
        ): Prisma__AppUserSessionClient<
            $Result.GetResult<
                Prisma.$AppUserSessionPayload<ExtArgs>,
                T,
                "findUnique",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find one AppUserSession that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {AppUserSessionFindUniqueOrThrowArgs} args - Arguments to find a AppUserSession
         * @example
         * // Get one AppUserSession
         * const appUserSession = await prisma.appUserSession.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends AppUserSessionFindUniqueOrThrowArgs>(
            args: SelectSubset<T, AppUserSessionFindUniqueOrThrowArgs<ExtArgs>>
        ): Prisma__AppUserSessionClient<
            $Result.GetResult<
                Prisma.$AppUserSessionPayload<ExtArgs>,
                T,
                "findUniqueOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first AppUserSession that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AppUserSessionFindFirstArgs} args - Arguments to find a AppUserSession
         * @example
         * // Get one AppUserSession
         * const appUserSession = await prisma.appUserSession.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends AppUserSessionFindFirstArgs>(
            args?: SelectSubset<T, AppUserSessionFindFirstArgs<ExtArgs>>
        ): Prisma__AppUserSessionClient<
            $Result.GetResult<
                Prisma.$AppUserSessionPayload<ExtArgs>,
                T,
                "findFirst",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first AppUserSession that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AppUserSessionFindFirstOrThrowArgs} args - Arguments to find a AppUserSession
         * @example
         * // Get one AppUserSession
         * const appUserSession = await prisma.appUserSession.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends AppUserSessionFindFirstOrThrowArgs>(
            args?: SelectSubset<T, AppUserSessionFindFirstOrThrowArgs<ExtArgs>>
        ): Prisma__AppUserSessionClient<
            $Result.GetResult<
                Prisma.$AppUserSessionPayload<ExtArgs>,
                T,
                "findFirstOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find zero or more AppUserSessions that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AppUserSessionFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all AppUserSessions
         * const appUserSessions = await prisma.appUserSession.findMany()
         *
         * // Get first 10 AppUserSessions
         * const appUserSessions = await prisma.appUserSession.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const appUserSessionWithIdOnly = await prisma.appUserSession.findMany({ select: { id: true } })
         *
         */
        findMany<T extends AppUserSessionFindManyArgs>(
            args?: SelectSubset<T, AppUserSessionFindManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$AppUserSessionPayload<ExtArgs>,
                T,
                "findMany",
                GlobalOmitOptions
            >
        >;

        /**
         * Create a AppUserSession.
         * @param {AppUserSessionCreateArgs} args - Arguments to create a AppUserSession.
         * @example
         * // Create one AppUserSession
         * const AppUserSession = await prisma.appUserSession.create({
         *   data: {
         *     // ... data to create a AppUserSession
         *   }
         * })
         *
         */
        create<T extends AppUserSessionCreateArgs>(
            args: SelectSubset<T, AppUserSessionCreateArgs<ExtArgs>>
        ): Prisma__AppUserSessionClient<
            $Result.GetResult<
                Prisma.$AppUserSessionPayload<ExtArgs>,
                T,
                "create",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Create many AppUserSessions.
         * @param {AppUserSessionCreateManyArgs} args - Arguments to create many AppUserSessions.
         * @example
         * // Create many AppUserSessions
         * const appUserSession = await prisma.appUserSession.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends AppUserSessionCreateManyArgs>(
            args?: SelectSubset<T, AppUserSessionCreateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Create many AppUserSessions and returns the data saved in the database.
         * @param {AppUserSessionCreateManyAndReturnArgs} args - Arguments to create many AppUserSessions.
         * @example
         * // Create many AppUserSessions
         * const appUserSession = await prisma.appUserSession.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many AppUserSessions and only return the `id`
         * const appUserSessionWithIdOnly = await prisma.appUserSession.createManyAndReturn({
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends AppUserSessionCreateManyAndReturnArgs>(
            args?: SelectSubset<T, AppUserSessionCreateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$AppUserSessionPayload<ExtArgs>,
                T,
                "createManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Delete a AppUserSession.
         * @param {AppUserSessionDeleteArgs} args - Arguments to delete one AppUserSession.
         * @example
         * // Delete one AppUserSession
         * const AppUserSession = await prisma.appUserSession.delete({
         *   where: {
         *     // ... filter to delete one AppUserSession
         *   }
         * })
         *
         */
        delete<T extends AppUserSessionDeleteArgs>(
            args: SelectSubset<T, AppUserSessionDeleteArgs<ExtArgs>>
        ): Prisma__AppUserSessionClient<
            $Result.GetResult<
                Prisma.$AppUserSessionPayload<ExtArgs>,
                T,
                "delete",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Update one AppUserSession.
         * @param {AppUserSessionUpdateArgs} args - Arguments to update one AppUserSession.
         * @example
         * // Update one AppUserSession
         * const appUserSession = await prisma.appUserSession.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends AppUserSessionUpdateArgs>(
            args: SelectSubset<T, AppUserSessionUpdateArgs<ExtArgs>>
        ): Prisma__AppUserSessionClient<
            $Result.GetResult<
                Prisma.$AppUserSessionPayload<ExtArgs>,
                T,
                "update",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Delete zero or more AppUserSessions.
         * @param {AppUserSessionDeleteManyArgs} args - Arguments to filter AppUserSessions to delete.
         * @example
         * // Delete a few AppUserSessions
         * const { count } = await prisma.appUserSession.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends AppUserSessionDeleteManyArgs>(
            args?: SelectSubset<T, AppUserSessionDeleteManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more AppUserSessions.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AppUserSessionUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many AppUserSessions
         * const appUserSession = await prisma.appUserSession.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends AppUserSessionUpdateManyArgs>(
            args: SelectSubset<T, AppUserSessionUpdateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more AppUserSessions and returns the data updated in the database.
         * @param {AppUserSessionUpdateManyAndReturnArgs} args - Arguments to update many AppUserSessions.
         * @example
         * // Update many AppUserSessions
         * const appUserSession = await prisma.appUserSession.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more AppUserSessions and only return the `id`
         * const appUserSessionWithIdOnly = await prisma.appUserSession.updateManyAndReturn({
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
        updateManyAndReturn<T extends AppUserSessionUpdateManyAndReturnArgs>(
            args: SelectSubset<T, AppUserSessionUpdateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$AppUserSessionPayload<ExtArgs>,
                T,
                "updateManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Create or update one AppUserSession.
         * @param {AppUserSessionUpsertArgs} args - Arguments to update or create a AppUserSession.
         * @example
         * // Update or create a AppUserSession
         * const appUserSession = await prisma.appUserSession.upsert({
         *   create: {
         *     // ... data to create a AppUserSession
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the AppUserSession we want to update
         *   }
         * })
         */
        upsert<T extends AppUserSessionUpsertArgs>(
            args: SelectSubset<T, AppUserSessionUpsertArgs<ExtArgs>>
        ): Prisma__AppUserSessionClient<
            $Result.GetResult<
                Prisma.$AppUserSessionPayload<ExtArgs>,
                T,
                "upsert",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Count the number of AppUserSessions.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AppUserSessionCountArgs} args - Arguments to filter AppUserSessions to count.
         * @example
         * // Count the number of AppUserSessions
         * const count = await prisma.appUserSession.count({
         *   where: {
         *     // ... the filter for the AppUserSessions we want to count
         *   }
         * })
         **/
        count<T extends AppUserSessionCountArgs>(
            args?: Subset<T, AppUserSessionCountArgs>
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<"select", any>
                ? T["select"] extends true
                    ? number
                    : GetScalarType<T["select"], AppUserSessionCountAggregateOutputType>
                : number
        >;

        /**
         * Allows you to perform aggregations operations on a AppUserSession.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AppUserSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
        aggregate<T extends AppUserSessionAggregateArgs>(
            args: Subset<T, AppUserSessionAggregateArgs>
        ): Prisma.PrismaPromise<GetAppUserSessionAggregateType<T>>;

        /**
         * Group by AppUserSession.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AppUserSessionGroupByArgs} args - Group by arguments.
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
            T extends AppUserSessionGroupByArgs,
            HasSelectOrTake extends Or<Extends<"skip", Keys<T>>, Extends<"take", Keys<T>>>,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: AppUserSessionGroupByArgs["orderBy"] }
                : { orderBy?: AppUserSessionGroupByArgs["orderBy"] },
            OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T["orderBy"]>>>,
            ByFields extends MaybeTupleToUnion<T["by"]>,
            ByValid extends Has<ByFields, OrderFields>,
            HavingFields extends GetHavingFields<T["having"]>,
            HavingValid extends Has<ByFields, HavingFields>,
            ByEmpty extends T["by"] extends never[] ? True : False,
            InputErrors extends ByEmpty extends True
                ? `Error: "by" must not be empty.`
                : HavingValid extends False
                  ? {
                        [P in HavingFields]: P extends ByFields
                            ? never
                            : P extends string
                              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                              : [Error, "Field ", P, ` in "having" needs to be provided in "by"`];
                    }[HavingFields]
                  : "take" extends Keys<T>
                    ? "orderBy" extends Keys<T>
                        ? ByValid extends True
                            ? {}
                            : {
                                  [P in OrderFields]: P extends ByFields
                                      ? never
                                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                              }[OrderFields]
                        : 'Error: If you provide "take", you also need to provide "orderBy"'
                    : "skip" extends Keys<T>
                      ? "orderBy" extends Keys<T>
                          ? ByValid extends True
                              ? {}
                              : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                                }[OrderFields]
                          : 'Error: If you provide "skip", you also need to provide "orderBy"'
                      : ByValid extends True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields],
        >(
            args: SubsetIntersection<T, AppUserSessionGroupByArgs, OrderByArg> & InputErrors
        ): {} extends InputErrors
            ? GetAppUserSessionGroupByPayload<T>
            : Prisma.PrismaPromise<InputErrors>;
        /**
         * Fields of the AppUserSession model
         */
        readonly fields: AppUserSessionFieldRefs;
    }

    /**
     * The delegate class that acts as a "Promise-like" for AppUserSession.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__AppUserSessionClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise";
        account<T extends AppUserAccountDefaultArgs<ExtArgs> = {}>(
            args?: Subset<T, AppUserAccountDefaultArgs<ExtArgs>>
        ): Prisma__AppUserAccountClient<
            | $Result.GetResult<
                  Prisma.$AppUserAccountPayload<ExtArgs>,
                  T,
                  "findUniqueOrThrow",
                  GlobalOmitOptions
              >
            | Null,
            Null,
            ExtArgs,
            GlobalOmitOptions
        >;
        application<T extends ApplicationDefaultArgs<ExtArgs> = {}>(
            args?: Subset<T, ApplicationDefaultArgs<ExtArgs>>
        ): Prisma__ApplicationClient<
            | $Result.GetResult<
                  Prisma.$ApplicationPayload<ExtArgs>,
                  T,
                  "findUniqueOrThrow",
                  GlobalOmitOptions
              >
            | Null,
            Null,
            ExtArgs,
            GlobalOmitOptions
        >;
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
            onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
        ): $Utils.JsPromise<TResult1 | TResult2>;
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(
            onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
        ): $Utils.JsPromise<T | TResult>;
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
    }

    /**
     * Fields of the AppUserSession model
     */
    interface AppUserSessionFieldRefs {
        readonly id: FieldRef<"AppUserSession", "String">;
        readonly accountId: FieldRef<"AppUserSession", "String">;
        readonly refreshTokenId: FieldRef<"AppUserSession", "String">;
        readonly userAgent: FieldRef<"AppUserSession", "String">;
        readonly ipAddress: FieldRef<"AppUserSession", "String">;
        readonly applicationId: FieldRef<"AppUserSession", "String">;
        readonly expiresAt: FieldRef<"AppUserSession", "DateTime">;
        readonly createdAt: FieldRef<"AppUserSession", "DateTime">;
        readonly updatedAt: FieldRef<"AppUserSession", "DateTime">;
    }

    // Custom InputTypes
    /**
     * AppUserSession findUnique
     */
    export type AppUserSessionFindUniqueArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserSession
         */
        select?: AppUserSessionSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserSession
         */
        omit?: AppUserSessionOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserSessionInclude<ExtArgs> | null;
        /**
         * Filter, which AppUserSession to fetch.
         */
        where: AppUserSessionWhereUniqueInput;
    };

    /**
     * AppUserSession findUniqueOrThrow
     */
    export type AppUserSessionFindUniqueOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserSession
         */
        select?: AppUserSessionSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserSession
         */
        omit?: AppUserSessionOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserSessionInclude<ExtArgs> | null;
        /**
         * Filter, which AppUserSession to fetch.
         */
        where: AppUserSessionWhereUniqueInput;
    };

    /**
     * AppUserSession findFirst
     */
    export type AppUserSessionFindFirstArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserSession
         */
        select?: AppUserSessionSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserSession
         */
        omit?: AppUserSessionOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserSessionInclude<ExtArgs> | null;
        /**
         * Filter, which AppUserSession to fetch.
         */
        where?: AppUserSessionWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of AppUserSessions to fetch.
         */
        orderBy?: AppUserSessionOrderByWithRelationInput | AppUserSessionOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for AppUserSessions.
         */
        cursor?: AppUserSessionWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` AppUserSessions from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` AppUserSessions.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of AppUserSessions.
         */
        distinct?: AppUserSessionScalarFieldEnum | AppUserSessionScalarFieldEnum[];
    };

    /**
     * AppUserSession findFirstOrThrow
     */
    export type AppUserSessionFindFirstOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserSession
         */
        select?: AppUserSessionSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserSession
         */
        omit?: AppUserSessionOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserSessionInclude<ExtArgs> | null;
        /**
         * Filter, which AppUserSession to fetch.
         */
        where?: AppUserSessionWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of AppUserSessions to fetch.
         */
        orderBy?: AppUserSessionOrderByWithRelationInput | AppUserSessionOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for AppUserSessions.
         */
        cursor?: AppUserSessionWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` AppUserSessions from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` AppUserSessions.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of AppUserSessions.
         */
        distinct?: AppUserSessionScalarFieldEnum | AppUserSessionScalarFieldEnum[];
    };

    /**
     * AppUserSession findMany
     */
    export type AppUserSessionFindManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserSession
         */
        select?: AppUserSessionSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserSession
         */
        omit?: AppUserSessionOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserSessionInclude<ExtArgs> | null;
        /**
         * Filter, which AppUserSessions to fetch.
         */
        where?: AppUserSessionWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of AppUserSessions to fetch.
         */
        orderBy?: AppUserSessionOrderByWithRelationInput | AppUserSessionOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing AppUserSessions.
         */
        cursor?: AppUserSessionWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` AppUserSessions from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` AppUserSessions.
         */
        skip?: number;
        distinct?: AppUserSessionScalarFieldEnum | AppUserSessionScalarFieldEnum[];
    };

    /**
     * AppUserSession create
     */
    export type AppUserSessionCreateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserSession
         */
        select?: AppUserSessionSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserSession
         */
        omit?: AppUserSessionOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserSessionInclude<ExtArgs> | null;
        /**
         * The data needed to create a AppUserSession.
         */
        data: XOR<AppUserSessionCreateInput, AppUserSessionUncheckedCreateInput>;
    };

    /**
     * AppUserSession createMany
     */
    export type AppUserSessionCreateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to create many AppUserSessions.
         */
        data: AppUserSessionCreateManyInput | AppUserSessionCreateManyInput[];
        skipDuplicates?: boolean;
    };

    /**
     * AppUserSession createManyAndReturn
     */
    export type AppUserSessionCreateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserSession
         */
        select?: AppUserSessionSelectCreateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserSession
         */
        omit?: AppUserSessionOmit<ExtArgs> | null;
        /**
         * The data used to create many AppUserSessions.
         */
        data: AppUserSessionCreateManyInput | AppUserSessionCreateManyInput[];
        skipDuplicates?: boolean;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserSessionIncludeCreateManyAndReturn<ExtArgs> | null;
    };

    /**
     * AppUserSession update
     */
    export type AppUserSessionUpdateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserSession
         */
        select?: AppUserSessionSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserSession
         */
        omit?: AppUserSessionOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserSessionInclude<ExtArgs> | null;
        /**
         * The data needed to update a AppUserSession.
         */
        data: XOR<AppUserSessionUpdateInput, AppUserSessionUncheckedUpdateInput>;
        /**
         * Choose, which AppUserSession to update.
         */
        where: AppUserSessionWhereUniqueInput;
    };

    /**
     * AppUserSession updateMany
     */
    export type AppUserSessionUpdateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to update AppUserSessions.
         */
        data: XOR<AppUserSessionUpdateManyMutationInput, AppUserSessionUncheckedUpdateManyInput>;
        /**
         * Filter which AppUserSessions to update
         */
        where?: AppUserSessionWhereInput;
        /**
         * Limit how many AppUserSessions to update.
         */
        limit?: number;
    };

    /**
     * AppUserSession updateManyAndReturn
     */
    export type AppUserSessionUpdateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserSession
         */
        select?: AppUserSessionSelectUpdateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserSession
         */
        omit?: AppUserSessionOmit<ExtArgs> | null;
        /**
         * The data used to update AppUserSessions.
         */
        data: XOR<AppUserSessionUpdateManyMutationInput, AppUserSessionUncheckedUpdateManyInput>;
        /**
         * Filter which AppUserSessions to update
         */
        where?: AppUserSessionWhereInput;
        /**
         * Limit how many AppUserSessions to update.
         */
        limit?: number;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserSessionIncludeUpdateManyAndReturn<ExtArgs> | null;
    };

    /**
     * AppUserSession upsert
     */
    export type AppUserSessionUpsertArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserSession
         */
        select?: AppUserSessionSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserSession
         */
        omit?: AppUserSessionOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserSessionInclude<ExtArgs> | null;
        /**
         * The filter to search for the AppUserSession to update in case it exists.
         */
        where: AppUserSessionWhereUniqueInput;
        /**
         * In case the AppUserSession found by the `where` argument doesn't exist, create a new AppUserSession with this data.
         */
        create: XOR<AppUserSessionCreateInput, AppUserSessionUncheckedCreateInput>;
        /**
         * In case the AppUserSession was found with the provided `where` argument, update it with this data.
         */
        update: XOR<AppUserSessionUpdateInput, AppUserSessionUncheckedUpdateInput>;
    };

    /**
     * AppUserSession delete
     */
    export type AppUserSessionDeleteArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserSession
         */
        select?: AppUserSessionSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserSession
         */
        omit?: AppUserSessionOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserSessionInclude<ExtArgs> | null;
        /**
         * Filter which AppUserSession to delete.
         */
        where: AppUserSessionWhereUniqueInput;
    };

    /**
     * AppUserSession deleteMany
     */
    export type AppUserSessionDeleteManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which AppUserSessions to delete
         */
        where?: AppUserSessionWhereInput;
        /**
         * Limit how many AppUserSessions to delete.
         */
        limit?: number;
    };

    /**
     * AppUserSession without action
     */
    export type AppUserSessionDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserSession
         */
        select?: AppUserSessionSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserSession
         */
        omit?: AppUserSessionOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserSessionInclude<ExtArgs> | null;
    };

    /**
     * Model AppUserOAuthAccount
     */

    export type AggregateAppUserOAuthAccount = {
        _count: AppUserOAuthAccountCountAggregateOutputType | null;
        _min: AppUserOAuthAccountMinAggregateOutputType | null;
        _max: AppUserOAuthAccountMaxAggregateOutputType | null;
    };

    export type AppUserOAuthAccountMinAggregateOutputType = {
        id: string | null;
        applicationId: string | null;
        provider: $Enums.OAuthProvider | null;
        emailId: string | null;
        providerUserId: string | null;
        accountId: string | null;
        createdAt: Date | null;
    };

    export type AppUserOAuthAccountMaxAggregateOutputType = {
        id: string | null;
        applicationId: string | null;
        provider: $Enums.OAuthProvider | null;
        emailId: string | null;
        providerUserId: string | null;
        accountId: string | null;
        createdAt: Date | null;
    };

    export type AppUserOAuthAccountCountAggregateOutputType = {
        id: number;
        applicationId: number;
        provider: number;
        emailId: number;
        providerUserId: number;
        accountId: number;
        createdAt: number;
        _all: number;
    };

    export type AppUserOAuthAccountMinAggregateInputType = {
        id?: true;
        applicationId?: true;
        provider?: true;
        emailId?: true;
        providerUserId?: true;
        accountId?: true;
        createdAt?: true;
    };

    export type AppUserOAuthAccountMaxAggregateInputType = {
        id?: true;
        applicationId?: true;
        provider?: true;
        emailId?: true;
        providerUserId?: true;
        accountId?: true;
        createdAt?: true;
    };

    export type AppUserOAuthAccountCountAggregateInputType = {
        id?: true;
        applicationId?: true;
        provider?: true;
        emailId?: true;
        providerUserId?: true;
        accountId?: true;
        createdAt?: true;
        _all?: true;
    };

    export type AppUserOAuthAccountAggregateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which AppUserOAuthAccount to aggregate.
         */
        where?: AppUserOAuthAccountWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of AppUserOAuthAccounts to fetch.
         */
        orderBy?:
            | AppUserOAuthAccountOrderByWithRelationInput
            | AppUserOAuthAccountOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: AppUserOAuthAccountWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` AppUserOAuthAccounts from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` AppUserOAuthAccounts.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned AppUserOAuthAccounts
         **/
        _count?: true | AppUserOAuthAccountCountAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: AppUserOAuthAccountMinAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: AppUserOAuthAccountMaxAggregateInputType;
    };

    export type GetAppUserOAuthAccountAggregateType<T extends AppUserOAuthAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAppUserOAuthAccount]: P extends "_count" | "count"
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateAppUserOAuthAccount[P]>
            : GetScalarType<T[P], AggregateAppUserOAuthAccount[P]>;
    };

    export type AppUserOAuthAccountGroupByArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: AppUserOAuthAccountWhereInput;
        orderBy?:
            | AppUserOAuthAccountOrderByWithAggregationInput
            | AppUserOAuthAccountOrderByWithAggregationInput[];
        by: AppUserOAuthAccountScalarFieldEnum[] | AppUserOAuthAccountScalarFieldEnum;
        having?: AppUserOAuthAccountScalarWhereWithAggregatesInput;
        take?: number;
        skip?: number;
        _count?: AppUserOAuthAccountCountAggregateInputType | true;
        _min?: AppUserOAuthAccountMinAggregateInputType;
        _max?: AppUserOAuthAccountMaxAggregateInputType;
    };

    export type AppUserOAuthAccountGroupByOutputType = {
        id: string;
        applicationId: string;
        provider: $Enums.OAuthProvider;
        emailId: string;
        providerUserId: string;
        accountId: string;
        createdAt: Date;
        _count: AppUserOAuthAccountCountAggregateOutputType | null;
        _min: AppUserOAuthAccountMinAggregateOutputType | null;
        _max: AppUserOAuthAccountMaxAggregateOutputType | null;
    };

    type GetAppUserOAuthAccountGroupByPayload<T extends AppUserOAuthAccountGroupByArgs> =
        Prisma.PrismaPromise<
            Array<
                PickEnumerable<AppUserOAuthAccountGroupByOutputType, T["by"]> & {
                    [P in keyof T & keyof AppUserOAuthAccountGroupByOutputType]: P extends "_count"
                        ? T[P] extends boolean
                            ? number
                            : GetScalarType<T[P], AppUserOAuthAccountGroupByOutputType[P]>
                        : GetScalarType<T[P], AppUserOAuthAccountGroupByOutputType[P]>;
                }
            >
        >;

    export type AppUserOAuthAccountSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            applicationId?: boolean;
            provider?: boolean;
            emailId?: boolean;
            providerUserId?: boolean;
            accountId?: boolean;
            createdAt?: boolean;
            email?: boolean | AppUserEmailDefaultArgs<ExtArgs>;
            application?: boolean | ApplicationDefaultArgs<ExtArgs>;
            account?: boolean | AppUserAccountDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["appUserOAuthAccount"]
    >;

    export type AppUserOAuthAccountSelectCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            applicationId?: boolean;
            provider?: boolean;
            emailId?: boolean;
            providerUserId?: boolean;
            accountId?: boolean;
            createdAt?: boolean;
            email?: boolean | AppUserEmailDefaultArgs<ExtArgs>;
            application?: boolean | ApplicationDefaultArgs<ExtArgs>;
            account?: boolean | AppUserAccountDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["appUserOAuthAccount"]
    >;

    export type AppUserOAuthAccountSelectUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            applicationId?: boolean;
            provider?: boolean;
            emailId?: boolean;
            providerUserId?: boolean;
            accountId?: boolean;
            createdAt?: boolean;
            email?: boolean | AppUserEmailDefaultArgs<ExtArgs>;
            application?: boolean | ApplicationDefaultArgs<ExtArgs>;
            account?: boolean | AppUserAccountDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["appUserOAuthAccount"]
    >;

    export type AppUserOAuthAccountSelectScalar = {
        id?: boolean;
        applicationId?: boolean;
        provider?: boolean;
        emailId?: boolean;
        providerUserId?: boolean;
        accountId?: boolean;
        createdAt?: boolean;
    };

    export type AppUserOAuthAccountOmit<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetOmit<
        | "id"
        | "applicationId"
        | "provider"
        | "emailId"
        | "providerUserId"
        | "accountId"
        | "createdAt",
        ExtArgs["result"]["appUserOAuthAccount"]
    >;
    export type AppUserOAuthAccountInclude<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        email?: boolean | AppUserEmailDefaultArgs<ExtArgs>;
        application?: boolean | ApplicationDefaultArgs<ExtArgs>;
        account?: boolean | AppUserAccountDefaultArgs<ExtArgs>;
    };
    export type AppUserOAuthAccountIncludeCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        email?: boolean | AppUserEmailDefaultArgs<ExtArgs>;
        application?: boolean | ApplicationDefaultArgs<ExtArgs>;
        account?: boolean | AppUserAccountDefaultArgs<ExtArgs>;
    };
    export type AppUserOAuthAccountIncludeUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        email?: boolean | AppUserEmailDefaultArgs<ExtArgs>;
        application?: boolean | ApplicationDefaultArgs<ExtArgs>;
        account?: boolean | AppUserAccountDefaultArgs<ExtArgs>;
    };

    export type $AppUserOAuthAccountPayload<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        name: "AppUserOAuthAccount";
        objects: {
            email: Prisma.$AppUserEmailPayload<ExtArgs>;
            application: Prisma.$ApplicationPayload<ExtArgs>;
            account: Prisma.$AppUserAccountPayload<ExtArgs>;
        };
        scalars: $Extensions.GetPayloadResult<
            {
                id: string;
                applicationId: string;
                provider: $Enums.OAuthProvider;
                emailId: string;
                providerUserId: string;
                accountId: string;
                createdAt: Date;
            },
            ExtArgs["result"]["appUserOAuthAccount"]
        >;
        composites: {};
    };

    type AppUserOAuthAccountGetPayload<
        S extends boolean | null | undefined | AppUserOAuthAccountDefaultArgs,
    > = $Result.GetResult<Prisma.$AppUserOAuthAccountPayload, S>;

    type AppUserOAuthAccountCountArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = Omit<AppUserOAuthAccountFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
        select?: AppUserOAuthAccountCountAggregateInputType | true;
    };

    export interface AppUserOAuthAccountDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: {
            types: Prisma.TypeMap<ExtArgs>["model"]["AppUserOAuthAccount"];
            meta: { name: "AppUserOAuthAccount" };
        };
        /**
         * Find zero or one AppUserOAuthAccount that matches the filter.
         * @param {AppUserOAuthAccountFindUniqueArgs} args - Arguments to find a AppUserOAuthAccount
         * @example
         * // Get one AppUserOAuthAccount
         * const appUserOAuthAccount = await prisma.appUserOAuthAccount.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends AppUserOAuthAccountFindUniqueArgs>(
            args: SelectSubset<T, AppUserOAuthAccountFindUniqueArgs<ExtArgs>>
        ): Prisma__AppUserOAuthAccountClient<
            $Result.GetResult<
                Prisma.$AppUserOAuthAccountPayload<ExtArgs>,
                T,
                "findUnique",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find one AppUserOAuthAccount that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {AppUserOAuthAccountFindUniqueOrThrowArgs} args - Arguments to find a AppUserOAuthAccount
         * @example
         * // Get one AppUserOAuthAccount
         * const appUserOAuthAccount = await prisma.appUserOAuthAccount.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends AppUserOAuthAccountFindUniqueOrThrowArgs>(
            args: SelectSubset<T, AppUserOAuthAccountFindUniqueOrThrowArgs<ExtArgs>>
        ): Prisma__AppUserOAuthAccountClient<
            $Result.GetResult<
                Prisma.$AppUserOAuthAccountPayload<ExtArgs>,
                T,
                "findUniqueOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first AppUserOAuthAccount that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AppUserOAuthAccountFindFirstArgs} args - Arguments to find a AppUserOAuthAccount
         * @example
         * // Get one AppUserOAuthAccount
         * const appUserOAuthAccount = await prisma.appUserOAuthAccount.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends AppUserOAuthAccountFindFirstArgs>(
            args?: SelectSubset<T, AppUserOAuthAccountFindFirstArgs<ExtArgs>>
        ): Prisma__AppUserOAuthAccountClient<
            $Result.GetResult<
                Prisma.$AppUserOAuthAccountPayload<ExtArgs>,
                T,
                "findFirst",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first AppUserOAuthAccount that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AppUserOAuthAccountFindFirstOrThrowArgs} args - Arguments to find a AppUserOAuthAccount
         * @example
         * // Get one AppUserOAuthAccount
         * const appUserOAuthAccount = await prisma.appUserOAuthAccount.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends AppUserOAuthAccountFindFirstOrThrowArgs>(
            args?: SelectSubset<T, AppUserOAuthAccountFindFirstOrThrowArgs<ExtArgs>>
        ): Prisma__AppUserOAuthAccountClient<
            $Result.GetResult<
                Prisma.$AppUserOAuthAccountPayload<ExtArgs>,
                T,
                "findFirstOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find zero or more AppUserOAuthAccounts that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AppUserOAuthAccountFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all AppUserOAuthAccounts
         * const appUserOAuthAccounts = await prisma.appUserOAuthAccount.findMany()
         *
         * // Get first 10 AppUserOAuthAccounts
         * const appUserOAuthAccounts = await prisma.appUserOAuthAccount.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const appUserOAuthAccountWithIdOnly = await prisma.appUserOAuthAccount.findMany({ select: { id: true } })
         *
         */
        findMany<T extends AppUserOAuthAccountFindManyArgs>(
            args?: SelectSubset<T, AppUserOAuthAccountFindManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$AppUserOAuthAccountPayload<ExtArgs>,
                T,
                "findMany",
                GlobalOmitOptions
            >
        >;

        /**
         * Create a AppUserOAuthAccount.
         * @param {AppUserOAuthAccountCreateArgs} args - Arguments to create a AppUserOAuthAccount.
         * @example
         * // Create one AppUserOAuthAccount
         * const AppUserOAuthAccount = await prisma.appUserOAuthAccount.create({
         *   data: {
         *     // ... data to create a AppUserOAuthAccount
         *   }
         * })
         *
         */
        create<T extends AppUserOAuthAccountCreateArgs>(
            args: SelectSubset<T, AppUserOAuthAccountCreateArgs<ExtArgs>>
        ): Prisma__AppUserOAuthAccountClient<
            $Result.GetResult<
                Prisma.$AppUserOAuthAccountPayload<ExtArgs>,
                T,
                "create",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Create many AppUserOAuthAccounts.
         * @param {AppUserOAuthAccountCreateManyArgs} args - Arguments to create many AppUserOAuthAccounts.
         * @example
         * // Create many AppUserOAuthAccounts
         * const appUserOAuthAccount = await prisma.appUserOAuthAccount.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends AppUserOAuthAccountCreateManyArgs>(
            args?: SelectSubset<T, AppUserOAuthAccountCreateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Create many AppUserOAuthAccounts and returns the data saved in the database.
         * @param {AppUserOAuthAccountCreateManyAndReturnArgs} args - Arguments to create many AppUserOAuthAccounts.
         * @example
         * // Create many AppUserOAuthAccounts
         * const appUserOAuthAccount = await prisma.appUserOAuthAccount.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many AppUserOAuthAccounts and only return the `id`
         * const appUserOAuthAccountWithIdOnly = await prisma.appUserOAuthAccount.createManyAndReturn({
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends AppUserOAuthAccountCreateManyAndReturnArgs>(
            args?: SelectSubset<T, AppUserOAuthAccountCreateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$AppUserOAuthAccountPayload<ExtArgs>,
                T,
                "createManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Delete a AppUserOAuthAccount.
         * @param {AppUserOAuthAccountDeleteArgs} args - Arguments to delete one AppUserOAuthAccount.
         * @example
         * // Delete one AppUserOAuthAccount
         * const AppUserOAuthAccount = await prisma.appUserOAuthAccount.delete({
         *   where: {
         *     // ... filter to delete one AppUserOAuthAccount
         *   }
         * })
         *
         */
        delete<T extends AppUserOAuthAccountDeleteArgs>(
            args: SelectSubset<T, AppUserOAuthAccountDeleteArgs<ExtArgs>>
        ): Prisma__AppUserOAuthAccountClient<
            $Result.GetResult<
                Prisma.$AppUserOAuthAccountPayload<ExtArgs>,
                T,
                "delete",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Update one AppUserOAuthAccount.
         * @param {AppUserOAuthAccountUpdateArgs} args - Arguments to update one AppUserOAuthAccount.
         * @example
         * // Update one AppUserOAuthAccount
         * const appUserOAuthAccount = await prisma.appUserOAuthAccount.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends AppUserOAuthAccountUpdateArgs>(
            args: SelectSubset<T, AppUserOAuthAccountUpdateArgs<ExtArgs>>
        ): Prisma__AppUserOAuthAccountClient<
            $Result.GetResult<
                Prisma.$AppUserOAuthAccountPayload<ExtArgs>,
                T,
                "update",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Delete zero or more AppUserOAuthAccounts.
         * @param {AppUserOAuthAccountDeleteManyArgs} args - Arguments to filter AppUserOAuthAccounts to delete.
         * @example
         * // Delete a few AppUserOAuthAccounts
         * const { count } = await prisma.appUserOAuthAccount.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends AppUserOAuthAccountDeleteManyArgs>(
            args?: SelectSubset<T, AppUserOAuthAccountDeleteManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more AppUserOAuthAccounts.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AppUserOAuthAccountUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many AppUserOAuthAccounts
         * const appUserOAuthAccount = await prisma.appUserOAuthAccount.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends AppUserOAuthAccountUpdateManyArgs>(
            args: SelectSubset<T, AppUserOAuthAccountUpdateManyArgs<ExtArgs>>
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more AppUserOAuthAccounts and returns the data updated in the database.
         * @param {AppUserOAuthAccountUpdateManyAndReturnArgs} args - Arguments to update many AppUserOAuthAccounts.
         * @example
         * // Update many AppUserOAuthAccounts
         * const appUserOAuthAccount = await prisma.appUserOAuthAccount.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more AppUserOAuthAccounts and only return the `id`
         * const appUserOAuthAccountWithIdOnly = await prisma.appUserOAuthAccount.updateManyAndReturn({
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
        updateManyAndReturn<T extends AppUserOAuthAccountUpdateManyAndReturnArgs>(
            args: SelectSubset<T, AppUserOAuthAccountUpdateManyAndReturnArgs<ExtArgs>>
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$AppUserOAuthAccountPayload<ExtArgs>,
                T,
                "updateManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Create or update one AppUserOAuthAccount.
         * @param {AppUserOAuthAccountUpsertArgs} args - Arguments to update or create a AppUserOAuthAccount.
         * @example
         * // Update or create a AppUserOAuthAccount
         * const appUserOAuthAccount = await prisma.appUserOAuthAccount.upsert({
         *   create: {
         *     // ... data to create a AppUserOAuthAccount
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the AppUserOAuthAccount we want to update
         *   }
         * })
         */
        upsert<T extends AppUserOAuthAccountUpsertArgs>(
            args: SelectSubset<T, AppUserOAuthAccountUpsertArgs<ExtArgs>>
        ): Prisma__AppUserOAuthAccountClient<
            $Result.GetResult<
                Prisma.$AppUserOAuthAccountPayload<ExtArgs>,
                T,
                "upsert",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Count the number of AppUserOAuthAccounts.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AppUserOAuthAccountCountArgs} args - Arguments to filter AppUserOAuthAccounts to count.
         * @example
         * // Count the number of AppUserOAuthAccounts
         * const count = await prisma.appUserOAuthAccount.count({
         *   where: {
         *     // ... the filter for the AppUserOAuthAccounts we want to count
         *   }
         * })
         **/
        count<T extends AppUserOAuthAccountCountArgs>(
            args?: Subset<T, AppUserOAuthAccountCountArgs>
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<"select", any>
                ? T["select"] extends true
                    ? number
                    : GetScalarType<T["select"], AppUserOAuthAccountCountAggregateOutputType>
                : number
        >;

        /**
         * Allows you to perform aggregations operations on a AppUserOAuthAccount.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AppUserOAuthAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
        aggregate<T extends AppUserOAuthAccountAggregateArgs>(
            args: Subset<T, AppUserOAuthAccountAggregateArgs>
        ): Prisma.PrismaPromise<GetAppUserOAuthAccountAggregateType<T>>;

        /**
         * Group by AppUserOAuthAccount.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {AppUserOAuthAccountGroupByArgs} args - Group by arguments.
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
            T extends AppUserOAuthAccountGroupByArgs,
            HasSelectOrTake extends Or<Extends<"skip", Keys<T>>, Extends<"take", Keys<T>>>,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: AppUserOAuthAccountGroupByArgs["orderBy"] }
                : { orderBy?: AppUserOAuthAccountGroupByArgs["orderBy"] },
            OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T["orderBy"]>>>,
            ByFields extends MaybeTupleToUnion<T["by"]>,
            ByValid extends Has<ByFields, OrderFields>,
            HavingFields extends GetHavingFields<T["having"]>,
            HavingValid extends Has<ByFields, HavingFields>,
            ByEmpty extends T["by"] extends never[] ? True : False,
            InputErrors extends ByEmpty extends True
                ? `Error: "by" must not be empty.`
                : HavingValid extends False
                  ? {
                        [P in HavingFields]: P extends ByFields
                            ? never
                            : P extends string
                              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                              : [Error, "Field ", P, ` in "having" needs to be provided in "by"`];
                    }[HavingFields]
                  : "take" extends Keys<T>
                    ? "orderBy" extends Keys<T>
                        ? ByValid extends True
                            ? {}
                            : {
                                  [P in OrderFields]: P extends ByFields
                                      ? never
                                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                              }[OrderFields]
                        : 'Error: If you provide "take", you also need to provide "orderBy"'
                    : "skip" extends Keys<T>
                      ? "orderBy" extends Keys<T>
                          ? ByValid extends True
                              ? {}
                              : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                                }[OrderFields]
                          : 'Error: If you provide "skip", you also need to provide "orderBy"'
                      : ByValid extends True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields],
        >(
            args: SubsetIntersection<T, AppUserOAuthAccountGroupByArgs, OrderByArg> & InputErrors
        ): {} extends InputErrors
            ? GetAppUserOAuthAccountGroupByPayload<T>
            : Prisma.PrismaPromise<InputErrors>;
        /**
         * Fields of the AppUserOAuthAccount model
         */
        readonly fields: AppUserOAuthAccountFieldRefs;
    }

    /**
     * The delegate class that acts as a "Promise-like" for AppUserOAuthAccount.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__AppUserOAuthAccountClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise";
        email<T extends AppUserEmailDefaultArgs<ExtArgs> = {}>(
            args?: Subset<T, AppUserEmailDefaultArgs<ExtArgs>>
        ): Prisma__AppUserEmailClient<
            | $Result.GetResult<
                  Prisma.$AppUserEmailPayload<ExtArgs>,
                  T,
                  "findUniqueOrThrow",
                  GlobalOmitOptions
              >
            | Null,
            Null,
            ExtArgs,
            GlobalOmitOptions
        >;
        application<T extends ApplicationDefaultArgs<ExtArgs> = {}>(
            args?: Subset<T, ApplicationDefaultArgs<ExtArgs>>
        ): Prisma__ApplicationClient<
            | $Result.GetResult<
                  Prisma.$ApplicationPayload<ExtArgs>,
                  T,
                  "findUniqueOrThrow",
                  GlobalOmitOptions
              >
            | Null,
            Null,
            ExtArgs,
            GlobalOmitOptions
        >;
        account<T extends AppUserAccountDefaultArgs<ExtArgs> = {}>(
            args?: Subset<T, AppUserAccountDefaultArgs<ExtArgs>>
        ): Prisma__AppUserAccountClient<
            | $Result.GetResult<
                  Prisma.$AppUserAccountPayload<ExtArgs>,
                  T,
                  "findUniqueOrThrow",
                  GlobalOmitOptions
              >
            | Null,
            Null,
            ExtArgs,
            GlobalOmitOptions
        >;
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
            onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
        ): $Utils.JsPromise<TResult1 | TResult2>;
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(
            onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
        ): $Utils.JsPromise<T | TResult>;
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
    }

    /**
     * Fields of the AppUserOAuthAccount model
     */
    interface AppUserOAuthAccountFieldRefs {
        readonly id: FieldRef<"AppUserOAuthAccount", "String">;
        readonly applicationId: FieldRef<"AppUserOAuthAccount", "String">;
        readonly provider: FieldRef<"AppUserOAuthAccount", "OAuthProvider">;
        readonly emailId: FieldRef<"AppUserOAuthAccount", "String">;
        readonly providerUserId: FieldRef<"AppUserOAuthAccount", "String">;
        readonly accountId: FieldRef<"AppUserOAuthAccount", "String">;
        readonly createdAt: FieldRef<"AppUserOAuthAccount", "DateTime">;
    }

    // Custom InputTypes
    /**
     * AppUserOAuthAccount findUnique
     */
    export type AppUserOAuthAccountFindUniqueArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserOAuthAccount
         */
        select?: AppUserOAuthAccountSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserOAuthAccount
         */
        omit?: AppUserOAuthAccountOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserOAuthAccountInclude<ExtArgs> | null;
        /**
         * Filter, which AppUserOAuthAccount to fetch.
         */
        where: AppUserOAuthAccountWhereUniqueInput;
    };

    /**
     * AppUserOAuthAccount findUniqueOrThrow
     */
    export type AppUserOAuthAccountFindUniqueOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserOAuthAccount
         */
        select?: AppUserOAuthAccountSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserOAuthAccount
         */
        omit?: AppUserOAuthAccountOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserOAuthAccountInclude<ExtArgs> | null;
        /**
         * Filter, which AppUserOAuthAccount to fetch.
         */
        where: AppUserOAuthAccountWhereUniqueInput;
    };

    /**
     * AppUserOAuthAccount findFirst
     */
    export type AppUserOAuthAccountFindFirstArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserOAuthAccount
         */
        select?: AppUserOAuthAccountSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserOAuthAccount
         */
        omit?: AppUserOAuthAccountOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserOAuthAccountInclude<ExtArgs> | null;
        /**
         * Filter, which AppUserOAuthAccount to fetch.
         */
        where?: AppUserOAuthAccountWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of AppUserOAuthAccounts to fetch.
         */
        orderBy?:
            | AppUserOAuthAccountOrderByWithRelationInput
            | AppUserOAuthAccountOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for AppUserOAuthAccounts.
         */
        cursor?: AppUserOAuthAccountWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` AppUserOAuthAccounts from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` AppUserOAuthAccounts.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of AppUserOAuthAccounts.
         */
        distinct?: AppUserOAuthAccountScalarFieldEnum | AppUserOAuthAccountScalarFieldEnum[];
    };

    /**
     * AppUserOAuthAccount findFirstOrThrow
     */
    export type AppUserOAuthAccountFindFirstOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserOAuthAccount
         */
        select?: AppUserOAuthAccountSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserOAuthAccount
         */
        omit?: AppUserOAuthAccountOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserOAuthAccountInclude<ExtArgs> | null;
        /**
         * Filter, which AppUserOAuthAccount to fetch.
         */
        where?: AppUserOAuthAccountWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of AppUserOAuthAccounts to fetch.
         */
        orderBy?:
            | AppUserOAuthAccountOrderByWithRelationInput
            | AppUserOAuthAccountOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for AppUserOAuthAccounts.
         */
        cursor?: AppUserOAuthAccountWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` AppUserOAuthAccounts from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` AppUserOAuthAccounts.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of AppUserOAuthAccounts.
         */
        distinct?: AppUserOAuthAccountScalarFieldEnum | AppUserOAuthAccountScalarFieldEnum[];
    };

    /**
     * AppUserOAuthAccount findMany
     */
    export type AppUserOAuthAccountFindManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserOAuthAccount
         */
        select?: AppUserOAuthAccountSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserOAuthAccount
         */
        omit?: AppUserOAuthAccountOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserOAuthAccountInclude<ExtArgs> | null;
        /**
         * Filter, which AppUserOAuthAccounts to fetch.
         */
        where?: AppUserOAuthAccountWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of AppUserOAuthAccounts to fetch.
         */
        orderBy?:
            | AppUserOAuthAccountOrderByWithRelationInput
            | AppUserOAuthAccountOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing AppUserOAuthAccounts.
         */
        cursor?: AppUserOAuthAccountWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` AppUserOAuthAccounts from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` AppUserOAuthAccounts.
         */
        skip?: number;
        distinct?: AppUserOAuthAccountScalarFieldEnum | AppUserOAuthAccountScalarFieldEnum[];
    };

    /**
     * AppUserOAuthAccount create
     */
    export type AppUserOAuthAccountCreateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserOAuthAccount
         */
        select?: AppUserOAuthAccountSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserOAuthAccount
         */
        omit?: AppUserOAuthAccountOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserOAuthAccountInclude<ExtArgs> | null;
        /**
         * The data needed to create a AppUserOAuthAccount.
         */
        data: XOR<AppUserOAuthAccountCreateInput, AppUserOAuthAccountUncheckedCreateInput>;
    };

    /**
     * AppUserOAuthAccount createMany
     */
    export type AppUserOAuthAccountCreateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to create many AppUserOAuthAccounts.
         */
        data: AppUserOAuthAccountCreateManyInput | AppUserOAuthAccountCreateManyInput[];
        skipDuplicates?: boolean;
    };

    /**
     * AppUserOAuthAccount createManyAndReturn
     */
    export type AppUserOAuthAccountCreateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserOAuthAccount
         */
        select?: AppUserOAuthAccountSelectCreateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserOAuthAccount
         */
        omit?: AppUserOAuthAccountOmit<ExtArgs> | null;
        /**
         * The data used to create many AppUserOAuthAccounts.
         */
        data: AppUserOAuthAccountCreateManyInput | AppUserOAuthAccountCreateManyInput[];
        skipDuplicates?: boolean;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserOAuthAccountIncludeCreateManyAndReturn<ExtArgs> | null;
    };

    /**
     * AppUserOAuthAccount update
     */
    export type AppUserOAuthAccountUpdateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserOAuthAccount
         */
        select?: AppUserOAuthAccountSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserOAuthAccount
         */
        omit?: AppUserOAuthAccountOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserOAuthAccountInclude<ExtArgs> | null;
        /**
         * The data needed to update a AppUserOAuthAccount.
         */
        data: XOR<AppUserOAuthAccountUpdateInput, AppUserOAuthAccountUncheckedUpdateInput>;
        /**
         * Choose, which AppUserOAuthAccount to update.
         */
        where: AppUserOAuthAccountWhereUniqueInput;
    };

    /**
     * AppUserOAuthAccount updateMany
     */
    export type AppUserOAuthAccountUpdateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to update AppUserOAuthAccounts.
         */
        data: XOR<
            AppUserOAuthAccountUpdateManyMutationInput,
            AppUserOAuthAccountUncheckedUpdateManyInput
        >;
        /**
         * Filter which AppUserOAuthAccounts to update
         */
        where?: AppUserOAuthAccountWhereInput;
        /**
         * Limit how many AppUserOAuthAccounts to update.
         */
        limit?: number;
    };

    /**
     * AppUserOAuthAccount updateManyAndReturn
     */
    export type AppUserOAuthAccountUpdateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserOAuthAccount
         */
        select?: AppUserOAuthAccountSelectUpdateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserOAuthAccount
         */
        omit?: AppUserOAuthAccountOmit<ExtArgs> | null;
        /**
         * The data used to update AppUserOAuthAccounts.
         */
        data: XOR<
            AppUserOAuthAccountUpdateManyMutationInput,
            AppUserOAuthAccountUncheckedUpdateManyInput
        >;
        /**
         * Filter which AppUserOAuthAccounts to update
         */
        where?: AppUserOAuthAccountWhereInput;
        /**
         * Limit how many AppUserOAuthAccounts to update.
         */
        limit?: number;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserOAuthAccountIncludeUpdateManyAndReturn<ExtArgs> | null;
    };

    /**
     * AppUserOAuthAccount upsert
     */
    export type AppUserOAuthAccountUpsertArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserOAuthAccount
         */
        select?: AppUserOAuthAccountSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserOAuthAccount
         */
        omit?: AppUserOAuthAccountOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserOAuthAccountInclude<ExtArgs> | null;
        /**
         * The filter to search for the AppUserOAuthAccount to update in case it exists.
         */
        where: AppUserOAuthAccountWhereUniqueInput;
        /**
         * In case the AppUserOAuthAccount found by the `where` argument doesn't exist, create a new AppUserOAuthAccount with this data.
         */
        create: XOR<AppUserOAuthAccountCreateInput, AppUserOAuthAccountUncheckedCreateInput>;
        /**
         * In case the AppUserOAuthAccount was found with the provided `where` argument, update it with this data.
         */
        update: XOR<AppUserOAuthAccountUpdateInput, AppUserOAuthAccountUncheckedUpdateInput>;
    };

    /**
     * AppUserOAuthAccount delete
     */
    export type AppUserOAuthAccountDeleteArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserOAuthAccount
         */
        select?: AppUserOAuthAccountSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserOAuthAccount
         */
        omit?: AppUserOAuthAccountOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserOAuthAccountInclude<ExtArgs> | null;
        /**
         * Filter which AppUserOAuthAccount to delete.
         */
        where: AppUserOAuthAccountWhereUniqueInput;
    };

    /**
     * AppUserOAuthAccount deleteMany
     */
    export type AppUserOAuthAccountDeleteManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which AppUserOAuthAccounts to delete
         */
        where?: AppUserOAuthAccountWhereInput;
        /**
         * Limit how many AppUserOAuthAccounts to delete.
         */
        limit?: number;
    };

    /**
     * AppUserOAuthAccount without action
     */
    export type AppUserOAuthAccountDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the AppUserOAuthAccount
         */
        select?: AppUserOAuthAccountSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the AppUserOAuthAccount
         */
        omit?: AppUserOAuthAccountOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: AppUserOAuthAccountInclude<ExtArgs> | null;
    };

    /**
     * Enums
     */

    export const TransactionIsolationLevel: {
        ReadUncommitted: "ReadUncommitted";
        ReadCommitted: "ReadCommitted";
        RepeatableRead: "RepeatableRead";
        Serializable: "Serializable";
    };

    export type TransactionIsolationLevel =
        (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

    export const UserScalarFieldEnum: {
        id: "id";
        isVerified: "isVerified";
        username: "username";
        emailAddress: "emailAddress";
        passwordHash: "passwordHash";
        createdAt: "createdAt";
        updatedAt: "updatedAt";
    };

    export type UserScalarFieldEnum =
        (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

    export const CliSessionScalarFieldEnum: {
        id: "id";
        userId: "userId";
        tokenHash: "tokenHash";
        createdAt: "createdAt";
    };

    export type CliSessionScalarFieldEnum =
        (typeof CliSessionScalarFieldEnum)[keyof typeof CliSessionScalarFieldEnum];

    export const ApplicationScalarFieldEnum: {
        id: "id";
        ownerId: "ownerId";
        publishableKey: "publishableKey";
        secretKey: "secretKey";
        name: "name";
        createdAt: "createdAt";
        updatedAt: "updatedAt";
    };

    export type ApplicationScalarFieldEnum =
        (typeof ApplicationScalarFieldEnum)[keyof typeof ApplicationScalarFieldEnum];

    export const AppUserScalarFieldEnum: {
        id: "id";
        applicationId: "applicationId";
        createdAt: "createdAt";
        updatedAt: "updatedAt";
    };

    export type AppUserScalarFieldEnum =
        (typeof AppUserScalarFieldEnum)[keyof typeof AppUserScalarFieldEnum];

    export const AppUserAccountScalarFieldEnum: {
        id: "id";
        applicationId: "applicationId";
        username: "username";
        lastName: "lastName";
        imageUrl: "imageUrl";
        firstName: "firstName";
        userId: "userId";
        passwordHash: "passwordHash";
        createdAt: "createdAt";
        updatedAt: "updatedAt";
    };

    export type AppUserAccountScalarFieldEnum =
        (typeof AppUserAccountScalarFieldEnum)[keyof typeof AppUserAccountScalarFieldEnum];

    export const AppUserEmailScalarFieldEnum: {
        id: "id";
        accountId: "accountId";
        applicationId: "applicationId";
        isVerified: "isVerified";
        address: "address";
        isPrimary: "isPrimary";
        createdAt: "createdAt";
        updatedAt: "updatedAt";
    };

    export type AppUserEmailScalarFieldEnum =
        (typeof AppUserEmailScalarFieldEnum)[keyof typeof AppUserEmailScalarFieldEnum];

    export const AppUserSessionScalarFieldEnum: {
        id: "id";
        accountId: "accountId";
        refreshTokenId: "refreshTokenId";
        userAgent: "userAgent";
        ipAddress: "ipAddress";
        applicationId: "applicationId";
        expiresAt: "expiresAt";
        createdAt: "createdAt";
        updatedAt: "updatedAt";
    };

    export type AppUserSessionScalarFieldEnum =
        (typeof AppUserSessionScalarFieldEnum)[keyof typeof AppUserSessionScalarFieldEnum];

    export const AppUserOAuthAccountScalarFieldEnum: {
        id: "id";
        applicationId: "applicationId";
        provider: "provider";
        emailId: "emailId";
        providerUserId: "providerUserId";
        accountId: "accountId";
        createdAt: "createdAt";
    };

    export type AppUserOAuthAccountScalarFieldEnum =
        (typeof AppUserOAuthAccountScalarFieldEnum)[keyof typeof AppUserOAuthAccountScalarFieldEnum];

    export const SortOrder: {
        asc: "asc";
        desc: "desc";
    };

    export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

    export const QueryMode: {
        default: "default";
        insensitive: "insensitive";
    };

    export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

    export const NullsOrder: {
        first: "first";
        last: "last";
    };

    export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

    /**
     * Field references
     */

    /**
     * Reference to a field of type 'String'
     */
    export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, "String">;

    /**
     * Reference to a field of type 'String[]'
     */
    export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, "String[]">;

    /**
     * Reference to a field of type 'Boolean'
     */
    export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, "Boolean">;

    /**
     * Reference to a field of type 'DateTime'
     */
    export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, "DateTime">;

    /**
     * Reference to a field of type 'DateTime[]'
     */
    export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
        $PrismaModel,
        "DateTime[]"
    >;

    /**
     * Reference to a field of type 'OAuthProvider'
     */
    export type EnumOAuthProviderFieldRefInput<$PrismaModel> = FieldRefInputType<
        $PrismaModel,
        "OAuthProvider"
    >;

    /**
     * Reference to a field of type 'OAuthProvider[]'
     */
    export type ListEnumOAuthProviderFieldRefInput<$PrismaModel> = FieldRefInputType<
        $PrismaModel,
        "OAuthProvider[]"
    >;

    /**
     * Reference to a field of type 'Int'
     */
    export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, "Int">;

    /**
     * Reference to a field of type 'Int[]'
     */
    export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, "Int[]">;

    /**
     * Deep Input Types
     */

    export type UserWhereInput = {
        AND?: UserWhereInput | UserWhereInput[];
        OR?: UserWhereInput[];
        NOT?: UserWhereInput | UserWhereInput[];
        id?: UuidFilter<"User"> | string;
        isVerified?: BoolFilter<"User"> | boolean;
        username?: StringFilter<"User"> | string;
        emailAddress?: StringFilter<"User"> | string;
        passwordHash?: StringFilter<"User"> | string;
        createdAt?: DateTimeFilter<"User"> | Date | string;
        updatedAt?: DateTimeFilter<"User"> | Date | string;
        applications?: ApplicationListRelationFilter;
        cliSessions?: CliSessionListRelationFilter;
    };

    export type UserOrderByWithRelationInput = {
        id?: SortOrder;
        isVerified?: SortOrder;
        username?: SortOrder;
        emailAddress?: SortOrder;
        passwordHash?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        applications?: ApplicationOrderByRelationAggregateInput;
        cliSessions?: CliSessionOrderByRelationAggregateInput;
    };

    export type UserWhereUniqueInput = Prisma.AtLeast<
        {
            id?: string;
            username?: string;
            emailAddress?: string;
            AND?: UserWhereInput | UserWhereInput[];
            OR?: UserWhereInput[];
            NOT?: UserWhereInput | UserWhereInput[];
            isVerified?: BoolFilter<"User"> | boolean;
            passwordHash?: StringFilter<"User"> | string;
            createdAt?: DateTimeFilter<"User"> | Date | string;
            updatedAt?: DateTimeFilter<"User"> | Date | string;
            applications?: ApplicationListRelationFilter;
            cliSessions?: CliSessionListRelationFilter;
        },
        "id" | "username" | "emailAddress"
    >;

    export type UserOrderByWithAggregationInput = {
        id?: SortOrder;
        isVerified?: SortOrder;
        username?: SortOrder;
        emailAddress?: SortOrder;
        passwordHash?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        _count?: UserCountOrderByAggregateInput;
        _max?: UserMaxOrderByAggregateInput;
        _min?: UserMinOrderByAggregateInput;
    };

    export type UserScalarWhereWithAggregatesInput = {
        AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[];
        OR?: UserScalarWhereWithAggregatesInput[];
        NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[];
        id?: UuidWithAggregatesFilter<"User"> | string;
        isVerified?: BoolWithAggregatesFilter<"User"> | boolean;
        username?: StringWithAggregatesFilter<"User"> | string;
        emailAddress?: StringWithAggregatesFilter<"User"> | string;
        passwordHash?: StringWithAggregatesFilter<"User"> | string;
        createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string;
        updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string;
    };

    export type CliSessionWhereInput = {
        AND?: CliSessionWhereInput | CliSessionWhereInput[];
        OR?: CliSessionWhereInput[];
        NOT?: CliSessionWhereInput | CliSessionWhereInput[];
        id?: UuidFilter<"CliSession"> | string;
        userId?: UuidFilter<"CliSession"> | string;
        tokenHash?: StringFilter<"CliSession"> | string;
        createdAt?: DateTimeFilter<"CliSession"> | Date | string;
        user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    };

    export type CliSessionOrderByWithRelationInput = {
        id?: SortOrder;
        userId?: SortOrder;
        tokenHash?: SortOrder;
        createdAt?: SortOrder;
        user?: UserOrderByWithRelationInput;
    };

    export type CliSessionWhereUniqueInput = Prisma.AtLeast<
        {
            id?: string;
            tokenHash?: string;
            AND?: CliSessionWhereInput | CliSessionWhereInput[];
            OR?: CliSessionWhereInput[];
            NOT?: CliSessionWhereInput | CliSessionWhereInput[];
            userId?: UuidFilter<"CliSession"> | string;
            createdAt?: DateTimeFilter<"CliSession"> | Date | string;
            user?: XOR<UserScalarRelationFilter, UserWhereInput>;
        },
        "id" | "tokenHash"
    >;

    export type CliSessionOrderByWithAggregationInput = {
        id?: SortOrder;
        userId?: SortOrder;
        tokenHash?: SortOrder;
        createdAt?: SortOrder;
        _count?: CliSessionCountOrderByAggregateInput;
        _max?: CliSessionMaxOrderByAggregateInput;
        _min?: CliSessionMinOrderByAggregateInput;
    };

    export type CliSessionScalarWhereWithAggregatesInput = {
        AND?: CliSessionScalarWhereWithAggregatesInput | CliSessionScalarWhereWithAggregatesInput[];
        OR?: CliSessionScalarWhereWithAggregatesInput[];
        NOT?: CliSessionScalarWhereWithAggregatesInput | CliSessionScalarWhereWithAggregatesInput[];
        id?: UuidWithAggregatesFilter<"CliSession"> | string;
        userId?: UuidWithAggregatesFilter<"CliSession"> | string;
        tokenHash?: StringWithAggregatesFilter<"CliSession"> | string;
        createdAt?: DateTimeWithAggregatesFilter<"CliSession"> | Date | string;
    };

    export type ApplicationWhereInput = {
        AND?: ApplicationWhereInput | ApplicationWhereInput[];
        OR?: ApplicationWhereInput[];
        NOT?: ApplicationWhereInput | ApplicationWhereInput[];
        id?: UuidFilter<"Application"> | string;
        ownerId?: UuidFilter<"Application"> | string;
        publishableKey?: StringFilter<"Application"> | string;
        secretKey?: StringFilter<"Application"> | string;
        name?: StringFilter<"Application"> | string;
        createdAt?: DateTimeFilter<"Application"> | Date | string;
        updatedAt?: DateTimeFilter<"Application"> | Date | string;
        owner?: XOR<UserScalarRelationFilter, UserWhereInput>;
        accounts?: AppUserAccountListRelationFilter;
        users?: AppUserListRelationFilter;
        sessions?: AppUserSessionListRelationFilter;
        emails?: AppUserEmailListRelationFilter;
        oauthAccounts?: AppUserOAuthAccountListRelationFilter;
    };

    export type ApplicationOrderByWithRelationInput = {
        id?: SortOrder;
        ownerId?: SortOrder;
        publishableKey?: SortOrder;
        secretKey?: SortOrder;
        name?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        owner?: UserOrderByWithRelationInput;
        accounts?: AppUserAccountOrderByRelationAggregateInput;
        users?: AppUserOrderByRelationAggregateInput;
        sessions?: AppUserSessionOrderByRelationAggregateInput;
        emails?: AppUserEmailOrderByRelationAggregateInput;
        oauthAccounts?: AppUserOAuthAccountOrderByRelationAggregateInput;
    };

    export type ApplicationWhereUniqueInput = Prisma.AtLeast<
        {
            id?: string;
            publishableKey?: string;
            secretKey?: string;
            AND?: ApplicationWhereInput | ApplicationWhereInput[];
            OR?: ApplicationWhereInput[];
            NOT?: ApplicationWhereInput | ApplicationWhereInput[];
            ownerId?: UuidFilter<"Application"> | string;
            name?: StringFilter<"Application"> | string;
            createdAt?: DateTimeFilter<"Application"> | Date | string;
            updatedAt?: DateTimeFilter<"Application"> | Date | string;
            owner?: XOR<UserScalarRelationFilter, UserWhereInput>;
            accounts?: AppUserAccountListRelationFilter;
            users?: AppUserListRelationFilter;
            sessions?: AppUserSessionListRelationFilter;
            emails?: AppUserEmailListRelationFilter;
            oauthAccounts?: AppUserOAuthAccountListRelationFilter;
        },
        "id" | "publishableKey" | "secretKey"
    >;

    export type ApplicationOrderByWithAggregationInput = {
        id?: SortOrder;
        ownerId?: SortOrder;
        publishableKey?: SortOrder;
        secretKey?: SortOrder;
        name?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        _count?: ApplicationCountOrderByAggregateInput;
        _max?: ApplicationMaxOrderByAggregateInput;
        _min?: ApplicationMinOrderByAggregateInput;
    };

    export type ApplicationScalarWhereWithAggregatesInput = {
        AND?:
            | ApplicationScalarWhereWithAggregatesInput
            | ApplicationScalarWhereWithAggregatesInput[];
        OR?: ApplicationScalarWhereWithAggregatesInput[];
        NOT?:
            | ApplicationScalarWhereWithAggregatesInput
            | ApplicationScalarWhereWithAggregatesInput[];
        id?: UuidWithAggregatesFilter<"Application"> | string;
        ownerId?: UuidWithAggregatesFilter<"Application"> | string;
        publishableKey?: StringWithAggregatesFilter<"Application"> | string;
        secretKey?: StringWithAggregatesFilter<"Application"> | string;
        name?: StringWithAggregatesFilter<"Application"> | string;
        createdAt?: DateTimeWithAggregatesFilter<"Application"> | Date | string;
        updatedAt?: DateTimeWithAggregatesFilter<"Application"> | Date | string;
    };

    export type AppUserWhereInput = {
        AND?: AppUserWhereInput | AppUserWhereInput[];
        OR?: AppUserWhereInput[];
        NOT?: AppUserWhereInput | AppUserWhereInput[];
        id?: UuidFilter<"AppUser"> | string;
        applicationId?: UuidFilter<"AppUser"> | string;
        createdAt?: DateTimeFilter<"AppUser"> | Date | string;
        updatedAt?: DateTimeFilter<"AppUser"> | Date | string;
        application?: XOR<ApplicationScalarRelationFilter, ApplicationWhereInput>;
        accounts?: AppUserAccountListRelationFilter;
    };

    export type AppUserOrderByWithRelationInput = {
        id?: SortOrder;
        applicationId?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        application?: ApplicationOrderByWithRelationInput;
        accounts?: AppUserAccountOrderByRelationAggregateInput;
    };

    export type AppUserWhereUniqueInput = Prisma.AtLeast<
        {
            id?: string;
            AND?: AppUserWhereInput | AppUserWhereInput[];
            OR?: AppUserWhereInput[];
            NOT?: AppUserWhereInput | AppUserWhereInput[];
            applicationId?: UuidFilter<"AppUser"> | string;
            createdAt?: DateTimeFilter<"AppUser"> | Date | string;
            updatedAt?: DateTimeFilter<"AppUser"> | Date | string;
            application?: XOR<ApplicationScalarRelationFilter, ApplicationWhereInput>;
            accounts?: AppUserAccountListRelationFilter;
        },
        "id"
    >;

    export type AppUserOrderByWithAggregationInput = {
        id?: SortOrder;
        applicationId?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        _count?: AppUserCountOrderByAggregateInput;
        _max?: AppUserMaxOrderByAggregateInput;
        _min?: AppUserMinOrderByAggregateInput;
    };

    export type AppUserScalarWhereWithAggregatesInput = {
        AND?: AppUserScalarWhereWithAggregatesInput | AppUserScalarWhereWithAggregatesInput[];
        OR?: AppUserScalarWhereWithAggregatesInput[];
        NOT?: AppUserScalarWhereWithAggregatesInput | AppUserScalarWhereWithAggregatesInput[];
        id?: UuidWithAggregatesFilter<"AppUser"> | string;
        applicationId?: UuidWithAggregatesFilter<"AppUser"> | string;
        createdAt?: DateTimeWithAggregatesFilter<"AppUser"> | Date | string;
        updatedAt?: DateTimeWithAggregatesFilter<"AppUser"> | Date | string;
    };

    export type AppUserAccountWhereInput = {
        AND?: AppUserAccountWhereInput | AppUserAccountWhereInput[];
        OR?: AppUserAccountWhereInput[];
        NOT?: AppUserAccountWhereInput | AppUserAccountWhereInput[];
        id?: UuidFilter<"AppUserAccount"> | string;
        applicationId?: UuidFilter<"AppUserAccount"> | string;
        username?: StringNullableFilter<"AppUserAccount"> | string | null;
        lastName?: StringNullableFilter<"AppUserAccount"> | string | null;
        imageUrl?: StringNullableFilter<"AppUserAccount"> | string | null;
        firstName?: StringNullableFilter<"AppUserAccount"> | string | null;
        userId?: UuidFilter<"AppUserAccount"> | string;
        passwordHash?: StringNullableFilter<"AppUserAccount"> | string | null;
        createdAt?: DateTimeFilter<"AppUserAccount"> | Date | string;
        updatedAt?: DateTimeFilter<"AppUserAccount"> | Date | string;
        application?: XOR<ApplicationScalarRelationFilter, ApplicationWhereInput>;
        user?: XOR<AppUserScalarRelationFilter, AppUserWhereInput>;
        sessions?: AppUserSessionListRelationFilter;
        emails?: AppUserEmailListRelationFilter;
        oauthAccounts?: AppUserOAuthAccountListRelationFilter;
    };

    export type AppUserAccountOrderByWithRelationInput = {
        id?: SortOrder;
        applicationId?: SortOrder;
        username?: SortOrderInput | SortOrder;
        lastName?: SortOrderInput | SortOrder;
        imageUrl?: SortOrderInput | SortOrder;
        firstName?: SortOrderInput | SortOrder;
        userId?: SortOrder;
        passwordHash?: SortOrderInput | SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        application?: ApplicationOrderByWithRelationInput;
        user?: AppUserOrderByWithRelationInput;
        sessions?: AppUserSessionOrderByRelationAggregateInput;
        emails?: AppUserEmailOrderByRelationAggregateInput;
        oauthAccounts?: AppUserOAuthAccountOrderByRelationAggregateInput;
    };

    export type AppUserAccountWhereUniqueInput = Prisma.AtLeast<
        {
            id?: string;
            username_applicationId?: AppUserAccountUsernameApplicationIdCompoundUniqueInput;
            AND?: AppUserAccountWhereInput | AppUserAccountWhereInput[];
            OR?: AppUserAccountWhereInput[];
            NOT?: AppUserAccountWhereInput | AppUserAccountWhereInput[];
            applicationId?: UuidFilter<"AppUserAccount"> | string;
            username?: StringNullableFilter<"AppUserAccount"> | string | null;
            lastName?: StringNullableFilter<"AppUserAccount"> | string | null;
            imageUrl?: StringNullableFilter<"AppUserAccount"> | string | null;
            firstName?: StringNullableFilter<"AppUserAccount"> | string | null;
            userId?: UuidFilter<"AppUserAccount"> | string;
            passwordHash?: StringNullableFilter<"AppUserAccount"> | string | null;
            createdAt?: DateTimeFilter<"AppUserAccount"> | Date | string;
            updatedAt?: DateTimeFilter<"AppUserAccount"> | Date | string;
            application?: XOR<ApplicationScalarRelationFilter, ApplicationWhereInput>;
            user?: XOR<AppUserScalarRelationFilter, AppUserWhereInput>;
            sessions?: AppUserSessionListRelationFilter;
            emails?: AppUserEmailListRelationFilter;
            oauthAccounts?: AppUserOAuthAccountListRelationFilter;
        },
        "id" | "username_applicationId"
    >;

    export type AppUserAccountOrderByWithAggregationInput = {
        id?: SortOrder;
        applicationId?: SortOrder;
        username?: SortOrderInput | SortOrder;
        lastName?: SortOrderInput | SortOrder;
        imageUrl?: SortOrderInput | SortOrder;
        firstName?: SortOrderInput | SortOrder;
        userId?: SortOrder;
        passwordHash?: SortOrderInput | SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        _count?: AppUserAccountCountOrderByAggregateInput;
        _max?: AppUserAccountMaxOrderByAggregateInput;
        _min?: AppUserAccountMinOrderByAggregateInput;
    };

    export type AppUserAccountScalarWhereWithAggregatesInput = {
        AND?:
            | AppUserAccountScalarWhereWithAggregatesInput
            | AppUserAccountScalarWhereWithAggregatesInput[];
        OR?: AppUserAccountScalarWhereWithAggregatesInput[];
        NOT?:
            | AppUserAccountScalarWhereWithAggregatesInput
            | AppUserAccountScalarWhereWithAggregatesInput[];
        id?: UuidWithAggregatesFilter<"AppUserAccount"> | string;
        applicationId?: UuidWithAggregatesFilter<"AppUserAccount"> | string;
        username?: StringNullableWithAggregatesFilter<"AppUserAccount"> | string | null;
        lastName?: StringNullableWithAggregatesFilter<"AppUserAccount"> | string | null;
        imageUrl?: StringNullableWithAggregatesFilter<"AppUserAccount"> | string | null;
        firstName?: StringNullableWithAggregatesFilter<"AppUserAccount"> | string | null;
        userId?: UuidWithAggregatesFilter<"AppUserAccount"> | string;
        passwordHash?: StringNullableWithAggregatesFilter<"AppUserAccount"> | string | null;
        createdAt?: DateTimeWithAggregatesFilter<"AppUserAccount"> | Date | string;
        updatedAt?: DateTimeWithAggregatesFilter<"AppUserAccount"> | Date | string;
    };

    export type AppUserEmailWhereInput = {
        AND?: AppUserEmailWhereInput | AppUserEmailWhereInput[];
        OR?: AppUserEmailWhereInput[];
        NOT?: AppUserEmailWhereInput | AppUserEmailWhereInput[];
        id?: UuidFilter<"AppUserEmail"> | string;
        accountId?: UuidFilter<"AppUserEmail"> | string;
        applicationId?: UuidFilter<"AppUserEmail"> | string;
        isVerified?: BoolFilter<"AppUserEmail"> | boolean;
        address?: StringFilter<"AppUserEmail"> | string;
        isPrimary?: BoolFilter<"AppUserEmail"> | boolean;
        createdAt?: DateTimeFilter<"AppUserEmail"> | Date | string;
        updatedAt?: DateTimeFilter<"AppUserEmail"> | Date | string;
        oauthAccounts?: AppUserOAuthAccountListRelationFilter;
        account?: XOR<AppUserAccountScalarRelationFilter, AppUserAccountWhereInput>;
        application?: XOR<ApplicationScalarRelationFilter, ApplicationWhereInput>;
    };

    export type AppUserEmailOrderByWithRelationInput = {
        id?: SortOrder;
        accountId?: SortOrder;
        applicationId?: SortOrder;
        isVerified?: SortOrder;
        address?: SortOrder;
        isPrimary?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        oauthAccounts?: AppUserOAuthAccountOrderByRelationAggregateInput;
        account?: AppUserAccountOrderByWithRelationInput;
        application?: ApplicationOrderByWithRelationInput;
    };

    export type AppUserEmailWhereUniqueInput = Prisma.AtLeast<
        {
            id?: string;
            address_applicationId?: AppUserEmailAddressApplicationIdCompoundUniqueInput;
            AND?: AppUserEmailWhereInput | AppUserEmailWhereInput[];
            OR?: AppUserEmailWhereInput[];
            NOT?: AppUserEmailWhereInput | AppUserEmailWhereInput[];
            accountId?: UuidFilter<"AppUserEmail"> | string;
            applicationId?: UuidFilter<"AppUserEmail"> | string;
            isVerified?: BoolFilter<"AppUserEmail"> | boolean;
            address?: StringFilter<"AppUserEmail"> | string;
            isPrimary?: BoolFilter<"AppUserEmail"> | boolean;
            createdAt?: DateTimeFilter<"AppUserEmail"> | Date | string;
            updatedAt?: DateTimeFilter<"AppUserEmail"> | Date | string;
            oauthAccounts?: AppUserOAuthAccountListRelationFilter;
            account?: XOR<AppUserAccountScalarRelationFilter, AppUserAccountWhereInput>;
            application?: XOR<ApplicationScalarRelationFilter, ApplicationWhereInput>;
        },
        "id" | "address_applicationId"
    >;

    export type AppUserEmailOrderByWithAggregationInput = {
        id?: SortOrder;
        accountId?: SortOrder;
        applicationId?: SortOrder;
        isVerified?: SortOrder;
        address?: SortOrder;
        isPrimary?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        _count?: AppUserEmailCountOrderByAggregateInput;
        _max?: AppUserEmailMaxOrderByAggregateInput;
        _min?: AppUserEmailMinOrderByAggregateInput;
    };

    export type AppUserEmailScalarWhereWithAggregatesInput = {
        AND?:
            | AppUserEmailScalarWhereWithAggregatesInput
            | AppUserEmailScalarWhereWithAggregatesInput[];
        OR?: AppUserEmailScalarWhereWithAggregatesInput[];
        NOT?:
            | AppUserEmailScalarWhereWithAggregatesInput
            | AppUserEmailScalarWhereWithAggregatesInput[];
        id?: UuidWithAggregatesFilter<"AppUserEmail"> | string;
        accountId?: UuidWithAggregatesFilter<"AppUserEmail"> | string;
        applicationId?: UuidWithAggregatesFilter<"AppUserEmail"> | string;
        isVerified?: BoolWithAggregatesFilter<"AppUserEmail"> | boolean;
        address?: StringWithAggregatesFilter<"AppUserEmail"> | string;
        isPrimary?: BoolWithAggregatesFilter<"AppUserEmail"> | boolean;
        createdAt?: DateTimeWithAggregatesFilter<"AppUserEmail"> | Date | string;
        updatedAt?: DateTimeWithAggregatesFilter<"AppUserEmail"> | Date | string;
    };

    export type AppUserSessionWhereInput = {
        AND?: AppUserSessionWhereInput | AppUserSessionWhereInput[];
        OR?: AppUserSessionWhereInput[];
        NOT?: AppUserSessionWhereInput | AppUserSessionWhereInput[];
        id?: UuidFilter<"AppUserSession"> | string;
        accountId?: UuidFilter<"AppUserSession"> | string;
        refreshTokenId?: StringFilter<"AppUserSession"> | string;
        userAgent?: StringFilter<"AppUserSession"> | string;
        ipAddress?: StringFilter<"AppUserSession"> | string;
        applicationId?: UuidFilter<"AppUserSession"> | string;
        expiresAt?: DateTimeFilter<"AppUserSession"> | Date | string;
        createdAt?: DateTimeFilter<"AppUserSession"> | Date | string;
        updatedAt?: DateTimeFilter<"AppUserSession"> | Date | string;
        account?: XOR<AppUserAccountScalarRelationFilter, AppUserAccountWhereInput>;
        application?: XOR<ApplicationScalarRelationFilter, ApplicationWhereInput>;
    };

    export type AppUserSessionOrderByWithRelationInput = {
        id?: SortOrder;
        accountId?: SortOrder;
        refreshTokenId?: SortOrder;
        userAgent?: SortOrder;
        ipAddress?: SortOrder;
        applicationId?: SortOrder;
        expiresAt?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        account?: AppUserAccountOrderByWithRelationInput;
        application?: ApplicationOrderByWithRelationInput;
    };

    export type AppUserSessionWhereUniqueInput = Prisma.AtLeast<
        {
            id?: string;
            refreshTokenId?: string;
            AND?: AppUserSessionWhereInput | AppUserSessionWhereInput[];
            OR?: AppUserSessionWhereInput[];
            NOT?: AppUserSessionWhereInput | AppUserSessionWhereInput[];
            accountId?: UuidFilter<"AppUserSession"> | string;
            userAgent?: StringFilter<"AppUserSession"> | string;
            ipAddress?: StringFilter<"AppUserSession"> | string;
            applicationId?: UuidFilter<"AppUserSession"> | string;
            expiresAt?: DateTimeFilter<"AppUserSession"> | Date | string;
            createdAt?: DateTimeFilter<"AppUserSession"> | Date | string;
            updatedAt?: DateTimeFilter<"AppUserSession"> | Date | string;
            account?: XOR<AppUserAccountScalarRelationFilter, AppUserAccountWhereInput>;
            application?: XOR<ApplicationScalarRelationFilter, ApplicationWhereInput>;
        },
        "id" | "refreshTokenId"
    >;

    export type AppUserSessionOrderByWithAggregationInput = {
        id?: SortOrder;
        accountId?: SortOrder;
        refreshTokenId?: SortOrder;
        userAgent?: SortOrder;
        ipAddress?: SortOrder;
        applicationId?: SortOrder;
        expiresAt?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
        _count?: AppUserSessionCountOrderByAggregateInput;
        _max?: AppUserSessionMaxOrderByAggregateInput;
        _min?: AppUserSessionMinOrderByAggregateInput;
    };

    export type AppUserSessionScalarWhereWithAggregatesInput = {
        AND?:
            | AppUserSessionScalarWhereWithAggregatesInput
            | AppUserSessionScalarWhereWithAggregatesInput[];
        OR?: AppUserSessionScalarWhereWithAggregatesInput[];
        NOT?:
            | AppUserSessionScalarWhereWithAggregatesInput
            | AppUserSessionScalarWhereWithAggregatesInput[];
        id?: UuidWithAggregatesFilter<"AppUserSession"> | string;
        accountId?: UuidWithAggregatesFilter<"AppUserSession"> | string;
        refreshTokenId?: StringWithAggregatesFilter<"AppUserSession"> | string;
        userAgent?: StringWithAggregatesFilter<"AppUserSession"> | string;
        ipAddress?: StringWithAggregatesFilter<"AppUserSession"> | string;
        applicationId?: UuidWithAggregatesFilter<"AppUserSession"> | string;
        expiresAt?: DateTimeWithAggregatesFilter<"AppUserSession"> | Date | string;
        createdAt?: DateTimeWithAggregatesFilter<"AppUserSession"> | Date | string;
        updatedAt?: DateTimeWithAggregatesFilter<"AppUserSession"> | Date | string;
    };

    export type AppUserOAuthAccountWhereInput = {
        AND?: AppUserOAuthAccountWhereInput | AppUserOAuthAccountWhereInput[];
        OR?: AppUserOAuthAccountWhereInput[];
        NOT?: AppUserOAuthAccountWhereInput | AppUserOAuthAccountWhereInput[];
        id?: UuidFilter<"AppUserOAuthAccount"> | string;
        applicationId?: UuidFilter<"AppUserOAuthAccount"> | string;
        provider?: EnumOAuthProviderFilter<"AppUserOAuthAccount"> | $Enums.OAuthProvider;
        emailId?: UuidFilter<"AppUserOAuthAccount"> | string;
        providerUserId?: StringFilter<"AppUserOAuthAccount"> | string;
        accountId?: UuidFilter<"AppUserOAuthAccount"> | string;
        createdAt?: DateTimeFilter<"AppUserOAuthAccount"> | Date | string;
        email?: XOR<AppUserEmailScalarRelationFilter, AppUserEmailWhereInput>;
        application?: XOR<ApplicationScalarRelationFilter, ApplicationWhereInput>;
        account?: XOR<AppUserAccountScalarRelationFilter, AppUserAccountWhereInput>;
    };

    export type AppUserOAuthAccountOrderByWithRelationInput = {
        id?: SortOrder;
        applicationId?: SortOrder;
        provider?: SortOrder;
        emailId?: SortOrder;
        providerUserId?: SortOrder;
        accountId?: SortOrder;
        createdAt?: SortOrder;
        email?: AppUserEmailOrderByWithRelationInput;
        application?: ApplicationOrderByWithRelationInput;
        account?: AppUserAccountOrderByWithRelationInput;
    };

    export type AppUserOAuthAccountWhereUniqueInput = Prisma.AtLeast<
        {
            id?: string;
            providerUserId_provider_applicationId?: AppUserOAuthAccountProviderUserIdProviderApplicationIdCompoundUniqueInput;
            AND?: AppUserOAuthAccountWhereInput | AppUserOAuthAccountWhereInput[];
            OR?: AppUserOAuthAccountWhereInput[];
            NOT?: AppUserOAuthAccountWhereInput | AppUserOAuthAccountWhereInput[];
            applicationId?: UuidFilter<"AppUserOAuthAccount"> | string;
            provider?: EnumOAuthProviderFilter<"AppUserOAuthAccount"> | $Enums.OAuthProvider;
            emailId?: UuidFilter<"AppUserOAuthAccount"> | string;
            providerUserId?: StringFilter<"AppUserOAuthAccount"> | string;
            accountId?: UuidFilter<"AppUserOAuthAccount"> | string;
            createdAt?: DateTimeFilter<"AppUserOAuthAccount"> | Date | string;
            email?: XOR<AppUserEmailScalarRelationFilter, AppUserEmailWhereInput>;
            application?: XOR<ApplicationScalarRelationFilter, ApplicationWhereInput>;
            account?: XOR<AppUserAccountScalarRelationFilter, AppUserAccountWhereInput>;
        },
        "id" | "providerUserId_provider_applicationId"
    >;

    export type AppUserOAuthAccountOrderByWithAggregationInput = {
        id?: SortOrder;
        applicationId?: SortOrder;
        provider?: SortOrder;
        emailId?: SortOrder;
        providerUserId?: SortOrder;
        accountId?: SortOrder;
        createdAt?: SortOrder;
        _count?: AppUserOAuthAccountCountOrderByAggregateInput;
        _max?: AppUserOAuthAccountMaxOrderByAggregateInput;
        _min?: AppUserOAuthAccountMinOrderByAggregateInput;
    };

    export type AppUserOAuthAccountScalarWhereWithAggregatesInput = {
        AND?:
            | AppUserOAuthAccountScalarWhereWithAggregatesInput
            | AppUserOAuthAccountScalarWhereWithAggregatesInput[];
        OR?: AppUserOAuthAccountScalarWhereWithAggregatesInput[];
        NOT?:
            | AppUserOAuthAccountScalarWhereWithAggregatesInput
            | AppUserOAuthAccountScalarWhereWithAggregatesInput[];
        id?: UuidWithAggregatesFilter<"AppUserOAuthAccount"> | string;
        applicationId?: UuidWithAggregatesFilter<"AppUserOAuthAccount"> | string;
        provider?:
            | EnumOAuthProviderWithAggregatesFilter<"AppUserOAuthAccount">
            | $Enums.OAuthProvider;
        emailId?: UuidWithAggregatesFilter<"AppUserOAuthAccount"> | string;
        providerUserId?: StringWithAggregatesFilter<"AppUserOAuthAccount"> | string;
        accountId?: UuidWithAggregatesFilter<"AppUserOAuthAccount"> | string;
        createdAt?: DateTimeWithAggregatesFilter<"AppUserOAuthAccount"> | Date | string;
    };

    export type UserCreateInput = {
        id?: string;
        isVerified?: boolean;
        username: string;
        emailAddress: string;
        passwordHash: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        applications?: ApplicationCreateNestedManyWithoutOwnerInput;
        cliSessions?: CliSessionCreateNestedManyWithoutUserInput;
    };

    export type UserUncheckedCreateInput = {
        id?: string;
        isVerified?: boolean;
        username: string;
        emailAddress: string;
        passwordHash: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        applications?: ApplicationUncheckedCreateNestedManyWithoutOwnerInput;
        cliSessions?: CliSessionUncheckedCreateNestedManyWithoutUserInput;
    };

    export type UserUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        isVerified?: BoolFieldUpdateOperationsInput | boolean;
        username?: StringFieldUpdateOperationsInput | string;
        emailAddress?: StringFieldUpdateOperationsInput | string;
        passwordHash?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        applications?: ApplicationUpdateManyWithoutOwnerNestedInput;
        cliSessions?: CliSessionUpdateManyWithoutUserNestedInput;
    };

    export type UserUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        isVerified?: BoolFieldUpdateOperationsInput | boolean;
        username?: StringFieldUpdateOperationsInput | string;
        emailAddress?: StringFieldUpdateOperationsInput | string;
        passwordHash?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        applications?: ApplicationUncheckedUpdateManyWithoutOwnerNestedInput;
        cliSessions?: CliSessionUncheckedUpdateManyWithoutUserNestedInput;
    };

    export type UserCreateManyInput = {
        id?: string;
        isVerified?: boolean;
        username: string;
        emailAddress: string;
        passwordHash: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
    };

    export type UserUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        isVerified?: BoolFieldUpdateOperationsInput | boolean;
        username?: StringFieldUpdateOperationsInput | string;
        emailAddress?: StringFieldUpdateOperationsInput | string;
        passwordHash?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type UserUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string;
        isVerified?: BoolFieldUpdateOperationsInput | boolean;
        username?: StringFieldUpdateOperationsInput | string;
        emailAddress?: StringFieldUpdateOperationsInput | string;
        passwordHash?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type CliSessionCreateInput = {
        id?: string;
        tokenHash: string;
        createdAt?: Date | string;
        user: UserCreateNestedOneWithoutCliSessionsInput;
    };

    export type CliSessionUncheckedCreateInput = {
        id?: string;
        userId: string;
        tokenHash: string;
        createdAt?: Date | string;
    };

    export type CliSessionUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        tokenHash?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        user?: UserUpdateOneRequiredWithoutCliSessionsNestedInput;
    };

    export type CliSessionUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        userId?: StringFieldUpdateOperationsInput | string;
        tokenHash?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type CliSessionCreateManyInput = {
        id?: string;
        userId: string;
        tokenHash: string;
        createdAt?: Date | string;
    };

    export type CliSessionUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        tokenHash?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type CliSessionUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string;
        userId?: StringFieldUpdateOperationsInput | string;
        tokenHash?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type ApplicationCreateInput = {
        id?: string;
        publishableKey: string;
        secretKey: string;
        name: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        owner: UserCreateNestedOneWithoutApplicationsInput;
        accounts?: AppUserAccountCreateNestedManyWithoutApplicationInput;
        users?: AppUserCreateNestedManyWithoutApplicationInput;
        sessions?: AppUserSessionCreateNestedManyWithoutApplicationInput;
        emails?: AppUserEmailCreateNestedManyWithoutApplicationInput;
        oauthAccounts?: AppUserOAuthAccountCreateNestedManyWithoutApplicationInput;
    };

    export type ApplicationUncheckedCreateInput = {
        id?: string;
        ownerId: string;
        publishableKey: string;
        secretKey: string;
        name: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        accounts?: AppUserAccountUncheckedCreateNestedManyWithoutApplicationInput;
        users?: AppUserUncheckedCreateNestedManyWithoutApplicationInput;
        sessions?: AppUserSessionUncheckedCreateNestedManyWithoutApplicationInput;
        emails?: AppUserEmailUncheckedCreateNestedManyWithoutApplicationInput;
        oauthAccounts?: AppUserOAuthAccountUncheckedCreateNestedManyWithoutApplicationInput;
    };

    export type ApplicationUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        publishableKey?: StringFieldUpdateOperationsInput | string;
        secretKey?: StringFieldUpdateOperationsInput | string;
        name?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        owner?: UserUpdateOneRequiredWithoutApplicationsNestedInput;
        accounts?: AppUserAccountUpdateManyWithoutApplicationNestedInput;
        users?: AppUserUpdateManyWithoutApplicationNestedInput;
        sessions?: AppUserSessionUpdateManyWithoutApplicationNestedInput;
        emails?: AppUserEmailUpdateManyWithoutApplicationNestedInput;
        oauthAccounts?: AppUserOAuthAccountUpdateManyWithoutApplicationNestedInput;
    };

    export type ApplicationUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        ownerId?: StringFieldUpdateOperationsInput | string;
        publishableKey?: StringFieldUpdateOperationsInput | string;
        secretKey?: StringFieldUpdateOperationsInput | string;
        name?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        accounts?: AppUserAccountUncheckedUpdateManyWithoutApplicationNestedInput;
        users?: AppUserUncheckedUpdateManyWithoutApplicationNestedInput;
        sessions?: AppUserSessionUncheckedUpdateManyWithoutApplicationNestedInput;
        emails?: AppUserEmailUncheckedUpdateManyWithoutApplicationNestedInput;
        oauthAccounts?: AppUserOAuthAccountUncheckedUpdateManyWithoutApplicationNestedInput;
    };

    export type ApplicationCreateManyInput = {
        id?: string;
        ownerId: string;
        publishableKey: string;
        secretKey: string;
        name: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
    };

    export type ApplicationUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        publishableKey?: StringFieldUpdateOperationsInput | string;
        secretKey?: StringFieldUpdateOperationsInput | string;
        name?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type ApplicationUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string;
        ownerId?: StringFieldUpdateOperationsInput | string;
        publishableKey?: StringFieldUpdateOperationsInput | string;
        secretKey?: StringFieldUpdateOperationsInput | string;
        name?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type AppUserCreateInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        application: ApplicationCreateNestedOneWithoutUsersInput;
        accounts?: AppUserAccountCreateNestedManyWithoutUserInput;
    };

    export type AppUserUncheckedCreateInput = {
        id?: string;
        applicationId: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        accounts?: AppUserAccountUncheckedCreateNestedManyWithoutUserInput;
    };

    export type AppUserUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        application?: ApplicationUpdateOneRequiredWithoutUsersNestedInput;
        accounts?: AppUserAccountUpdateManyWithoutUserNestedInput;
    };

    export type AppUserUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        applicationId?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        accounts?: AppUserAccountUncheckedUpdateManyWithoutUserNestedInput;
    };

    export type AppUserCreateManyInput = {
        id?: string;
        applicationId: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
    };

    export type AppUserUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type AppUserUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string;
        applicationId?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type AppUserAccountCreateInput = {
        id?: string;
        username?: string | null;
        lastName?: string | null;
        imageUrl?: string | null;
        firstName?: string | null;
        passwordHash?: string | null;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        application: ApplicationCreateNestedOneWithoutAccountsInput;
        user: AppUserCreateNestedOneWithoutAccountsInput;
        sessions?: AppUserSessionCreateNestedManyWithoutAccountInput;
        emails?: AppUserEmailCreateNestedManyWithoutAccountInput;
        oauthAccounts?: AppUserOAuthAccountCreateNestedManyWithoutAccountInput;
    };

    export type AppUserAccountUncheckedCreateInput = {
        id?: string;
        applicationId: string;
        username?: string | null;
        lastName?: string | null;
        imageUrl?: string | null;
        firstName?: string | null;
        userId: string;
        passwordHash?: string | null;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        sessions?: AppUserSessionUncheckedCreateNestedManyWithoutAccountInput;
        emails?: AppUserEmailUncheckedCreateNestedManyWithoutAccountInput;
        oauthAccounts?: AppUserOAuthAccountUncheckedCreateNestedManyWithoutAccountInput;
    };

    export type AppUserAccountUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        username?: NullableStringFieldUpdateOperationsInput | string | null;
        lastName?: NullableStringFieldUpdateOperationsInput | string | null;
        imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
        firstName?: NullableStringFieldUpdateOperationsInput | string | null;
        passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        application?: ApplicationUpdateOneRequiredWithoutAccountsNestedInput;
        user?: AppUserUpdateOneRequiredWithoutAccountsNestedInput;
        sessions?: AppUserSessionUpdateManyWithoutAccountNestedInput;
        emails?: AppUserEmailUpdateManyWithoutAccountNestedInput;
        oauthAccounts?: AppUserOAuthAccountUpdateManyWithoutAccountNestedInput;
    };

    export type AppUserAccountUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        applicationId?: StringFieldUpdateOperationsInput | string;
        username?: NullableStringFieldUpdateOperationsInput | string | null;
        lastName?: NullableStringFieldUpdateOperationsInput | string | null;
        imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
        firstName?: NullableStringFieldUpdateOperationsInput | string | null;
        userId?: StringFieldUpdateOperationsInput | string;
        passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        sessions?: AppUserSessionUncheckedUpdateManyWithoutAccountNestedInput;
        emails?: AppUserEmailUncheckedUpdateManyWithoutAccountNestedInput;
        oauthAccounts?: AppUserOAuthAccountUncheckedUpdateManyWithoutAccountNestedInput;
    };

    export type AppUserAccountCreateManyInput = {
        id?: string;
        applicationId: string;
        username?: string | null;
        lastName?: string | null;
        imageUrl?: string | null;
        firstName?: string | null;
        userId: string;
        passwordHash?: string | null;
        createdAt?: Date | string;
        updatedAt?: Date | string;
    };

    export type AppUserAccountUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        username?: NullableStringFieldUpdateOperationsInput | string | null;
        lastName?: NullableStringFieldUpdateOperationsInput | string | null;
        imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
        firstName?: NullableStringFieldUpdateOperationsInput | string | null;
        passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type AppUserAccountUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string;
        applicationId?: StringFieldUpdateOperationsInput | string;
        username?: NullableStringFieldUpdateOperationsInput | string | null;
        lastName?: NullableStringFieldUpdateOperationsInput | string | null;
        imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
        firstName?: NullableStringFieldUpdateOperationsInput | string | null;
        userId?: StringFieldUpdateOperationsInput | string;
        passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type AppUserEmailCreateInput = {
        id?: string;
        isVerified?: boolean;
        address: string;
        isPrimary: boolean;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        oauthAccounts?: AppUserOAuthAccountCreateNestedManyWithoutEmailInput;
        account: AppUserAccountCreateNestedOneWithoutEmailsInput;
        application: ApplicationCreateNestedOneWithoutEmailsInput;
    };

    export type AppUserEmailUncheckedCreateInput = {
        id?: string;
        accountId: string;
        applicationId: string;
        isVerified?: boolean;
        address: string;
        isPrimary: boolean;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        oauthAccounts?: AppUserOAuthAccountUncheckedCreateNestedManyWithoutEmailInput;
    };

    export type AppUserEmailUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        isVerified?: BoolFieldUpdateOperationsInput | boolean;
        address?: StringFieldUpdateOperationsInput | string;
        isPrimary?: BoolFieldUpdateOperationsInput | boolean;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        oauthAccounts?: AppUserOAuthAccountUpdateManyWithoutEmailNestedInput;
        account?: AppUserAccountUpdateOneRequiredWithoutEmailsNestedInput;
        application?: ApplicationUpdateOneRequiredWithoutEmailsNestedInput;
    };

    export type AppUserEmailUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        accountId?: StringFieldUpdateOperationsInput | string;
        applicationId?: StringFieldUpdateOperationsInput | string;
        isVerified?: BoolFieldUpdateOperationsInput | boolean;
        address?: StringFieldUpdateOperationsInput | string;
        isPrimary?: BoolFieldUpdateOperationsInput | boolean;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        oauthAccounts?: AppUserOAuthAccountUncheckedUpdateManyWithoutEmailNestedInput;
    };

    export type AppUserEmailCreateManyInput = {
        id?: string;
        accountId: string;
        applicationId: string;
        isVerified?: boolean;
        address: string;
        isPrimary: boolean;
        createdAt?: Date | string;
        updatedAt?: Date | string;
    };

    export type AppUserEmailUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        isVerified?: BoolFieldUpdateOperationsInput | boolean;
        address?: StringFieldUpdateOperationsInput | string;
        isPrimary?: BoolFieldUpdateOperationsInput | boolean;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type AppUserEmailUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string;
        accountId?: StringFieldUpdateOperationsInput | string;
        applicationId?: StringFieldUpdateOperationsInput | string;
        isVerified?: BoolFieldUpdateOperationsInput | boolean;
        address?: StringFieldUpdateOperationsInput | string;
        isPrimary?: BoolFieldUpdateOperationsInput | boolean;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type AppUserSessionCreateInput = {
        id?: string;
        refreshTokenId: string;
        userAgent?: string;
        ipAddress?: string;
        expiresAt: Date | string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        account: AppUserAccountCreateNestedOneWithoutSessionsInput;
        application: ApplicationCreateNestedOneWithoutSessionsInput;
    };

    export type AppUserSessionUncheckedCreateInput = {
        id?: string;
        accountId: string;
        refreshTokenId: string;
        userAgent?: string;
        ipAddress?: string;
        applicationId: string;
        expiresAt: Date | string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
    };

    export type AppUserSessionUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        refreshTokenId?: StringFieldUpdateOperationsInput | string;
        userAgent?: StringFieldUpdateOperationsInput | string;
        ipAddress?: StringFieldUpdateOperationsInput | string;
        expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        account?: AppUserAccountUpdateOneRequiredWithoutSessionsNestedInput;
        application?: ApplicationUpdateOneRequiredWithoutSessionsNestedInput;
    };

    export type AppUserSessionUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        accountId?: StringFieldUpdateOperationsInput | string;
        refreshTokenId?: StringFieldUpdateOperationsInput | string;
        userAgent?: StringFieldUpdateOperationsInput | string;
        ipAddress?: StringFieldUpdateOperationsInput | string;
        applicationId?: StringFieldUpdateOperationsInput | string;
        expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type AppUserSessionCreateManyInput = {
        id?: string;
        accountId: string;
        refreshTokenId: string;
        userAgent?: string;
        ipAddress?: string;
        applicationId: string;
        expiresAt: Date | string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
    };

    export type AppUserSessionUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        refreshTokenId?: StringFieldUpdateOperationsInput | string;
        userAgent?: StringFieldUpdateOperationsInput | string;
        ipAddress?: StringFieldUpdateOperationsInput | string;
        expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type AppUserSessionUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string;
        accountId?: StringFieldUpdateOperationsInput | string;
        refreshTokenId?: StringFieldUpdateOperationsInput | string;
        userAgent?: StringFieldUpdateOperationsInput | string;
        ipAddress?: StringFieldUpdateOperationsInput | string;
        applicationId?: StringFieldUpdateOperationsInput | string;
        expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type AppUserOAuthAccountCreateInput = {
        id?: string;
        provider: $Enums.OAuthProvider;
        providerUserId: string;
        createdAt?: Date | string;
        email: AppUserEmailCreateNestedOneWithoutOauthAccountsInput;
        application: ApplicationCreateNestedOneWithoutOauthAccountsInput;
        account: AppUserAccountCreateNestedOneWithoutOauthAccountsInput;
    };

    export type AppUserOAuthAccountUncheckedCreateInput = {
        id?: string;
        applicationId: string;
        provider: $Enums.OAuthProvider;
        emailId: string;
        providerUserId: string;
        accountId: string;
        createdAt?: Date | string;
    };

    export type AppUserOAuthAccountUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        provider?: EnumOAuthProviderFieldUpdateOperationsInput | $Enums.OAuthProvider;
        providerUserId?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        email?: AppUserEmailUpdateOneRequiredWithoutOauthAccountsNestedInput;
        application?: ApplicationUpdateOneRequiredWithoutOauthAccountsNestedInput;
        account?: AppUserAccountUpdateOneRequiredWithoutOauthAccountsNestedInput;
    };

    export type AppUserOAuthAccountUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        applicationId?: StringFieldUpdateOperationsInput | string;
        provider?: EnumOAuthProviderFieldUpdateOperationsInput | $Enums.OAuthProvider;
        emailId?: StringFieldUpdateOperationsInput | string;
        providerUserId?: StringFieldUpdateOperationsInput | string;
        accountId?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type AppUserOAuthAccountCreateManyInput = {
        id?: string;
        applicationId: string;
        provider: $Enums.OAuthProvider;
        emailId: string;
        providerUserId: string;
        accountId: string;
        createdAt?: Date | string;
    };

    export type AppUserOAuthAccountUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        provider?: EnumOAuthProviderFieldUpdateOperationsInput | $Enums.OAuthProvider;
        providerUserId?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type AppUserOAuthAccountUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string;
        applicationId?: StringFieldUpdateOperationsInput | string;
        provider?: EnumOAuthProviderFieldUpdateOperationsInput | $Enums.OAuthProvider;
        emailId?: StringFieldUpdateOperationsInput | string;
        providerUserId?: StringFieldUpdateOperationsInput | string;
        accountId?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type UuidFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel>;
        in?: string[] | ListStringFieldRefInput<$PrismaModel>;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        mode?: QueryMode;
        not?: NestedUuidFilter<$PrismaModel> | string;
    };

    export type BoolFilter<$PrismaModel = never> = {
        equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
        not?: NestedBoolFilter<$PrismaModel> | boolean;
    };

    export type StringFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel>;
        in?: string[] | ListStringFieldRefInput<$PrismaModel>;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        contains?: string | StringFieldRefInput<$PrismaModel>;
        startsWith?: string | StringFieldRefInput<$PrismaModel>;
        endsWith?: string | StringFieldRefInput<$PrismaModel>;
        mode?: QueryMode;
        not?: NestedStringFilter<$PrismaModel> | string;
    };

    export type DateTimeFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
        notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
    };

    export type ApplicationListRelationFilter = {
        every?: ApplicationWhereInput;
        some?: ApplicationWhereInput;
        none?: ApplicationWhereInput;
    };

    export type CliSessionListRelationFilter = {
        every?: CliSessionWhereInput;
        some?: CliSessionWhereInput;
        none?: CliSessionWhereInput;
    };

    export type ApplicationOrderByRelationAggregateInput = {
        _count?: SortOrder;
    };

    export type CliSessionOrderByRelationAggregateInput = {
        _count?: SortOrder;
    };

    export type UserCountOrderByAggregateInput = {
        id?: SortOrder;
        isVerified?: SortOrder;
        username?: SortOrder;
        emailAddress?: SortOrder;
        passwordHash?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
    };

    export type UserMaxOrderByAggregateInput = {
        id?: SortOrder;
        isVerified?: SortOrder;
        username?: SortOrder;
        emailAddress?: SortOrder;
        passwordHash?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
    };

    export type UserMinOrderByAggregateInput = {
        id?: SortOrder;
        isVerified?: SortOrder;
        username?: SortOrder;
        emailAddress?: SortOrder;
        passwordHash?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
    };

    export type UuidWithAggregatesFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel>;
        in?: string[] | ListStringFieldRefInput<$PrismaModel>;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        mode?: QueryMode;
        not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedStringFilter<$PrismaModel>;
        _max?: NestedStringFilter<$PrismaModel>;
    };

    export type BoolWithAggregatesFilter<$PrismaModel = never> = {
        equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
        not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedBoolFilter<$PrismaModel>;
        _max?: NestedBoolFilter<$PrismaModel>;
    };

    export type StringWithAggregatesFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel>;
        in?: string[] | ListStringFieldRefInput<$PrismaModel>;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        contains?: string | StringFieldRefInput<$PrismaModel>;
        startsWith?: string | StringFieldRefInput<$PrismaModel>;
        endsWith?: string | StringFieldRefInput<$PrismaModel>;
        mode?: QueryMode;
        not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedStringFilter<$PrismaModel>;
        _max?: NestedStringFilter<$PrismaModel>;
    };

    export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
        notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedDateTimeFilter<$PrismaModel>;
        _max?: NestedDateTimeFilter<$PrismaModel>;
    };

    export type UserScalarRelationFilter = {
        is?: UserWhereInput;
        isNot?: UserWhereInput;
    };

    export type CliSessionCountOrderByAggregateInput = {
        id?: SortOrder;
        userId?: SortOrder;
        tokenHash?: SortOrder;
        createdAt?: SortOrder;
    };

    export type CliSessionMaxOrderByAggregateInput = {
        id?: SortOrder;
        userId?: SortOrder;
        tokenHash?: SortOrder;
        createdAt?: SortOrder;
    };

    export type CliSessionMinOrderByAggregateInput = {
        id?: SortOrder;
        userId?: SortOrder;
        tokenHash?: SortOrder;
        createdAt?: SortOrder;
    };

    export type AppUserAccountListRelationFilter = {
        every?: AppUserAccountWhereInput;
        some?: AppUserAccountWhereInput;
        none?: AppUserAccountWhereInput;
    };

    export type AppUserListRelationFilter = {
        every?: AppUserWhereInput;
        some?: AppUserWhereInput;
        none?: AppUserWhereInput;
    };

    export type AppUserSessionListRelationFilter = {
        every?: AppUserSessionWhereInput;
        some?: AppUserSessionWhereInput;
        none?: AppUserSessionWhereInput;
    };

    export type AppUserEmailListRelationFilter = {
        every?: AppUserEmailWhereInput;
        some?: AppUserEmailWhereInput;
        none?: AppUserEmailWhereInput;
    };

    export type AppUserOAuthAccountListRelationFilter = {
        every?: AppUserOAuthAccountWhereInput;
        some?: AppUserOAuthAccountWhereInput;
        none?: AppUserOAuthAccountWhereInput;
    };

    export type AppUserAccountOrderByRelationAggregateInput = {
        _count?: SortOrder;
    };

    export type AppUserOrderByRelationAggregateInput = {
        _count?: SortOrder;
    };

    export type AppUserSessionOrderByRelationAggregateInput = {
        _count?: SortOrder;
    };

    export type AppUserEmailOrderByRelationAggregateInput = {
        _count?: SortOrder;
    };

    export type AppUserOAuthAccountOrderByRelationAggregateInput = {
        _count?: SortOrder;
    };

    export type ApplicationCountOrderByAggregateInput = {
        id?: SortOrder;
        ownerId?: SortOrder;
        publishableKey?: SortOrder;
        secretKey?: SortOrder;
        name?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
    };

    export type ApplicationMaxOrderByAggregateInput = {
        id?: SortOrder;
        ownerId?: SortOrder;
        publishableKey?: SortOrder;
        secretKey?: SortOrder;
        name?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
    };

    export type ApplicationMinOrderByAggregateInput = {
        id?: SortOrder;
        ownerId?: SortOrder;
        publishableKey?: SortOrder;
        secretKey?: SortOrder;
        name?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
    };

    export type ApplicationScalarRelationFilter = {
        is?: ApplicationWhereInput;
        isNot?: ApplicationWhereInput;
    };

    export type AppUserCountOrderByAggregateInput = {
        id?: SortOrder;
        applicationId?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
    };

    export type AppUserMaxOrderByAggregateInput = {
        id?: SortOrder;
        applicationId?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
    };

    export type AppUserMinOrderByAggregateInput = {
        id?: SortOrder;
        applicationId?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
    };

    export type StringNullableFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel> | null;
        in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        contains?: string | StringFieldRefInput<$PrismaModel>;
        startsWith?: string | StringFieldRefInput<$PrismaModel>;
        endsWith?: string | StringFieldRefInput<$PrismaModel>;
        mode?: QueryMode;
        not?: NestedStringNullableFilter<$PrismaModel> | string | null;
    };

    export type AppUserScalarRelationFilter = {
        is?: AppUserWhereInput;
        isNot?: AppUserWhereInput;
    };

    export type SortOrderInput = {
        sort: SortOrder;
        nulls?: NullsOrder;
    };

    export type AppUserAccountUsernameApplicationIdCompoundUniqueInput = {
        username: string;
        applicationId: string;
    };

    export type AppUserAccountCountOrderByAggregateInput = {
        id?: SortOrder;
        applicationId?: SortOrder;
        username?: SortOrder;
        lastName?: SortOrder;
        imageUrl?: SortOrder;
        firstName?: SortOrder;
        userId?: SortOrder;
        passwordHash?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
    };

    export type AppUserAccountMaxOrderByAggregateInput = {
        id?: SortOrder;
        applicationId?: SortOrder;
        username?: SortOrder;
        lastName?: SortOrder;
        imageUrl?: SortOrder;
        firstName?: SortOrder;
        userId?: SortOrder;
        passwordHash?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
    };

    export type AppUserAccountMinOrderByAggregateInput = {
        id?: SortOrder;
        applicationId?: SortOrder;
        username?: SortOrder;
        lastName?: SortOrder;
        imageUrl?: SortOrder;
        firstName?: SortOrder;
        userId?: SortOrder;
        passwordHash?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
    };

    export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel> | null;
        in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        contains?: string | StringFieldRefInput<$PrismaModel>;
        startsWith?: string | StringFieldRefInput<$PrismaModel>;
        endsWith?: string | StringFieldRefInput<$PrismaModel>;
        mode?: QueryMode;
        not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
        _count?: NestedIntNullableFilter<$PrismaModel>;
        _min?: NestedStringNullableFilter<$PrismaModel>;
        _max?: NestedStringNullableFilter<$PrismaModel>;
    };

    export type AppUserAccountScalarRelationFilter = {
        is?: AppUserAccountWhereInput;
        isNot?: AppUserAccountWhereInput;
    };

    export type AppUserEmailAddressApplicationIdCompoundUniqueInput = {
        address: string;
        applicationId: string;
    };

    export type AppUserEmailCountOrderByAggregateInput = {
        id?: SortOrder;
        accountId?: SortOrder;
        applicationId?: SortOrder;
        isVerified?: SortOrder;
        address?: SortOrder;
        isPrimary?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
    };

    export type AppUserEmailMaxOrderByAggregateInput = {
        id?: SortOrder;
        accountId?: SortOrder;
        applicationId?: SortOrder;
        isVerified?: SortOrder;
        address?: SortOrder;
        isPrimary?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
    };

    export type AppUserEmailMinOrderByAggregateInput = {
        id?: SortOrder;
        accountId?: SortOrder;
        applicationId?: SortOrder;
        isVerified?: SortOrder;
        address?: SortOrder;
        isPrimary?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
    };

    export type AppUserSessionCountOrderByAggregateInput = {
        id?: SortOrder;
        accountId?: SortOrder;
        refreshTokenId?: SortOrder;
        userAgent?: SortOrder;
        ipAddress?: SortOrder;
        applicationId?: SortOrder;
        expiresAt?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
    };

    export type AppUserSessionMaxOrderByAggregateInput = {
        id?: SortOrder;
        accountId?: SortOrder;
        refreshTokenId?: SortOrder;
        userAgent?: SortOrder;
        ipAddress?: SortOrder;
        applicationId?: SortOrder;
        expiresAt?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
    };

    export type AppUserSessionMinOrderByAggregateInput = {
        id?: SortOrder;
        accountId?: SortOrder;
        refreshTokenId?: SortOrder;
        userAgent?: SortOrder;
        ipAddress?: SortOrder;
        applicationId?: SortOrder;
        expiresAt?: SortOrder;
        createdAt?: SortOrder;
        updatedAt?: SortOrder;
    };

    export type EnumOAuthProviderFilter<$PrismaModel = never> = {
        equals?: $Enums.OAuthProvider | EnumOAuthProviderFieldRefInput<$PrismaModel>;
        in?: $Enums.OAuthProvider[] | ListEnumOAuthProviderFieldRefInput<$PrismaModel>;
        notIn?: $Enums.OAuthProvider[] | ListEnumOAuthProviderFieldRefInput<$PrismaModel>;
        not?: NestedEnumOAuthProviderFilter<$PrismaModel> | $Enums.OAuthProvider;
    };

    export type AppUserEmailScalarRelationFilter = {
        is?: AppUserEmailWhereInput;
        isNot?: AppUserEmailWhereInput;
    };

    export type AppUserOAuthAccountProviderUserIdProviderApplicationIdCompoundUniqueInput = {
        providerUserId: string;
        provider: $Enums.OAuthProvider;
        applicationId: string;
    };

    export type AppUserOAuthAccountCountOrderByAggregateInput = {
        id?: SortOrder;
        applicationId?: SortOrder;
        provider?: SortOrder;
        emailId?: SortOrder;
        providerUserId?: SortOrder;
        accountId?: SortOrder;
        createdAt?: SortOrder;
    };

    export type AppUserOAuthAccountMaxOrderByAggregateInput = {
        id?: SortOrder;
        applicationId?: SortOrder;
        provider?: SortOrder;
        emailId?: SortOrder;
        providerUserId?: SortOrder;
        accountId?: SortOrder;
        createdAt?: SortOrder;
    };

    export type AppUserOAuthAccountMinOrderByAggregateInput = {
        id?: SortOrder;
        applicationId?: SortOrder;
        provider?: SortOrder;
        emailId?: SortOrder;
        providerUserId?: SortOrder;
        accountId?: SortOrder;
        createdAt?: SortOrder;
    };

    export type EnumOAuthProviderWithAggregatesFilter<$PrismaModel = never> = {
        equals?: $Enums.OAuthProvider | EnumOAuthProviderFieldRefInput<$PrismaModel>;
        in?: $Enums.OAuthProvider[] | ListEnumOAuthProviderFieldRefInput<$PrismaModel>;
        notIn?: $Enums.OAuthProvider[] | ListEnumOAuthProviderFieldRefInput<$PrismaModel>;
        not?: NestedEnumOAuthProviderWithAggregatesFilter<$PrismaModel> | $Enums.OAuthProvider;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedEnumOAuthProviderFilter<$PrismaModel>;
        _max?: NestedEnumOAuthProviderFilter<$PrismaModel>;
    };

    export type ApplicationCreateNestedManyWithoutOwnerInput = {
        create?:
            | XOR<ApplicationCreateWithoutOwnerInput, ApplicationUncheckedCreateWithoutOwnerInput>
            | ApplicationCreateWithoutOwnerInput[]
            | ApplicationUncheckedCreateWithoutOwnerInput[];
        connectOrCreate?:
            | ApplicationCreateOrConnectWithoutOwnerInput
            | ApplicationCreateOrConnectWithoutOwnerInput[];
        createMany?: ApplicationCreateManyOwnerInputEnvelope;
        connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
    };

    export type CliSessionCreateNestedManyWithoutUserInput = {
        create?:
            | XOR<CliSessionCreateWithoutUserInput, CliSessionUncheckedCreateWithoutUserInput>
            | CliSessionCreateWithoutUserInput[]
            | CliSessionUncheckedCreateWithoutUserInput[];
        connectOrCreate?:
            | CliSessionCreateOrConnectWithoutUserInput
            | CliSessionCreateOrConnectWithoutUserInput[];
        createMany?: CliSessionCreateManyUserInputEnvelope;
        connect?: CliSessionWhereUniqueInput | CliSessionWhereUniqueInput[];
    };

    export type ApplicationUncheckedCreateNestedManyWithoutOwnerInput = {
        create?:
            | XOR<ApplicationCreateWithoutOwnerInput, ApplicationUncheckedCreateWithoutOwnerInput>
            | ApplicationCreateWithoutOwnerInput[]
            | ApplicationUncheckedCreateWithoutOwnerInput[];
        connectOrCreate?:
            | ApplicationCreateOrConnectWithoutOwnerInput
            | ApplicationCreateOrConnectWithoutOwnerInput[];
        createMany?: ApplicationCreateManyOwnerInputEnvelope;
        connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
    };

    export type CliSessionUncheckedCreateNestedManyWithoutUserInput = {
        create?:
            | XOR<CliSessionCreateWithoutUserInput, CliSessionUncheckedCreateWithoutUserInput>
            | CliSessionCreateWithoutUserInput[]
            | CliSessionUncheckedCreateWithoutUserInput[];
        connectOrCreate?:
            | CliSessionCreateOrConnectWithoutUserInput
            | CliSessionCreateOrConnectWithoutUserInput[];
        createMany?: CliSessionCreateManyUserInputEnvelope;
        connect?: CliSessionWhereUniqueInput | CliSessionWhereUniqueInput[];
    };

    export type StringFieldUpdateOperationsInput = {
        set?: string;
    };

    export type BoolFieldUpdateOperationsInput = {
        set?: boolean;
    };

    export type DateTimeFieldUpdateOperationsInput = {
        set?: Date | string;
    };

    export type ApplicationUpdateManyWithoutOwnerNestedInput = {
        create?:
            | XOR<ApplicationCreateWithoutOwnerInput, ApplicationUncheckedCreateWithoutOwnerInput>
            | ApplicationCreateWithoutOwnerInput[]
            | ApplicationUncheckedCreateWithoutOwnerInput[];
        connectOrCreate?:
            | ApplicationCreateOrConnectWithoutOwnerInput
            | ApplicationCreateOrConnectWithoutOwnerInput[];
        upsert?:
            | ApplicationUpsertWithWhereUniqueWithoutOwnerInput
            | ApplicationUpsertWithWhereUniqueWithoutOwnerInput[];
        createMany?: ApplicationCreateManyOwnerInputEnvelope;
        set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
        disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
        delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
        connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
        update?:
            | ApplicationUpdateWithWhereUniqueWithoutOwnerInput
            | ApplicationUpdateWithWhereUniqueWithoutOwnerInput[];
        updateMany?:
            | ApplicationUpdateManyWithWhereWithoutOwnerInput
            | ApplicationUpdateManyWithWhereWithoutOwnerInput[];
        deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[];
    };

    export type CliSessionUpdateManyWithoutUserNestedInput = {
        create?:
            | XOR<CliSessionCreateWithoutUserInput, CliSessionUncheckedCreateWithoutUserInput>
            | CliSessionCreateWithoutUserInput[]
            | CliSessionUncheckedCreateWithoutUserInput[];
        connectOrCreate?:
            | CliSessionCreateOrConnectWithoutUserInput
            | CliSessionCreateOrConnectWithoutUserInput[];
        upsert?:
            | CliSessionUpsertWithWhereUniqueWithoutUserInput
            | CliSessionUpsertWithWhereUniqueWithoutUserInput[];
        createMany?: CliSessionCreateManyUserInputEnvelope;
        set?: CliSessionWhereUniqueInput | CliSessionWhereUniqueInput[];
        disconnect?: CliSessionWhereUniqueInput | CliSessionWhereUniqueInput[];
        delete?: CliSessionWhereUniqueInput | CliSessionWhereUniqueInput[];
        connect?: CliSessionWhereUniqueInput | CliSessionWhereUniqueInput[];
        update?:
            | CliSessionUpdateWithWhereUniqueWithoutUserInput
            | CliSessionUpdateWithWhereUniqueWithoutUserInput[];
        updateMany?:
            | CliSessionUpdateManyWithWhereWithoutUserInput
            | CliSessionUpdateManyWithWhereWithoutUserInput[];
        deleteMany?: CliSessionScalarWhereInput | CliSessionScalarWhereInput[];
    };

    export type ApplicationUncheckedUpdateManyWithoutOwnerNestedInput = {
        create?:
            | XOR<ApplicationCreateWithoutOwnerInput, ApplicationUncheckedCreateWithoutOwnerInput>
            | ApplicationCreateWithoutOwnerInput[]
            | ApplicationUncheckedCreateWithoutOwnerInput[];
        connectOrCreate?:
            | ApplicationCreateOrConnectWithoutOwnerInput
            | ApplicationCreateOrConnectWithoutOwnerInput[];
        upsert?:
            | ApplicationUpsertWithWhereUniqueWithoutOwnerInput
            | ApplicationUpsertWithWhereUniqueWithoutOwnerInput[];
        createMany?: ApplicationCreateManyOwnerInputEnvelope;
        set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
        disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
        delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
        connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
        update?:
            | ApplicationUpdateWithWhereUniqueWithoutOwnerInput
            | ApplicationUpdateWithWhereUniqueWithoutOwnerInput[];
        updateMany?:
            | ApplicationUpdateManyWithWhereWithoutOwnerInput
            | ApplicationUpdateManyWithWhereWithoutOwnerInput[];
        deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[];
    };

    export type CliSessionUncheckedUpdateManyWithoutUserNestedInput = {
        create?:
            | XOR<CliSessionCreateWithoutUserInput, CliSessionUncheckedCreateWithoutUserInput>
            | CliSessionCreateWithoutUserInput[]
            | CliSessionUncheckedCreateWithoutUserInput[];
        connectOrCreate?:
            | CliSessionCreateOrConnectWithoutUserInput
            | CliSessionCreateOrConnectWithoutUserInput[];
        upsert?:
            | CliSessionUpsertWithWhereUniqueWithoutUserInput
            | CliSessionUpsertWithWhereUniqueWithoutUserInput[];
        createMany?: CliSessionCreateManyUserInputEnvelope;
        set?: CliSessionWhereUniqueInput | CliSessionWhereUniqueInput[];
        disconnect?: CliSessionWhereUniqueInput | CliSessionWhereUniqueInput[];
        delete?: CliSessionWhereUniqueInput | CliSessionWhereUniqueInput[];
        connect?: CliSessionWhereUniqueInput | CliSessionWhereUniqueInput[];
        update?:
            | CliSessionUpdateWithWhereUniqueWithoutUserInput
            | CliSessionUpdateWithWhereUniqueWithoutUserInput[];
        updateMany?:
            | CliSessionUpdateManyWithWhereWithoutUserInput
            | CliSessionUpdateManyWithWhereWithoutUserInput[];
        deleteMany?: CliSessionScalarWhereInput | CliSessionScalarWhereInput[];
    };

    export type UserCreateNestedOneWithoutCliSessionsInput = {
        create?: XOR<UserCreateWithoutCliSessionsInput, UserUncheckedCreateWithoutCliSessionsInput>;
        connectOrCreate?: UserCreateOrConnectWithoutCliSessionsInput;
        connect?: UserWhereUniqueInput;
    };

    export type UserUpdateOneRequiredWithoutCliSessionsNestedInput = {
        create?: XOR<UserCreateWithoutCliSessionsInput, UserUncheckedCreateWithoutCliSessionsInput>;
        connectOrCreate?: UserCreateOrConnectWithoutCliSessionsInput;
        upsert?: UserUpsertWithoutCliSessionsInput;
        connect?: UserWhereUniqueInput;
        update?: XOR<
            XOR<UserUpdateToOneWithWhereWithoutCliSessionsInput, UserUpdateWithoutCliSessionsInput>,
            UserUncheckedUpdateWithoutCliSessionsInput
        >;
    };

    export type UserCreateNestedOneWithoutApplicationsInput = {
        create?: XOR<
            UserCreateWithoutApplicationsInput,
            UserUncheckedCreateWithoutApplicationsInput
        >;
        connectOrCreate?: UserCreateOrConnectWithoutApplicationsInput;
        connect?: UserWhereUniqueInput;
    };

    export type AppUserAccountCreateNestedManyWithoutApplicationInput = {
        create?:
            | XOR<
                  AppUserAccountCreateWithoutApplicationInput,
                  AppUserAccountUncheckedCreateWithoutApplicationInput
              >
            | AppUserAccountCreateWithoutApplicationInput[]
            | AppUserAccountUncheckedCreateWithoutApplicationInput[];
        connectOrCreate?:
            | AppUserAccountCreateOrConnectWithoutApplicationInput
            | AppUserAccountCreateOrConnectWithoutApplicationInput[];
        createMany?: AppUserAccountCreateManyApplicationInputEnvelope;
        connect?: AppUserAccountWhereUniqueInput | AppUserAccountWhereUniqueInput[];
    };

    export type AppUserCreateNestedManyWithoutApplicationInput = {
        create?:
            | XOR<
                  AppUserCreateWithoutApplicationInput,
                  AppUserUncheckedCreateWithoutApplicationInput
              >
            | AppUserCreateWithoutApplicationInput[]
            | AppUserUncheckedCreateWithoutApplicationInput[];
        connectOrCreate?:
            | AppUserCreateOrConnectWithoutApplicationInput
            | AppUserCreateOrConnectWithoutApplicationInput[];
        createMany?: AppUserCreateManyApplicationInputEnvelope;
        connect?: AppUserWhereUniqueInput | AppUserWhereUniqueInput[];
    };

    export type AppUserSessionCreateNestedManyWithoutApplicationInput = {
        create?:
            | XOR<
                  AppUserSessionCreateWithoutApplicationInput,
                  AppUserSessionUncheckedCreateWithoutApplicationInput
              >
            | AppUserSessionCreateWithoutApplicationInput[]
            | AppUserSessionUncheckedCreateWithoutApplicationInput[];
        connectOrCreate?:
            | AppUserSessionCreateOrConnectWithoutApplicationInput
            | AppUserSessionCreateOrConnectWithoutApplicationInput[];
        createMany?: AppUserSessionCreateManyApplicationInputEnvelope;
        connect?: AppUserSessionWhereUniqueInput | AppUserSessionWhereUniqueInput[];
    };

    export type AppUserEmailCreateNestedManyWithoutApplicationInput = {
        create?:
            | XOR<
                  AppUserEmailCreateWithoutApplicationInput,
                  AppUserEmailUncheckedCreateWithoutApplicationInput
              >
            | AppUserEmailCreateWithoutApplicationInput[]
            | AppUserEmailUncheckedCreateWithoutApplicationInput[];
        connectOrCreate?:
            | AppUserEmailCreateOrConnectWithoutApplicationInput
            | AppUserEmailCreateOrConnectWithoutApplicationInput[];
        createMany?: AppUserEmailCreateManyApplicationInputEnvelope;
        connect?: AppUserEmailWhereUniqueInput | AppUserEmailWhereUniqueInput[];
    };

    export type AppUserOAuthAccountCreateNestedManyWithoutApplicationInput = {
        create?:
            | XOR<
                  AppUserOAuthAccountCreateWithoutApplicationInput,
                  AppUserOAuthAccountUncheckedCreateWithoutApplicationInput
              >
            | AppUserOAuthAccountCreateWithoutApplicationInput[]
            | AppUserOAuthAccountUncheckedCreateWithoutApplicationInput[];
        connectOrCreate?:
            | AppUserOAuthAccountCreateOrConnectWithoutApplicationInput
            | AppUserOAuthAccountCreateOrConnectWithoutApplicationInput[];
        createMany?: AppUserOAuthAccountCreateManyApplicationInputEnvelope;
        connect?: AppUserOAuthAccountWhereUniqueInput | AppUserOAuthAccountWhereUniqueInput[];
    };

    export type AppUserAccountUncheckedCreateNestedManyWithoutApplicationInput = {
        create?:
            | XOR<
                  AppUserAccountCreateWithoutApplicationInput,
                  AppUserAccountUncheckedCreateWithoutApplicationInput
              >
            | AppUserAccountCreateWithoutApplicationInput[]
            | AppUserAccountUncheckedCreateWithoutApplicationInput[];
        connectOrCreate?:
            | AppUserAccountCreateOrConnectWithoutApplicationInput
            | AppUserAccountCreateOrConnectWithoutApplicationInput[];
        createMany?: AppUserAccountCreateManyApplicationInputEnvelope;
        connect?: AppUserAccountWhereUniqueInput | AppUserAccountWhereUniqueInput[];
    };

    export type AppUserUncheckedCreateNestedManyWithoutApplicationInput = {
        create?:
            | XOR<
                  AppUserCreateWithoutApplicationInput,
                  AppUserUncheckedCreateWithoutApplicationInput
              >
            | AppUserCreateWithoutApplicationInput[]
            | AppUserUncheckedCreateWithoutApplicationInput[];
        connectOrCreate?:
            | AppUserCreateOrConnectWithoutApplicationInput
            | AppUserCreateOrConnectWithoutApplicationInput[];
        createMany?: AppUserCreateManyApplicationInputEnvelope;
        connect?: AppUserWhereUniqueInput | AppUserWhereUniqueInput[];
    };

    export type AppUserSessionUncheckedCreateNestedManyWithoutApplicationInput = {
        create?:
            | XOR<
                  AppUserSessionCreateWithoutApplicationInput,
                  AppUserSessionUncheckedCreateWithoutApplicationInput
              >
            | AppUserSessionCreateWithoutApplicationInput[]
            | AppUserSessionUncheckedCreateWithoutApplicationInput[];
        connectOrCreate?:
            | AppUserSessionCreateOrConnectWithoutApplicationInput
            | AppUserSessionCreateOrConnectWithoutApplicationInput[];
        createMany?: AppUserSessionCreateManyApplicationInputEnvelope;
        connect?: AppUserSessionWhereUniqueInput | AppUserSessionWhereUniqueInput[];
    };

    export type AppUserEmailUncheckedCreateNestedManyWithoutApplicationInput = {
        create?:
            | XOR<
                  AppUserEmailCreateWithoutApplicationInput,
                  AppUserEmailUncheckedCreateWithoutApplicationInput
              >
            | AppUserEmailCreateWithoutApplicationInput[]
            | AppUserEmailUncheckedCreateWithoutApplicationInput[];
        connectOrCreate?:
            | AppUserEmailCreateOrConnectWithoutApplicationInput
            | AppUserEmailCreateOrConnectWithoutApplicationInput[];
        createMany?: AppUserEmailCreateManyApplicationInputEnvelope;
        connect?: AppUserEmailWhereUniqueInput | AppUserEmailWhereUniqueInput[];
    };

    export type AppUserOAuthAccountUncheckedCreateNestedManyWithoutApplicationInput = {
        create?:
            | XOR<
                  AppUserOAuthAccountCreateWithoutApplicationInput,
                  AppUserOAuthAccountUncheckedCreateWithoutApplicationInput
              >
            | AppUserOAuthAccountCreateWithoutApplicationInput[]
            | AppUserOAuthAccountUncheckedCreateWithoutApplicationInput[];
        connectOrCreate?:
            | AppUserOAuthAccountCreateOrConnectWithoutApplicationInput
            | AppUserOAuthAccountCreateOrConnectWithoutApplicationInput[];
        createMany?: AppUserOAuthAccountCreateManyApplicationInputEnvelope;
        connect?: AppUserOAuthAccountWhereUniqueInput | AppUserOAuthAccountWhereUniqueInput[];
    };

    export type UserUpdateOneRequiredWithoutApplicationsNestedInput = {
        create?: XOR<
            UserCreateWithoutApplicationsInput,
            UserUncheckedCreateWithoutApplicationsInput
        >;
        connectOrCreate?: UserCreateOrConnectWithoutApplicationsInput;
        upsert?: UserUpsertWithoutApplicationsInput;
        connect?: UserWhereUniqueInput;
        update?: XOR<
            XOR<
                UserUpdateToOneWithWhereWithoutApplicationsInput,
                UserUpdateWithoutApplicationsInput
            >,
            UserUncheckedUpdateWithoutApplicationsInput
        >;
    };

    export type AppUserAccountUpdateManyWithoutApplicationNestedInput = {
        create?:
            | XOR<
                  AppUserAccountCreateWithoutApplicationInput,
                  AppUserAccountUncheckedCreateWithoutApplicationInput
              >
            | AppUserAccountCreateWithoutApplicationInput[]
            | AppUserAccountUncheckedCreateWithoutApplicationInput[];
        connectOrCreate?:
            | AppUserAccountCreateOrConnectWithoutApplicationInput
            | AppUserAccountCreateOrConnectWithoutApplicationInput[];
        upsert?:
            | AppUserAccountUpsertWithWhereUniqueWithoutApplicationInput
            | AppUserAccountUpsertWithWhereUniqueWithoutApplicationInput[];
        createMany?: AppUserAccountCreateManyApplicationInputEnvelope;
        set?: AppUserAccountWhereUniqueInput | AppUserAccountWhereUniqueInput[];
        disconnect?: AppUserAccountWhereUniqueInput | AppUserAccountWhereUniqueInput[];
        delete?: AppUserAccountWhereUniqueInput | AppUserAccountWhereUniqueInput[];
        connect?: AppUserAccountWhereUniqueInput | AppUserAccountWhereUniqueInput[];
        update?:
            | AppUserAccountUpdateWithWhereUniqueWithoutApplicationInput
            | AppUserAccountUpdateWithWhereUniqueWithoutApplicationInput[];
        updateMany?:
            | AppUserAccountUpdateManyWithWhereWithoutApplicationInput
            | AppUserAccountUpdateManyWithWhereWithoutApplicationInput[];
        deleteMany?: AppUserAccountScalarWhereInput | AppUserAccountScalarWhereInput[];
    };

    export type AppUserUpdateManyWithoutApplicationNestedInput = {
        create?:
            | XOR<
                  AppUserCreateWithoutApplicationInput,
                  AppUserUncheckedCreateWithoutApplicationInput
              >
            | AppUserCreateWithoutApplicationInput[]
            | AppUserUncheckedCreateWithoutApplicationInput[];
        connectOrCreate?:
            | AppUserCreateOrConnectWithoutApplicationInput
            | AppUserCreateOrConnectWithoutApplicationInput[];
        upsert?:
            | AppUserUpsertWithWhereUniqueWithoutApplicationInput
            | AppUserUpsertWithWhereUniqueWithoutApplicationInput[];
        createMany?: AppUserCreateManyApplicationInputEnvelope;
        set?: AppUserWhereUniqueInput | AppUserWhereUniqueInput[];
        disconnect?: AppUserWhereUniqueInput | AppUserWhereUniqueInput[];
        delete?: AppUserWhereUniqueInput | AppUserWhereUniqueInput[];
        connect?: AppUserWhereUniqueInput | AppUserWhereUniqueInput[];
        update?:
            | AppUserUpdateWithWhereUniqueWithoutApplicationInput
            | AppUserUpdateWithWhereUniqueWithoutApplicationInput[];
        updateMany?:
            | AppUserUpdateManyWithWhereWithoutApplicationInput
            | AppUserUpdateManyWithWhereWithoutApplicationInput[];
        deleteMany?: AppUserScalarWhereInput | AppUserScalarWhereInput[];
    };

    export type AppUserSessionUpdateManyWithoutApplicationNestedInput = {
        create?:
            | XOR<
                  AppUserSessionCreateWithoutApplicationInput,
                  AppUserSessionUncheckedCreateWithoutApplicationInput
              >
            | AppUserSessionCreateWithoutApplicationInput[]
            | AppUserSessionUncheckedCreateWithoutApplicationInput[];
        connectOrCreate?:
            | AppUserSessionCreateOrConnectWithoutApplicationInput
            | AppUserSessionCreateOrConnectWithoutApplicationInput[];
        upsert?:
            | AppUserSessionUpsertWithWhereUniqueWithoutApplicationInput
            | AppUserSessionUpsertWithWhereUniqueWithoutApplicationInput[];
        createMany?: AppUserSessionCreateManyApplicationInputEnvelope;
        set?: AppUserSessionWhereUniqueInput | AppUserSessionWhereUniqueInput[];
        disconnect?: AppUserSessionWhereUniqueInput | AppUserSessionWhereUniqueInput[];
        delete?: AppUserSessionWhereUniqueInput | AppUserSessionWhereUniqueInput[];
        connect?: AppUserSessionWhereUniqueInput | AppUserSessionWhereUniqueInput[];
        update?:
            | AppUserSessionUpdateWithWhereUniqueWithoutApplicationInput
            | AppUserSessionUpdateWithWhereUniqueWithoutApplicationInput[];
        updateMany?:
            | AppUserSessionUpdateManyWithWhereWithoutApplicationInput
            | AppUserSessionUpdateManyWithWhereWithoutApplicationInput[];
        deleteMany?: AppUserSessionScalarWhereInput | AppUserSessionScalarWhereInput[];
    };

    export type AppUserEmailUpdateManyWithoutApplicationNestedInput = {
        create?:
            | XOR<
                  AppUserEmailCreateWithoutApplicationInput,
                  AppUserEmailUncheckedCreateWithoutApplicationInput
              >
            | AppUserEmailCreateWithoutApplicationInput[]
            | AppUserEmailUncheckedCreateWithoutApplicationInput[];
        connectOrCreate?:
            | AppUserEmailCreateOrConnectWithoutApplicationInput
            | AppUserEmailCreateOrConnectWithoutApplicationInput[];
        upsert?:
            | AppUserEmailUpsertWithWhereUniqueWithoutApplicationInput
            | AppUserEmailUpsertWithWhereUniqueWithoutApplicationInput[];
        createMany?: AppUserEmailCreateManyApplicationInputEnvelope;
        set?: AppUserEmailWhereUniqueInput | AppUserEmailWhereUniqueInput[];
        disconnect?: AppUserEmailWhereUniqueInput | AppUserEmailWhereUniqueInput[];
        delete?: AppUserEmailWhereUniqueInput | AppUserEmailWhereUniqueInput[];
        connect?: AppUserEmailWhereUniqueInput | AppUserEmailWhereUniqueInput[];
        update?:
            | AppUserEmailUpdateWithWhereUniqueWithoutApplicationInput
            | AppUserEmailUpdateWithWhereUniqueWithoutApplicationInput[];
        updateMany?:
            | AppUserEmailUpdateManyWithWhereWithoutApplicationInput
            | AppUserEmailUpdateManyWithWhereWithoutApplicationInput[];
        deleteMany?: AppUserEmailScalarWhereInput | AppUserEmailScalarWhereInput[];
    };

    export type AppUserOAuthAccountUpdateManyWithoutApplicationNestedInput = {
        create?:
            | XOR<
                  AppUserOAuthAccountCreateWithoutApplicationInput,
                  AppUserOAuthAccountUncheckedCreateWithoutApplicationInput
              >
            | AppUserOAuthAccountCreateWithoutApplicationInput[]
            | AppUserOAuthAccountUncheckedCreateWithoutApplicationInput[];
        connectOrCreate?:
            | AppUserOAuthAccountCreateOrConnectWithoutApplicationInput
            | AppUserOAuthAccountCreateOrConnectWithoutApplicationInput[];
        upsert?:
            | AppUserOAuthAccountUpsertWithWhereUniqueWithoutApplicationInput
            | AppUserOAuthAccountUpsertWithWhereUniqueWithoutApplicationInput[];
        createMany?: AppUserOAuthAccountCreateManyApplicationInputEnvelope;
        set?: AppUserOAuthAccountWhereUniqueInput | AppUserOAuthAccountWhereUniqueInput[];
        disconnect?: AppUserOAuthAccountWhereUniqueInput | AppUserOAuthAccountWhereUniqueInput[];
        delete?: AppUserOAuthAccountWhereUniqueInput | AppUserOAuthAccountWhereUniqueInput[];
        connect?: AppUserOAuthAccountWhereUniqueInput | AppUserOAuthAccountWhereUniqueInput[];
        update?:
            | AppUserOAuthAccountUpdateWithWhereUniqueWithoutApplicationInput
            | AppUserOAuthAccountUpdateWithWhereUniqueWithoutApplicationInput[];
        updateMany?:
            | AppUserOAuthAccountUpdateManyWithWhereWithoutApplicationInput
            | AppUserOAuthAccountUpdateManyWithWhereWithoutApplicationInput[];
        deleteMany?: AppUserOAuthAccountScalarWhereInput | AppUserOAuthAccountScalarWhereInput[];
    };

    export type AppUserAccountUncheckedUpdateManyWithoutApplicationNestedInput = {
        create?:
            | XOR<
                  AppUserAccountCreateWithoutApplicationInput,
                  AppUserAccountUncheckedCreateWithoutApplicationInput
              >
            | AppUserAccountCreateWithoutApplicationInput[]
            | AppUserAccountUncheckedCreateWithoutApplicationInput[];
        connectOrCreate?:
            | AppUserAccountCreateOrConnectWithoutApplicationInput
            | AppUserAccountCreateOrConnectWithoutApplicationInput[];
        upsert?:
            | AppUserAccountUpsertWithWhereUniqueWithoutApplicationInput
            | AppUserAccountUpsertWithWhereUniqueWithoutApplicationInput[];
        createMany?: AppUserAccountCreateManyApplicationInputEnvelope;
        set?: AppUserAccountWhereUniqueInput | AppUserAccountWhereUniqueInput[];
        disconnect?: AppUserAccountWhereUniqueInput | AppUserAccountWhereUniqueInput[];
        delete?: AppUserAccountWhereUniqueInput | AppUserAccountWhereUniqueInput[];
        connect?: AppUserAccountWhereUniqueInput | AppUserAccountWhereUniqueInput[];
        update?:
            | AppUserAccountUpdateWithWhereUniqueWithoutApplicationInput
            | AppUserAccountUpdateWithWhereUniqueWithoutApplicationInput[];
        updateMany?:
            | AppUserAccountUpdateManyWithWhereWithoutApplicationInput
            | AppUserAccountUpdateManyWithWhereWithoutApplicationInput[];
        deleteMany?: AppUserAccountScalarWhereInput | AppUserAccountScalarWhereInput[];
    };

    export type AppUserUncheckedUpdateManyWithoutApplicationNestedInput = {
        create?:
            | XOR<
                  AppUserCreateWithoutApplicationInput,
                  AppUserUncheckedCreateWithoutApplicationInput
              >
            | AppUserCreateWithoutApplicationInput[]
            | AppUserUncheckedCreateWithoutApplicationInput[];
        connectOrCreate?:
            | AppUserCreateOrConnectWithoutApplicationInput
            | AppUserCreateOrConnectWithoutApplicationInput[];
        upsert?:
            | AppUserUpsertWithWhereUniqueWithoutApplicationInput
            | AppUserUpsertWithWhereUniqueWithoutApplicationInput[];
        createMany?: AppUserCreateManyApplicationInputEnvelope;
        set?: AppUserWhereUniqueInput | AppUserWhereUniqueInput[];
        disconnect?: AppUserWhereUniqueInput | AppUserWhereUniqueInput[];
        delete?: AppUserWhereUniqueInput | AppUserWhereUniqueInput[];
        connect?: AppUserWhereUniqueInput | AppUserWhereUniqueInput[];
        update?:
            | AppUserUpdateWithWhereUniqueWithoutApplicationInput
            | AppUserUpdateWithWhereUniqueWithoutApplicationInput[];
        updateMany?:
            | AppUserUpdateManyWithWhereWithoutApplicationInput
            | AppUserUpdateManyWithWhereWithoutApplicationInput[];
        deleteMany?: AppUserScalarWhereInput | AppUserScalarWhereInput[];
    };

    export type AppUserSessionUncheckedUpdateManyWithoutApplicationNestedInput = {
        create?:
            | XOR<
                  AppUserSessionCreateWithoutApplicationInput,
                  AppUserSessionUncheckedCreateWithoutApplicationInput
              >
            | AppUserSessionCreateWithoutApplicationInput[]
            | AppUserSessionUncheckedCreateWithoutApplicationInput[];
        connectOrCreate?:
            | AppUserSessionCreateOrConnectWithoutApplicationInput
            | AppUserSessionCreateOrConnectWithoutApplicationInput[];
        upsert?:
            | AppUserSessionUpsertWithWhereUniqueWithoutApplicationInput
            | AppUserSessionUpsertWithWhereUniqueWithoutApplicationInput[];
        createMany?: AppUserSessionCreateManyApplicationInputEnvelope;
        set?: AppUserSessionWhereUniqueInput | AppUserSessionWhereUniqueInput[];
        disconnect?: AppUserSessionWhereUniqueInput | AppUserSessionWhereUniqueInput[];
        delete?: AppUserSessionWhereUniqueInput | AppUserSessionWhereUniqueInput[];
        connect?: AppUserSessionWhereUniqueInput | AppUserSessionWhereUniqueInput[];
        update?:
            | AppUserSessionUpdateWithWhereUniqueWithoutApplicationInput
            | AppUserSessionUpdateWithWhereUniqueWithoutApplicationInput[];
        updateMany?:
            | AppUserSessionUpdateManyWithWhereWithoutApplicationInput
            | AppUserSessionUpdateManyWithWhereWithoutApplicationInput[];
        deleteMany?: AppUserSessionScalarWhereInput | AppUserSessionScalarWhereInput[];
    };

    export type AppUserEmailUncheckedUpdateManyWithoutApplicationNestedInput = {
        create?:
            | XOR<
                  AppUserEmailCreateWithoutApplicationInput,
                  AppUserEmailUncheckedCreateWithoutApplicationInput
              >
            | AppUserEmailCreateWithoutApplicationInput[]
            | AppUserEmailUncheckedCreateWithoutApplicationInput[];
        connectOrCreate?:
            | AppUserEmailCreateOrConnectWithoutApplicationInput
            | AppUserEmailCreateOrConnectWithoutApplicationInput[];
        upsert?:
            | AppUserEmailUpsertWithWhereUniqueWithoutApplicationInput
            | AppUserEmailUpsertWithWhereUniqueWithoutApplicationInput[];
        createMany?: AppUserEmailCreateManyApplicationInputEnvelope;
        set?: AppUserEmailWhereUniqueInput | AppUserEmailWhereUniqueInput[];
        disconnect?: AppUserEmailWhereUniqueInput | AppUserEmailWhereUniqueInput[];
        delete?: AppUserEmailWhereUniqueInput | AppUserEmailWhereUniqueInput[];
        connect?: AppUserEmailWhereUniqueInput | AppUserEmailWhereUniqueInput[];
        update?:
            | AppUserEmailUpdateWithWhereUniqueWithoutApplicationInput
            | AppUserEmailUpdateWithWhereUniqueWithoutApplicationInput[];
        updateMany?:
            | AppUserEmailUpdateManyWithWhereWithoutApplicationInput
            | AppUserEmailUpdateManyWithWhereWithoutApplicationInput[];
        deleteMany?: AppUserEmailScalarWhereInput | AppUserEmailScalarWhereInput[];
    };

    export type AppUserOAuthAccountUncheckedUpdateManyWithoutApplicationNestedInput = {
        create?:
            | XOR<
                  AppUserOAuthAccountCreateWithoutApplicationInput,
                  AppUserOAuthAccountUncheckedCreateWithoutApplicationInput
              >
            | AppUserOAuthAccountCreateWithoutApplicationInput[]
            | AppUserOAuthAccountUncheckedCreateWithoutApplicationInput[];
        connectOrCreate?:
            | AppUserOAuthAccountCreateOrConnectWithoutApplicationInput
            | AppUserOAuthAccountCreateOrConnectWithoutApplicationInput[];
        upsert?:
            | AppUserOAuthAccountUpsertWithWhereUniqueWithoutApplicationInput
            | AppUserOAuthAccountUpsertWithWhereUniqueWithoutApplicationInput[];
        createMany?: AppUserOAuthAccountCreateManyApplicationInputEnvelope;
        set?: AppUserOAuthAccountWhereUniqueInput | AppUserOAuthAccountWhereUniqueInput[];
        disconnect?: AppUserOAuthAccountWhereUniqueInput | AppUserOAuthAccountWhereUniqueInput[];
        delete?: AppUserOAuthAccountWhereUniqueInput | AppUserOAuthAccountWhereUniqueInput[];
        connect?: AppUserOAuthAccountWhereUniqueInput | AppUserOAuthAccountWhereUniqueInput[];
        update?:
            | AppUserOAuthAccountUpdateWithWhereUniqueWithoutApplicationInput
            | AppUserOAuthAccountUpdateWithWhereUniqueWithoutApplicationInput[];
        updateMany?:
            | AppUserOAuthAccountUpdateManyWithWhereWithoutApplicationInput
            | AppUserOAuthAccountUpdateManyWithWhereWithoutApplicationInput[];
        deleteMany?: AppUserOAuthAccountScalarWhereInput | AppUserOAuthAccountScalarWhereInput[];
    };

    export type ApplicationCreateNestedOneWithoutUsersInput = {
        create?: XOR<
            ApplicationCreateWithoutUsersInput,
            ApplicationUncheckedCreateWithoutUsersInput
        >;
        connectOrCreate?: ApplicationCreateOrConnectWithoutUsersInput;
        connect?: ApplicationWhereUniqueInput;
    };

    export type AppUserAccountCreateNestedManyWithoutUserInput = {
        create?:
            | XOR<
                  AppUserAccountCreateWithoutUserInput,
                  AppUserAccountUncheckedCreateWithoutUserInput
              >
            | AppUserAccountCreateWithoutUserInput[]
            | AppUserAccountUncheckedCreateWithoutUserInput[];
        connectOrCreate?:
            | AppUserAccountCreateOrConnectWithoutUserInput
            | AppUserAccountCreateOrConnectWithoutUserInput[];
        createMany?: AppUserAccountCreateManyUserInputEnvelope;
        connect?: AppUserAccountWhereUniqueInput | AppUserAccountWhereUniqueInput[];
    };

    export type AppUserAccountUncheckedCreateNestedManyWithoutUserInput = {
        create?:
            | XOR<
                  AppUserAccountCreateWithoutUserInput,
                  AppUserAccountUncheckedCreateWithoutUserInput
              >
            | AppUserAccountCreateWithoutUserInput[]
            | AppUserAccountUncheckedCreateWithoutUserInput[];
        connectOrCreate?:
            | AppUserAccountCreateOrConnectWithoutUserInput
            | AppUserAccountCreateOrConnectWithoutUserInput[];
        createMany?: AppUserAccountCreateManyUserInputEnvelope;
        connect?: AppUserAccountWhereUniqueInput | AppUserAccountWhereUniqueInput[];
    };

    export type ApplicationUpdateOneRequiredWithoutUsersNestedInput = {
        create?: XOR<
            ApplicationCreateWithoutUsersInput,
            ApplicationUncheckedCreateWithoutUsersInput
        >;
        connectOrCreate?: ApplicationCreateOrConnectWithoutUsersInput;
        upsert?: ApplicationUpsertWithoutUsersInput;
        connect?: ApplicationWhereUniqueInput;
        update?: XOR<
            XOR<
                ApplicationUpdateToOneWithWhereWithoutUsersInput,
                ApplicationUpdateWithoutUsersInput
            >,
            ApplicationUncheckedUpdateWithoutUsersInput
        >;
    };

    export type AppUserAccountUpdateManyWithoutUserNestedInput = {
        create?:
            | XOR<
                  AppUserAccountCreateWithoutUserInput,
                  AppUserAccountUncheckedCreateWithoutUserInput
              >
            | AppUserAccountCreateWithoutUserInput[]
            | AppUserAccountUncheckedCreateWithoutUserInput[];
        connectOrCreate?:
            | AppUserAccountCreateOrConnectWithoutUserInput
            | AppUserAccountCreateOrConnectWithoutUserInput[];
        upsert?:
            | AppUserAccountUpsertWithWhereUniqueWithoutUserInput
            | AppUserAccountUpsertWithWhereUniqueWithoutUserInput[];
        createMany?: AppUserAccountCreateManyUserInputEnvelope;
        set?: AppUserAccountWhereUniqueInput | AppUserAccountWhereUniqueInput[];
        disconnect?: AppUserAccountWhereUniqueInput | AppUserAccountWhereUniqueInput[];
        delete?: AppUserAccountWhereUniqueInput | AppUserAccountWhereUniqueInput[];
        connect?: AppUserAccountWhereUniqueInput | AppUserAccountWhereUniqueInput[];
        update?:
            | AppUserAccountUpdateWithWhereUniqueWithoutUserInput
            | AppUserAccountUpdateWithWhereUniqueWithoutUserInput[];
        updateMany?:
            | AppUserAccountUpdateManyWithWhereWithoutUserInput
            | AppUserAccountUpdateManyWithWhereWithoutUserInput[];
        deleteMany?: AppUserAccountScalarWhereInput | AppUserAccountScalarWhereInput[];
    };

    export type AppUserAccountUncheckedUpdateManyWithoutUserNestedInput = {
        create?:
            | XOR<
                  AppUserAccountCreateWithoutUserInput,
                  AppUserAccountUncheckedCreateWithoutUserInput
              >
            | AppUserAccountCreateWithoutUserInput[]
            | AppUserAccountUncheckedCreateWithoutUserInput[];
        connectOrCreate?:
            | AppUserAccountCreateOrConnectWithoutUserInput
            | AppUserAccountCreateOrConnectWithoutUserInput[];
        upsert?:
            | AppUserAccountUpsertWithWhereUniqueWithoutUserInput
            | AppUserAccountUpsertWithWhereUniqueWithoutUserInput[];
        createMany?: AppUserAccountCreateManyUserInputEnvelope;
        set?: AppUserAccountWhereUniqueInput | AppUserAccountWhereUniqueInput[];
        disconnect?: AppUserAccountWhereUniqueInput | AppUserAccountWhereUniqueInput[];
        delete?: AppUserAccountWhereUniqueInput | AppUserAccountWhereUniqueInput[];
        connect?: AppUserAccountWhereUniqueInput | AppUserAccountWhereUniqueInput[];
        update?:
            | AppUserAccountUpdateWithWhereUniqueWithoutUserInput
            | AppUserAccountUpdateWithWhereUniqueWithoutUserInput[];
        updateMany?:
            | AppUserAccountUpdateManyWithWhereWithoutUserInput
            | AppUserAccountUpdateManyWithWhereWithoutUserInput[];
        deleteMany?: AppUserAccountScalarWhereInput | AppUserAccountScalarWhereInput[];
    };

    export type ApplicationCreateNestedOneWithoutAccountsInput = {
        create?: XOR<
            ApplicationCreateWithoutAccountsInput,
            ApplicationUncheckedCreateWithoutAccountsInput
        >;
        connectOrCreate?: ApplicationCreateOrConnectWithoutAccountsInput;
        connect?: ApplicationWhereUniqueInput;
    };

    export type AppUserCreateNestedOneWithoutAccountsInput = {
        create?: XOR<AppUserCreateWithoutAccountsInput, AppUserUncheckedCreateWithoutAccountsInput>;
        connectOrCreate?: AppUserCreateOrConnectWithoutAccountsInput;
        connect?: AppUserWhereUniqueInput;
    };

    export type AppUserSessionCreateNestedManyWithoutAccountInput = {
        create?:
            | XOR<
                  AppUserSessionCreateWithoutAccountInput,
                  AppUserSessionUncheckedCreateWithoutAccountInput
              >
            | AppUserSessionCreateWithoutAccountInput[]
            | AppUserSessionUncheckedCreateWithoutAccountInput[];
        connectOrCreate?:
            | AppUserSessionCreateOrConnectWithoutAccountInput
            | AppUserSessionCreateOrConnectWithoutAccountInput[];
        createMany?: AppUserSessionCreateManyAccountInputEnvelope;
        connect?: AppUserSessionWhereUniqueInput | AppUserSessionWhereUniqueInput[];
    };

    export type AppUserEmailCreateNestedManyWithoutAccountInput = {
        create?:
            | XOR<
                  AppUserEmailCreateWithoutAccountInput,
                  AppUserEmailUncheckedCreateWithoutAccountInput
              >
            | AppUserEmailCreateWithoutAccountInput[]
            | AppUserEmailUncheckedCreateWithoutAccountInput[];
        connectOrCreate?:
            | AppUserEmailCreateOrConnectWithoutAccountInput
            | AppUserEmailCreateOrConnectWithoutAccountInput[];
        createMany?: AppUserEmailCreateManyAccountInputEnvelope;
        connect?: AppUserEmailWhereUniqueInput | AppUserEmailWhereUniqueInput[];
    };

    export type AppUserOAuthAccountCreateNestedManyWithoutAccountInput = {
        create?:
            | XOR<
                  AppUserOAuthAccountCreateWithoutAccountInput,
                  AppUserOAuthAccountUncheckedCreateWithoutAccountInput
              >
            | AppUserOAuthAccountCreateWithoutAccountInput[]
            | AppUserOAuthAccountUncheckedCreateWithoutAccountInput[];
        connectOrCreate?:
            | AppUserOAuthAccountCreateOrConnectWithoutAccountInput
            | AppUserOAuthAccountCreateOrConnectWithoutAccountInput[];
        createMany?: AppUserOAuthAccountCreateManyAccountInputEnvelope;
        connect?: AppUserOAuthAccountWhereUniqueInput | AppUserOAuthAccountWhereUniqueInput[];
    };

    export type AppUserSessionUncheckedCreateNestedManyWithoutAccountInput = {
        create?:
            | XOR<
                  AppUserSessionCreateWithoutAccountInput,
                  AppUserSessionUncheckedCreateWithoutAccountInput
              >
            | AppUserSessionCreateWithoutAccountInput[]
            | AppUserSessionUncheckedCreateWithoutAccountInput[];
        connectOrCreate?:
            | AppUserSessionCreateOrConnectWithoutAccountInput
            | AppUserSessionCreateOrConnectWithoutAccountInput[];
        createMany?: AppUserSessionCreateManyAccountInputEnvelope;
        connect?: AppUserSessionWhereUniqueInput | AppUserSessionWhereUniqueInput[];
    };

    export type AppUserEmailUncheckedCreateNestedManyWithoutAccountInput = {
        create?:
            | XOR<
                  AppUserEmailCreateWithoutAccountInput,
                  AppUserEmailUncheckedCreateWithoutAccountInput
              >
            | AppUserEmailCreateWithoutAccountInput[]
            | AppUserEmailUncheckedCreateWithoutAccountInput[];
        connectOrCreate?:
            | AppUserEmailCreateOrConnectWithoutAccountInput
            | AppUserEmailCreateOrConnectWithoutAccountInput[];
        createMany?: AppUserEmailCreateManyAccountInputEnvelope;
        connect?: AppUserEmailWhereUniqueInput | AppUserEmailWhereUniqueInput[];
    };

    export type AppUserOAuthAccountUncheckedCreateNestedManyWithoutAccountInput = {
        create?:
            | XOR<
                  AppUserOAuthAccountCreateWithoutAccountInput,
                  AppUserOAuthAccountUncheckedCreateWithoutAccountInput
              >
            | AppUserOAuthAccountCreateWithoutAccountInput[]
            | AppUserOAuthAccountUncheckedCreateWithoutAccountInput[];
        connectOrCreate?:
            | AppUserOAuthAccountCreateOrConnectWithoutAccountInput
            | AppUserOAuthAccountCreateOrConnectWithoutAccountInput[];
        createMany?: AppUserOAuthAccountCreateManyAccountInputEnvelope;
        connect?: AppUserOAuthAccountWhereUniqueInput | AppUserOAuthAccountWhereUniqueInput[];
    };

    export type NullableStringFieldUpdateOperationsInput = {
        set?: string | null;
    };

    export type ApplicationUpdateOneRequiredWithoutAccountsNestedInput = {
        create?: XOR<
            ApplicationCreateWithoutAccountsInput,
            ApplicationUncheckedCreateWithoutAccountsInput
        >;
        connectOrCreate?: ApplicationCreateOrConnectWithoutAccountsInput;
        upsert?: ApplicationUpsertWithoutAccountsInput;
        connect?: ApplicationWhereUniqueInput;
        update?: XOR<
            XOR<
                ApplicationUpdateToOneWithWhereWithoutAccountsInput,
                ApplicationUpdateWithoutAccountsInput
            >,
            ApplicationUncheckedUpdateWithoutAccountsInput
        >;
    };

    export type AppUserUpdateOneRequiredWithoutAccountsNestedInput = {
        create?: XOR<AppUserCreateWithoutAccountsInput, AppUserUncheckedCreateWithoutAccountsInput>;
        connectOrCreate?: AppUserCreateOrConnectWithoutAccountsInput;
        upsert?: AppUserUpsertWithoutAccountsInput;
        connect?: AppUserWhereUniqueInput;
        update?: XOR<
            XOR<AppUserUpdateToOneWithWhereWithoutAccountsInput, AppUserUpdateWithoutAccountsInput>,
            AppUserUncheckedUpdateWithoutAccountsInput
        >;
    };

    export type AppUserSessionUpdateManyWithoutAccountNestedInput = {
        create?:
            | XOR<
                  AppUserSessionCreateWithoutAccountInput,
                  AppUserSessionUncheckedCreateWithoutAccountInput
              >
            | AppUserSessionCreateWithoutAccountInput[]
            | AppUserSessionUncheckedCreateWithoutAccountInput[];
        connectOrCreate?:
            | AppUserSessionCreateOrConnectWithoutAccountInput
            | AppUserSessionCreateOrConnectWithoutAccountInput[];
        upsert?:
            | AppUserSessionUpsertWithWhereUniqueWithoutAccountInput
            | AppUserSessionUpsertWithWhereUniqueWithoutAccountInput[];
        createMany?: AppUserSessionCreateManyAccountInputEnvelope;
        set?: AppUserSessionWhereUniqueInput | AppUserSessionWhereUniqueInput[];
        disconnect?: AppUserSessionWhereUniqueInput | AppUserSessionWhereUniqueInput[];
        delete?: AppUserSessionWhereUniqueInput | AppUserSessionWhereUniqueInput[];
        connect?: AppUserSessionWhereUniqueInput | AppUserSessionWhereUniqueInput[];
        update?:
            | AppUserSessionUpdateWithWhereUniqueWithoutAccountInput
            | AppUserSessionUpdateWithWhereUniqueWithoutAccountInput[];
        updateMany?:
            | AppUserSessionUpdateManyWithWhereWithoutAccountInput
            | AppUserSessionUpdateManyWithWhereWithoutAccountInput[];
        deleteMany?: AppUserSessionScalarWhereInput | AppUserSessionScalarWhereInput[];
    };

    export type AppUserEmailUpdateManyWithoutAccountNestedInput = {
        create?:
            | XOR<
                  AppUserEmailCreateWithoutAccountInput,
                  AppUserEmailUncheckedCreateWithoutAccountInput
              >
            | AppUserEmailCreateWithoutAccountInput[]
            | AppUserEmailUncheckedCreateWithoutAccountInput[];
        connectOrCreate?:
            | AppUserEmailCreateOrConnectWithoutAccountInput
            | AppUserEmailCreateOrConnectWithoutAccountInput[];
        upsert?:
            | AppUserEmailUpsertWithWhereUniqueWithoutAccountInput
            | AppUserEmailUpsertWithWhereUniqueWithoutAccountInput[];
        createMany?: AppUserEmailCreateManyAccountInputEnvelope;
        set?: AppUserEmailWhereUniqueInput | AppUserEmailWhereUniqueInput[];
        disconnect?: AppUserEmailWhereUniqueInput | AppUserEmailWhereUniqueInput[];
        delete?: AppUserEmailWhereUniqueInput | AppUserEmailWhereUniqueInput[];
        connect?: AppUserEmailWhereUniqueInput | AppUserEmailWhereUniqueInput[];
        update?:
            | AppUserEmailUpdateWithWhereUniqueWithoutAccountInput
            | AppUserEmailUpdateWithWhereUniqueWithoutAccountInput[];
        updateMany?:
            | AppUserEmailUpdateManyWithWhereWithoutAccountInput
            | AppUserEmailUpdateManyWithWhereWithoutAccountInput[];
        deleteMany?: AppUserEmailScalarWhereInput | AppUserEmailScalarWhereInput[];
    };

    export type AppUserOAuthAccountUpdateManyWithoutAccountNestedInput = {
        create?:
            | XOR<
                  AppUserOAuthAccountCreateWithoutAccountInput,
                  AppUserOAuthAccountUncheckedCreateWithoutAccountInput
              >
            | AppUserOAuthAccountCreateWithoutAccountInput[]
            | AppUserOAuthAccountUncheckedCreateWithoutAccountInput[];
        connectOrCreate?:
            | AppUserOAuthAccountCreateOrConnectWithoutAccountInput
            | AppUserOAuthAccountCreateOrConnectWithoutAccountInput[];
        upsert?:
            | AppUserOAuthAccountUpsertWithWhereUniqueWithoutAccountInput
            | AppUserOAuthAccountUpsertWithWhereUniqueWithoutAccountInput[];
        createMany?: AppUserOAuthAccountCreateManyAccountInputEnvelope;
        set?: AppUserOAuthAccountWhereUniqueInput | AppUserOAuthAccountWhereUniqueInput[];
        disconnect?: AppUserOAuthAccountWhereUniqueInput | AppUserOAuthAccountWhereUniqueInput[];
        delete?: AppUserOAuthAccountWhereUniqueInput | AppUserOAuthAccountWhereUniqueInput[];
        connect?: AppUserOAuthAccountWhereUniqueInput | AppUserOAuthAccountWhereUniqueInput[];
        update?:
            | AppUserOAuthAccountUpdateWithWhereUniqueWithoutAccountInput
            | AppUserOAuthAccountUpdateWithWhereUniqueWithoutAccountInput[];
        updateMany?:
            | AppUserOAuthAccountUpdateManyWithWhereWithoutAccountInput
            | AppUserOAuthAccountUpdateManyWithWhereWithoutAccountInput[];
        deleteMany?: AppUserOAuthAccountScalarWhereInput | AppUserOAuthAccountScalarWhereInput[];
    };

    export type AppUserSessionUncheckedUpdateManyWithoutAccountNestedInput = {
        create?:
            | XOR<
                  AppUserSessionCreateWithoutAccountInput,
                  AppUserSessionUncheckedCreateWithoutAccountInput
              >
            | AppUserSessionCreateWithoutAccountInput[]
            | AppUserSessionUncheckedCreateWithoutAccountInput[];
        connectOrCreate?:
            | AppUserSessionCreateOrConnectWithoutAccountInput
            | AppUserSessionCreateOrConnectWithoutAccountInput[];
        upsert?:
            | AppUserSessionUpsertWithWhereUniqueWithoutAccountInput
            | AppUserSessionUpsertWithWhereUniqueWithoutAccountInput[];
        createMany?: AppUserSessionCreateManyAccountInputEnvelope;
        set?: AppUserSessionWhereUniqueInput | AppUserSessionWhereUniqueInput[];
        disconnect?: AppUserSessionWhereUniqueInput | AppUserSessionWhereUniqueInput[];
        delete?: AppUserSessionWhereUniqueInput | AppUserSessionWhereUniqueInput[];
        connect?: AppUserSessionWhereUniqueInput | AppUserSessionWhereUniqueInput[];
        update?:
            | AppUserSessionUpdateWithWhereUniqueWithoutAccountInput
            | AppUserSessionUpdateWithWhereUniqueWithoutAccountInput[];
        updateMany?:
            | AppUserSessionUpdateManyWithWhereWithoutAccountInput
            | AppUserSessionUpdateManyWithWhereWithoutAccountInput[];
        deleteMany?: AppUserSessionScalarWhereInput | AppUserSessionScalarWhereInput[];
    };

    export type AppUserEmailUncheckedUpdateManyWithoutAccountNestedInput = {
        create?:
            | XOR<
                  AppUserEmailCreateWithoutAccountInput,
                  AppUserEmailUncheckedCreateWithoutAccountInput
              >
            | AppUserEmailCreateWithoutAccountInput[]
            | AppUserEmailUncheckedCreateWithoutAccountInput[];
        connectOrCreate?:
            | AppUserEmailCreateOrConnectWithoutAccountInput
            | AppUserEmailCreateOrConnectWithoutAccountInput[];
        upsert?:
            | AppUserEmailUpsertWithWhereUniqueWithoutAccountInput
            | AppUserEmailUpsertWithWhereUniqueWithoutAccountInput[];
        createMany?: AppUserEmailCreateManyAccountInputEnvelope;
        set?: AppUserEmailWhereUniqueInput | AppUserEmailWhereUniqueInput[];
        disconnect?: AppUserEmailWhereUniqueInput | AppUserEmailWhereUniqueInput[];
        delete?: AppUserEmailWhereUniqueInput | AppUserEmailWhereUniqueInput[];
        connect?: AppUserEmailWhereUniqueInput | AppUserEmailWhereUniqueInput[];
        update?:
            | AppUserEmailUpdateWithWhereUniqueWithoutAccountInput
            | AppUserEmailUpdateWithWhereUniqueWithoutAccountInput[];
        updateMany?:
            | AppUserEmailUpdateManyWithWhereWithoutAccountInput
            | AppUserEmailUpdateManyWithWhereWithoutAccountInput[];
        deleteMany?: AppUserEmailScalarWhereInput | AppUserEmailScalarWhereInput[];
    };

    export type AppUserOAuthAccountUncheckedUpdateManyWithoutAccountNestedInput = {
        create?:
            | XOR<
                  AppUserOAuthAccountCreateWithoutAccountInput,
                  AppUserOAuthAccountUncheckedCreateWithoutAccountInput
              >
            | AppUserOAuthAccountCreateWithoutAccountInput[]
            | AppUserOAuthAccountUncheckedCreateWithoutAccountInput[];
        connectOrCreate?:
            | AppUserOAuthAccountCreateOrConnectWithoutAccountInput
            | AppUserOAuthAccountCreateOrConnectWithoutAccountInput[];
        upsert?:
            | AppUserOAuthAccountUpsertWithWhereUniqueWithoutAccountInput
            | AppUserOAuthAccountUpsertWithWhereUniqueWithoutAccountInput[];
        createMany?: AppUserOAuthAccountCreateManyAccountInputEnvelope;
        set?: AppUserOAuthAccountWhereUniqueInput | AppUserOAuthAccountWhereUniqueInput[];
        disconnect?: AppUserOAuthAccountWhereUniqueInput | AppUserOAuthAccountWhereUniqueInput[];
        delete?: AppUserOAuthAccountWhereUniqueInput | AppUserOAuthAccountWhereUniqueInput[];
        connect?: AppUserOAuthAccountWhereUniqueInput | AppUserOAuthAccountWhereUniqueInput[];
        update?:
            | AppUserOAuthAccountUpdateWithWhereUniqueWithoutAccountInput
            | AppUserOAuthAccountUpdateWithWhereUniqueWithoutAccountInput[];
        updateMany?:
            | AppUserOAuthAccountUpdateManyWithWhereWithoutAccountInput
            | AppUserOAuthAccountUpdateManyWithWhereWithoutAccountInput[];
        deleteMany?: AppUserOAuthAccountScalarWhereInput | AppUserOAuthAccountScalarWhereInput[];
    };

    export type AppUserOAuthAccountCreateNestedManyWithoutEmailInput = {
        create?:
            | XOR<
                  AppUserOAuthAccountCreateWithoutEmailInput,
                  AppUserOAuthAccountUncheckedCreateWithoutEmailInput
              >
            | AppUserOAuthAccountCreateWithoutEmailInput[]
            | AppUserOAuthAccountUncheckedCreateWithoutEmailInput[];
        connectOrCreate?:
            | AppUserOAuthAccountCreateOrConnectWithoutEmailInput
            | AppUserOAuthAccountCreateOrConnectWithoutEmailInput[];
        createMany?: AppUserOAuthAccountCreateManyEmailInputEnvelope;
        connect?: AppUserOAuthAccountWhereUniqueInput | AppUserOAuthAccountWhereUniqueInput[];
    };

    export type AppUserAccountCreateNestedOneWithoutEmailsInput = {
        create?: XOR<
            AppUserAccountCreateWithoutEmailsInput,
            AppUserAccountUncheckedCreateWithoutEmailsInput
        >;
        connectOrCreate?: AppUserAccountCreateOrConnectWithoutEmailsInput;
        connect?: AppUserAccountWhereUniqueInput;
    };

    export type ApplicationCreateNestedOneWithoutEmailsInput = {
        create?: XOR<
            ApplicationCreateWithoutEmailsInput,
            ApplicationUncheckedCreateWithoutEmailsInput
        >;
        connectOrCreate?: ApplicationCreateOrConnectWithoutEmailsInput;
        connect?: ApplicationWhereUniqueInput;
    };

    export type AppUserOAuthAccountUncheckedCreateNestedManyWithoutEmailInput = {
        create?:
            | XOR<
                  AppUserOAuthAccountCreateWithoutEmailInput,
                  AppUserOAuthAccountUncheckedCreateWithoutEmailInput
              >
            | AppUserOAuthAccountCreateWithoutEmailInput[]
            | AppUserOAuthAccountUncheckedCreateWithoutEmailInput[];
        connectOrCreate?:
            | AppUserOAuthAccountCreateOrConnectWithoutEmailInput
            | AppUserOAuthAccountCreateOrConnectWithoutEmailInput[];
        createMany?: AppUserOAuthAccountCreateManyEmailInputEnvelope;
        connect?: AppUserOAuthAccountWhereUniqueInput | AppUserOAuthAccountWhereUniqueInput[];
    };

    export type AppUserOAuthAccountUpdateManyWithoutEmailNestedInput = {
        create?:
            | XOR<
                  AppUserOAuthAccountCreateWithoutEmailInput,
                  AppUserOAuthAccountUncheckedCreateWithoutEmailInput
              >
            | AppUserOAuthAccountCreateWithoutEmailInput[]
            | AppUserOAuthAccountUncheckedCreateWithoutEmailInput[];
        connectOrCreate?:
            | AppUserOAuthAccountCreateOrConnectWithoutEmailInput
            | AppUserOAuthAccountCreateOrConnectWithoutEmailInput[];
        upsert?:
            | AppUserOAuthAccountUpsertWithWhereUniqueWithoutEmailInput
            | AppUserOAuthAccountUpsertWithWhereUniqueWithoutEmailInput[];
        createMany?: AppUserOAuthAccountCreateManyEmailInputEnvelope;
        set?: AppUserOAuthAccountWhereUniqueInput | AppUserOAuthAccountWhereUniqueInput[];
        disconnect?: AppUserOAuthAccountWhereUniqueInput | AppUserOAuthAccountWhereUniqueInput[];
        delete?: AppUserOAuthAccountWhereUniqueInput | AppUserOAuthAccountWhereUniqueInput[];
        connect?: AppUserOAuthAccountWhereUniqueInput | AppUserOAuthAccountWhereUniqueInput[];
        update?:
            | AppUserOAuthAccountUpdateWithWhereUniqueWithoutEmailInput
            | AppUserOAuthAccountUpdateWithWhereUniqueWithoutEmailInput[];
        updateMany?:
            | AppUserOAuthAccountUpdateManyWithWhereWithoutEmailInput
            | AppUserOAuthAccountUpdateManyWithWhereWithoutEmailInput[];
        deleteMany?: AppUserOAuthAccountScalarWhereInput | AppUserOAuthAccountScalarWhereInput[];
    };

    export type AppUserAccountUpdateOneRequiredWithoutEmailsNestedInput = {
        create?: XOR<
            AppUserAccountCreateWithoutEmailsInput,
            AppUserAccountUncheckedCreateWithoutEmailsInput
        >;
        connectOrCreate?: AppUserAccountCreateOrConnectWithoutEmailsInput;
        upsert?: AppUserAccountUpsertWithoutEmailsInput;
        connect?: AppUserAccountWhereUniqueInput;
        update?: XOR<
            XOR<
                AppUserAccountUpdateToOneWithWhereWithoutEmailsInput,
                AppUserAccountUpdateWithoutEmailsInput
            >,
            AppUserAccountUncheckedUpdateWithoutEmailsInput
        >;
    };

    export type ApplicationUpdateOneRequiredWithoutEmailsNestedInput = {
        create?: XOR<
            ApplicationCreateWithoutEmailsInput,
            ApplicationUncheckedCreateWithoutEmailsInput
        >;
        connectOrCreate?: ApplicationCreateOrConnectWithoutEmailsInput;
        upsert?: ApplicationUpsertWithoutEmailsInput;
        connect?: ApplicationWhereUniqueInput;
        update?: XOR<
            XOR<
                ApplicationUpdateToOneWithWhereWithoutEmailsInput,
                ApplicationUpdateWithoutEmailsInput
            >,
            ApplicationUncheckedUpdateWithoutEmailsInput
        >;
    };

    export type AppUserOAuthAccountUncheckedUpdateManyWithoutEmailNestedInput = {
        create?:
            | XOR<
                  AppUserOAuthAccountCreateWithoutEmailInput,
                  AppUserOAuthAccountUncheckedCreateWithoutEmailInput
              >
            | AppUserOAuthAccountCreateWithoutEmailInput[]
            | AppUserOAuthAccountUncheckedCreateWithoutEmailInput[];
        connectOrCreate?:
            | AppUserOAuthAccountCreateOrConnectWithoutEmailInput
            | AppUserOAuthAccountCreateOrConnectWithoutEmailInput[];
        upsert?:
            | AppUserOAuthAccountUpsertWithWhereUniqueWithoutEmailInput
            | AppUserOAuthAccountUpsertWithWhereUniqueWithoutEmailInput[];
        createMany?: AppUserOAuthAccountCreateManyEmailInputEnvelope;
        set?: AppUserOAuthAccountWhereUniqueInput | AppUserOAuthAccountWhereUniqueInput[];
        disconnect?: AppUserOAuthAccountWhereUniqueInput | AppUserOAuthAccountWhereUniqueInput[];
        delete?: AppUserOAuthAccountWhereUniqueInput | AppUserOAuthAccountWhereUniqueInput[];
        connect?: AppUserOAuthAccountWhereUniqueInput | AppUserOAuthAccountWhereUniqueInput[];
        update?:
            | AppUserOAuthAccountUpdateWithWhereUniqueWithoutEmailInput
            | AppUserOAuthAccountUpdateWithWhereUniqueWithoutEmailInput[];
        updateMany?:
            | AppUserOAuthAccountUpdateManyWithWhereWithoutEmailInput
            | AppUserOAuthAccountUpdateManyWithWhereWithoutEmailInput[];
        deleteMany?: AppUserOAuthAccountScalarWhereInput | AppUserOAuthAccountScalarWhereInput[];
    };

    export type AppUserAccountCreateNestedOneWithoutSessionsInput = {
        create?: XOR<
            AppUserAccountCreateWithoutSessionsInput,
            AppUserAccountUncheckedCreateWithoutSessionsInput
        >;
        connectOrCreate?: AppUserAccountCreateOrConnectWithoutSessionsInput;
        connect?: AppUserAccountWhereUniqueInput;
    };

    export type ApplicationCreateNestedOneWithoutSessionsInput = {
        create?: XOR<
            ApplicationCreateWithoutSessionsInput,
            ApplicationUncheckedCreateWithoutSessionsInput
        >;
        connectOrCreate?: ApplicationCreateOrConnectWithoutSessionsInput;
        connect?: ApplicationWhereUniqueInput;
    };

    export type AppUserAccountUpdateOneRequiredWithoutSessionsNestedInput = {
        create?: XOR<
            AppUserAccountCreateWithoutSessionsInput,
            AppUserAccountUncheckedCreateWithoutSessionsInput
        >;
        connectOrCreate?: AppUserAccountCreateOrConnectWithoutSessionsInput;
        upsert?: AppUserAccountUpsertWithoutSessionsInput;
        connect?: AppUserAccountWhereUniqueInput;
        update?: XOR<
            XOR<
                AppUserAccountUpdateToOneWithWhereWithoutSessionsInput,
                AppUserAccountUpdateWithoutSessionsInput
            >,
            AppUserAccountUncheckedUpdateWithoutSessionsInput
        >;
    };

    export type ApplicationUpdateOneRequiredWithoutSessionsNestedInput = {
        create?: XOR<
            ApplicationCreateWithoutSessionsInput,
            ApplicationUncheckedCreateWithoutSessionsInput
        >;
        connectOrCreate?: ApplicationCreateOrConnectWithoutSessionsInput;
        upsert?: ApplicationUpsertWithoutSessionsInput;
        connect?: ApplicationWhereUniqueInput;
        update?: XOR<
            XOR<
                ApplicationUpdateToOneWithWhereWithoutSessionsInput,
                ApplicationUpdateWithoutSessionsInput
            >,
            ApplicationUncheckedUpdateWithoutSessionsInput
        >;
    };

    export type AppUserEmailCreateNestedOneWithoutOauthAccountsInput = {
        create?: XOR<
            AppUserEmailCreateWithoutOauthAccountsInput,
            AppUserEmailUncheckedCreateWithoutOauthAccountsInput
        >;
        connectOrCreate?: AppUserEmailCreateOrConnectWithoutOauthAccountsInput;
        connect?: AppUserEmailWhereUniqueInput;
    };

    export type ApplicationCreateNestedOneWithoutOauthAccountsInput = {
        create?: XOR<
            ApplicationCreateWithoutOauthAccountsInput,
            ApplicationUncheckedCreateWithoutOauthAccountsInput
        >;
        connectOrCreate?: ApplicationCreateOrConnectWithoutOauthAccountsInput;
        connect?: ApplicationWhereUniqueInput;
    };

    export type AppUserAccountCreateNestedOneWithoutOauthAccountsInput = {
        create?: XOR<
            AppUserAccountCreateWithoutOauthAccountsInput,
            AppUserAccountUncheckedCreateWithoutOauthAccountsInput
        >;
        connectOrCreate?: AppUserAccountCreateOrConnectWithoutOauthAccountsInput;
        connect?: AppUserAccountWhereUniqueInput;
    };

    export type EnumOAuthProviderFieldUpdateOperationsInput = {
        set?: $Enums.OAuthProvider;
    };

    export type AppUserEmailUpdateOneRequiredWithoutOauthAccountsNestedInput = {
        create?: XOR<
            AppUserEmailCreateWithoutOauthAccountsInput,
            AppUserEmailUncheckedCreateWithoutOauthAccountsInput
        >;
        connectOrCreate?: AppUserEmailCreateOrConnectWithoutOauthAccountsInput;
        upsert?: AppUserEmailUpsertWithoutOauthAccountsInput;
        connect?: AppUserEmailWhereUniqueInput;
        update?: XOR<
            XOR<
                AppUserEmailUpdateToOneWithWhereWithoutOauthAccountsInput,
                AppUserEmailUpdateWithoutOauthAccountsInput
            >,
            AppUserEmailUncheckedUpdateWithoutOauthAccountsInput
        >;
    };

    export type ApplicationUpdateOneRequiredWithoutOauthAccountsNestedInput = {
        create?: XOR<
            ApplicationCreateWithoutOauthAccountsInput,
            ApplicationUncheckedCreateWithoutOauthAccountsInput
        >;
        connectOrCreate?: ApplicationCreateOrConnectWithoutOauthAccountsInput;
        upsert?: ApplicationUpsertWithoutOauthAccountsInput;
        connect?: ApplicationWhereUniqueInput;
        update?: XOR<
            XOR<
                ApplicationUpdateToOneWithWhereWithoutOauthAccountsInput,
                ApplicationUpdateWithoutOauthAccountsInput
            >,
            ApplicationUncheckedUpdateWithoutOauthAccountsInput
        >;
    };

    export type AppUserAccountUpdateOneRequiredWithoutOauthAccountsNestedInput = {
        create?: XOR<
            AppUserAccountCreateWithoutOauthAccountsInput,
            AppUserAccountUncheckedCreateWithoutOauthAccountsInput
        >;
        connectOrCreate?: AppUserAccountCreateOrConnectWithoutOauthAccountsInput;
        upsert?: AppUserAccountUpsertWithoutOauthAccountsInput;
        connect?: AppUserAccountWhereUniqueInput;
        update?: XOR<
            XOR<
                AppUserAccountUpdateToOneWithWhereWithoutOauthAccountsInput,
                AppUserAccountUpdateWithoutOauthAccountsInput
            >,
            AppUserAccountUncheckedUpdateWithoutOauthAccountsInput
        >;
    };

    export type NestedUuidFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel>;
        in?: string[] | ListStringFieldRefInput<$PrismaModel>;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        not?: NestedUuidFilter<$PrismaModel> | string;
    };

    export type NestedBoolFilter<$PrismaModel = never> = {
        equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
        not?: NestedBoolFilter<$PrismaModel> | boolean;
    };

    export type NestedStringFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel>;
        in?: string[] | ListStringFieldRefInput<$PrismaModel>;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        contains?: string | StringFieldRefInput<$PrismaModel>;
        startsWith?: string | StringFieldRefInput<$PrismaModel>;
        endsWith?: string | StringFieldRefInput<$PrismaModel>;
        not?: NestedStringFilter<$PrismaModel> | string;
    };

    export type NestedDateTimeFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
        notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
    };

    export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel>;
        in?: string[] | ListStringFieldRefInput<$PrismaModel>;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedStringFilter<$PrismaModel>;
        _max?: NestedStringFilter<$PrismaModel>;
    };

    export type NestedIntFilter<$PrismaModel = never> = {
        equals?: number | IntFieldRefInput<$PrismaModel>;
        in?: number[] | ListIntFieldRefInput<$PrismaModel>;
        notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
        lt?: number | IntFieldRefInput<$PrismaModel>;
        lte?: number | IntFieldRefInput<$PrismaModel>;
        gt?: number | IntFieldRefInput<$PrismaModel>;
        gte?: number | IntFieldRefInput<$PrismaModel>;
        not?: NestedIntFilter<$PrismaModel> | number;
    };

    export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
        equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
        not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedBoolFilter<$PrismaModel>;
        _max?: NestedBoolFilter<$PrismaModel>;
    };

    export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel>;
        in?: string[] | ListStringFieldRefInput<$PrismaModel>;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        contains?: string | StringFieldRefInput<$PrismaModel>;
        startsWith?: string | StringFieldRefInput<$PrismaModel>;
        endsWith?: string | StringFieldRefInput<$PrismaModel>;
        not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedStringFilter<$PrismaModel>;
        _max?: NestedStringFilter<$PrismaModel>;
    };

    export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
        notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedDateTimeFilter<$PrismaModel>;
        _max?: NestedDateTimeFilter<$PrismaModel>;
    };

    export type NestedStringNullableFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel> | null;
        in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        contains?: string | StringFieldRefInput<$PrismaModel>;
        startsWith?: string | StringFieldRefInput<$PrismaModel>;
        endsWith?: string | StringFieldRefInput<$PrismaModel>;
        not?: NestedStringNullableFilter<$PrismaModel> | string | null;
    };

    export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel> | null;
        in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        contains?: string | StringFieldRefInput<$PrismaModel>;
        startsWith?: string | StringFieldRefInput<$PrismaModel>;
        endsWith?: string | StringFieldRefInput<$PrismaModel>;
        not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
        _count?: NestedIntNullableFilter<$PrismaModel>;
        _min?: NestedStringNullableFilter<$PrismaModel>;
        _max?: NestedStringNullableFilter<$PrismaModel>;
    };

    export type NestedIntNullableFilter<$PrismaModel = never> = {
        equals?: number | IntFieldRefInput<$PrismaModel> | null;
        in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
        notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
        lt?: number | IntFieldRefInput<$PrismaModel>;
        lte?: number | IntFieldRefInput<$PrismaModel>;
        gt?: number | IntFieldRefInput<$PrismaModel>;
        gte?: number | IntFieldRefInput<$PrismaModel>;
        not?: NestedIntNullableFilter<$PrismaModel> | number | null;
    };

    export type NestedEnumOAuthProviderFilter<$PrismaModel = never> = {
        equals?: $Enums.OAuthProvider | EnumOAuthProviderFieldRefInput<$PrismaModel>;
        in?: $Enums.OAuthProvider[] | ListEnumOAuthProviderFieldRefInput<$PrismaModel>;
        notIn?: $Enums.OAuthProvider[] | ListEnumOAuthProviderFieldRefInput<$PrismaModel>;
        not?: NestedEnumOAuthProviderFilter<$PrismaModel> | $Enums.OAuthProvider;
    };

    export type NestedEnumOAuthProviderWithAggregatesFilter<$PrismaModel = never> = {
        equals?: $Enums.OAuthProvider | EnumOAuthProviderFieldRefInput<$PrismaModel>;
        in?: $Enums.OAuthProvider[] | ListEnumOAuthProviderFieldRefInput<$PrismaModel>;
        notIn?: $Enums.OAuthProvider[] | ListEnumOAuthProviderFieldRefInput<$PrismaModel>;
        not?: NestedEnumOAuthProviderWithAggregatesFilter<$PrismaModel> | $Enums.OAuthProvider;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedEnumOAuthProviderFilter<$PrismaModel>;
        _max?: NestedEnumOAuthProviderFilter<$PrismaModel>;
    };

    export type ApplicationCreateWithoutOwnerInput = {
        id?: string;
        publishableKey: string;
        secretKey: string;
        name: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        accounts?: AppUserAccountCreateNestedManyWithoutApplicationInput;
        users?: AppUserCreateNestedManyWithoutApplicationInput;
        sessions?: AppUserSessionCreateNestedManyWithoutApplicationInput;
        emails?: AppUserEmailCreateNestedManyWithoutApplicationInput;
        oauthAccounts?: AppUserOAuthAccountCreateNestedManyWithoutApplicationInput;
    };

    export type ApplicationUncheckedCreateWithoutOwnerInput = {
        id?: string;
        publishableKey: string;
        secretKey: string;
        name: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        accounts?: AppUserAccountUncheckedCreateNestedManyWithoutApplicationInput;
        users?: AppUserUncheckedCreateNestedManyWithoutApplicationInput;
        sessions?: AppUserSessionUncheckedCreateNestedManyWithoutApplicationInput;
        emails?: AppUserEmailUncheckedCreateNestedManyWithoutApplicationInput;
        oauthAccounts?: AppUserOAuthAccountUncheckedCreateNestedManyWithoutApplicationInput;
    };

    export type ApplicationCreateOrConnectWithoutOwnerInput = {
        where: ApplicationWhereUniqueInput;
        create: XOR<
            ApplicationCreateWithoutOwnerInput,
            ApplicationUncheckedCreateWithoutOwnerInput
        >;
    };

    export type ApplicationCreateManyOwnerInputEnvelope = {
        data: ApplicationCreateManyOwnerInput | ApplicationCreateManyOwnerInput[];
        skipDuplicates?: boolean;
    };

    export type CliSessionCreateWithoutUserInput = {
        id?: string;
        tokenHash: string;
        createdAt?: Date | string;
    };

    export type CliSessionUncheckedCreateWithoutUserInput = {
        id?: string;
        tokenHash: string;
        createdAt?: Date | string;
    };

    export type CliSessionCreateOrConnectWithoutUserInput = {
        where: CliSessionWhereUniqueInput;
        create: XOR<CliSessionCreateWithoutUserInput, CliSessionUncheckedCreateWithoutUserInput>;
    };

    export type CliSessionCreateManyUserInputEnvelope = {
        data: CliSessionCreateManyUserInput | CliSessionCreateManyUserInput[];
        skipDuplicates?: boolean;
    };

    export type ApplicationUpsertWithWhereUniqueWithoutOwnerInput = {
        where: ApplicationWhereUniqueInput;
        update: XOR<
            ApplicationUpdateWithoutOwnerInput,
            ApplicationUncheckedUpdateWithoutOwnerInput
        >;
        create: XOR<
            ApplicationCreateWithoutOwnerInput,
            ApplicationUncheckedCreateWithoutOwnerInput
        >;
    };

    export type ApplicationUpdateWithWhereUniqueWithoutOwnerInput = {
        where: ApplicationWhereUniqueInput;
        data: XOR<ApplicationUpdateWithoutOwnerInput, ApplicationUncheckedUpdateWithoutOwnerInput>;
    };

    export type ApplicationUpdateManyWithWhereWithoutOwnerInput = {
        where: ApplicationScalarWhereInput;
        data: XOR<
            ApplicationUpdateManyMutationInput,
            ApplicationUncheckedUpdateManyWithoutOwnerInput
        >;
    };

    export type ApplicationScalarWhereInput = {
        AND?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[];
        OR?: ApplicationScalarWhereInput[];
        NOT?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[];
        id?: UuidFilter<"Application"> | string;
        ownerId?: UuidFilter<"Application"> | string;
        publishableKey?: StringFilter<"Application"> | string;
        secretKey?: StringFilter<"Application"> | string;
        name?: StringFilter<"Application"> | string;
        createdAt?: DateTimeFilter<"Application"> | Date | string;
        updatedAt?: DateTimeFilter<"Application"> | Date | string;
    };

    export type CliSessionUpsertWithWhereUniqueWithoutUserInput = {
        where: CliSessionWhereUniqueInput;
        update: XOR<CliSessionUpdateWithoutUserInput, CliSessionUncheckedUpdateWithoutUserInput>;
        create: XOR<CliSessionCreateWithoutUserInput, CliSessionUncheckedCreateWithoutUserInput>;
    };

    export type CliSessionUpdateWithWhereUniqueWithoutUserInput = {
        where: CliSessionWhereUniqueInput;
        data: XOR<CliSessionUpdateWithoutUserInput, CliSessionUncheckedUpdateWithoutUserInput>;
    };

    export type CliSessionUpdateManyWithWhereWithoutUserInput = {
        where: CliSessionScalarWhereInput;
        data: XOR<CliSessionUpdateManyMutationInput, CliSessionUncheckedUpdateManyWithoutUserInput>;
    };

    export type CliSessionScalarWhereInput = {
        AND?: CliSessionScalarWhereInput | CliSessionScalarWhereInput[];
        OR?: CliSessionScalarWhereInput[];
        NOT?: CliSessionScalarWhereInput | CliSessionScalarWhereInput[];
        id?: UuidFilter<"CliSession"> | string;
        userId?: UuidFilter<"CliSession"> | string;
        tokenHash?: StringFilter<"CliSession"> | string;
        createdAt?: DateTimeFilter<"CliSession"> | Date | string;
    };

    export type UserCreateWithoutCliSessionsInput = {
        id?: string;
        isVerified?: boolean;
        username: string;
        emailAddress: string;
        passwordHash: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        applications?: ApplicationCreateNestedManyWithoutOwnerInput;
    };

    export type UserUncheckedCreateWithoutCliSessionsInput = {
        id?: string;
        isVerified?: boolean;
        username: string;
        emailAddress: string;
        passwordHash: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        applications?: ApplicationUncheckedCreateNestedManyWithoutOwnerInput;
    };

    export type UserCreateOrConnectWithoutCliSessionsInput = {
        where: UserWhereUniqueInput;
        create: XOR<UserCreateWithoutCliSessionsInput, UserUncheckedCreateWithoutCliSessionsInput>;
    };

    export type UserUpsertWithoutCliSessionsInput = {
        update: XOR<UserUpdateWithoutCliSessionsInput, UserUncheckedUpdateWithoutCliSessionsInput>;
        create: XOR<UserCreateWithoutCliSessionsInput, UserUncheckedCreateWithoutCliSessionsInput>;
        where?: UserWhereInput;
    };

    export type UserUpdateToOneWithWhereWithoutCliSessionsInput = {
        where?: UserWhereInput;
        data: XOR<UserUpdateWithoutCliSessionsInput, UserUncheckedUpdateWithoutCliSessionsInput>;
    };

    export type UserUpdateWithoutCliSessionsInput = {
        id?: StringFieldUpdateOperationsInput | string;
        isVerified?: BoolFieldUpdateOperationsInput | boolean;
        username?: StringFieldUpdateOperationsInput | string;
        emailAddress?: StringFieldUpdateOperationsInput | string;
        passwordHash?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        applications?: ApplicationUpdateManyWithoutOwnerNestedInput;
    };

    export type UserUncheckedUpdateWithoutCliSessionsInput = {
        id?: StringFieldUpdateOperationsInput | string;
        isVerified?: BoolFieldUpdateOperationsInput | boolean;
        username?: StringFieldUpdateOperationsInput | string;
        emailAddress?: StringFieldUpdateOperationsInput | string;
        passwordHash?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        applications?: ApplicationUncheckedUpdateManyWithoutOwnerNestedInput;
    };

    export type UserCreateWithoutApplicationsInput = {
        id?: string;
        isVerified?: boolean;
        username: string;
        emailAddress: string;
        passwordHash: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        cliSessions?: CliSessionCreateNestedManyWithoutUserInput;
    };

    export type UserUncheckedCreateWithoutApplicationsInput = {
        id?: string;
        isVerified?: boolean;
        username: string;
        emailAddress: string;
        passwordHash: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        cliSessions?: CliSessionUncheckedCreateNestedManyWithoutUserInput;
    };

    export type UserCreateOrConnectWithoutApplicationsInput = {
        where: UserWhereUniqueInput;
        create: XOR<
            UserCreateWithoutApplicationsInput,
            UserUncheckedCreateWithoutApplicationsInput
        >;
    };

    export type AppUserAccountCreateWithoutApplicationInput = {
        id?: string;
        username?: string | null;
        lastName?: string | null;
        imageUrl?: string | null;
        firstName?: string | null;
        passwordHash?: string | null;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        user: AppUserCreateNestedOneWithoutAccountsInput;
        sessions?: AppUserSessionCreateNestedManyWithoutAccountInput;
        emails?: AppUserEmailCreateNestedManyWithoutAccountInput;
        oauthAccounts?: AppUserOAuthAccountCreateNestedManyWithoutAccountInput;
    };

    export type AppUserAccountUncheckedCreateWithoutApplicationInput = {
        id?: string;
        username?: string | null;
        lastName?: string | null;
        imageUrl?: string | null;
        firstName?: string | null;
        userId: string;
        passwordHash?: string | null;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        sessions?: AppUserSessionUncheckedCreateNestedManyWithoutAccountInput;
        emails?: AppUserEmailUncheckedCreateNestedManyWithoutAccountInput;
        oauthAccounts?: AppUserOAuthAccountUncheckedCreateNestedManyWithoutAccountInput;
    };

    export type AppUserAccountCreateOrConnectWithoutApplicationInput = {
        where: AppUserAccountWhereUniqueInput;
        create: XOR<
            AppUserAccountCreateWithoutApplicationInput,
            AppUserAccountUncheckedCreateWithoutApplicationInput
        >;
    };

    export type AppUserAccountCreateManyApplicationInputEnvelope = {
        data: AppUserAccountCreateManyApplicationInput | AppUserAccountCreateManyApplicationInput[];
        skipDuplicates?: boolean;
    };

    export type AppUserCreateWithoutApplicationInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        accounts?: AppUserAccountCreateNestedManyWithoutUserInput;
    };

    export type AppUserUncheckedCreateWithoutApplicationInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        accounts?: AppUserAccountUncheckedCreateNestedManyWithoutUserInput;
    };

    export type AppUserCreateOrConnectWithoutApplicationInput = {
        where: AppUserWhereUniqueInput;
        create: XOR<
            AppUserCreateWithoutApplicationInput,
            AppUserUncheckedCreateWithoutApplicationInput
        >;
    };

    export type AppUserCreateManyApplicationInputEnvelope = {
        data: AppUserCreateManyApplicationInput | AppUserCreateManyApplicationInput[];
        skipDuplicates?: boolean;
    };

    export type AppUserSessionCreateWithoutApplicationInput = {
        id?: string;
        refreshTokenId: string;
        userAgent?: string;
        ipAddress?: string;
        expiresAt: Date | string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        account: AppUserAccountCreateNestedOneWithoutSessionsInput;
    };

    export type AppUserSessionUncheckedCreateWithoutApplicationInput = {
        id?: string;
        accountId: string;
        refreshTokenId: string;
        userAgent?: string;
        ipAddress?: string;
        expiresAt: Date | string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
    };

    export type AppUserSessionCreateOrConnectWithoutApplicationInput = {
        where: AppUserSessionWhereUniqueInput;
        create: XOR<
            AppUserSessionCreateWithoutApplicationInput,
            AppUserSessionUncheckedCreateWithoutApplicationInput
        >;
    };

    export type AppUserSessionCreateManyApplicationInputEnvelope = {
        data: AppUserSessionCreateManyApplicationInput | AppUserSessionCreateManyApplicationInput[];
        skipDuplicates?: boolean;
    };

    export type AppUserEmailCreateWithoutApplicationInput = {
        id?: string;
        isVerified?: boolean;
        address: string;
        isPrimary: boolean;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        oauthAccounts?: AppUserOAuthAccountCreateNestedManyWithoutEmailInput;
        account: AppUserAccountCreateNestedOneWithoutEmailsInput;
    };

    export type AppUserEmailUncheckedCreateWithoutApplicationInput = {
        id?: string;
        accountId: string;
        isVerified?: boolean;
        address: string;
        isPrimary: boolean;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        oauthAccounts?: AppUserOAuthAccountUncheckedCreateNestedManyWithoutEmailInput;
    };

    export type AppUserEmailCreateOrConnectWithoutApplicationInput = {
        where: AppUserEmailWhereUniqueInput;
        create: XOR<
            AppUserEmailCreateWithoutApplicationInput,
            AppUserEmailUncheckedCreateWithoutApplicationInput
        >;
    };

    export type AppUserEmailCreateManyApplicationInputEnvelope = {
        data: AppUserEmailCreateManyApplicationInput | AppUserEmailCreateManyApplicationInput[];
        skipDuplicates?: boolean;
    };

    export type AppUserOAuthAccountCreateWithoutApplicationInput = {
        id?: string;
        provider: $Enums.OAuthProvider;
        providerUserId: string;
        createdAt?: Date | string;
        email: AppUserEmailCreateNestedOneWithoutOauthAccountsInput;
        account: AppUserAccountCreateNestedOneWithoutOauthAccountsInput;
    };

    export type AppUserOAuthAccountUncheckedCreateWithoutApplicationInput = {
        id?: string;
        provider: $Enums.OAuthProvider;
        emailId: string;
        providerUserId: string;
        accountId: string;
        createdAt?: Date | string;
    };

    export type AppUserOAuthAccountCreateOrConnectWithoutApplicationInput = {
        where: AppUserOAuthAccountWhereUniqueInput;
        create: XOR<
            AppUserOAuthAccountCreateWithoutApplicationInput,
            AppUserOAuthAccountUncheckedCreateWithoutApplicationInput
        >;
    };

    export type AppUserOAuthAccountCreateManyApplicationInputEnvelope = {
        data:
            | AppUserOAuthAccountCreateManyApplicationInput
            | AppUserOAuthAccountCreateManyApplicationInput[];
        skipDuplicates?: boolean;
    };

    export type UserUpsertWithoutApplicationsInput = {
        update: XOR<
            UserUpdateWithoutApplicationsInput,
            UserUncheckedUpdateWithoutApplicationsInput
        >;
        create: XOR<
            UserCreateWithoutApplicationsInput,
            UserUncheckedCreateWithoutApplicationsInput
        >;
        where?: UserWhereInput;
    };

    export type UserUpdateToOneWithWhereWithoutApplicationsInput = {
        where?: UserWhereInput;
        data: XOR<UserUpdateWithoutApplicationsInput, UserUncheckedUpdateWithoutApplicationsInput>;
    };

    export type UserUpdateWithoutApplicationsInput = {
        id?: StringFieldUpdateOperationsInput | string;
        isVerified?: BoolFieldUpdateOperationsInput | boolean;
        username?: StringFieldUpdateOperationsInput | string;
        emailAddress?: StringFieldUpdateOperationsInput | string;
        passwordHash?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        cliSessions?: CliSessionUpdateManyWithoutUserNestedInput;
    };

    export type UserUncheckedUpdateWithoutApplicationsInput = {
        id?: StringFieldUpdateOperationsInput | string;
        isVerified?: BoolFieldUpdateOperationsInput | boolean;
        username?: StringFieldUpdateOperationsInput | string;
        emailAddress?: StringFieldUpdateOperationsInput | string;
        passwordHash?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        cliSessions?: CliSessionUncheckedUpdateManyWithoutUserNestedInput;
    };

    export type AppUserAccountUpsertWithWhereUniqueWithoutApplicationInput = {
        where: AppUserAccountWhereUniqueInput;
        update: XOR<
            AppUserAccountUpdateWithoutApplicationInput,
            AppUserAccountUncheckedUpdateWithoutApplicationInput
        >;
        create: XOR<
            AppUserAccountCreateWithoutApplicationInput,
            AppUserAccountUncheckedCreateWithoutApplicationInput
        >;
    };

    export type AppUserAccountUpdateWithWhereUniqueWithoutApplicationInput = {
        where: AppUserAccountWhereUniqueInput;
        data: XOR<
            AppUserAccountUpdateWithoutApplicationInput,
            AppUserAccountUncheckedUpdateWithoutApplicationInput
        >;
    };

    export type AppUserAccountUpdateManyWithWhereWithoutApplicationInput = {
        where: AppUserAccountScalarWhereInput;
        data: XOR<
            AppUserAccountUpdateManyMutationInput,
            AppUserAccountUncheckedUpdateManyWithoutApplicationInput
        >;
    };

    export type AppUserAccountScalarWhereInput = {
        AND?: AppUserAccountScalarWhereInput | AppUserAccountScalarWhereInput[];
        OR?: AppUserAccountScalarWhereInput[];
        NOT?: AppUserAccountScalarWhereInput | AppUserAccountScalarWhereInput[];
        id?: UuidFilter<"AppUserAccount"> | string;
        applicationId?: UuidFilter<"AppUserAccount"> | string;
        username?: StringNullableFilter<"AppUserAccount"> | string | null;
        lastName?: StringNullableFilter<"AppUserAccount"> | string | null;
        imageUrl?: StringNullableFilter<"AppUserAccount"> | string | null;
        firstName?: StringNullableFilter<"AppUserAccount"> | string | null;
        userId?: UuidFilter<"AppUserAccount"> | string;
        passwordHash?: StringNullableFilter<"AppUserAccount"> | string | null;
        createdAt?: DateTimeFilter<"AppUserAccount"> | Date | string;
        updatedAt?: DateTimeFilter<"AppUserAccount"> | Date | string;
    };

    export type AppUserUpsertWithWhereUniqueWithoutApplicationInput = {
        where: AppUserWhereUniqueInput;
        update: XOR<
            AppUserUpdateWithoutApplicationInput,
            AppUserUncheckedUpdateWithoutApplicationInput
        >;
        create: XOR<
            AppUserCreateWithoutApplicationInput,
            AppUserUncheckedCreateWithoutApplicationInput
        >;
    };

    export type AppUserUpdateWithWhereUniqueWithoutApplicationInput = {
        where: AppUserWhereUniqueInput;
        data: XOR<
            AppUserUpdateWithoutApplicationInput,
            AppUserUncheckedUpdateWithoutApplicationInput
        >;
    };

    export type AppUserUpdateManyWithWhereWithoutApplicationInput = {
        where: AppUserScalarWhereInput;
        data: XOR<
            AppUserUpdateManyMutationInput,
            AppUserUncheckedUpdateManyWithoutApplicationInput
        >;
    };

    export type AppUserScalarWhereInput = {
        AND?: AppUserScalarWhereInput | AppUserScalarWhereInput[];
        OR?: AppUserScalarWhereInput[];
        NOT?: AppUserScalarWhereInput | AppUserScalarWhereInput[];
        id?: UuidFilter<"AppUser"> | string;
        applicationId?: UuidFilter<"AppUser"> | string;
        createdAt?: DateTimeFilter<"AppUser"> | Date | string;
        updatedAt?: DateTimeFilter<"AppUser"> | Date | string;
    };

    export type AppUserSessionUpsertWithWhereUniqueWithoutApplicationInput = {
        where: AppUserSessionWhereUniqueInput;
        update: XOR<
            AppUserSessionUpdateWithoutApplicationInput,
            AppUserSessionUncheckedUpdateWithoutApplicationInput
        >;
        create: XOR<
            AppUserSessionCreateWithoutApplicationInput,
            AppUserSessionUncheckedCreateWithoutApplicationInput
        >;
    };

    export type AppUserSessionUpdateWithWhereUniqueWithoutApplicationInput = {
        where: AppUserSessionWhereUniqueInput;
        data: XOR<
            AppUserSessionUpdateWithoutApplicationInput,
            AppUserSessionUncheckedUpdateWithoutApplicationInput
        >;
    };

    export type AppUserSessionUpdateManyWithWhereWithoutApplicationInput = {
        where: AppUserSessionScalarWhereInput;
        data: XOR<
            AppUserSessionUpdateManyMutationInput,
            AppUserSessionUncheckedUpdateManyWithoutApplicationInput
        >;
    };

    export type AppUserSessionScalarWhereInput = {
        AND?: AppUserSessionScalarWhereInput | AppUserSessionScalarWhereInput[];
        OR?: AppUserSessionScalarWhereInput[];
        NOT?: AppUserSessionScalarWhereInput | AppUserSessionScalarWhereInput[];
        id?: UuidFilter<"AppUserSession"> | string;
        accountId?: UuidFilter<"AppUserSession"> | string;
        refreshTokenId?: StringFilter<"AppUserSession"> | string;
        userAgent?: StringFilter<"AppUserSession"> | string;
        ipAddress?: StringFilter<"AppUserSession"> | string;
        applicationId?: UuidFilter<"AppUserSession"> | string;
        expiresAt?: DateTimeFilter<"AppUserSession"> | Date | string;
        createdAt?: DateTimeFilter<"AppUserSession"> | Date | string;
        updatedAt?: DateTimeFilter<"AppUserSession"> | Date | string;
    };

    export type AppUserEmailUpsertWithWhereUniqueWithoutApplicationInput = {
        where: AppUserEmailWhereUniqueInput;
        update: XOR<
            AppUserEmailUpdateWithoutApplicationInput,
            AppUserEmailUncheckedUpdateWithoutApplicationInput
        >;
        create: XOR<
            AppUserEmailCreateWithoutApplicationInput,
            AppUserEmailUncheckedCreateWithoutApplicationInput
        >;
    };

    export type AppUserEmailUpdateWithWhereUniqueWithoutApplicationInput = {
        where: AppUserEmailWhereUniqueInput;
        data: XOR<
            AppUserEmailUpdateWithoutApplicationInput,
            AppUserEmailUncheckedUpdateWithoutApplicationInput
        >;
    };

    export type AppUserEmailUpdateManyWithWhereWithoutApplicationInput = {
        where: AppUserEmailScalarWhereInput;
        data: XOR<
            AppUserEmailUpdateManyMutationInput,
            AppUserEmailUncheckedUpdateManyWithoutApplicationInput
        >;
    };

    export type AppUserEmailScalarWhereInput = {
        AND?: AppUserEmailScalarWhereInput | AppUserEmailScalarWhereInput[];
        OR?: AppUserEmailScalarWhereInput[];
        NOT?: AppUserEmailScalarWhereInput | AppUserEmailScalarWhereInput[];
        id?: UuidFilter<"AppUserEmail"> | string;
        accountId?: UuidFilter<"AppUserEmail"> | string;
        applicationId?: UuidFilter<"AppUserEmail"> | string;
        isVerified?: BoolFilter<"AppUserEmail"> | boolean;
        address?: StringFilter<"AppUserEmail"> | string;
        isPrimary?: BoolFilter<"AppUserEmail"> | boolean;
        createdAt?: DateTimeFilter<"AppUserEmail"> | Date | string;
        updatedAt?: DateTimeFilter<"AppUserEmail"> | Date | string;
    };

    export type AppUserOAuthAccountUpsertWithWhereUniqueWithoutApplicationInput = {
        where: AppUserOAuthAccountWhereUniqueInput;
        update: XOR<
            AppUserOAuthAccountUpdateWithoutApplicationInput,
            AppUserOAuthAccountUncheckedUpdateWithoutApplicationInput
        >;
        create: XOR<
            AppUserOAuthAccountCreateWithoutApplicationInput,
            AppUserOAuthAccountUncheckedCreateWithoutApplicationInput
        >;
    };

    export type AppUserOAuthAccountUpdateWithWhereUniqueWithoutApplicationInput = {
        where: AppUserOAuthAccountWhereUniqueInput;
        data: XOR<
            AppUserOAuthAccountUpdateWithoutApplicationInput,
            AppUserOAuthAccountUncheckedUpdateWithoutApplicationInput
        >;
    };

    export type AppUserOAuthAccountUpdateManyWithWhereWithoutApplicationInput = {
        where: AppUserOAuthAccountScalarWhereInput;
        data: XOR<
            AppUserOAuthAccountUpdateManyMutationInput,
            AppUserOAuthAccountUncheckedUpdateManyWithoutApplicationInput
        >;
    };

    export type AppUserOAuthAccountScalarWhereInput = {
        AND?: AppUserOAuthAccountScalarWhereInput | AppUserOAuthAccountScalarWhereInput[];
        OR?: AppUserOAuthAccountScalarWhereInput[];
        NOT?: AppUserOAuthAccountScalarWhereInput | AppUserOAuthAccountScalarWhereInput[];
        id?: UuidFilter<"AppUserOAuthAccount"> | string;
        applicationId?: UuidFilter<"AppUserOAuthAccount"> | string;
        provider?: EnumOAuthProviderFilter<"AppUserOAuthAccount"> | $Enums.OAuthProvider;
        emailId?: UuidFilter<"AppUserOAuthAccount"> | string;
        providerUserId?: StringFilter<"AppUserOAuthAccount"> | string;
        accountId?: UuidFilter<"AppUserOAuthAccount"> | string;
        createdAt?: DateTimeFilter<"AppUserOAuthAccount"> | Date | string;
    };

    export type ApplicationCreateWithoutUsersInput = {
        id?: string;
        publishableKey: string;
        secretKey: string;
        name: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        owner: UserCreateNestedOneWithoutApplicationsInput;
        accounts?: AppUserAccountCreateNestedManyWithoutApplicationInput;
        sessions?: AppUserSessionCreateNestedManyWithoutApplicationInput;
        emails?: AppUserEmailCreateNestedManyWithoutApplicationInput;
        oauthAccounts?: AppUserOAuthAccountCreateNestedManyWithoutApplicationInput;
    };

    export type ApplicationUncheckedCreateWithoutUsersInput = {
        id?: string;
        ownerId: string;
        publishableKey: string;
        secretKey: string;
        name: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        accounts?: AppUserAccountUncheckedCreateNestedManyWithoutApplicationInput;
        sessions?: AppUserSessionUncheckedCreateNestedManyWithoutApplicationInput;
        emails?: AppUserEmailUncheckedCreateNestedManyWithoutApplicationInput;
        oauthAccounts?: AppUserOAuthAccountUncheckedCreateNestedManyWithoutApplicationInput;
    };

    export type ApplicationCreateOrConnectWithoutUsersInput = {
        where: ApplicationWhereUniqueInput;
        create: XOR<
            ApplicationCreateWithoutUsersInput,
            ApplicationUncheckedCreateWithoutUsersInput
        >;
    };

    export type AppUserAccountCreateWithoutUserInput = {
        id?: string;
        username?: string | null;
        lastName?: string | null;
        imageUrl?: string | null;
        firstName?: string | null;
        passwordHash?: string | null;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        application: ApplicationCreateNestedOneWithoutAccountsInput;
        sessions?: AppUserSessionCreateNestedManyWithoutAccountInput;
        emails?: AppUserEmailCreateNestedManyWithoutAccountInput;
        oauthAccounts?: AppUserOAuthAccountCreateNestedManyWithoutAccountInput;
    };

    export type AppUserAccountUncheckedCreateWithoutUserInput = {
        id?: string;
        applicationId: string;
        username?: string | null;
        lastName?: string | null;
        imageUrl?: string | null;
        firstName?: string | null;
        passwordHash?: string | null;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        sessions?: AppUserSessionUncheckedCreateNestedManyWithoutAccountInput;
        emails?: AppUserEmailUncheckedCreateNestedManyWithoutAccountInput;
        oauthAccounts?: AppUserOAuthAccountUncheckedCreateNestedManyWithoutAccountInput;
    };

    export type AppUserAccountCreateOrConnectWithoutUserInput = {
        where: AppUserAccountWhereUniqueInput;
        create: XOR<
            AppUserAccountCreateWithoutUserInput,
            AppUserAccountUncheckedCreateWithoutUserInput
        >;
    };

    export type AppUserAccountCreateManyUserInputEnvelope = {
        data: AppUserAccountCreateManyUserInput | AppUserAccountCreateManyUserInput[];
        skipDuplicates?: boolean;
    };

    export type ApplicationUpsertWithoutUsersInput = {
        update: XOR<
            ApplicationUpdateWithoutUsersInput,
            ApplicationUncheckedUpdateWithoutUsersInput
        >;
        create: XOR<
            ApplicationCreateWithoutUsersInput,
            ApplicationUncheckedCreateWithoutUsersInput
        >;
        where?: ApplicationWhereInput;
    };

    export type ApplicationUpdateToOneWithWhereWithoutUsersInput = {
        where?: ApplicationWhereInput;
        data: XOR<ApplicationUpdateWithoutUsersInput, ApplicationUncheckedUpdateWithoutUsersInput>;
    };

    export type ApplicationUpdateWithoutUsersInput = {
        id?: StringFieldUpdateOperationsInput | string;
        publishableKey?: StringFieldUpdateOperationsInput | string;
        secretKey?: StringFieldUpdateOperationsInput | string;
        name?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        owner?: UserUpdateOneRequiredWithoutApplicationsNestedInput;
        accounts?: AppUserAccountUpdateManyWithoutApplicationNestedInput;
        sessions?: AppUserSessionUpdateManyWithoutApplicationNestedInput;
        emails?: AppUserEmailUpdateManyWithoutApplicationNestedInput;
        oauthAccounts?: AppUserOAuthAccountUpdateManyWithoutApplicationNestedInput;
    };

    export type ApplicationUncheckedUpdateWithoutUsersInput = {
        id?: StringFieldUpdateOperationsInput | string;
        ownerId?: StringFieldUpdateOperationsInput | string;
        publishableKey?: StringFieldUpdateOperationsInput | string;
        secretKey?: StringFieldUpdateOperationsInput | string;
        name?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        accounts?: AppUserAccountUncheckedUpdateManyWithoutApplicationNestedInput;
        sessions?: AppUserSessionUncheckedUpdateManyWithoutApplicationNestedInput;
        emails?: AppUserEmailUncheckedUpdateManyWithoutApplicationNestedInput;
        oauthAccounts?: AppUserOAuthAccountUncheckedUpdateManyWithoutApplicationNestedInput;
    };

    export type AppUserAccountUpsertWithWhereUniqueWithoutUserInput = {
        where: AppUserAccountWhereUniqueInput;
        update: XOR<
            AppUserAccountUpdateWithoutUserInput,
            AppUserAccountUncheckedUpdateWithoutUserInput
        >;
        create: XOR<
            AppUserAccountCreateWithoutUserInput,
            AppUserAccountUncheckedCreateWithoutUserInput
        >;
    };

    export type AppUserAccountUpdateWithWhereUniqueWithoutUserInput = {
        where: AppUserAccountWhereUniqueInput;
        data: XOR<
            AppUserAccountUpdateWithoutUserInput,
            AppUserAccountUncheckedUpdateWithoutUserInput
        >;
    };

    export type AppUserAccountUpdateManyWithWhereWithoutUserInput = {
        where: AppUserAccountScalarWhereInput;
        data: XOR<
            AppUserAccountUpdateManyMutationInput,
            AppUserAccountUncheckedUpdateManyWithoutUserInput
        >;
    };

    export type ApplicationCreateWithoutAccountsInput = {
        id?: string;
        publishableKey: string;
        secretKey: string;
        name: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        owner: UserCreateNestedOneWithoutApplicationsInput;
        users?: AppUserCreateNestedManyWithoutApplicationInput;
        sessions?: AppUserSessionCreateNestedManyWithoutApplicationInput;
        emails?: AppUserEmailCreateNestedManyWithoutApplicationInput;
        oauthAccounts?: AppUserOAuthAccountCreateNestedManyWithoutApplicationInput;
    };

    export type ApplicationUncheckedCreateWithoutAccountsInput = {
        id?: string;
        ownerId: string;
        publishableKey: string;
        secretKey: string;
        name: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        users?: AppUserUncheckedCreateNestedManyWithoutApplicationInput;
        sessions?: AppUserSessionUncheckedCreateNestedManyWithoutApplicationInput;
        emails?: AppUserEmailUncheckedCreateNestedManyWithoutApplicationInput;
        oauthAccounts?: AppUserOAuthAccountUncheckedCreateNestedManyWithoutApplicationInput;
    };

    export type ApplicationCreateOrConnectWithoutAccountsInput = {
        where: ApplicationWhereUniqueInput;
        create: XOR<
            ApplicationCreateWithoutAccountsInput,
            ApplicationUncheckedCreateWithoutAccountsInput
        >;
    };

    export type AppUserCreateWithoutAccountsInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        application: ApplicationCreateNestedOneWithoutUsersInput;
    };

    export type AppUserUncheckedCreateWithoutAccountsInput = {
        id?: string;
        applicationId: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
    };

    export type AppUserCreateOrConnectWithoutAccountsInput = {
        where: AppUserWhereUniqueInput;
        create: XOR<AppUserCreateWithoutAccountsInput, AppUserUncheckedCreateWithoutAccountsInput>;
    };

    export type AppUserSessionCreateWithoutAccountInput = {
        id?: string;
        refreshTokenId: string;
        userAgent?: string;
        ipAddress?: string;
        expiresAt: Date | string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        application: ApplicationCreateNestedOneWithoutSessionsInput;
    };

    export type AppUserSessionUncheckedCreateWithoutAccountInput = {
        id?: string;
        refreshTokenId: string;
        userAgent?: string;
        ipAddress?: string;
        applicationId: string;
        expiresAt: Date | string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
    };

    export type AppUserSessionCreateOrConnectWithoutAccountInput = {
        where: AppUserSessionWhereUniqueInput;
        create: XOR<
            AppUserSessionCreateWithoutAccountInput,
            AppUserSessionUncheckedCreateWithoutAccountInput
        >;
    };

    export type AppUserSessionCreateManyAccountInputEnvelope = {
        data: AppUserSessionCreateManyAccountInput | AppUserSessionCreateManyAccountInput[];
        skipDuplicates?: boolean;
    };

    export type AppUserEmailCreateWithoutAccountInput = {
        id?: string;
        isVerified?: boolean;
        address: string;
        isPrimary: boolean;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        oauthAccounts?: AppUserOAuthAccountCreateNestedManyWithoutEmailInput;
        application: ApplicationCreateNestedOneWithoutEmailsInput;
    };

    export type AppUserEmailUncheckedCreateWithoutAccountInput = {
        id?: string;
        applicationId: string;
        isVerified?: boolean;
        address: string;
        isPrimary: boolean;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        oauthAccounts?: AppUserOAuthAccountUncheckedCreateNestedManyWithoutEmailInput;
    };

    export type AppUserEmailCreateOrConnectWithoutAccountInput = {
        where: AppUserEmailWhereUniqueInput;
        create: XOR<
            AppUserEmailCreateWithoutAccountInput,
            AppUserEmailUncheckedCreateWithoutAccountInput
        >;
    };

    export type AppUserEmailCreateManyAccountInputEnvelope = {
        data: AppUserEmailCreateManyAccountInput | AppUserEmailCreateManyAccountInput[];
        skipDuplicates?: boolean;
    };

    export type AppUserOAuthAccountCreateWithoutAccountInput = {
        id?: string;
        provider: $Enums.OAuthProvider;
        providerUserId: string;
        createdAt?: Date | string;
        email: AppUserEmailCreateNestedOneWithoutOauthAccountsInput;
        application: ApplicationCreateNestedOneWithoutOauthAccountsInput;
    };

    export type AppUserOAuthAccountUncheckedCreateWithoutAccountInput = {
        id?: string;
        applicationId: string;
        provider: $Enums.OAuthProvider;
        emailId: string;
        providerUserId: string;
        createdAt?: Date | string;
    };

    export type AppUserOAuthAccountCreateOrConnectWithoutAccountInput = {
        where: AppUserOAuthAccountWhereUniqueInput;
        create: XOR<
            AppUserOAuthAccountCreateWithoutAccountInput,
            AppUserOAuthAccountUncheckedCreateWithoutAccountInput
        >;
    };

    export type AppUserOAuthAccountCreateManyAccountInputEnvelope = {
        data:
            | AppUserOAuthAccountCreateManyAccountInput
            | AppUserOAuthAccountCreateManyAccountInput[];
        skipDuplicates?: boolean;
    };

    export type ApplicationUpsertWithoutAccountsInput = {
        update: XOR<
            ApplicationUpdateWithoutAccountsInput,
            ApplicationUncheckedUpdateWithoutAccountsInput
        >;
        create: XOR<
            ApplicationCreateWithoutAccountsInput,
            ApplicationUncheckedCreateWithoutAccountsInput
        >;
        where?: ApplicationWhereInput;
    };

    export type ApplicationUpdateToOneWithWhereWithoutAccountsInput = {
        where?: ApplicationWhereInput;
        data: XOR<
            ApplicationUpdateWithoutAccountsInput,
            ApplicationUncheckedUpdateWithoutAccountsInput
        >;
    };

    export type ApplicationUpdateWithoutAccountsInput = {
        id?: StringFieldUpdateOperationsInput | string;
        publishableKey?: StringFieldUpdateOperationsInput | string;
        secretKey?: StringFieldUpdateOperationsInput | string;
        name?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        owner?: UserUpdateOneRequiredWithoutApplicationsNestedInput;
        users?: AppUserUpdateManyWithoutApplicationNestedInput;
        sessions?: AppUserSessionUpdateManyWithoutApplicationNestedInput;
        emails?: AppUserEmailUpdateManyWithoutApplicationNestedInput;
        oauthAccounts?: AppUserOAuthAccountUpdateManyWithoutApplicationNestedInput;
    };

    export type ApplicationUncheckedUpdateWithoutAccountsInput = {
        id?: StringFieldUpdateOperationsInput | string;
        ownerId?: StringFieldUpdateOperationsInput | string;
        publishableKey?: StringFieldUpdateOperationsInput | string;
        secretKey?: StringFieldUpdateOperationsInput | string;
        name?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        users?: AppUserUncheckedUpdateManyWithoutApplicationNestedInput;
        sessions?: AppUserSessionUncheckedUpdateManyWithoutApplicationNestedInput;
        emails?: AppUserEmailUncheckedUpdateManyWithoutApplicationNestedInput;
        oauthAccounts?: AppUserOAuthAccountUncheckedUpdateManyWithoutApplicationNestedInput;
    };

    export type AppUserUpsertWithoutAccountsInput = {
        update: XOR<AppUserUpdateWithoutAccountsInput, AppUserUncheckedUpdateWithoutAccountsInput>;
        create: XOR<AppUserCreateWithoutAccountsInput, AppUserUncheckedCreateWithoutAccountsInput>;
        where?: AppUserWhereInput;
    };

    export type AppUserUpdateToOneWithWhereWithoutAccountsInput = {
        where?: AppUserWhereInput;
        data: XOR<AppUserUpdateWithoutAccountsInput, AppUserUncheckedUpdateWithoutAccountsInput>;
    };

    export type AppUserUpdateWithoutAccountsInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        application?: ApplicationUpdateOneRequiredWithoutUsersNestedInput;
    };

    export type AppUserUncheckedUpdateWithoutAccountsInput = {
        id?: StringFieldUpdateOperationsInput | string;
        applicationId?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type AppUserSessionUpsertWithWhereUniqueWithoutAccountInput = {
        where: AppUserSessionWhereUniqueInput;
        update: XOR<
            AppUserSessionUpdateWithoutAccountInput,
            AppUserSessionUncheckedUpdateWithoutAccountInput
        >;
        create: XOR<
            AppUserSessionCreateWithoutAccountInput,
            AppUserSessionUncheckedCreateWithoutAccountInput
        >;
    };

    export type AppUserSessionUpdateWithWhereUniqueWithoutAccountInput = {
        where: AppUserSessionWhereUniqueInput;
        data: XOR<
            AppUserSessionUpdateWithoutAccountInput,
            AppUserSessionUncheckedUpdateWithoutAccountInput
        >;
    };

    export type AppUserSessionUpdateManyWithWhereWithoutAccountInput = {
        where: AppUserSessionScalarWhereInput;
        data: XOR<
            AppUserSessionUpdateManyMutationInput,
            AppUserSessionUncheckedUpdateManyWithoutAccountInput
        >;
    };

    export type AppUserEmailUpsertWithWhereUniqueWithoutAccountInput = {
        where: AppUserEmailWhereUniqueInput;
        update: XOR<
            AppUserEmailUpdateWithoutAccountInput,
            AppUserEmailUncheckedUpdateWithoutAccountInput
        >;
        create: XOR<
            AppUserEmailCreateWithoutAccountInput,
            AppUserEmailUncheckedCreateWithoutAccountInput
        >;
    };

    export type AppUserEmailUpdateWithWhereUniqueWithoutAccountInput = {
        where: AppUserEmailWhereUniqueInput;
        data: XOR<
            AppUserEmailUpdateWithoutAccountInput,
            AppUserEmailUncheckedUpdateWithoutAccountInput
        >;
    };

    export type AppUserEmailUpdateManyWithWhereWithoutAccountInput = {
        where: AppUserEmailScalarWhereInput;
        data: XOR<
            AppUserEmailUpdateManyMutationInput,
            AppUserEmailUncheckedUpdateManyWithoutAccountInput
        >;
    };

    export type AppUserOAuthAccountUpsertWithWhereUniqueWithoutAccountInput = {
        where: AppUserOAuthAccountWhereUniqueInput;
        update: XOR<
            AppUserOAuthAccountUpdateWithoutAccountInput,
            AppUserOAuthAccountUncheckedUpdateWithoutAccountInput
        >;
        create: XOR<
            AppUserOAuthAccountCreateWithoutAccountInput,
            AppUserOAuthAccountUncheckedCreateWithoutAccountInput
        >;
    };

    export type AppUserOAuthAccountUpdateWithWhereUniqueWithoutAccountInput = {
        where: AppUserOAuthAccountWhereUniqueInput;
        data: XOR<
            AppUserOAuthAccountUpdateWithoutAccountInput,
            AppUserOAuthAccountUncheckedUpdateWithoutAccountInput
        >;
    };

    export type AppUserOAuthAccountUpdateManyWithWhereWithoutAccountInput = {
        where: AppUserOAuthAccountScalarWhereInput;
        data: XOR<
            AppUserOAuthAccountUpdateManyMutationInput,
            AppUserOAuthAccountUncheckedUpdateManyWithoutAccountInput
        >;
    };

    export type AppUserOAuthAccountCreateWithoutEmailInput = {
        id?: string;
        provider: $Enums.OAuthProvider;
        providerUserId: string;
        createdAt?: Date | string;
        application: ApplicationCreateNestedOneWithoutOauthAccountsInput;
        account: AppUserAccountCreateNestedOneWithoutOauthAccountsInput;
    };

    export type AppUserOAuthAccountUncheckedCreateWithoutEmailInput = {
        id?: string;
        applicationId: string;
        provider: $Enums.OAuthProvider;
        providerUserId: string;
        accountId: string;
        createdAt?: Date | string;
    };

    export type AppUserOAuthAccountCreateOrConnectWithoutEmailInput = {
        where: AppUserOAuthAccountWhereUniqueInput;
        create: XOR<
            AppUserOAuthAccountCreateWithoutEmailInput,
            AppUserOAuthAccountUncheckedCreateWithoutEmailInput
        >;
    };

    export type AppUserOAuthAccountCreateManyEmailInputEnvelope = {
        data: AppUserOAuthAccountCreateManyEmailInput | AppUserOAuthAccountCreateManyEmailInput[];
        skipDuplicates?: boolean;
    };

    export type AppUserAccountCreateWithoutEmailsInput = {
        id?: string;
        username?: string | null;
        lastName?: string | null;
        imageUrl?: string | null;
        firstName?: string | null;
        passwordHash?: string | null;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        application: ApplicationCreateNestedOneWithoutAccountsInput;
        user: AppUserCreateNestedOneWithoutAccountsInput;
        sessions?: AppUserSessionCreateNestedManyWithoutAccountInput;
        oauthAccounts?: AppUserOAuthAccountCreateNestedManyWithoutAccountInput;
    };

    export type AppUserAccountUncheckedCreateWithoutEmailsInput = {
        id?: string;
        applicationId: string;
        username?: string | null;
        lastName?: string | null;
        imageUrl?: string | null;
        firstName?: string | null;
        userId: string;
        passwordHash?: string | null;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        sessions?: AppUserSessionUncheckedCreateNestedManyWithoutAccountInput;
        oauthAccounts?: AppUserOAuthAccountUncheckedCreateNestedManyWithoutAccountInput;
    };

    export type AppUserAccountCreateOrConnectWithoutEmailsInput = {
        where: AppUserAccountWhereUniqueInput;
        create: XOR<
            AppUserAccountCreateWithoutEmailsInput,
            AppUserAccountUncheckedCreateWithoutEmailsInput
        >;
    };

    export type ApplicationCreateWithoutEmailsInput = {
        id?: string;
        publishableKey: string;
        secretKey: string;
        name: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        owner: UserCreateNestedOneWithoutApplicationsInput;
        accounts?: AppUserAccountCreateNestedManyWithoutApplicationInput;
        users?: AppUserCreateNestedManyWithoutApplicationInput;
        sessions?: AppUserSessionCreateNestedManyWithoutApplicationInput;
        oauthAccounts?: AppUserOAuthAccountCreateNestedManyWithoutApplicationInput;
    };

    export type ApplicationUncheckedCreateWithoutEmailsInput = {
        id?: string;
        ownerId: string;
        publishableKey: string;
        secretKey: string;
        name: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        accounts?: AppUserAccountUncheckedCreateNestedManyWithoutApplicationInput;
        users?: AppUserUncheckedCreateNestedManyWithoutApplicationInput;
        sessions?: AppUserSessionUncheckedCreateNestedManyWithoutApplicationInput;
        oauthAccounts?: AppUserOAuthAccountUncheckedCreateNestedManyWithoutApplicationInput;
    };

    export type ApplicationCreateOrConnectWithoutEmailsInput = {
        where: ApplicationWhereUniqueInput;
        create: XOR<
            ApplicationCreateWithoutEmailsInput,
            ApplicationUncheckedCreateWithoutEmailsInput
        >;
    };

    export type AppUserOAuthAccountUpsertWithWhereUniqueWithoutEmailInput = {
        where: AppUserOAuthAccountWhereUniqueInput;
        update: XOR<
            AppUserOAuthAccountUpdateWithoutEmailInput,
            AppUserOAuthAccountUncheckedUpdateWithoutEmailInput
        >;
        create: XOR<
            AppUserOAuthAccountCreateWithoutEmailInput,
            AppUserOAuthAccountUncheckedCreateWithoutEmailInput
        >;
    };

    export type AppUserOAuthAccountUpdateWithWhereUniqueWithoutEmailInput = {
        where: AppUserOAuthAccountWhereUniqueInput;
        data: XOR<
            AppUserOAuthAccountUpdateWithoutEmailInput,
            AppUserOAuthAccountUncheckedUpdateWithoutEmailInput
        >;
    };

    export type AppUserOAuthAccountUpdateManyWithWhereWithoutEmailInput = {
        where: AppUserOAuthAccountScalarWhereInput;
        data: XOR<
            AppUserOAuthAccountUpdateManyMutationInput,
            AppUserOAuthAccountUncheckedUpdateManyWithoutEmailInput
        >;
    };

    export type AppUserAccountUpsertWithoutEmailsInput = {
        update: XOR<
            AppUserAccountUpdateWithoutEmailsInput,
            AppUserAccountUncheckedUpdateWithoutEmailsInput
        >;
        create: XOR<
            AppUserAccountCreateWithoutEmailsInput,
            AppUserAccountUncheckedCreateWithoutEmailsInput
        >;
        where?: AppUserAccountWhereInput;
    };

    export type AppUserAccountUpdateToOneWithWhereWithoutEmailsInput = {
        where?: AppUserAccountWhereInput;
        data: XOR<
            AppUserAccountUpdateWithoutEmailsInput,
            AppUserAccountUncheckedUpdateWithoutEmailsInput
        >;
    };

    export type AppUserAccountUpdateWithoutEmailsInput = {
        id?: StringFieldUpdateOperationsInput | string;
        username?: NullableStringFieldUpdateOperationsInput | string | null;
        lastName?: NullableStringFieldUpdateOperationsInput | string | null;
        imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
        firstName?: NullableStringFieldUpdateOperationsInput | string | null;
        passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        application?: ApplicationUpdateOneRequiredWithoutAccountsNestedInput;
        user?: AppUserUpdateOneRequiredWithoutAccountsNestedInput;
        sessions?: AppUserSessionUpdateManyWithoutAccountNestedInput;
        oauthAccounts?: AppUserOAuthAccountUpdateManyWithoutAccountNestedInput;
    };

    export type AppUserAccountUncheckedUpdateWithoutEmailsInput = {
        id?: StringFieldUpdateOperationsInput | string;
        applicationId?: StringFieldUpdateOperationsInput | string;
        username?: NullableStringFieldUpdateOperationsInput | string | null;
        lastName?: NullableStringFieldUpdateOperationsInput | string | null;
        imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
        firstName?: NullableStringFieldUpdateOperationsInput | string | null;
        userId?: StringFieldUpdateOperationsInput | string;
        passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        sessions?: AppUserSessionUncheckedUpdateManyWithoutAccountNestedInput;
        oauthAccounts?: AppUserOAuthAccountUncheckedUpdateManyWithoutAccountNestedInput;
    };

    export type ApplicationUpsertWithoutEmailsInput = {
        update: XOR<
            ApplicationUpdateWithoutEmailsInput,
            ApplicationUncheckedUpdateWithoutEmailsInput
        >;
        create: XOR<
            ApplicationCreateWithoutEmailsInput,
            ApplicationUncheckedCreateWithoutEmailsInput
        >;
        where?: ApplicationWhereInput;
    };

    export type ApplicationUpdateToOneWithWhereWithoutEmailsInput = {
        where?: ApplicationWhereInput;
        data: XOR<
            ApplicationUpdateWithoutEmailsInput,
            ApplicationUncheckedUpdateWithoutEmailsInput
        >;
    };

    export type ApplicationUpdateWithoutEmailsInput = {
        id?: StringFieldUpdateOperationsInput | string;
        publishableKey?: StringFieldUpdateOperationsInput | string;
        secretKey?: StringFieldUpdateOperationsInput | string;
        name?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        owner?: UserUpdateOneRequiredWithoutApplicationsNestedInput;
        accounts?: AppUserAccountUpdateManyWithoutApplicationNestedInput;
        users?: AppUserUpdateManyWithoutApplicationNestedInput;
        sessions?: AppUserSessionUpdateManyWithoutApplicationNestedInput;
        oauthAccounts?: AppUserOAuthAccountUpdateManyWithoutApplicationNestedInput;
    };

    export type ApplicationUncheckedUpdateWithoutEmailsInput = {
        id?: StringFieldUpdateOperationsInput | string;
        ownerId?: StringFieldUpdateOperationsInput | string;
        publishableKey?: StringFieldUpdateOperationsInput | string;
        secretKey?: StringFieldUpdateOperationsInput | string;
        name?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        accounts?: AppUserAccountUncheckedUpdateManyWithoutApplicationNestedInput;
        users?: AppUserUncheckedUpdateManyWithoutApplicationNestedInput;
        sessions?: AppUserSessionUncheckedUpdateManyWithoutApplicationNestedInput;
        oauthAccounts?: AppUserOAuthAccountUncheckedUpdateManyWithoutApplicationNestedInput;
    };

    export type AppUserAccountCreateWithoutSessionsInput = {
        id?: string;
        username?: string | null;
        lastName?: string | null;
        imageUrl?: string | null;
        firstName?: string | null;
        passwordHash?: string | null;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        application: ApplicationCreateNestedOneWithoutAccountsInput;
        user: AppUserCreateNestedOneWithoutAccountsInput;
        emails?: AppUserEmailCreateNestedManyWithoutAccountInput;
        oauthAccounts?: AppUserOAuthAccountCreateNestedManyWithoutAccountInput;
    };

    export type AppUserAccountUncheckedCreateWithoutSessionsInput = {
        id?: string;
        applicationId: string;
        username?: string | null;
        lastName?: string | null;
        imageUrl?: string | null;
        firstName?: string | null;
        userId: string;
        passwordHash?: string | null;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        emails?: AppUserEmailUncheckedCreateNestedManyWithoutAccountInput;
        oauthAccounts?: AppUserOAuthAccountUncheckedCreateNestedManyWithoutAccountInput;
    };

    export type AppUserAccountCreateOrConnectWithoutSessionsInput = {
        where: AppUserAccountWhereUniqueInput;
        create: XOR<
            AppUserAccountCreateWithoutSessionsInput,
            AppUserAccountUncheckedCreateWithoutSessionsInput
        >;
    };

    export type ApplicationCreateWithoutSessionsInput = {
        id?: string;
        publishableKey: string;
        secretKey: string;
        name: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        owner: UserCreateNestedOneWithoutApplicationsInput;
        accounts?: AppUserAccountCreateNestedManyWithoutApplicationInput;
        users?: AppUserCreateNestedManyWithoutApplicationInput;
        emails?: AppUserEmailCreateNestedManyWithoutApplicationInput;
        oauthAccounts?: AppUserOAuthAccountCreateNestedManyWithoutApplicationInput;
    };

    export type ApplicationUncheckedCreateWithoutSessionsInput = {
        id?: string;
        ownerId: string;
        publishableKey: string;
        secretKey: string;
        name: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        accounts?: AppUserAccountUncheckedCreateNestedManyWithoutApplicationInput;
        users?: AppUserUncheckedCreateNestedManyWithoutApplicationInput;
        emails?: AppUserEmailUncheckedCreateNestedManyWithoutApplicationInput;
        oauthAccounts?: AppUserOAuthAccountUncheckedCreateNestedManyWithoutApplicationInput;
    };

    export type ApplicationCreateOrConnectWithoutSessionsInput = {
        where: ApplicationWhereUniqueInput;
        create: XOR<
            ApplicationCreateWithoutSessionsInput,
            ApplicationUncheckedCreateWithoutSessionsInput
        >;
    };

    export type AppUserAccountUpsertWithoutSessionsInput = {
        update: XOR<
            AppUserAccountUpdateWithoutSessionsInput,
            AppUserAccountUncheckedUpdateWithoutSessionsInput
        >;
        create: XOR<
            AppUserAccountCreateWithoutSessionsInput,
            AppUserAccountUncheckedCreateWithoutSessionsInput
        >;
        where?: AppUserAccountWhereInput;
    };

    export type AppUserAccountUpdateToOneWithWhereWithoutSessionsInput = {
        where?: AppUserAccountWhereInput;
        data: XOR<
            AppUserAccountUpdateWithoutSessionsInput,
            AppUserAccountUncheckedUpdateWithoutSessionsInput
        >;
    };

    export type AppUserAccountUpdateWithoutSessionsInput = {
        id?: StringFieldUpdateOperationsInput | string;
        username?: NullableStringFieldUpdateOperationsInput | string | null;
        lastName?: NullableStringFieldUpdateOperationsInput | string | null;
        imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
        firstName?: NullableStringFieldUpdateOperationsInput | string | null;
        passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        application?: ApplicationUpdateOneRequiredWithoutAccountsNestedInput;
        user?: AppUserUpdateOneRequiredWithoutAccountsNestedInput;
        emails?: AppUserEmailUpdateManyWithoutAccountNestedInput;
        oauthAccounts?: AppUserOAuthAccountUpdateManyWithoutAccountNestedInput;
    };

    export type AppUserAccountUncheckedUpdateWithoutSessionsInput = {
        id?: StringFieldUpdateOperationsInput | string;
        applicationId?: StringFieldUpdateOperationsInput | string;
        username?: NullableStringFieldUpdateOperationsInput | string | null;
        lastName?: NullableStringFieldUpdateOperationsInput | string | null;
        imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
        firstName?: NullableStringFieldUpdateOperationsInput | string | null;
        userId?: StringFieldUpdateOperationsInput | string;
        passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        emails?: AppUserEmailUncheckedUpdateManyWithoutAccountNestedInput;
        oauthAccounts?: AppUserOAuthAccountUncheckedUpdateManyWithoutAccountNestedInput;
    };

    export type ApplicationUpsertWithoutSessionsInput = {
        update: XOR<
            ApplicationUpdateWithoutSessionsInput,
            ApplicationUncheckedUpdateWithoutSessionsInput
        >;
        create: XOR<
            ApplicationCreateWithoutSessionsInput,
            ApplicationUncheckedCreateWithoutSessionsInput
        >;
        where?: ApplicationWhereInput;
    };

    export type ApplicationUpdateToOneWithWhereWithoutSessionsInput = {
        where?: ApplicationWhereInput;
        data: XOR<
            ApplicationUpdateWithoutSessionsInput,
            ApplicationUncheckedUpdateWithoutSessionsInput
        >;
    };

    export type ApplicationUpdateWithoutSessionsInput = {
        id?: StringFieldUpdateOperationsInput | string;
        publishableKey?: StringFieldUpdateOperationsInput | string;
        secretKey?: StringFieldUpdateOperationsInput | string;
        name?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        owner?: UserUpdateOneRequiredWithoutApplicationsNestedInput;
        accounts?: AppUserAccountUpdateManyWithoutApplicationNestedInput;
        users?: AppUserUpdateManyWithoutApplicationNestedInput;
        emails?: AppUserEmailUpdateManyWithoutApplicationNestedInput;
        oauthAccounts?: AppUserOAuthAccountUpdateManyWithoutApplicationNestedInput;
    };

    export type ApplicationUncheckedUpdateWithoutSessionsInput = {
        id?: StringFieldUpdateOperationsInput | string;
        ownerId?: StringFieldUpdateOperationsInput | string;
        publishableKey?: StringFieldUpdateOperationsInput | string;
        secretKey?: StringFieldUpdateOperationsInput | string;
        name?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        accounts?: AppUserAccountUncheckedUpdateManyWithoutApplicationNestedInput;
        users?: AppUserUncheckedUpdateManyWithoutApplicationNestedInput;
        emails?: AppUserEmailUncheckedUpdateManyWithoutApplicationNestedInput;
        oauthAccounts?: AppUserOAuthAccountUncheckedUpdateManyWithoutApplicationNestedInput;
    };

    export type AppUserEmailCreateWithoutOauthAccountsInput = {
        id?: string;
        isVerified?: boolean;
        address: string;
        isPrimary: boolean;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        account: AppUserAccountCreateNestedOneWithoutEmailsInput;
        application: ApplicationCreateNestedOneWithoutEmailsInput;
    };

    export type AppUserEmailUncheckedCreateWithoutOauthAccountsInput = {
        id?: string;
        accountId: string;
        applicationId: string;
        isVerified?: boolean;
        address: string;
        isPrimary: boolean;
        createdAt?: Date | string;
        updatedAt?: Date | string;
    };

    export type AppUserEmailCreateOrConnectWithoutOauthAccountsInput = {
        where: AppUserEmailWhereUniqueInput;
        create: XOR<
            AppUserEmailCreateWithoutOauthAccountsInput,
            AppUserEmailUncheckedCreateWithoutOauthAccountsInput
        >;
    };

    export type ApplicationCreateWithoutOauthAccountsInput = {
        id?: string;
        publishableKey: string;
        secretKey: string;
        name: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        owner: UserCreateNestedOneWithoutApplicationsInput;
        accounts?: AppUserAccountCreateNestedManyWithoutApplicationInput;
        users?: AppUserCreateNestedManyWithoutApplicationInput;
        sessions?: AppUserSessionCreateNestedManyWithoutApplicationInput;
        emails?: AppUserEmailCreateNestedManyWithoutApplicationInput;
    };

    export type ApplicationUncheckedCreateWithoutOauthAccountsInput = {
        id?: string;
        ownerId: string;
        publishableKey: string;
        secretKey: string;
        name: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        accounts?: AppUserAccountUncheckedCreateNestedManyWithoutApplicationInput;
        users?: AppUserUncheckedCreateNestedManyWithoutApplicationInput;
        sessions?: AppUserSessionUncheckedCreateNestedManyWithoutApplicationInput;
        emails?: AppUserEmailUncheckedCreateNestedManyWithoutApplicationInput;
    };

    export type ApplicationCreateOrConnectWithoutOauthAccountsInput = {
        where: ApplicationWhereUniqueInput;
        create: XOR<
            ApplicationCreateWithoutOauthAccountsInput,
            ApplicationUncheckedCreateWithoutOauthAccountsInput
        >;
    };

    export type AppUserAccountCreateWithoutOauthAccountsInput = {
        id?: string;
        username?: string | null;
        lastName?: string | null;
        imageUrl?: string | null;
        firstName?: string | null;
        passwordHash?: string | null;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        application: ApplicationCreateNestedOneWithoutAccountsInput;
        user: AppUserCreateNestedOneWithoutAccountsInput;
        sessions?: AppUserSessionCreateNestedManyWithoutAccountInput;
        emails?: AppUserEmailCreateNestedManyWithoutAccountInput;
    };

    export type AppUserAccountUncheckedCreateWithoutOauthAccountsInput = {
        id?: string;
        applicationId: string;
        username?: string | null;
        lastName?: string | null;
        imageUrl?: string | null;
        firstName?: string | null;
        userId: string;
        passwordHash?: string | null;
        createdAt?: Date | string;
        updatedAt?: Date | string;
        sessions?: AppUserSessionUncheckedCreateNestedManyWithoutAccountInput;
        emails?: AppUserEmailUncheckedCreateNestedManyWithoutAccountInput;
    };

    export type AppUserAccountCreateOrConnectWithoutOauthAccountsInput = {
        where: AppUserAccountWhereUniqueInput;
        create: XOR<
            AppUserAccountCreateWithoutOauthAccountsInput,
            AppUserAccountUncheckedCreateWithoutOauthAccountsInput
        >;
    };

    export type AppUserEmailUpsertWithoutOauthAccountsInput = {
        update: XOR<
            AppUserEmailUpdateWithoutOauthAccountsInput,
            AppUserEmailUncheckedUpdateWithoutOauthAccountsInput
        >;
        create: XOR<
            AppUserEmailCreateWithoutOauthAccountsInput,
            AppUserEmailUncheckedCreateWithoutOauthAccountsInput
        >;
        where?: AppUserEmailWhereInput;
    };

    export type AppUserEmailUpdateToOneWithWhereWithoutOauthAccountsInput = {
        where?: AppUserEmailWhereInput;
        data: XOR<
            AppUserEmailUpdateWithoutOauthAccountsInput,
            AppUserEmailUncheckedUpdateWithoutOauthAccountsInput
        >;
    };

    export type AppUserEmailUpdateWithoutOauthAccountsInput = {
        id?: StringFieldUpdateOperationsInput | string;
        isVerified?: BoolFieldUpdateOperationsInput | boolean;
        address?: StringFieldUpdateOperationsInput | string;
        isPrimary?: BoolFieldUpdateOperationsInput | boolean;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        account?: AppUserAccountUpdateOneRequiredWithoutEmailsNestedInput;
        application?: ApplicationUpdateOneRequiredWithoutEmailsNestedInput;
    };

    export type AppUserEmailUncheckedUpdateWithoutOauthAccountsInput = {
        id?: StringFieldUpdateOperationsInput | string;
        accountId?: StringFieldUpdateOperationsInput | string;
        applicationId?: StringFieldUpdateOperationsInput | string;
        isVerified?: BoolFieldUpdateOperationsInput | boolean;
        address?: StringFieldUpdateOperationsInput | string;
        isPrimary?: BoolFieldUpdateOperationsInput | boolean;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type ApplicationUpsertWithoutOauthAccountsInput = {
        update: XOR<
            ApplicationUpdateWithoutOauthAccountsInput,
            ApplicationUncheckedUpdateWithoutOauthAccountsInput
        >;
        create: XOR<
            ApplicationCreateWithoutOauthAccountsInput,
            ApplicationUncheckedCreateWithoutOauthAccountsInput
        >;
        where?: ApplicationWhereInput;
    };

    export type ApplicationUpdateToOneWithWhereWithoutOauthAccountsInput = {
        where?: ApplicationWhereInput;
        data: XOR<
            ApplicationUpdateWithoutOauthAccountsInput,
            ApplicationUncheckedUpdateWithoutOauthAccountsInput
        >;
    };

    export type ApplicationUpdateWithoutOauthAccountsInput = {
        id?: StringFieldUpdateOperationsInput | string;
        publishableKey?: StringFieldUpdateOperationsInput | string;
        secretKey?: StringFieldUpdateOperationsInput | string;
        name?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        owner?: UserUpdateOneRequiredWithoutApplicationsNestedInput;
        accounts?: AppUserAccountUpdateManyWithoutApplicationNestedInput;
        users?: AppUserUpdateManyWithoutApplicationNestedInput;
        sessions?: AppUserSessionUpdateManyWithoutApplicationNestedInput;
        emails?: AppUserEmailUpdateManyWithoutApplicationNestedInput;
    };

    export type ApplicationUncheckedUpdateWithoutOauthAccountsInput = {
        id?: StringFieldUpdateOperationsInput | string;
        ownerId?: StringFieldUpdateOperationsInput | string;
        publishableKey?: StringFieldUpdateOperationsInput | string;
        secretKey?: StringFieldUpdateOperationsInput | string;
        name?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        accounts?: AppUserAccountUncheckedUpdateManyWithoutApplicationNestedInput;
        users?: AppUserUncheckedUpdateManyWithoutApplicationNestedInput;
        sessions?: AppUserSessionUncheckedUpdateManyWithoutApplicationNestedInput;
        emails?: AppUserEmailUncheckedUpdateManyWithoutApplicationNestedInput;
    };

    export type AppUserAccountUpsertWithoutOauthAccountsInput = {
        update: XOR<
            AppUserAccountUpdateWithoutOauthAccountsInput,
            AppUserAccountUncheckedUpdateWithoutOauthAccountsInput
        >;
        create: XOR<
            AppUserAccountCreateWithoutOauthAccountsInput,
            AppUserAccountUncheckedCreateWithoutOauthAccountsInput
        >;
        where?: AppUserAccountWhereInput;
    };

    export type AppUserAccountUpdateToOneWithWhereWithoutOauthAccountsInput = {
        where?: AppUserAccountWhereInput;
        data: XOR<
            AppUserAccountUpdateWithoutOauthAccountsInput,
            AppUserAccountUncheckedUpdateWithoutOauthAccountsInput
        >;
    };

    export type AppUserAccountUpdateWithoutOauthAccountsInput = {
        id?: StringFieldUpdateOperationsInput | string;
        username?: NullableStringFieldUpdateOperationsInput | string | null;
        lastName?: NullableStringFieldUpdateOperationsInput | string | null;
        imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
        firstName?: NullableStringFieldUpdateOperationsInput | string | null;
        passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        application?: ApplicationUpdateOneRequiredWithoutAccountsNestedInput;
        user?: AppUserUpdateOneRequiredWithoutAccountsNestedInput;
        sessions?: AppUserSessionUpdateManyWithoutAccountNestedInput;
        emails?: AppUserEmailUpdateManyWithoutAccountNestedInput;
    };

    export type AppUserAccountUncheckedUpdateWithoutOauthAccountsInput = {
        id?: StringFieldUpdateOperationsInput | string;
        applicationId?: StringFieldUpdateOperationsInput | string;
        username?: NullableStringFieldUpdateOperationsInput | string | null;
        lastName?: NullableStringFieldUpdateOperationsInput | string | null;
        imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
        firstName?: NullableStringFieldUpdateOperationsInput | string | null;
        userId?: StringFieldUpdateOperationsInput | string;
        passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        sessions?: AppUserSessionUncheckedUpdateManyWithoutAccountNestedInput;
        emails?: AppUserEmailUncheckedUpdateManyWithoutAccountNestedInput;
    };

    export type ApplicationCreateManyOwnerInput = {
        id?: string;
        publishableKey: string;
        secretKey: string;
        name: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
    };

    export type CliSessionCreateManyUserInput = {
        id?: string;
        tokenHash: string;
        createdAt?: Date | string;
    };

    export type ApplicationUpdateWithoutOwnerInput = {
        id?: StringFieldUpdateOperationsInput | string;
        publishableKey?: StringFieldUpdateOperationsInput | string;
        secretKey?: StringFieldUpdateOperationsInput | string;
        name?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        accounts?: AppUserAccountUpdateManyWithoutApplicationNestedInput;
        users?: AppUserUpdateManyWithoutApplicationNestedInput;
        sessions?: AppUserSessionUpdateManyWithoutApplicationNestedInput;
        emails?: AppUserEmailUpdateManyWithoutApplicationNestedInput;
        oauthAccounts?: AppUserOAuthAccountUpdateManyWithoutApplicationNestedInput;
    };

    export type ApplicationUncheckedUpdateWithoutOwnerInput = {
        id?: StringFieldUpdateOperationsInput | string;
        publishableKey?: StringFieldUpdateOperationsInput | string;
        secretKey?: StringFieldUpdateOperationsInput | string;
        name?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        accounts?: AppUserAccountUncheckedUpdateManyWithoutApplicationNestedInput;
        users?: AppUserUncheckedUpdateManyWithoutApplicationNestedInput;
        sessions?: AppUserSessionUncheckedUpdateManyWithoutApplicationNestedInput;
        emails?: AppUserEmailUncheckedUpdateManyWithoutApplicationNestedInput;
        oauthAccounts?: AppUserOAuthAccountUncheckedUpdateManyWithoutApplicationNestedInput;
    };

    export type ApplicationUncheckedUpdateManyWithoutOwnerInput = {
        id?: StringFieldUpdateOperationsInput | string;
        publishableKey?: StringFieldUpdateOperationsInput | string;
        secretKey?: StringFieldUpdateOperationsInput | string;
        name?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type CliSessionUpdateWithoutUserInput = {
        id?: StringFieldUpdateOperationsInput | string;
        tokenHash?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type CliSessionUncheckedUpdateWithoutUserInput = {
        id?: StringFieldUpdateOperationsInput | string;
        tokenHash?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type CliSessionUncheckedUpdateManyWithoutUserInput = {
        id?: StringFieldUpdateOperationsInput | string;
        tokenHash?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type AppUserAccountCreateManyApplicationInput = {
        id?: string;
        username?: string | null;
        lastName?: string | null;
        imageUrl?: string | null;
        firstName?: string | null;
        userId: string;
        passwordHash?: string | null;
        createdAt?: Date | string;
        updatedAt?: Date | string;
    };

    export type AppUserCreateManyApplicationInput = {
        id?: string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
    };

    export type AppUserSessionCreateManyApplicationInput = {
        id?: string;
        accountId: string;
        refreshTokenId: string;
        userAgent?: string;
        ipAddress?: string;
        expiresAt: Date | string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
    };

    export type AppUserEmailCreateManyApplicationInput = {
        id?: string;
        accountId: string;
        isVerified?: boolean;
        address: string;
        isPrimary: boolean;
        createdAt?: Date | string;
        updatedAt?: Date | string;
    };

    export type AppUserOAuthAccountCreateManyApplicationInput = {
        id?: string;
        provider: $Enums.OAuthProvider;
        emailId: string;
        providerUserId: string;
        accountId: string;
        createdAt?: Date | string;
    };

    export type AppUserAccountUpdateWithoutApplicationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        username?: NullableStringFieldUpdateOperationsInput | string | null;
        lastName?: NullableStringFieldUpdateOperationsInput | string | null;
        imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
        firstName?: NullableStringFieldUpdateOperationsInput | string | null;
        passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        user?: AppUserUpdateOneRequiredWithoutAccountsNestedInput;
        sessions?: AppUserSessionUpdateManyWithoutAccountNestedInput;
        emails?: AppUserEmailUpdateManyWithoutAccountNestedInput;
        oauthAccounts?: AppUserOAuthAccountUpdateManyWithoutAccountNestedInput;
    };

    export type AppUserAccountUncheckedUpdateWithoutApplicationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        username?: NullableStringFieldUpdateOperationsInput | string | null;
        lastName?: NullableStringFieldUpdateOperationsInput | string | null;
        imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
        firstName?: NullableStringFieldUpdateOperationsInput | string | null;
        userId?: StringFieldUpdateOperationsInput | string;
        passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        sessions?: AppUserSessionUncheckedUpdateManyWithoutAccountNestedInput;
        emails?: AppUserEmailUncheckedUpdateManyWithoutAccountNestedInput;
        oauthAccounts?: AppUserOAuthAccountUncheckedUpdateManyWithoutAccountNestedInput;
    };

    export type AppUserAccountUncheckedUpdateManyWithoutApplicationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        username?: NullableStringFieldUpdateOperationsInput | string | null;
        lastName?: NullableStringFieldUpdateOperationsInput | string | null;
        imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
        firstName?: NullableStringFieldUpdateOperationsInput | string | null;
        userId?: StringFieldUpdateOperationsInput | string;
        passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type AppUserUpdateWithoutApplicationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        accounts?: AppUserAccountUpdateManyWithoutUserNestedInput;
    };

    export type AppUserUncheckedUpdateWithoutApplicationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        accounts?: AppUserAccountUncheckedUpdateManyWithoutUserNestedInput;
    };

    export type AppUserUncheckedUpdateManyWithoutApplicationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type AppUserSessionUpdateWithoutApplicationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        refreshTokenId?: StringFieldUpdateOperationsInput | string;
        userAgent?: StringFieldUpdateOperationsInput | string;
        ipAddress?: StringFieldUpdateOperationsInput | string;
        expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        account?: AppUserAccountUpdateOneRequiredWithoutSessionsNestedInput;
    };

    export type AppUserSessionUncheckedUpdateWithoutApplicationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        accountId?: StringFieldUpdateOperationsInput | string;
        refreshTokenId?: StringFieldUpdateOperationsInput | string;
        userAgent?: StringFieldUpdateOperationsInput | string;
        ipAddress?: StringFieldUpdateOperationsInput | string;
        expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type AppUserSessionUncheckedUpdateManyWithoutApplicationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        accountId?: StringFieldUpdateOperationsInput | string;
        refreshTokenId?: StringFieldUpdateOperationsInput | string;
        userAgent?: StringFieldUpdateOperationsInput | string;
        ipAddress?: StringFieldUpdateOperationsInput | string;
        expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type AppUserEmailUpdateWithoutApplicationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        isVerified?: BoolFieldUpdateOperationsInput | boolean;
        address?: StringFieldUpdateOperationsInput | string;
        isPrimary?: BoolFieldUpdateOperationsInput | boolean;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        oauthAccounts?: AppUserOAuthAccountUpdateManyWithoutEmailNestedInput;
        account?: AppUserAccountUpdateOneRequiredWithoutEmailsNestedInput;
    };

    export type AppUserEmailUncheckedUpdateWithoutApplicationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        accountId?: StringFieldUpdateOperationsInput | string;
        isVerified?: BoolFieldUpdateOperationsInput | boolean;
        address?: StringFieldUpdateOperationsInput | string;
        isPrimary?: BoolFieldUpdateOperationsInput | boolean;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        oauthAccounts?: AppUserOAuthAccountUncheckedUpdateManyWithoutEmailNestedInput;
    };

    export type AppUserEmailUncheckedUpdateManyWithoutApplicationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        accountId?: StringFieldUpdateOperationsInput | string;
        isVerified?: BoolFieldUpdateOperationsInput | boolean;
        address?: StringFieldUpdateOperationsInput | string;
        isPrimary?: BoolFieldUpdateOperationsInput | boolean;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type AppUserOAuthAccountUpdateWithoutApplicationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        provider?: EnumOAuthProviderFieldUpdateOperationsInput | $Enums.OAuthProvider;
        providerUserId?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        email?: AppUserEmailUpdateOneRequiredWithoutOauthAccountsNestedInput;
        account?: AppUserAccountUpdateOneRequiredWithoutOauthAccountsNestedInput;
    };

    export type AppUserOAuthAccountUncheckedUpdateWithoutApplicationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        provider?: EnumOAuthProviderFieldUpdateOperationsInput | $Enums.OAuthProvider;
        emailId?: StringFieldUpdateOperationsInput | string;
        providerUserId?: StringFieldUpdateOperationsInput | string;
        accountId?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type AppUserOAuthAccountUncheckedUpdateManyWithoutApplicationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        provider?: EnumOAuthProviderFieldUpdateOperationsInput | $Enums.OAuthProvider;
        emailId?: StringFieldUpdateOperationsInput | string;
        providerUserId?: StringFieldUpdateOperationsInput | string;
        accountId?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type AppUserAccountCreateManyUserInput = {
        id?: string;
        applicationId: string;
        username?: string | null;
        lastName?: string | null;
        imageUrl?: string | null;
        firstName?: string | null;
        passwordHash?: string | null;
        createdAt?: Date | string;
        updatedAt?: Date | string;
    };

    export type AppUserAccountUpdateWithoutUserInput = {
        id?: StringFieldUpdateOperationsInput | string;
        username?: NullableStringFieldUpdateOperationsInput | string | null;
        lastName?: NullableStringFieldUpdateOperationsInput | string | null;
        imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
        firstName?: NullableStringFieldUpdateOperationsInput | string | null;
        passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        application?: ApplicationUpdateOneRequiredWithoutAccountsNestedInput;
        sessions?: AppUserSessionUpdateManyWithoutAccountNestedInput;
        emails?: AppUserEmailUpdateManyWithoutAccountNestedInput;
        oauthAccounts?: AppUserOAuthAccountUpdateManyWithoutAccountNestedInput;
    };

    export type AppUserAccountUncheckedUpdateWithoutUserInput = {
        id?: StringFieldUpdateOperationsInput | string;
        applicationId?: StringFieldUpdateOperationsInput | string;
        username?: NullableStringFieldUpdateOperationsInput | string | null;
        lastName?: NullableStringFieldUpdateOperationsInput | string | null;
        imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
        firstName?: NullableStringFieldUpdateOperationsInput | string | null;
        passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        sessions?: AppUserSessionUncheckedUpdateManyWithoutAccountNestedInput;
        emails?: AppUserEmailUncheckedUpdateManyWithoutAccountNestedInput;
        oauthAccounts?: AppUserOAuthAccountUncheckedUpdateManyWithoutAccountNestedInput;
    };

    export type AppUserAccountUncheckedUpdateManyWithoutUserInput = {
        id?: StringFieldUpdateOperationsInput | string;
        applicationId?: StringFieldUpdateOperationsInput | string;
        username?: NullableStringFieldUpdateOperationsInput | string | null;
        lastName?: NullableStringFieldUpdateOperationsInput | string | null;
        imageUrl?: NullableStringFieldUpdateOperationsInput | string | null;
        firstName?: NullableStringFieldUpdateOperationsInput | string | null;
        passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type AppUserSessionCreateManyAccountInput = {
        id?: string;
        refreshTokenId: string;
        userAgent?: string;
        ipAddress?: string;
        applicationId: string;
        expiresAt: Date | string;
        createdAt?: Date | string;
        updatedAt?: Date | string;
    };

    export type AppUserEmailCreateManyAccountInput = {
        id?: string;
        applicationId: string;
        isVerified?: boolean;
        address: string;
        isPrimary: boolean;
        createdAt?: Date | string;
        updatedAt?: Date | string;
    };

    export type AppUserOAuthAccountCreateManyAccountInput = {
        id?: string;
        applicationId: string;
        provider: $Enums.OAuthProvider;
        emailId: string;
        providerUserId: string;
        createdAt?: Date | string;
    };

    export type AppUserSessionUpdateWithoutAccountInput = {
        id?: StringFieldUpdateOperationsInput | string;
        refreshTokenId?: StringFieldUpdateOperationsInput | string;
        userAgent?: StringFieldUpdateOperationsInput | string;
        ipAddress?: StringFieldUpdateOperationsInput | string;
        expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        application?: ApplicationUpdateOneRequiredWithoutSessionsNestedInput;
    };

    export type AppUserSessionUncheckedUpdateWithoutAccountInput = {
        id?: StringFieldUpdateOperationsInput | string;
        refreshTokenId?: StringFieldUpdateOperationsInput | string;
        userAgent?: StringFieldUpdateOperationsInput | string;
        ipAddress?: StringFieldUpdateOperationsInput | string;
        applicationId?: StringFieldUpdateOperationsInput | string;
        expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type AppUserSessionUncheckedUpdateManyWithoutAccountInput = {
        id?: StringFieldUpdateOperationsInput | string;
        refreshTokenId?: StringFieldUpdateOperationsInput | string;
        userAgent?: StringFieldUpdateOperationsInput | string;
        ipAddress?: StringFieldUpdateOperationsInput | string;
        applicationId?: StringFieldUpdateOperationsInput | string;
        expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type AppUserEmailUpdateWithoutAccountInput = {
        id?: StringFieldUpdateOperationsInput | string;
        isVerified?: BoolFieldUpdateOperationsInput | boolean;
        address?: StringFieldUpdateOperationsInput | string;
        isPrimary?: BoolFieldUpdateOperationsInput | boolean;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        oauthAccounts?: AppUserOAuthAccountUpdateManyWithoutEmailNestedInput;
        application?: ApplicationUpdateOneRequiredWithoutEmailsNestedInput;
    };

    export type AppUserEmailUncheckedUpdateWithoutAccountInput = {
        id?: StringFieldUpdateOperationsInput | string;
        applicationId?: StringFieldUpdateOperationsInput | string;
        isVerified?: BoolFieldUpdateOperationsInput | boolean;
        address?: StringFieldUpdateOperationsInput | string;
        isPrimary?: BoolFieldUpdateOperationsInput | boolean;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        oauthAccounts?: AppUserOAuthAccountUncheckedUpdateManyWithoutEmailNestedInput;
    };

    export type AppUserEmailUncheckedUpdateManyWithoutAccountInput = {
        id?: StringFieldUpdateOperationsInput | string;
        applicationId?: StringFieldUpdateOperationsInput | string;
        isVerified?: BoolFieldUpdateOperationsInput | boolean;
        address?: StringFieldUpdateOperationsInput | string;
        isPrimary?: BoolFieldUpdateOperationsInput | boolean;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type AppUserOAuthAccountUpdateWithoutAccountInput = {
        id?: StringFieldUpdateOperationsInput | string;
        provider?: EnumOAuthProviderFieldUpdateOperationsInput | $Enums.OAuthProvider;
        providerUserId?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        email?: AppUserEmailUpdateOneRequiredWithoutOauthAccountsNestedInput;
        application?: ApplicationUpdateOneRequiredWithoutOauthAccountsNestedInput;
    };

    export type AppUserOAuthAccountUncheckedUpdateWithoutAccountInput = {
        id?: StringFieldUpdateOperationsInput | string;
        applicationId?: StringFieldUpdateOperationsInput | string;
        provider?: EnumOAuthProviderFieldUpdateOperationsInput | $Enums.OAuthProvider;
        emailId?: StringFieldUpdateOperationsInput | string;
        providerUserId?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type AppUserOAuthAccountUncheckedUpdateManyWithoutAccountInput = {
        id?: StringFieldUpdateOperationsInput | string;
        applicationId?: StringFieldUpdateOperationsInput | string;
        provider?: EnumOAuthProviderFieldUpdateOperationsInput | $Enums.OAuthProvider;
        emailId?: StringFieldUpdateOperationsInput | string;
        providerUserId?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type AppUserOAuthAccountCreateManyEmailInput = {
        id?: string;
        applicationId: string;
        provider: $Enums.OAuthProvider;
        providerUserId: string;
        accountId: string;
        createdAt?: Date | string;
    };

    export type AppUserOAuthAccountUpdateWithoutEmailInput = {
        id?: StringFieldUpdateOperationsInput | string;
        provider?: EnumOAuthProviderFieldUpdateOperationsInput | $Enums.OAuthProvider;
        providerUserId?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        application?: ApplicationUpdateOneRequiredWithoutOauthAccountsNestedInput;
        account?: AppUserAccountUpdateOneRequiredWithoutOauthAccountsNestedInput;
    };

    export type AppUserOAuthAccountUncheckedUpdateWithoutEmailInput = {
        id?: StringFieldUpdateOperationsInput | string;
        applicationId?: StringFieldUpdateOperationsInput | string;
        provider?: EnumOAuthProviderFieldUpdateOperationsInput | $Enums.OAuthProvider;
        providerUserId?: StringFieldUpdateOperationsInput | string;
        accountId?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type AppUserOAuthAccountUncheckedUpdateManyWithoutEmailInput = {
        id?: StringFieldUpdateOperationsInput | string;
        applicationId?: StringFieldUpdateOperationsInput | string;
        provider?: EnumOAuthProviderFieldUpdateOperationsInput | $Enums.OAuthProvider;
        providerUserId?: StringFieldUpdateOperationsInput | string;
        accountId?: StringFieldUpdateOperationsInput | string;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    /**
     * Batch Payload for updateMany & deleteMany & createMany
     */

    export type BatchPayload = {
        count: number;
    };

    /**
     * DMMF
     */
    export const dmmf: runtime.BaseDMMF;
}
