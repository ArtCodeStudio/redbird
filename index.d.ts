declare module 'redbird' {
  class ReverseProxy {
    register(src: string | URL, target: string, opts: any);
  }
  const createProxy: (opts: any) => ReverseProxy;
  export = createProxy;
}
