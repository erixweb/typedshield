import { t$ } from "./index.ts";

const user = t$.number().string().min(1).max(5)

user.value = 3

console.log(user.value)