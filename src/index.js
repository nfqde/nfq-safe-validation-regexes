const url = /^((((https?|ftps?|gopher|telnet|nntp):\/\/)|(mailto:|news:))(%[0-9A-Fa-f]{2}|[-()_.!~*';/?:@&=+$,A-Za-z0-9])+)([).!';/?:,][[:blank:|:blank:]])?$/;
const ip = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
const email = /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/;
const safeText = /^[a-zA-Z0-9 .-]+$/;
const usDate = /^(?:(?:(?:0?[13578]|1[02])(\/|-|\.)31)\1|(?:(?:0?[1,3-9]|1[0-2])(\/|-|\.)(?:29|30)\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:0?2(\/|-|\.)29\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:(?:0?[1-9])|(?:1[0-2]))(\/|-|\.)(?:0?[1-9]|1\d|2[0-8])\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
const deDate = /^((((0?[1-9]|[12]\d|3[01])[\.\-\/](0?[13578]|1[02])[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|[12]\d|30)[\.\-\/](0?[13456789]|1[012])[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|1\d|2[0-8])[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|(29[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00)))|(((0[1-9]|[12]\d|3[01])(0[13578]|1[02])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|[12]\d|30)(0[13456789]|1[012])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|1\d|2[0-8])02((1[6-9]|[2-9]\d)?\d{2}))|(2902((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00))))$/;
const creditcard = /^((4\d{3})|(5[1-5]\d{2})|(6011)|(7\d{3}))-?\d{4}-?\d{4}-?\d{4}|3[4,7]\d{13}$/;
const simplePassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/; // 4 to 8 chars, lower and uppercase
const complexPassword = /^(?:(?=.*\d)(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[^A-Za-z0-9])(?=.*[a-z])|(?=.*[^A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[A-Z])(?=.*[^A-Za-z0-9]))(?!.*(.)\1{2,})[A-Za-z0-9!~<>,;:_=?*+#."&§%°()\|\[\]\-\$\^\@\/]{8,32}$/; // 4 to 32 chars, lower-, uppercase, numbers, special chars. Max 2 same chars in row.
const englishDigitWords = /^(zero|one|two|three|four|five|six|seven|eight|nine)$/;
const germanDigitWords = /^(null|eins|zwei|drei|vier|f(ue|ü)nf|sechs|sieben|acht|neun)$/;
const englishDayWords = /^(Mo|Tu|We|Th|Fr|Sa|Su)$/;
const germanDayWords = /^(Mo|Di|Mi|Do|Fr|Sa|So)$/;
const englishMonthWords = /^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)$/;
const germanMonthWords = /^(Jan|Feb|M(ae|ä)r|Apr|Mai|Jun|Jul|Aug|Sep|Oct|Nov|Dec)$/;
const usZipCode = /^\d{5}(-\d{4})?$/;
const germanZipCode = /^\d{5}$/;
const cssColorCode = /^#?([a-f]|[A-F]|[0-9]){3}(([a-f]|[A-F]|[0-9]){3})?$/;
const floatNumber = /^[-+]?[0-9]+[.]?[0-9]*([eE][-+]?[0-9]+)?$/;
const personName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
const macAdress = /^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/;
const guid = /^[A-Z0-9]{8}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{12}$/;
const domainName = /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/;
const windowsFileName = /^(?!^(PRN|AUX|CLOCK\$|NUL|CON|COM\d|LPT\d|\..*)(\..+)?$)[^\x00-\x1f\\?*:\";|/]+$/;
const anyPlattformFileName = /^(([a-zA-Z]:|\\)\\)?(((\.)|(\.\.)|([^\\/:*?"|<>. ](([^\\/:*?"|<>. ])|([^\\/:*?"|<>]*[^\\/:*?"|<>. ]))?))\\)*[^\\/:*?"|<>. ](([^\\/:*?"|<>. ])|([^\\/:*?"|<>]*[^\\/:*?"|<>. ]))?$/;

export {
    url,
    ip,
    email,
    safeText,
    usDate,
    deDate,
    creditcard,
    simplePassword,
    complexPassword,
    englishDigitWords,
    germanDigitWords,
    englishDayWords,
    germanDayWords,
    englishMonthWords,
    germanMonthWords,
    usZipCode,
    germanZipCode,
    cssColorCode,
    floatNumber,
    personName,
    macAdress,
    guid,
    domainName,
    windowsFileName,
    anyPlattformFileName
};