import { NextPage } from 'next';
import NavBar from "@/components/NavBar";
import LoCards from "@/components/LoCards"
import ProfStandardCards from "@/components/ProfStandardCards"


const Page: NextPage = ({}) => {
  return <main className='bg-[#3f3f3f]'>
    <NavBar></NavBar>
    <h1 className='text-6xl text-[#fdfac2] font-semibold ml-110 mt-8'>5: Personal Leadership</h1>
    <p className="text-xl text-[#fdfac2] font-normal ml-85 mt-2 mb-10 w-220">You take the initiative in asking for, and reflecting on, feedback. You identify your own core values as the basis for your study career and professional development.</p>

    <div className="rounded-[1.25rem] bg-[#adadad] my-[3rem]  w-full sm:max-w-sm md:max-w-md lg:ml-80 lg:max-w-4xl h-auto flex flex-col overflow-hidden text-purple px-4 sm:px-6 lg:px-9 pb-2 mt-2 mb-6">

        <p className="text-[#3f3f3f] font-bold text-lg sm:text-xl mb-1">
            Mapping My Path – A Personal Leadership Story
        </p>

        <p className="text-purple font-bold text-lg sm:text-xl mb-1">
            Introduction – What are you looking at?
        </p>
        <p className="font-normal text-sm sm:text-base">
            This is the story of how I, Yana, am actively shaping my future at Fontys UAS through intentional personal leadership. It all started with a spark of clarity during the Career Day—when I stopped seeing my studies as just assignments and deadlines and started viewing them as stepping stones toward a career I genuinely want. This section captures my mindset, my plan, and the actions I'm taking this semester to grow into the professional I aim to be.
        </p>

        <p className="text-purple font-bold text-lg sm:text-xl mb-1">
            Career Day – A Shift in Perspective
        </p>
        <p className="font-normal text-sm sm:text-base">
            At Career Day, I realized that I don't just want to "finish school"—I want to build a creative and strategic career in tech and design. I saw professionals who were confident in presenting their work, skilled in both aesthetics and logic, and unafraid to lead. That’s the kind of professional I want to become: a confident communicator, a visual storyteller, and a developer who understands both the code and the people using it.
        </p>

        <p className="text-purple font-bold text-lg sm:text-xl mb-1">
            Who am I as a professional?
        </p>
        <p className="font-normal text-sm sm:text-base">
            I’m someone who blends structure with creativity. I’m not the loudest person in the room, but I’m often the one making the structure that holds everything together—like setting the agenda, organizing the tasks, or quietly fixing inconsistencies before anyone notices. I care deeply about quality and user experience. I like clean systems, clear visuals, and strong collaboration. I’m a developer, but I’m also a designer, a writer, a planner. I bridge the gaps between roles.
        </p>

        <p className="text-purple font-bold text-lg sm:text-xl mb-1">
            So how do I get there?
        </p>
        <p className="font-normal text-sm sm:text-base">
            This semester, I’ve created a realistic yet ambitious personal timeline. It includes:
        </p>
        <ul className="list-disc list-inside pl-4 font-normal text-sm sm:text-base">
            <li>🎯 Finalizing my Portfolio 2.0 to reflect real growth—not just finished projects, but documented feedback, iterations, and technical improvement.</li>
            <li>🎯 Completing JavaScript and Tailwind certifications to deepen my frontend development expertise.</li>
            <li>🎯 Preparing for semester 3 by researching specialization directions (UX engineering is currently my top interest).</li>
            <li>🎯 Seeking feedback regularly—both from teachers (e.g., Paul, Stan) and peers—to refine my work as early as possible.</li>
            <li>🎯 Documenting everything in Notion and Figma to build traceable evidence for all six learning outcomes.</li>
        </ul>

        <p className="text-purple font-bold text-lg sm:text-xl mb-1">
            What steps am I taking now?
        </p>
        <p className="font-normal text-sm sm:text-base">
            I keep track of deadlines, sync my work with my group, and make sure my evidence is visually presented in a structured Figma file.
        </p>

        <p className="text-purple font-bold text-lg sm:text-xl mb-1">
            Where is this going?
        </p>
        <p className="font-normal text-sm sm:text-base">
            By following this structured but flexible path, I’m building not just a portfolio, but a professional identity. I’m becoming someone who leads by example, takes initiative, and doesn’t just “get it done,” but gets it done with pride and purpose. My next steps will include presenting my growth confidently during assessment and setting a focused goal for specialization in semester 3.
        </p>

        <p className="text-purple font-bold text-lg sm:text-xl mb-1">
            What I’ve learned – and what I’ll keep improving
        </p>
        <p className="font-normal text-sm sm:text-base">
            I’ve learned that leading yourself is the first and hardest leadership skill. That clarity and consistency go further than waiting for motivation. But I also learned I can’t do it alone—I need check-ins, community, and time to reset. In the future, I’ll work on asking for help earlier and balancing my drive with more moments to reflect and recharge.
        </p>
    </div>


    <LoCards
        title="Self-Driven Learning Through YouTube"
        introduction="This reflection highlights how I used YouTube to actively supplement my studies and accelerate my development as a frontend student. Instead of passively watching, I intentionally selected tutorials that filled skill gaps in areas like prototyping, React, and full-stack fundamentals. The attached screenshots show the videos I engaged with, covering both tools like Figma and broader concepts like frontend vs backend."
        process="I started with a Figma prototyping video by Mizko, which completely reframed how I think about structuring interactive flows. I learned to link screens faster and organize prototypes for cleaner handoffs. I then watched a short 5-minute video on Figma basics by Aliena Cai, which clarified how to present interactive flows to teammates and stakeholders. After gaining confidence in design tools, I switched to technical concepts like backend vs frontend (SuperSimpleDev), which helped me visualize how roles split in a real development team. I also explored 'React in 100 Seconds' to grasp the component-based logic and modular mindset behind modern frontend frameworks."
        approach="I treated each video like a micro-lesson. I took screenshots, opened tabs with related docs (like React’s official docs or Figma playgrounds), and paused frequently to test what I saw. I didn’t rush through any tutorial—I tried to replicate core ideas and note which tools or frameworks I wanted to explore next (e.g., Tailwind, Vue, Firebase). By the time I reached Mosh’s 'Frontend Roadmap' and Sajjad Khader’s 'How I’d Learn Frontend Again', I had a clearer vision of what to prioritize: JavaScript fluency, understanding API calls, version control, and build tools."
        takeaways="Watching these videos helped me make smarter decisions about where to spend my focus. For example, I realized I had been overlooking accessibility in design, so I’ve started including alt text and color contrast checks more deliberately. I also internalized that backend doesn’t mean harder—it just means different. Seeing the full-stack structure helped me appreciate how important frontend usability is in bridging the logic and the experience."
        improvements="In the future, I’ll take more notes and organize them into Notion with timestamps and summaries. I also want to try building projects alongside video walkthroughs instead of just absorbing the theory. Lastly, I’d like to add a reflection box after each video to summarize what I applied and how it impacted my project decisions that week."
        images={["/images/youtube1.png", "/images/youtube2.png", "/images/youtube3.png"]}
        hrefs={[
            {
              href: "https://youtu.be/L22lDu3QX2c?si=rS7HH892fACutq_k",
              label: "The CORRECT (and lazy) way to prototype | Figma Tutorial"
            },
            {
              href: "https://youtu.be/1ucLq6JTxac?si=7qw5eNhKC1fQdvvS",
              label: "Figma Prototype Tutorial for Beginners (2025)"
            },
            {
              href: "https://youtu.be/XBu54nfzxAQ?si=zgPxN9H_1eS3Cg5k",
              label: "Backend web development - a complete overview"
            },
            {
              href: "https://youtu.be/Tn6-PIqc4UM?si=LoDtheFxNVId_BEP",
              label: "React in 100 Seconds"
            },
            {
              href: "https://youtu.be/vTuL2_4VOBA?si=mi3I3hqzSC-A8b1b",
              label: "Learning Frontend Development in 2025 lol"
            },
            {
              href: "https://youtu.be/WG5ikvJ2TKA?si=_g0g1BAahEU1WFfA",
              label: "Frontend web development - a complete overview"
            },
            {
              href: "https://youtu.be/Tef1e9FiSR0?si=YpjMDndfMkpYFOxZ",
              label: "The Complete Frontend Developer Roadmap"
            },
            {
              href: "https://youtu.be/shN0HNnvaoM?si=1M50m8N7AtPWiK1r",
              label: "How I'd Learn Front End Web Development (If I Could Start Over)"
            },
      
          ]}

    />

    <div className="rounded-[1.25rem] bg-[#adadad] my-[3rem]  w-full sm:max-w-sm md:max-w-md lg:ml-80 lg:max-w-4xl h-auto flex flex-col overflow-hidden text-purple px-4 sm:px-6 lg:px-9 pb-2 mt-2 mb-6">

        <p className="text-[#3f3f3f] font-bold text-lg sm:text-xl mb-1">
            Leading My Career
        </p>

        <p className="text-purple font-bold text-lg sm:text-xl mb-1">
            What kind of company would you like to work for?
        </p>
        <p className="font-normal text-sm sm:text-base">
            I’d like to work for a creative tech company or digital agency that values strong visual identity and user-focused design. Ideally, it would be a place where collaboration is encouraged, feedback is frequent, and growth opportunities are accessible. A company that works on meaningful digital products—like web platforms, apps, or storytelling websites—would excite me the most. I’m particularly drawn to companies that balance design and development and have a strong culture around communication, experimentation, and inclusion.
        </p>

        <p className="text-purple font-bold text-lg sm:text-xl mb-1">
            What skill sets do you need to reach that goal?
        </p>
        <p className="font-normal text-sm sm:text-base">
            To reach that goal, I need to deepen my front-end development skills—HTML, CSS, and JavaScript are already part of my toolkit, but I plan to add frameworks like React or Vue to strengthen my profile. I’ll also need to improve my UX/UI design proficiency, including wireframing, responsive layout design, and accessibility. Soft skills like professional communication, teamwork, time management, and the ability to receive and apply feedback are just as important and something I’ve already been developing actively.
        </p>

        <p className="text-purple font-bold text-lg sm:text-xl mb-1">
            What are your core values?
        </p>
        <ul className="list-disc list-inside pl-4 font-normal text-sm sm:text-base">
            <li>Creativity – experimenting with visuals, typography, and interaction to create compelling experiences.</li>
            <li>Growth – looking for feedback and ways to improve both technically and personally.</li>
            <li>Curiosity – actively exploring new tools (like Canva or GSAP), learning from courses and real-world feedback.</li>
            <li>Authenticity – I care about making things that feel genuine and reflective of both the user and myself.</li>
            <li>Initiative – Whether it's seeking extra checkpoints, planning feedback moments, or revisiting iterations, I want to take ownership of my learning.</li>
        </ul>

        <p className="text-purple font-bold text-lg sm:text-xl mb-1">
            What kind of ICT media professional do you aspire to be?
        </p>
        <p className="font-normal text-sm sm:text-base">
            I aspire to become a front-end developer who brings a strong design sensibility to code. I want to be the kind of professional who can build accessible, interactive, and visually engaging digital products. Someone who understands both the user and the brand. I see myself working closely with designers, developers, and clients to turn ideas into reality while staying open to feedback, iteration, and growth. Most of all, I want to stay adaptable, constantly learning, and contributing to work that feels impactful and personal.
        </p>
    </div>



    <LoCards
        title="Looking at Opportunities"
        introduction="This is a documentation of my exploration for potential internships and part-time opportunities in the ICT and front-end development field. The screenshots reflect real listings I’ve reviewed on platforms like Glassdoor and Indeed. These positions are aligned with both my current academic path at Fontys and my developing interest in web development and media design."
        process="I began searching actively for internships and side jobs that match my skills and goals. I focused on two types of roles: general ICT support positions and more specific front-end development internships. I analyzed postings for tasks, technical requirements, benefits, and alignment with my current experience. One ICT role I found offers part-time hours supporting government IT infrastructure, while others—like the front-end development internship in Amsterdam—focus on UI, HTML, CSS, and JavaScript. I also noted the expectations for each, such as needing your own transport or being enrolled in a Dutch university."
        approach="The process gave me insight into how broad the ICT field is and how many different directions are possible even within a single discipline. Some postings required more general IT knowledge and technical troubleshooting, while others expected hands-on coding and GitHub experience. I realized that while I still have much to learn, many internships do welcome junior-level applicants who can demonstrate motivation and a willingness to learn."
        takeaways="I learned to carefully compare job roles and assess what fits best with my aspirations—especially my growing interest in front-end development. It was clear that even entry-level roles expect some practical familiarity with tools and a proactive mindset. I also now understand better what kind of roles require mobility, office visits, or specific technical stacks, which will help me plan ahead."
        improvements="Next time, I will create a clearer checklist of priorities—such as hybrid roles, learning opportunities, and mentorship options—so I can quickly filter and focus my applications. I also plan to prepare a tailored CV and a small portfolio that shows my HTML/CSS/JS work from this semester. This way, I’ll be ready to apply as soon as the right internship shows up."
        images={["/images/glassdoor1.png", "/images/glassdoor2.png", "/images/internship3.png"]}
    />

    <LoCards
        title="Career Day at Fontys TQ"
        introduction="This reflection covers my first visit to the Fontys ICT Career Day, which took place on April 17th, 2025. The event was an opportunity to explore future semester topics, meet industry professionals, and confirm the direction I want to take for my next study phase. It was a key experience in helping me solidify my interest in frontend development."
        process="At the event, I spent time walking around the different stands, observing presentations and asking questions. I had an in-depth conversation with Pim Willems, who is involved in the Frontend Development stream. We discussed the structure of Semester 3 for Frontend students and what kind of learning outcomes and projects I could expect. The conversation helped answer many of my lingering questions. I also collected one of the official flyers promoting the Frontend track to reflect on it later."
        approach="The visit was incredibly insightful and validating. Talking to Pim helped me understand what the frontend semester is really about—not just HTML and CSS, but also building full experiences, working with frameworks, and collaborating on code in modern web environments. I felt more connected to this direction than any other option presented at the event. I left with confidence and motivation about my choice."
        takeaways="The biggest takeaway was clarity. While I had been leaning toward frontend development for a while, this event made it official. I now have a better idea of what the curriculum will cover, what kinds of tools I’ll use, and how it connects with what I’ve already started learning. Seeing the energy at the frontend stand and hearing Pim’s explanation made me excited to build on my skills further."
        improvements="While this visit gave me the clarity I needed to confidently choose Frontend Development, next time I want to be more intentional with how I approach the event. I plan to prepare questions in advance not just about study programs, but also about potential industry opportunities. I’ll make a conscious effort to talk with company representatives and explore possible internship or networking connections. Establishing early contact with industry professionals could open doors for future collaborations, internships, or even career insights. I also aim to be more proactive in following up after the event—whether it’s saving contacts, connecting on LinkedIn, or simply reflecting more deeply on conversations that stood out."
        images={["/images/careerday1.png", "/images/careerday2.png", "/images/careerday3.png", "/images/careerday4.png", "/images/careerday5.png"]}
    />

    <LoCards
        title="Taking Feedback Seriously – My FeedPulse Checkpoints"
        introduction="These screenshots highlight the checkpoints I personally authored and managed within FeedPulse across both group projects. Unlike last semester, where we barely documented three moments, this time I made it a habit to capture feedback after every major milestone. I took ownership of writing the entries, ensuring our progress and teacher advice were clearly reflected, contextualized, and trackable."
        process="As you can see through the PDFs I provided (see below) I have submitted all chackpoints for both my individual AND GROUP projects.Throughout the semester, I scheduled feedback sessions proactively—after prototype testing, visual decisions, deployment discussions, and final presentations. Each checkpoint was carefully written with summaries of what we showed and what advice we received. This includes moments with Paul on our Vercel deployment and Git collaboration, with Jan for iterative design validation, and Dirk for user testing feedback. I treated FeedPulse not just as a formal requirement, but as a tool to map our reflection cycle in real time."
        approach="Having full control over the checkpoint documentation helped me streamline communication in our team. My summaries made it easier to recall teacher suggestions when updating the design or preparing for assessments. By treating every checkpoint as a feedback sprint, I enabled my team to iterate faster and more confidently. It also allowed teachers to give us more tailored guidance since they saw consistent updates from us."
        takeaways="I learned that consistency with feedback logs leads to more reliable and richer advice. Instead of vague pointers, we started receiving detailed suggestions on how to improve typography, navigation, or audience targeting. Teachers like Paul, Jan, and Chris could follow our progress over time, and this continuity really strengthened our outcomes. It also validated our process—it showed we weren't improvising but steadily building toward goals."
        improvements="In the future, I want to  also encourage all group members to take turns contributing reflections, so it becomes a shared habit and not a single-person responsibility. Lastly, I plan to better categorize the checkpoints (e.g., Design, Development, Testing) to track growth in specific areas across the semester. I also am not pleased with my checkpoints from the UX project because the consistency was lacking there. I contribute that to being in a bigger group (6 people) but I would like to find a way to keep up the work up to my standard in a bigger team."
        images={[
            "/images/Checkpoint1.png",
            "/images/Checkpoint2.png",
            "/images/Checkpoint3.png",
            "/images/Checkpoint4.png",
            "/images/chechkpoints.png"
        ]}       
         hrefs={[
            {
              href: "images/Checkpointa1.pdf",
              label: "Individual Checkpoints PDF"
            },
            {
              href: "images/Checkpoints2.pdf",
              label: "Branding Project Checkpoints PDF"
            },
            {
              href: "images/Checkpoints3.pdf",
              label: "Development Project Checkpoints PDF"
            },
            {
              href: "images/Checkpoints4.pdf",
              label: "UX Project Checkpoints PDF"
            }
          ]}
    />









    <h1>...</h1>

  </main>
}

export default Page