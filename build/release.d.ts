declare namespace __AdaptedExports {
  /**
   * assembly/index/add
   * @param a `i32`
   * @param b `i32`
   * @returns `i32`
   */
  export function add(a: number, b: number): number;
  /**
   * assembly/index/hello
   * @param name `~lib/string/String`
   * @returns `~lib/string/String`
   */
  export function hello(name: string): string;
}
/** Instantiates the compiled WebAssembly module with the given imports. */
export declare function instantiate(module: WebAssembly.Module, imports: {
  env: unknown,
}): Promise<typeof __AdaptedExports>;
