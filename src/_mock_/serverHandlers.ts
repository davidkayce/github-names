/* eslint-disable import/prefer-default-export */
import { rest } from 'msw';
import {
  mockedOrganisations,
  mockedMembers
} from './mockData';

export const handlers = [
  rest.get('https://api.github.com/organizations?per_page=6&since=4242', (_req, res, ctx) => {
    return res(ctx.delay(100), ctx.status(200), ctx.json(mockedOrganisations));
  }),
  rest.get('https://api.github.com/organizations?per_page=6&since=4242', (_req, res, ctx) => {
    return res(ctx.delay(100), ctx.status(200), ctx.json(mockedMembers));
  })
];