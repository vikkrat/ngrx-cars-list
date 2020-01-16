export class Car {
  constructor(
    public name: string,
    public model: string,
    public date: string,
    public isSold: boolean = false,
    public id?: number
) {}
}
