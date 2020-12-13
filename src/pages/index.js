import React, { useEffect, useState } from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Receipe from "./Receipe"
import "../components/layout.css"

const IndexPage = () => {

  const APP_ID = "99545b6b"
  const APP_KEY ="88aa4c09c45fe6bb9f2c6fc22331d877"

  const [receipes, setReceipes] = useState([])
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("chicken")

  useEffect(() => {
    getReceipes()
  },[query])

  const getReceipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    setReceipes(data.hits)
    // console.log(data.hits)
  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  return (
    <Layout>
      <SEO title="Home" />
      <div className="index">
        <form onSubmit={getSearch} className="search-form">
          <input className="search-bar" type="text" value={search} onChange={updateSearch} />
          <input
							type='button'
							value='search'
							onClick={(e) => getSearch(e)}
							className='search-button'
						/>
        </form>
        <div className="recipe">
          {receipes.map(receipe => (
            <Receipe 
              key={receipe.recipe.label}
              title={receipe.recipe.label} 
              calories={receipe.recipe.calories} 
              image={receipe.recipe.image} 
              ingredients={receipe.recipe.ingredients}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
