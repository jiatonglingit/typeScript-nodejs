export class Repos {
  id: number
  name: string
  full_name: string
  size: number
  constructor(res: any) {
    this.id = res.id
    this.name = res.name
    this.full_name = res.full_name
    this.size = res.size
  }
}