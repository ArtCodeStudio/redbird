
declare class ReverseProxy {
  register(src: string | URL, target: string, opts: any);
}
declare const createProxy: (opts: any) => ReverseProxy;

export = createProxy;
