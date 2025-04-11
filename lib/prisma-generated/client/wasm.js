
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/wasm.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.MetricScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  path: 'path',
  userAgent: 'userAgent',
  metricDataId: 'metricDataId',
  connectionDataId: 'connectionDataId'
};

exports.Prisma.MetricDataScalarFieldEnum = {
  id: 'id',
  CLS: 'CLS',
  FCP: 'FCP',
  INP: 'INP',
  LCP: 'LCP',
  TTFB: 'TTFB',
  navigationTimingId: 'navigationTimingId'
};

exports.Prisma.NavigationTimingScalarFieldEnum = {
  id: 'id',
  domComplete: 'domComplete',
  domInteractive: 'domInteractive',
  domContentLoadedEventEnd: 'domContentLoadedEventEnd',
  loadEventEnd: 'loadEventEnd'
};

exports.Prisma.ConnectionDataScalarFieldEnum = {
  id: 'id',
  effectiveType: 'effectiveType',
  rtt: 'rtt',
  downlink: 'downlink'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  Metric: 'Metric',
  MetricData: 'MetricData',
  NavigationTiming: 'NavigationTiming',
  ConnectionData: 'ConnectionData'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/manglekuo/dev/nextjs/nextjs-hackathon-2025/lib/prisma-generated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
        "native": true
      }
    ],
    "previewFeatures": [
      "driverAdapters"
    ],
    "sourceFilePath": "/Users/manglekuo/dev/nextjs/nextjs-hackathon-2025/prisma/schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "datasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\ngenerator client {\n  provider        = \"prisma-client-js\"\n  output          = \"../lib/prisma-generated/client\"\n  previewFeatures = [\"driverAdapters\"]\n}\n\nmodel Metric {\n  id               String          @id @default(uuid())\n  createdAt        DateTime        @default(now())\n  path             String\n  userAgent        String\n  metrics          MetricData      @relation(fields: [metricDataId], references: [id])\n  metricDataId     String          @unique\n  connection       ConnectionData? @relation(fields: [connectionDataId], references: [id])\n  connectionDataId String?         @unique\n}\n\nmodel MetricData {\n  id                 String           @id @default(uuid())\n  CLS                Float?\n  FCP                Float?\n  INP                Float?\n  LCP                Float?\n  TTFB               Float?\n  navigationTiming   NavigationTiming @relation(fields: [navigationTimingId], references: [id])\n  navigationTimingId String           @unique\n  metric             Metric?\n}\n\nmodel NavigationTiming {\n  id                       String      @id @default(uuid())\n  domComplete              Float?\n  domInteractive           Float?\n  domContentLoadedEventEnd Float?\n  loadEventEnd             Float?\n  metricData               MetricData?\n}\n\nmodel ConnectionData {\n  id            String  @id @default(uuid())\n  effectiveType String?\n  rtt           Float?\n  downlink      Float?\n  metric        Metric?\n}\n",
  "inlineSchemaHash": "4187184fa986584aebc30cd58425dae71dea82cda5f96adc8acf9d0858e634bf",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Metric\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"path\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userAgent\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"metrics\",\"kind\":\"object\",\"type\":\"MetricData\",\"relationName\":\"MetricToMetricData\"},{\"name\":\"metricDataId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"connection\",\"kind\":\"object\",\"type\":\"ConnectionData\",\"relationName\":\"ConnectionDataToMetric\"},{\"name\":\"connectionDataId\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":null},\"MetricData\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"CLS\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"FCP\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"INP\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"LCP\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"TTFB\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"navigationTiming\",\"kind\":\"object\",\"type\":\"NavigationTiming\",\"relationName\":\"MetricDataToNavigationTiming\"},{\"name\":\"navigationTimingId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"metric\",\"kind\":\"object\",\"type\":\"Metric\",\"relationName\":\"MetricToMetricData\"}],\"dbName\":null},\"NavigationTiming\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"domComplete\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"domInteractive\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"domContentLoadedEventEnd\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"loadEventEnd\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"metricData\",\"kind\":\"object\",\"type\":\"MetricData\",\"relationName\":\"MetricDataToNavigationTiming\"}],\"dbName\":null},\"ConnectionData\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"effectiveType\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"rtt\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"downlink\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"metric\",\"kind\":\"object\",\"type\":\"Metric\",\"relationName\":\"ConnectionDataToMetric\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = {
  getRuntime: async () => require('./query_engine_bg.js'),
  getQueryEngineWasmModule: async () => {
    const loader = (await import('#wasm-engine-loader')).default
    const engine = (await loader).default
    return engine
  }
}
config.compilerWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

