declare function pascalToHyphenated(pascalName: string): string;
declare function pascalToUnderscore(pascalName: string): string;
declare function camelToHyphenated(camelName: string): string;
declare function camelToUnderscore(camelName: string): string;
declare function commifyNumber(number: number): string;
declare class StringBuilder {
    private _str;
    constructor(_str?: string);
    append(str: string): StringBuilder;
    appendLine(str: string, appendLineIfEmpty?: boolean): StringBuilder;
    toString(): string;
}
export { commifyNumber, pascalToHyphenated, pascalToUnderscore, camelToHyphenated, camelToUnderscore, StringBuilder, };
//# sourceMappingURL=index.d.ts.map