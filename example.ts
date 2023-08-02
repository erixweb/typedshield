import { t$ } from "./index.ts";

const user = t$.string().min(1).max(5)

user.value = 'Hellos'

console.log(user.value)