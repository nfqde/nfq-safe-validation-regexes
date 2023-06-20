'use strict';

const usDate = /^(?:(?:(?:0?[13578]|1[02])(\/|-|\.)31)\1|(?:(?:0?[1,3-9]|1[0-2])(\/|-|\.)(?:29|30)\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:0?2(\/|-|\.)29\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:(?:0?[1-9])|(?:1[0-2]))(\/|-|\.)(?:0?[1-9]|1\d|2[0-8])\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/u;
const deDate = /^((((0?[1-9]|[12]\d|3[01])[.\-/](0?[13578]|1[02])[.\-/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|[12]\d|30)[.\-/](0?[13456789]|1[012])[.\-/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|1\d|2[0-8])[.\-/]0?2[.\-/]((1[6-9]|[2-9]\d)?\d{2}))|(29[.\-/]0?2[.\-/]((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00)))|(((0[1-9]|[12]\d|3[01])(0[13578]|1[02])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|[12]\d|30)(0[13456789]|1[012])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|1\d|2[0-8])02((1[6-9]|[2-9]\d)?\d{2}))|(2902((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00))))$/u;
const englishDayWords = /^(Mo|Tu|We|Th|Fr|Sa|Su)$/u;
const germanDayWords = /^(Mo|Di|Mi|Do|Fr|Sa|So)$/u;
const englishMonthWords = /^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)$/u;
const germanMonthWords = /^(Jan|Feb|M(ae|ä)r|Apr|Mai|Jun|Jul|Aug|Sep|Oct|Nov|Dez)$/u;

const ip = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/u;

const englishDigitWords = /^(zero|one|two|three|four|five|six|seven|eight|nine)$/u;
const germanDigitWords = /^(null|eins|zwei|drei|vier|f(ue|ü)nf|sechs|sieben|acht|neun)$/u;
const cssColorCode = /^#?([a-f]|[A-F]|[0-9]){3}(([a-f]|[A-F]|[0-9]){3})?$/u;
const intNumber = /^[-+]?[0-9]+$/u;
const floatNumber = /^[-+]?[0-9]+[.]?[0-9]*([eE][-+]?[0-9]+)?$/u;
const guid = /^[A-Z0-9]{8}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{12}$/u;

const email = /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/u;
const creditcard = /^((4\d{3})|(5[1-5]\d{2})|(6011)|(7\d{3}))-?\d{4}-?\d{4}-?\d{4}|3[4,7]\d{13}$/u;
const usZipCode = /^\d{5}(-\d{4})?$/u;
const germanZipCode = /^\d{5}$/u;
const simplePassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/u;
const complexPassword = /^(?:(?=.*\d)(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[^A-Za-z0-9])(?=.*[a-z])|(?=.*[^A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[A-Z])(?=.*[^A-Za-z0-9]))(?!.*(.)\1{2,})[A-Za-z0-9!~<>,;:_=?*+#."&§%°()|[\]\-$^@/]{8,32}$/u;
const personName = /^[a-zA-Z\u00F0-\u02AF]+(([',. -][a-zA-Z\u00F0-\u02AF ])?[a-zA-Z\u00F0-\u02AF]*)*$/u;
const macAdress = /^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/u;

const safeText = /^[a-zA-Z0-9 .-\u00F0-\u02AF]+$/u;

const url = /^((((https?|ftps?|gopher|telnet|nntp):\/\/)|(mailto:|news:))(%[0-9A-Fa-f]{2}|[-()_.!~*';/?:@&=+$,A-Za-z0-9])+)([).!';/?:,][[:blank:|:blank:]\])?$/u;
const domainName = /^([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/u;
const windowsFileName = /^(?!^(PRN|AUX|CLOCK\$|NUL|CON|COM\d|LPT\d|\..*)(\..+)?$)[^\x00-\x1f\\?*:";|/]+$/u;
const anyPlattformFileName = /^(([a-zA-Z]:|\\)\\)?(((\.)|(\.\.)|([^\\/:*?"|<>. ](([^\\/:*?"|<>. ])|([^\\/:*?"|<>]*[^\\/:*?"|<>. ]))?))\\)*[^\\/:*?"|<>. ](([^\\/:*?"|<>. ])|([^\\/:*?"|<>]*[^\\/:*?"|<>. ]))?$/u;

exports.anyPlattformFileName = anyPlattformFileName;
exports.complexPassword = complexPassword;
exports.creditcard = creditcard;
exports.cssColorCode = cssColorCode;
exports.deDate = deDate;
exports.domainName = domainName;
exports.email = email;
exports.englishDayWords = englishDayWords;
exports.englishDigitWords = englishDigitWords;
exports.englishMonthWords = englishMonthWords;
exports.floatNumber = floatNumber;
exports.germanDayWords = germanDayWords;
exports.germanDigitWords = germanDigitWords;
exports.germanMonthWords = germanMonthWords;
exports.germanZipCode = germanZipCode;
exports.guid = guid;
exports.intNumber = intNumber;
exports.ip = ip;
exports.macAdress = macAdress;
exports.personName = personName;
exports.safeText = safeText;
exports.simplePassword = simplePassword;
exports.url = url;
exports.usDate = usDate;
exports.usZipCode = usZipCode;
exports.windowsFileName = windowsFileName;
//# sourceMappingURL=index.js.map
