export const englishDigitWords = /^(zero|one|two|three|four|five|six|seven|eight|nine)$/u;
export const germanDigitWords = /^(null|eins|zwei|drei|vier|f(ue|ü)nf|sechs|sieben|acht|neun)$/u;
// eslint-disable-next-line security/detect-unsafe-regex
export const cssColorCode = /^#?([a-f]|[A-F]|[0-9]){3}(([a-f]|[A-F]|[0-9]){3})?$/u;
export const intNumber = /^[-+]?[0-9]+$/u;
// eslint-disable-next-line security/detect-unsafe-regex
export const floatNumber = /^[-+]?[0-9]+[.]?[0-9]*([eE][-+]?[0-9]+)?$/u;
export const guid = /^[A-Z0-9]{8}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{12}$/u;