
const angelNumbers = [
  {
    number: "000",
    title: "The Hollow Light",
    meaning: "In the silence before the dawn, everything is empty — a sacred pause, a blank canvas waiting for your soul’s brush. Angel 000 calls you to release endings and embrace infinite beginnings. Let go of what no longer serves you, for you are the eternal cycle, the quiet light that is always ready to shine anew.",
    keywords: "rebirth, reset, nothingness",
    vibe: "white candles flickering, smooth stone floors, fresh linen, breath misting glass",
    message: "Begin again — not from failure, but from transformation."
  },
  {
    number: "111",
    title: "The First Light",
    meaning: "You are the first spark of dawn, the silent whisper before the world wakes. Angel 111 invites you to trust your inner voice, to weave your dreams into reality with gentle intention. Your light is clear, your path unfolding with quiet grace.",
    keywords: "new beginnings, manifestation, clarity",
    vibe: "soft sunrise hues, gentle breeze, crisp pages, hopeful sighs",
    message: "Your thoughts are seeds. Plant them with care."
  },
  {
    number: "222",
    title: "The Gentle Mirror",
    meaning: "Like moonlight reflecting on still water, Angel 222 mirrors your tender heart. You hold the space for balance, for patience, and for silent strength. This number reminds you: softness is power, and harmony is found in quiet moments.",
    keywords: "harmony, patience, intuition",
    vibe: "twilight gardens, lace curtains, warm tea steam, whispered lullabies",
    message: "In your calm, the world finds its rhythm."
  },
  {
    number: "333",
    title: "The Triad of Light",
    meaning: "Surrounded by a triad of light, you are cradled by unseen forces. Angel 333 brings messages of encouragement — your spirit is growing, your path illuminated by sacred support. Trust the process, trust yourself.",
    keywords: "support, growth, encouragement",
    vibe: "golden hour glow, cathedral shadows, soft prayers, flickering candles",
    message: "You are never alone. Light surrounds you."
  },
  {
    number: "444",
    title: "The Steadfast Guardian",
    meaning: "Like ancient oaks standing firm through storms, Angel 444 guards your foundation. This number whispers strength and resilience — hold steady, for your roots run deep and your journey is sure.",
    keywords: "stability, protection, resilience",
    vibe: "mossy stones, hearth fires, earth’s embrace, steady heartbeats",
    message: "Stand firm — your strength is silent but unshakable."
  },
  {
    number: "555",
    title: "The Wild Shift",
    meaning: "Like a sudden breeze stirring autumn leaves, Angel 555 calls you to embrace transformation. The wild unknown beckons, urging you to release control and dance with life’s ever-changing rhythm. Freedom grows in surrender.",
    keywords: "change, freedom, adventure",
    vibe: "rustling leaves, open roads, twilight skies, whispered laughter",
    message: "Let go, trust the flow, and find your wings."
  },
  {
    number: "666",
    title: "The Balanced Flame",
    meaning: "Between shadows and light, Angel 666 invites you to nurture your soul with gentle balance. It’s not about perfection, but about embracing all parts of yourself — the wild and the calm, the earthly and the ethereal.",
    keywords: "balance, nurturing, acceptance",
    vibe: "warm hearth, twilight glow, soft fabrics, quiet moments",
    message: "Within balance, your true power blooms."
  },
  {
    number: "777",
    title: "The Lucky Mystic",
    meaning: "Blessed by the universe, Angel 777 shines as a beacon of luck and spiritual grace. Your journey is marked by moments of magic and synchronicity — trust the signs and welcome the blessings waiting in the quiet spaces.",
    keywords: "luck, spirituality, blessings",
    vibe: "sparkling stars, gentle winds, golden light, soft laughter",
    message: "Fortune favors the soul awake."
  },
  {
    number: "888",
    title: "The Infinite Flow",
    meaning: "The endless river of abundance flows through you. Angel 888 reminds you that giving and receiving are part of life’s sacred dance. Trust that prosperity moves in cycles, and your harvest is near.",
    keywords: "abundance, flow, prosperity",
    vibe: "flowing water, golden sunlight, open horizons, gentle breezes",
    message: "Abundance is your natural state. Receive it freely."
  },
  {
    number: "999",
    title: "The Completion Gate",
    meaning: "The closing of a chapter brings the promise of new beginnings. Angel 999 calls you to finish old cycles with grace and prepare for fresh starts. Your heart is ready to release and rise beyond, shining with wisdom earned through experience.",
    keywords: "completion, closure, transformation",
    vibe: "twilight skies, falling leaves, soft earth, quiet exhale",
    message: "Endings open the door to your next journey."
  }
];

// Fungsi untuk save hasil sebagai gambar
function saveResultAsImage() {
  const resultSection = document.getElementById('result');
  html2canvas(resultSection).then(canvas => {
    const link = document.createElement('a');
    link.download = 'angel-number-result.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  });
}

document.getElementById('angelForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const rawUsername = document.getElementById('username').value.trim();
  if (!rawUsername) return;

  const username = rawUsername.replace(/^@/, '');
  const key = `angel-${username}`;

  const savedAngel = localStorage.getItem(key);
  let randomAngel;

  if (savedAngel) {
    randomAngel = JSON.parse(savedAngel);
  } else {
    randomAngel = angelNumbers[Math.floor(Math.random() * angelNumbers.length)];
    localStorage.setItem(key, JSON.stringify(randomAngel));
  }

  // Tampilkan hasil
  document.getElementById('userGreeting').textContent = `Hey, @${username}`;
  document.getElementById('angelNumber').textContent = randomAngel.number;
  document.getElementById('angelTitle').textContent = randomAngel.title;
  document.getElementById('angelMeaning').textContent = randomAngel.meaning;
  document.getElementById('angelKeywords').textContent = randomAngel.keywords;
  document.getElementById('angelVibe').textContent = randomAngel.vibe;
  document.getElementById('angelMessage').textContent = randomAngel.message;

  const resultSection = document.getElementById('result');
  resultSection.classList.remove('hidden');
  resultSection.classList.add('show');

  // Tampilkan tombol save image
  document.getElementById('saveBtn').style.display = 'inline-block';
});

document.getElementById('saveBtn').addEventListener('click', saveResultAsImage);
