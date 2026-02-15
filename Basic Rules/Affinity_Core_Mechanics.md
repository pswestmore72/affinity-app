# Core Mechanics

## System Identity

This is a **heroic risk-attrition system** built on:

- **d6 dice pools** (no d20)
- **Exertion as risk** (commitment costs health)
- **Hit Dice** as life + stamina
- **Tiered Success Thresholds**
- **Explosive 6s** (each 6 = 2 successes)
- **Turn-based initiative**
- **Resolve** as encounter clock

Big actions require commitment. Commitment risks collapse.

---

## Character Resources

### Level

**Maximum Level:** 10

**Proficiency = Half Level (rounded up)**

| Level | Proficiency |
|-------|-------------|
| 1 | 1 |
| 2 | 1 |
| 3 | 2 |
| 4 | 2 |
| 5 | 3 |
| 6 | 3 |
| 7 | 4 |
| 8 | 4 |
| 9 | 5 |
| 10 | 5 |

Proficiency represents natural competence, training, and skill growth.

---

## The Hit Dice System

**Hit Dice (HD)** are the core resource of this game. They represent:
- Your health and stamina
- Your ability to exert yourself
- Your resilience against harm
- Defensive capacity
- Attrition fuel

Different classes have different Hit Dice:

- **Tough Classes** (Combatants, Sovereigns): d10
- **Balanced Classes** (Rangers, Priests, Scholars): d8  
- **Fragile Classes** (Weavers, Shamans): d6

### HD Pool by Level

| Level | Tough (d10) | Balanced (d8) | Fragile (d6) |
|-------|-------------|---------------|--------------|
| 1 | 3 | 3 | 3 |
| 2 | 5 | 5 | 4 |
| 3 | 7 | 6 | 5 |
| 4 | 9 | 8 | 7 |
| 5 | 11 | 10 | 8 |
| 6 | 13 | 11 | 10 |
| 7 | 15 | 13 | 11 |
| 8 | 17 | 15 | 13 |
| 9 | 19 | 16 | 14 |
| 10 | 21 | 18 | 16 |

---

## Dice Resolution

This system uses **dice pools**, not d20 rolls.

### Success Rules

- **at or above threshold = 1 success**
- **6 = 2 successes** (Explosive Success)
- **1 = burn 1 HD** (only on exertion dice, not proficiency dice)

There are no traditional critical hits. The explosive power of 6s creates natural spike moments.

---

## Action Resolution

### Step 1: Declare Action

