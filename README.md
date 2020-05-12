# Install
```
npm i @nfq/safe-validation-regex
```

# Usage
```javascript
import {url} from '@nfq/safe-validation-regex';

const checkUrl = (uri) => {
    return url.test(uri);
}
```

# Documentation
The following regexes are integrated for now:

## **url**

`/^((((https?|ftps?|gopher|telnet|nntp):\/\/)|(mailto:|news:))(%[0-9A-Fa-f]{2}|[-()_.!~*';/?:@&=+$,A-Za-z0-9])+)([).!';/?:,][[:blank:|:blank:]])?$`

A valid URL per the URL spec.

---

## **ip**

`^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$`

A valid IP Address

---

## **email**

`^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$`

A valid e-mail address

---

## **safeText**

`^[a-zA-Z0-9 .-]+$`

Lower and upper case letters and all digits

---

## **usDate**

`^(?:(?:(?:0?[13578]|1[02])(\/|-|\.)31)\1|(?:(?:0?[1,3-9]|1[0-2])(\/|-|\.)(?:29|30)\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:0?2(\/|-|\.)29\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:(?:0?[1-9])|(?:1[0-2]))(\/|-|\.)(?:0?[1-9]|1\d|2[0-8])\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$`

Date in US format with support for leap years

---

## **deDate**

`^((((0?[1-9]|[12]\d|3[01])[\.\-\/](0?[13578]|1[02])[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|[12]\d|30)[\.\-\/](0?[13456789]|1[012])[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|1\d|2[0-8])[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|(29[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00)))|(((0[1-9]|[12]\d|3[01])(0[13578]|1[02])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|[12]\d|30)(0[13456789]|1[012])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|1\d|2[0-8])02((1[6-9]|[2-9]\d)?\d{2}))|(2902((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00))))$`

Date in German format with support for leap years

---

## **creditcard**

`^((4\d{3})|(5[1-5]\d{2})|(6011)|(7\d{3}))-?\d{4}-?\d{4}-?\d{4}|3[4,7]\d{13}$`

A valid credit card number

---

## **simplePassword**

`^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$`

4 to 8 character password requiring numbers and both lowercase and uppercase letters

---

## **complexPassword**

`^(?:(?=.*\d)(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[^A-Za-z0-9])(?=.*[a-z])|(?=.*[^A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[A-Z])(?=.*[^A-Za-z0-9]))(?!.*(.)\1{2,})[A-Za-z0-9!~<>,;:_=?*+#."&§%°()\|\[\]\-\$\^\@\/]{8,32}$`

4 to 32 character password requiring at least 3 out 4 (uppercase and lowercase letters, numbers and special characters) and no more than 2 equal characters in a row

---

## **englishDigitWords**

`^(zero|one|two|three|four|five|six|seven|eight|nine)$`

The English words representing the digits 0 to 9

---

## **germanDigitWords**

`^(null|eins|zwei|drei|vier|f(ue|ü)nf|sechs|sieben|acht|neun)$`

The German words representing the digits 0 to 9

---

## **englishDayWords**

`^(Mo|Tu|We|Th|Fr|Sa|Su)$`

English 2 character abbreviations for the days of the week

---

## **germanDayWords**

`^(Mo|Di|Mi|Do|Fr|Sa|So)$`

German 2 character abbreviations for the days of the week

---

## **englishMonthWords**

`^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)$`

English 3 character abbreviations for the months

---

## **germanMonthWords**

`^(Jan|Feb|M(ae|ä)r|Apr|Mai|Jun|Jul|Aug|Sep|Oct|Nov|Dec)$`

German 3 character abbreviations for the months

---

## **usZipCode**

`^\d{5}(-\d{4})?$`

US zip code with optional dash-four

---

## **germanZipCode**

`^\d{5}$`

DE zip code with optional dash-four

---

## **cssColorCode**

`^#?([a-f]|[A-F]|[0-9]){3}(([a-f]|[A-F]|[0-9]){3})?$`

CSS hex colorcode

---

## **floatNumber**

`^[-+]?[0-9]+[.]?[0-9]*([eE][-+]?[0-9]+)?$`

Floating point numbers

---

## **personName**

`^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$`

Person names.

---

## **macAdress**

`^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$`

Valid MAC adress after specification

---

## **guid**

`^[A-Z0-9]{8}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{12}$`

Valid GUID

---

## **domainName**

`^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$`

Reasonable domain name

---

## **windowsFileName**

`^(?!^(PRN|AUX|CLOCK\$|NUL|CON|COM\d|LPT\d|\..*)(\..+)?$)[^\x00-\x1f\\?*:\";|/]+$`

Valid Windows filename

---

## **anyPlattformFileName**

`^(([a-zA-Z]:|\\)\\)?(((\.)|(\.\.)|([^\\/:*?"|<>. ](([^\\/:*?"|<>. ])|([^\\/:*?"|<>]*[^\\/:*?"|<>. ]))?))\\)*[^\\/:*?"|<>. ](([^\\/:*?"|<>. ])|([^\\/:*?"|<>]*[^\\/:*?"|<>. ]))?$`

Valid filename for any plattform