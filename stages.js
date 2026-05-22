const gameChapters = [
    // CHAPTER 1: DRIG DRISYA VIVEKA
    {
        chapterIndex: 0,
        tag: "Chapter 1: Drig Drisya Viveka // Stage I",
        scenario: "Look around you right now. You can see your phone, the room, colors, and shapes. Things in the room move or alter, but your eyesight stays steady. The world is an object that your eyes look at.",
        question: "An object cannot see itself. A book cannot read itself. Since you can see the world, you must be separate from the world. Look at an object near you. What separates you from it?",
        status: "Vicara: External World",
        glow: "rgba(245, 158, 11, 0.03)",
        caption: "The Outer World",
        svg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />`
    },
    {
        chapterIndex: 0,
        tag: "Chapter 1: Drig Drisya Viveka // Stage II",
        scenario: "Now, close your eyes for a brief moment. You can feel your breath, the temperature of your skin, and the weight of your body. Your body has now become the object, and your mind is the one observing it.",
        question: "Since you can feel and observe your own body, you cannot be just your body. You are the one who knows it. If your body is the object, what is the 'inner you' that knows it?",
        status: "Vicara: The Sensorium",
        glow: "rgba(16, 185, 129, 0.03)",
        caption: "The Physical Frame",
        svg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />`
    },
    {
        chapterIndex: 0,
        tag: "Chapter 1: Drig Drisya Viveka // Stage III",
        scenario: "Let's go one step deeper. Watch your thoughts. A memory pops up, a feeling comes, or a doubt disappears. Your mind is like a busy street where thoughts come and go constantly.",
        question: "You can watch your thoughts arrive and leave. Because you can observe your mind changing, you cannot be your mind. If your thoughts and mind are just objects you are watching, who is the real watcher?",
        status: "Vicara: Internal Mind",
        glow: "rgba(139, 92, 246, 0.04)",
        caption: "The Mind-Stream",
        svg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />`
    },
    {
        chapterIndex: 0,
        tag: "Chapter 1: Drig Drisya Viveka // Stage IV",
        scenario: "The puzzle is solved. The world is seen by the body. The body is seen by the mind. But the mind is seen by the true Witness—You. You are that steady, quiet awareness that never changes.",
        question: "Your mind feels happy, then sad. Your body grows young, then old. But the awareness watching them stays exactly the same. What does it feel like to rest as this quiet watcher instead of the busy mind?",
        status: "Vicara: Sakshi Atman",
        glow: "rgba(236, 72, 153, 0.05)",
        caption: "The Changeless Witness",
        svg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.243 17.657l.707.707M6.343 6.343l.707-.707M14 12a2 2 0 11-4 0 2 2 0 014 0z" />`
    },

    // CHAPTER 2: KING JANAKA'S ASTHAVAKRA STORY
    {
        chapterIndex: 1,
        tag: "Chapter 2: King Janaka's Dream // Stage I",
        scenario: "King Janaka dreamt he was a starving beggar out in a devastating storm, weeping for bread. He woke up sitting safe on a gold palace throne, surrounded by servants, completely shocked.",
        question: "Janaka asked his sages: 'Am I a King who dreamt of being a beggar, or am I a beggar dreaming that I am a King?' Think about this deeply. What makes something feel 'real' when you experience it?",
        status: "Story: Janaka's Mirror",
        glow: "rgba(239, 68, 68, 0.04)",
        caption: "The Royal Court",
        svg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />`
    },
    {
        chapterIndex: 1,
        tag: "Chapter 2: King Janaka's Dream // Stage II",
        scenario: "Sage Ashtavakra smiled and solved it: 'When you were a beggar, this palace did not exist. Now on the throne, that freezing storm does not exist. Therefore, neither the king nor the beggar is absolutely real.'",
        question: "Both identities completely vanish depending on whether your physical eyes are open or closed. If both identities come and go, who are you when both roles are completely stripped away?",
        status: "Inquiry: Stripping Identity",
        glow: "rgba(217, 119, 6, 0.04)",
        caption: "The Collapse of Ego",
        svg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />`
    },

    // CHAPTER 3: MANDUKYA UPANISHAD
    {
        chapterIndex: 2,
        tag: "Chapter 3: Mandukya Upanishad // Stage I",
        scenario: "Welcome to the Waking State (Jagrat). Here, your mind relies on the physical body and five physical senses to touch, see, and navigate a dense material world that feels solid and external.",
        question: "When you look out into this daylight world, everything feels permanent. But does this physical setup exist for you when you fall asleep? What happens to the world when your mind turns inward?",
        status: "Avastha: Waking (Jagrat)",
        glow: "rgba(14, 165, 233, 0.03)",
        caption: "The Daylight Mind",
        svg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.243 17.657l.707.707M6.343 6.343l.707-.707" />`
    },
    {
        chapterIndex: 2,
        tag: "Chapter 3: Mandukya Upanishad // Stage II",
        scenario: "You slide into the Dream State (Svapna). Your body is paralyzed in bed, yet your mind completely manufactures a massive, vibrant alternate universe out of thin air—mountains, people, and time.",
        question: "In a dream, your mind creates both the objects (the dream world) and the subject (the 'dream version' of you). If your mind can build entire realities from nothing, how certain are you of the waking world?",
        status: "Avastha: Dreaming (Svapna)",
        glow: "rgba(168, 85, 247, 0.04)",
        caption: "The Astral Loom",
        svg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />`
    },
    {
        chapterIndex: 2,
        tag: "Chapter 3: Mandukya Upanishad // Stage III",
        scenario: "You drop into Deep Sleep (Sushupti). There are no thoughts, no dreams, no universe, and no name. It is a completely blank void. Yet, when you wake up, you confidently say: 'I slept soundly; I knew nothing.'",
        question: "To say 'I knew nothing' means something was there to witness the blank emptiness. If your thoughts and identity were completely absent, what was awake inside you to record that silence?",
        status: "Avastha: Deep Void (Sushupti)",
        glow: "rgba(100, 116, 139, 0.05)",
        caption: "The Causal Silence",
        svg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />`
    },
    {
        chapterIndex: 2,
        tag: "Chapter 3: Mandukya Upanishad // Stage IV",
        scenario: "This is Turiya—The Fourth. It is not a state, but consciousness itself. Waking, dreaming, and deep sleep are just movies playing on you. The movie changes, but you—the screen—never change.",
        question: "You are the underlying awareness that holds all three states. Look back at your whole journey today. Reflect on yourself as the unmoving, immortal screen, not the passing movie.",
        status: "Turiya: Absolute Brahman",
        glow: "rgba(244, 63, 94, 0.06)",
        caption: "The Absolute Screen",
        svg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />`
    }
];
