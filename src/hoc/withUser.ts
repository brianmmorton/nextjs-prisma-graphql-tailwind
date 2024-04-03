import { getSession } from '@auth0/nextjs-auth0';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { prisma } from '../lib/prisma';

export const withUser =
  (
    options: { redirectIfUnauthenticated: boolean } = { redirectIfUnauthenticated: true },
    getServerSidePropsFn = async (_: GetServerSidePropsContext) => ({ props: {} })
  ) =>
  async (context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<unknown>> => {
    const user = await getSession(context.req, context.res);

    if (user) {
      const dbUser = await prisma.user.findFirst({
        where: {
          email: 'brianmmorton@gmail.com', // user.email,
        },
        include: {
          organization: true,
        },
      });

      if (dbUser) {
        return {
          ...(await getServerSidePropsFn(context)),
          props: {
            user: JSON.parse(JSON.stringify(dbUser)),
            ...(await getServerSidePropsFn(context)).props,
          },
        };
      }
    }

    if (!options.redirectIfUnauthenticated) {
      return {
        props: {},
      };
    }

    return {
      redirect: {
        destination: '/api/auth/logout?returnTo=/',
        permanent: true,
      },
    };
  };
