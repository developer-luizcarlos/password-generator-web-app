import * as _ from "lodash";

const MIN_LENGTH = 4;
const MAX_LENGTH = 16;

type Options = {
  includeSymbols: boolean;
  includeNumbers: boolean;
  includeLowerCase: boolean;
  includeUpperCase: boolean;
};

export default function generatePassword(
  length: number,
  options: Options,
): string {
  if (length <= 0) {
    throw new Error("A positive number must be passed as length");
  } else if (length < MIN_LENGTH) {
    throw new Error(`length argument must not be less than ${MIN_LENGTH}`);
  } else if (length > MAX_LENGTH) {
    throw new Error(`length argument must not be greater than ${MAX_LENGTH}`);
  }

  const password = new Array(length).fill(null);

  const charsTypesToInclude = getCharsTypesToInclude(options);
  let charsTypesIndex = 0;

  while (checkArrayHasIndexesWithNullValues(password)) {
    const availableIndexes = getAvailableIndexes(password);
    const randomPasswordIndex = _.random(0, availableIndexes.length - 1);

    const typeToInclude = charsTypesToInclude[charsTypesIndex];
    const randomCharToIncludeIndex = _.random(0, typeToInclude.length - 1);
    const charToInclude = typeToInclude[randomCharToIncludeIndex];

    password[randomPasswordIndex] = charToInclude;

    charsTypesIndex =
      charsTypesIndex >= charsTypesToInclude.length - 1
        ? 0
        : charsTypesIndex + 1;
  }

  return password.join("").trim();
}

/**
 * Returns an array of available indexes in an array
 *
 * @param arr An array of a generic type
 * @returns An array containing the indexes that contain a null value
 * in a given array of a generic type.
 */
function getAvailableIndexes<T>(arr: T[]): number[] {
  if (!checkArrayHasIndexesWithNullValues(arr)) {
    return [];
  }

  const availableIndexes = arr.map((item, index) => {
    if (item === null) {
      return index;
    }
  }) as number[];

  return availableIndexes!;
}

function checkArrayHasIndexesWithNullValues<T>(arr: T[]): boolean {
  const hasAvailableIndexes = arr.some((item) => {
    return item === null;
  });

  return hasAvailableIndexes;
}

/**
 * Returns an array of all the 26 letters in English
 * alphabet in lowercase format.
 */
function getLetters(): string[] {
  const lowerCaseACodePoint = "a".codePointAt(0)!;

  let lowerCaseLetters = new Array(26).fill(0);

  lowerCaseLetters = lowerCaseLetters.map((_, index) => {
    const letterCodePoint = index + lowerCaseACodePoint;
    const lowerCaseLetter = String.fromCodePoint(letterCodePoint);

    return lowerCaseLetter;
  });

  return lowerCaseLetters;
}

/**
 * Returns an array of numbers from zero to 9
 */
function getNumbers(): number[] {
  const numbers = new Array(10).fill(0).map((_, index) => index);

  return numbers;
}

function getSpecialCharacters(): string[] {
  const specialCharacters = [
    '"',
    "'",
    "@",
    "!",
    "#",
    "$",
    "%",
    "&",
    "(",
    ")",
    "*",
    "+",
    "-",
    "_",
    ",",
    "/",
    ".",
    ":",
    ";",
    "<",
    ">",
    "=",
    "?",
    "[",
    "]",
    "^",
    "{",
    "}",
    "~",
    "`",
  ];

  return specialCharacters;
}

function getCharsTypesToInclude(options: Options): unknown[][] {
  const specialCharacters = getSpecialCharacters();
  const numbers = getNumbers();
  const lowerCaseLetters = getLetters();
  const upperCaseLetters = getLetters().map((item) => item.toUpperCase());

  const availableCharactersToBeIncluded = [];

  const { includeSymbols, includeNumbers, includeLowerCase, includeUpperCase } =
    options;

  if (includeSymbols) {
    availableCharactersToBeIncluded.push(specialCharacters);
  }

  if (includeNumbers) {
    availableCharactersToBeIncluded.push(numbers);
  }

  if (includeLowerCase) {
    availableCharactersToBeIncluded.push(lowerCaseLetters);
  }

  if (includeUpperCase) {
    availableCharactersToBeIncluded.push(upperCaseLetters);
  }

  return availableCharactersToBeIncluded;
}
