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

### Character Advancement Systems

Characters grow through THREE parallel progression systems:

**1. Class Abilities** (Odd Levels: 1, 3, 5, 7, 9)
- Core powers that define your class identity
- Combatant's War Cries, Weaver's Spellcasting, Priest's Power Words, etc.

**2. Ways - Class-Specific Specialization** (Every Level: 1-10)
- Choose one "Way" at Level 1 (subclass specialization within your class)
- Gain one node in your chosen Way each level
- Organized as a grid (4 columns × rows), allowing flexible progression between adjacent nodes
- Example: Combatant's Way of the Sentinel, Weaver's Way of the Elementalist
- **See your Class document for available Ways**

**3. Paths - General Feats** (Levels 1, 3, 6, 9, 10)
- Broad, non-class-specific character customization
- Level 1: Choose Primary Feat (your foundation)
- Later levels: Choose connected feats adjacent to ones you already have
- Allows cross-class builds: Any class can take War-Trained, Shadow Step, Silver Tongue, etc.
- **See Affinity_Path_Board.md for complete feat system**

**Key Distinction:**
- **Ways** = Class-specific, every level, deepens your class fantasy
- **Paths** = Universal feats, select levels only, broadens your capabilities

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
| 1 | 5 | 5 | 4 |
| 2 | 7 | 7 | 5 |
| 3 | 9 | 8 | 6 |
| 4 | 11 | 10 | 8 |
| 5 | 13 | 12 | 9 |
| 6 | 15 | 13 | 11 |
| 7 | 17 | 15 | 12 |
| 8 | 19 | 17 | 14 |
| 9 | 21 | 18 | 15 |
| 10 | 23 | 20 | 17 |

### ⚠️ CRITICAL: Hit Dice Are DICE POOLS, Not Hit Points

**THERE ARE NO HIT POINTS IN AFFINITY.**

**Hit Dice are individual dice that exist or don't exist.** They are NOT summed into a total.

**WRONG (D&D-style thinking):**
- "A Level 3 Combatant has 7d10s Hit Dice."
- "I roll 7d10 and get 48, so I have 48 hit points."
- "I take 5 damage, now I have 43/48 HP."

**CORRECT (Affinity):**
- "A Level 3 Combatant has 7d10s Hit Dice."
- "That means I have SEVEN INDIVIDUAL d10 DICE in my body pool."
- "When I take damage, I lose DICE from my pool, one at a time."
- "7d10s → take 3 HD damage → might become 4d10s (lost 3 individual dice)."

**Character Sheet Notation:**
```
Hit Dice: 7d10s (1d10, 1d10, 1d10, 1d10, 1d10, 1d10, 1d10)
Armor: 3d8s (1d8, 1d8, 1d8)
Shield: 1d12 (1d12)

Total Defense Pool: [1d12] → [1d8, 1d8, 1d8] → [1d10, 1d10, 1d10, 1d10, 1d10, 1d10, 1d10]
                    (shield)   (armor layer)      (body layer)
```

**When Defending:**
- You roll INDIVIDUAL DICE from your outermost layer
- Each die that rolls 5+ = sustain (that die survives)
- Each die that rolls 4- = fail (LOSE that specific die from your pool)
- Defense Capacity (= Proficiency) = how many rolls you get PER ATTACK
- Remaining damage after capacity exhausted = auto-lose dice

**Example Defense Sequence:**
```
Character: 5d10s body + 2d8s armor (two separate dice)
Defense Capacity: 2 (Proficiency 2)
Incoming: 4 HD damage

1st HD: Roll 1d8 (armor) → 6 ✅ Sustain (armor still 2d8s)
2nd HD: Roll 1d8 (armor) → 3 ❌ Fail (armor becomes 1d8)
3rd HD: No rolls left → Auto-fail (armor becomes 0, lose 1 body die: 5d10s → 4d10s)
4th HD: No rolls left → Auto-fail (lose 1 body die: 4d10s → 3d10s)

Final Status: 3d10s body + 0 armor
DICE DESTROYED: 2 armor dice + 2 body dice = 4 dice lost
```

**Key Understanding:**
- You don't "have 48 HP and take 12 damage to be at 36 HP"
- You "have 7 dice, lose 3 dice, now have 4 dice remaining"
- Each die is discrete—it exists or it doesn't
- Armor/shields are OUTER LAYERS that deplete BEFORE body dice
- When you're at "0 dice" you're incapacitated/dying (not "0 HP")

**This is fundamental to Affinity. Dice are destroyed, not points deducted.**

---

## Rest & Recovery

**Without rest, HD attrition becomes a death spiral.** Characters must balance pushing forward with finding time to recover.

### Rest (Between 0.5 and 8 hours in threatened territory)

**Requirements:**
- Minimum 30 minutes (0.5 hours) of downtime
- Can occur in hostile/dangerous territory ("threatened")
- Must not be actively engaged in combat or strenuous activity

