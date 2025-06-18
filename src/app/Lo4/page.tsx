import { NextPage } from 'next';
import NavBar from "@/components/NavBar";
import LoCards from "@/components/LoCards"
import ProfStandardCards from "@/components/ProfStandardCards"


const Page: NextPage = ({}) => {
  return <main className='bg-[#3f3f3f]'>
    <NavBar></NavBar>
    <h1 className='text-6xl text-[#fdfac2] font-semibold ml-110 mt-8'>4: Professional standard</h1>
    <p className="text-xl text-[#fdfac2] font-normal ml-85 mt-2 mb-10 w-220">You apply professional practice, both individually and in teams, in the areas of project organisation, communication with stakeholders, exploratory research, and reporting.</p>

    <LoCards 
      title="User Interview – UX Research for Belco"
      introduction="This entry reflects a single user interview I conducted to inform the UX strategy for the Belco Alliance project. The session was live-transcribed by me and divided into two parts: general background questions and a focused discussion on educational website preferences. At the participant's request, their identity was anonymized, and any visuals provided were AI-generated to respect privacy. All responses are authentic and transcribed directly during the interview."
      process="The interview began with simple demographic and educational questions to build rapport and understand the participant’s academic background. The second section shifted to their behaviors and expectations when navigating study-related websites. This included discussion on layout preferences, trust indicators, language accessibility, and content hierarchy. The participant had attempted an Erasmus application and had prior experience browsing official educational platforms like Erasmus+."
      approach="I used a semi-structured interview method, allowing the participant space to answer freely while ensuring all core topics were covered. No recording tools were used—this decision helped create a comfortable environment and allowed me to practice real-time transcription. The goal was to gather honest feedback about what features matter most to students when using digital platforms to explore academic opportunities abroad."
      takeaways="The participant emphasized a need for clarity and structure, saying they often lose interest if program information isn’t accessible immediately. Clean, minimalistic layouts with soft use of color were preferred, while videos were seen as unnecessary. Real student stories—not curated testimonials—were cited as key trust signals. They preferred filtering by topic rather than country or university, and valued tools like maps for spatial context. Overall, the feedback strongly validated the design direction we were taking with the Belco site: clean, clear, and student-focused."
      improvements="In future interviews, I’d consider recording audio (with consent) for richer transcript accuracy and add a follow-up questionnaire to capture additional insights. I’d also like to run follow-up usability tests on the actual Belco prototype to see how well it aligns with the expectations expressed here. Expanding the interview pool to students in other domains or institutions could help uncover broader needs and refine the site’s navigation and filtering tools."
      images={["/images/studentinterview1.png", "/images/studentinterview2.png"]}
      hrefs={[
        {
          href: "images/Transcribed-Interview.pdf",
          label: "Read full Transcript",
        }
      ]}
    />



<ProfStandardCards
  title='Coda Environment'
  introduction="This is a curated overview of how I structured and organized all project documentation and collaborative workspaces using Coda throughout Semester 2. Each Coda document reflects a distinct course project—UX, Development, Branding, and Research—allowing me to centralize project planning, research, interviews, and progress tracking in a professional, accessible way."
  method="Each project workspace in Coda was custom-built with collapsible sections, visual links, and smart navigation panels. I created templates for team charters, project plans, interview logs, user research, and deliverable tracking. Pages were labeled according to deliverables, and documents were sorted by semester phase (e.g. Sprint 1, User Testing, Research, Development) to maintain consistency and clarity for both myself and my team."
  photo1="Photo #1 shows the Branding Project workspace, with documents including the team charter, client research, Dana’s notes, and presentations. Visual assets like the Morphienn logo and deliverables were embedded to support cross-functional design tracking."
  photo2="Photo #2 shows the Development Project workspace, which includes heuristic evaluations, checkpoint reviews, decision reports, and GitHub-related planning. This was used to track the BelCo platform’s backend development and research implementation."
  photo3="Photo #3 gives an overview of my full Coda dashboard, where each project is organized and starred for quick access. This helped keep my academic and collaborative projects centralized in one space."
  photo4="Photo #4 is from Project X, a concept project where I compiled competitor research and visual documentation of exploratory brand studies. The project page was themed visually to match the aesthetic direction we were exploring."
  photo5="Photo #5 shows the 'Create That UX Project' workspace, where I stored UX-specific research including interview transcripts, personas, MoSCoW priority lists, and survey results—all used to develop the Belco UX case study. The file includes detailed notes and user-driven validation."
  approach="Using Coda allowed me to bring structure and traceability to multi-stakeholder projects. Each file acted as a living knowledge base, with clear ownership, deadlines, and visual embedding. This made it easy to collaborate, share progress, and stay aligned with academic requirements like professional standards and learning outcomes."
  takeaways="Coda became a critical tool in my workflow for real-time documentation, UX research planning, and agile development coordination. It supported not just task tracking but also deeper research collection, interview archiving, and reflection writing in a visually organized way."
  improvements="Next semester, I want to make better use of Coda automation (like reminders or linked checklists) to improve task delegation. I’d also like to connect my GitHub commits directly into dev-related pages and explore exporting entire project docs as structured PDFs to simplify portfolio packaging."
  images={[
    "/images/brandingprojectcoda.png",
    "/images/devprojectcoda.png",
    "/images/codafiles.png",
    "/images/projectXcoda.png",
    "/images/uxprojectcoda.png"
  ]}
  hrefs={[
    {
      href: "images/Create that UX Project.pdf1",
      label: "UX Project Full PDF"
    },
    {
      href: "images/DevelopmentProject .pdf",
      label: "Development Project Full PDF"
    },
    {
      href: "images/Branding Project Media Girls.pdf",
      label: "Branding Project Full PDF"
    },
    {
      href: "images/Project X.pdf",
      label: "Project X Full PDF"
    }
  ]}
/>

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
        hrefs={[
            {
              href: "https://www.figma.com/design/PYbOzZxlZQEWb4hlEXpNFH/Portfolio-S2?node-id=0-1&t=vslHOUsi9btV6gxn-1",
              label: "View my Methododlogy on Figma "
            }
    
        ]}
    />

    <LoCards 
        title="User Testing"
        introduction="This is a summary of a user testing session conducted to evaluate the usability and clarity of my portfolio website. The test helped identify how users interact with different sections, what information they focus on, and where improvements can be made for better navigation and engagement."
        process="I decided to do more of a 'Freedom' based test meaning I gave full control to the user and observed their reactions. User asked only 'Which Learning Outcome should I see next?' which I consider a normal reaction due to the overactivity of the navigationbar. I cannot do much about it because of the Fontys requirements. During the session, I observed a user exploring my live portfolio, with attention to how intuitively they accessed learning outcomes and read through project documentation. I recorded the session to capture both on-screen behavior and user reactions. This helped validate content structure, layout clarity, and accessibility across devices."
        approach="The setup was natural — I asked the user to browse my portfolio without instruction while I observed silently. The goal was to see whether they could locate key sections independently, how long they engaged with each part, and how they reacted to the visual language and interactivity. I took notes and later reviewed the screen recording for interaction details."
        takeaways="This test confirmed which parts of the site were intuitive. Users responded positively to the clean layout. I learned that early-stage testing like this is crucial for catching usability issues before broader feedback cycles. It also showed the importance of readable text, visual hierarchy, and consistent navigation cues."
        improvements="In future iterations, I’d conduct multiple rounds of testing with users from varied backgrounds and devices. I'd also include a short feedback form post-test to gather direct comments. Additionally, I’d test dynamic interactions like hover animations and navigation transitions to ensure they enhance rather than distract."
        images={["/images/usertest2.png", "/images/usertest1.png"]}
        hrefs={[
          {
            href: "images/UserTest-Portfolio.mp4",
            label: "Watch User Test Recording",
          }
        ]}
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
        hrefs={[
            {
              href: "images/How_to_Use_Trello_Board.pdf",
              label: "Trello Guide PDF "
            },
            {
              href: "images/Project_Plan.pdf",
              label: "Project Plan PDF (Phasing)"
            },
            {
              href: "https://trello.com/invite/b/681b16c0e46a6e98d72b24e2/ATTI7bf33fab25ecf8e08f85384f2d1d74f6FADEDFE8/development-workspace",
              label: "Trello Board"
            }
    
            ]}   
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
        hrefs={[
            {
              href: "https://www.canva.com/design/DAGlXL2pCu4/Pd3ajgb17l0xAGNNuIcA_A/edit?utm_content=DAGlXL2pCu4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
              label: "View Presentation 1"
            },
            {
              href: "https://www.canva.com/design/DAGj3DZceAg/Q1QMaFGHqie7Yap3era9aA/edit?utm_content=DAGj3DZceAg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
              label: "View Presentation 2"
            },
            {
              href: "https://docs.google.com/presentation/d/1ZkqH3myk2CbliYp5ABke_E8ZiXFFIZycSP_wR5SQQ8k/edit?usp=sharing",
              label: "View Presentation 3"
            },
            {
              href: "https://docs.google.com/presentation/d/1nGTcF8KT2d3mo3q3mOGpGOBsQGjmtjkTqWiHWqsiUdA/edit?usp=sharing",
              label: "View Presentation 4"
            },
      
          ]}
    />





    <h1>...</h1>

  </main>
}

export default Page