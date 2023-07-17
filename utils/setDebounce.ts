let timeout: NodeJS.Timeout | undefined;

function setDebounce(
  callback: (...args: unknown[]) => unknown,
  time: number,
  ...args: unknown[]
) {
  if (timeout) {
    clearTimeout(timeout);
  }

  timeout = setTimeout(() => {
    callback(...args);
  }, time);
}

export default setDebounce;
