# `route-handlers-cors` is a CORS middleware library for Next.js Route Handlers

`setupCors` is a utility function that sets up Cross-Origin Resource Sharing (CORS) middleware for a Next.js Route Handlers. It allows you to define the CORS configuration options and applies them to incoming requests, adding the appropriate CORS headers to the response.

## Installation

To use `setupCors`, you'll need to install the `route-handlers-cors` package as a dependency:

```bash
# Using npm
npm install --save route-handlers-cors@latest

# Using yarn
yarn add route-handlers-cors@latest

# Using pnpm
pnpm add route-handlers-cors@latest
```

## Usage

Here's an example of how to use `setupCors` in a Next.js Route Handlers:

```typescript
import setupCors from 'route-handlers-cors';
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) => {
  // Set up CORS for this API route
  await setupCors(request, NextResponse.next, {
    // Define your CORS configuration options here
    origin: 'https://example.com', // origin or *
    methods: ['GET', 'POST'],
    allowedHeaders: ['Authorization'],
  });

  // Handle your API route logic here
  // ...

  // Return your API response
  return NextResponse.json({ success: true });
};
```

## Support for

`route-handlers-cors` is an open source project licensed by [MIT](LICENSE). If you would like to support the project or become a sponsor, please [contact me here](https://twitter.com/getbold.eth).

## Stay in touch

- Github [@mrruby](https://github.com/mrruby)
- Twitter [@getbold.eth](https://twitter.com/getbold.eth)

## Contributors

Thanks to the wonderful people who collaborate with me !

## License

`route-handlers-cors` under [License.](LICENSE)
