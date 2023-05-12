import React from "react";

import Layout from "@/components/layouts/layout";
import Project from "../components/content/project";

export default function Projects() {
    return(
        <main>
            <Layout>
                {/* START: PROJECTS PAGE */}
                <section>
                    {/* START: PAGE TITLE */}
                    <div className='font-bold text-5xl text-center rotate-6'>
                        projects
                    </div>
                    {/* END: PAGE TITLE */}

                    {/* START: PAGE CONTENT */}
                    <div>
                        <Project />
                    </div>
                    {/* END: PAGE CONTENT */}

                </section>
                {/* END: PROJECTS PAGE */}
            </Layout>
        </main>
    )
}