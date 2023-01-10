import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  padding: 0;
  margin: 0;
  font: inherit;
  font-size: 100%;
  vertical-align: baseline;
  border: 0;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul,
li {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote::before,
blockquote::after,
q::before,
q::after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  letter-spacing: -0.05em;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -ms-overflow-style: none; // IE and Edge
  scrollbar-width: none; // Firefox

  &::before,
  &::after {
    box-sizing: border-box;
  }

  &::-webkit-scrollbar {
    display: none; // Chrome
  }
}

img {
  border: 0;
}

a {
  text-decoration: none;
}

select,
input,
textarea {
  font-size: 16px;
}

input,
button {
  -webkit-appearance: none;
}

input::-webkit-contacts-auto-fill-button {
  position: absolute;
  right: 0;
  display: none !important;
  pointer-events: none;
  visibility: hidden;
}

input {
  background-color: transparent;
  background-image: none !important;
  border: 0;
}

button {
  cursor: pointer;
  user-select: none;
  background-color: transparent;
  border: 0;

  &:disabled {
    cursor: not-allowed;
  }
}

input:is([type="button"], [type="submit"], [type="reset"]),
input[type="file"]::file-selector-button,
button {
  color: initial;
} 

body{
  background-color: #cae9ff;
}
`;

export default GlobalStyle;
