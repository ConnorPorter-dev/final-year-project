import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
// SyntaxHighlighter.registerLanguage('java', java);

const CodeComponent = (props) => {

    return (
        <div>
            <SyntaxHighlighter language="java" style={dracula} showLineNumbers={true} wrapLongLines={true}>
                {props.code}
            </SyntaxHighlighter>
            <div>Line Analysis: {props.topics.map(item => item + " ")}</div>
        </div>

    )
}

export default CodeComponent