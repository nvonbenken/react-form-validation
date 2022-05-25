import { Switch } from '@mui/material';
import { ReactNode, useState } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

type Props = {
  validationType: 'react-hook-form' | 'yup' | 'zod';
  content: ReactNode;
  sample: string;
  schemaSample?: string;
};

SyntaxHighlighter.registerLanguage('jsx', jsx);

const SplitCard = ({
  validationType,
  content,
  sample,
  schemaSample
}: Props) => {
  const [switchState, setSwitchState] = useState(false);

  const handleSwitch = () => {
    setSwitchState(!switchState);
  };

  return (
    <div className="flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 divide-y">
      <p className="text-xl pb-1">{validationType}</p>
      <div className="flex flex-row pt-2 divide-x">
        {content}
        <div className="pl-8">
          {sample && schemaSample && <Switch onClick={handleSwitch} />}
          {!switchState && (
            <SyntaxHighlighter
              language="jsx"
              style={tomorrow}
              showLineNumbers
              wrapLongLines
            >
              {sample}
            </SyntaxHighlighter>
          )}
          {switchState && schemaSample && (
            <SyntaxHighlighter
              language="jsx"
              style={tomorrow}
              showLineNumbers
              wrapLongLines
            >
              {schemaSample}
            </SyntaxHighlighter>
          )}
        </div>
      </div>
    </div>
  );
};

export default SplitCard;