**Benefits:**
- Regain **Proficiency HD** (not maximum, just your Proficiency score)
- **Lower Resolve Threshold by 1** (minimum 2)
- Reset **short rest abilities** (War Cries, Power Words, etc.)
- **Armor repair:** If you have class abilities that allow mending/repair/craft, you may restore your armor layer (making it usable for defense again)

**Frequency:**
- Maximum **2 Rests per day** (24-hour period)
- Resting while under threat means limited recovery

**Example:**
Level 5 Combatant (Proficiency 3, at 2 HD / 11 max, Resolve Threshold 4)
- Takes a Rest in the dungeon (threatened space)
- Regains 3 HD (2 → 5 HD), lowers Resolve Threshold by 1 (4 → 3)
- Short rest abilities reset (War Cries available again)

---

### Recover (Long Rest, 6+ hours while protected)

**Requirements:**
- Minimum 6 hours of uninterrupted rest
- Must be in a **safe space** (inn, guarded camp, sanctified area)
- Some class abilities can make threatened spaces "safe" (Ranger's wilderness sanctuaries, Priest's sanctified ground)

**Benefits:**
- Regain **all HD** (back to maximum)
- **Reset Resolve Threshold to 2**
- **Armor dice reset:** Re-roll all armor temp HD when donning armor
- Reset **all abilities** (daily powers, once-per-long-rest features)

**Frequency:**
- Can only occur in **safe spaces**
- Typically once per day (but narrative context determines safety)

**Example:**
Level 5 Combatant (Proficiency 3, at 5 HD / 11 max, Resolve Threshold 3 — Pressured)
- Returns to town inn, sleeps 8 hours (safe space)
- Regains all HD (5 → 11 HD), resets Resolve Threshold (3 → 2 — Full Strength)
- Re-rolls armor when donning (Medium Armor 2d8s → rolls 6+5 = 11 temp HD)
- All daily abilities reset

---

### Strategic Considerations

**Two Rests Per Day:**
The 2-rest-per-day limit forces meaningful choices:
- Rest early (conserve resources) vs push through (risk depletion)?
- Rest in danger (partial recovery) vs retreat to safety (full recovery)?
- Use first Rest after minor encounter, or save it for desperate situation?

**Class Augmentation:**
Some class abilities improve rest effectiveness:
- Rangers may convert threatened wilderness into safe spaces
- Priests can sanctify ground to enable Recover in hostile territory
- Sovereigns may reduce rest time required
- Scholars may regain additional resources during rest

**Armor Repair:**
Armor temp HD does NOT automatically regenerate:
- Must have class abilities (Craft skill, Repair feature, etc.)
- Without repair abilities, armor temp HD stays depleted until you reach safety and Recover
- Encourages diverse party composition (someone with mending skills)

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

### Damage

**Damage is flat.** Each weapon, spell, or ability defines its damage. If you meet the required successes, you deal the listed damage. No bonus damage from extra successes.

**Extra successes** fuel weapon properties, spell scaling, or special effects defined by each ability — not generic +1 damage per success.

