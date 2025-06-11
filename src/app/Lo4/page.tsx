import { NextPage } from 'next';
import NavBar from "@/components/NavBar";
import LoCards from "@/components/LoCards"
import ProfStandardCards from "@/components/ProfStandardCards"


const Page: NextPage = ({}) => {
  return <main className='bg-[#3f3f3f]'>
    <NavBar></NavBar>
    <h1 className='text-6xl text-[#fdfac2] font-semibold ml-110 mt-8'>4: Professional standard</h1>
    <p className="text-xl text-[#fdfac2] font-normal ml-85 mt-2 mb-10 w-220">You apply professional practice, both individually and in teams, in the areas of project organisation, communication with stakeholders, exploratory research, and reporting.</p>


    <ProfStandardCards
        title='Evidence Organization in Figma'
        introduction="This is a curated overview of how I structured and organized all learning outcome evidence for my Semester 2 portfolio using Figma. Each column represents a learning outcome, and each screenshot or item within those columns is chronologically or thematically aligned. This helped me ensure clarity, completeness, and visual structure in my documentation process."
        method="I manually grouped all relevant screenshots, designs, feedback, and coding proof into labeled columns within a Figma file. Each column was titled based on the learning outcome (e.g., “Professional Standard Evidence #1”) and included subtitles and annotations for easier understanding. This process made tracking my semester-wide progress clear and structured, for both reflection and presentation."
        photo1="photo #1 shows branding and product design materials collected under 'Evidence 1' and 'Evidence 2' with visuals of slides, mockups, and real-world materials like packaging or posters."
        photo2="photo #2 shows four columns titled 'Development & V Control Evidence #1–4', each displaying VS Code commits, terminal logs, and Git usage to track my development progress."
        photo3="photo #3 shows my UX & UI outcome where I display several iterations of wireframes, page redesigns, and implemented user feedback through structured slides labeled by evidence number."
        photo4="photo #4 shows Professional Standard-related images and annotated code—tailwind layouts, deployment notes, and feedback response—clearly marked in grouped flows per outcome."
        photo5="photo #5 shows the Personal Leadership evidence, where screenshots of project planning, physical posters, and group interactions are neatly stacked under 'Evidence 1, 2, and 3."
        approach="This visual documentation format helped me keep everything traceable and aligned with specific learning outcomes. It gave me an easy way to verify if all proof was in place and helped teachers quickly navigate my work without confusion."
        takeaways="Figma can be more than a design tool—it works as a structured container for collecting and presenting academic and technical evidence. I became more detail-oriented and consistent with my naming and layout style, which helped build a cleaner final portfolio."
        improvements="Next semester, I plan to build a reusable template in Figma for faster population. I also want to test linking external files directly via live embeds to reduce clutter and allow live access to Git commits or documents."
        images={["/images/proflo1.png", "/images/proflo2.png", "/images/proflo3.png", "/images/proflo4.png", "/images/proflo5.png"]}
    />

    <LoCards
        title="Team Communication & Leadership"
        introduction="These screenshots capture my communication with groupmates during the Branding Project. All exchanges took place via Instagram Direct Messages, our main channel for real-time coordination. The screenshots illustrate how I took initiative in organizing tasks, assigning roles, collecting materials, and ensuring progress across logo selection, group presentations, and travel planning for a key pitch day."
        process="I acted as the main coordinator for our group, especially during tight deadlines. I made sure we were aligned on what had to be presented, by when, and in what format. I guided the logo selection process by initiating a voting system in Figma and WhatsApp. I prompted teammates for updates, clarified meeting times, and offered support when someone struggled with their mental health. For the Tilburg presentation, I proposed a travel plan and ensured everyone was informed."
        approach="My leadership helped prevent last-minute confusion and strengthened group cohesion. Tasks like polling logos and planning the slideshow were completed efficiently. Although managing everything could be overwhelming, I found it natural to lead and motivate others when needed. Some responses from teammates showed appreciation and trust in my direction, which made the effort feel worthwhile."
        takeaways="I learned that leadership isn’t just about giving instructions—it’s also about maintaining emotional awareness, managing stress in others, and keeping communication honest and clear. I developed a better sense of when to push and when to support. I also found that clear, timely group communication can completely change the outcome of high-pressure projects."
        improvements="In future projects, I would try to delegate more responsibilities instead of micromanaging everything. I’d also like to create a shared central overview (e.g. Trello or Notion) early on to reduce reliance on chat messages and improve clarity on who is doing what."
        images={["/images/leadercommunication1.png", "/images/leadercommunication2.png", "/images/leadercommunication3.png", "/images/leadercommunication4.png"]}
    />


    <h1>...</h1>

  </main>
}

export default Page