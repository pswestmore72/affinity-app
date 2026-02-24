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
- "A Level 3 Combatant has 7d10 Hit Dice."
- "I roll 7d10 and get 48, so I have 48 hit points."
- "I take 5 damage, now I have 43/48 HP."

**CORRECT (Affinity):**
- "A Level 3 Combatant has 7d10 Hit Dice."
- "That means I have SEVEN INDIVIDUAL d10 DICE in my body pool."
- "When I take damage, I lose DICE from my pool, one at a time."
- "7d10 → take 3 HD damage → might become 4d10 (lost 3 individual dice)."

**Character Sheet Notation:**
```
Hit Dice: 7d10 (1d10, 1d10, 1d10, 1d10, 1d10, 1d10, 1d10)
Armor: 3d8 (1d8, 1d8, 1d8)
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
Character: 5d10 body + 2d8 armor (two separate dice)
Defense Capacity: 2 (Proficiency 2)
Incoming: 4 HD damage

1st HD: Roll 1d8 (armor) → 6 ✅ Sustain (armor still 2d8)
2nd HD: Roll 1d8 (armor) → 3 ❌ Fail (armor becomes 1d8)
3rd HD: No rolls left → Auto-fail (armor becomes 0, lose 1 body die: 5d10 → 4d10)
4th HD: No rolls left → Auto-fail (lose 1 body die: 4d10 → 3d10)

Final Status: 3d10 body + 0 armor
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
- Regain **1 Resolve** (up to maximum of 5)
- Reset **short rest abilities** (War Cries, Power Words, etc.)
- **Armor repair:** If you have class abilities that allow mending/repair/craft, you may restore your armor layer (making it usable for defense again)

**Frequency:**
- Maximum **2 Rests per day** (24-hour period)
- Resting while under threat means limited recovery

**Example:**
Level 5 Combatant (Proficiency 3, at 2 HD / 11 max, 3 Resolve)
- Takes a Rest in the dungeon (threatened space)
- Regains 3 HD (2 → 5 HD), regains 1 Resolve (3 → 4 Resolve)
- Short rest abilities reset (War Cries available again)

---

### Recover (Long Rest, 6+ hours while protected)

**Requirements:**
- Minimum 6 hours of uninterrupted rest
- Must be in a **safe space** (inn, guarded camp, sanctified area)
- Some class abilities can make threatened spaces "safe" (Ranger's wilderness sanctuaries, Priest's sanctified ground)

**Benefits:**
- Regain **all HD** (back to maximum)
- Regain **all Resolve** (back to 5)
- **Armor dice reset:** Re-roll all armor temp HD when donning armor
- Reset **all abilities** (daily powers, once-per-long-rest features)

**Frequency:**
- Can only occur in **safe spaces**
- Typically once per day (but narrative context determines safety)

**Example:**
Level 5 Combatant (Proficiency 3, at 5 HD / 11 max, 4 Resolve)
- Returns to town inn, sleeps 8 hours (safe space)
- Regains all HD (5 → 11 HD), regains all Resolve (4 → 5 Resolve)
- Re-rolls armor when donning (Medium Armor 2d8 → rolls 6+5 = 11 temp HD)
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

### Damage Calculation

**Base Damage:** Determined by weapon, spell, or ability

**Bonus Damage:** Each success beyond the required amount adds +1 HD damage

**Bonus Damage Cap:** Bonus damage from extra successes is capped at your **Proficiency** score
- This prevents exponential scaling at high levels
- Base damage is never capped (only bonus from extra successes)

**Example:**
Combatant (Proficiency 3) attacks with heavy weapon (2 HD base, requires 2 successes).
- Rolls 8 successes (6 extra)
- Base: 2 HD
- Bonus: 6 extra successes, but capped at Proficiency 3 = +3 HD
- **Total: 5 HD damage**

---

## Concentration & Maintaining Effects

Some abilities require ongoing focus to maintain their effects—portals held open, transformations sustained, wards kept active. These abilities specify "Concentration Required" or describe a maintained effect with duration.

**Maintaining Rule:**

While maintaining an effect:
- If you must make a Resolve check for any reason, and you lose Resolve (roll 1-4) → the effect ends immediately
- Rolling 5 (hold current Resolve) or 6 (gain Resolve) maintains the effect
- You cannot maintain multiple concentration effects simultaneously (starting a new one ends the previous)
- The effect ends if you are knocked unconscious or die

**Why This Matters:**
Concentration makes powerful sustained abilities vulnerable to pressure. A Shaman holding a threshold portal must remain mentally intact—losing Resolve collapses the gateway. Rolling a 5 on a Resolve check (holding steady under strain) is enough to maintain the effect. This creates tactical decisions: do you maintain the powerful effect, or can you risk the mental strain?

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
- **Restriction:** If Action 1 is Expert tier or higher, Action 2 must be Basic or Advanced tier

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

**Social Duels** are rhetorical combat—debates, negotiations, interrogations, and battles of will. They use the same core mechanics as physical combat but target **Composure** and **Resolve** instead of armor and HD.

---

### Social Resources

**Composure** is your social armor—prepared arguments, emotional equilibrium, and reputation.

**Base Composure:** 1 + Proficiency dice at d6
- Level 1-2: 2d6 | Level 3-4: 3d6 | Level 5-6: 4d6 | Level 7-8: 5d6 | Level 9-10: 6d6

| Composure Type | Die Size | Source Examples |
|----------------|----------|-----------------|
| **Common** | d6 | Default for most characters |
| **Practiced** | d8 | Silver Tongue path, court experience |
| **Masterful** | d10 | Sovereign class feature, legendary reputation |

**Resolve** functions exactly as in physical combat. When Resolve hits 0, you concede or break.

---

### Social Defense

When you take social damage, defend with Composure dice—exactly like armor.

1. Roll Composure dice (up to Proficiency per attack)
2. Each **5+ cancels 1 damage** and the die survives
3. Each **4 or less** destroys that die (damage not canceled)
4. Remaining damage auto-destroys Composure dice
5. When Composure = 0, damage targets Resolve directly

```
Incoming Social Damage
        ↓
