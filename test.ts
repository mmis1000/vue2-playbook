function a (a: number, b?: string) {

}

type argumentsOf<T> = T extends (...args: infer U) => any ? U : never

type a = argumentsOf<typeof a>

function wrapperA (c: string, ...args: argumentsOf<typeof a>) {

}

wrapperA()
