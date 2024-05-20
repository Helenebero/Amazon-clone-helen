import React from 'react'
import classes from "./category.module.css"
function CategoryCard({data}) {
  return (
    <div className={classes.Category}>
      <a href=''>
        <span>
            <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink}alt=''/>
        <p> shop me</p>
      </a>
    </div>
  )
}

export default CategoryCard
