# b2cursor

A React library that enables browser-to-cursor navigation by adding `data-source` attributes to components.

## Installation

```bash
npm install b2cursor
```

## Setup

### For Create React App Projects

1. Install CRACO:
```bash
npm install @craco/craco --save-dev
```

2. Create a `craco.config.js` file in your project root:
```javascript
module.exports = {
  babel: {
    plugins: [
      require('b2cursor/babel')
    ]
  }
};
```

3. Update your package.json scripts to use CRACO:
```json
{
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test"
  }
}
```

### For Custom React Projects

Add the Babel plugin to your `.babelrc` or `babel.config.js`:
```json
{
  "plugins": [
    "b2cursor/babel"
  ]
}
```

## Usage

1. Import and use the `useB2Cursor` hook in your app:

```tsx
import { useB2Cursor } from 'b2cursor';

function App() {
  // Initialize b2cursor
  useB2Cursor({ 
    projectDir: process.env.REACT_APP_WORKSPACE_ROOT || '',
    enabled: process.env.NODE_ENV === 'development'
  });
  
  return (
    // Your app components
  );
}
```

2. Set the `REACT_APP_WORKSPACE_ROOT` environment variable to your project's root directory:

```env
REACT_APP_WORKSPACE_ROOT=/path/to/your/project
```

## Features

- Automatically adds `data-source` attributes to components in development mode
- Enables ctrl/cmd-click navigation from browser to Cursor IDE
- Works with Create React App and custom React projects
- TypeScript support

## License

MIT 