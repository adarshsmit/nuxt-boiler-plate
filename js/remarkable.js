// var Remarkable = require('remarkable');
import {Remarkable} from "remarkable";
import {linkify} from 'remarkable/linkify';
// var hljs       = require('highlight.js') // https://highlightjs.org/
import text from "~/CHANGELOG.md"

var md = new Remarkable('full', {
  html:         true,        // Enable HTML tags in source
  xhtmlOut:     false,        // Use '/' to close single tags (<br />)
  breaks:       true,        // Convert '\n' in paragraphs into <br>
  langPrefix:   'language-en',  // CSS language prefix for fenced blocks
  linkTarget:   '_blank',           // set target to open link in

  // Enable some language-neutral replacements + quotes beautification
  typographer:  false,

  // Double + single quotes replacement pairs, when typographer enabled,
  // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
  quotes: '“”‘’',

  // Highlighter function. Should return escaped HTML,
  // or '' if input not changed
//   highlight: function (str, lang) {
//     if (lang && hljs.getLanguage(lang)) {
//       try {
//         return hljs.highlight(lang, str).value;
//       } catch (__) {}
//     }

//     try {
//       return hljs.highlightAuto(str).value;
//     } catch (__) {}

//     return ''; // use external default escaping
//   }
}).use(linkify);
const html = md.render(text);
export default html;