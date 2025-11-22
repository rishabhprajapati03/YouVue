export const numberAdjust = (num) => {
  if (num >= 1000000)
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  return num;
};

export const formatTime = (dateStr) => {
  const now = Date.now();
  const time = new Date(dateStr).getTime();
  const diff = Math.floor((now - time) / 1000); // seconds

  if (diff < 60) return `${diff} seconds`;
  if (diff < 3600) return `${Math.floor(diff / 60)} minutes`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hours`;
  if (diff < 2592000) return `${Math.floor(diff / 86400)} days`;
  if (diff < 31536000) return `${Math.floor(diff / 2592000)} months`;
  return `${Math.floor(diff / 31536000)} years`;
};

export const formatDuration = (iso) => {
  const match = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);

  const h = match[1] ? String(match[1]).padStart(2, "0") : "00";
  const m = match[2] ? String(match[2]).padStart(2, "0") : "00";
  const s = match[3] ? String(match[3]).padStart(2, "0") : "00";

  return `${h}:${m}:${s}`;
};

// Source - https://stackoverflow.com/q/54708626
// Posted by EMILO, modified by community. See post 'Timeline' for change history
// Retrieved 2025-11-21, License - CC BY-SA 4.0

const nameList = [
  "Time",
  "Past",
  "Future",
  "Dev",
  "Fly",
  "Flying",
  "Soar",
  "Soaring",
  "Power",
  "Falling",
  "Fall",
  "Jump",
  "Cliff",
  "Mountain",
  "Rend",
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Gold",
  "Demon",
  "Demonic",
  "Panda",
  "Cat",
  "Kitty",
  "Kitten",
  "Zero",
  "Memory",
  "Trooper",
  "XX",
  "Bandit",
  "Fear",
  "Light",
  "Glow",
  "Tread",
  "Deep",
  "Deeper",
  "Deepest",
  "Mine",
  "Your",
  "Worst",
  "Enemy",
  "Hostile",
  "Force",
  "Video",
  "Game",
  "Donkey",
  "Mule",
  "Colt",
  "Cult",
  "Cultist",
  "Magnum",
  "Gun",
  "Assault",
  "Recon",
  "Trap",
  "Trapper",
  "Redeem",
  "Code",
  "Script",
  "Writer",
  "Near",
  "Close",
  "Open",
  "Cube",
  "Circle",
  "Geo",
  "Genome",
  "Germ",
  "Spaz",
  "Shot",
  "Echo",
  "Beta",
  "Alpha",
  "Gamma",
  "Omega",
  "Seal",
  "Squid",
  "Money",
  "Cash",
  "Lord",
  "King",
  "Duke",
  "Rest",
  "Fire",
  "Flame",
  "Morrow",
  "Break",
  "Breaker",
  "Numb",
  "Ice",
  "Cold",
  "Rotten",
  "Sick",
  "Sickly",
  "Janitor",
  "Camel",
  "Rooster",
  "Sand",
  "Desert",
  "Dessert",
  "Hurdle",
  "Racer",
  "Eraser",
  "Erase",
  "Big",
  "Small",
  "Short",
  "Tall",
  "Sith",
  "Bounty",
  "Hunter",
  "Cracked",
  "Broken",
  "Sad",
  "Happy",
  "Joy",
  "Joyful",
  "Crimson",
  "Destiny",
  "Deceit",
  "Lies",
  "Lie",
  "Honest",
  "Destined",
  "Bloxxer",
  "Hawk",
  "Eagle",
  "Hawker",
  "Walker",
  "Zombie",
  "Sarge",
  "Capt",
  "Captain",
  "Punch",
  "One",
  "Two",
  "Uno",
  "Slice",
  "Slash",
  "Melt",
  "Melted",
  "Melting",
  "Fell",
  "Wolf",
  "Hound",
  "Legacy",
  "Sharp",
  "Dead",
  "Mew",
  "Chuckle",
  "Bubba",
  "Bubble",
  "Sandwich",
  "Smasher",
  "Extreme",
  "Multi",
  "Universe",
  "Ultimate",
  "Death",
  "Ready",
  "Monkey",
  "Elevator",
  "Wrench",
  "Grease",
  "Head",
  "Theme",
  "Grand",
  "Cool",
  "Kid",
  "Boy",
  "Girl",
  "Vortex",
  "Paradox",
];
export const generateRandomName = () => {
  return nameList[Math.floor(Math.random() * nameList.length)];
};




const comments = [
  "Bro this video deserved way more views 😭🔥",
  "You explained it better than the official docs.",
  "I don’t know why this was in my recommendations at 3AM but I’m not complaining.",
  "The editing is clean, keep posting.",
  "Man, I learned more in 5 minutes than in a whole college lecture.",
  "Why does this video feel illegal to watch for free?",
  "The algorithm finally did something right.",
  "Respect for keeping it simple and not wasting our time.",
  "This guy needs more subscribers, seriously.",
  "Came for 1 min, ended up watching the whole thing.",
  "The delivery is smooth, no cringe, just value.",
  "Finally someone who explains without stretching the video to 10 minutes.",
  "This video hit different.",
  "Underrated channel. Subscribed immediately.",
  "Your consistency is insane, keep grinding.",
  "This is exactly what I needed today.",
  "Bro went straight to the point. I love it.",
  "Quality content. No BS.",
  "I’ve been coding for 3 years and still learned something new.",
  "Legend uploaded, so I had to watch."
];

export const generateRandomText = () => {
  return comments[Math.floor(Math.random() * comments.length)];
};