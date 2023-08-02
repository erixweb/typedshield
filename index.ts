export const t$ = {
	__value: "",
    __typoeof: "any",
    __maxlen: Infinity,

	get value() {
		return this.__value
	},

	set value(state) {
        if (this.__typoeof !== "any" && typeof state !== this.__typoeof) { 
            console.error(`State has a type of ${this.__typoeof} but you're assigning it a value of type ${typeof state}`) 
            return
        } else if (state.length > this.__maxlen) {
            console.error(`State has a maximum length of ${this.__maxlen} but you're assigning it a value of length ${state.length}`) 

            return
        }

		this.__value = state
	},
	string() {
        this.__typoeof = "string"
		return this
	},
	object() {
        this.__typoeof = "object"

		return this
	},
	number() {
		this.__typoeof = "number"

		return this
	},
	undefined() {
		this.__typoeof = "undefined"

		return this
	},
	boolean() {
		this.__typoeof = "boolean"

		return this
	},
    max(maximum: number) {
        this.__maxlen = maximum

		return this
    }
}
