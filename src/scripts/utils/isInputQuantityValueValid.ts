import { inputQuantity } from "../dom/elements";
import { isEmptyString } from "./utils";

const MIN_CHARS_QUANTITY = 4;
const MAX_CHARS_QUANTITY = 16;

export default function isInputQuantityValueValid(): boolean {
  const inputQuantityValue = inputQuantity!.value.trim();

  const charactersQuantity = +inputQuantityValue;

  if (
    isEmptyString(inputQuantityValue) ||
    isNaN(charactersQuantity) ||
    !Number.isInteger(charactersQuantity)
  ) {
    return false;
  }

  const isValueBetweenRange =
    charactersQuantity >= MIN_CHARS_QUANTITY &&
    charactersQuantity <= MAX_CHARS_QUANTITY;

  return isValueBetweenRange;
}
