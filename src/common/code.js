import { Prism } from 'react-syntax-highlighter';
import { twilight, prism } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const componentsDark = {
  /* eslint-disable-next-line no-unused-vars */
  code({node, inline, className, children, ...props}) {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <Prism
        language={match[1]}
        style={twilight}
        customStyle={{
          backgroundColor: '#161b22',
          border: '1px solid #3e4559',
          boxShadow: '',
          padding: '10px',
        }}
        PreTag='div'
        wrapLines={true}
        showLineNumbers={true}
        children={String(children).replace(/\n$/, '')}
        {...props}
      />
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  }
};

export const componentsLight = {
  /* eslint-disable no-unused-vars */
  code({node, inline, className, children, ...props}) {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <Prism
        language={match[1]}
        style={prism}
        customStyle={{
          backgroundColor: '#f6f8fa',
          border: '1px solid #cccccc',
          boxShadow: '',
          padding: '10px',
        }}
        PreTag='div'
        wrapLines={true}
        showLineNumbers={true}
        children={String(children).replace(/\n$/, '')}
        {...props}
      />
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  }
};
