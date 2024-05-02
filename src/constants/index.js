import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    ecommerce,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    cossim,
    weatherApp,
    countryGuide,
    chatBubble,
    threejs,

    link,
    // website project png
    CRM,
    ECOMMERCE,

    // Tech
    django,
    python,
    bootstrap,
    github1,
    vite,
    npm,
    aws,

} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    // {
    //     title: "React Native Developer",
    //     icon: mobile,
    // },
    {
        title: "Frontend Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    // {
    //     title: "Content Creator",
    //     icon: creator,
    // },
];

const technologies = [
    // {
    //     name: "HTML 5",
    //     icon: html,
    // },
    // {
    //     name: "CSS 3",
    //     icon: css,
    // },
    {
        name: "JavaScript",
        icon: javascript,
    },
    // {
    //     name: "TypeScript",
    //     icon: typescript,
    // },
    {
        name: "React JS",
        icon: reactjs,
    },
    // {
    //     name: "Redux Toolkit",
    //     icon: redux,
    // },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    // {
    //     name: "bootstrap",
    //     icon: bootstrap,
    // },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "Django",
        icon: django,
    },

    // {
    //     name: "git",
    //     icon: git,
    // },
    // {
    //     name: "github",
    //     icon: github1,
    // },
    // {
    //     name: "vite",
    //     icon: vite,
    // },
    // {
    //     name: "npm",
    //     icon: npm,
    // },
    // {
    //     name: "aws",
    //     icon: aws,
    // },
];

const experiences = [
    {
        title: "Django Developer",
        company_name: "Online Shopping",
        icon: ecommerce,
        iconBg: "#E6DEDD",
        date: "March 2024 - April 2024",
        points: [
            "Creating and managing web applications utilizing Django and other associated technologies.",
            // "Working together with multidisciplinary teams, including designers, product managers, and fellow developers, to craft top-notch products.",
            "Integrating responsive design and guaranteeing compatibility across different web browsers."

        ],
    },
    {
        title: "Django Developer",
        company_name: "CRM",
        icon: chatBubble,
        iconBg: "#383E56",
        date: "Jan 2024 - Feb 2024",
        points: [
            "Building and managing CRM systems using Django and associated technologies.",
            "Incorporating responsive design and ensuring compatibility across various web browsers.",

        ],
    },
    // {
    //     title: "Web Developer",
    //     company_name: "Shopify",
    //     icon: shopify,
    //     iconBg: "#E6DEDD",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#383E56",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but kilundi proved me wrong.",
        name: "Cosmas Mulii",
        designation: "Director",
        company: "Cossim LMT",
        image: "https://kilundiportfoliobucket.s3.eu-north-1.amazonaws.com/cosmas.png",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like kilundi does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After kilundi optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [

    {
        name: "Ecommerce Web App",
        description:
            "An e-commerce shop offers a virtual marketplace where consumers can browse, purchase, and sell goods or services online. It provides a convenient platform for transactions, offering a wide range of products, secure payment options, and delivery services.",
        tags: [
            {
                name: "Html",
                color: "blue-text-gradient",
            },
            {
                name: "Django",
                color: "green-text-gradient",
            },
            {
                name: "Tailwind css",
                color: "pink-text-gradient",
            },
        ],
        image: ECOMMERCE,
        source_code_link: "https://onlineshop-zh6b.onrender.com/",
    },

    {
        name: "Customer Relationship Management",
        description:
            "CRM coordinates organization, agent, and lead interactions, streamlining data, improving communication, and optimizing sales for effective relationship management and growth in a dynamic business environment.",
        tags: [
            {
                name: "Html",
                color: "blue-text-gradient",
            },
            {
                name: "Django",
                color: "green-text-gradient",
            },
            {
                name: "Tailwind css",
                color: "pink-text-gradient",
            },
        ],
        image: CRM,
        source_code_link: "https://crm-wtb4.onrender.com",
    },
    {
        name: "Cossim Limited",
        description:
            "Established in 2017 under the Companies Act of 2015, Cossim Limited is a premier Last Mile Logistics Company, steadily rising to prominence as the preferred choice in the industry.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "javaScript",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: cossim,
        source_code_link: "https://kilundi.github.io/COSSIM-WEBSITE/",
    },
];

export { services, technologies, experiences, testimonials, projects };