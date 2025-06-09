import { NextPage } from 'next';
import NavBar from "@/components/NavBar";
import LoCards from "@/components/LoCards"


const Page: NextPage = ({}) => {
  return <main className='bg-[#3f3f3f]'>
    <NavBar></NavBar>
    <h1>hello</h1>

    <LoCards 
    introduction="This is an overview of the branding materials I helped create for the BELCO development project. Alongside my teammate, we extended our website presentation by designing cohesive physical and digital assets including posters, a foldable booklet, and business cards to enhance engagement and communicate our work professionally." 
    process="My main contributions were the design of the business cards and several key booklet sections: the “Programs” page, the “How it works?” explanation, the student testimonials, and the back cover featuring the QR codes. I used Figma to prototype the layout and color structure, ensuring the visual identity aligned across formats. The foldable booklet was carefully structured to guide users through BELCO’s offerings in a compact, interactive format, with clearly divided sections and scannable links."
    approach='The process was rewarding and pushed me to think beyond screen-based design. Translating a digital concept into tactile materials taught me to consider texture, fold lines, and physical readability. Collaboration with my teammate also helped us distribute the design tasks based on individual strengths, which improved both workflow and final quality.'
    takeaways='I learned how to design for print, how to integrate scannable QR links for added interactivity, and how to balance creative design with practical communication. I also gained experience in visual storytelling through sequential booklet panels and discovered the importance of creating a strong, unified visual identity across multiple touchpoints.'
    improvements='Next time, I’d test printed mockups earlier in the design phase to catch any issues with layout scaling or paper folds. I’d also experiment more with layout variations before finalizing, and perhaps gather more user feedback to refine how the information flows across pages and formats.'
    images={[
        '/images/interactivebelco1.png',
        '/images/interactivebelco2.png',
        '/images/interactivebelco3.png',
        '/images/interactivebelco4.png',
        '/images/interactivebelco5.png',
        '/images/interactivebelco6.png',
    ]}
    href="/article1" />

  </main>
}

export default Page