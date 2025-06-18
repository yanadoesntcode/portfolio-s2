import { NextPage } from 'next';
import NavBar from "@/components/NavBar";
import LoCards from "@/components/LoCards"



const Page: NextPage = ({}) => {


  return <main className='bg-[#3f3f3f]'>
    <NavBar></NavBar>
    <h1 className='text-6xl text-[#fdfac2] font-semibold ml-95 mt-8'>1: Interactive Media products</h1>
    <p className="text-xl text-[#fdfac2] font-normal ml-85 mt-2 mb-10 w-220">You orient in the relevant tech, media and design landscape and create interactive media products that you have tested with users and stakeholders</p>

    <LoCards 
      title="Project X – Suzanne Collins Website Redesign"
      introduction="This project involved a complete redesign concept for the official website of Suzanne Collins, author of *The Hunger Games*. The goal was to modernize her outdated web presence into a sleek, user-centered platform that better reflects her storytelling legacy. The redesign was conducted as an individual UX project, where I took full responsibility for research, design, structure, and presentation of the new vision."
      process="The first phase involved a deep evaluation of the current suzannecollinsbooks.com website. I analyzed its layout flaws, design inconsistencies, and usability gaps. I then conducted competitor research and compiled insights into what modern author platforms do better. Based on this, I created wireframes and high-fidelity prototypes in Figma. The redesign included a fully restructured sitemap, revised navigation, and mockups for pages such as Home, Books, About, Resources, and Audio Editions."
      approach="While the original plan included frontend development with Next.js and Tailwind CSS, I ultimately chose to focus solely on the UX and design due to time constraints. This allowed me to perfect the visual and structural direction of the site without compromising quality. The mockup follows responsive design principles, prioritizes mobile access, and highlights key content like book series, educational materials, and Suzanne Collins’s biography. The design aims to elevate the user experience and capture the personality of her work."
      takeaways="This project helped me develop a complete end-to-end UX design workflow—from research and analysis, through wireframing and prototyping. I also learned to adapt when timelines or scope shift, choosing to deliver a polished and thoughtful redesign over an unfinished codebase. It improved my skills in Figma, strengthened my layout planning, and helped me define a stronger UX rationale for a real-world author use case."
      improvements="In the future, I would continue with the coding phase using the planned tech stack. I’d also conduct usability testing with real users (educators, fans, librarians) to validate the redesign decisions. Finally, I’d like to explore interactive storytelling elements on the site that echo Suzanne Collins’s narrative tone, helping fans engage even deeper."
      images={["/images/projectX2.png", "/images/projectX1.png"]}
      hrefs={[
        {
          href: "https://www.figma.com/proto/e9QsUnSqL2OjYFCZ1T38O6/Project-X-S2?page-id=0%3A1&node-id=19-2&p=f&viewport=-2364%2C385%2C0.56&t=2O14iQt7RNXzH4Ae-1&scaling=min-zoom&content-scaling=fixed",
          label: "View Project X Prototype"
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
    title='Booklet'
    introduction="This is an overview of the foldable booklet I helped create for the BELCO development project. Alongside my teammate, we extended our website presentation by designing a cohesive physical asset to enhance engagement and communicate our work professionally." 
    process="My main contributions were the design of several key booklet sections: the “Programs” page, the “How it works?” explanation, the student testimonials, and the back cover featuring the QR codes. I used Figma to prototype the layout and color structure, ensuring the visual identity aligned with the project’s branding. The foldable booklet was carefully structured to guide users through BELCO’s offerings in a compact, interactive format, with clearly divided sections and scannable links."
    approach='The process was rewarding and pushed me to think beyond screen-based design. Designing the booklet taught me to consider texture, fold lines, and physical readability for print materials. Collaboration with my teammate helped us distribute the design tasks based on individual strengths, which improved both workflow and the final quality of the booklet.'
    takeaways='I learned how to design for print and how to integrate scannable QR links for added interactivity in the booklet. I also gained experience in visual storytelling through sequential booklet panels and discovered the importance of creating a strong, unified visual identity for the project’s physical assets.'
    improvements='Next time, I’d test printed mockups of the booklet earlier in the design phase to catch any issues with layout scaling or paper folds. I’d also experiment more with layout variations for the booklet before finalizing and gather more user feedback to refine how the information flows across its pages.'
    images={["/images/interactivebelco2.png", "/images/interactivebelco3.png", "/images/interactivebelco4.png",  "/images/interactivebelco6.png"]}
    hrefs={[
      {
        href: "https://www.figma.com/proto/snQ3qBvT3ogh00Jf0Abczc/Fontys?page-id=278%3A2702&node-id=1802-128&p=f&viewport=-4525%2C618%2C0.16&t=6kuLUfLDnkXslhlW-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1323%3A12",
        label: "View Booklet Prototype",
      }
    ]}

/>
    
    <LoCards 
    title='Business Cards'
    introduction="This is an overview of the business cards I helped create for the BELCO development project. Alongside my teammate, we extended our website presentation by designing a cohesive physical asset to enhance engagement and communicate our work professionally." 
    process="My main contribution was the design of the business cards. I used Figma to prototype the layout and color structure, ensuring the visual identity aligned with the project’s branding. The business cards were designed to be professional and concise, effectively conveying BELCO’s key information in a compact format."
    approach='The process was rewarding and pushed me to think beyond screen-based design. Designing the business cards taught me to consider texture and physical readability for print materials. Collaboration with my teammate helped us distribute the design tasks based on individual strengths, which improved both workflow and the final quality of the business cards.'
    takeaways='I learned how to design for print and how to balance creative design with practical communication in the context of business cards. I also discovered the importance of creating a strong, unified visual identity for the project’s physical assets.'
    improvements='Next time, I’d test printed mockups of the business cards earlier in the design phase to catch any issues with layout scaling or print quality. I’d also experiment more with layout variations for the business cards before finalizing and gather more user feedback to refine the design and information presentation.'
    images={["/images/interactivebelco1.png", "/images/interactivebelco5.png"]}
    hrefs={[
      {
        href: "https://www.figma.com/proto/snQ3qBvT3ogh00Jf0Abczc/Fontys?page-id=278%3A2702&node-id=1800-155&p=f&viewport=-4525%2C618%2C0.16&t=6kuLUfLDnkXslhlW-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1323%3A12",
        label: "View Business Cards Prototype",
      }
    ]}
    />
    
    
    <LoCards 
    title='Designing Belco Alliance'
    introduction="This is the interactive website prototype I developed for the BELCO Alliance. It builds on the visual identity established in a previous project, which I adapted and evolved into a functional, clickable prototype using Figma’s prototyping features. This version focuses specifically on showcasing partner universities and their exchange programs." 
    process="While my teammate worked on the BELCO Education website—which highlights BELCO’s international programs—I was responsible for the BELCO Alliance site. I took full ownership of this version’s visual and structural redesign, integrating insights from our user research to make it clearer, more accessible, and visually engaging. Each card and section was crafted to help students quickly understand and explore available exchange destinations."
    approach='The process was rewarding and pushed me to think beyond screen-based design. Translating a digital concept into tactile materials taught me to consider texture, fold lines, and physical readability. Collaboration with my teammate also helped us distribute the design tasks based on individual strengths, which improved both workflow and final quality.'
    takeaways='I learned how to adapt existing design systems while giving them a new purpose. I also deepened my understanding of Figma’s prototyping tools and how to apply user research to redesign visual and structural elements effectively. The project emphasized the value of tailoring content to specific user needs—in this case, international students exploring exchange opportunities.'
    improvements='Next time, I’d make sure to include usability testing before finalizing the prototype. I’d also consider setting clearer goals for each user interaction and possibly expanding on filtering or sorting options to help users navigate universities or countries more intuitively.'
    images={[ "/images/interactiveprototype6.png", "/images/interactiveprototype7.png"]}
    hrefs={[
      {
        href: "https://www.figma.com/proto/snQ3qBvT3ogh00Jf0Abczc/Fontys?page-id=278%3A2702&node-id=1323-12&p=f&viewport=-4525%2C618%2C0.16&t=6kuLUfLDnkXslhlW-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1323%3A12",
        label: "View Belco Alliance Prototype",
      }
    ]}
    />

    <LoCards 
    title='Branding Oscar'
    introduction="This is an overview of the branding work I completed at the beginning of the Branding Project, which involved creating brand guides for two different clients—Oscar and Dana (also known as Morphieen)." 
    process="I initially focused on Oscar's branding, researching his portfolio to build a color palette that aligned with his artistic identity. I designed an interactive prototype instead of a static guide to showcase the branding as a dynamic portfolio. I also selected fonts that supported the visual style while maintaining readability and consistency. Later, my focus shifted to Dana, and I adapted my approach accordingly."
    approach='The process was smooth and insightful. Creating an interactive prototype allowed for more engaging storytelling, and tailoring each guide to the individual client helped me connect design decisions to their personal style.'
    takeaways='I learned how to present branding iterations professionally, justify design choices with research and feedback, and frame my outcomes in terms of their impact rather than just their features.'
    improvements="Next time, I'd explore client collaboration earlier in the process to gather feedback sooner. I'd also try experimenting with more interactive design elements and push the creative direction further based on each client's brand personality."
    images={[ "/images/interactiveprototype1.png", "/images/interactiveprototype2.png"]}
    hrefs={[
      {
        href: "https://www.figma.com/proto/VE3Drcy2tCi6SayidNhQ6m/Oscar-Wouterse?page-id=0%3A1&node-id=19-53&viewport=662%2C480%2C0.08&t=MthJwujP0DeV5Pod-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=19%3A53",
        label: "View Oscar Wouterse Branding Protoype"
      }

    ]}
    />

    <LoCards 
    title='My Portfolio'
    introduction="This is the prototype of my personal portfolio website, developed during the second semester at Fontys. It is themed around media—specifically film, photography, vintage VHS tapes, and film rolls—to reflect my personal style and creative influences. The portfolio showcases my projects and learning outcomes in an interactive, visually cinematic layout." 
    process="I began working on my portfolio midway through the Branding Project. Initially, I struggled with a creative block and burnout, which stemmed from the shift in educational structure. Coming from a strictly scheduled Bulgarian high school, the open and flexible approach at Fontys felt unfamiliar and overwhelming. Once I overcame that barrier, I focused on designing a portfolio that captured both function and feeling. I created several iterations in Figma, developed a layout system that allowed users to explore projects through learning outcomes, and built visual consistency using typography, color schemes, and subtle interactive transitions that support the film-inspired theme."
    approach="While the beginning of the process was tough due to burnout and lack of structure, once I found my creative rhythm, the work began to flow. Designing in Figma helped me organize my thoughts and build structure for myself where none was given. The film and media theme gave the project a strong identity, and aligning the visual choices with that concept helped ground all design decisions."
    takeaways="I learned that I need structure in order to thrive, and when it's not provided, I can build it myself through planning and visual mapping. I also discovered the power of thematic storytelling in portfolio design—when a project is rooted in personal identity, it becomes more impactful. Most importantly, I learned how to navigate creative blocks and burnout with patience and self-awareness."
    improvements="Next time, I would try to start earlier and pace the workload better to avoid burnout. I would also reach out for support sooner—whether through peers, mentors, or feedback loops—so I don't stay stuck in a creative block for too long. Additionally, I'd experiment with more advanced interactions and possibly bring the prototype into code for a live version."
    images={[ "/images/interactiveprototype3.png", "/images/interactiveprototype4.png", "/images/interactiveprototype5.png" ]}
    hrefs={[
      {
        href: "https://www.figma.com/proto/PYbOzZxlZQEWb4hlEXpNFH/Portfolio-S2?page-id=1%3A73&node-id=100-668&viewport=-2551%2C286%2C0.1&t=ExdKMevKn2P3dp8m-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A123",
        label: "View my Portfolio Prototype"
      }

    ]}
    
    />

    <LoCards 
    title='Presentations'
    introduction="These are a Feedback Checkpoint and group presentations created throughout the semester at Fontys, including work for the Branding Project and the Belco Alliance website redesign. Each slide deck reflects different themes and visual directions, but they all share a common thread: I led the design, layout, and overall structure for nearly every presentation my groups delivered." 
    process="I naturally took the lead in crafting the presentations for most of our group projects. I was responsible for selecting the templates, setting the visual style, organizing the flow of content, and adding transitions or animations. I assigned roughly one slide per groupmate to fill in with content, but I took charge of making sure the whole thing felt coherent and visually polished. My tool of choice was usually Google Slides—I have experience with both Google Slides and PowerPoint, but I find PowerPoint's interface clunky and less flexible. Google Slides allowed me to work quickly with clean animations and a more intuitive workflow. However, for the Belco Alliance presentation, I used Canva for the first time. Despite its slightly messier interface, it gave me much more creative freedom with layout, motion, and visual design. I was able to bring a more expressive and experimental tone to that presentation, which aligned really well with the project."
    approach="Taking the lead on the visual and structural side of the presentations allowed me to stay in my comfort zone and also enjoy the creative process. I genuinely like making presentations and presenting them—it's a part of group work I look forward to. Canva was a highlight; it helped me push my usual style further, especially when working on more visually layered or bold themes. One challenge, however, was that sometimes presentations didn't get much response from peers—like during our final Branding presentation, where the class didn't ask questions or give feedback beyond “it was good.” Still, our client (Dana) was very happy with what we delivered, which was rewarding."
    takeaways="I've learned that I have a real strength—and passion—for visual storytelling through presentations. I also realized how important it is to adapt to different tools, and how trying something new (like Canva) can unlock unexpected creativity. This semester also reinforced how much I enjoy presenting and owning the structure of a group's delivery."
    improvements="Next time, I'd like to experiment more deeply with Canva and explore features I didn't use yet. I'd also aim to collaborate more during the early stages of presentation design—perhaps involving groupmates in the visual decisions, not just assigning content. Lastly, I'd look for ways to encourage more interaction during and after presentations, especially when presenting to peers who may be hesitant to give feedback."
    images={[ "/images/presentation4.png", "/images/presentation1.png", "/images/presentation2.png", "/images/presentation3.png", "/images/presentaitioncheckpoint.png" ]}
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