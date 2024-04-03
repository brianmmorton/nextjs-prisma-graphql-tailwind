import { gql } from '@apollo/client';
import { Trainings } from 'src/containers/Trainings';
import { useAppQuery } from 'types/gen/graphql-types';
import { withUser } from 'src/hoc/withUser';
import type { User } from 'types/user';
import Link from 'next/link';
import { Layout } from 'src/app/layout';

export const QUERY_APP = gql`
  query App {
    trainings(orderBy: { name: asc }) {
      id
      name
      description
      deadline
    }
  }
`;

export default function Home({ user }: { user?: User | null }) {
  const { data } = useAppQuery({
    skip: !user,
  });

  if (!user) {
    return (
      <Layout>
        <p>Welcome to Trainer</p>
        <Link href="/api/auth/login">Login</Link>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="mt-5 min-h-full">
        <div className="mt-2">
          <h2 className="text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {data?.trainings.length} trainings
          </h2>
          <Trainings trainings={data?.trainings ?? []} />
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = withUser({ redirectIfUnauthenticated: false });
