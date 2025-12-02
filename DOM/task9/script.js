// Virtual piano implementation
document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('main');
    const heading = document.createElement('h1');
    heading.textContent = 'Press a key to play a note';
    main.appendChild(heading);

    const pianoEl = document.getElementById('piano');

    const keyMap = [
        {k: 'a', name: 'C4', freq: 261.63},
        {k: 'w', name: 'C#4', freq: 277.18},
        {k: 's', name: 'D4', freq: 293.66},
        {k: 'e', name: 'D#4', freq: 311.13},
        {k: 'd', name: 'E4', freq: 329.63},
        {k: 'f', name: 'F4', freq: 349.23},
        {k: 't', name: 'F#4', freq: 369.99},
        {k: 'g', name: 'G4', freq: 392.00},
        {k: 'y', name: 'G#4', freq: 415.30},
        {k: 'h', name: 'A4', freq: 440.00},
        {k: 'u', name: 'A#4', freq: 466.16},
        {k: 'j', name: 'B4', freq: 493.88},
        {k: 'k', name: 'C5', freq: 523.25}
    ];

    keyMap.forEach(item => {
        const div = document.createElement('div');
        div.className = 'key';
        div.dataset.key = item.k;
        div.innerHTML = `<div class="kbd">${item.k.toUpperCase()}</div><div class="note">${item.name}</div>`;
        pianoEl.appendChild(div);
    });

    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    const audioCtx = new AudioCtx();

    function playTone(freq, duration = 0.9) {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.value = freq;
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        const now = audioCtx.currentTime;
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.8, now + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
        osc.start(now);
        osc.stop(now + duration + 0.02);
    }

    function setActiveKey(key, active = true) {
        const el = document.querySelector(`.key[data-key="${key}"]`);
        if (el) {
            if (active) el.classList.add('active'); else el.classList.remove('active');
        }
    }

    function handleKeyDown(k) {
        const key = (k || '').toLowerCase();
        const mapping = keyMap.find(x => x.k === key);
        if (!mapping) return;
        if (audioCtx.state === 'suspended') audioCtx.resume();
        playTone(mapping.freq);
        setActiveKey(key, true);
    }

    function handleKeyUp(k) {
        const key = (k || '').toLowerCase();
        setActiveKey(key, false);
    }

    window.addEventListener('keydown', (e) => {
        if (e.repeat) return;
        heading.textContent = `Key: ${e.key}`;
        handleKeyDown(e.key);
    });

    window.addEventListener('keyup', (e) => {
        handleKeyUp(e.key);
    });

    pianoEl.addEventListener('pointerdown', (e) => {
        const keyEl = e.target.closest('.key');
        if (!keyEl) return;
        const key = keyEl.dataset.key;
        handleKeyDown(key);
        const up = () => { handleKeyUp(key); document.removeEventListener('pointerup', up); };
        document.addEventListener('pointerup', up);
    });

});
