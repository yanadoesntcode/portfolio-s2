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

    <LoCards
        title="Trello Task Management"
        introduction="This entry highlights my use of Trello to manage tasks during the BELCO Alliance development project. The screenshots display the development phasing plan, a written Trello usage guide I authored, and the live project board. Together, they showcase how I applied clear planning and collaborative organization in a real-world team setting."
        process="I created and structured a Trello board with columns for 'To Do,' 'Doing,' 'Done,' and 'Not able to complete.' Each task card was tagged by week, theme (e.g., Research, Development, Testing), and project scope (BELCO Alliance vs. Education). I also included checklists, members, priorities, and deadlines. To ensure transparency, I wrote a step-by-step Trello guide for the group and connected our development phasing document to match the board’s structure."
        approach="I focused on clarity and consistency—two values that ensured the board would be easy for all members to navigate. I also emphasized self-managed deadlines, making the workspace pressure-free yet organized. With everything visually laid out and labeled, collaboration became smoother and less dependent on constant verbal updates."
        takeaways="I learned that solid project management doesn’t require complex tools—it just needs to be structured around clear expectations and visual organization. The Trello board helped the team prioritize better, reduce confusion, and keep track of deliverables in sync with our development phasing plan. It became a reference point we returned to daily."
        improvements="In the future, I want to add more automation features like card reminders and status triggers. I’d also introduce a 'Feedback & Reflections' column for each sprint to document insights. Lastly, I’d encourage the entire team to take more initiative in updating their own tasks and contributing to board upkeep."
        images={["/images/proftrelloguide.png", "/images/profscheduling.png", "/images/trelloprof.png"]}
    />

    <LoCards
        title="Communication with Stakeholders"
        introduction="This reflection focuses on how I handled stakeholder communication across two different group projects this semester: Create that UX and Branding. Through direct messaging and collaborative feedback, I practiced maintaining professional communication, integrating feedback, and ensuring that our clients felt involved and represented in our design process."
        process="In Create that UX, I sent a follow-up message to our client with the Canva presentation, Figma prototype, and links to inspiration—making everything easy to review. For Branding, we maintained regular contact with our client Daniella through WhatsApp. We shared visuals, asked for feedback, and received direct input like reference sketches and preferences, which we used to guide the branding direction."
        approach="Clear, kind, and well-organized communication helped build trust and kept both projects on track. By rephrasing feedback and staying responsive, we made our stakeholders feel heard and involved in the process."
        takeaways="I learned that professional and empathetic communication leads to better collaboration. Asking clear questions and making clients feel part of the process improves both workflow and results."
        improvements="Next time, I'd try to be even more proactive by asking more specific questions earlier in the process. I’d also make sure all links and materials are well-organized and easy to access from the start. Overall, I’ve become more confident in communicating directly with stakeholders, even in a professional setting."
        images={["/images/communication1.png", "/images/communication2.png", "/images/communication3.png", "/images/communication1.png"]}
    />

    <LoCards
        title="Presentations"
        introduction="These are a Feedback Checkpoint and group presentations created throughout the semester at Fontys, including work for the Branding Project and the Belco Alliance website redesign. Each slide deck reflects different themes and visual directions, but they all share a common thread: I led the design, layout, and overall structure for nearly every presentation my groups delivered."
        process="I naturally took the lead in crafting the presentations for most of our group projects. I was responsible for selecting the templates, setting the visual style, organizing the flow of content, and adding transitions or animations. I assigned roughly one slide per groupmate to fill in with content, but I took charge of making sure the whole thing felt coherent and visually polished. My tool of choice was usually Google Slides—I have experience with both Google Slides and PowerPoint, but I find PowerPoint's interface clunky and less flexible. Google Slides allowed me to work quickly with clean animations and a more intuitive workflow. However, for the Belco Alliance presentation, I used Canva for the first time. Despite its slightly messier interface, it gave me much more creative freedom with layout, motion, and visual design. I was able to bring a more expressive and experimental tone to that presentation, which aligned really well with the project."
        approach="Taking the lead on the visual and structural side of the presentations allowed me to stay in my comfort zone and also enjoy the creative process. I genuinely like making presentations and presenting them—it's a part of group work I look forward to. Canva was a highlight; it helped me push my usual style further, especially when working on more visually layered or bold themes. One challenge, however, was that sometimes presentations didn't get much response from peers—like during our final Branding presentation, where the class didn't ask questions or give feedback beyond “it was good.” Still, our client (Dana) was very happy with what we delivered, which was rewarding."
        takeaways="I've learned that I have a real strength—and passion—for visual storytelling through presentations. I also realized how important it is to adapt to different tools, and how trying something new (like Canva) can unlock unexpected creativity. This semester also reinforced how much I enjoy presenting and owning the structure of a group's delivery."
        improvements="Next time, I'd like to experiment more deeply with Canva and explore features I didn't use yet. I'd also aim to collaborate more during the early stages of presentation design—perhaps involving groupmates in the visual decisions, not just assigning content. Lastly, I'd look for ways to encourage more interaction during and after presentations, especially when presenting to peers who may be hesitant to give feedback."
        images={["/images/presentation1.png", "/images/presentation2.png", "/images/presentation3.png", "/images/presentaitioncheckpoint.png"]}
    />





    <h1>...</h1>

  </main>
}

export default Page