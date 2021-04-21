Vue.config.devtools = true;
var app = new Vue({
    el: '#app',
    data: {
        header: {
            logo: "logo.svg",
            links: [
                {
                    name: "Solutions",
                    dropdown: true
                },
                {
                    name: "Pricing",
                    dropdown: false
                },
                {
                    name: "Blog",
                    dropdown: false
                },
                {
                    name: "Sign in",
                    dropdown: false
                }
            ]
        },
        main: {
            topItem: [
                {
                    name: "Hardcore",
                    img: "hardcore.png",
                    description: "They are hardcore, formal and disconnected"
                },
                {
                    name: "No feedback",
                    img: "nofeedback.png",
                    description: "They don't encourage regular feedback"
                },
                {
                    name: "Not safe",
                    img: "notsafe.png",
                    description: "They don't make it safe to speak up"
                }
            ],
            bottomItem : [
                {
                    name: "Lightweight",
                    img: "lightweight.png",
                    description: "It's lightweight fun and interconnected"
                },
                {
                    name: "Feedback suggestions",
                    img: "feedbacksuggestions.png",
                    description: "It encourages regular feedback with contextual requests"
                },
                {
                    name: "Safe",
                    img: "safe.png",
                    description: "It creates a safe environment for dialog"
                }
            ],
            rows: [
                {
                    name: "Employee feedback",
                    img: "employee-feedback.jpg",
                    title: "Feedback to help teammates improve",
                    description: "Empower your teammates to know in real time what they are doing well and what they need to improve.",
                    desName: "Communication",
                    desImg: "communication.jpg"
                },
                {
                    name: "Employee survey",
                    img: "employee-survey.jpg",
                    title: "Surveys to help the team be better",
                    description: "Get real-time insights into your team with research-backed, lightweight and regular surveys.",
                    desName: "Insights",
                    desImg: "insights.jpg"
                },
                {
                    name: "Performance review",
                    img: "performance-review.jpg",
                    title: "Reviews to help teammates get a fair evaluation",
                    description: "Make better compensation and promotion decisions with objective and quick performance reviews.",
                    desName: "Review",
                    desImg: "review.jpg"
                },
                {
                    name: "Employee recognition",
                    img: "employee-recognition.jpg",
                    title: "Praise to help teammates feel valued",
                    description: "Make it a habit to recognize and praise people who do great work.",
                    desName: "Recognition",
                    desImg: "recognition.jpg"
                }
            ]
        },
        footer: {
            logo: "logo-small.svg",
            logoName: "Teambit",
            description: "helps teams create high performing cultures by making feedback a daily habit.",
            menu: [
                {
                    name: "Product",
                    links: ["Feedback", "Surveys", "Reviews", "Praise", "Slack Integration", "Schedule a demo", "Pricing"]
                },
                {
                    name: "About",
                    links: ["About", "Terms and privacy", "Help Center", "Blog", "Digest"]
                },
                {
                    name: "Connect",
                    links: ["Contact us", "Twitter", "Facebook", "Linkedin"]
                },
                {
                    name: "Labs",
                    links: ["Manager checklist", "Manager assessment", "Manager handbook"]
                },
                {
                    name: "From the blog",
                    links: ["How to change your company culture: a four-step framework", "How teams can be more productive by killing 8-hour workday", "How to build high performing teams inspired by nature"],
                    viewAll: true
                }
            ]
        }
    },
    methods: {
        isDropdown(link) {
            if(link.dropdown == true) {
                return true;
            }
            return false;
        }
    }
});