[Composure Dice] ← Roll to defend; failed dice are DESTROYED
        ↓
[Resolve] ← When Composure gone, damages will directly
        ↓
[Social Defeat] ← When Resolve = 0
```

---

### The Three Stances

Each round, declare your **Stance**—your rhetorical approach.

| Stance | Domain | Effect |
|--------|--------|--------|
| **Assert** | Influence | +1 damage if you win; -1 when defending |
| **Reason** | Lore | No bonus damage, but gain Preparation dice (see below) |
| **Discern** | Awareness | See opponent's Composure; roll 1 fewer die |

Simply resolve: highest successes wins, margin = damage.

---

### Preparation

**Preparation** replaces mid-duel resource tracking. Before a social duel begins:

**Pre-Duel Research:** For each hour spent researching your opponent (max 3 hours), gain **+1d6 Preparation dice** for the duel. These don't burn HD on 1s.

**Reason Stance Benefit:** If you win a round while using Reason, gain +1d6 Preparation dice for next round instead of dealing damage.

---

### Round Structure

**1. Declare Stances** (simultaneously or in initiative order)

**2. Roll** (Proficiency + Exertion + Preparation + class bonuses)
- **Base Threshold: Advanced (3+)**
- 6s explode (2 successes)
- 1s on exertion dice burn HD

**Threshold Modifiers (GM applies):**

| Condition | Shift |
|-----------|-------|
| Hard Evidence | -1 step (to Basic 2+) |
| Contradicted by Evidence | +1 step (to Expert 4+) |
| Hostile/Sympathetic Audience | ±1d6 |
| Home Ground | +1 Composure die at start |

**Class Bonuses:** Each class has social strengths—see class entries. Examples:
- **Sovereign:** Assert at 2+ threshold, d8 Composure
- **Scholar:** Reason at 2+ threshold, evidence grants +1d6
- **Combatant:** +1 damage on Assert, defend on 4+

**3. Compare Successes** — Higher wins; ties build tension

**4. Calculate Damage** — Margin + stance bonus (capped at Proficiency)

**5. Apply Damage** — Composure first, then Resolve

---

### Support Roles

Allies take meaningful roles with real risk.

| Role | Effect | Risk |
|------|--------|------|
| **Champion** | Intercept social damage targeting speaker | You're now in the duel |
| **Counsel** | Roll Awareness (3+); each success restores 1 Composure die | If you roll any 1s, destroy 1 speaker's Composure die |

---

### Tiered Stakes

| Damage State | Consequence |
|--------------|-------------|
| **Composure depleted** | **Minor Concession** — Give ground on one point |
| **1-2 Resolve lost** | **Major Concession** — Lose something significant |
| **3+ Resolve lost** | **Total Defeat** — Concede all stakes |
| **0 Resolve** | **Broken** — Accept any demand |

**Withdraw:** At any point, leave the duel. You lose at current stake tier, but on your terms.

---

### Recovery

- **Short Rest:** Restore all Composure; Resolve as normal
- **Long Rest:** Full restoration
- Composure resets fresh each social encounter

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
- You use maximum Exertion in a single round (equal to your Proficiency)
- You fail an Expert+ action
- Certain enemy effects force a check

**Maximum of 1 Resolve check per round** (even if multiple triggers occur).

**Resolve Check:** Roll 1d6.
- **4 or less →** You lose 1 Resolve (fall one stage)
- **5 →** You hold your current Resolve level (no change)
- **6 →** You gain 1 Resolve (rally—advance one stage, maximum 5)

**Special: Rush and Steady Actions Bypass Check**  
When you use the Rush action or Steady action (see Universal Actions in Combat Rules), you choose to lose Resolve (Rush) or HD (Steady) without rolling. These voluntary sacrifices do not trigger additional Resolve checks.

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
- Roll one fewer defense die (minimum 1)
- Vulnerability sets in—you can still act, but defense falters

**Resolve 2 — Weakened**
- Cannot initiate Expert+ actions  
- Advanced+ actions require +1 additional success
- Roll one fewer defense die (minimum 1)
- Offense and defense both crumble

**Resolve 1 — Staggering**
- Cannot initiate Expert+ actions
- Advanced+ actions require +1 additional success
- Roll two fewer defense dice (minimum 1)
- This is the "you should be running" stage

**Resolve 0 — Collapse**
- **You fall unconscious immediately**
- **If you have HD > 0:** You are NOT dying, but collapsed (unconscious 0-2 days, see Death & Dying)
- **If you have HD = 0:** You ARE dying (make Resolve checks each round until healed or dead, see Death & Dying)
- **You only die when you reach BOTH 0 HD AND 0 Resolve**

**Note:** Defense dice reduction cannot go below 1 die (you always roll at least 1 defense die).

### Recovering Resolve

- **Steady action** (Universal): Lose 3 HD → Gain 1 Resolve (see Combat Rules)
- Healing spells with "Restore" keyword can restore Resolve stages
- **Priest and Sovereign class abilities** are superior at restoring/protecting Resolve (better efficiency, can affect others)
- Most regular healing does NOT restore Resolve (only HD)
- **Short Rest:** Restore Resolve up to half your maximum (3 Resolve)
- **Long Rest:** Fully restore to 5 Resolve

**Resolve is a death spiral that ensures fights end decisively.**

---

## Death & Dying

**Death in Affinity requires BOTH resources to fail: You die when you reach 0 HD AND 0 Resolve simultaneously.**

### The Two Paths to Incapacitation

**1. Collapse (0 Resolve, but HD > 0)**
- You fall unconscious immediately
- **You are NOT dying**—your body has vitality but your will has broken
- You remain unconscious for **0-2 days** (GM's discretion based on narrative context)
- While unconscious:
  - Cannot take actions
  - Do not make Resolve checks
  - Are at the mercy of your environment (allies must protect you, enemies may capture you)
- **Recovery:** When you regain consciousness (after 0-2 days or if allies restore your Resolve through abilities):
  - Regain 1 Resolve automatically
  - Resume normal play
  - Suffer narrative consequences (lost time, vulnerability, psychological impact)

**Example: The Broken Warrior**
```
Combatant at 8 HD, 1 Resolve
- Enemy uses Power Word: Despair (forces Resolve check)
- Combatant rolls 3 (loses 1 Resolve → 0 Resolve)
- Falls unconscious with 8 HD remaining
- NOT dying, but incapacitated
- Allies must protect them or retreat
- Will wake in 0-2 days with 1 Resolve
```

**2. Dying (0 HD, but Resolve > 0)**
- You fall unconscious immediately
- **You ARE dying**—your body has failed but your will persists
- Make a Resolve check at the end of each round:
  - **4 or less:** Lose 1 Resolve (death spiral accelerates)
  - **5:** Hold current Resolve (buying time)
  - **6:** Gain 1 Resolve (rallying from the brink)
- **If you reach 0 Resolve while at 0 HD: YOU DIE**
- **If healed above 0 HD:** Stop making Resolve checks, regain consciousness
- Allies can stabilize you or heal you to prevent death

**Example: The Bleeding Hero**
```
Priest at 0 HD, 3 Resolve
- Enemy strikes, triggering Resolve check
- Priest rolls 4 (loses 1 Resolve → 2 Resolve)
- Next round: Rolls 6 (gains 1 Resolve → 3 Resolve, still alive!)
- Combatant uses Rush to heal themselves, then drags Priest to safety
- Weaver casts healing spell: Priest regains 2 HD → 2 HD, 3 Resolve
- Priest regains consciousness, continues fighting
```

**3. Death (0 HD AND 0 Resolve)**
- You have failed in body and spirit
- You die
- Resurrection may be possible through powerful magic (Legendary/Ultimate tier Divine spells)
- Narrative consequences: Death is significant in Aeralon

### Stabilizing the Dying

Allies can help stabilize dying characters:

**Stabilize Action** (Basic, 2+)
- **Range:** Touch
- **Required:** 1 success
- **Effect:** Target automatically succeeds on their next Resolve check this round (counts as rolling a 5)
- **Does NOT restore HD or Resolve**—only prevents immediate death spiral
- **Usable by:** Any character (Medicine domain abilities grant bonus dice)

**Healing While Dying:**
- Any HD restoration brings a character above 0 HD → stops Resolve checks, regains consciousness
- Rush can be used while conscious and at 0 HD (if you have Resolve remaining)
- Healing spells, potions, class abilities all work normally

### Why Resolve is Critical

**Resolve is the true survival stat:**
- You can have 15 HD but 0 Resolve → collapse (unconscious for days)
- You can have 0 HD but 5 Resolve → multiple chances to rally before death
- Resolve loss cascades penalties (harder actions, weaker defense)
- Managing Resolve is more important than managing HD

**This creates dramatic tension:**
- Warriors who push too hard collapse despite having HP
- Dying heroes with strong will can rally from the brink
- Social combat can incapacitate without killing
- Resolve damage is as dangerous as HP damage

### Preventing Collapse

Some class abilities and features protect or restore Resolve:
- **Priests:** Power Words can restore Resolve to allies
- **Sovereigns:** Leadership abilities may grant Resolve
- **Shamans:** Spirit channeling may stabilize Resolve
- **Healing Spells with "Restore" keyword:** Explicitly restore Resolve stages
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

### Damage Calculation Formula

**Final Damage = Base Damage + Bonus Damage (capped at Proficiency)**

- **Base Damage:** Determined by weapon, spell, or ability (never capped)
- **Bonus Damage:** Each success beyond required adds +1 HD damage (capped at Proficiency)

*This prevents low-tier actions with massive exertion from creating wild power spikes at high levels while preserving meaningful scaling through character growth. A Level 10 character (Proficiency 5) cannot add more than +5 HD bonus damage from extra successes, regardless of how many dice they roll.*

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

*Note: Unlike attack rolls, explosive dice (6/8/10/12 = 2 successes) do NOT apply to defense rolls. Highest possible rolls count as only 1 success.*

**If a die is lost (rolled under 5):**
- Layers are depleted in order (spell effects → armor → temp HD → permanent HD)
- Permanent HD are lost only after all protective layers are gone

**This makes armor feel like armor.** You burn through protective layers before your body takes the hit.

### Armor Types

Armor provides **defense dice** rolled as your outer layer during defense:

- **Light Armor:** 2d6 defense layer
- **Medium Armor:** 2d8 defense layer  
- **Heavy Armor:** 2d10 defense layer
- **Shield:** +1d12 to defense layer

**Example Defense with Armor:**

Level 5 Combatant (d10 HD, Proficiency 3, wearing Heavy Armor 2d10 + Shield 1d12):
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
