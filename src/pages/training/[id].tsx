// import Layout from 'components/layout';
// import Media from 'components/Media';
// import gql from 'graphql-tag';
// import Link from 'next/link';
// import { useRouter } from 'next/router';
import { ReactElement } from 'react';
// import {
//   useToolPageQuery,
//   useCreateOneBookmarkedToolMutation,
//   useDeleteOneBookmarkedToolMutation,
// } from 'types/gen/graphql-types';
import { withUser } from 'src/hoc/withUser';
// import { User } from 'types/user';

// interface URLParams {
//   id?: string;
// }

// export const QUERY_TOOL = gql`
//   query ToolPage($id: String!) {
//     tool(where: { id: $id }) {
//       id
//       name
//       description
//       link
//       image
//     }
//   }
// `;

// export const MUTATION_CREATE_BOOKMARK = gql`
//   mutation CreateOneBookmarkedTool($idTool: String!, $idUser: String!) {
//     createOneBookmarkedTool(data: { tool: { connect: { id: $idTool } }, user: { connect: { id: $idUser } } }) {
//       id
//     }
//   }
// `;

// export const MUTATION_DELETE_BOOKMARK = gql`
//   mutation DeleteOneBookmarkedTool($idBookmarkedTool: String!) {
//     deleteOneBookmarkedTool(where: { id: $idBookmarkedTool }) {
//       id
//     }
//   }
// `;

export default function Training(): ReactElement {
  // console.log('User: ', user);
  // const { query }: { query: URLParams } = useRouter();
  // // client side fetch
  // const { data } = useToolPageQuery({ variables: { id: query.id || '' } });
  // const [createOneBookmarkedTool] = useCreateOneBookmarkedToolMutation();
  // const [deleteOneBookmarkedTool] = useDeleteOneBookmarkedToolMutation();

  // const bookmark = user.bookmarkedTools.find(({ toolId }) => toolId === query.id);

  // const toggleBookmark = useCallback(async () => {
  //   if (bookmark) {
  //     deleteOneBookmarkedTool({ variables: { idBookmarkedTool: bookmark.id } });
  //   } else {
  //     createOneBookmarkedTool({ variables: { idTool: query.id!, idUser: user.id } });
  //   }
  // }, [bookmark]);

  return <>Test</>;

  // if (!data) {
  //   return (
  //     <Grid container spacing={4} sx={{ padding: '.5em 2em' }}>
  //       <Grid item xs={12}>
  //         <Link href="/" passHref>
  //           <Breadcrumbs aria-label="breadcrumb">Home</Breadcrumbs>
  //         </Link>
  //       </Grid>
  //       <Grid item xs={12} container>
  //         <Typography variant="h3">Tool not found.</Typography>
  //       </Grid>
  //     </Grid>
  //   );
  // }

  // return (
  //   <>
  //     <Layout title={`${data?.tool?.name} | Next.js example`}>
  //       <Grid container spacing={4} sx={{ padding: '.5em 2em' }}>
  //         <Grid item xs={12}>
  //           <Breadcrumbs aria-label="breadcrumb">
  //             <Link href="/" passHref>
  //               <MUILink>Home</MUILink>
  //             </Link>
  //             <Typography color="textPrimary">{data?.tool?.name}</Typography>
  //           </Breadcrumbs>
  //         </Grid>
  //         <Grid item xs={12} container justifyContent="center" alignItems="center">
  //           {data?.tool?.image && <Media image={data?.tool?.image} name={data?.tool?.name} aria-hidden="true" />}
  //           <Typography variant="h2" sx={(theme) => ({ paddingLeft: '1em', color: theme.palette.text.secondary })}>
  //             {data?.tool?.name}
  //           </Typography>
  //         </Grid>
  //         <Grid item xs={12} container justifyContent="center" alignItems="center">
  //           <Typography variant="body1" sx={{ maxWidth: '80ch' }}>
  //             {data?.tool?.description}
  //           </Typography>
  //         </Grid>
  //         <Grid item xs={12} container justifyContent="center" alignItems="center">
  //           <Button variant="contained" href={data?.tool?.link} color="primary" target="_blank" component="a">
  //             Visit {data?.tool?.name} documentation
  //           </Button>
  //           <Button
  //             sx={{ marginLeft: 4 }}
  //             variant="contained"
  //             color="secondary"
  //             target="_blank"
  //             component="a"
  //             onClick={toggleBookmark}
  //           >
  //             {bookmark ? 'Remove ' : ''}Bookmark
  //           </Button>
  //         </Grid>
  //       </Grid>
  //     </Layout>
  //   </>
  // );
}

export const getServerSideProps = withUser();
