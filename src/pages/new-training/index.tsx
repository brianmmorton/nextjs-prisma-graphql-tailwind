import { NewTrainingForm } from 'src/containers/NewTrainingForm';
import { withUser } from 'src/hoc/withUser';
import type { User } from 'types/user';
import { useRouter } from 'next/router';
import { Layout } from 'src/app/layout';

export default function NewTraining({ user }: { user: User }) {
  const router = useRouter();

  return (
    <Layout>
      <NewTrainingForm
        onComplete={(training) => {
          router.push(`/training/${training.id}`);
          return;
        }}
        user={user}
      />
    </Layout>
  );
}

export const getServerSideProps = withUser({ redirectIfUnauthenticated: false });
