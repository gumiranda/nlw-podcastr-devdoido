import { rest } from 'msw';

export const handlers = [
  rest.get('https://httpbin.org/anything', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        args: {
          ingredients: ['bacon', 'tomato', 'mozzarella', 'pineapples']
        }
      })
    );
  })
];
