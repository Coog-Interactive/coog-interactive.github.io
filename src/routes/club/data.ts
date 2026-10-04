import logo from '$lib/assets/logo.png'

import communityManager from './img/communityManager.jpg'
import corpIan from './img/corpIan.jpg'
import industryAdvisor from './img/industryAdvisor.jpg'
import marketing from './img/marketing.png'
import studioDirector from './img/studioDirector.png'
import corpAbdullah from './img/corpAbdullah.jpg'
import webmaster from './img/webmaster.jpg'

// Eventually this will be fetched from a server.

export const officers = [
    {
        position: "President",
        name: "Ibrahim Faisal",
        desc: "Lorem ipsum dolor sit amet",
    },
    {
        position: "Vice President",
        name: "Zachary Ellerbrock",
        desc: "Lorem ipsum dolor sit amet",
    },
    {
        position: "Treasurer",
        name: "Kimberly Bellah",
        desc: "Lorem ipsum dolor sit amet",
    },
    {
        position: "Studio Director",
        name: "Paul Nguyen",
        img: studioDirector,
        desc: `
            Second studio director for Coog Interactive; a programmer, illustrator,
            3D modeler, animator, music producer. He is a freshman majoring in
            computer science and will be the next director of CodeRed Hackathon.
            He enjoys gaming, creating things, and talking to new people.
        `,
    },
    {
        position: "Marketing Lead",
        name: "Charlie Pen",
        img: marketing,
        desc: `
            Charlie Pen is the Marketing Lead for Coog Interactive, and a game
            developer with an affinity toward film and animation. Inspired by
            many creative mediums, he dives to learn the many traits that come with
            the creation of a game, to ultimately serve and live the process that
            comes with creating something memorable.
        `,
    },
    {
        position: "Community Manager",
        name: "Joseph Guzman",
        img: communityManager,
        desc: `
            Joseph is currently in his 4th year studying computer science.
            He believes video games are the most satisfying form of art, combining
            basically every creative skill out there. He has hopes to keep game dev
            in his life, and him being an officer at Coog Interactive has been a good
            way to stay involved with those interested in making great games.
        `,     
    },
    {
        position: "Corporate Relations",
        name: "Ian Chung",
        img: corpIan,
        desc: `
            Ian is the Corporate Relations Officer for Coog Interactive! He is currently
            a third-year Computer-Science major with big game development ambitions.
            He primarily develops in Godot 4 and is a huge fan of strategy games,
            building games, and colony simulators.
        `,
    },
    {
        position: "Corporate Relations",
        name: "Abdullah Aldahiree",
        img: corpAbdullah,
        desc: `
            Abdullah Aldahiree is a Computer Science student at the University of Houston
            and the Corporate Relations Officer for Coog Interactive. He enjoys working with
            Unreal Engine, building game systems and environments, and is currently
            developing both personal and team-based game projects. In Coog Interactive,
            he focuses on connecting students with studios and industry professionals
            through workshops, events, and other opportunities. He enjoys learning new parts
            of game development, taking on ambitious projects, and turning ideas into games
            and experiences he can share with others.
        `,
    },
    {
        position: "Event Coordinator",
        name: "O’rion Bailey",
        desc: "Lorem ipsum dolor sit amet"
    },
    {
        position: "Webmaster",
        name: "Luke Gobin",
        img: webmaster,
        desc: `
            Luke Gobin is a computer science student who loves open source, gamedev, web
            development, and small-server administration. Luke created and currently manages
            Coog Interactive's entire website and back-end.
        `,
    },
    {
        position: "Industry Advisor",
        name: "Garrett Ward",
        img: industryAdvisor,
        desc: `
            Garrett’s interest in the arts, education, storytelling, technology, and
            the natural world drive him to create engaging experiences that have a positive
            impact on people’s lives. He is an educational game designer currently working
            in virtual production for Houston’s largest virtual production studio–Captiv Studios–
            and is the Chief Product Officer of Origo42, where he facilitates software development
            and hardware integrations. He recently earned his M.Ed. in Curriculum and Instruction
            with a specialization in Learning, Design, and Technology from the University of Houston,
            during which time he worked as a graduate research assistant for the CougAR Lab, and
            contributed to the founding of Coog Interactive by serving as its Studio Director and
            establishing its nonprofit status.
        `,
    },
    {
        position: "Faculty Advisor",
        name: "Dr. Chang Yun",
        desc: "Lorem ipsum dolor sit amet",
    },
]