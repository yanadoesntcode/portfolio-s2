import { NextPage } from 'next';
import NavBar from "@/components/NavBar";
import LoCards from "@/components/LoCards"
import { NONAME } from 'dns';


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
        hrefs={[
            {
              href: "https://nextjs.org/",
              label: "Open NextJS Website"
            },
            {
              href: "https://www.heroui.com/docs/frameworks/nextjs",
              label: "Open HeroUI Website"
            },
            {
              href: "https://www.sanity.io/exchange/framework=nextjs",
              label: "Open Sanity NextJS Website"
            },
            {
              href: "https://www.reddit.com/r/react/comments/1cxybcx/do_people_still_build_with_react_js_or_is_next_js/",
              label: "Open Reddit Thread"
            }
      
          ]}
    />

    <LoCards 
        title='Styling with Tailwind CSS'
        introduction="This section showcases my journey learning Tailwind CSS—a utility-first CSS framework that transformed how I approach styling in web development. These visuals reflect my exploration into responsive design, typography utilities, and community opinions on using Tailwind versus traditional CSS." 
        process="I started by diving into Tailwind’s official documentation to understand the core concepts, including responsive design and utility classes for styling text and layout. I explored Reddit discussions to see real-world developer feedback and debates about its pros and cons. This helped me learn not only how to use Tailwind CSS, but also when and why it might be preferred over vanilla CSS in modern projects."
        approach="Initially, I found Tailwind’s large set of utility classes overwhelming, but after applying them in practice, I began to appreciate their flexibility and speed. I liked how I could style directly in HTML without constantly switching between files. Reading contrasting opinions in developer forums also gave me perspective on how to defend or refine my choices depending on project needs."
        takeaways="I learned how to create responsive layouts using breakpoint prefixes, apply consistent typography using utility classes, and structure clean, scalable styles without writing traditional CSS. I also became more comfortable forming my own stance on using utility frameworks in frontend development."
        improvements="In future work, I would spend more time customizing my Tailwind configuration to match project branding needs. I’d also like to explore features like dark mode support and container queries more deeply. Lastly, I plan to create a few personal UI kits using Tailwind to improve reuse and speed up future projects."
        images={["/images/Tailwindcss1.png", "/images/Tailwindcss2.png", "/images/TailwindcssReddit.png"]}
        hrefs={[
            {
              href: "https://tailwindcss.com/docs/installation/using-vite",
              label: "Open TailwindCSS Website"
            },
            {
              href: "https://www.reddit.com/r/webdev/comments/15chth7/is_css_frameworks_like_tailwind_is_really_better/",
              label: "Open Reddit Thread"
            }
          ]}
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
   
    <LoCards 
        title='Applying my Knowledge'
        introduction="This is a detailed look at the development process of my BELCO Alliance website, showcasing the actual code I wrote using the Next.js and TailwindCSS stack. Each screenshot captures a different aspect of the codebase, including folder structure, interactivity, layout logic, and data handling using props—built with the help of resources like Tailwind documentation, Codecademy, and the official Next.js docs." 
        process="For this project, I designed and developed the Alliance website, which focuses on partner universities and exchange programs. The screenshots highlight different stages: Photo 1 - Shows the organized folder structure inside my Next.js app, including separated routes for articles, programs, and partners, along with reusable components like NavBar, UniCards, and Footer. Photo 2 - Reveals the global layout setup using Next.js metadata, Google Fonts (Raleway), and consistent styling applied across pages. Photo 3 - Displays custom filtering logic with 'useState' and 'filter' to dynamically show exchange program deadlines based on selected country, university, and program. Photo 4 - Demonstrates how I used props to pass data into reusable components like 'UniCards', which display information for each university dynamically. "
        approach="This part of the project was technically intense but extremely rewarding. The modular structure of Next.js made it easier to keep things organized, and TailwindCSS gave me the flexibility to build responsive layouts quickly. I also got to practice writing cleaner, more maintainable code using TypeScript and React patterns."
        takeaways="I learned how to manage dynamic data using 'useState' and props, how to structure large-scale Next.js apps, and how to apply responsive styles effectively. This experience also taught me the importance of reusable components and clearly defined project architecture for maintainability and scalability."
        improvements="Next time, I would like to connect the filtering system to a real database instead of static data, and I’d explore using a CMS like Sanity or Contentful. I’d also implement unit tests to catch UI and data issues early, and possibly use context to simplify state management across multiple components."
        images={["/images/nextjsfolderstructure.png", "/images/nextjslayoutpage.png", "/images/nextjsjavascript.png", "/images/nextjsprops.png"]}
        hrefs={[
            {
              href: "https://github.com/yanadoesntcode/portfolio-s2.git",
              label: "Open My GitHub Repo (its public)"
            }
          ]}
    
    />

    <LoCards 
        title='Deployment w/ Vercel'
        introduction="This is an overview of how I used Vercel for deploying my web projects, especially my final BELCO Alliance site and Semester 2 portfolio. The screenshots showcase my live deployment setup, project overview, and recent deployment logs. They reflect the learning curve and technical wins I encountered while hosting projects through Vercel." 
        process="I deployed my projects using Git-integrated workflows. Whenever I pushed updates to my Git repository, Vercel automatically redeployed the latest build—a major advantage that eliminated the need for manual uploads or setup scripts. However, as shown in my deployment history, I frequently encountered deployment errors. These were usually due to small misconfigurations or missing dependencies, which made Vercel feel less forgiving than tools like HeroUI’s built-in deploy system. Despite that, the simplicity of connecting Git to Vercel and the seamless live update process made it worth sticking with."
        approach="My deployment journey wasn’t flawless. I often had to backtrack, troubleshoot, and retry builds until everything worked. Still, I learned to read logs, fix build errors, and adapt my deployment strategy. Over time, I became more confident in managing version control and syncing changes smoothly with the live site. The instant redeployment feature after every commit helped me iterate faster and see immediate feedback from my changes."
        takeaways="I learned how automated deployments work and how closely tied they are to clean Git practices. I also gained experience troubleshooting real deployment issues like runtime errors and version mismatches. Vercel’s Git integration and UI made this process easier to manage, even if it wasn't always smooth."
        improvements="Next time, I’ll test builds locally more thoroughly before pushing to main to avoid unnecessary failed deployments. I’ll also maintain a stable production branch and only merge after confirming all features work. Lastly, I want to explore Vercel’s advanced features like analytics, custom domains, and edge functions to make better use of the platform."
        images={["/images/VercelHome.png", "/images/VercelOverview.png", "/images/Vercel Deployment.png", "/images/VercelCommits.png"]}
        hrefs={[
            {
              href: "https://vercel.com/home",
              label: "OpenVercel Home Page"
            },
            {
                href: "https://final-belco-alliance.vercel.app/",
                label: "Visit the Belco Alliance Website hosted on Vercel"
              }
          ]}
    />

    <LoCards 
        title='Version Control w/ GitLab'
        introduction="This is an overview of my GitLab journey throughout the academic year, focusing on how I used Git for version control in my projects—especially my portfolio. The attached evidence shows my Git activity timeline, recent commits, and the member setup for my repository. These screenshots reflect both my challenges and progress in working with GitLab over time." 
        process="In Semester 1, I began learning the basics of GitLab. Although it felt overwhelming at first, I gradually figured out how to clone repositories, pull updates, commit my work, and push changes. At the beginning of Semester 2, I created a repository for my portfolio project with the intention to use it regularly. However, I forgot to maintain it and continued working locally on my files without pushing them. As the Sprint 2 deadline approached, I realized I had fallen behind and couldn't figure out how to upload my existing work into the original repository. In a rush, I created a brand-new repository, re-uploaded all of my files, and began pushing my commits consistently again. I also wrote a proper README to document the project."
        approach="The process had its ups and downs. I started strong but then lost track of my Git workflow midway through the semester. Forgetting to push my changes regularly set me back and added last-minute stress near the deadline. Still, I managed to recover by restarting the repository and re-engaging with Git commands I had previously learned. Once things were set up correctly again, I felt much more at ease. Seeing everything pushed, committed, and backed up gave me peace of mind."
        takeaways="I learned that Git isn't something you learn once and then remember forever—it takes regular use and repetition to feel comfortable with it. I also realized the importance of consistent version control from the start of a project, not just at the end. Writing a clear README and organizing access properly through GitLab settings helped me make my repository more professional and useful for both myself and others."
        improvements="Next time, I'll commit and push changes more regularly instead of waiting until the last minute. I'll also make sure to check on my repositories throughout the project to ensure everything is up to date. Finally, I want to continue practicing Git even outside of deadlines so that I can keep my skills fresh and avoid falling into the same confusion again."
        images={["/images/gitreadme.png", "/images/gitactivity.png", "/images/gitmembers.png"]}
        hrefs={[
            {
                href: "https://git.fhict.nl/I546322/s2-03-development-for-belco.git",
                label: "GitLab Repo for HTML Belco"
            }

        ]}
    />
    <LoCards 
        title='Version Control w/ GitHub'
        introduction="This entry showcases how I managed version control for my projects using GitHub. The screenshots display my repositories, commit activity, contribution timeline, and structured README files. These visuals capture my growing familiarity with GitHub as I built and updated my portfolio and collaborative work." 
        process="I created multiple private repositories to organize and separate my key deliverables, such as my Semester 2 portfolio and the final BELCO Alliance website. I documented features clearly in each README file and regularly committed updates as I worked. As seen in the activity overview, I started slow but then began contributing more consistently once deployment and development picked up. I also ensured my portfolio README included setup instructions, feature lists, and tech stack details to prepare it for future use or sharing."
        approach="Although I initially used GitHub passively, over time I began relying on it more actively to track progress and avoid file loss. Creating clean commit messages and maintaining a clear folder structure helped me stay organized. I also used GitHub as a live link reference for my Vercel deployments, streamlining both frontend updates and documentation."
        takeaways="I learned how to structure GitHub repositories professionally, write clear README documentation, and manage commits with intention. I also understood the importance of syncing my local changes regularly to maintain a clean development history. Keeping my work private gave me control while still using GitHub as a professional tool."
        improvements="Next time, I want to commit changes more frequently and with more descriptive messages. I’ll also explore branching and pull request workflows to simulate real-world collaboration. Lastly, I aim to open-source parts of my work or prepare them for public sharing by improving structure and removing sensitive information."
        images={["/images/GitHub1.png", "/images/GitHub2.png", "/images/GitHub3.png", "/images/GitHub3-1.png"]}

        hrefs={[
            {
              href: "https://github.com/yanadoesntcode/portfolio-s2.git",
              label: "Open My GitHub Portfolio Repo (its public)"
            },
            {
              href: "https://github.com/yanadoesntcode/final-belco-alliance.git",
              label: "Open My GitHub Belco Repo (its public)"
            }
          ]}
    />

    
    <LoCards 
        title='HTML/CSS/JS Development'
        introduction="This is a reflection on the development process of my portfolio website, which has been the core focus of my coding work this semester. The evidence includes screenshots of my code files, a breakdown of my Udemy learning dashboard, and references to third-party tools I integrated during the project. As of now, my portfolio consists of 978 lines of HTML, CSS, and JavaScript, along with over 18 embedded images used to visually present Learning Outcomes."
        process="Over the semester, I dedicated all my development time to building my portfolio website from scratch. I worked with HTML, CSS, and Vanilla JavaScript to construct the layout, styling, and interactive elements. The development was fully hands-on, and I ensured that every component—from structure to animation—was purpose-built for this project. In addition, I explored third-party tools like uiverse.io to enhance my visuals. To stay ethically transparent, I commented any borrowed code in my files to clearly show which parts I could not claim as original. I’ve also signed up for a selection of Udemy front-end courses (as shown in the screenshot), which I plan to complete to strengthen my foundation and prepare for future development-focused semesters."
        approach="Overall, the process was both challenging and incredibly fulfilling. Although I don’t have a formal background in programming, I found myself enjoying the logic and creativity that front-end development offers. Designing while coding gave me a great sense of control and ownership over the outcome. The only limitation was time—I sometimes found myself wishing I had started learning earlier so I could implement even more advanced features. Still, the project grew steadily, and I’m proud of what I’ve achieved so far."
        takeaways="I’ve discovered a strong personal interest in front-end development. I’ve learned how structure and styling come together to shape user experiences, and how important it is to write clean, commented, and readable code—especially when external elements are used. This project also taught me how to be self-driven in learning: using online resources like Udemy and third-party tools to fill knowledge gaps and push myself further than what was expected in class."
        improvements="Next time, I would start learning the development tools earlier and begin building sooner, allowing more time for testing and polishing advanced features. I would also track my learning progress more consistently to avoid overwhelming myself before deadlines. In the next semester, I want to fully commit to the Front-End track, build more interactive components using JavaScript frameworks, and continue developing my skills through structured online learning and side projects."
        images={["/images/codecomment.png", "/images/uiversecomment.png", "/images/Udemycourses.png"]}
    />


    <h1>...</h1>

  </main>
}

export default Page