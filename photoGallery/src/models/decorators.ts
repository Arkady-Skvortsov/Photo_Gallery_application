import { InputsChecker } from './interfaces';

export function input_checker(
  target: any,
  val: any,
  func: PropertyDescriptor
): void {
  console.log(target, val, func);
}
