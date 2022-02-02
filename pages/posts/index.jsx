/** @jsxImportSource theme-ui */
import * as React from 'react';
import Link from 'next/link';

const Posts = () => (
  <div sx={{ variant: 'containers.page' }}>
    <h1>Posts page path</h1>
    <div
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <div sx={{ width: '33%', p: 2 }}>
        <Link href="/posts/a/1">
          <a sx={{ textDecoration: 'none', cursor: 'pointer' }}>
            <div sx={{ variant: 'containers.card' }}>
              <strong>Post A1</strong>
            </div>
          </a>
        </Link>
      </div>
      <div sx={{ width: '33%', p: 2 }}>
        <Link href="/posts/a/2">
          <a sx={{ textDecoration: 'none', cursor: 'pointer' }}>
            <div sx={{ variant: 'containers.card' }}>
              <strong>Post A2</strong>
            </div>
          </a>
        </Link>
      </div>
      <div sx={{ width: '33%', p: 2 }}>
        <Link href="/posts/b/1">
          <a sx={{ textDecoration: 'none', cursor: 'pointer' }}>
            <div sx={{ variant: 'containers.card' }}>
              <strong>Post B1</strong>
            </div>
          </a>
        </Link>
      </div>
      <div sx={{ width: '33%', p: 2 }}>
        <Link href="/posts/b/2">
          <a sx={{ textDecoration: 'none', cursor: 'pointer' }}>
            <div sx={{ variant: 'containers.card' }}>
              <strong>Post B2</strong>
            </div>
          </a>
        </Link>
      </div>
    </div>
  </div>
);

export default Posts;
