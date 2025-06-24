import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCoursesStore = defineStore('courses', () => {
   const courses = ref([
    {
        name:"Computer Science",
        school:"School of Computing and Engineering",
        description:"Best course for computer enthusiasts",
        intake:"July 2025"
    },
    {
        name:"Medicine",
        school:"School of Medicine and Surgery",
        description:"Best course for learning about the human body",
        intake:"September 2025"
    },
    {
        name:"Data Science and Statistics",
        school:"School of Computer science",
        description:"Best course for gaining a first entry in job market",
        intake:""
    },
    {
        name:"Inroduction to Physiology",
        school:"School of humanities and Social science",
        description:" Explores human behavior, mental processes, learning, motivation, and personality, with real-world applications.",
        intake:"September 13 2025"
        
    },
    {
        name:"Foundation of Law",
        school:"School of Law",
        description:"Introduces students to legal systems, constitutional law, criminal law, and legal reasoning, preparing them for advanced legal studies.",
        intake:"June 21 2025"
        
    },
    {
        name:"Principles of Marketing",
        school:"School of Business and Economics",
        description:"Introduces students to legal systems, constitutional law, criminal law, and legal reasoning, preparing them for advanced legal studies.",
        intake:"January 5 2026"
 
    },
    {
        name:"Environmental Science",
        school:"School of Natural Sciences",
        description:" Examines ecological systems, biodiversity, conservation, and the impact of human activity on the environment.",
        intake:"January 8 2026"
    },
    {
        name:"Entrepreneurship and Innovation",
        school:"School of Business and Economics",
        description:" Equips students with the skills to create and manage new business ventures, with emphasis on creativity, strategy, and startup development.",
        intake:"June 21 2005"
        
    },
     {
        name:" Media and Communication Studies",
        school:"School of Communication and Media",
        description:"Focuses on media theory, journalism, public relations, and digital media production.",
        intake:"September 14 2025"
        
    },
    {
        name:"Professional Mixology",
        school:" School of Hospitality and Culinary Arts",
        description:"This hands-on course trains students in the art and science of mixing drinks.",
        intake:"November 14 2025"  
    },
    {
        name:"Graphic design and visual communication",
        school:" School of Design and Creative Arts",
        description:"This course introduces students to the principles of design, visual storytelling, branding, and digital creativity. ",
        intake:"November 14 2025." 
    },
    {
        name:" Human Resource Management",
        school:"School of Business and Human Resource Development",
        description:"This course explores the principles of managing people in organizations.",
        intake:"November 14 2025"  
    },
  ])

  return {courses}
})
