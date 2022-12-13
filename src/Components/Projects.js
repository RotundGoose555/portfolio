import '../CSS/Body.css';

export const Projects =[
    {
        id:0,
        name:  "",
        description:[],
        img: [],
        
    },
    {
        id:1,
        name:  "Greenwood Metals",
        
        description:[
            {
                title:'context',
                text: "For a UI/UX class I took here at Brown we were asked to create a shop interface with sort, filter, and tally functionality. I used this project as an opportunity to help out my friend Nick who’s an incredible jeweler but has a less than incredible web presence."},
            {
                title:'process',
                text: "For this project I first talked with Nick about the style of website he was looking for. Nick wanted a pretty minimal, elegant design to mirror the jewelry he makes."},
            {
                title:'process',
                text: "I worked with him to make a lookbook deciding on a white black and green color palette. Along with this I made a logo in adobe illustrator to tie the whole site together."},
            {
                title:'process',
                text: "Next it was time to code. This project is the first coding I’ve done using react so it was a slow start.Getting used to states and the best hierarchy for using them took some time, especially because I chose to work without a component library.",
        
            },
            {
                title:'reflections',
                text: "Greenwood Metals is very much a work in progress. Next steps include adding more flair and depth, an about section and a third party payment processor. For my coding, next steps include taking what I’ve learned from this project to make smoother React applications (like the one you’re looking at right now) in the future.",              
            }
        ],
        
        img: [
            './Assets/greenwood1.png',
            './Assets/greenwood2.png',
            './Assets/greenwood3.png',
            './Assets/greenwood4.png',
            '',
        ],
        link:'https://rotundgoose555.github.io/greenwood-metals/'
    },
    {
        id:2,
        name:  "Personas",
        context: <p className='info-text'></p>,
        description:[
            {
                title:'context',
                text: "Have you ever thought about the way that a door handle provides information to users on whether to push or pull? The goal of this project was to take a simple interface, in this case the CVS self checkout, and think through how different users interact with the interface and the problems that might arise given the circumstances of interaction."},
            {
                title:'process',
                text: "For this project I first observed self checkout users in CVS and the way they interacted with the machine."},
            {
                title:'process',
                text: "Next I developed questions and interviewed a small number of the observed users about their experience. I thought critically about the wording and way I asked questions in order to recieve responses that weren't influenced by my own preconceptions "},
            {
       
                title:'process',
                text: "After, I aggregated all of this information into two separate personas; imagined users with fleshed out thoughts and feelings that contextualized the observed CVS self checkout experience."},
            {

                title:'process',
                text: "I then took one of these personas and illustrated a 10 panel comic, imagining the before, during and after of their CVS experience. Finally I took this process and documented it in html."},  
            {
                title:'reflections',
                text: "Thinking through the way users interact with an interface- may it be a cvs self checkout, a website, or even a simple door- is not only helpful but incredibly important to producing effective work. While I don’t draw out a ten panel comic each time I begin a design process, I do take time to think explicitly about not only the how but the why of user interaction, something I believe makes for a richer, more seamless user experience."}
        ],      
        img: [
            './Assets/personas1.png',
            './Assets/personas2.png',
            '',
            './Assets/personas4.png',
            './Assets/personas5.png',
            '',
        ],
        link:'https://rotundgoose555.github.io/persona-project/',
    },
    {
        id:3,
        name:  "Personas",
        description:[
            {
                title:'context',
                text: "As an undergraduate concentrating in Computer Science here at Brown, I often find myself on the department's website checking the requirements and the classes I need to take semester by semester. Finding this information can be tricky; the website is primarily text based and information is organized in a series of lists making it hard to decipher.  For this project I reimagined the layout for Brown’s CS Undergraduate Pathways page hoping to improve its readability and flow."},

            {   title: 'process',
                text:'First I ran the website through WebAIM WAIVE, a website accessibility checker. Besides a couple empty link errors the website did pretty well.  This strength is something I kept in mind while redesigning. The aim was to address the memorability and efficiency concerns of the CS website without compromising its accessibility.'},
            {
                title: 'process',
                text:'Next, using Balsamiq I made low fidelity mockups of the website for desktop, tablet, and mobile. This allowed me to play with the overall structure of the website without getting mired down with the color scheme and more visual components. I chose to use tables to represent the class requirement in order to make the information more readable.'},
            {
                title: 'process',
                text:'After I felt happy with my design I created a Style Guide detailing the fonts, colors, and visual elements that would make up my website.'},
            {
                title: 'process',
                text:'I then drafted high fidelity mockups using Figma. Again I made desktop, tablet, and mobile designs, thinking about how the website’s design could, with minimal changes, remain readable at a series of resolutions. Finally, I took the mockups and style guide and used it to create a responsive redesign of the CS website.'},
            {
                title: 'reflections',
                text:'This process helped me understand and better my own design workflow. I find oftentimes when tasked with revamping, or redesigning there’s the impulse to make large marked changes. Considering the strengths and weaknesses of websites through a delineated process helps me make smarter and more informed choices about my work.'}
        ],
        img: [
            './Assets/pathways1.png',
            '',
            './Assets/pathways3.png',
            './Assets/pathways4.png',
            './Assets/pathways5.png',
            '',
            './Assets/pathways7.png',
        ],

        link:'https://rotundgoose555.github.io/cs-pathways/',
    },
    {
        id:4,
        name:  "Stupid F**king Bird",
        description:[
            {
                title:'context',
                text: "Outside of coding, I do a lot of construction and set design work for stage plays and musical theater productions. I believe this work enhances not only the work I do for web applications but my ability to adapt and problem solve. I was invited to design Shakespeare on the Green’s Fall 2022 production of Aaron Posner’s Stupid F**king Bird, a contemporary adaptation of Anton Chekhov’s The Seagull."},
            {
                title:'process',
                text: "First I began by reading the play and making a written scene map of all of the locations and transitions. This might seem like overkill, but I find having a written out understanding of what’s required from a design is super helpful moving through the process."},
            {
                title:'process',
                text: "Next step is research. Typically research means a historical and architectural deep dive; understanding the way things were built in the time or place the show takes place. With this production I instead researched other theater because the show is abstract and a commentary on art itself. As I researched I began to draft color and mood boards to reference during design."},
            {
                title:'process',
                text: "After researching I drew the initial sketches for the set. My initial design was a stripped back stage with no backdrop and a set of chairs and benches that would be put together in different ways to build the scenes as the show progressed. However, when I brought the idea to the director, she wanted a messier, busier stage. I went back to the drawing board and did a new set of sketches"},
            {
                title:'process',
                text: "For the final design, I created a backdrop from an assortment of household objects. The set was entirely built out of chairs including a large shelving unit that appeared to be chairs haphazardly stacked together. I added some siding to the stage using old book pages as paper mache, this along with a number of leaf shaped cutouts (also from old books) helped tie the play back to the original Chekhov text."},  
            {
                title:'reflections',
                text: "Communicating ideas, and working well with others whether it’s coworkers, peers, clients or directors is a fundamental part of design work. Working on this production I was constantly in communication with the director about design choices and changes. While architectural drafting and construction skills don’t necessarily transfer to the web. The design process and the conversation skills to create a cohesive product most certainly do."}
        ],
        img: [
            './Assets/stupid1.png',
            './Assets/stupid2.png',
            './Assets/stupid3.png',
            './Assets/stupid4.png',
            './Assets/stupid5.png',
            './Assets/stupid6.png',
        ],
    
    }
]