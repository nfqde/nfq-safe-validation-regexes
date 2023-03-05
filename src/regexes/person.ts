// eslint-disable-next-line security/detect-unsafe-regex
export const email = /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/u;
export const creditcard = /^((4\d{3})|(5[1-5]\d{2})|(6011)|(7\d{3}))-?\d{4}-?\d{4}-?\d{4}|3[4,7]\d{13}$/u;
// eslint-disable-next-line security/detect-unsafe-regex
export const usZipCode = /^\d{5}(-\d{4})?$/u;
export const germanZipCode = /^\d{5}$/u;
export const simplePassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/u;
export const complexPassword = /^(?:(?=.*\d)(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[^A-Za-z0-9])(?=.*[a-z])|(?=.*[^A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[A-Z])(?=.*[^A-Za-z0-9]))(?!.*(.)\1{2,})[A-Za-z0-9!~<>,;:_=?*+#."&§%°()|[\]\-$^@/]{8,32}$/u;
// eslint-disable-next-line security/detect-unsafe-regex
export const personName = /^[a-zA-Z\u00F0-\u02AF]+(([',. -][a-zA-Z\u00F0-\u02AF ])?[a-zA-Z\u00F0-\u02AF]*)*$/u;
export const macAdress = /^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/u;