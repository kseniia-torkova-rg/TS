namespace MyMath {
  // пространство имен может вкладываться в другое пространство имен, при это для использования извне вложенное пространство имен нужно экспортировать
  export namespace Rectangle {
    export function calculateRectangle(width: number, length: number) {
      return width * length;
    }
  }
}
  