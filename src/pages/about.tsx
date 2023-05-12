import React from "react";
import Image from "next/image";

import Layout from "@/components/layouts/layout";
import Employment from "@/components/content/employment";
import Academic from "@/components/content/academic";
import Education from "@/components/content/education";
import Underline from '../icons/undraw/undraw_underline.svg'
import Games from "@/components/content/games";
import Spacer from "@/components/Spacer";
import Profile from "@/components/content/profile";
import Work from "../components/content/work";

import TreeIcon from '../../icons/undraw/undraw_tree.svg'
import CodeIcon from '../../icons/undraw/undraw_code.svg'

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


