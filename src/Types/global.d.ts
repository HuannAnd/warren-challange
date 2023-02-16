export {};

declare global {
  /**
   * Now declare things that go in the global namespace,
   * or augment existing declarations in the global namespace.
  */
 export type Func<T, TResult> = (item: T) => TResult
}