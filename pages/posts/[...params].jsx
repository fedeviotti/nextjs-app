import * as React from 'react';
import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  const { params } = router.query;

  return <h1>Post {params?.map((param) => param).join(',')}</h1>;
};

export default Post;
