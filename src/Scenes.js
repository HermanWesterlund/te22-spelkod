export const scenes = [
    {
        id: 1,
        speaker: "Rudolf:",
        description: "Welcome to my bedroom!",
        choices: [
            {
                description: "Go to cafe",
                target: 2
            },
            {
                description: "Talk",
                target: 1
            }
        ]
    },
    {
        id: 2,
        speaker: "Rudolf:",
        description: "We are at the cafe",
        choices: [
            {
                description: "Go to the bedroom ~",
                target: 1
            },
            {
                description: "Talk",
                target: 2
            }
        ]
    },
]