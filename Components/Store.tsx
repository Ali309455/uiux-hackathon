import React from 'react'
import Advertisment from './Advertisemnet'
import Featured from './Featured'
import ExploreStyles from './ExploreStyles'
import TopCategories from "./TopCategories"
import OurProducts from "./OurProucts"


const Store = () => {
  return (
    <div>
      <Advertisment/>
      <Featured/>
      <TopCategories/>
      <ExploreStyles/>
      <OurProducts/>
    </div>
  )
}

export default Store
