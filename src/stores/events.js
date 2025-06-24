import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useEventsStore = defineStore('events', () => {
  const events =ref([
      {
        name:"Community Outreach at Northern Kenya",
        image:"../../public/images/events/glenn-m-horgan-uyhTl9J45G4-unsplash.jpg",
        date:"July 06th 2025",
        location:"Norther Kenya School",
        category:"Community outreach",
      },
      {
        name:"100 metres run",
        image:"../../public/images/events/mohammad-reza-dgbNfASxChE-unsplash.jpg",
        date:"July 18th July",
        location:"Strathmore University",
        category:"Scholarships",
      },
      {
        name:"Inter-Clab competitions",
        image:"../../public/images/events/madeline-liu-qQpAfh737yY-unsplash.jpg",
        date:"20th October 2025",
        location:"KICC",
        category:"Clubs",
      }, 
      {
        name:"Annual sports day",
        image:"../../public/images/events/yomogi-xsxLOKdgp3w-unsplash.jpg",
        date:"June 30th 2025 ",
        location:"Sports Complex",
        category:"Sports",
      }
   ])

  return {events}
})