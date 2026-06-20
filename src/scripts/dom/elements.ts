const checkboxes = document.querySelectorAll(".toggle__checkbox");
const copyBtn = document.querySelector<HTMLButtonElement>(".btn--copy");
const generateBtn = document.querySelector<HTMLButtonElement>(".btn--generate");
const notificationBtn =
  document.querySelector<HTMLButtonElement>(".btn--notification");
const inputQuantity =
  document.querySelector<HTMLInputElement>(".input--quantity");
const generatedOutput = document.querySelector<HTMLOutputElement>(
  ".output-generated-password",
);
const notificationDialog =
  document.querySelector<HTMLDialogElement>(".notification");
const toggles = document.querySelectorAll<HTMLInputElement>(".toggle");
const toggleSymbol = document.querySelector<HTMLInputElement>(
  ".toggle__checkbox--symbols",
);
const toggleNumbers = document.querySelector<HTMLInputElement>(
  ".toggle__checkbox--numbers",
);
const toggleLowercase = document.querySelector<HTMLInputElement>(
  ".toggle__checkbox--lowercase",
);
const toggleUppercase = document.querySelector<HTMLInputElement>(
  ".toggle__checkbox--uppercase",
);

const elements = {
  checkboxes,
  copyBtn,
  generateBtn,
  notificationBtn,
  inputQuantity,
  generatedOutput,
  notificationDialog,
  toggles,
  toggleSymbol,
  toggleNumbers,
  toggleLowercase,
  toggleUppercase,
};

export default elements;
