/// <reference types="@cloudflare/workers-types" />

declare module 'bcryptjs' {
  export function hash(data: string, saltOrRounds: string | number): Promise<string>;
  export function compare(data: string, encrypted: string): Promise<boolean>;
}

declare global {
  interface Window {
    DB: D1Database;
  }
} 