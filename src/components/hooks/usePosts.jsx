import { useMemo } from 'react'

const usePosts = (posts, sort, query) => {
  const sortedPosts = useMemo(() => {
    if (sort)
      return [...posts].sort((a, b) => {
        if (sort === 'id') {
          return a[sort] - b[sort]
        }

        return a[sort].localeCompare(b[sort])
      })

    return posts
  }, [posts, sort])

  const sorterAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    )
  }, [query, sortedPosts])

  return sorterAndSearchedPosts
}

export default usePosts
