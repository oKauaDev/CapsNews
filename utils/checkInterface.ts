function checkInterface<T>(obj: unknown, ...args: (keyof T)[]): obj is T {
  if (obj && typeof obj === "object") {
    const newObj = args.filter((arg) => arg in obj);
    return newObj.length >= Object.keys(obj).length;
  }

  return false;
}

export default checkInterface;
