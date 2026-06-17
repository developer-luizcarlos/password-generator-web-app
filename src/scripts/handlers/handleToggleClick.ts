export default function handleToggleClick(event: Event): void {
  const toggle = event.currentTarget as HTMLElement;

  const innerCheckbox =
    toggle.querySelector<HTMLInputElement>(".toggle__checkbox");

  innerCheckbox!.checked = !innerCheckbox!.checked;
}
