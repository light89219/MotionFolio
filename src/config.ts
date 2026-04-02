export const config = {
    developer: {
        name: "Kuok",
        fullName: "King Tin Beau Kuok",
        title: "AI / Full-Stack Engineer",
        description: "AI / Full-stack engineer with a track record of building scalable, maintainable, and high-performance applications across frontend and backend. Proven expertise in Backend and Frontend, with a strong foundation in cloud infrastructure (AWS), DevOps, and data engineering. Delivering full-stack solutions that power AI, analytics, and research platforms."
    },
    social: {
        github: "light89219",
        email: "beau.kuok.dev@gmail.com",
        location: "Hull City, United Kingdom"
    },
    about: {
        title: "About Me",
        description: "I am a AI / Full-Stack Engineer from United Kingdom. I build scalable, maintainable applications across frontend and backend with expertise in Python, Django, PHP, Laravel, Node.js, React, Angular, Vue, and AWS. I have delivered full-stack solutions in startups and enterprise environments—from 3D geospatial visualization platforms and financial data analytics to pharmacy and research tools."
    },
    experiences: [
        {
            position: "AI / Full-Stack Engineer",
            company: "Boost Bunny IT Service L.L.C",
            period: "2023 - Present",
            location: "United Arab Emirates",
            description: "Built AI image/video generation pipelines for Vimmerse and financial web applications with secure data workflows, transaction handling, and real-time analytics. Contributed to payments infrastructure and RESTful APIs, delivered AI-powered automation, and ran reliable cloud ops on AWS and Docker.",
            responsibilities: [
                "Built AI image/video generation pipelines for Vimmerse (text-to-image and text-to-video) exposed via unified APIs",
                "Built and optimized financial web applications with secure data workflows, transaction handling, and real-time analytics features",
                "Contributed to payments infrastructure, integrating and enhancing RESTful APIs for reliable transaction processing and improved system performance",
                "Designed and delivered AI-powered solutions for intelligent data processing, automation, and enhanced user interaction",
                "Automated infrastructure using AWS and Docker, achieving 99.99% system uptime"
            ],
            technologies: ["Python", "REST APIs", "AWS", "Docker", "Payments", "AI / ML integration"]
        },
        {
            position: "Full-Stack Engineer",
            company: "NBB Company Limited",
            period: "2020 - 2022",
            location: "Hong Kong",
            description: "Developed interactive real estate platforms and high-performance 3D geospatial visualization and mapping. Strengthened the React/Redux frontend, overhauled legacy features for faster releases, and supported backend services and APIs.",
            responsibilities: [
                "Developed and deployed interactive real estate platforms for immersive property marketing and exploration",
                "Implemented high-performance 3D geospatial visualization and mapping with real-time interaction for spatial data and complex property layouts",
                "Built modular React components and integrated Redux for state management, reducing front-end bugs by 35%",
                "Overhauled legacy front-end features for roughly 2x deployment frequency; contributed to backend services and APIs; improved application uptime to 99.9%"
            ],
            technologies: ["React", "Redux", "JavaScript", "3D / Geospatial", "REST APIs"]
        },
        {
            position: "Full-Stack Engineer",
            company: "CORE Data Systems Ltd",
            period: "2016 - 2020",
            location: "United Kingdom",
            description: "Enhanced a cross-platform project management product with real-time sync and drag-and-drop UX. Built widget-based event management features and improved a secure resident portal for itineraries, bookings, and document access.",
            responsibilities: [
                "Enhanced core features for a cross-platform project management tool: real-time task synchronization, drag-and-drop interfaces, and consistent web and mobile behavior",
                "Built a widget-based event management system with customizable message boards, RSVP tracking, and shared schedules with per-user feature toggles",
                "Improved a secure portal for a luxury residential community—backend logic for booking activities, secure document access, and automated resident calendar updates"
            ],
            technologies: ["JavaScript", "React", "REST APIs", "Web"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "Vimmerse",
            category: "AI / Full Stack",
            technologies: "AI Image, Image-to-Video, Video2Video, AI Story, API, Python, Django, React, Redux, REST APIs",
            image: "/images/vimmerse.webp",
            description: "AI production platform that turns static images, product descriptions, and story ideas into dynamic engaging videos, with a unified API for media creation workflows.",
            url: "https://www.vimmerse.net/"
        },
        {
            id: 2,
            title: "Notes Trader",
            category: "Full Stack / Fintech",
            technologies: "React, Redux, Python, Django, REST APIs",
            image: "/images/notestrader.png",
            description: "Secure financial marketplace for listing, analysis, and trading of mortgage-backed notes. Robust Redux architecture for real-time sync between asset listings and investment portfolios. High-performance React components for valuation and risk assessment. Interactive data filtering for secondary market opportunities.",
            url: "https://www.notestrader.com/"
        },
        {
            id: 3,
            title: "Willow Walk",
            category: "Full Stack / Real Estate",
            technologies: "React, TypeScript, JavaScript, AWS CloudFront, Responsive Web, Three.js, WebGL",
            image: "/images/willowwalk.jpg",
            description: "Marketing and discovery experience for the Willow Walk development. Responsive layouts for brand storytelling, development highlights, and lead journeys, delivered with fast global edge delivery.",
            url: "https://d1oci14bbx7oca.cloudfront.net/"
        },
        {
            id: 4,
            title: "Park 151",
            category: "Full Stack / Real Estate",
            technologies: "React, TypeScript, JavaScript, Responsive Web, SEO, Three.js, WebGL",
            image: "/images/park151.jpg",
            description: "Digital platform for Park 151: property presentation, amenity and neighbourhood narrative, and polished mobile-first UX tailored to prospective buyers and residents.",
            url: "https://www.park151.app/"
        },
        {
            id: 5,
            title: "Coronation Square",
            category: "Full Stack / Real Estate",
            technologies: "React, TypeScript, JavaScript, Responsive Web, Three.js, WebGL",
            image: "/images/coronation.jpg",
            description: "Public marketing site for Coronation Square in London—clear navigation through homes, place-making content, and strong visual identity for the masterplan.",
            url: "https://www.coronationsquare.london/"
        },
        {
            id: 6,
            title: "Newman Mansion Square",
            category: "Full Stack / Real Estate",
            technologies: "React, TypeScript, JavaScript, Responsive Web, Three.js, WebGL",
            image: "/images/nmsq.jpg",
            description: "London development microsite for Newman Mansion Square: refined typography and layout, development story, and buyer-focused content across breakpoints.",
            url: "https://www.newmansionsquare.london/"
        },
        {
            id: 7,
            title: "Guestboard",
            category: "Full Stack / Event Management",
            technologies: "React, Laravel, PHP, MySQL, Pusher, WebSocket",
            image: "/images/guestboard.png",
            description: "Modular event management platform with a widget-based dashboard. Real-time chat, schedules, and file sharing. Engineered real-time message board and notification system with Pusher and Laravel Echo. Complex RSVP and guest permission logic with automated transactional emails and secure CSV exports.",
            url: "https://guestboard.co/"
        },
        {
            id: 8,
            title: "JAXA JADE2",
            category: "Scientific / Data Visualization",
            technologies: "CesiumJS, React, Django, Python, AWS, S3, EC2, WebGL",
            image: "/images/jaxa-jade2.png",
            description: "Interactive 3D geospatial visualization platform for Jovian Auroral Distribution Experiment (JADE) data from the Juno mission. High-performance Django backend for large-scale binary datasets. Deployed on AWS with S3 for petabyte-scale storage. Custom WebGL shaders for dense point-cloud rendering.",
            url: "https://jade2.darts.isas.jaxa.jp/"
        },
        {
            id: 9,
            title: "MyWorldNavigator",
            category: "Full Stack / Enterprise",
            technologies: "React, Typesense, PHP, WordPress, MySQL, REST APIs",
            image: "/images/myworldnavigator.png",
            description: "High-performance resident-centric management platform for itinerary planning and concierge services. Mobile-first dashboard with custom calendar sync and real-time booking. Lightning-fast global search with Typesense. Headless WordPress for content management. Reduced search latency by 80%, automated 100% of resident calendar syncing.",
            url: "https://myworldnavigator.com/navigator/"
        },
        {
            id: 10,
            title: "HiTask",
            category: "Full Stack / Productivity",
            technologies: "React, Redux, Python, Django, REST APIs",
            image: "/images/hitask.png",
            description: "High-performance collaborative task management platform. Complex global state with Redux for shared task lists, team calendars, and project dashboards. Modular React components for drag-and-drop prioritization and time-tracking. Real-time collaboration for global teams with optimized React Hooks.",
            url: "https://hitask.com/"
        },
        {
            id: 11,
            title: "DSX",
            category: "Desktop / Hardware",
            technologies: "WPF, C#, XAML, Windows, Bluetooth, USB HID",
            image: "/images/dsx.jpg",
            description: "High-performance Windows utility for PlayStation 5 DualSense controller customization. Manages low-level Bluetooth and USB HID protocols. Specialized driver integration for Steam ecosystem compatibility. XAML-based UI with real-time feedback for haptic levels, battery life, and trigger resistance. Custom trigger mechanics and haptic simulation.",
            url: "https://store.steampowered.com/app/1812620/DSX/"
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
            title: "AI / BACKEND & DEVOPS",
            description: "Scalable backends & DevOps with Docker and AWS",
            details: "Building back-end infrastructure with Python, Django, Node, Express, and PHP. Data ingestion, ETL pipelines, and APIs. Cloud infrastructure with AWS, Docker, and DevOps.",
            tools: ["AI", "LLM", "Python", "Django", "Node", "Express", "PHP", "REST APIs", "AWS", "Docker", "KDB+", "Vagrant", "ETL"]
        },
        design: {
            title: "AI / FULL-STACK & FRONTEND",
            description: "Modern web & data visualization",
            details: "Building responsive interfaces with React, Redux, Vue, Angular, TypeScript, and JavaScript. Data visualization, 3D geospatial (CesiumJS), and mobile-responsive platforms.",
            tools: ["React", "Redux", "Vue", "Angular", "TypeScript", "JavaScript", "HTML", "CSS", "C#", "WPF", "API Integration"]
        }
    }
};
