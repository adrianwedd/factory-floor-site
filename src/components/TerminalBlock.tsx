import { useState } from 'preact/hooks';

interface Props {
  lines: string[];
  filename?: string;
}

export default function TerminalBlock({ lines, filename }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(lines.join('\n')).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <div
      style={{
        background: '#0d0b10',
        border: '1px solid #2e2a34',
        borderRadius: '6px',
        margin: '1.5rem 0',
        overflow: 'hidden',
        fontFamily: "ui-monospace, 'Cascadia Code', 'JetBrains Mono', 'Fira Code', Menlo, monospace",
      }}
    >
      {filename && (
        <div
          style={{
            background: '#1c1921',
            borderBottom: '1px solid #2e2a34',
            padding: '0.4rem 1rem',
            fontSize: '0.75rem',
            color: '#9e9690',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span>{filename}</span>
          <button
            onClick={handleCopy}
            style={{
              background: 'none',
              border: 'none',
              color: copied ? '#4caf82' : '#9e9690',
              cursor: 'pointer',
              fontSize: '0.7rem',
              padding: '0',
            }}
          >
            {copied ? 'copied' : 'copy'}
          </button>
        </div>
      )}
      <pre
        style={{
          margin: 0,
          padding: '1rem',
          overflowX: 'auto',
          fontSize: '0.85rem',
          lineHeight: 1.6,
        }}
      >
        {lines.map((line, i) => {
          const isPrompt = line.startsWith('$ ');
          return (
            <div key={i}>
              {isPrompt ? (
                <>
                  <span style={{ color: '#c48b6e' }}>$ </span>
                  <span style={{ color: '#e8e0d5' }}>{line.slice(2)}</span>
                </>
              ) : (
                <span style={{ color: '#d4890a' }}>{line}</span>
              )}
            </div>
          );
        })}
      </pre>
      {!filename && (
        <div
          style={{
            borderTop: '1px solid #2e2a34',
            padding: '0.3rem 1rem',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <button
            onClick={handleCopy}
            style={{
              background: 'none',
              border: 'none',
              color: copied ? '#4caf82' : '#4a4540',
              cursor: 'pointer',
              fontSize: '0.7rem',
              fontFamily: 'inherit',
            }}
          >
            {copied ? 'copied' : 'copy'}
          </button>
        </div>
      )}
    </div>
  );
}
