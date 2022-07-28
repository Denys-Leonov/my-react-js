import { useMemo } from "react"

// const useSortedPosts = (posts, sort) => {
//     const sortedPosts = useMemo(() => {
//         if (sort)
//           return [...posts].sort((a, b) =>
//             a[sort].localeCompare(b[sort])
//           )
    
//         return posts
//       }, [posts, sort])

//       return sortedPosts
// }

  const usePosts = (posts, sort, query) => {
    // const sortedPosts = useSortedPosts(posts, sort)
    const sortedPosts = useMemo(() => {
      if (sort)
        return [...posts].sort((a, b) =>
          a[sort].localeCompare(b[sort])
        )
  
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