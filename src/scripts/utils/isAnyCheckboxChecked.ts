import { checkboxes } from "../dom/elements";

export default function isAnyCheckboxChecked(): boolean {
  const checkboxesEl = [...checkboxes] as HTMLInputElement[];

  return checkboxesEl.some((element) => element.checked);
}
