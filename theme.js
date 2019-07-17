import dark from "@mdx-deck/themes/dark";
import prism from "react-syntax-highlighter/dist/styles/prism/duotone-space.js";
import { pre, getLanguage } from "@mdx-deck/themes/syntax-highlighter";

import SyntaxHighlighter from "react-syntax-highlighter";

export const code = props => {
  const language = getLanguage(props.className);
  console.log(prism);
  const style = Object.assign({}, prism, {
    "pre[class*='language-']": {
      fontSize: "inherit"
    }
  });
  return <SyntaxHighlighter language={language} {...props} style={prism} />;
};

export const highlight = {
  pre,
  getLanguage,
  code
};

const theme = Object.assign({}, dark, {
  font: "system-ui, sans-serif",
  monospace: '"Operator Mono", monospace !important'
});

export default theme;
