let cooldownTime: number = 0;

const cooldownFunction = (
  callback: (...args: unknown[]) => unknown,
  cooldown: number,
  ...args: unknown[]
) => {
  const time = new Date().getTime();
  if (time > cooldownTime) {
    callback(...args);
    cooldownTime = time + cooldown;
  }
};

export default cooldownFunction;