**Example:**
Combatant (Proficiency 3) attacks with heavy weapon (3 HD damage, requires 2 successes).
- Rolls 5 successes (3 extra)
- Deals 3 HD damage (the weapon's listed damage)
- Extra successes may trigger weapon properties (e.g., cleave, knockback)

---

## Concentration & Maintaining Effects

Some abilities require ongoing focus to maintain their effects—portals held open, transformations sustained, wards kept active. These abilities specify "Concentration Required" or describe a maintained effect with duration.

**Maintaining Rule:**

While maintaining an effect:
- If you must make a Resolve check for any reason, and you **fail** (roll below your Resolve Threshold) → the effect ends immediately
- **Passing** the Resolve check (rolling at or above your Resolve Threshold) maintains the effect
- You cannot maintain multiple concentration effects simultaneously (starting a new one ends the previous)
- The effect ends if you are knocked unconscious or die

**Why This Matters:**
Concentration makes powerful sustained abilities vulnerable to pressure. A Shaman holding a threshold portal must remain mentally intact—failing a Resolve check collapses the gateway. At Resolve Threshold 2, this is nearly trivial. At Threshold 5+, maintaining a spell under fire becomes agonizing. The escalating spiral writes tension into concentration naturally: early in a fight, your magic holds firm. Late in a fight, every sustained effect is a gamble.

---

## Action Tiers

Each ability has a **Success Threshold** (minimum die face value that counts as success).

### Success Threshold by Action Type

| Tier | Success Threshold | Typical Actions |
|------|-------------------|-----------------|
| **Basic** | 2+ | Weapon attacks, cantrips, class abilities, enhanced techniques |
| **Expert** | 4+ | Powerful features, advanced spells |
| **Legendary** | 6 only | Extraordinary abilities, epic magic, reality-warping powers |

Three tiers. Clean jumps: easy (83% per die), trained (50%), perfection (17%).

---

## Proficiency Dice

Every action roll includes **Proficiency Dice = Half Level (rounded up)**.

These represent:
- Skill and training
- Natural competence
- Professional growth

**Proficiency dice do not cost HD to roll, and 1s rolled on proficiency dice do NOT burn HD.**

Only exertion dice burn HD on 1s. Proficiency is reliable.

### Help Action

With any action you may choose to help an ally, you may give your Roll (Proficiency Dice + Exertion Dice) to their next roll. This cannot be stored by the recipient and must be used on their next roll.

---

## Exertion Dice

Each turn, you may allocate **Exertion Dice** to fuel your actions.

**Exertion Budget:**
- **Each action gets an independent Exertion pool = Your Proficiency**
- You may take **up to 2 actions per turn** (player characters only; NPCs may have different action counts)
- **Action Tier Restriction:** Only 1 action may be Expert tier or higher per turn
- Each action can use up to Proficiency exertion dice independently
- Each Exertion Die is a d6
- Unused Exertion from one action does NOT carry to the next action or turn
- **Maximum exertion per turn = Proficiency × 2** (if taking 2 actions)

**Example:** Level 5 character (Proficiency 3):
- Action 1: Attack using 3 Proficiency dice + up to 3 Exertion dice
- Action 2: Cast spell using 3 Proficiency dice + up to 3 Exertion dice  
- **Total possible: 6 Proficiency dice + 6 Exertion dice = 12d6 per turn**
- **Restriction:** If Action 1 is Expert tier or higher, Action 2 must be Basic tier

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

---

### Triggered Actions & Held Actions

**Triggered Actions (Reactions):**
- Special abilities that activate in response to specific triggers
- If you haven't acted this round, you may use triggered actions when triggers occur
- Uses one of your 2 actions for the turn
- Subject to the same tier restrictions as normal actions

**Held Actions:**
- You may hold actions on your turn, waiting for a specific trigger
- When trigger occurs, use the held action immediately (interrupts current action)
- If trigger doesn't occur by round's end, you may use held actions only for Basic tier actions (at initiative count 0)
- **Risk:** Wasting your turn if trigger never happens

**See Combat Rules for detailed triggered action and held action mechanics.**

### Exertion Minimums

| Tier | Success Threshold | Minimum Exertion Dice |
|------|-------------------|-----------------|
| **Basic** | 2+ | 0 |
| **Expert** | 4+ | 1 |
| **Legendary** | 6 only | 2 |

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
- **Class abilities** may grant bonuses when specific skills apply (e.g., "gain +2d6 when using Wilderness")
- **Feats (Path Board)** may grant bonuses when specific skills apply
- **Special features** may grant bonuses when specific skills apply
- GMs use skill domains to determine when abilities trigger
- All rolls use **Proficiency + Exertion** as baseline

**Bonus Dice from Abilities:**
- When an ability grants bonus dice for a skill domain, those dice do NOT burn HD on 1s
- They function like Proficiency dice—representing trained reliability
- They're added on top of your Proficiency + Exertion pool

**Design Philosophy:**
- Any character can attempt any roll in any domain
- No "skill monkey" characters who monopolize certain checks
- Your class and feat choices determine where you gain advantages
- Players remember and invoke their abilities when applicable domains arise
- **Most skill challenges are GROUP ROLLS** — everyone rolls, successes are pooled, the party wins or fails together
- Individual rolls are used for initiative-order actions, personal consequences, or spotlight moments

**Example:** A Ranger's "Nature's Treaty" ability grants +2d6 when rolling for Wilderness-related tasks. The Wilderness skill itself doesn't grant dice—the class ability does. When tracking a beast through the forest, the Ranger rolls Proficiency + Exertion + 2d6 (Nature's Treaty bonus). The 2d6 from the ability don't burn HD on 1s.

---

## Two Resolution Modes

### Mode 1: Contest Mode (Conflict)

**Used for:**
- Combat (round-by-round, head-to-head)
- Ritual interference
- Chase scenes (see **Movement & Chase Mechanics** section)
- Any direct opposed confrontation where both sides act simultaneously

**Mechanic:**
1. Roll Proficiency + Exertion dice (class abilities/feats may grant bonus dice in relevant domains)
2. Count successes (using threshold tier)
3. Compare to required successes
4. **Hit = deal listed damage.** Extra successes fuel ability-specific effects (weapon properties, spell scaling)
5. Target may defend or resist

**This is your combat engine — use it when characters are trying to hurt each other.**

### Mode 2: Group Challenges (Teamwork)

**Used for:**
- Travel & navigation
- Social encounters (negotiations, debates, interrogations)
- Investigation & research
- Crafting & creation
- Environmental hazards
- Any non-combat situation where the party works toward a shared outcome

Group Challenges are the single resolution system for everything outside combat. Whether you're crossing a desert, convincing a hostile court, investigating a murder, or breaching a magical ward — the mechanics are the same. The only thing that changes is **which domain matters** and **what the Complications look like.**

---

#### Challenge Setup

The GM sets three things:

**1. Scope** — how many successes are needed:

| Scope | Required Successes | Examples |
|-------|-------------------|----------|
| **Minor** | 3 | Short journey, quick negotiation, simple investigation |
| **Standard** | 5 | Cross-country travel, diplomatic summit, complex ritual |
| **Major** | 8 | Epic expedition, royal tribunal, multi-day siege preparation |

**2. Difficulty** — what counts as a success:

| Difficulty | Threshold | When to Use |
|------------|-----------|-------------|
| **Routine** | Basic (2+) | Safe roads, friendly audience, familiar subject |
| **Challenging** | Expert (4+) | Hostile wilderness, skeptical court, arcane mysteries |
| **Extreme** | Legendary (6) | Impassable wasteland, enemy tribunal, elder magic |

**3. Complications** (0-3) — specific obstacles the party must address or suffer dice penalties.

---

#### Roles

**Lead** (1 required): The primary character driving the challenge. Rolls Proficiency + Exertion at the set difficulty.
- Class abilities and feats in the relevant domain grant bonus dice
- The Lead should be the character with the strongest relevant abilities

**Support** (up to 3): Each supporting character adds **+1d6** to the Lead's pool if they can contribute meaningfully.
- Must describe how they contribute (what domain, what ability)
- Support dice don't burn HD on 1s
- Characters can't Support if they have no way to contribute

---

#### Complications

Complications are specific obstacles within the challenge. For each **unaddressed** Complication, the Lead rolls at **-1d6** (removed from their pool before rolling).

A Support role **addresses** a Complication by narratively countering it — this removes the -1d6 penalty AND still provides the Support's +1d6 bonus.

**Example Complications:**
- **Travel:** Hostile patrols, harsh weather, treacherous terrain, dwindling supplies
- **Social:** Hostile audience, evidence against you, cultural barrier, rival speaker
- **Investigation:** Magical wards, time pressure, uncooperative witnesses, false leads
- **Crafting:** Rare materials, hostile environment, time constraint, missing tools
- **Environmental:** Magical interference, structural collapse, toxic atmosphere

---

#### Resolution

Roll all dice. Count successes against the difficulty threshold.

**Success** (met or exceeded required successes):
- The party achieves their goal cleanly
- All party members lower Resolve Threshold by 1 (confidence, relief)
- Extra successes may improve quality, speed, or provide bonus information (GM's call)

**Partial Success** (within 1-2 of target):
- The party achieves their goal, but at a cost
- All party members advance RT by 1 (strain, compromise, fatigue)
- GM introduces a minor setback tied to an unaddressed Complication

**Failure** (missed by 3+):
- The goal is not achieved, or achieved with severe consequences
- All party members advance RT by 2 (exhaustion, humiliation, danger)
- GM introduces a major setback tied to unaddressed Complications

```
Challenge Setup: Scope + Difficulty + Complications
               ↓
Lead rolls (Proficiency + Exertion + Ability Bonuses)
           + Support dice (+1d6 each, up to 3)
           − Unaddressed Complications (−1d6 each)
               ↓
Count Successes → Compare to Required
               ↓
Success (RT −1) | Partial (RT +1) | Failure (RT +2)
```

---

#### Challenge Modifiers

GMs can layer these for specific contexts:

| Modifier | Effect | Context |
|----------|--------|---------|
| **Preparation** | +1d6 to Lead per hour of prep (max +3d6) | Social, Investigation, Crafting |
| **Equipment** | +1d6 to Lead | Travel (maps, mounts), Crafting (quality tools) |
| **Mounts** | Reduce difficulty by 1 tier | Travel |
| **Home Ground** | +1d6 to Lead | Social (your territory), Investigation (your city) |
| **Time Pressure** | Adds 1 Complication | Any |
| **Class Mitigation** | Reduce RT change by 1 (min 0) | Rangers (travel), Sovereigns (social) |

---

#### Tiered Stakes (Social Challenges)

When the challenge is a negotiation, interrogation, or debate, the three outcomes map to concrete consequences:

| Outcome | Consequence |
|---------|-------------|
| **Success** | You get what you want — the court agrees, the merchant offers the deal, the guard lets you pass |
| **Partial** | You get something, but give ground — a compromise, a favor owed, a concession demanded |
| **Failure** | You lose — the court rules against you, the merchant refuses, the guard raises the alarm |

**Withdraw:** At any point, the Lead can withdraw from a social challenge. The party loses at the current outcome tier, but on their terms.

**RT Integration:** RT carries over between combat and Group Challenges. If combat left you at RT 4, you enter negotiations at RT 4. At RT 5+, you cannot Lead a Challenging or Extreme Group Challenge (same restriction as combat: no Expert+ actions).

---

#### Multi-Day Challenges (Crafting & Long Projects)

Some challenges resolve over multiple sessions rather than a single roll:

**Setup:** GM sets Scope and Difficulty as normal, but allows the Lead to accumulate successes across multiple rolls (one per day, per session, or per narrative beat).

**Each Roll:** Lead rolls as normal (with Support if available). Successes accumulate toward the required total.

**Failure on Individual Rolls:** A roll with 0 successes costs materials or time (GM's call), but doesn't reset progress.

**Example:** Forging a masterwork blade — Standard scope (5 successes), Challenging difficulty (Expert 4+). Day 1: 2 successes. Day 2: 2 successes. Day 3: 1 success — complete! Extra successes could add a weapon property.

---

#### Example: Cross-Country Travel

**The party must cross the Ashlands to reach the fortress.**

- **Scope:** Standard (5 successes) — cross-country distance
- **Difficulty:** Challenging (Expert 4+) — hostile wasteland
- **Complications:** Ash storms (weather), Predators (hostile territory), No water (supplies)

**The Lead:** Ranger serves as navigator. Rolls Proficiency 4 + 1 Exertion + Nature's Treaty (+2d6 Wilderness). Pool: **7 dice** at 4+ threshold.

**Support:**
- Fighter acts as Guard, addressing Predators: +1d6
- Cleric manages water with Create Water, addressing No Water: +1d6
- Scholar scouts ahead with Awareness, addressing Ash Storms: +1d6

**All 3 Complications addressed.** Final pool: 7 + 3 = **10 dice** at Expert 4+ (50% per die).

**Roll:** 5 successes — **Success!** The party arrives fresh. RT drops by 1 for everyone.

*Without the Scholar:* Ash Storms remain unaddressed (-1d6), pool drops to 9 dice, and a partial/failure outcome would feature the storm as the narrative setback.

---

#### Example: Diplomatic Negotiation

**The party must convince the Council of Thornwall to mobilize against the Shadow March.**

- **Scope:** Standard (5 successes) — important political negotiation
- **Difficulty:** Challenging (Expert 4+) — the Council is skeptical
- **Complications:** Council trades with the enemy (rival interests), Party burned a village last session (bad reputation)

**The Lead:** Sovereign takes the floor. Rolls Proficiency 4 + 1 Exertion + Royal Authority (+2d6 Influence). Pool: **7 dice.**

**Support:**
- Scholar presents military intelligence showing the enemy's plans (Lore, addresses rival interests): +1d6
- Priest invokes the oaths the Council swore to the Halls of Order (Influence, addresses bad reputation): +1d6
- Ranger stands silent, armored, battle-scarred — GM allows +1d6 for dramatic weight

**Both Complications addressed.** Final pool: 7 + 3 = **10 dice** at Expert 4+.

**Roll:** 4 successes — **Partial Success.** The Council agrees to mobilize, but demands the party lead the vanguard. RT advances by 1 for everyone.

---

#### Example: Arcane Investigation

**The party must decipher ancient wards protecting the villain's sanctum before dawn.**

- **Scope:** Standard (5 successes) — complex magical analysis
- **Difficulty:** Challenging (Expert 4+) — ancient wards
- **Complications:** Time pressure (dawn approaches), Counter-wards detect intruders (magical interference)

**The Lead:** Weaver examines the wards. Rolls Proficiency 3 + 2 Exertion + Arcane Study (+2d6 Lore). Pool: **7 dice.**

**Support:**
- Scholar assists with ward construction knowledge (Lore, addresses magical interference): +1d6
- Ranger keeps watch with Scout patrols (Awareness, addresses time pressure): +1d6

**Both Complications addressed.** Final pool: 7 + 2 = **9 dice** at Expert 4+.

**Roll:** 6 successes — **Success!** The wards are understood and can be bypassed. RT drops by 1.

---

#### Why One System?

Every non-combat challenge uses the same dice, the same roles, the same RT pressure. A party that gets battered in combat, barely survives the journey, and then has to negotiate with the enemy king feels every hit compound — not because three separate subsystems told them so, but because one unified Resolve Threshold tracks it all.

The only thing that changes is which domain matters and what the Complications look like. The mechanics are the same. The party dynamics are the same. The stakes are the same.

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

3. **Forced March** (Action, Expert 4+)
   - Required: 2 successes
   - Roll Proficiency + Agility/Wilderness + Exertion
   - Move an additional 20 yards this round
   - Total movement: 30 yards
   - Failure: Move only 10 yards (your base movement)

4. **Disengage** (Action, Basic 2+)
   - Required: 2 successes
   - Move up to 10 yards while focusing on defensive positioning
   - Represents careful withdrawal under pressure

**Difficult Terrain:**
- Costs double movement to cross
- Examples: Rubble, thick brush, steep slopes, shallow water

### Chase Mechanics

**When pursuit begins, resolve with a single contested roll:**

**Setup:**
- **Lead:** The pursued party, trying to escape
- **Chase:** The pursuing party, trying to catch
- Set stakes: What happens if Lead escapes vs. if Chase catches them

**Resolution:**
1. **Both parties roll:** Proficiency + Exertion (Basic 2+, 2 required successes)
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

## Resolve (The Escalating Spiral)

**Resolve** represents your capacity to continue fighting—your mental stamina, physical endurance, and will to push forward.

**Resolve is tracked as a Threshold** that starts at **2** and escalates as you fail checks. The higher your Resolve Threshold, the harder it becomes to hold yourself together—mirroring the Action Tier ladder that defines all of Affinity.

**All player characters start each encounter at Resolve Threshold 2.**

### The Resolve Check

**You must make a Resolve check when:**
- **Damage destroys a Body HD** (first time each round only)
- Certain enemy effects force a check

**Maximum of 1 Resolve check per round** (even if multiple triggers occur).

**Why Body HD specifically?** If your armor absorbs the entire hit, no Resolve check—your armor shielded your stress, not just your body. This means heavy armor protects your mind as well as your flesh. Unarmored casters check more often (fragile!), armored warriors check less (stoic!). Class fantasy emerges from the math.

**Resolve Check:** Roll 1d6 against your current Resolve Threshold.
- **Roll at or above your Resolve Threshold →** You hold. No change.
- **Roll below your Resolve Threshold →** Your Resolve Threshold increases by 1 (you fall one stage).

| Resolve Threshold | Pass On | Fail Chance | Stage Name |
|-------------------|---------|-------------|------------|
| 2 (2+) | 2, 3, 4, 5, 6 | 16.7% | Functional |
| 3 (3+) | 3, 4, 5, 6 | 33.3% | Functional |
| 4 (4+) | 4, 5, 6 | 50% | Functional |
| 5 (5+) | 5, 6 | 66.7% | Cracking (no Expert+) |
| 6 (6 only) | 6 | 83.3% | Cracking (no Expert+) |
| Failed at 6 | — | — | Collapse |

**This mirrors the Action Tier ladder:** Resolve Threshold 2+ is like a Basic action (easy to pass). Threshold 6 is like a Legendary action (nearly impossible). The fight's pressure writes itself into the mechanic.

**Resolve is one-directional.** Checks cannot improve your Resolve Threshold—only hold it or worsen it. Recovery comes from actions, allies, and rest (see Recovering Resolve below).

**Special: Rush and Steady Actions Bypass Check**  
When you use the Rush action or Steady action (see Universal Actions in Combat Rules), you choose to worsen your Resolve Threshold by 1 (Rush) or lose HD (Steady) without rolling. These voluntary sacrifices do not trigger additional Resolve checks.

### The Resolve Stages

As your Resolve Threshold increases, checks become harder to pass. The escalating threshold IS the spiral.

**Resolve Threshold 2–4 — Functional**
- No penalties
- The increasing difficulty of each check is pressure enough

**Resolve Threshold 5+ — Cracking**
- Cannot initiate Expert+ actions
- You're too shaken for precision work

**Collapse (Failed at Threshold 6)**
- **You fall unconscious immediately**
- **If you have HD > 0:** You are NOT dying, but collapsed (unconscious 0-2 days, see Death & Dying)
- **If you have HD = 0:** You ARE dying (see Death & Dying)
- **You only die when you reach BOTH 0 HD AND Collapse**

**The two breakpoints in Affinity are simple and binary:**
- **RT 5+:** No Expert+ actions (mind is cracking)
- **0 HD:** Limited to 1 action per turn (body is breaking)

No graduated penalty tables. No defense dice modifiers. The escalating check difficulty is the death spiral.

### Recovering Resolve

Recovery **lowers your Resolve Threshold** (minimum 2):

- **Steady action** (Universal): Lose 3 HD → Lower Resolve Threshold by 1 (see Combat Rules)
- Healing spells with "Restore" keyword can lower Resolve Threshold
- **Priest and Sovereign class abilities** are superior at lowering Resolve Thresholds (better efficiency, can affect others)
- Most regular healing does NOT lower Resolve Threshold (only HD)
- **Short Rest:** Lower Resolve Threshold by 1 (minimum 2)
- **Long Rest:** Reset Resolve Threshold to 2

**Resolve is an escalating spiral that ensures fights end decisively.** Early pressure is manageable. Late pressure is lethal. The spiral accelerates—just like the fiction demands.

---

## Death & Dying

**Death in Affinity requires BOTH resources to fail: You die when you reach 0 HD AND Collapse (failed a Resolve check at Threshold 6).**

### The Two Paths to Incapacitation

**1. Collapse (Failed at Resolve Threshold 6, but HD > 0)**
- You fall unconscious immediately
- **You are NOT dying**—your body has vitality but your will has broken
- You remain unconscious for **0-2 days** (GM's discretion based on narrative context)
- While unconscious:
  - Cannot take actions
  - Do not make Resolve checks
  - Are at the mercy of your environment (allies must protect you, enemies may capture you)
- **Recovery:** When you regain consciousness (after 0-2 days or if allies lower your Resolve Threshold through abilities):
  - Resolve Threshold resets to 6 (Cracking—barely functional)
  - Resume normal play
  - Suffer narrative consequences (lost time, vulnerability, psychological impact)

**Example: The Broken Warrior**
```
Combatant at 8 HD, Resolve Threshold 6 (Cracking)
- Enemy uses Power Word: Despair (forces Resolve check)
- Combatant rolls 3 (below 6 — Collapse!)
- Falls unconscious with 8 HD remaining
- NOT dying, but incapacitated
- Allies must protect them or retreat
- Will wake in 0-2 days at Resolve Threshold 6
```

**2. Dying (0 HD, but not yet Collapsed)**
- When you reach 0 HD, you immediately make a **Resolve check** (roll 1d6 against your current Resolve Threshold)
- You are still conscious but **limited to 1 action per turn** (body is breaking)
- You remain in the scene but **cannot take further HD damage**
- Each time you are hit while at 0 HD, make another Resolve check
- Make a Resolve check at the end of each round using your current Resolve Threshold:
  - **Roll below your Resolve Threshold:** Threshold increases by 1 (spiral tightens)
  - **Roll at or above your Resolve Threshold:** Hold (buying time)
- **If you Collapse while at 0 HD (fail at Threshold 6): YOU DIE**
- **If healed above 0 HD:** Stop making Resolve checks, regain 2 actions per turn
- Allies can stabilize you or heal you to prevent death

**Dying Checks and the Escalating Spiral:**
A character who drops to 0 HD while still at Resolve Threshold 2 has excellent survival odds—they need to fail FIVE consecutive checks, each getting harder. A character who's been spiraling all fight and drops to 0 HD at Threshold 5 is nearly dead already—two failures and it's over.

**Example: The Bleeding Hero**
```
Priest at 0 HD, Resolve Threshold 3 (Pressured)
- Resolve check: Rolls 2 (below 3 — Threshold advances to 4)
- Next round: Rolls 5 (at or above 4 — holds at Threshold 4!)
- Next round: Rolls 4 (at or above 4 — holds again!)
- Combatant drags Priest to safety
- Weaver casts healing spell: Priest regains 2 HD → conscious at 2 HD, Threshold 4
```

**3. Death (0 HD AND Collapsed)**
- You have failed in body and spirit
- You die
- Resurrection may be possible through powerful magic (Legendary tier Divine spells)
- Narrative consequences: Death is significant in Aeralon

### Stabilizing the Dying

Allies can help stabilize dying characters:

**Stabilize Action** (Basic, 2+)
- **Range:** Touch
- **Required:** 1 success
- **Effect:** Target automatically passes their next Resolve check this round (no roll needed)
- **Does NOT restore HD or lower Resolve Threshold**—only prevents immediate spiral advancement
- **Usable by:** Any character (Medicine domain abilities grant bonus dice)

**Healing While Dying:**
- Any HD restoration brings a character above 0 HD → stops Resolve checks, regains consciousness
- Rush can be used while conscious and at 0 HD (if you have not yet Collapsed)
- Healing spells, potions, class abilities all work normally

### Why Resolve is Critical

**Resolve is the true survival stat:**
- You can have 15 HD but Collapse → unconscious for days
- You can have 0 HD but Resolve Threshold 2 → five chances to hold before death
- Resolve Threshold escalation cascades penalties (harder actions, weaker defense)
- Managing your Resolve Threshold is more important than managing HD

**This creates dramatic tension:**
- Warriors who push too hard collapse despite having HD remaining
- Dying heroes with low Resolve Thresholds have real chances to survive
- Social combat can incapacitate without killing
- The spiral accelerates—early pressure barely registers, late pressure is lethal

### Preventing Collapse

Some class abilities and features protect or lower Resolve Thresholds:
- **Priests:** Power Words can lower allies' Resolve Thresholds
- **Sovereigns:** Leadership abilities may lower Resolve Thresholds
- **Shamans:** Spirit channeling may stabilize Resolve
- **Healing Spells with "Restore" keyword:** Explicitly lower Resolve Thresholds
- **Rest & Recover:** Natural Resolve restoration (see Rest & Recovery section)

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

Affinity Dice are bonus d6s earned by embodying your chosen virtue.

**Gaining Affinity Dice:**
- When you embody your Affinity (GM judges), gain 1 Affinity Die
- Maximum: You may gain Affinity Dice up to **Proficiency times per day**
- Example: Proficiency 3 = max 3 Affinity Dice gained per day

**Storing Affinity Dice:**
- You may store up to **Level** Affinity Dice at once
- Example: Level 5 = store max 5 Affinity Dice
- Unused Affinity Dice do NOT expire (persist until spent)

**Spending Affinity Dice:**
- On any roll, you may add stored Affinity Dice as bonus dice
- **Affinity Dice are SAFE bonus dice:**
  - 1s rolled on Affinity Dice do NOT burn HD
  - They do NOT count toward your per-action exertion cap
- You may spend multiple Affinity Dice on one roll (up to your stored pool)

**Sharing Affinity Dice:**
- As a **free action** on your turn, transfer any number of stored Affinity Dice to an ally within 30 yards
- That ally adds them to their stored pool (respecting their Level cap)
- Shared Affinity Dice follow the same spending rules
- "Our purpose is shared."

**Tracking:**
Use tokens, marks, or dice to track stored Affinity Dice between sessions.

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

### Damage Resolution

**Damage is flat.** Each weapon, spell, or ability lists its damage. Meet the required successes = deal the listed damage.

**Extra successes** trigger ability-specific effects defined by the weapon property or spell scaling line — not generic +1 per success.

*This keeps combat fast. Roll, count, hit or miss, apply listed damage. No per-attack subtraction or capping math.*

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

**When you defend, you roll: your Proficiency**

Using your current Hit Dice types:

| Proficiency | Defense Dice |
|-------------|--------------|
| 1 | 1 die |
| 2 | 2 dice |
| 3 | 3 dice |
| 4 | 4 dice |
| 5 | 5 dice |

**Example:**
- Level 5 Combatant (Proficiency 3) → Roll 3d10 on defense
- Level 5 Weaver (Proficiency 3) → Roll 3d6 on defense

### Defense Resolution

1. **Attacker declares damage** (after their successful attack)
2. **Defender rolls Proficiency defense dice** using their HD type
3. **Each 5+ rolled cancels 1 incoming HD damage**
4. **No exertion allowed on defense** (defense is pure resilience)
5. **Apply remaining damage** to defender's HD pool

**Defense Dice Minimum:** You always roll at least 1 defense die.

### Armor, Spells, and Temporary HD

**Armor and magic do not change how many dice you roll.**

**They change *which* dice get rolled first.**

**Damage Attrition Order:**

When you take HD damage, it's applied in this specific order:

1. **Spell-like Armor** (temporary effects from class abilities like Shield, Barrier, etc.)
2. **Physical Armor** (equipped armor temporary HD: 2d6s/2d8s/2d10s)
3. **Temporary HD** (other sources: spells, shields, magical effects)
4. **Permanent HD** (your class HD pool)

Each die is rolled using **its own size:**
- d10 armor rolls d10
- d8 shield spell rolls d8
- d6 body rolls d6

**Each 5+ cancels 1 incoming damage, regardless of die size.**

*Note: Unlike attack rolls, explosive dice (6/8/10/12 = 2 successes) do NOT apply to defense rolls. Highest possible rolls count as only 1 success.*

**If a die is lost (rolled under 5):**
- Layers are depleted in order (spell effects → armor → temp HD → permanent HD)
- Permanent HD are lost only after all protective layers are gone

**This makes armor feel like armor.** You burn through protective layers before your body takes the hit.

### Armor Types

Armor provides **defense dice** rolled as your outer layer during defense:

- **Light Armor:** 2d6s defense layer
- **Medium Armor:** 2d8s defense layer  
- **Heavy Armor:** 2d10s defense layer
- **Shield:** +1d12 to defense layer

**Example Defense with Armor:**

Level 5 Combatant (d10 HD, Proficiency 3, wearing Heavy Armor 2d10s + Shield 1d12):
- Takes 4 damage
- Defense capacity: 3 dice (Prof 3)
- Roll 3d10 for armor layer → Results: 7, 3, 5
- Successes: 2 (the 7 and 5 roll 5+)
- Canceled: 2 damage, 2 damage remains
- **Armor layer depletes** (destroyed until repaired/rest)
- Roll 3d10 for permanent HD → Results: 8, 4, 6
- Successes: 2 (the 8 and 6)
- Canceled: 2 damage, 0 damage remains
- **No permanent HD lost** (all damage absorbed)

*Note: The shield's +1d12 is part of the armor layer—once that layer depletes, both armor and shield are unavailable until restored.*

**Restoring Armor:**
- **Recover (6+ hours, safe):** Armor layer fully restored
- **Rest with Craft/Mend abilities:** Can restore armor layer
- Without repair abilities: Armor stays depleted until Recover

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
- Regular healing does NOT lower Resolve Threshold

### Lowering Resolve Threshold

**Most healing does NOT lower Resolve Threshold.**

Only abilities with the **"Restore" keyword** can lower your Resolve Threshold:
- These abilities/spells lower your Resolve Threshold by a specified amount
- They specify how many stages they restore ("Restore 1 Resolve" = lower Resolve Threshold by 1)
- Resolve Threshold cannot go below 2

**Resting also lowers Resolve Threshold** (see Resting section).

---

## Resting

### Short Rest (1/2 - 8 hours, threatened)
- Regain HD equal to half your level (minimum 1)
- Lower Resolve Threshold by 1 (minimum 2)
- Some class abilities recharge
- Can repair/mend armor

### Long Rest (6+ hours, protected)
- Regain all HD up to your maximum
- Reset Resolve Threshold to 2
- Regain all armor HD
- All abilities recharge

**Survival is earned through planning and safety, not convenience.**
