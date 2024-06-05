import { IPost } from "../models/IPost";
import { postApi } from "../services/postService";

export const Posts = () => {
  const { data: posts, error, isLoading } = postApi.useFetchAllPostsQuery(10);
  const [createPost, {}] = postApi.useCreatePostMutation();
  const [updatePost, {}] = postApi.useUpdatePostMutation();
  const [deletePost, {}] = postApi.useDeletePostMutation();

  const handleCreate = async () => {
    const title = prompt();
    await createPost({ title, body: title } as IPost);
  };
  const handleUpdate = (post: IPost) => {
    const title = prompt() || "";
    updatePost({ ...post, title });
  };
  const handleRemove = (post: IPost) => {
    deletePost(post);
  };
  return (
    <div>
      {isLoading && <h3>...Loading</h3>}
      {error && <h3>Something went wrong</h3>}
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>
            {post.title}
            <button onClick={() => handleRemove(post)}>Delete</button>
            <button onClick={() => handleUpdate(post)}>Update</button>
          </li>
        ))}
      </ul>
      <br />
      <button onClick={handleCreate}>Create new post</button>
    </div>
  );
};
