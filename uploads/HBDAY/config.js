/*  ═══════════════════════════════════════════════════
    SITE CONFIGURATION — Edit everything here
    ═══════════════════════════════════════════════════ */

const CONFIG = {

  /* ── Person Details ───────────────────────────── */
  herName: "Hetuuu",
  yourName: "Omi",

  /* ── Birthday & Countdown ─────────────────────── */
  // Format: "YYYY-MM-DDTHH:mm:ss"  (local time)
  birthdayDate: "2026-08-22T00:00:00",

  /* ── Photos ───────────────────────────────────── */
  // Place photos in the same folder (or public/photos/)
  photos: [
    {
      src: "WhatsApp Image 2026-07-24 at 10.57.50 PM.jpeg",
      caption: "A moment worth keeping",
      date: ""
    },
    {
      src: "WhatsApp Image 2026-07-24 at 10.57.50 PM (2).jpeg",
      caption: "Gentle memories",
      date: ""
    },
    {
      src: "WhatsApp Image 2026-07-24 at 10.57.51 PM.jpeg",
      caption: "Bright dreams",
      date: ""
    },
    {
      src: "WhatsApp Image 2026-07-24 at 10.57.51 PM (1).jpeg",
      caption: "Always smiling",
      date: ""
    },
    {
      src: "WhatsApp Image 2026-07-24 at 10.57.51 PM (2).jpeg",
      caption: "Forever in heart",
      date: ""
    }
  ],

  /* ── Videos ───────────────────────────────────── */
  videos: [
    {
      src: "WhatsApp Video 2026-07-24 at 11.26.25 PM.mp4",
      poster: "WhatsApp Image 2026-07-24 at 10.57.50 PM.jpeg",
      title: "A heartfelt message"
    },
    {
      src: "WhatsApp Video 2026-07-24 at 11.26.5 PM.mp4",
      poster: "WhatsApp Image 2026-07-24 at 10.57.51 PM.jpeg",
      title: "A special moment"
    }
  ],

  /* ── Music ────────────────────────────────────── */
  // Place your music file & set the path here
  musicFile: "",            // e.g. "public/music/birthday-song.mp3"
  musicVolume: 0.3,         // 0 – 1

  /* ── Messages ─────────────────────────────────── */
  welcomeMessage:
    "I made this little place with care. Thank you for taking a moment to visit.",

  apologyTitle: "A Few Words From the Heart",
  apologyText: [
    "I know you are doing well. And I know you are more capable than you even realize — I'm not saying this to make you feel better, I'm saying it because I genuinely mean it.",
    "You are not hurt, you are not sad. You are someone with so much more ahead of you. There are many more things to achieve in life, and at the right time, the right person will come to you.",
    "So till then, just enjoy your life. Embrace every moment, every little joy, every quiet day. You deserve all of it.",
    "And no matter what — I am always and forever there for you.",
    "Always."
  ],

  encouragementCards: [
    "Believe in yourself.",
    "You are stronger than you realize.",
    "Keep chasing your dreams.",
    "Never stop smiling.",
    "You deserve happiness.",
    "Your future is bright.",
    "You are capable of amazing things.",
    "Keep learning & growing.",
    "The world needs your kindness.",
    "No matter what life brings, never stop believing in yourself."
  ],

  reasonsAmazing: [
    { title: "Your Smile",      text: "It lights up every room you walk into." },
    { title: "Your Kindness",   text: "You make the world softer just by being in it." },
    { title: "Your Courage",    text: "You face every challenge with grace." },
    { title: "Your Strength",   text: "Even on hard days, you keep going." },
    { title: "Your Dreams",     text: "They inspire everyone around you." },
    { title: "Your Heart",      text: "So full of love and warmth." },
    { title: "Your Determination", text: "Nothing can stop you." },
    { title: "Your Positivity", text: "You find light even in the dark." }
  ],

  birthdayLetter:
    `Dear ${`Hetuuu`},\n\nHappy Birthday! 🎂\n\nI hope this day feels soft and bright, full of little joys that remind you how loved you are. May your heart feel calm, your spirit feel brave, and your smile stay close all day long.\n\nYou've grown so much, and I'm so proud of who you are becoming. This year, I wish for you — happiness that feels easy, peace that feels deep, and laughter that feels endless.\n\nYou deserve the whole world and more.\n\nWith all my love,\nOmi ❤️`,

  finalWishes: [
    "May your year be gentle and full of wonder.",
    "May your dreams feel closer every day.",
    "May kindness find you in beautiful ways.",
    "May you always find reasons to smile.",
    "May every sunrise remind you of how amazing you are."
  ],

  endingMessage: {
    title: "Happy Birthday ❤️",
    lines: [
      "Thank you for every smile.",
      "Thank you for every memory.",
      "I hope this year brings you happiness, peace, success, good health, and every opportunity you dream of.",
      "Never stop believing in yourself.",
      "You are capable of incredible things.",
      "Keep smiling.",
      "Keep shining.",
      "Take care.",
      "Always."
    ],
    signoff: "— Omi"
  },

  /* ── Scrapbook Memories ───────────────────────── */
  scrapbookPages: [
    {
      photo: "WhatsApp Image 2026-07-24 at 10.57.51 PM.jpeg",
      caption: "The smallest moments are often the ones we carry forever.",
      date: "A beautiful memory",
      sticker: "🌸"
    },
    {
      photo: "WhatsApp Image 2026-07-24 at 10.57.50 PM (2).jpeg",
      caption: "And every new day becomes a beautiful page waiting to be written.",
      date: "Another chapter",
      sticker: "🦋"
    },
    {
      photo: "WhatsApp Image 2026-07-24 at 10.57.51 PM (1).jpeg",
      caption: "Some people make the world more beautiful just by being in it.",
      date: "Always remembered",
      sticker: "💫"
    }
  ],

  /* ── Color Palette (CSS custom properties) ────── */
  colors: {
    pink:       "#f9a8d4",
    lavender:   "#c4b5fd",
    cream:      "#fef3c7",
    warmBeige:  "#fde68a",
    peach:      "#fed7aa",
    roseGold:   "#f472b6",
    babyBlue:   "#93c5fd",
    softPurple: "#a78bfa",
    white:      "#fffbf5",
    dark:       "#1e1b2e"
  }
};
