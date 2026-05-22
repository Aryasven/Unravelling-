let currentStep = 0;
let userNotebook = JSON.parse(localStorage.getItem('advaita_journey_notebook')) || [];

function renderState() {
    if (currentStep >= gameChapters.length) {
        triggerEndscreen();
        return;
    }

    const currentConfig = gameChapters[currentStep];
    const targetElement = document.getElementById('game-card');
    
    targetElement.style.opacity = 0;
    targetElement.style.transform = "translateY(5px)";
    
    setTimeout(() => {
        document.getElementById('chapter-tag').textContent = currentConfig.tag;
        document.getElementById('scenario-text').textContent = currentConfig.scenario;
        document.getElementById('inquiry-question').textContent = currentConfig.question;
        document.getElementById('game-status').textContent = currentConfig.status;
        document.getElementById('ambient-glow').style.backgroundColor = currentConfig.glow;
        document.getElementById('visual-caption').textContent = currentConfig.caption;
        document.getElementById('visual-icon').innerHTML = currentConfig.svg;
        document.getElementById('player-reflection').value = '';
        
        for (let idx = 0; idx < 3; idx++) {
            const node = document.getElementById(`chap-${idx}`);
            if (idx === currentConfig.chapterIndex) {
                node.className = "text-amber-500 font-bold border-b border-amber-500 pb-0.5";
            } else if (idx < currentConfig.chapterIndex) {
                node.className = "text-emerald-500 line-through opacity-40";
            } else {
                node.className = "text-slate-600";
            }
        }

        targetElement.style.opacity = 1;
        targetElement.style.transform = "translateY(0)";
    }, 250);

    document.getElementById('journal-count').textContent = userNotebook.length;
}

function submitReflection() {
    const rawInput = document.getElementById('player-reflection').value.trim();
    if (!rawInput) {
        alert("The gate remains sealed. Direct your focus inward and write your realization to proceed.");
        return;
    }

    userNotebook.push({
        stageTitle: gameChapters[currentStep].tag,
        userResponse: rawInput
    });
    localStorage.setItem('advaita_journey_notebook', JSON.stringify(userNotebook));

    currentStep++;
    renderState();
    refreshLogs();
}

function refreshLogs() {
    const drawer = document.getElementById('journal-drawer');
    drawer.innerHTML = '';
    userNotebook.forEach(item => {
        const layout = document.createElement('div');
        layout.className = "bg-slate-950 border border-amber-900/10 rounded-xl p-2.5 text-[11px]";
        layout.innerHTML = `
            <div class="text-amber-600 font-serif-vedic mb-0.5">${item.stageTitle}</div>
            <div class="text-slate-400 italic">"${item.userResponse}"</div>
        `;
        drawer.prepend(layout);
    });
    document.getElementById('journal-count').textContent = userNotebook.length;
}

function toggleJournal() {
    document.getElementById('journal-drawer').classList.toggle('hidden');
}

function triggerEndscreen() {
    document.getElementById('game-card').innerHTML = `
        <div class="text-center py-4">
            <h2 class="text-xl font-serif-vedic text-amber-500 tracking-widest uppercase mb-3">Tat Tvam Asi</h2>
            <p class="text-xs text-slate-300 leading-relaxed mb-4">
                The grand investigation is complete. You have isolated the Seer, broken temporal identities with King Janaka, and anchored yourself as Turiya—the absolute screen of all consciousness.
            </p>
            <div class="border border-amber-900/20 rounded-xl bg-slate-950/40 p-3 text-left max-h-40 overflow-y-auto space-y-3 mb-4">
                <span class="text-[9px] tracking-widest text-amber-600 font-serif-vedic block border-b border-slate-900 pb-0.5">YOUR CONSCIOUS REALIZATIONS LOG:</span>
                \${userNotebook.map(item => `<div class="text-[11px]"><p class="text-amber-700 font-serif-vedic">\${item.stageTitle}</p><p class="text-slate-400">"\${item.userResponse}"</p></div>`).join('')}
            </div>
            <button onclick="wipeAndRestart()" class="w-full bg-gradient-to-r from-amber-700 to-amber-600 text-slate-950 font-bold uppercase tracking-widest text-[10px] py-3 rounded-xl transition-all">
                Return to the Beginning
            </button>
        </div>
    `;
    document.getElementById('game-status').textContent = "AHAM BRAHMASMI";
}

function wipeAndRestart() {
    localStorage.removeItem('advaita_journey_notebook');
    userNotebook = [];
    currentStep = 0;
    location.reload();
}

renderState();
refreshLogs();
