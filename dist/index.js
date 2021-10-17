"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.anyPlattformFileName = exports.windowsFileName = exports.domainName = exports.guid = exports.macAdress = exports.personName = exports.floatNumber = exports.intNumber = exports.cssColorCode = exports.germanZipCode = exports.usZipCode = exports.germanMonthWords = exports.englishMonthWords = exports.germanDayWords = exports.englishDayWords = exports.germanDigitWords = exports.englishDigitWords = exports.complexPassword = exports.simplePassword = exports.creditcard = exports.deDate = exports.usDate = exports.safeText = exports.email = exports.ip = exports.url = void 0;
var url = /^((((https?|ftps?|gopher|telnet|nntp):\/\/)|(mailto:|news:))(%[0-9A-Fa-f]{2}|[-()_.!~*';/?:@&=+$,A-Za-z0-9])+)([).!';/?:,][[:blank:|:blank:]])?$/;
exports.url = url;
var ip = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
exports.ip = ip;
var email = /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/;
exports.email = email;
var safeText = /^[a-zA-Z0-9 .-\u00F0-\u02AF]+$/;
exports.safeText = safeText;
var usDate = /^(?:(?:(?:0?[13578]|1[02])(\/|-|\.)31)\1|(?:(?:0?[1,3-9]|1[0-2])(\/|-|\.)(?:29|30)\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:0?2(\/|-|\.)29\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:(?:0?[1-9])|(?:1[0-2]))(\/|-|\.)(?:0?[1-9]|1\d|2[0-8])\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
exports.usDate = usDate;
var deDate = /^((((0?[1-9]|[12]\d|3[01])[\.\-\/](0?[13578]|1[02])[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|[12]\d|30)[\.\-\/](0?[13456789]|1[012])[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|1\d|2[0-8])[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|(29[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00)))|(((0[1-9]|[12]\d|3[01])(0[13578]|1[02])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|[12]\d|30)(0[13456789]|1[012])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|1\d|2[0-8])02((1[6-9]|[2-9]\d)?\d{2}))|(2902((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00))))$/;
exports.deDate = deDate;
var creditcard = /^((4\d{3})|(5[1-5]\d{2})|(6011)|(7\d{3}))-?\d{4}-?\d{4}-?\d{4}|3[4,7]\d{13}$/;
exports.creditcard = creditcard;
var simplePassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/; // 4 to 8 chars, lower and uppercase

exports.simplePassword = simplePassword;
var complexPassword = /^(?:(?=.*\d)(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[^A-Za-z0-9])(?=.*[a-z])|(?=.*[^A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[A-Z])(?=.*[^A-Za-z0-9]))(?!.*(.)\1{2,})[A-Za-z0-9!~<>,;:_=?*+#."&§%°()\|\[\]\-\$\^\@\/]{8,32}$/; // 4 to 32 chars, lower-, uppercase, numbers, special chars. Max 2 same chars in row.

exports.complexPassword = complexPassword;
var englishDigitWords = /^(zero|one|two|three|four|five|six|seven|eight|nine)$/;
exports.englishDigitWords = englishDigitWords;
var germanDigitWords = /^(null|eins|zwei|drei|vier|f(ue|ü)nf|sechs|sieben|acht|neun)$/;
exports.germanDigitWords = germanDigitWords;
var englishDayWords = /^(Mo|Tu|We|Th|Fr|Sa|Su)$/;
exports.englishDayWords = englishDayWords;
var germanDayWords = /^(Mo|Di|Mi|Do|Fr|Sa|So)$/;
exports.germanDayWords = germanDayWords;
var englishMonthWords = /^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)$/;
exports.englishMonthWords = englishMonthWords;
var germanMonthWords = /^(Jan|Feb|M(ae|ä)r|Apr|Mai|Jun|Jul|Aug|Sep|Oct|Nov|Dec)$/;
exports.germanMonthWords = germanMonthWords;
var usZipCode = /^\d{5}(-\d{4})?$/;
exports.usZipCode = usZipCode;
var germanZipCode = /^\d{5}$/;
exports.germanZipCode = germanZipCode;
var cssColorCode = /^#?([a-f]|[A-F]|[0-9]){3}(([a-f]|[A-F]|[0-9]){3})?$/;
exports.cssColorCode = cssColorCode;
var intNumber = /^[-+]?[0-9]+$/;
exports.intNumber = intNumber;
var floatNumber = /^[-+]?[0-9]+[.]?[0-9]*([eE][-+]?[0-9]+)?$/;
exports.floatNumber = floatNumber;
var personName = /^[a-zA-Z\u00F0-\u02AF]+(([',. -][a-zA-Z\u00F0-\u02AF ])?[a-zA-Z\u00F0-\u02AF]*)*$/;
exports.personName = personName;
var macAdress = /^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/;
exports.macAdress = macAdress;
var guid = /^[A-Z0-9]{8}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{12}$/;
exports.guid = guid;
var domainName = /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/;
exports.domainName = domainName;
var windowsFileName = /^(?!^(PRN|AUX|CLOCK\$|NUL|CON|COM\d|LPT\d|\..*)(\..+)?$)[^\x00-\x1f\\?*:\";|/]+$/;
exports.windowsFileName = windowsFileName;
var anyPlattformFileName = /^(([a-zA-Z]:|\\)\\)?(((\.)|(\.\.)|([^\\/:*?"|<>. ](([^\\/:*?"|<>. ])|([^\\/:*?"|<>]*[^\\/:*?"|<>. ]))?))\\)*[^\\/:*?"|<>. ](([^\\/:*?"|<>. ])|([^\\/:*?"|<>]*[^\\/:*?"|<>. ]))?$/;
exports.anyPlattformFileName = anyPlattformFileName;