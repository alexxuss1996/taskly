import { get } from "./request";
export class HelloApiClient {
  static async getHello(): Promise<string> {
    return await get("/");
  }
}
