import elements from "../dom/elements";

export default function isAnyCheckboxChecked(): boolean {
  const checkboxes = [...elements.checkboxes] as HTMLInputElement[];

  return checkboxes.some((element) => element.checked);
}
