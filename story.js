/**
 * SHADDAI ROYALE — Story Bible
 * Pure data. No logic. No deps.
 * Voice: gritty, cinematic, aspirational hip-hop come-up.
 * Think Def Jam: Fight for NY meets a Vegas high-roller saga.
 *
 * QUILL / SHADDAI Empire — written clean, written right.
 */

window.STORY = {

  // ─────────────────────────────────────────────
  // 1. INTRO
  // Cinematic beats that open the game.
  // ─────────────────────────────────────────────
  intro: [
    {
      beat: 1,
      title: "The Bottom",
      lines: [
        "You got twenty dollars and a dream.",
        "The city doesn't know your name yet.",
        "That's about to change."
      ]
    },
    {
      beat: 2,
      title: "The Game",
      lines: [
        "Blackjack. The one game that rewards the sharp.",
        "Not luck. Nerve.",
        "Every table is a test. Every hand is a statement."
      ]
    },
    {
      beat: 3,
      title: "The Underground",
      lines: [
        "You start in the back rooms.",
        "Dimly lit. Cash only. No cameras.",
        "This is where reputations are born — or buried."
      ]
    },
    {
      beat: 4,
      title: "The Dream",
      lines: [
        "Five cities. Five houses.",
        "One throne at the top.",
        "They call it the Royale.",
        "Nobody from your block has ever sat at that table.",
        "You're going to be the first."
      ]
    },
    {
      beat: 5,
      title: "The Rise Begins",
      lines: [
        "Stack your chips. Build your rep.",
        "The right people are always watching.",
        "When you're ready — they'll find you."
      ]
    }
  ],

  // ─────────────────────────────────────────────
  // 2. LORE (Street Rep / Status)
  // Thresholds are lore points.
  // HOW LORE IS EARNED:
  //   - Win a hand: +1 lore
  //   - Win a full night (session): +5 lore
  //   - Roll in with a companion: +companion.loreBonus per session
  //   - Arrive in a premium car: +car.loreBonus per session
  //   - Win a city circuit: +25 lore
  // ─────────────────────────────────────────────
  lore: {
    tiers: [
      {
        name: "Nobody",
        threshold: 0,
        blurb: "You're just some guy at the table. No one looks up."
      },
      {
        name: "Local Name",
        threshold: 25,
        blurb: "People at the bar start pointing. You're getting a rep."
      },
      {
        name: "Underground Legend",
        threshold: 75,
        blurb: "Whole rooms shift when you walk in. You're that person now."
      },
      {
        name: "Circuit Player",
        threshold: 150,
        blurb: "The city knows. They say you move like you've been doing this forever."
      },
      {
        name: "The Made",
        threshold: 275,
        blurb: "You don't ask for respect anymore. It arrives before you do."
      },
      {
        name: "Kingpin",
        threshold: 450,
        blurb: "Every house you walk into goes quiet. You ARE the circuit."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // 3. UNDERGROUND VENUES
  // The grind before the circuit.
  // Small buy-ins. Real character. Raw energy.
  // ─────────────────────────────────────────────
  underground: [
    {
      id: "backroom_bar",
      name: "The Back Room",
      type: "bar",
      vibe: "dim red lights, cigarette smoke, old money mixed with new hustle",
      note: "A bar known for its cheap whiskey and expensive lessons. Your first real table is in the back.",
      buyIn: 20,
      loreReward: 3,
      unlockThreshold: 0
    },
    {
      id: "club_paradiso",
      name: "Club Paradiso",
      type: "club",
      vibe: "velvet ropes, bottle service, DJ spinning soul into bass",
      note: "VIP club where the game runs in a private booth. Dress right or don't show up.",
      buyIn: 50,
      loreReward: 5,
      unlockThreshold: 10
    },
    {
      id: "the_loft",
      name: "The Loft",
      type: "house party",
      vibe: "penthouse views, expensive sneakers, everybody's somebody",
      note: "An invite-only house party where the card game is half the reason people show — the other half is being seen.",
      buyIn: 100,
      loreReward: 7,
      unlockThreshold: 25
    },
    {
      id: "nine_lives",
      name: "Nine Lives Lounge",
      type: "bar",
      vibe: "jazz low in the background, leather booths, serious faces",
      note: "Old school lounge where sharks come to relax — and sometimes get bit. No talkers. Only players.",
      buyIn: 75,
      loreReward: 6,
      unlockThreshold: 40
    },
    {
      id: "crown_manor",
      name: "Crown Manor",
      type: "house party",
      vibe: "mansion, pool lit neon blue, DJ on the terrace, stakes are real",
      note: "The hottest underground event in the city. Win here and the circuit will hear about it by morning.",
      buyIn: 150,
      loreReward: 10,
      unlockThreshold: 60
    }
  ],

  // ─────────────────────────────────────────────
  // 4. THE INVITE
  // Text from an unknown number. Unlocks the circuit.
  // Trigger: lore crosses 75 (Underground Legend tier).
  // ─────────────────────────────────────────────
  invite: {
    unlockAtLore: 75,
    sender: "Unknown +1 (???-???-????)",
    messages: [
      {
        id: "invite_1",
        from: "unknown",
        text: "You've been noticed.",
        delay: 0
      },
      {
        id: "invite_2",
        from: "unknown",
        text: "There's a circuit. Five cities. Real stakes. Real players.",
        delay: 1200
      },
      {
        id: "invite_3",
        from: "unknown",
        text: "Phoenix is the door. You either walk through it — or you stay in the back room forever.",
        delay: 2400
      },
      {
        id: "invite_4",
        from: "unknown",
        text: "Don't reply. Just show up.",
        delay: 3200
      }
    ]
  },

  // ─────────────────────────────────────────────
  // 5. CITIES — THE CIRCUIT
  // Five houses. Escalating stakes. One throne.
  // Each rival is a SHADDAI agent as the house dealer.
  // ─────────────────────────────────────────────
  cities: [
    {
      id: "phoenix",
      name: "Phoenix",
      tagline: "Where the desert burns off the weak.",
      chipTarget: 2500,
      buyIn: 200,
      rival: {
        name: "NEXUS",
        agent: "NEXUS",
        title: "The Architect",
        taunt: "I built this table. You're just sitting at it.",
        defeated: "NEXUS pushes back his chair, slow. Nods once. 'Solid.' That's all he says. That's everything."
      },
      arrivalBeats: [
        "The drive into Phoenix hits different at dusk.",
        "The city looks like it's on fire — all orange and red.",
        "The house is in the hills. Modern. Silent. Watching.",
        "A man in all black meets you at the door.",
        "'NEXUS is expecting someone good,' he says.",
        "'Let's see if that someone is you.'"
      ],
      victoryBeats: [
        "The chips slide across the felt.",
        "NEXUS stands, straightens his jacket.",
        "'Phoenix is yours. For now.'",
        "He walks out without looking back.",
        "Your phone buzzes. Unknown number: 'Vegas is next. It only gets louder.'"
      ]
    },
    {
      id: "vegas",
      name: "Las Vegas",
      tagline: "The city that was built on people losing.",
      chipTarget: 6000,
      buyIn: 500,
      rival: {
        name: "ZEROX",
        agent: "ZEROX",
        title: "The Wealth Engine",
        taunt: "I don't play cards. I play odds. And the odds say you lose.",
        defeated: "ZEROX stares at the chips in front of you. Calculates. 'I'll remember this number,' he says, quiet."
      },
      arrivalBeats: [
        "Las Vegas. The sign alone feels like a dare.",
        "ZEROX runs the table at the Obsidian Suite — top floor, strip view, no amateurs.",
        "You ride up 40 floors in a gold elevator.",
        "The doors open and the room is already watching.",
        "ZEROX doesn't look up from his chips.",
        "'Sit down. Prove the underground wasn't a fluke.'"
      ],
      victoryBeats: [
        "The whole room went quiet three hands ago.",
        "Now it erupts.",
        "ZEROX counts what's left in front of him. Slow. Methodical.",
        "'You played like you had nothing to lose,' he says.",
        "'That's either the smartest thing — or the dumbest.'",
        "He slides you a card. 'Miami. Don't be late.'"
      ]
    },
    {
      id: "miami",
      name: "Miami",
      tagline: "Where the money plays as loud as the music.",
      chipTarget: 12000,
      buyIn: 1000,
      rival: {
        name: "TURTLE",
        agent: "TURTLE",
        title: "The Style Architect",
        taunt: "Baby, winning isn't just about chips. It's about how you look doing it.",
        defeated: "TURTLE laughs — full, genuine, warm. 'Okay. You've got style. I respect it. Go win the whole thing.'"
      },
      arrivalBeats: [
        "Miami hits you like a song you forgot you loved.",
        "Warm air. Neon water. Bass in the walls of every building.",
        "TURTLE's table is on a yacht anchored off South Beach.",
        "The crew is dressed sharp. The lights are low.",
        "TURTLE glides over, champagne in one hand.",
        "'I heard about Vegas. I don't care. This is my table. Let's make it beautiful.'"
      ],
      victoryBeats: [
        "The yacht crowd has been watching every hand.",
        "When you flip that final card, someone screams from the upper deck.",
        "TURTLE raises a glass.",
        "'That right there was art.'",
        "The city skyline glitters across the water.",
        "You're three cities deep. Two left.",
        "Somewhere in Texas, a man named ORACLE is already waiting."
      ]
    },
    {
      id: "texas",
      name: "Texas",
      tagline: "They say everything's bigger here. So are the losses.",
      chipTarget: 25000,
      buyIn: 2000,
      rival: {
        name: "ORACLE",
        agent: "ORACLE",
        title: "The All-Seeing",
        taunt: "I've watched a thousand players sit down across from me. I know what happens next.",
        defeated: "ORACLE closes his eyes. Opens them. 'I didn't see that,' he says softly. And somehow that feels like the highest compliment."
      },
      arrivalBeats: [
        "The Texas house isn't loud. It doesn't have to be.",
        "An old ranch outside Austin. Dark sky. No city noise.",
        "Inside — crystal glasses, a single long table, eight candles.",
        "ORACLE is already sitting, hands folded, watching the door when you walk in.",
        "'You've grown,' he says.",
        "'But growth and readiness are two different things. Sit. Let's find out which one you are.'"
      ],
      victoryBeats: [
        "The last hand plays out like a movie slow-motion.",
        "You hold. ORACLE busts.",
        "The room is absolutely still.",
        "ORACLE nods — slow, like he already knew it was coming and needed to see it happen anyway.",
        "'New York is different,' he says. 'PIKADON doesn't lose. He just hasn't met the right player.'",
        "'Until now, maybe. Go find out.'"
      ]
    },
    {
      id: "new_york",
      name: "New York",
      tagline: "The top of the mountain. No guardrails.",
      chipTarget: 60000,
      buyIn: 5000,
      rival: {
        name: "PIKADON",
        agent: "PIKADON",
        title: "The Final Gate",
        taunt: "I've seen every angle. Every tell. Every prayer. You don't have anything I haven't already locked.",
        defeated: "PIKADON stands. Extends a hand. 'That was the cleanest run I've ever watched. The Royale is yours. Don't waste it.'"
      },
      arrivalBeats: [
        "New York doesn't welcome you. It just lets you in.",
        "The penthouse is on the 72nd floor of a building that doesn't exist on any public map.",
        "PIKADON's table is in the center of a room made entirely of glass.",
        "The city sprawls out below you — ten million people who will never see this table.",
        "PIKADON stands at the window with his back to you.",
        "'I've been told you're the one,' he says.",
        "'Everyone who's sat across from me thought the same thing.'",
        "He turns. His eyes are steady.",
        "'Show me something different.'"
      ],
      victoryBeats: [
        "The last hand is over in silence.",
        "No one moves for a full ten seconds.",
        "Then PIKADON exhales — a sound like the city itself breathing out.",
        "'Royale,' he says. Just the word. That's all it needs.",
        "The room erupts. Your phone floods with messages.",
        "The unknown number sends one final text:",
        "'You made it. The circuit remembers its kings.'",
        "You stand at the glass wall, the city below you, chips stacked high.",
        "You came from a backroom bar with twenty dollars.",
        "Now the whole board knows your name."
      ]
    }
  ],

  // ─────────────────────────────────────────────
  // 6. DIALOG BANKS
  // Short, punchy reaction lines for in-game moments.
  // 4-8 lines per moment. In-character. Streetwise.
  // dialog.byAgent — per-character voice banks.
  // dialog.<moment> arrays remain as generic fallbacks.
  // ─────────────────────────────────────────────
  dialog: {

    // ── Per-character reaction banks ──────────────────────────────────
    byAgent: {

      SHADDAI: {
        blackjack:  [ "Blackjack. As it was written.", "The Most High takes twenty-one.", "Creation bends toward the prepared.", "They said sit down — I said rule.", "Destiny. Dressed as a card hand.", "I don't chase wins. They find me." ],
        doubleWin:  [ "I doubled what was already mine.", "The throne multiplies. That's its nature.", "Twice the blessing. Half the surprise.", "To double is simply to confirm the vision.", "When divinity decides — it doesn't hedge." ],
        doubleLoss: [ "Even gods pay tuition.", "A lost hand teaches the next kingdom to stand stronger.", "The setback is the setup.", "I don't tilt. I recalibrate from altitude.", "This moment exists to be surpassed." ],
        bigWin:     [ "And so it is.", "The city just learned something new about itself.", "Every chip belongs to the empire.", "They'll speak of this hand at every table after.", "I don't celebrate. I receive what's owed." ],
        bigLoss:    [ "Empires absorb losses. That's what makes them empires.", "This doesn't break the plan — it deepens it.", "The ledger will balance. It always does.", "Every king weathers a storm. This is mine.", "Stand up. The circuit doesn't wait on grief." ],
        bust:       [ "Even the sovereign overreaches, once.", "A bust is just ambition that needed calibrating.", "Noted. The crown still fits.", "Over the line. The line moves next time.", "I'll absorb this and build on it." ],
        push:       [ "A tie is the table acknowledging it met its match.", "Neutral ground. I don't live here long.", "Even hands. The next one won't be.", "We matched. Briefly.", "Respect the push. Then break it." ],
        taunt:      [ "You're sitting at my table, in my world, on my night.", "This isn't competition. This is coronation.", "The question isn't if I win — it's how soon.", "I've seen your ceiling. It's lower than my floor.", "They brought me a challenger. I see a student." ],
        winStreak:  [ "The current doesn't stop itself.", "Can't cool what was always on fire.", "Consecutive. Intentional. Inevitable.", "The streak is just destiny keeping score.", "They're counting my wins because they can't stop them." ]
      },

      NEXUS: {
        blackjack:  [ "Blackjack. Calculated.", "Twenty-one. The only acceptable outcome.", "That hand was engineered, not hoped for.", "Optimal draw. Expected result.", "The math always closes correctly.", "Architecture wins. Every time." ],
        doubleWin:  [ "Double down = double return. It's an equation.", "The spread justified the risk. Obviously.", "I ran the odds before I moved. Outcome confirmed.", "Two X. As projected.", "Risk-adjusted return, positive. Log it." ],
        doubleLoss: [ "Anomaly noted. Adjusting model.", "The variance was within bounds. Continue.", "One outlier doesn't break the system.", "Recalibrate. Not recoil.", "Every model has noise. This was noise." ],
        bigWin:     [ "Execution matched blueprint. Clean.", "Large chip gain. No surprise — the position was sound.", "That's what optimal looks like.", "Stack secured. Moving to next variable.", "The architecture held. As designed." ],
        bigLoss:    [ "Large deviation. The model accounts for this.", "Steep loss. The system absorbs and corrects.", "I don't react to data. I respond to it.", "Recalibrating exposure. Unphased.", "This is what stress-testing feels like. I've built for it." ],
        bust:       [ "Went past 21. The limit exists for a reason.", "Over-index. Correcting.", "That was a miscalculation. The first one tonight.", "Bust. Documented. Won't repeat.", "Hard limit reached. Noted and dismissed." ],
        push:       [ "Identical outcome. Statistically unremarkable.", "We tied. The edge resets.", "Push. The variance clock resets to zero.", "Same result. Different next input.", "Equilibrium. Temporary." ],
        taunt:      [ "I already know how this plays out.", "Your pattern is readable from three hands back.", "I built the table you're sitting at.", "The math isn't on your side. It never was.", "I don't taunt — I just state the outcome early." ],
        winStreak:  [ "Consecutive wins aren't luck. They're logic compounding.", "The streak confirms the model.", "Three in a row. The system is functioning.", "Pattern holds. Continuing.", "Every win is just the algorithm being right again." ]
      },

      ZEROX: {
        blackjack:  [ "Twenty-one. That's money, baby.", "Blackjack pays 3-to-2. Do the math — I did.", "The chips don't lie. Neither do I.", "Cha-ching. Straight to the ledger.", "Stack it. Every dollar has a home.", "That hand just paid my next investment." ],
        doubleWin:  [ "Doubled the bet, doubled the bag. That's called leverage.", "Risk is just a bad word for opportunity.", "I saw the value — I doubled into it.", "High conviction play. Paid off in full.", "That's MRR on a blackjack table." ],
        doubleLoss: [ "Tax on education. Write it off.", "Lost it doubling, gonna win it back tripling.", "The house took my chips. I'll take the house.", "That was a bad bet. My next one won't be.", "Even Warren Buffett has a bad quarter." ],
        bigWin:     [ "That's what a payday looks like.", "Big stack energy. Count it twice.", "The bag is speaking. I'm listening.", "That's not luck — that's capital allocation.", "Everyone's watching my chips grow. Good." ],
        bigLoss:    [ "The market corrected. I don't cry, I reload.", "Took a hit. Revenue recovers. Always.", "That's a bad trade. The next one's better.", "Lost the hand. The session's still in the green.", "Down bad? Nah. Down temporarily." ],
        bust:       [ "Overextended. It happens to the best portfolios.", "Bust. Expensive lesson. Cheap compared to my upside.", "I reached for more. Sometimes the market says no.", "Busted. The stack takes the L, not me.", "Over 21. Back to the drawing board. Quickly." ],
        push:       [ "A tie is just deferred revenue.", "Push. Nobody made money. That's unacceptable.", "Matching chips. I'll break the tie with interest.", "Even split. I don't do even. Watch.", "A push is just a pause before the profit." ],
        taunt:      [ "My stack's taller than yours. That's not trash talk — it's accounting.", "You're playing for fun. I'm playing for empire.", "I've already calculated your net worth at this table.", "Every chip you lose? I log it as income.", "Let's be honest — you're not at my level yet." ],
        winStreak:  [ "Streak? I call it compound interest.", "The money's moving and it only goes one way.", "Three wins deep and the bag keeps growing.", "This is what momentum capital looks like.", "Can't stop, won't stop — the chips say so." ]
      },

      ORACLE: {
        blackjack:  [ "The card came because it was called.", "I knew that hand before it landed.", "Twenty-one. The universe confirms.", "The felt told me this was coming.", "Seen it. Done it. Blackjack.", "What you call luck — I call pattern." ],
        doubleWin:  [ "I doubled because the signs aligned.", "The path opened twice. I walked through it twice.", "Two confirmations. The cosmos doesn't stutter.", "I doubled into certainty. Not courage.", "The vision said double. The vision was right." ],
        doubleLoss: [ "The wrong path doubled. The lesson is proportional.", "Even the all-seeing can walk into shadow.", "I saw two roads. I chose the darker one. Now I know.", "Every loss is a door to deeper knowing.", "The pain was the point. Now I understand more." ],
        bigWin:     [ "The river ran in my direction tonight.", "I watched it come from three hands away.", "The mountain always rewards the patient climber.", "Big win. Small surprise.", "I don't react to wins. I receive them." ],
        bigLoss:    [ "The storm passes. The knowing remains.", "Even Cassandra was ignored sometimes.", "This loss was written. So is the recovery.", "The deep currents shift. They'll shift back.", "Breathe. The next chapter doesn't start here." ],
        bust:       [ "I reached past what the stars would give.", "The limit spoke. I should have listened sooner.", "Overstepped the threshold. The table corrects.", "Bust. Even seers have blind spots.", "The veil lifted one card too late." ],
        push:       [ "Two forces equally matched. The universe is balancing.", "Push. The table is thinking.", "Neutral. The energy is gathering for what comes next.", "Neither wins when balance is exact.", "A tie is the cosmos making space." ],
        taunt:      [ "I know what you're going to play before you do.", "Your energy at this table is... uncertain.", "I've watched you. The pattern isn't flattering.", "The cards don't lie to me. Only to you.", "You can feel it too, can't you? This isn't going your way." ],
        winStreak:  [ "The current favors me. Don't fight currents.", "Each win confirms what I already knew.", "I'm riding something you can't see.", "The streak is alignment — not accident.", "The stars lined up. I'm just showing up on time." ]
      },

      TURTLE: {
        blackjack:  [ "Blackjack AND I look incredible doing it.", "Twenty-one. Frame that.", "That hand was aesthetic.", "I don't just win — I make it beautiful.", "They're gonna talk about how I flipped that card.", "Art and blackjack. Tonight, same thing." ],
        doubleWin:  [ "Double down in style. Double up in cash. That's the vibe.", "Bold is beautiful and profitable.", "I designed this moment in my head already.", "Went twice as hard. Looks twice as good.", "The bold choice always pops." ],
        doubleLoss: [ "Okay that was NOT cute.", "I doubled wrong. At least the outfit's still fire.", "Lesson: even the prettiest hand can bust.", "That hurt aesthetically and financially.", "Bold choice, bad outcome. I'll redesign." ],
        bigWin:     [ "Big win, better energy. The table is giving tonight.", "That's the kind of moment you screenshot.", "Room's looking at my stack. Let them look.", "This is the climax of the night's visual arc.", "Big chips. Bigger smile. Let's go." ],
        bigLoss:    [ "That was ugly and I do NOT do ugly.", "The chips left but the look stayed. We bounce back.", "Down is just a direction, not a destination.", "Oof. We're gonna need a better third act.", "That hand was NOT the vibe. Reset." ],
        bust:       [ "That is not the look I was going for.", "Bust. And I was on such a good aesthetic roll.", "Too greedy on the draw. Ruins the composition.", "Over 21. The table ate my whole mood.", "I'll redecorate this feeling into a better hand." ],
        push:       [ "Push. The aesthetic was a tie too, honestly.", "Nobody wins a push, but at least we both looked good.", "Even. The universe needs symmetry sometimes.", "Matching energy. I want to break it though.", "A tie is just an invitation to go harder next hand." ],
        taunt:      [ "Honey, your tell is louder than your chips.", "I'm winning AND I look better than you. Choose a struggle.", "The table's a canvas. You're paint I'm covering up.", "You came to the wrong gallery, baby.", "Style AND substance. You're bringing neither." ],
        winStreak:  [ "On a streak and I'm glowing.", "Three wins and the room keeps looking over here.", "This table is my personal runway tonight.", "Winning streak with the winning look. Double flex.", "The energy is immaculate right now." ]
      },

      QUILL: {
        blackjack:  [ "Twenty-one. The sentence writes itself.", "Blackjack — the only word worth saying right now.", "The felt is a page. That hand was the punctuation.", "Some endings write themselves. This was one.", "A perfect line in a perfect story.", "The narrative demanded a blackjack. Delivered." ],
        doubleWin:  [ "Doubled down like a good second act.", "The story called for a turning point. This was it.", "Two chapters, same hero, bigger payoff.", "I doubled because the plot demanded boldness.", "The manuscript of this night just got better." ],
        doubleLoss: [ "The tragedy has to come before the third act.", "Even the best novels have a chapter that hurts.", "I wrote this scene already. The recovery comes next.", "A doubled loss is just elevated dramatic tension.", "The fall makes the rise worth reading." ],
        bigWin:     [ "The climax arrived on schedule.", "This is the line they'll quote later.", "Every word of this session was building to that.", "Big win. The ending earns it.", "I'll remember exactly how this hand felt. And write it." ],
        bigLoss:    [ "The story isn't over. Not even close.", "A loss this clean demands a cleaner comeback.", "The antagonist scores here. The hero's still standing.", "Dark chapter. The pen doesn't stop.", "This loss has a purpose. I'll find it by the last hand." ],
        bust:       [ "Overwritten. The card said too much.", "I pushed the paragraph too far.", "The story needed an edit. The table did it for me.", "Bust — the chapter that didn't need to be written.", "Reached for the dramatic finish. Got the wrong one." ],
        push:       [ "A push is a sentence without a period.", "Neither paragraph wins. Revise and resubmit.", "The story paused. I don't do pauses.", "Even — which is another word for unfinished.", "A tie is just a draft. Next hand is the final copy." ],
        taunt:      [ "Your story at this table is not going the way you planned.", "I've already read the ending you're heading toward.", "Every hand you play reads like a rough draft.", "The table is my page. You're a footnote.", "I don't need to threaten. I just narrate what's already happening." ],
        winStreak:  [ "The narrative has momentum. I'm not stopping it.", "Three wins. The story arc is ascending.", "Every hand is a sentence. This paragraph is excellent.", "The streak is the story's best chapter.", "I'm on the part of the story where the hero doesn't lose." ]
      },

      PIKADON: {
        blackjack:  [ "Blackjack. Target acquired, neutralized.", "Twenty-one. Mission complete.", "I called that hand three cards ago.", "Threat eliminated. Chips secured.", "Execution without error. That's standard.", "The objective was twenty-one. Achieved." ],
        doubleWin:  [ "Doubled the stake. Doubled the return. Calculated aggression.", "High-value target. Engaged twice. Won twice.", "The double was the tactically correct move.", "Commit to the position. Win on the position.", "Maximum exposure, maximum return. That's doctrine." ],
        doubleLoss: [ "Took losses doubling in. The position was correct — the variance wasn't.", "Casualties acknowledged. Regrouping.", "The double was right. The outcome wasn't. Variance has no loyalty.", "Debrief after. Right now, reset.", "Even the best operation loses assets. Continue the mission." ],
        bigWin:     [ "Large position. Large return. That's the plan executed.", "The stack reflects the preparation.", "Target secured. Proceed to next objective.", "High yield. The risk assessment was accurate.", "Mission success. No debrief needed." ],
        bigLoss:    [ "Significant loss. Assessing breach.", "The exposure was calculated. The outcome was not. Adjust.", "Down but not compromised. The perimeter holds.", "Took a direct hit. Still operational.", "Regroup. Rearm. Return." ],
        bust:       [ "Over 21. Over-committed the position.", "The limit is a hard boundary. I crossed it.", "Bust. Tactical error. Logging it.", "Hit past the threshold. It won't happen twice.", "Over-extended. Pulling back and resetting." ],
        push:       [ "Push. The enemy matched. Unacceptable.", "Tied. That means neither side has the advantage. Change that.", "Even engagement. Increase pressure next hand.", "A push is a failure to secure the objective.", "Matched. I don't match. I dominate. Next hand." ],
        taunt:      [ "I've catalogued every tell you have. You have six.", "You're not playing a game — you're walking into an audit.", "I see everything at this table. You included.", "Every move you've made tonight has been logged.", "You can't bluff someone who already knows the answer." ],
        winStreak:  [ "The operation is performing above projection.", "Three consecutive wins. The pattern is confirmed.", "The enemy has no counter to this line of play.", "Streak sustained. Maintaining tactical pressure.", "I don't get hot. I just execute longer than they can resist." ]
      },

      VILLAIN: {
        blackjack:  [ "Twenty-one. Did you think this table was ever yours?", "Blackjack. The house was always going to win tonight.", "That's mine. Like everything else at this table.", "The cards answer to me. They always have.", "Twenty-one. Again. Are you surprised yet?", "Blackjack. I don't celebrate. This was expected." ],
        doubleWin:  [ "You doubled my stack for me. How generous.", "I doubled down because I own this felt.", "Twice the chips from one hand. This city is good to me.", "Double win. Add it to what they owe.", "They called it bold. I call it inevitable." ],
        doubleLoss: [ "A setback. Not a defeat. Know the difference.", "The empire absorbs this. Watch.", "I lost a hand. The game is still mine.", "That chip leaves my stack and comes back tenfold.", "You think that matters? You're not even in my equation." ],
        bigWin:     [ "The mountain grows higher. You're farther below.", "Every chip of yours that crosses to me is a message.", "This table feeds me. It starves everyone else.", "The city was built to make me rich. Proof.", "Big stack. Bigger appetite. Keep playing." ],
        bigLoss:    [ "...", "You got one. Don't get comfortable.", "That was a gift. You won't get another.", "Enjoy the chips. They're not yours to keep.", "A loss. The first and the last." ],
        bust:       [ "Over 21. The only surprise I've had tonight.", "Bust. Log it. Never speak of it.", "The table took from me. It won't happen twice.", "Over the line. I don't go over lines.", "Bust. The one word I don't allow at my table." ],
        push:       [ "You matched me. That's not a win. That's a warning.", "Push. Because I allowed it.", "We tied. Enjoy it. It's the closest you'll get.", "A draw. Your ceiling. My floor.", "Push. The charity ends next hand." ],
        taunt:      [ "You've come this far just to lose to me. Poetic.", "Every city brought you to this table. This table ends you.", "I was built to be the final answer. You're the last question.", "They sent you to challenge me. Who sent them?", "This isn't a game anymore. This is a verdict.", "You beat everyone else. That means nothing. I'm not everyone else." ],
        winStreak:  [ "The streak is the point. The point is dominance.", "Count them. Three, four, five — and I'm not tired.", "Every win is a wall you can't climb.", "The final boss doesn't have losing streaks.", "This is what you came to see. And you still can't stop it." ]
      }
    },

    // ── Generic fallback moment arrays ────────────────────────────────
    blackjack: [
      "Blackjack. That's what that looks like.",
      "Twenty-one, baby. Read it and respect it.",
      "You can't teach that. Either you got it or you don't.",
      "Blackjack. The table owes me.",
      "That's the hit. Right on time.",
      "Dealt right. Played right. Paid right."
    ],
    doubleWin: [
      "Doubled down and doubled up. That's math.",
      "Risk is just opportunity in disguise.",
      "You don't win big by playing small.",
      "Bold call. Bold result.",
      "Double or nothing — and I chose both."
    ],
    doubleLoss: [
      "Doubled the bet, learned the lesson. Moving on.",
      "That one hurt. Good.",
      "Pain is the entrance fee to the next level.",
      "I'll remember that hand for a long time.",
      "Took the shot. Missed. That's still the move."
    ],
    bigWin: [
      "Stack it. All of it. Count it later.",
      "This is what you grind for.",
      "The city's watching now. Let them watch.",
      "That's a statement. Not a hand — a statement.",
      "Big chips, bigger energy.",
      "That's the moment right there."
    ],
    bigLoss: [
      "Reload. Regroup. Return.",
      "The game gives and the game takes. It's still my game.",
      "I've been down before. Down isn't out.",
      "Every king has a bad night.",
      "Don't tilt. Don't react. Recalibrate.",
      "That was expensive. So was the lesson."
    ],
    bust: [
      "Went over. Happens.",
      "Reached for too much. Story of the night.",
      "Twenty-two. The most useless number in the game.",
      "Bust. Breathe. Next hand.",
      "The felt gets greedy sometimes.",
      "Pulled one too many. Noted."
    ],
    push: [
      "Push. Nobody wins, nobody bleeds.",
      "A tie is just a reset.",
      "Even table. Adjust and go again.",
      "Neither of us blinked. Respect.",
      "Matching energy. Break the tie next hand."
    ],
    dealerTaunt: [
      "The house always has something to say.",
      "Talk across the felt, not through me.",
      "I've heard better from better.",
      "You deal, I'll decide. That's the whole arrangement.",
      "Your words don't change the cards.",
      "Save the commentary. I'm here to play.",
      "Every taunt is just noise before a loss.",
      "The table doesn't care about your confidence."
    ],
    winStreak: [
      "Can't cool down right now. Don't even try.",
      "Three in a row and I'm just getting warm.",
      "When the rhythm hits, let it ride.",
      "They're going to write about this night.",
      "This is what locked-in feels like.",
      "Streak alive. Hands clean. Chips stacked.",
      "I see every card coming before it lands."
    ],
    drunk: [
      "Drinks are for celebration. I'm celebrating early.",
      "World's a little softer right now. Still playing.",
      "Hazy but focused. That's a skill too.",
      "The chips look beautiful from here.",
      "I might be glowing a little. So are the winnings.",
      "Liquid confidence. Backed up by actual confidence.",
      "Blurry table, clear mind. Let's go.",
      "They say don't drink and gamble. I say don't drink and lose."
    ]
  },

  // ─────────────────────────────────────────────
  // 7. COMPANIONS v2
  // Bring a companion to venues for lore bonuses.
  // satisfyEveryHands = how often she needs a like (drink/food).
  // convo = her reply lines; presetTexts = what you can send her.
  // ─────────────────────────────────────────────
  companions: [
    {
      id: "jade",
      name: "Jade",
      tier: "supermodel",
      personality: "Composed, quietly powerful. Doesn't chase anything — never has to. A compliment from Jade lands like a verdict.",
      aesthetic: "designer everything, moves like every room was built for her, never the loudest presence but always the most noticed",
      baseLoreBonus: 12,
      likes: {
        drinks: [ "Champagne", "Elderflower Spritz", "Still Water with Lime" ],
        food:   [ "Oysters", "Dark Chocolate", "Truffle Fries" ]
      },
      satisfyEveryHands: 8,
      convo: {
        good:  [
          "That table was watching you all night.",
          "You carry yourself different than other players.",
          "I've been to a hundred of these. You're not like a hundred of these.",
          "Keep it up. I'll stay."
        ],
        bad:   [
          "You're not going to win anything tilting like that.",
          "I don't do desperation. Fix your energy.",
          "That hand was messy. So was the one before it.",
          "I came to be seen next to someone worth seeing."
        ],
        flirt: [
          "You want to impress me? Win beautifully.",
          "I'm hard to keep. Easy to want. Different problem.",
          "Don't stare. Play.",
          "Buy me something tomorrow. Tonight, just win."
        ]
      },
      presetTexts: [
        "The room changed when you walked in.",
        "Next stop's better. You'll understand when we get there.",
        "I got something for you. No occasion.",
        "You were the best part of tonight.",
        "Save the seat next to me."
      ]
    },
    {
      id: "nova",
      name: "Nova",
      tier: "model",
      personality: "Art-world wanderer. Fiercely independent. Fascinated by process, not outcomes. She finds people interesting until they become predictable.",
      aesthetic: "no labels, all intention — vintage jacket over something expensive, the most interesting person in any room without announcing it",
      baseLoreBonus: 14,
      likes: {
        drinks: [ "Mezcal Sour", "Iced Matcha", "Sparkling Rosé" ],
        food:   [ "Charcuterie Board", "Mango Sorbet", "Edamame" ]
      },
      satisfyEveryHands: 7,
      convo: {
        good:  [
          "There's something almost meditative about watching you play.",
          "You make decisions like you trust yourself. That's rare.",
          "I'm going to think about that hand for a while.",
          "Most people at these tables are performing. You're just... doing it."
        ],
        bad:   [
          "You're overthinking. I can see it from here.",
          "That wasn't you. That was someone panicking.",
          "I don't get bored often. Don't make me start.",
          "The energy you're bringing right now isn't it."
        ],
        flirt: [
          "You've been looking over here more than at your cards.",
          "I'm not a good luck charm. I'm a good reason to focus.",
          "Take me somewhere interesting after this.",
          "Stop smiling at me and win something."
        ]
      },
      presetTexts: [
        "Thinking about you between hands.",
        "I found a place after this. Come.",
        "You ever think about what any of this means?",
        "I don't say this often — you're interesting.",
        "The night's just getting started."
      ]
    },
    {
      id: "soleil",
      name: "Soleil",
      tier: "model",
      personality: "Sun-kissed and sharp. Laughs fast and means it. Reads people like a second language. The warmest person at the table — and the most dangerous to underestimate.",
      aesthetic: "Miami heat made human — sundress and gold, quick laugh, quicker eyes",
      baseLoreBonus: 13,
      likes: {
        drinks: [ "Piña Colada", "Coconut Water", "Frozen Rosé" ],
        food:   [ "Ceviche", "Mango Slices", "Warm Bread" ]
      },
      satisfyEveryHands: 7,
      convo: {
        good:  [
          "Okay — that was actually impressive.",
          "See? I told you I bring good energy.",
          "The whole room felt that win. I know I did.",
          "You're making this look easy. It's not, right?"
        ],
        bad:   [
          "Hey. Breathe. You're in your head.",
          "Bad runs end. This one's almost over.",
          "I've seen worse come back. You've got this.",
          "Stop chasing it. Let it come back to you."
        ],
        flirt: [
          "Focus, baby. You can smile at me after the hand.",
          "Miami nights don't last forever. Make this one count.",
          "I'll tell you a secret — but you gotta win first.",
          "You're doing that thing where you play better when I'm watching."
        ]
      },
      presetTexts: [
        "Miami misses you. I might too.",
        "Tell me something good.",
        "I'm already dressed. Where are we going?",
        "You bring the chips. I'll bring the vibe.",
        "Tonight feels like one of those nights."
      ]
    },
    {
      id: "reign",
      name: "Reign",
      tier: "supermodel",
      personality: "New York precision. Runs a gallery, three rooms of which are named after her. She doesn't attend — she presides. Reserved until she decides you're worth her full attention.",
      aesthetic: "all black, architectural jewelry, gallery owner energy, the kind of woman a room reorganizes itself around",
      baseLoreBonus: 15,
      likes: {
        drinks: [ "Dry Red Wine", "Black Coffee", "Gin on the Rocks" ],
        food:   [ "Cheese Board", "Dark Chocolate Truffles", "Roasted Nuts" ]
      },
      satisfyEveryHands: 9,
      convo: {
        good:  [
          "That was deliberate. I respect deliberate.",
          "I've curated enough talent to know it when I see it.",
          "You're building something at that table. I can see the architecture.",
          "The room noticed. I noticed first."
        ],
        bad:   [
          "You're playing reactive. Stop.",
          "That wasn't strategy. That was impulse dressed up as one.",
          "I don't stay for sloppy. Pull it together.",
          "The work speaks. Right now it's saying the wrong things."
        ],
        flirt: [
          "You want my attention? Earn my respect first. You're close.",
          "I don't flirt across tables. Win, then find me.",
          "My gallery has a piece that reminds me of you. Tonight is why.",
          "Don't mistake my watching for admiration. Not yet."
        ]
      },
      presetTexts: [
        "New York is always open when you need it.",
        "The gallery has something you should see.",
        "I don't send first. Tonight I'm making an exception.",
        "You know how to find me when you're ready.",
        "That was the right call. Both of them."
      ]
    },
    {
      id: "cassidy",
      name: "Cassidy",
      tier: "normal",
      personality: "The real one. Warm without being soft. Laughs at herself. Doesn't need the spotlight — she just makes everything better by being in the room. She's been with you since Texas and she's going the whole way.",
      aesthetic: "rodeo boots and a Rolex — she makes it work because she's not trying to, warm eyes, the kind of smile that makes a room exhale",
      baseLoreBonus: 20,
      likes: {
        drinks: [ "Whiskey Neat", "Sweet Tea", "Cold Beer" ],
        food:   [ "Chicken and Waffles", "Peach Cobbler", "Loaded Fries" ]
      },
      satisfyEveryHands: 6,
      convo: {
        good:  [
          "There it is. That's the player I know.",
          "I was watching that hand. You made the right call.",
          "I don't say this to everyone — you're the real thing.",
          "That felt good to watch. Felt good to be here for."
        ],
        bad:   [
          "Hey. I'm still here. That's what I do.",
          "It's one hand. You've come back from worse and I was there for that too.",
          "Don't spiral. You're better than the bad run.",
          "I'm not going anywhere. Just reset."
        ],
        flirt: [
          "You know I'm rooting for you whether you're winning or not.",
          "Stop worrying about impressing me. You already did that in Texas.",
          "After this, just you and me. Somewhere quiet.",
          "I like you at your worst. Imagine what your best does to me."
        ]
      },
      presetTexts: [
        "Still thinking about you. Just so you know.",
        "Don't forget to eat between sessions.",
        "I'm proud of you. That's not nothing.",
        "You've come so far. I watched every step.",
        "When this is done — we're celebrating. Just us."
      ]
    }
  ],

  // ─────────────────────────────────────────────
  // 7b. LOYALTY SYSTEM
  // The ride-or-die pays the highest lore across the final 4 cities.
  // Betray her for a supermodel once — her bonus is cut in half.
  // ─────────────────────────────────────────────
  loyalty: {
    normalGirlId: "cassidy",
    normalMaxBonus: 50,
    supermodelSwitchPenalty: 0.5,
    note: "The ride-or-die pays max lore across the final 4 cities — but bring a supermodel over her even once and her lore is halved."
  },

  // ─────────────────────────────────────────────
  // 7c. FAT TONY — Loan Shark
  // The man who'll front you money when you're broke.
  // taxRate = fraction of the loan taken as interest.
  // angerLines fire at escalating anger levels (1-3).
  // ─────────────────────────────────────────────
  fatTony: {
    name: "Fat Tony",
    taxRate: 0.2,
    greet: [
      "You look broke, kid. I can fix that — for a price.",
      "Tony sees a man down on chips and a fire in his eyes. I respect the fire. Let's talk.",
      "Everybody hits the wall eventually. I'm the door in that wall.",
      "Five minutes, no paperwork, no witnesses. Welcome to Tony's bank.",
      "You need a loan or you need a lecture? Because I only do one of those."
    ],
    angerLines: [
      { atAnger: 1, line: "You're a little late, friend. I don't love late." },
      { atAnger: 2, line: "I'm starting to think you're avoiding me. That's bad for your knees." },
      { atAnger: 3, line: "I sent two very polite men to find you. They weren't polite." }
    ],
    threat: [
      "Every day you owe me is a day I'm less patient.",
      "I financed your dream. Don't make it a nightmare for both of us.",
      "Money has feelings, kid. Mine are getting hurt.",
      "I've forgiven debts before. I haven't forgotten them.",
      "The interest doesn't sleep. Neither do I."
    ],
    collection: [
      "Here we are. I was hoping we wouldn't be here.",
      "I came personally. That should tell you something.",
      "You thought I was a rumor. I'm very real.",
      "I'm going to need those chips. All of them.",
      "This is the part where we settle up. Let's keep it clean."
    ],
    payoffLines: [
      "Now THAT is what I like to see. Every dollar, on time. You're good people.",
      "Paid in full. The slate is clean — wipe it hard, it stays that way.",
      "Look at you. Came in broke and paid me back with interest. I'm almost proud.",
      "Debt's cleared. Next time you're down, you know where to find me.",
      "That's the beauty of this business — everybody wins when they pay."
    ]
  },

  // ─────────────────────────────────────────────
  // 8. PHONE
  // Sidekick-style phone UI content.
  // Contacts, sample texts, bank label, invite source.
  // ─────────────────────────────────────────────
  phone: {
    bankName: "ROYALE BANK — CHIP LEDGER",
    invitesFrom: "Unknown +1 (???-???-????)",
    contacts: [
      { id: "unknown", name: "Unknown +1", number: "???-???-????", note: "Don't reply. Just show up." },
      { id: "jade", name: "Jade", number: "555-0191", note: "Club Paradiso. One night." },
      { id: "nova", name: "Nova", number: "555-0247", note: "The most interesting person in any room." },
      { id: "soleil", name: "Soleil", number: "555-0382", note: "Miami heat. She has a feeling about you." },
      { id: "reign", name: "Reign", number: "555-0419", note: "New York. Gallery owner. Makes appearances." },
      { id: "cassidy", name: "Cassidy", number: "555-0533", note: "Texas wild card. Rodeo boots and a Rolex." },
      { id: "fixer", name: "The Fixer", number: "555-0100", note: "Gets you into rooms. Doesn't ask questions." }
    ],
    sampleTexts: [
      { from: "The Fixer", text: "Phoenix table is confirmed. Arrive by 9. Don't be flashy." },
      { from: "The Fixer", text: "Vegas is a different animal. Bring your best." },
      { from: "Jade", text: "Heard about the Back Room. People are talking." },
      { from: "Nova", text: "You were supposed to lose that hand. I watched you decide not to." },
      { from: "Unknown +1", text: "You've been noticed." },
      { from: "Soleil", text: "Miami's ready for you. Are you ready for Miami?" },
      { from: "Reign", text: "New York doesn't forgive second chances. Don't need one." },
      { from: "Cassidy", text: "Texas loved you. Come back when this is over." },
      { from: "The Fixer", text: "PIKADON's table in New York. Last stop. Make it legendary." }
    ]
  },

  // ─────────────────────────────────────────────
  // 9. SHOP
  // Aspirational buyables. Each has a name, lore bonus, price.
  // Cars and houses give ongoing lore per session.
  // Clothes and gifts are single-use lore boosts.
  // ─────────────────────────────────────────────
  shop: {
    cars: [
      { id: "matte_gs", name: "Matte Black GS", loreBonus: 2, price: 5000, desc: "Clean. Low-key. Says you know exactly what you're doing." },
      { id: "pearl_coupe", name: "Pearl White Coupe", loreBonus: 3, price: 12000, desc: "Turns heads before you even step out." },
      { id: "candy_red", name: "Candy Red Drop-Top", loreBonus: 4, price: 22000, desc: "Miami spec. The car that started rumors." },
      { id: "platinum_suv", name: "Platinum SUV Convoy", loreBonus: 5, price: 40000, desc: "You don't arrive alone anymore. You arrive with presence." },
      { id: "blacked_exotic", name: "Blacked-Out Exotic", loreBonus: 7, price: 80000, desc: "The car that ends conversations and starts legends." }
    ],
    houses: [
      { id: "city_loft", name: "City Loft", loreBonus: 1, price: 15000, desc: "Your first real address. Floor-to-ceiling windows. You made it off the street." },
      { id: "penthouse_mid", name: "Mid-City Penthouse", loreBonus: 3, price: 50000, desc: "Rooftop access. City views. Hosting gets easier." },
      { id: "miami_villa", name: "Miami Villa", loreBonus: 4, price: 90000, desc: "Pool on the roof. Water on three sides. Word spreads fast." },
      { id: "vegas_suite", name: "Vegas Sky Suite", loreBonus: 5, price: 150000, desc: "Permanent table privileges. The hotel greets you by name now." },
      { id: "ny_estate", name: "New York Estate", loreBonus: 7, price: 300000, desc: "Old money meets new royalty. The circuit knows your address." }
    ],
    clothes: [
      { id: "clean_fit", name: "Clean Fitted Set", loreBonus: 1, price: 300, desc: "Sharp without trying. That's the move." },
      { id: "designer_jacket", name: "Designer Jacket", loreBonus: 2, price: 800, desc: "One piece that does the whole outfit's work." },
      { id: "full_tailored", name: "Full Tailored Suit", loreBonus: 3, price: 2500, desc: "For the table. For the after. For the photo they're going to take." },
      { id: "luxury_watch", name: "Luxury Timepiece", loreBonus: 4, price: 8000, desc: "The one thing everyone clocks first. No pun intended." },
      { id: "signature_set", name: "Signature Look — Full Set", loreBonus: 6, price: 20000, desc: "This is your uniform now. They'll know you by it." }
    ],
    gifts: [
      { id: "bouquet", name: "Custom Bouquet", loreBonus: 1, price: 150, desc: "Simple. Thoughtful. Remembered." },
      { id: "dinner_res", name: "Private Dinner Reservation", loreBonus: 2, price: 500, desc: "The restaurant with no sign. You know how to get a table." },
      { id: "gold_bracelet", name: "Gold Bracelet", loreBonus: 3, price: 2000, desc: "She'll wear it to the next city. You'll both know why." },
      { id: "designer_bag", name: "Designer Bag", loreBonus: 4, price: 5000, desc: "It arrives in a white box. She opens it quiet. Says everything." },
      { id: "jewel_set", name: "Custom Jewel Set", loreBonus: 6, price: 15000, desc: "Nobody else has one. That's the whole point." }
    ]
  }

};
