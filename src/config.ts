export const config = {
    developer: {
        name: "David",
        fullName: "King Tin Beau Kuok",
        title: "Full-Stack Engineer",
        description: "Full-stack engineer with a track record of building scalable, maintainable, and high-performance applications across frontend and backend. Proven expertise in Backend and Frontend, with a strong foundation in cloud infrastructure (AWS), DevOps, and data engineering. Delivering full-stack solutions that power AI, analytics, and research platforms."
    },
    social: {
        github: "light89219",
        email: "beau.kuok.dev@gmail.com",
        location: "Hull City, United Kingdom"
    },
    about: {
        title: "About Me",
        description: "I am a Full-Stack Engineer from United Kingdom. I build scalable, maintainable applications across frontend and backend with expertise in Python, Django, PHP, Laravel, Node.js, React, Angular, Vue, and AWS. I have delivered full-stack solutions in startups and enterprise environments—from 3D geospatial visualization platforms and financial data analytics to pharmacy and research tools."
    },
    experiences: [
        {
            position: "Full-Stack Engineer",
            company: "Boost Bunny IT Service L.L.C",
            period: "2024 - Present",
            location: "United Arab Emirates",
            description: "Revamped the 3D geospatial visualization platform using Python/Django and React/TypeScript, supporting 100+ concurrent users with sub-200ms latency. Designed React-based interfaces for data visualization and lab automation, improving researcher efficiency by 40%.",
            responsibilities: [
                "Revamped 3D geospatial visualization platform with Python/Django and React/TypeScript",
                "Designed and implemented React-based interfaces for data visualization and lab automation tools",
                "Orchestrated connection of lab equipment to cloud platforms via RESTful APIs",
                "Automated infrastructure using AWS and Docker, achieving 99.99% system uptime"
            ],
            technologies: ["Python", "Django", "React", "TypeScript", "AWS", "Docker", "REST APIs"]
        },
        {
            position: "Full-Stack Engineer",
            company: "Capsule",
            period: "2021 - 2023",
            location: "United Kingdom",
            description: "Revolutionized customer medication tracking through full-stack feature enhancements in Django and React, yielding a 10% decrease in support tickets. Built modular React components and integrated Redux for state management, reducing front-end bugs by 35%.",
            responsibilities: [
                "Full-stack feature enhancements in Django and React for medication tracking",
                "Built modular React components and integrated Redux for state management",
                "Pioneered mobile-responsive features across the pharmacy platform",
                "Overhauled legacy front-end features, improving deployment frequency and application uptime to 99.9%"
            ],
            technologies: ["Django", "React", "Redux", "Python", "REST APIs"]
        },
        {
            position: "Full-Stack Engineer",
            company: "YCharts",
            period: "2016 - 2021",
            location: "United Kingdom",
            description: "Pioneered back-end infrastructure for financial data analytics utilizing Python and Django. Transformed end-user reporting with Excel Add-In tools in C#, facilitating automated financial data retrieval and analysis for 100+ users.",
            responsibilities: [
                "Built back-end infrastructure for financial data analytics with Python and Django",
                "Crafted Excel Add-In tools with C# for automated financial data retrieval and visualization",
                "Supported internal front-end data visualizations using JavaScript and custom widgets",
                "Built APIs and scalable ETL pipelines using AWS for 100,000+ financial instruments"
            ],
            technologies: ["Python", "Django", "C#", "JavaScript", "React", "AWS", "ETL"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "Guestboard",
            category: "Full Stack / Event Management",
            technologies: "React, Laravel, PHP, MySQL, Pusher, Laravel Echo",
            image: "/images/guestboard.png",
            description: "Modular event management platform with a widget-based dashboard. Real-time chat, schedules, and file sharing. Engineered real-time message board and notification system with Pusher and Laravel Echo. Complex RSVP and guest permission logic with automated transactional emails and secure CSV exports."
        },
        {
            id: 2,
            title: "JAXA JADE2",
            category: "Scientific / Data Visualization",
            technologies: "CesiumJS, React, Django, Python, AWS, S3, EC2, WebGL",
            image: "/images/jaxa-jade2.png",
            description: "Interactive 3D geospatial visualization platform for Jovian Auroral Distribution Experiment (JADE) data from the Juno mission. High-performance Django backend for large-scale binary datasets. Deployed on AWS with S3 for petabyte-scale storage. Custom WebGL shaders for dense point-cloud rendering."
        },
        {
            id: 3,
            title: "MyWorldNavigator",
            category: "Full Stack / Enterprise",
            technologies: "React, Typesense, PHP, WordPress, MySQL",
            image: "/images/myworldnavigator.png",
            description: "High-performance resident-centric management platform for itinerary planning and concierge services. Mobile-first dashboard with custom calendar sync and real-time booking. Lightning-fast global search with Typesense. Headless WordPress for content management. Reduced search latency by 80%, automated 100% of resident calendar syncing."
        },
        {
            id: 4,
            title: "DSX",
            category: "Desktop / Hardware",
            technologies: "WPF, C#, XAML, Windows, Bluetooth, USB HID",
            image: "/images/dsx.jpg",
            description: "High-performance Windows utility for PlayStation 5 DualSense controller customization. Manages low-level Bluetooth and USB HID protocols. Specialized driver integration for Steam ecosystem compatibility. XAML-based UI with real-time feedback for haptic levels, battery life, and trigger resistance. Custom trigger mechanics and haptic simulation."
        },
        {
            id: 5,
            title: "HiTask",
            category: "Full Stack / Productivity",
            technologies: "React, Redux",
            image: "/images/hitask.png",
            description: "High-performance collaborative task management platform. Complex global state with Redux for shared task lists, team calendars, and project dashboards. Modular React components for drag-and-drop prioritization and time-tracking. Real-time collaboration for global teams with optimized React Hooks."
        },
        {
            id: 6,
            title: "Notes Trader",
            category: "Full Stack / Fintech",
            technologies: "React, Redux",
            image: "/images/notestrader.png",
            description: "Secure financial marketplace for listing, analysis, and trading of mortgage-backed notes. Robust Redux architecture for real-time sync between asset listings and investment portfolios. High-performance React components for valuation and risk assessment. Interactive data filtering for secondary market opportunities."
        }
    ],
    contact: {
        email: "beau.kuok.dev@gmail.com",
        phone: "+447893926829",
        github: "https://github.com/light89219",
        linkedin: "https://www.linkedin.com/in/beau-kuok-b305673b8/"
    },
    skills: {
        develop: {
            title: "BACKEND & DEVOPS",
            description: "Scalable backends & DevOps with Docker and AWS",
            details: "Building back-end infrastructure with Python, Django, Node, Express, and PHP. Data ingestion, ETL pipelines, and APIs. Cloud infrastructure with AWS, Docker, and DevOps.",
            tools: ["Python", "Django", "Node", "Express", "PHP", "REST APIs", "AWS", "Docker", "KDB+", "Vagrant", "ETL"]
        },
        design: {
            title: "FULL-STACK & FRONTEND",
            description: "Modern web & data visualization",
            details: "Building responsive interfaces with React, Redux, Vue, Angular, TypeScript, and JavaScript. Data visualization, 3D geospatial (CesiumJS), and mobile-responsive platforms.",
            tools: ["React", "Redux", "Vue", "Angular", "TypeScript", "JavaScript", "HTML", "CSS", "C#", "WPF", "API Integration"]
        }
    }
};
