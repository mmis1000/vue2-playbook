

import ItemDummy from "../ItemDummy.vue";
import Vue from "vue";

const prefix = "dock-sound-";

const input = {
  $type: prefix + "input",
  getValue() {
    return this.links
      .map((link) => {
        return link.input.getValue();
      })
      .reduce((x, y) => x || y, false);
  },
  getPosition() {
    return {
      x: this.owner.x,
      y: this.owner.y + 40,
    };
  },
};

const createComponent = () => {
  const dock = Vue.observable({
    id: Math.random().toString(16).slice(2),
    type: 'input',
    owner: null,
    links: [],
    ...input
  })

  const item = Vue.observable({
    id: Math.random().toString(16).slice(2),
    renderType: 'sound-item',
    x: 0,
    y: 0,
    _value: false,
    _channel: 0,
    _note: 60,
    _velocity: 64,
    _prevState: false,
    inputs: [],
    outputs: []
  })

  item.inputs.push(dock)
  dock.owner = item

  return {
    item,
    docks: [dock]
  }
}

const PROGRAMS = [
  {
    "id": "acoustic_grand_piano",
    "name": "Acoustic Grand Piano",
    "program": 0,
    "category": "Piano"
  },
  {
    "id": "bright_acoustic_piano",
    "name": "Bright Acoustic Piano",
    "program": 1,
    "category": "Piano"
  },
  {
    "id": "electric_grand_piano",
    "name": "Electric Grand Piano",
    "program": 2,
    "category": "Piano"
  },
  {
    "id": "honkytonk_piano",
    "name": "Honky-tonk Piano",
    "program": 3,
    "category": "Piano"
  },
  {
    "id": "electric_piano_1",
    "name": "Electric Piano 1",
    "program": 4,
    "category": "Piano"
  },
  {
    "id": "electric_piano_2",
    "name": "Electric Piano 2",
    "program": 5,
    "category": "Piano"
  },
  {
    "id": "harpsichord",
    "name": "Harpsichord",
    "program": 6,
    "category": "Piano"
  },
  {
    "id": "clavinet",
    "name": "Clavinet",
    "program": 7,
    "category": "Piano"
  },
  {
    "id": "celesta",
    "name": "Celesta",
    "program": 8,
    "category": "Chromatic Percussion"
  },
  {
    "id": "glockenspiel",
    "name": "Glockenspiel",
    "program": 9,
    "category": "Chromatic Percussion"
  },
  {
    "id": "music_box",
    "name": "Music Box",
    "program": 10,
    "category": "Chromatic Percussion"
  },
  {
    "id": "vibraphone",
    "name": "Vibraphone",
    "program": 11,
    "category": "Chromatic Percussion"
  },
  {
    "id": "marimba",
    "name": "Marimba",
    "program": 12,
    "category": "Chromatic Percussion"
  },
  {
    "id": "xylophone",
    "name": "Xylophone",
    "program": 13,
    "category": "Chromatic Percussion"
  },
  {
    "id": "tubular_bells",
    "name": "Tubular Bells",
    "program": 14,
    "category": "Chromatic Percussion"
  },
  {
    "id": "dulcimer",
    "name": "Dulcimer",
    "program": 15,
    "category": "Chromatic Percussion"
  },
  {
    "id": "drawbar_organ",
    "name": "Drawbar Organ",
    "program": 16,
    "category": "Organ"
  },
  {
    "id": "percussive_organ",
    "name": "Percussive Organ",
    "program": 17,
    "category": "Organ"
  },
  {
    "id": "rock_organ",
    "name": "Rock Organ",
    "program": 18,
    "category": "Organ"
  },
  {
    "id": "church_organ",
    "name": "Church Organ",
    "program": 19,
    "category": "Organ"
  },
  {
    "id": "reed_organ",
    "name": "Reed Organ",
    "program": 20,
    "category": "Organ"
  },
  {
    "id": "accordion",
    "name": "Accordion",
    "program": 21,
    "category": "Organ"
  },
  {
    "id": "harmonica",
    "name": "Harmonica",
    "program": 22,
    "category": "Organ"
  },
  {
    "id": "tango_accordion",
    "name": "Tango Accordion",
    "program": 23,
    "category": "Organ"
  },
  {
    "id": "acoustic_guitar_nylon",
    "name": "Acoustic Guitar (nylon)",
    "program": 24,
    "category": "Guitar"
  },
  {
    "id": "acoustic_guitar_steel",
    "name": "Acoustic Guitar (steel)",
    "program": 25,
    "category": "Guitar"
  },
  {
    "id": "electric_guitar_jazz",
    "name": "Electric Guitar (jazz)",
    "program": 26,
    "category": "Guitar"
  },
  {
    "id": "electric_guitar_clean",
    "name": "Electric Guitar (clean)",
    "program": 27,
    "category": "Guitar"
  },
  {
    "id": "electric_guitar_muted",
    "name": "Electric Guitar (muted)",
    "program": 28,
    "category": "Guitar"
  },
  {
    "id": "overdriven_guitar",
    "name": "Overdriven Guitar",
    "program": 29,
    "category": "Guitar"
  },
  {
    "id": "distortion_guitar",
    "name": "Distortion Guitar",
    "program": 30,
    "category": "Guitar"
  },
  {
    "id": "guitar_harmonics",
    "name": "Guitar Harmonics",
    "program": 31,
    "category": "Guitar"
  },
  {
    "id": "acoustic_bass",
    "name": "Acoustic Bass",
    "program": 32,
    "category": "Bass"
  },
  {
    "id": "electric_bass_finger",
    "name": "Electric Bass (finger)",
    "program": 33,
    "category": "Bass"
  },
  {
    "id": "electric_bass_pick",
    "name": "Electric Bass (pick)",
    "program": 34,
    "category": "Bass"
  },
  {
    "id": "fretless_bass",
    "name": "Fretless Bass",
    "program": 35,
    "category": "Bass"
  },
  {
    "id": "slap_bass_1",
    "name": "Slap Bass 1",
    "program": 36,
    "category": "Bass"
  },
  {
    "id": "slap_bass_2",
    "name": "Slap Bass 2",
    "program": 37,
    "category": "Bass"
  },
  {
    "id": "synth_bass_1",
    "name": "Synth Bass 1",
    "program": 38,
    "category": "Bass"
  },
  {
    "id": "synth_bass_2",
    "name": "Synth Bass 2",
    "program": 39,
    "category": "Bass"
  },
  {
    "id": "violin",
    "name": "Violin",
    "program": 40,
    "category": "Strings"
  },
  {
    "id": "viola",
    "name": "Viola",
    "program": 41,
    "category": "Strings"
  },
  {
    "id": "cello",
    "name": "Cello",
    "program": 42,
    "category": "Strings"
  },
  {
    "id": "contrabass",
    "name": "Contrabass",
    "program": 43,
    "category": "Strings"
  },
  {
    "id": "tremolo_strings",
    "name": "Tremolo Strings",
    "program": 44,
    "category": "Strings"
  },
  {
    "id": "pizzicato_strings",
    "name": "Pizzicato Strings",
    "program": 45,
    "category": "Strings"
  },
  {
    "id": "orchestral_harp",
    "name": "Orchestral Harp",
    "program": 46,
    "category": "Strings"
  },
  {
    "id": "timpani",
    "name": "Timpani",
    "program": 47,
    "category": "Strings"
  },
  {
    "id": "string_ensemble_1",
    "name": "String Ensemble 1",
    "program": 48,
    "category": "Ensemble"
  },
  {
    "id": "string_ensemble_2",
    "name": "String Ensemble 2",
    "program": 49,
    "category": "Ensemble"
  },
  {
    "id": "synth_strings_1",
    "name": "Synth Strings 1",
    "program": 50,
    "category": "Ensemble"
  },
  {
    "id": "synth_strings_2",
    "name": "Synth Strings 2",
    "program": 51,
    "category": "Ensemble"
  },
  {
    "id": "choir_aahs",
    "name": "Choir Aahs",
    "program": 52,
    "category": "Ensemble"
  },
  {
    "id": "voice_oohs",
    "name": "Voice Oohs",
    "program": 53,
    "category": "Ensemble"
  },
  {
    "id": "synth_choir",
    "name": "Synth Choir",
    "program": 54,
    "category": "Ensemble"
  },
  {
    "id": "orchestra_hit",
    "name": "Orchestra Hit",
    "program": 55,
    "category": "Ensemble"
  },
  {
    "id": "trumpet",
    "name": "Trumpet",
    "program": 56,
    "category": "Brass"
  },
  {
    "id": "trombone",
    "name": "Trombone",
    "program": 57,
    "category": "Brass"
  },
  {
    "id": "tuba",
    "name": "Tuba",
    "program": 58,
    "category": "Brass"
  },
  {
    "id": "muted_trumpet",
    "name": "Muted Trumpet",
    "program": 59,
    "category": "Brass"
  },
  {
    "id": "french_horn",
    "name": "French Horn",
    "program": 60,
    "category": "Brass"
  },
  {
    "id": "brass_section",
    "name": "Brass Section",
    "program": 61,
    "category": "Brass"
  },
  {
    "id": "synth_brass_1",
    "name": "Synth Brass 1",
    "program": 62,
    "category": "Brass"
  },
  {
    "id": "synth_brass_2",
    "name": "Synth Brass 2",
    "program": 63,
    "category": "Brass"
  },
  {
    "id": "soprano_sax",
    "name": "Soprano Sax",
    "program": 64,
    "category": "Reed"
  },
  {
    "id": "alto_sax",
    "name": "Alto Sax",
    "program": 65,
    "category": "Reed"
  },
  {
    "id": "tenor_sax",
    "name": "Tenor Sax",
    "program": 66,
    "category": "Reed"
  },
  {
    "id": "baritone_sax",
    "name": "Baritone Sax",
    "program": 67,
    "category": "Reed"
  },
  {
    "id": "oboe",
    "name": "Oboe",
    "program": 68,
    "category": "Reed"
  },
  {
    "id": "english_horn",
    "name": "English Horn",
    "program": 69,
    "category": "Reed"
  },
  {
    "id": "bassoon",
    "name": "Bassoon",
    "program": 70,
    "category": "Reed"
  },
  {
    "id": "clarinet",
    "name": "Clarinet",
    "program": 71,
    "category": "Reed"
  },
  {
    "id": "piccolo",
    "name": "Piccolo",
    "program": 72,
    "category": "Pipe"
  },
  {
    "id": "flute",
    "name": "Flute",
    "program": 73,
    "category": "Pipe"
  },
  {
    "id": "recorder",
    "name": "Recorder",
    "program": 74,
    "category": "Pipe"
  },
  {
    "id": "pan_flute",
    "name": "Pan Flute",
    "program": 75,
    "category": "Pipe"
  },
  {
    "id": "blown_bottle",
    "name": "Blown Bottle",
    "program": 76,
    "category": "Pipe"
  },
  {
    "id": "shakuhachi",
    "name": "Shakuhachi",
    "program": 77,
    "category": "Pipe"
  },
  {
    "id": "whistle",
    "name": "Whistle",
    "program": 78,
    "category": "Pipe"
  },
  {
    "id": "ocarina",
    "name": "Ocarina",
    "program": 79,
    "category": "Pipe"
  },
  {
    "id": "lead_1_square",
    "name": "Lead 1 (square)",
    "program": 80,
    "category": "Synth Lead"
  },
  {
    "id": "lead_2_sawtooth",
    "name": "Lead 2 (sawtooth)",
    "program": 81,
    "category": "Synth Lead"
  },
  {
    "id": "lead_3_calliope",
    "name": "Lead 3 (calliope)",
    "program": 82,
    "category": "Synth Lead"
  },
  {
    "id": "lead_4_chiff",
    "name": "Lead 4 (chiff)",
    "program": 83,
    "category": "Synth Lead"
  },
  {
    "id": "lead_5_charang",
    "name": "Lead 5 (charang)",
    "program": 84,
    "category": "Synth Lead"
  },
  {
    "id": "lead_6_voice",
    "name": "Lead 6 (voice)",
    "program": 85,
    "category": "Synth Lead"
  },
  {
    "id": "lead_7_fifths",
    "name": "Lead 7 (fifths)",
    "program": 86,
    "category": "Synth Lead"
  },
  {
    "id": "lead_8_bass__lead",
    "name": "Lead 8 (bass + lead)",
    "program": 87,
    "category": "Synth Lead"
  },
  {
    "id": "pad_1_new_age",
    "name": "Pad 1 (new age)",
    "program": 88,
    "category": "Synth Pad"
  },
  {
    "id": "pad_2_warm",
    "name": "Pad 2 (warm)",
    "program": 89,
    "category": "Synth Pad"
  },
  {
    "id": "pad_3_polysynth",
    "name": "Pad 3 (polysynth)",
    "program": 90,
    "category": "Synth Pad"
  },
  {
    "id": "pad_4_choir",
    "name": "Pad 4 (choir)",
    "program": 91,
    "category": "Synth Pad"
  },
  {
    "id": "pad_5_bowed",
    "name": "Pad 5 (bowed)",
    "program": 92,
    "category": "Synth Pad"
  },
  {
    "id": "pad_6_metallic",
    "name": "Pad 6 (metallic)",
    "program": 93,
    "category": "Synth Pad"
  },
  {
    "id": "pad_7_halo",
    "name": "Pad 7 (halo)",
    "program": 94,
    "category": "Synth Pad"
  },
  {
    "id": "pad_8_sweep",
    "name": "Pad 8 (sweep)",
    "program": 95,
    "category": "Synth Pad"
  },
  {
    "id": "fx_1_rain",
    "name": "FX 1 (rain)",
    "program": 96,
    "category": "Synth Effects"
  },
  {
    "id": "fx_2_soundtrack",
    "name": "FX 2 (soundtrack)",
    "program": 97,
    "category": "Synth Effects"
  },
  {
    "id": "fx_3_crystal",
    "name": "FX 3 (crystal)",
    "program": 98,
    "category": "Synth Effects"
  },
  {
    "id": "fx_4_atmosphere",
    "name": "FX 4 (atmosphere)",
    "program": 99,
    "category": "Synth Effects"
  },
  {
    "id": "fx_5_brightness",
    "name": "FX 5 (brightness)",
    "program": 100,
    "category": "Synth Effects"
  },
  {
    "id": "fx_6_goblins",
    "name": "FX 6 (goblins)",
    "program": 101,
    "category": "Synth Effects"
  },
  {
    "id": "fx_7_echoes",
    "name": "FX 7 (echoes)",
    "program": 102,
    "category": "Synth Effects"
  },
  {
    "id": "fx_8_scifi",
    "name": "FX 8 (sci-fi)",
    "program": 103,
    "category": "Synth Effects"
  },
  {
    "id": "sitar",
    "name": "Sitar",
    "program": 104,
    "category": "Ethnic"
  },
  {
    "id": "banjo",
    "name": "Banjo",
    "program": 105,
    "category": "Ethnic"
  },
  {
    "id": "shamisen",
    "name": "Shamisen",
    "program": 106,
    "category": "Ethnic"
  },
  {
    "id": "koto",
    "name": "Koto",
    "program": 107,
    "category": "Ethnic"
  },
  {
    "id": "kalimba",
    "name": "Kalimba",
    "program": 108,
    "category": "Ethnic"
  },
  {
    "id": "bagpipe",
    "name": "Bagpipe",
    "program": 109,
    "category": "Ethnic"
  },
  {
    "id": "fiddle",
    "name": "Fiddle",
    "program": 110,
    "category": "Ethnic"
  },
  {
    "id": "shanai",
    "name": "Shanai",
    "program": 111,
    "category": "Ethnic"
  },
  {
    "id": "tinkle_bell",
    "name": "Tinkle Bell",
    "program": 112,
    "category": "Percussive"
  },
  {
    "id": "agogo",
    "name": "Agogo",
    "program": 113,
    "category": "Percussive"
  },
  {
    "id": "steel_drums",
    "name": "Steel Drums",
    "program": 114,
    "category": "Percussive"
  },
  {
    "id": "woodblock",
    "name": "Woodblock",
    "program": 115,
    "category": "Percussive"
  },
  {
    "id": "taiko_drum",
    "name": "Taiko Drum",
    "program": 116,
    "category": "Percussive"
  },
  {
    "id": "melodic_tom",
    "name": "Melodic Tom",
    "program": 117,
    "category": "Percussive"
  },
  {
    "id": "synth_drum",
    "name": "Synth Drum",
    "program": 118,
    "category": "Percussive"
  },
  {
    "id": "reverse_cymbal",
    "name": "Reverse Cymbal",
    "program": 119,
    "category": "Sound effects"
  },
  {
    "id": "guitar_fret_noise",
    "name": "Guitar Fret Noise",
    "program": 120,
    "category": "Sound effects"
  },
  {
    "id": "breath_noise",
    "name": "Breath Noise",
    "program": 121,
    "category": "Sound effects"
  },
  {
    "id": "seashore",
    "name": "Seashore",
    "program": 122,
    "category": "Sound effects"
  },
  {
    "id": "bird_tweet",
    "name": "Bird Tweet",
    "program": 123,
    "category": "Sound effects"
  },
  {
    "id": "telephone_ring",
    "name": "Telephone Ring",
    "program": 124,
    "category": "Sound effects"
  },
  {
    "id": "helicopter",
    "name": "Helicopter",
    "program": 125,
    "category": "Sound effects"
  },
  {
    "id": "applause",
    "name": "Applause",
    "program": 126,
    "category": "Sound effects"
  },
  {
    "id": "gunshot",
    "name": "Gunshot",
    "program": 127,
    "category": "Sound effects"
  }
]

const PROGRAM_OPTIONS = PROGRAMS.map(item => ({
  name: item.name,
  value: item
}))

export const optionsPanel = [
  {
    title: "Midi Channels",
    items: [
    ]
  }
]

export const options = Vue.observable({
  "sound-item": {
    channels: []
  }
})

for (let i = 0; i < 16; i++) {
  optionsPanel[0].items.push({
    name: `Channel ${i + 1}`,
    type: "select",
    options: PROGRAM_OPTIONS,
    path: ["sound-item", "channels", i, "program"]
  })

  options["sound-item"].channels.push({
    program: PROGRAM_OPTIONS[0].value
  })
}

export const declaration = {
  menu: [
    {
      name: 'Speaker',
      component: 'sound-item',
      createComponent
    }
  ],
  components: {
    'sound-item': () => ({
      // The component to load (should be a Promise)
      component: import(/* webpackChunkName: "item-sound" */ './ItemSound.vue'),
      // A component to use while the async component is loading
      loading: ItemDummy,
      // Delay before showing the loading component. Default: 200ms.
      delay: 200
    })
  },
  optionsPanel,
  options,
  types: [input]
}