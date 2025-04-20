# react-jump2source

A React library that enables quick navigation from the UI elements to the source code in your favourite IDE by leveraging the `data-source` attributes added to each component during development build.

## Installation

```bash
npm install react-jump2source --save-dev
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
      require('react-jump2source/babel')
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
    "react-jump2source/babel"
  ]
}
```

## Usage

```tsx
import { initJ2S } from 'react-jump2source';

function App() {

	// Only import and use react-jump2source in development
	useEffect(() => {
		if (process.env.NODE_ENV === 'development') {
			initJ2S({
				projectDir: process.env.REACT_APP_WORKSPACE_ROOT || '',
				enabled: true,
				resolver: 'cursor'
			});
		}
	}, []);

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
- Enables cmd+click navigation from browser to IDE
- Works with Create React App and custom React projects
- TypeScript support

## License

MIT 