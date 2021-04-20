export class InvalidTriangleSize extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidTriangleSize';
  }
}

export class InvalidTriangleConfiguration extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidTriangleConfiguration';
  }
}
