import React from "react";
import { visitEachChild } from "typescript";
import PropsExample from '../src/components/PropsExample'
import PropsMapping from "../src/components/PropsMapping";

function App() {
  const visitedPlaces = ['Mt. Arenal', 'Disney World', 'St. Johns', 'Puerto Vallarta', 'Sturgis', 'Waikiki' ]
  return <div>
    <PropsExample name="Tom" business="MySpace"/>
    <PropsMapping visited={visitedPlaces}/>
    </div>;
  
}

export default App;
