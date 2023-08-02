import { t$ } from "./index.ts";

const user = t$.string().max(5)

user.value = 'hello'

console.log(user.value)