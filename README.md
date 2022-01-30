# Example of bad behavior with random in useState

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Repro steps

- `npx create-next-app broken-demo --use-npm --ts`
- Add pages/broken.tsx
- npm run dev
- Load /broken 
- Hover over the link -- the linked Wikipedia page is different from the link text, even though it's the same variable.


You can also see this in the [deployed version](https://bad-next-behavior.vercel.app/broken) where the animal in the link also happens to always stay the same, even while the rendered link animal is changing.


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
