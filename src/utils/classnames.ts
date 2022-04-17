interface IClassWithCondition {
  [key: string]: boolean;
}

export const classnames = (
  ...classes: Array<string | IClassWithCondition | undefined>
): string => {
  const result = classes.reduce((acc, curr) => {
    if (typeof curr === "string") {
      return acc + curr + " ";
    }

    if (typeof curr === "object") {
      let classesFromObject: string = "";

      Object.keys(curr).forEach((key) => {
        if (curr[key]) {
          classesFromObject = classesFromObject + key + " ";
        }
      });

      return acc + classesFromObject;
    }

    return acc;
  }, "");

  if (typeof result === "string") {
    return result;
  }

  return "";
};

export default classnames;
