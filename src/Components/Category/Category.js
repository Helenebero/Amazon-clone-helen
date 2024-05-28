import React from 'react'
import { CategoryInfos } from "./CatagoryFullinfos"
import CategoryCard from './../Category/CategoryCard'
import classes from "./category.module.css"
function Category() {
    return (
        <section className={classes.category_container}>
            {
                CategoryInfos.map((infos,i) =>(
                    <CategoryCard data={infos} />
                ))
            }
        </section>

    )
}

export default Category
