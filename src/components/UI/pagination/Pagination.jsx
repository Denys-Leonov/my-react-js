import React from "react";
import { usePagesArray } from "../../hooks/usePagesArray";

const Pagination = ({totalPages, updatePages, page}) =>{

    const pagesArray = usePagesArray(totalPages)

    return(
        <div className="page__wrapper">
            {pagesArray.map((p) => (
              <span key={p} onClick={() => updatePages(p)} className={page === p ? 'page page__current' : 'page'}>{p}</span>
            ))}
          </div>
    )
}

export default Pagination