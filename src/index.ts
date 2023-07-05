function pascalToHyphenated(pascalName: string): string {
  return keysFromPascalCase(pascalName).join('-');
}

function pascalToUnderscore(pascalName: string): string {
  return keysFromPascalCase(pascalName).join('_');
}

function camelToHyphenated(camelName: string): string {
  return keysFromPascalCase(camelName).join('-');
}

function camelToUnderscore(camelName: string): string {
  return keysFromPascalCase(camelName).join('_');
}

function keysFromPascalCase(pascalName: string): Array<string> {
  let escaped = pascalName.replace(/[^a-zA-Z0-9]+/, ' ');
  let spaced = escaped
    .replace(/[A-Z]+/g, x => {
      return ' ' + x.toLowerCase();
    })
    .trim();

  return spaced.split(/ +/);
}

function commifyNumber(number: number): string {
  const sNumber = number.toString();
  return sNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

class StringBuilder {
  constructor(private _str: string = '') {}
  append(str: string): StringBuilder {
    this._str += str;
    return this;
  }
  appendLine(str: string, appendLineIfEmpty: boolean = true): StringBuilder {
    if (str.length > 0 || appendLineIfEmpty) this.append(str + '\n');
    return this;
  }
  toString() {
    return this._str;
  }
}

export {
  commifyNumber,
  pascalToHyphenated,
  pascalToUnderscore,
  camelToHyphenated,
  camelToUnderscore,
  StringBuilder,
};
