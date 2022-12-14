// Numbers ---

// Regular numbers in JavaScript are stored in 64-bit format IEEE-754, also known as “double precision floating point numbers”. These are numbers that we’re using most of the time, and we’ll talk about them in this chapter.

// BigInt numbers represent integers of arbitrary length. They are sometimes needed because a regular integer number can’t safely exceed (253-1) or be less than -(253-1), as we mentioned earlier in the chapter Data types. As bigints are used in few special areas, we devote them a special chapter BigInt.

// We also can use underscore _ as the separator:

// let billion = 1_000_000_000;

// In JavaScript, we can shorten a number by appending the letter "e" to it and specifying the zeroes count:

// let billion = 1e9;  // 1 billion, literally: 1 and 9 zeroes

// alert( 7.3e9 );  // 7.3 billions (same as 7300000000 or 7_300_000_000)

// toString(base) ---

// The method num.toString(base) returns a string representation of num in the numeral system with the given base.

// let num = 255;

// alert( num.toString(16) );  // ff
// alert( num.toString(2) );   // 11111111

// Common use cases for this are:

// base=16 is used for hex colors, character encodings etc, digits can be 0..9 or A..F.

// base=2 is mostly for debugging bitwise operations, digits can be 0 or 1.

// isNaN(value) converts its argument to a number and then tests it for being NaN
// Number.isNaN(value) checks whether its argument belongs to the number type, and if so, tests it for being NaN
// isFinite(value) converts its argument to a number and then tests it for not being NaN/Infinity/-Infinity
// Number.isFinite(value) checks whether its argument belongs to the number type, and if so, tests it for not being NaN/Infinity/-Infinity
// For converting values like 12pt and 100px to a number:

// Use parseInt/parseFloat for the “soft” conversion, which reads a number from a string and then returns the value they could read before the error.
// For fractions:

// Round using Math.floor, Math.ceil, Math.trunc, Math.round or num.toFixed(precision).
// Make sure to remember there’s a loss of precision when working with fractions.

// String ---

// Strings
// In JavaScript, the textual data is stored as strings. There is no separate type for a single character.

// The internal format for strings is always UTF-16, it is not tied to the page encoding.

// Quotes

// let single = 'single-quoted';
// let double = "double-quoted";

// let backticks = `backticks`;

// Special characters

// let guestList = "Guests:\n * John\n * Pete\n * Mary";

// alert(guestList); // a multiline list of guests, same as above

// Character	Description
// \n	New line
// \r	In Windows text files a combination of two characters \r\n represents a new break, while on non-Windows OS it’s just \n. That’s for historical reasons, most Windows software also understands \n.
// \', \", \`	Quotes
// \\	Backslash
// \t	Tab
// \b, \f, \v	Backspace, Form Feed, Vertical Tab – mentioned for completeness, coming from old times, not used nowadays (you can forget them right now).

// There are 3 types of quotes. Backticks allow a string to span multiple lines and embed expressions ${…}.
// We can use special characters, such as a line break \n.
// To get a character, use: [] or at method.
// To get a substring, use: slice or substring.
// To lowercase/uppercase a string, use: toLowerCase/toUpperCase.
// To look for a substring, use: indexOf, or includes/startsWith/endsWith for simple checks.
// To compare strings according to the language, use: localeCompare, otherwise they are compared by character codes.
// There are several other helpful methods in strings:

// str.trim() – removes (“trims”) spaces from the beginning and end of the string.
// str.repeat(n) – repeats the string n times.
// …and more to be found in the manual.
// Strings also have methods for doing search/replace with regular expressions. But that’s big topic, so it’s explained in a separate tutorial section Regular expressions.

// Also, as of now it’s important to know that strings are based on Unicode encoding, and hence there’re issues with comparisons. There’s more about Unicode in the chapter Unicode, String internals.
