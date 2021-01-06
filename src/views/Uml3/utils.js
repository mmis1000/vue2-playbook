/**
 * @param {T} field 
 * @template {string} T
 * @returns {{ [key in T]: { get(): any, set(arg: any): void } }}
 */
export const createComputed = (field) => {
    const internalName = '_' + field
    return {
        [field]: {
            get () {
                return this.item[internalName]
            },
            set (value) {
                this.item[internalName] = value
            },
        }
    }
}