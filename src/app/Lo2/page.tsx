import { NextPage } from 'next';
import NavBar from "@/components/NavBar";
import LoCards from "@/components/LoCards"


const Page: NextPage = ({}) => {
  return <main className='bg-[#3f3f3f]'>
    <NavBar></NavBar>
    <h1 className='text-6xl text-[#fdfac2] font-semibold ml-80 mt-8'>2: Development and Version control</h1>
    <p className="text-xl text-[#fdfac2] font-normal ml-78 mt-2 mb-10">You explore front-end development languages, you write code and document in a version control environment.</p>

    <LoCards 
        title='Exploring NextJS'
        introduction="This is a visual documentation of my exploration into modern frontend tools, with a focus on Next.js. This framework became essential during the Development Project, where I transitioned from static HTML/CSS to a more dynamic and scalable approach to frontend development." 
        process="To build this skillset, I consulted official documentation, browsed developer forums, and practiced with interactive tutorials. I followed the official Next.js setup guides, explored community discussions on Reddit, and used tools like HeroUI and Sanity to understand real-world implementations. Collaboration was a key part of the journey—my teammate and I divided tasks and supported each other throughout the process. I also used Vercel to deploy my apps, which made sharing progress fast and professional."
        approach="Adopting this modern stack initially felt challenging, but once I understood how components and routing work in Next.js, the development process became more intuitive. The experience significantly improved the way I approach structure and functionality in web applications."
        takeaways="I learned how to structure projects using Next.js, implement features like routing and server-side rendering, and deploy live applications with ease. I also strengthened my ability to learn independently through documentation and online communities while improving my collaborative workflow."
        improvements="In future iterations, I would incorporate TypeScript earlier to improve code safety and scalability. I do not want to write in simple HTML/CSS anymore. I’d also take time to experiment with more advanced Next.js capabilities like middleware, API routes, and incremental static regeneration. Finally, I’d document my learning more consistently to better showcase growth over time."
        images={["/images/Nextjssite0.png", "/images/Nextjssite1.png", "/images/Nextjssite2.png", "/images/NextjsReddit.png"]}
    />

    <LoCards 
        title='Styling with Tailwind CSS'
        introduction="This section showcases my journey learning Tailwind CSS—a utility-first CSS framework that transformed how I approach styling in web development. These visuals reflect my exploration into responsive design, typography utilities, and community opinions on using Tailwind versus traditional CSS." 
        process="I started by diving into Tailwind’s official documentation to understand the core concepts, including responsive design and utility classes for styling text and layout. I explored Reddit discussions to see real-world developer feedback and debates about its pros and cons. This helped me learn not only how to use Tailwind CSS, but also when and why it might be preferred over vanilla CSS in modern projects."
        approach="Initially, I found Tailwind’s large set of utility classes overwhelming, but after applying them in practice, I began to appreciate their flexibility and speed. I liked how I could style directly in HTML without constantly switching between files. Reading contrasting opinions in developer forums also gave me perspective on how to defend or refine my choices depending on project needs."
        takeaways="I learned how to create responsive layouts using breakpoint prefixes, apply consistent typography using utility classes, and structure clean, scalable styles without writing traditional CSS. I also became more comfortable forming my own stance on using utility frameworks in frontend development."
        improvements="In future work, I would spend more time customizing my Tailwind configuration to match project branding needs. I’d also like to explore features like dark mode support and container queries more deeply. Lastly, I plan to create a few personal UI kits using Tailwind to improve reuse and speed up future projects."
        images={["/images/Tailwindcss1.png", "/images/Tailwindcss2.png", "/images/TailwindcssReddit.png"]}
    />

    <LoCards 
        title='Learning Platforms & JavaScript Foundations'
        introduction="This section highlights the learning platforms I used to build foundational knowledge in JavaScript and frontend development. I combined structured courses from Udemy with interactive exercises from Codecademy to create a well-rounded, hands-on learning experience." 
        process="I enrolled in a variety of Udemy courses focused on JavaScript, web design, and database management. These helped me build a strong theoretical understanding and gave me access to downloadable resources and real-world project walkthroughs. In parallel, I practiced directly on Codecademy’s platform, where I wrote and executed JavaScript code in-browser. This immediate feedback loop helped reinforce my understanding of key concepts like JSX, DOM manipulation, and event listeners."
        approach="I balanced passive video learning with active coding challenges to maximize retention. Codecademy’s sandbox environment allowed me to experiment without breaking anything, while Udemy’s structured path helped me pace my progress. I also tracked my completion and learning streaks to stay consistent over time."
        takeaways="I gained practical skills in JavaScript fundamentals, DOM manipulation, JSX syntax, and basic interactivity using event listeners. I also improved my self-discipline by following course structures and dedicating regular time to coding challenges."
        improvements="Next time, I’d create more personal mini-projects alongside courses to apply what I’m learning in real time. I’d also explore learning with TypeScript early on to build a stronger foundation for scalable frontend work and consider pairing courses with documentation reading for deeper context."
        images={["/images/Udemycourses.png", "/images/Codecademycourse.png"]}
    />


  </main>
}

export default Page