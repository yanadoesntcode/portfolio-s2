import { NextPage } from 'next';
import NavBar from "@/components/NavBar";
import IterationCards from "@/components/IterationCards"
import LoCards from "@/components/LoCards"


const Page: NextPage = ({}) => {
  return <main className='bg-[#3f3f3f]'>
    <NavBar></NavBar>
    <h1 className='text-6xl text-[#fdfac2] font-semibold ml-130 mt-8'>3: Iterative design</h1>
    <p className="text-xl text-[#fdfac2] font-normal ml-95 mt-2 mb-10">You explore and use professional design tools and you iteratively design visual works.</p>

    <IterationCards 
        title='Iterating the Belco Navigation Bar'
        introduction="This is the iterative design and development process behind the navigation bar for the BELCO Alliance website. The images showcase how I used both formal feedback and casual peer testing to improve clarity, structure, and usability in the navbar section. My focus was aligning visual layout with user expectations, prioritizing navigation order and icon clarity." 
        process="(From Dirk) I initially created a navigation bar following a consistent visual hierarchy across the site. I received formal feedback from Dirk (as seen in the FeedPulse screenshot), where one key takeaway was to “prioritize hyperlink positions based on expected user behavior.” This made me realize the navbar wasn’t ordered intuitively and could be misaligned with user navigation patterns."
        approach="(From Peer) I made several adjustments in Figma—experimenting with visual hierarchy and reordering items like 'Programs' and 'Partners' to come first. I then reached out for informal peer feedback via WhatsApp. My friend preferred the updated layout, specifically because the account button became more recognizable with an icon instead of an abstract placeholder. They also appreciated that the Programs and Partners sections were placed more logically based on actual user priorities."
        takeaways="After applying those suggestions, I highlighted and measured spacing (as shown in the design screenshots) to ensure alignment and readability. I conducted one more comparison in Figma between both navbar versions and confirmed that the new layout offered clearer structure and a better user flow. The improved hierarchy and icon usage resolved previous confusion and helped emphasize the most relevant sections first."
        improvements="I learned that even small changes in positioning and labeling can significantly impact the usability of a website. Feedback from both formal and informal sources proved essential in improving the navbar. Most importantly, this process taught me that validating navigation logic against real user expectations—no matter how simple—is what transforms a design from functional to intuitive."
        images={["/images/iteration3version1.png", "/images/iteration3feedback1.png", "/images/iteration3iteration1.png", "/images/iteration3validation1.png", "/images/iteration3validation2.png"]}
    />

    <IterationCards 
        title='Iterating the About Section of Portfolio'
        introduction="This is the iterative design and development process behind the “About” section of my portfolio website. It showcases how I used both teacher and peer feedback, along with design experimentation and JavaScript interactivity, to transform a static section into an engaging part of the site." 
        process="(From Stan) I began by creating a simple version of the About section, containing text blocks with information about me. I showed this initial version to my teacher Stan, who suggested incorporating a second font—Helvetica—to avoid making the section feel like a presentation slide. I applied his feedback and restructured the layout with four multiline text boxes, arranged neatly across the page. I aimed to make it readable and informative."
        approach="(From Peer) Despite applying the font change and reorganizing the layout, the section still didn’t feel right. It looked polished, but lacked personality and user engagement. I asked a friend outside the Media Design program for an outsider’s opinion. They pointed out that the amount of text made the section boring, while having too little content might make it feel bland. This led me to rethink the experience of reading the section entirely."
        takeaways="(From Paul) After the feedback, I decided to introduce interactivity by adding a JavaScript-based menu system. Each title in the menu could be clicked to reveal a different section of the text, keeping the layout clean and engaging.After implementing the JavaScript click-to-reveal menu system, I showed the final version to my teacher Paul, who responded positively. He liked the added interactivity and felt it significantly improved the clarity and user experience of the About section. This validation confirmed that the iteration cycle was successful—not just visually, but also in terms of functionality and engagement."
        improvements="I learned that effective design depends on both visual clarity and user interaction. Through feedback from teachers and an outside perspective, I realized that too much static text can overwhelm users. By implementing a JavaScript-based interactive layout, I improved the section’s engagement and structure. This process showed me how even simple interactivity can elevate the user experience and solve content delivery issues."
        images={["/images/iteration1version1.png", "/images/iteration1feedback1.png", "/images/iteration1iteration2.png", "/images/iteration1feedback2.png", "/images/iteration1finaliteration.png", "/images/iteration1validation.png"]}
    />

    <IterationCards 
        title='Iterating the Projects Page'
        introduction="This is a reflection on the design process of the Projects page in my portfolio website. It shows how I transitioned from a clean gallery layout to a themed visual concept using VHS tapes, aligning the section more closely with my overall photography and film-inspired portfolio theme." 
        process="(From Chris) I originally designed the Projects page using a grid-style layout with card-like project previews. This approach was organized and functional, but when I presented it to my teacher Chris, he pointed out that it didn't reflect the overall theme of my portfolio. He suggested that I redesign the page to better align with the film and photography aesthetic established in other parts of the site."
        approach="Taking Chris's feedback into account, I started thinking about ways to connect this section more strongly to the vintage media concept. I drew inspiration from the cassette background I had already used in my About section, and developed a new prototype where each project is displayed as a labeled VHS tape. This added a nostalgic, tactile quality to the design and better supported the identity of the portfolio."
        takeaways="(From Paul) The final iteration of the Projects page remains in prototype form and has not yet been implemented in my code. However, I presented it to my teacher Paul, who validated the design direction. He said the VHS-style layout was consistent with the theme and improved the overall cohesion of the site. His feedback confirmed that the visual storytelling was much stronger in this version."
        improvements="I learned that visual consistency is essential in portfolio design. Even well-organized layouts can feel disconnected if they don't match the overall theme. Through feedback and experimentation, I saw how a strong concept—like using VHS tapes to reflect a vintage film aesthetic—can make a section feel more intentional and engaging. This process also reminded me that prototyping and testing ideas early can lead to stronger, more cohesive results."
        images={["/images/iteration2version1.png", "/images/iteration2feedback1.png", "/images/iteration2finaliteration.png", "/images/iteration2validation.png"]}
    />

    <LoCards 
        title='Exploring Different tools'
        introduction="This is a reflection on my exploration of new design tools and visual experimentation during this semester. It highlights how I stepped out of my usual workflow to try new platforms and techniques, specifically focusing on composition, typography, and layout—and how this exploration led to my first experience using Canva for a presentation." 
        process="I set out to challenge myself by experimenting with different visual design tools beyond what I usually use. I focused on playing with layout, shape, and typography to improve my sense of balance and visual storytelling. For one of our group presentations, I decided to try Canva for the first time instead of my usual go-to, Google Slides. I explored how Canva handled fonts, visual elements, transitions, and overall structure while comparing it to the tools I was more comfortable with."
        approach="At first, Canva felt unfamiliar and slightly less intuitive than Google Slides. I had to spend time understanding the interface and how to structure my slides differently. However, the platform quickly proved to be far more flexible when it came to layout design, visual layering, and creativity. I was able to create a presentation that didn't just deliver information—it actually supported the story visually and aligned with the aesthetic of my portfolio, which is heavily influenced by media and film."
        takeaways="I learned that the tools I choose directly affect my creative process. Google Slides is great for structure and speed, but Canva encourages more experimentation and creative decision-making. By stepping out of my comfort zone, I was able to elevate the visual quality of my work and develop a more expressive design style. This process also showed me the value of adapting to new platforms and being open to different workflows, even when they feel unfamiliar at first."
        improvements="Next time, I'd give myself more time to explore new tools earlier in the design process, so I'm not rushed when trying something unfamiliar. I'd also like to dive deeper into Canva's more advanced features, such as animations and interactive elements, to take full advantage of what it can offer. I now see it as a strong addition to my design toolkit and plan to use it more frequently for presentations where visual storytelling is key."
        images={["/images/canvatool.png", "/images/presentation1.png"]}
    />

    <h1>...</h1>
   

  </main>
}

export default Page