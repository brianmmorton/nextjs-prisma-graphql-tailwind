import { Training } from '@prisma/client';
import gql from 'graphql-tag';
import { QUERY_APP } from 'src/pages/index';
import React, { ReactElement } from 'react';
import { useCreateTrainingMutation } from 'types/gen/graphql-types';
import type { User } from 'types/user';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from 'src/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from 'src/components/ui/form';
import { Input } from 'src/components/ui/input';

interface Props {
  onComplete: (training: Pick<Training, 'id'>) => void;
  user: User;
}

const formSchema = z.object({
  name: z.string().min(2).max(30),
  description: z.string().min(0).max(250),
  competencyThreshold: z.number().min(20).max(100),
  maxNumHours: z.number().min(0.1).max(100),
});

export const MUTATION_CREATE_TRAINING = gql`
  mutation CreateTraining(
    $name: String!
    $description: String!
    $competencyThreshold: Int!
    $maxNumHours: Float!
    $deadline: DateTime!
    $author: UserCreateNestedOneWithoutTrainingsInput!
    $organization: OrganizationCreateNestedOneWithoutTrainingsInput!
  ) {
    createOneTraining(
      data: {
        name: $name
        description: $description
        competencyThreshold: $competencyThreshold
        maxNumHours: $maxNumHours
        deadline: $deadline
        author: $author
        organization: $organization
      }
    ) {
      id
      name
      description
      competencyThreshold
      maxNumHours
    }
  }
`;

export type TrainingForm = Omit<Training, 'id'>;

export const NewTrainingForm = ({ onComplete, user }: Props): ReactElement => {
  const [createTraining] = useCreateTrainingMutation();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      description: '',
      competencyThreshold: 80,
      maxNumHours: 2,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { name, description, competencyThreshold, maxNumHours } = values;
    const deadline = new Date();
    deadline.setFullYear(deadline.getFullYear() + 1);

    try {
      const response = await createTraining({
        variables: {
          name,
          description: description ?? '',
          competencyThreshold: Number(competencyThreshold),
          maxNumHours,
          deadline: deadline,
          author: {
            connect: {
              id: user.id,
            },
          },
          organization: {
            connect: {
              id: user.organizationMembership[0].organization.id,
            },
          },
        },
        refetchQueries: [{ query: QUERY_APP }],
        onError: (error) => {
          // eslint-disable-next-line no-console
          console.error(error);
        },
      });

      if (response.data?.createOneTraining) {
        onComplete(response.data?.createOneTraining);
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Error occurred!', err);
    }
  };

  return (
    <div className="p-2 max-w-screen-sm">
      <h2 className="text-2xl font-bold leading-9 tracking-tight text-gray-900">Create a new training</h2>

      <div className="mt-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Fire and Safety Training" {...field} />
                  </FormControl>
                  <FormDescription>A name for the training you want to create.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="A training to help employees understand how to respond to fires in the office."
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>A description for the training you want to create.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="competencyThreshold"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Passing Competency Level</FormLabel>
                  <FormControl>
                    <Input placeholder="80" {...field} />
                  </FormControl>
                  <FormDescription>A passing grade from 0 to 100 percent</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="maxNumHours"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Maximum duration</FormLabel>
                  <FormControl>
                    <Input placeholder="2" {...field} />
                  </FormControl>
                  <FormDescription>
                    The maximum number of hours you want people to spend on this training.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-row">
              <Button type="submit">Submit</Button>
              <Button className="ml-2">Cancel</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};
