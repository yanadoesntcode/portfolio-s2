import { NextPage } from 'next';
import NavBar from "@/components/NavBar";
import LoCards from "@/components/LoCards"


const Page: NextPage = ({}) => {
  return <main className='bg-[#3f3f3f]'>
    <NavBar></NavBar>
    <h1 className='text-6xl text-[#fdfac2] font-semibold ml-95 mt-8'>1: Interactive Media products</h1>
    <p className="text-xl text-[#fdfac2] font-normal ml-85 mt-2 mb-10 w-220">You orient in the relevant tech, media and design landscape and create interactive media products that you have tested with users and stakeholders</p>

    <LoCards 
    title='Booklet'
    introduction="This is an overview of the foldable booklet I helped create for the BELCO development project. Alongside my teammate, we extended our website presentation by designing a cohesive physical asset to enhance engagement and communicate our work professionally." 
    process="My main contributions were the design of several key booklet sections: the “Programs” page, the “How it works?” explanation, the student testimonials, and the back cover featuring the QR codes. I used Figma to prototype the layout and color structure, ensuring the visual identity aligned with the project’s branding. The foldable booklet was carefully structured to guide users through BELCO’s offerings in a compact, interactive format, with clearly divided sections and scannable links."
    approach='The process was rewarding and pushed me to think beyond screen-based design. Designing the booklet taught me to consider texture, fold lines, and physical readability for print materials. Collaboration with my teammate helped us distribute the design tasks based on individual strengths, which improved both workflow and the final quality of the booklet.'
    takeaways='I learned how to design for print and how to integrate scannable QR links for added interactivity in the booklet. I also gained experience in visual storytelling through sequential booklet panels and discovered the importance of creating a strong, unified visual identity for the project’s physical assets.'
    improvements='Next time, I’d test printed mockups of the booklet earlier in the design phase to catch any issues with layout scaling or paper folds. I’d also experiment more with layout variations for the booklet before finalizing and gather more user feedback to refine how the information flows across its pages.'
    images={["/images/interactivebelco2.png", "/images/interactivebelco3.png", "/images/interactivebelco4.png",  "/images/interactivebelco6.png"]}/>
    
    <LoCards 
    title='Business Cards'
    introduction="This is an overview of the business cards I helped create for the BELCO development project. Alongside my teammate, we extended our website presentation by designing a cohesive physical asset to enhance engagement and communicate our work professionally." 
    process="My main contribution was the design of the business cards. I used Figma to prototype the layout and color structure, ensuring the visual identity aligned with the project’s branding. The business cards were designed to be professional and concise, effectively conveying BELCO’s key information in a compact format."
    approach='The process was rewarding and pushed me to think beyond screen-based design. Designing the business cards taught me to consider texture and physical readability for print materials. Collaboration with my teammate helped us distribute the design tasks based on individual strengths, which improved both workflow and the final quality of the business cards.'
    takeaways='I learned how to design for print and how to balance creative design with practical communication in the context of business cards. I also discovered the importance of creating a strong, unified visual identity for the project’s physical assets.'
    improvements='Next time, I’d test printed mockups of the business cards earlier in the design phase to catch any issues with layout scaling or print quality. I’d also experiment more with layout variations for the business cards before finalizing and gather more user feedback to refine the design and information presentation.'
    images={["/images/interactivebelco1.png", "/images/interactivebelco5.png"]}/>
    
    
    <LoCards 
    title='Designing Belco Alliance'
    introduction="This is the interactive website prototype I developed for the BELCO Alliance. It builds on the visual identity established in a previous project, which I adapted and evolved into a functional, clickable prototype using Figma’s prototyping features. This version focuses specifically on showcasing partner universities and their exchange programs." 
    process="While my teammate worked on the BELCO Education website—which highlights BELCO’s international programs—I was responsible for the BELCO Alliance site. I took full ownership of this version’s visual and structural redesign, integrating insights from our user research to make it clearer, more accessible, and visually engaging. Each card and section was crafted to help students quickly understand and explore available exchange destinations."
    approach='The process was rewarding and pushed me to think beyond screen-based design. Translating a digital concept into tactile materials taught me to consider texture, fold lines, and physical readability. Collaboration with my teammate also helped us distribute the design tasks based on individual strengths, which improved both workflow and final quality.'
    takeaways='I learned how to adapt existing design systems while giving them a new purpose. I also deepened my understanding of Figma’s prototyping tools and how to apply user research to redesign visual and structural elements effectively. The project emphasized the value of tailoring content to specific user needs—in this case, international students exploring exchange opportunities.'
    improvements='Next time, I’d make sure to include usability testing before finalizing the prototype. I’d also consider setting clearer goals for each user interaction and possibly expanding on filtering or sorting options to help users navigate universities or countries more intuitively.'
    images={[ "/images/interactiveprototype6.png", "/images/interactiveprototype7.png"]}/>

    <LoCards 
    title='Branding Oscar'
    introduction="This is an overview of the branding work I completed at the beginning of the Branding Project, which involved creating brand guides for two different clients—Oscar and Dana (also known as Morphieen)." 
    process="I initially focused on Oscar's branding, researching his portfolio to build a color palette that aligned with his artistic identity. I designed an interactive prototype instead of a static guide to showcase the branding as a dynamic portfolio. I also selected fonts that supported the visual style while maintaining readability and consistency. Later, my focus shifted to Dana, and I adapted my approach accordingly."
    approach='The process was smooth and insightful. Creating an interactive prototype allowed for more engaging storytelling, and tailoring each guide to the individual client helped me connect design decisions to their personal style.'
    takeaways='I learned how to present branding iterations professionally, justify design choices with research and feedback, and frame my outcomes in terms of their impact rather than just their features.'
    improvements="Next time, I'd explore client collaboration earlier in the process to gather feedback sooner. I'd also try experimenting with more interactive design elements and push the creative direction further based on each client's brand personality."
    images={[ "/images/interactiveprototype1.png", "/images/interactiveprototype2.png"]}/>

    <LoCards 
    title='My Portfolio'
    introduction="This is the prototype of my personal portfolio website, developed during the second semester at Fontys. It is themed around media—specifically film, photography, vintage VHS tapes, and film rolls—to reflect my personal style and creative influences. The portfolio showcases my projects and learning outcomes in an interactive, visually cinematic layout." 
    process="I began working on my portfolio midway through the Branding Project. Initially, I struggled with a creative block and burnout, which stemmed from the shift in educational structure. Coming from a strictly scheduled Bulgarian high school, the open and flexible approach at Fontys felt unfamiliar and overwhelming. Once I overcame that barrier, I focused on designing a portfolio that captured both function and feeling. I created several iterations in Figma, developed a layout system that allowed users to explore projects through learning outcomes, and built visual consistency using typography, color schemes, and subtle interactive transitions that support the film-inspired theme."
    approach="While the beginning of the process was tough due to burnout and lack of structure, once I found my creative rhythm, the work began to flow. Designing in Figma helped me organize my thoughts and build structure for myself where none was given. The film and media theme gave the project a strong identity, and aligning the visual choices with that concept helped ground all design decisions."
    takeaways="I learned that I need structure in order to thrive, and when it's not provided, I can build it myself through planning and visual mapping. I also discovered the power of thematic storytelling in portfolio design—when a project is rooted in personal identity, it becomes more impactful. Most importantly, I learned how to navigate creative blocks and burnout with patience and self-awareness."
    improvements="Next time, I would try to start earlier and pace the workload better to avoid burnout. I would also reach out for support sooner—whether through peers, mentors, or feedback loops—so I don't stay stuck in a creative block for too long. Additionally, I'd experiment with more advanced interactions and possibly bring the prototype into code for a live version."
    images={[ "/images/interactiveprototype3.png", "/images/interactiveprototype4.png", "/images/interactiveprototype5.png" ]}/>

    <LoCards 
    title='Presentations'
    introduction="These are a Feedback Checkpoint and group presentations created throughout the semester at Fontys, including work for the Branding Project and the Belco Alliance website redesign. Each slide deck reflects different themes and visual directions, but they all share a common thread: I led the design, layout, and overall structure for nearly every presentation my groups delivered." 
    process="I naturally took the lead in crafting the presentations for most of our group projects. I was responsible for selecting the templates, setting the visual style, organizing the flow of content, and adding transitions or animations. I assigned roughly one slide per groupmate to fill in with content, but I took charge of making sure the whole thing felt coherent and visually polished. My tool of choice was usually Google Slides—I have experience with both Google Slides and PowerPoint, but I find PowerPoint's interface clunky and less flexible. Google Slides allowed me to work quickly with clean animations and a more intuitive workflow. However, for the Belco Alliance presentation, I used Canva for the first time. Despite its slightly messier interface, it gave me much more creative freedom with layout, motion, and visual design. I was able to bring a more expressive and experimental tone to that presentation, which aligned really well with the project."
    approach="Taking the lead on the visual and structural side of the presentations allowed me to stay in my comfort zone and also enjoy the creative process. I genuinely like making presentations and presenting them—it's a part of group work I look forward to. Canva was a highlight; it helped me push my usual style further, especially when working on more visually layered or bold themes. One challenge, however, was that sometimes presentations didn't get much response from peers—like during our final Branding presentation, where the class didn't ask questions or give feedback beyond “it was good.” Still, our client (Dana) was very happy with what we delivered, which was rewarding."
    takeaways="I've learned that I have a real strength—and passion—for visual storytelling through presentations. I also realized how important it is to adapt to different tools, and how trying something new (like Canva) can unlock unexpected creativity. This semester also reinforced how much I enjoy presenting and owning the structure of a group's delivery."
    improvements="Next time, I'd like to experiment more deeply with Canva and explore features I didn't use yet. I'd also aim to collaborate more during the early stages of presentation design—perhaps involving groupmates in the visual decisions, not just assigning content. Lastly, I'd look for ways to encourage more interaction during and after presentations, especially when presenting to peers who may be hesitant to give feedback."
    images={[ "/images/presentation1.png", "/images/presentation2.png", "/images/presentation3.png", "/images/presentaitioncheckpoint.png" ]}/>


    <h1>...</h1>
  </main>
}

export default Page