import React from "react";
import Image from "next/image";

import TreeIcon from '../icons/undraw/undraw_tree.svg'
import CodeIcon from '../icons/undraw/undraw_code.svg'

import Layout from "@/components/layout";
import Employment from "./employment";
import Academic from "../components/academic";
import Education from "./education";
import Underline from '../icons/undraw/undraw_underline.svg'
import Games from "./games";
import Spacer from "@/components/Spacer";
import Profile from "@/components/profile";
import Work from "../components/work";

export default function About() 
{
  return (
    <main> 
      <Layout>
        <Profile/>
        {/* START: SPACER */}
        <div className="flex justify-center my-8">
          <Spacer /> <Spacer />
        </div>
        {/* END: SPACER */}
        <Work />
        {/* START: SPACER */}
        <div className="flex justify-center my-8">
          <Spacer /> <Spacer />
        </div>
{/* END: SPACER */}
      </Layout>
    </main>
  )
}


