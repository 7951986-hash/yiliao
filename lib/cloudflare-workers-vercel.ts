// Vercel does not provide Cloudflare Worker bindings. This build-time shim
// keeps public pages deployable while getDb() fails closed for form writes.
export const env: { DB?: D1Database } = {};

interface D1Database {
  prepare(query: string): unknown;
}
