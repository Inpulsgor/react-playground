class _Injector {
  private data: Map<string, unknown>;
  constructor() {
    this.data = new Map();
  }

  public get(key: string) {
    return this.data.get(key);
  }

  public set(key: string, value: unknown) {
    this.data.set(key, value);
  }
}

const Injector = new _Injector();

export default Injector;
