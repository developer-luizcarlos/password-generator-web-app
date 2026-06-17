import elements from "../dom/elements";
import utils from "./utils";

const MIN_CHARS_QUANTITY = 4;
const MAX_CHARS_QUANTITY = 16;

export default function isInputQuantityValueValid(): boolean {
  const inputQuatity = elements.inputQuantity;
  const inputQuantityValue = inputQuatity!.value.trim();

  const charactersQuantity = +inputQuantityValue;

  if (
    utils.isEmptyString(inputQuantityValue) ||
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
