class Runner {
  constructor(args) {
    this.config = structuredClone(args);
  }
  
  execute() {
    throw new Error(`"${this.constructor.name}.execute()" is not implemented`);
  }
}

export default Runner;
