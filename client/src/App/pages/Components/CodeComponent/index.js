import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
// SyntaxHighlighter.registerLanguage('java', java);

const CodeComponent = (props) => {

    return (
        <SyntaxHighlighter language="java" style={dracula} showLineNumbers={true} wrapLongLines={true}>
            {props.code}
        </SyntaxHighlighter>
    )
}

export default CodeComponent