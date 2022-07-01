const synthesizer = window.speechSynthesis;

export interface SpeakConfiguration {
    pitch: number;
    rate: number;
}

export const DEFAULT_SPEAK_CONFIGURATION = {
    pitch: 1,
    rate: 0.8
}

function getSynthesizer() {
    return synthesizer
}

function getTrack() {
    let voices = [];

    voices = synthesizer.getVoices().sort(function (a, b) {
        const aname = a.name.toUpperCase();
        const bname = b.name.toUpperCase();

        if (aname < bname) {
            return -1;
        } else if (aname == bname) {
            return 0;
        } else {
            return +1;
        }
    });

    return voices
}

function toSpeak(voice: SpeechSynthesisVoice, content: string, config: SpeakConfiguration = DEFAULT_SPEAK_CONFIGURATION) {
    return new Promise((resolve, reject) => {
        const instance = new SpeechSynthesisUtterance(content)

        instance.onend  = (event) => resolve(event)

        instance.onerror = (event) => reject(event)

        const { pitch, rate } = config;
        instance.rate  = rate
        instance.pitch = pitch
        instance.voice = voice

        synthesizer.speak(instance)
    })
}

export default {
    getTrack,
    toSpeak,
    getSynthesizer
}
