import React from "react"
import MyInput from "./UI/input/MyInput"
import MySelect from "./UI/select/MySelect"


const PostFilter = ({filter, setFilter}) => {
  
  
  
  
    return (
    <div>
      <MyInput
        placeholder="Searching..."
        value={filter.query}
        onChange={(e) => setFilter({...filter, query: e.target.value})}
      />
      <MySelect
        value={filter.sort}
        onChange={selectedOption => setFilter({...filter, sort: selectedOption})}
        options={[
          { name: ' title', value: 'title' },
          { name: 'body', value: 'body' },
        ]}
        defaultValue={'Sorting by'}
      />
    </div>
  )
}

export default PostFilter
