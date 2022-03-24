/* Error: Missing argument $color.
 *   ,--> style\sass.scss
 * 107|   filter: grayscale();
 *   |           ^^^^^^^^^^^ invocation
 *   '
 *   ,--> sass:color
 * 1 | @function grayscale($color) {
 *   |           ================= declaration
 *   '
 *   style\sass.scss 107:11  root stylesheet */

body::before {
  font-family: "Source Code Pro", "SF Mono", Monaco, Inconsolata, "Fira Mono",
      "Droid Sans Mono", monospace, monospace;
  white-space: pre;
  display: block;
  padding: 1em;
  margin-bottom: 1em;
  border-bottom: 2px solid black;
  content: "Error: Missing argument $color.\a   \250c \2500 \2500 > style\\sass.scss\a 107\2502    filter: grayscale();\d\a   \2502            ^^^^^^^^^^^ invocation\a   \2575 \a   \250c \2500 \2500 > sass:color\a 1 \2502  @function grayscale($color) {\a   \2502            \2501 \2501 \2501 \2501 \2501 \2501 \2501 \2501 \2501 \2501 \2501 \2501 \2501 \2501 \2501 \2501 \2501  declaration\a   \2575 \a   style\\sass.scss 107:11  root stylesheet";
}
