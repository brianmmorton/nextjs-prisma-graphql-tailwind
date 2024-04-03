import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from 'src/components/ui/table';
import Link from 'next/link';
import type { Training } from 'types/gen/graphql-types';
import { Button } from 'src/components/ui/button';
import { useRouter } from 'next/router';

interface Props {
  trainings: Pick<Training, 'id' | 'name' | 'description' | 'deadline'>[];
}

export function Trainings({ trainings }: Props) {
  const router = useRouter();

  return (
    <Table>
      <TableCaption>
        <Button variant="default" onClick={() => router.push('/new-training')}>
          Add a training
        </Button>
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Deadline</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {trainings.map((training) => (
          <TableRow key={training.id}>
            <TableCell className="font-medium">
              <Link href={`/training/${training.id}`}>{training.name}</Link>
            </TableCell>
            <TableCell>{training.description}</TableCell>
            <TableCell>{training.deadline}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
