export function isValidString(str: string) {
  return !(/^\s*$/.test(str));
}