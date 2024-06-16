export function removeTrailingEquals(expression) {
  const firstexp = expression.replace(/\=$/, "");
  const sanitizedExpression = firstexp.replace(/([+\-*/]){2,}/g, "");

  return sanitizedExpression;
}
