import Cors from "cors";
import { NextRequest } from "next/server";

type NextResponseNextFunction = (params: {
  request: {
    headers: Headers;
  };
}) => void;

type HeadersSetter = {
  setHeader(key: string, value: string): void;
};

/**

A utility function that runs middleware in the context of a Next.js API route handler.
@param req The Next.js request object.
@param res An object containing a setHeader function for setting headers on the response.
@param fn The middleware function to run.
@returns A promise that resolves with the result of the middleware function or rejects with an error.
*/

const runMiddleware = (req: NextRequest, res: HeadersSetter, fn: Function) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
};

/**

Sets up CORS middleware for a Next.js API route.
@param request - The incoming NextRequest
@param nextResponseNext - NextRequest.next function
@param options - Optional CORS configuration options.
@returns void
*/

const setupCors = async (
  request: NextRequest,
  nextResponseNext: NextResponseNextFunction,
  options?: Cors.CorsOptions | Cors.CorsOptionsDelegate<Cors.CorsRequest> | undefined
) => {
  const cors = Cors(options);

  const requestHeaders = new Headers(request.headers);

  await runMiddleware(
    request,
    {
      setHeader(key: string, value: string) {
        requestHeaders.set(key, value);
      }
    },
    cors
  );

  nextResponseNext({
    request: {
      headers: requestHeaders
    }
  });
};

export default setupCors;
