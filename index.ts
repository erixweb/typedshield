
export const t$ = {
	__value: "",
    __typoeof: [""],
    __maxlen: Infinity,
    __minlen: -Infinity,

	get value() {
		return this.__value
	},

    // no-explicit-any
	set value(state: any) {
        if (this.__typoeof.length > 1) {
            const filter = this.__typoeof.filter((type) => {
                return typeof state === type
            })
        
            if (filter.length === 0) {
                console.error(`State can be type of ${this.__typoeof} but you're assigning it a value of type ${typeof state}`) 

            return
            }
        }

        if (state.length > this.__maxlen) {
            console.error(`State has a maximum length of ${this.__maxlen} but you're assigning it a value of length ${state.length}`) 

            return
        } else if (state.length < this.__minlen) {
            console.error(`State has a minimum length of ${this.__minlen} but you're assigning it a value of length ${state.length}`) 

            return
        }

		this.__value = state
	},
	string() {
        this.__typoeof.push("string")

		return this
	},
	object() {
        this.__typoeof.push("object")

		return this
	},
	number() {
		this.__typoeof.push("number")

		return this
	},
	undefined() {
		this.__typoeof.push("undefined")

		return this
	},
	boolean() {
		this.__typoeof.push("boolean")

		return this
	},
    max(maximum: number) {
        this.__maxlen = maximum

		return this
    },
    min(minimum: number) {
        this.__minlen = minimum

		return this
    },
}