State:
- Ability used
- Exertion dice committed (from your turn's exertion budget)

### Step 2: Roll Dice Pool

**Roll:** Proficiency Dice + Exertion Dice

**Count successes** based on action's Success Threshold:
- 6 = 2 successes

**Burn HD:** Each 1 rolled on exertion dice burns 1 HD immediately

### Step 3: Check Required Successes

Each action has a **required success count**.

**If successes < required:**
- Action fails
- Exertion still costs HD from 1s
- Make a Resolve check if action was Expert+ tier

**If successes ≥ required:**
- Action succeeds
- Extra successes beyond required add +1 HD damage each
- **Bonus damage from extra successes capped at Proficiency** (prevents wild scaling)

---

## Concentration & Maintaining Effects

Some abilities require ongoing focus to maintain their effects—portals held open, transformations sustained, wards kept active. These abilities specify "Concentration Required" or describe a maintained effect with duration.

**Maintaining Rule:**

While maintaining an effect:
- If you must make a Resolve check for any reason, and you fail it → the effect ends immediately
- You cannot maintain multiple concentration effects simultaneously (starting a new one ends the previous)
- The effect ends if you are knocked unconscious or die

**Why This Matters:**
Concentration makes powerful sustained abilities vulnerable to pressure. A Shaman holding a threshold portal must remain mentally intact—taking damage that triggers a Resolve check risks collapsing the gateway. This creates tactical decisions: do you maintain the powerful effect, or can you risk the mental strain?

---

## Action Tiers

Each ability has a **Success Threshold** (minimum die face value that counts as success).

### Success Threshold by Action Type

| Tier | Success Threshold | Typical Actions |
|------|-------------------|-----------------|
| **Basic** | 2+ | All weapon attacks, basic spells |
| **Advanced** | 3+ | Class abilities, enhanced techniques |
| **Expert** | 4+ | Powerful features, advanced spells |
| **Legendary** | 5+ | Extraordinary abilities, epic magic |
| **Ultimate** | 6 only | Reality-warping powers |

This ladder represents mythic weight and escalating difficulty.

---

## Proficiency Dice

Every action roll includes **Proficiency Dice = Half Level (rounded up)**.

These represent:
- Skill and training
- Natural competence
- Professional growth

**Proficiency dice do not cost HD to roll, and 1s rolled on proficiency dice do NOT burn HD.**

Only exertion dice burn HD on 1s. Proficiency is reliable.

---

## Exertion Dice

Each turn, you may allocate **Exertion Dice** to fuel your actions.

**Exertion Budget:**
- **Each action has its own Exertion budget = Your Proficiency dice**
- You may take **up to 2 actions per turn**
- Each action can use up to Proficiency dice of Exertion independently
- Each Exertion Die is a d6
- Unused Exertion Dice do not carry between actions or turns
- **Example:** Level 5 character (Prof 3) can use up to 3 Exertion dice on Action 1, and up to 3 Exertion dice on Action 2

**Risk:**
- Every 1 rolled on **Exertion Dice** burns 1 HD immediately
- Proficiency dice do not burn HD on 1s (they represent reliable skill)

**Philosophy:**

Exertion represents **pushing past comfort:**
- Channeling power beyond your training
- Drawing on deeper reserves
- Emotional strain and physical toll

**Basic tasks should be doable with proficiency alone.**
**Heavy tasks require exertion—and exertion always costs.**

### Exertion Minimums

| Tier | Success Threshold | Minimum Exertion Dice |
|------|-------------------|-----------------|
| **Basic** | 2+ | 0 |
| **Advanced** | 3+ | 0 |
| **Expert** | 4+ | 1 |
| **Legendary** | 5+ | 2 |
| **Ultimate** | 6 only | 3 |

---

## The Eight Skills (Domain Context)

Skills represent specialized **domains** where training matters. They are **not rolled as dice**—instead, they provide context for when class abilities, feats, or situational bonuses apply.

**The Eight Skill Domains:**

1. **Agility** — Precision movement, stealth, dexterous manipulation
2. **Awareness** — Sensing, insight, investigation
3. **Fortitude** — Physical resistance, holding out, resilience
4. **Wilderness** — Tracking, navigation, animals, foraging
5. **Influence** — Persuasion, deception, intimidation
6. **Lore** — History, arcana, religion, theory
7. **Medicine** — Healing, anatomy, diagnosis
8. **Craft** — Making, repairing, engineering

### How Skills Work

**Skills do not grant dice directly.** Instead:
- Class abilities may grant bonuses when specific skills apply (e.g., "gain +2d6 when using Wilderness")
- Feats may grant bonuses when specific skills apply
- GMs use skill domains to determine when abilities trigger
- All rolls use **Proficiency + Exertion** as baseline

**Example:** A Ranger's "Nature's Treaty" ability grants +2d6 when rolling for Wilderness-related tasks. The Wilderness skill itself doesn't grant dice—the class ability does.

---

## Two Resolution Modes

### Mode 1: Contest Mode (Conflict)

**Used for:**
- Combat
- Social duels and debates (see **Social Duels** section for full structure)
- Ritual interference
- Chase scenes (see **Movement & Chase Mechanics** section for full structure)
- Any head-to-head confrontation

**Mechanic:**
1. Roll Proficiency + Exertion dice (class abilities/feats may grant bonus dice in relevant domains)
2. Count successes (using threshold tier)
3. Compare to required successes
4. **Extra successes add impact** (damage, influence, effect strength)
5. **Bonus successes capped at Proficiency** (prevents exponential scaling)
6. Target may defend or resist

**This is your primary conflict engine—applies to combat, social, and chase situations.**

### Mode 2: Threshold Mode (Tasks)

**Used for:**
- Travel & navigation (see **Travel & Journey System** section for complete journey mechanics)
- Crafting & creation
- Investigation & research
- Climbing & environmental challenges
- Non-opposed persuasion
- Task resolution
- Long-term projects

**Mechanic:**
1. Roll Proficiency + Exertion dice (class abilities/feats may grant bonus dice in relevant domains)
2. Count successes (using threshold tier)
3. Compare to **Task Difficulty** (set by GM)
4. If successes ≥ difficulty → **task succeeds**
5. **No base impact. No extra success damage. No wound system involved.**
6. **Extra successes may:**
   - Reduce time required
   - Increase quality
   - Provide bonus information

**This keeps tasks from feeling like combat.**

### Example: Travel (Threshold Mode)

**Journey through haunted forest.**

**Task Difficulty:** Advanced (3+), Required 5 successes

**Party contribution:** Each character rolls using Proficiency + Exertion (Rangers may use Nature's Treaty for +2d6)

**Rolls:**
- Ranger (Proficiency 3 + Nature's Treaty +2d6 + 2 exertion): 3 successes
- Fighter (Proficiency 3 + 1 exertion): 1 success
- Cleric (Proficiency 3): 2 successes
- **Total: 6 successes**

**Result:** Success (met 5)! The extra success means you find a safe campsite along the way.

**If failed:** Party gets lost, must try again, or encounters narrative danger (GM's choice).

### Example: Crafting (Threshold Mode)

**Forge a masterwork blade.**

**Task Difficulty:** Expert (4+), Required 6 successes over 3 days

**Each day:** Smith rolls Proficiency + optional Exertion (Craft-related feats may grant bonus dice)

**Day 1:** 2 successes (4/6 remaining)  
**Day 2:** 3 successes (1/6 remaining)  
**Day 3:** 2 successes (complete!)

**Extra successes:** Could reduce crafting time or add weapon property.

**If failed:** Lose materials, must start over.

---

## Social Duels

**Social Duels** use Contest Mode but target **Resolve** instead of HD. These represent debates, negotiations, interrogations, and rhetorical battles where wills clash.

**Minimum Resolve:** Characters with Resolve below 2 cannot participate in social encounters—they lack the mental fortitude to engage in rhetorical conflict.

### Structure

**Setup:**
- Each participant has their current **Resolve** as their social endurance
- Choose your **approach**: Influence (persuasion/deception/intimidation), Lore (logical arguments), or Awareness (reading opponent)
- Set the **stakes**: What does the winner gain? What does the loser concede?

**Each Round:**
1. **Declare Intent:** State what you're trying to achieve this round
2. **Roll:** Proficiency + Exertion (Advanced tier, 3+)
   - Class abilities may grant bonus dice if relevant domain applies
3. **Compare Successes:** Highest roll wins the round
4. **Apply Damage:** Winner deals successes as Resolve damage to loser
5. **Bonus Damage:** Extra successes beyond opponent's total add +1 Resolve damage each (capped at Proficiency)

**Defensive Options:**
- **Concede a Point:** Lose 1 Resolve automatically, but gain +2d6 on your next roll (you give ground to strengthen position)
- **Deflect:** Spend exertion to roll defense (Proficiency + Exertion, 3+). Each success cancels 1 incoming Resolve damage. 1s still burn HD.
- **Walk Away:** Leave the duel. Lose automatically, but take no further Resolve damage.

**Victory Conditions:**
- Target reaches **0 Resolve:** They concede the argument/negotiation. Stakes are won.
- Target reaches **-1 Resolve:** They are broken—must flee conversation or accept any demand (within reason)

**Recovery:**
- Resolve naturally restores during rest
- Social defeats leave psychological impact—GM may impose narrative consequences

**Example Stakes:**
- Negotiation: Get better price, gain information, secure alliance
- Interrogation: Extract confession, break will, plant doubt
- Debate: Sway crowd opinion, undermine authority, expose lies
- Seduction: Win affection, gain access, compromise judgment

### Mechanical Notes

**Why target Resolve not HD?**
- **Resolve represents total mental and physical stamina—arguments are exhausting**
- Words wound pride and will, not flesh
- Keeps social conflict mechanically distinct from physical combat
- Losing a social duel doesn't incapacitate you physically—it breaks your position
- A character already wounded (low Resolve from combat) will struggle in debates—they're already mentally/physically drained

**Multiple Participants:**
- Group debates use "assist" mechanics: Allies can spend their actions to grant +1d6 to primary speaker
- Hostile crowds impose penalties: -1d6 per 10 hostile witnesses

---

## Movement & Chase Mechanics

### Movement in Combat

**Base Movement:** 10 yards per round (free action)

**Movement Action Options:**

1. **Standard Move** (Free)
   - Move up to 10 yards as part of your turn
   - Can be split before and after actions
   - Example: Move 5 yards, attack, move 5 yards

2. **Dash** (Action, Basic 2+)
   - Required: 1 success
   - Move an additional 10 yards this round
   - Uses your action for the turn
   - Total movement: 20 yards

3. **Forced March** (Action, Advanced 3+)
   - Required: 2 successes
   - Roll Proficiency + Agility/Wilderness + Exertion
   - Move an additional 20 yards this round
   - Total movement: 30 yards
   - Failure: Move only 10 yards (your base movement)

4. **Disengage** (Action, Advanced 3+)
   - Required: 2 successes
   - Move up to 10 yards while focusing on defensive positioning
   - Represents careful withdrawal under pressure

**Difficult Terrain:**
- Costs double movement to cross
- Examples: Rubble, thick brush, steep slopes, shallow water

### Chase Mechanics

**When pursuit begins, resolve with a single contested roll** (like Social Duels):

**Setup:**
- **Lead:** The pursued party, trying to escape
- **Chase:** The pursuing party, trying to catch
- Set stakes: What happens if Lead escapes vs. if Chase catches them

**Resolution:**
1. **Both parties roll:** Proficiency + Exertion (Advanced 3+, 2 required successes)
   - Class abilities may grant bonus dice (Rangers in wilderness, etc.)
   - Environmental advantages may grant +1d6 or +2d6
2. **Compare successes:**
   - **Lead wins:** Escape! Lead gets away clean
   - **Chase wins:** Caught! Chase closes distance, enter confrontation
   - **Tie:** Lead escapes but Chase knows where they went (tracks, witnesses, etc.)

**Environmental Modifiers:**
- **Familiar Terrain:** +1d6 to rolls
- **Superior Mount/Vehicle:** +2d6 to rolls
- **Darkness/Cover:** Lead gains +1d6
- **Crowded/Urban:** Both parties roll at disadvantage (-1d6)

**Detailed Chase Rules:** For chase-focused campaigns, see optional extended chase system (not included in core rules).

---

## Travel & Journey System

**Travel** is resolved through party cooperation facing journey challenges.

### Journey Resolution

**Setup:**
- Determine distance category: **Short** (<20 miles), **Medium** (20-100 miles), **Long** (100-500 miles), **Epic** (500-1000 miles), **Legendary** (1000+ miles)
- Set difficulty based on terrain: Easy (2+), Moderate (3+), Difficult (4+), Extreme (5+)
- Set required successes: Short=2, Medium=3, Long=4, Epic=6, Legendary=8
- GM identifies 1-3 **Journey Hurdles** based on distance (Short=1, Medium=2, Long=3, Epic/Legendary=3-4)

**Journey Hurdles (Examples):**
- Hostile territory (predators, bandits, patrols)
- Harsh weather (storms, blizzards, heat)
- Difficult terrain (rivers to ford, cliffs to climb, swamps)
- Limited supplies (scarce water, no shelter)
- Time pressure (must arrive before deadline)

**The Journey Roll (Party Effort):**

The party must work together to overcome the journey:

1. **Navigator** (required): One party member rolls Proficiency + Exertion (set difficulty tier)
   - Class abilities grant bonus dice (Rangers using Nature's Treaty, etc.)
   
2. **Support Roles** (optional, each adds +1d6 to Navigator, max +3d6):
   - **Scout:** Party member who searches ahead for danger/shortcuts (requires Wilderness or Awareness domain)
   - **Quartermaster:** Party member managing supplies and morale (requires Medicine or Influence domain)
   - **Guard:** Party member protecting against threats (requires combat capability)

3. **Hurdle Complications:**
   - For each unaddressed Hurdle, Navigator rolls at -1d6 disadvantage
   - Party members can "address" a Hurdle by taking Support Roles that narratively counter it
   - Example: Navigator in hostile territory without Guard = -1d6

**Outcomes:**

**Success (met required successes):**
- Arrive fresh at destination
- No complications
- Restore 1 Resolve from safe journey (all party members)

**Partial Success (within 1-2 of target):**
- Arrive at destination with complication
- Lose 1 Resolve from strain (all party members)
- GM introduces minor setback tied to an unaddressed Hurdle: depleted supplies, minor encounter, equipment damage, weather delay

**Failure (missed by 3+):**
- Arrive at destination with major complication
- Lose 2 Resolve from exhausting journey (all party members)
- GM introduces major setback tied to unaddressed Hurdles: hostile encounter, lost party member, severe injury, party arrives separately, or significant delay

**Travel Strain Mitigation:**
- Rangers with Nature's Treaty ability: reduce party Resolve loss by 1 (minimum 0)
- Adequate supplies/maps: grant +1d6 to Navigator
- Mounts: reduce journey difficulty by 1 category
- Priests using Power Word abilities before travel: can buffer Resolve loss

**Why Party Dynamics Matter:**
A lone Navigator in harsh conditions faces impossible odds. A coordinated party with Scout, Guard, and Quartermaster supporting the Navigator transforms the journey into a team victory.

**Detailed Travel Rules:** For journey-focused campaigns where daily progression matters, see optional extended travel system (not included in core rules).

---

## Resolve (The Death Spiral)

**Resolve** represents your capacity to continue fighting—your mental stamina, physical endurance, and will to push forward.

**All characters have a maximum Resolve of 5.**

### Losing Resolve

**You must make a Resolve check when ANY of these occur:**
- You lose ≥ Proficiency + 1 HD in a single round
- You are reduced to 0 HD
- You are at 0 HD and take any hit
- You use maximum Exertion in a single round (equal to your Level)
- You fail an Expert+ action
- Certain enemy effects force a check

**Maximum of 1 Resolve check per round** (even if multiple triggers occur).

**Resolve Check:** Roll 1d6.
- **1-4 →** You lose 1 Resolve (fall one stage)
- **5 →** You hold your current Resolve level
- **6 →** You gain 1 Resolve (rally—advance one stage, maximum 5)

### The Resolve Stages

As Resolve decreases, you suffer cumulative penalties:

**Resolve 5 — Full Strength**
- No penalties
- You are at peak performance

**Resolve 4 — Pressured**
- Cannot initiate Expert+ actions
- You feel the weight of combat but remain capable

**Resolve 3 — Shaken**
- Cannot initiate Expert+ actions
- All actions require +1 additional success
- Your ambition falters—safer, simpler choices become necessary

**Resolve 2 — Weakened**
- Cannot initiate Expert+ actions  
- All actions require +1 additional success
- Roll one fewer defense die (minimum 1)
- Defense begins to crumble

**Resolve 1 — Staggering**
- Cannot initiate Expert+ actions
- All actions require +1 additional success
- Roll one fewer defense die (minimum 1)
- This is the "you should be running" stage

**Resolve 0 — Collapse**
- Cannot initiate Expert+ actions
- All actions require +1 additional success
- Roll one fewer defense die (minimum 1)
- You fall unconscious or are otherwise removed from the scene
- You are dying, captured, or at the mercy of events
- Further failed Resolve checks = death

**Note:** Defense dice reduction cannot go below 1 die (you always roll at least 1 defense die).

### Recovering Resolve

- Healing spells with "Restore" keyword can restore Resolve stages
- Some class abilities can protect or restore Resolve
- Most regular healing does NOT restore Resolve (only HD)
- **Short Rest:** Restore Resolve up to half your maximum (3 Resolve)
- **Long Rest:** Fully restore to 5 Resolve

**Resolve is a death spiral that ensures fights end decisively.**

---

## Affinity & Virtue

**Affinity** represents your connection to cosmic principles through personal conviction. It is not worship or divine favor—it is **resonance through action**. The universe recognizes those who embody consistent principles.

### The Ten Virtues

Every character chooses a **Defining Virtue** at creation. This represents your connection to the cosmic forces that shape Aeralon—what divine pressure resonates with your soul.

**The Ten Virtues:**

#### Light & Order
1. **Memory** *(Aluneth)* — Preserving truth, honoring the past, maintaining continuity across time
2. **Communion** *(Ilyra)* — Building home, shared survival, offering hospitality to the weary
3. **Guardian** *(Caerith)* — Standing watch, protecting the defenseless, mercy enforced with shield

#### Balance & Cycle
4. **Growth** *(Thymera)* — Nurturing life, healing wounds, fostering potential without apology
5. **Decay** *(Darthun)* — Accepting endings, clearing the old, necessary destruction to make space
6. **Consequence** *(Thalos)* — Ensuring choices matter, witnessing outcomes, enforcing accountability

#### Shadow & Change
7. **Flux** *(Iosyx)* — Embracing elemental change, chaos as creativity, cosmic transformation
8. **Freedom** *(Zarun)* — Breaking bonds, self-determination, forging your own identity

#### Tyranny & Corruption
9. **Obligation** *(Azravael)* — Enforcing debts, binding others to terms, rewriting agreements in your favor
10. **Suffering** *(Gephorix)* — Pain as truth, despair as revelation, beauty through torment

### Affinity Dice Mechanics

**Gaining Affinity Dice:**
- When you act in accordance with your Virtue in a meaningful way (GM judges), you gain 1 Affinity Die
- **Maximum Affinity Dice stored = Your Proficiency**
- Affinity Dice carry over between sessions until spent

**Spending Affinity Dice:**
- Before rolling any action, you may spend stored Affinity Dice to add them to your roll
- Each Affinity Die is a d6
- **Affinity Dice follow proficiency dice rules** (don't burn HD on 1s, count 6s as 2 successes)
- **Maximum Affinity Dice per roll = Your Proficiency**

**Examples of Gaining Affinity:**
- **Memory:** Preserving a forgotten truth, honoring the dead's true story, refusing to let history be erased
- **Communion:** Sheltering strangers despite risk, rebuilding a shattered community, sharing your last meal
- **Guardian:** Standing alone against overwhelming odds to protect others, showing mercy through intervention
- **Growth:** Healing someone thought beyond saving, nurturing potential in the broken, fostering life in hostile places
- **Decay:** Accepting a necessary ending, destroying corruption to allow renewal, clearing the old with dignity
- **Consequence:** Ensuring a broken oath has weight, witnessing justice through to its end, holding someone accountable
- **Flux:** Embracing radical transformation, catalyzing change through chaos, rewriting reality through elemental force
- **Freedom:** Breaking chains literal or metaphorical, refusing assigned identity, transforming yourself against expectation
- **Obligation:** Binding someone to favorable terms, collecting on old debts, leveraging contracts to your advantage
- **Suffering:** Revealing truth through pain, forcing someone to confront despair, finding beauty in torment

**Losing Affinity:**
- When you act directly opposed to your Virtue (betraying your core values), you lose ALL stored Affinity Dice
- This is not punishment—it's cosmic disconnection from your resonance
- You can rebuild Affinity by recommitting to your principles

### Why This Matters

**Affinity connects you to Aeralon's cosmic forces:**
- Your Virtue aligns you with divine pressures shaping the Mortal Weave
- Each Virtue resonates with specific deities, planar forces, or cosmic principles
- The universe recognizes those who consistently embody these powers
- Light, Balance, Shadow, and Tyranny—all are forces pressing upon reality
- Players must decide when to spend their cosmic reserve
- Big moments become opportunities to embody your cosmic alignment
- Mechanical reward for consistent resonance with your chosen force
- Good, neutral, and evil Virtues all exist—the cosmos judges only consistency, not morality

**GM Guidance:**
- Award Affinity sparingly (1-2 times per session for exceptional acts aligned with Virtue)
- Don't punish complex choices—only clear cosmic betrayals lose Affinity
- Affinity should feel earned, reflecting genuine resonance with planar forces
- Remember: **Obligation** and **Suffering** are valid Virtues, not punishments—the Engine and the Ashen Waste exert real pressure on the Mortal Weave

---

## Damage Model

Each ability defines:
- **Success Threshold** (minimum to work)
- **Number of Required Successes** (minimum to work)
- **Action Tier**
- **Base HD Damage / Outcome** (if successful)

**Final Damage = Base Impact + Extra Successes (capped at Proficiency)**

*Extra successes beyond required add +1 HD damage each, but bonus damage cannot exceed your Proficiency. This prevents low-tier actions with massive exertion from creating wild power spikes at high levels while preserving meaningful scaling through character growth.*

---

## Defense

**To prevent grind, defense is capped.**

### What You Roll When You Defend

**When you defend, you roll your Hit Dice.**

Your class determines which dice you use:
- **Combatants** (d10) roll d10s on defense
- **Sovereigns** (d10) roll d10s on defense
- **Rangers** (d8) roll d8s on defense
- **Priests** (d8) roll d8s on defense
- **Scholars** (d8) roll d8s on defense
- **Weavers** (d6) roll d6s on defense
- **Shamans** (d6) roll d6s on defense

**This immediately means:**
- Tanky classes defend better naturally
- Fragile classes rely on positioning, magic, and avoidance
- No extra math—the die already tells the story

### How Many Dice You Roll

**When you defend, you roll: ½ your Proficiency (rounded up)**

Using your current Hit Dice types:

| Proficiency | Defense Dice |
|-------------|--------------|
| 1 | 1 die |
| 2 | 1 die |
| 3 | 2 dice |
| 4 | 2 dice |
| 5 | 3 dice |

**Example:**
- Level 5 Combatant (Proficiency 3) → Roll 2d10 on defense
- Level 5 Weaver (Proficiency 3) → Roll 2d6 on defense

### Defense Resolution

1. **Attacker declares damage** (after their successful attack)
2. **Defender rolls Proficiency defense dice** using their HD type
3. **Each 5+ rolled cancels 1 incoming HD damage**
4. **No exertion allowed on defense** (defense is pure resilience)
5. **Apply remaining damage** to defender's HD pool

**Defense Dice Minimum:** You always roll at least 1 defense die, even if Resolve penalties would reduce you below that.

### Armor, Spells, and Temporary HD

**Armor and magic do not change how many dice you roll.**

**They change *which* dice get rolled first.**

**Damage Attrition Order:**

When you take HD damage, it's applied in this specific order:

1. **Spell-like Armor** (temporary effects from class abilities like Shield, Barrier, etc.)
2. **Physical Armor** (equipped armor temporary HD: 2d6/2d8/2d10)
3. **Temporary HD** (other sources: spells, shields, magical effects)
4. **Permanent HD** (your class HD pool)

Each die is rolled using **its own size:**
- d10 armor rolls d10
- d8 shield spell rolls d8
- d6 body rolls d6

**Each 5+ cancels 1 incoming damage, regardless of die size.**

*Note: Unlike attack rolls, the "6 = 2 successes" rule does NOT apply to defense rolls.*

**If a die is lost (rolled under 5):**
- Layers are depleted in order (spell effects → armor → temp HD → permanent HD)
- Permanent HD are lost only after all protective layers are gone

**This makes armor feel like armor.** You burn through protective layers before your body takes the hit.

### Armor Types

Armor grants **temporary Hit Dice** that are rolled/lost first before your own HD:

- **Light Armor:** 2d6 temporary HD
- **Medium Armor:** 2d8 temporary HD  
- **Heavy Armor:** 2d10 temporary HD

**Example Defense with Armor:**

Level 5 Weaver (d6 HD, Proficiency 3, wearing Magic Armor 2d12):
- Rolls 2 defense dice (½ Prof)
- First die: d8 (from armor)
- Second die: d8 (from armor if still available, or d6 if magical armor is depleted)
- Each 5+ cancels 1 damage
- Lost dice come from armor first

**Repairing Armor:**
- Armor automatically restores all temporary HD during a **long rest**
- During a **short rest**, armor can be repaired if someone uses a Craft or Medicine check (Advanced 3+, 2 required successes) to mend it
- Successfully mended armor restores all temporary HD
- Failed mending attempt: armor remains damaged, can retry during next rest

---

## Death & Dying

**When you reach 0 HD:**
- You immediately make a **Resolve check**
- If you fail, you lose 1 Resolve
- While at 0 HD, you remain in the scene but cannot take further HD damage
- Each time you're hit while at 0 HD, make another Resolve check

**When you reach 0 Resolve:**
- You fall unconscious or are otherwise removed from the scene
- You are dying, captured, or at the mercy of events
- Further failed Resolve checks = death

**Stabilization:**
- Allies can attempt to stabilize you using Medicine or healing abilities
- **Stabilize** (Basic 2+, Req 2): Target skips their next Resolve check this round
- Healing that restores HD brings you above 0 HD, ending the immediate death spiral

**The Resolve system ensures death is dramatic but not instant—giving allies time to rescue fallen companions.**

---

## Healing

### Healing Hit Dice

**Healing restores Hit Dice** to characters.

- Minor healing: Restore 1d6 Hit Dice
- Moderate healing: Restore 2d6 Hit Dice
- Major healing: Restore 4d6 Hit Dice

Roll the healing dice. For each die result, restore 1 HD per die.

**Note:** You cannot exceed your maximum Hit Dice pool for your level.

### Healing at 0 HD

**Regular healing DOES work on characters at 0 HD:**
- Any healing that restores HD brings them above 0 HD
- Once above 0 HD, they stop making Resolve checks from being at 0 HD
- Regular healing does NOT restore Resolve

### Restoring Resolve

**Most healing does NOT restore Resolve.**

Only abilities with the **"Restore" keyword** can restore Resolve:
- These abilities/spells restore Resolve stages
- They specify how many stages they restore ("Restore 1 Resolve" = increase current Resolve by 1)
- Resolve cannot exceed 5

**Resting also restores Resolve** (see Resting section).

---

## Resting

### Short Rest (1/2 - 8 hours, threatened)
- Regain HD equal to half your level (minimum 1)
- Restore Resolve by 1 (half maximum, rounded up)
- Some class abilities recharge
- Can repair/mend armor

### Long Rest (6+ hours, protected)
- Regain all HD up to your maximum
- Fully restore Resolve to 5
- Regain all armor HD
- All abilities recharge

**Survival is earned through planning and safety, not convenience.**
