# Quick Reference

## Core Resolution

**All dice are d6. All rolls are dice pools.**

### Success Rules

- **at or above threshold = 1 success**
- **6 = 2 successes** (Explosive)
- **1 = burn 1 HD** (only on exertion dice)

### Action Resolution

1. Declare action and exertion (from turn budget: max = your Proficiency per action)
2. Roll Proficiency + Exertion dice
3. Count successes (5=1, 6=2)
4. Check if required successes met
5. Apply effect (Base + Bonus, bonus capped at Prof)
6. Burn HD for any 1s rolled on exertion dice

---

## Character Resources

| Level | Proficiency | Resolve |
|-------|-------------|---------|
| 1-2 | 1 | 5 |
| 3-4 | 2 | 5 |
| 5-6 | 3 | 5 |
| 7-8 | 4 | 5 |
| 9-10 | 5 | 5 |

---

## Hit Dice by Level

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

**THERE ARE NO HIT POINTS.**

**Hit Dice = Individual dice that exist or don't exist.**

**Notation:**
```
Hit Dice: 7d10 (1d10, 1d10, 1d10, 1d10, 1d10, 1d10, 1d10)
Armor: 3d8 (1d8, 1d8, 1d8)
Shield: 1d12 (1d12)

Defense Pool: [1d12] → [1d8 ×3] → [1d10 ×7]
              (shield)  (armor)     (body)
```

**Defense:**
- Roll individual dice from outermost layer
- 5+ = sustain (die survives)
- 4- = fail (die DESTROYED)
- Defense Capacity (= Proficiency) = rolls per attack
- Remaining damage = auto-lose dice

**Example:**
```
Character: 5d8 body + 2d6 armor, Defense Capacity 1
Takes 3 HD damage:

1st HD: Roll 1d6 armor → 3 ❌ (armor 2d6 → 1d6)
2nd HD: No rolls left → auto-fail (armor 1d6 → 0)
3rd HD: No rolls left → auto-fail (body 5d8 → 4d8)

Result: 4d8 body, 0 armor (3 dice destroyed)
```

**NOT "32/40 HP remaining" — you have 4 dice left, period.**

---

## Initiative

**Roll 3d6**, count successes (5+ = 1, 6 = 2). Highest acts first.

- **Can exert** on initiative (up to Proficiency) if not surprised
- **Surprised:** Cannot exert, roll at disadvantage
- **Ties:** Highest single die wins, then GM decides
- **Resolve bonus:** Gain 1 Resolve when rolling initiative (not surprised, max 5)

---

## Action Economy

**Actions Per Turn:** Up to 2 actions
- **Tier Restriction:** Only 1 may be Expert tier or higher
- Once you use Expert+ action, remaining actions must be Basic/Advanced

**Triggered Actions (Reactions):**
- Activate in response to specific triggers
- If you haven't acted yet this round, can use when trigger occurs
- Uses one of your 2 actions

**Held Actions:**
- Declare on your turn: hold action for specific trigger
- When trigger occurs: interrupt and use held action
- If no trigger by round end: may only use held actions for Basic tier (at initiative 0)

**Movement:** 10 yards base (doesn't cost action)

**Free Actions:** Drop item, speak briefly (GM discretion)

---

## Rest & Recovery

### Rest (0.5-8 hours, threatened)
- Regain **Proficiency HD**
- Regain **1 Resolve**
- Reset short rest abilities
- Armor repairable (if you have craft abilities)
- **Max 2 Rests per day**

### Recover (6+ hours, safe)
- Regain **all HD**
- Regain **all Resolve** (5)
- Restore armor layer (usable for defense again)
- Reset all abilities
- **Requires safe space** (Rangers/Priests can create safety)

---

## Universal Actions

### Rush
**Cost:** 1 Resolve (automatic, no roll)  
**Effect:** Immediately regain Proficiency HD  
**Frequency:** Resets on Rest

Trade mental fortitude for physical recovery. Use one action, lose 1 Resolve (no check), gain Proficiency HD immediately. No dice roll, no risk—pure desperation.

### Steady
**Cost:** 3 HD (automatic, no roll)  
**Effect:** Immediately gain 1 Resolve  
**Frequency:** Resets on Rest

Trade physical vitality for mental fortitude. Use one action, lose 3 HD (no check), gain 1 Resolve immediately. No dice roll, no risk—pure sacrifice. **Note:** Priests and Sovereigns have superior Resolve restoration through class abilities.

---

## Death & Dying

**You die when you reach BOTH 0 HD AND 0 Resolve.**

**Collapse (0 Resolve, HD > 0):**
- Fall unconscious for 0-2 days
- NOT dying, but incapacitated
- Wake with 1 Resolve eventually

**Dying (0 HD, Resolve > 0):**
- Make Resolve check each round  
- **4-:** Lose 1 Resolve  
- **5:** Hold current Resolve  
- **6:** Gain 1 Resolve
- If healed above 0 HD: Stop checks, regain consciousness
- If you reach 0 Resolve while at 0 HD: **Death**

**Stabilize Action (Basic 2+):**
- Touch dying ally
- Target auto-succeeds next Resolve check this round
- Buys time for healing

---

## Resolve Checks

**When Required:**
- Lose ≥ Proficiency + 1 HD in one round
- Reduced to 0 HD
- At 0 HD and take any hit
- Use maximum Exertion in one round (= Level)
- Fail an Expert+ action
- Certain enemy effects

**Max 1 check per round** (even if multiple triggers)

**Roll 1d6:**
- **4 or less:** Lose 1 Resolve
- **5:** Stay at current Resolve
- **6:** Gain 1 Resolve (max 5)

### Resolve Stage Penalties

| Resolve | Penalties |
|---------|----------|
| 5 (Full) | None |
| 4 (Pressured) | No Expert+ actions |
| 3 (Shaken) | No Expert+, -1 defense die |
| 2 (Weakened) | No Expert+, Advanced+ needs +1 success, -1 defense die |
| 1 (Staggering) | No Expert+, Advanced+ needs +1 success, -2 defense dice |
| 0 (Collapse) | Unconscious (dying if 0 HD) |

**Note:** Rush action bypasses this roll (voluntary loss)

---

## Affinity Dice

**Gaining:** When you embody your virtue (GM judges), gain 1 Affinity Die
- Max gained per day: **Proficiency**

**Storing:** Max stored: **Level**
- Don't expire until spent

**Spending:** Add to any roll
- SAFE bonus dice — 1s do NOT burn HD
- Do NOT count toward per-action exertion cap

**Sharing:** Free action, transfer any number to ally within 30 yards

---

## The Eight Skills

**Skills are context domains—they don't grant dice themselves.**

| Skill | When This Domain Applies |
|-------|-------------------------|
| **Agility** | Precision movement, stealth, dexterous manipulation |
| **Awareness** | Sensing, insight, investigation |
| **Fortitude** | Physical resistance, holding out, resilience |
| **Wilderness** | Tracking, navigation, animals, foraging |
| **Influence** | Persuasion, deception, intimidation |
| **Lore** | History, arcana, religion, theory |
| **Medicine** | Healing, anatomy, diagnosis |
| **Craft** | Making, repairing, engineering |

**How They Work:**
- GM identifies which skill domain applies to a challenge
- Players with **class abilities, feats, or features** that apply to that domain gain bonus dice
- Bonus dice from abilities do NOT burn HD on 1s (like proficiency dice—they represent trained reliability)
- Any character can attempt any roll, but abilities give advantages in specific domains

**Group Rolls (Default for Skill Challenges):**
- Everyone rolls, successes are pooled
- Scale required successes by group size (see GM Guide)
- The party wins or fails together — no "skill monkeys"

**Resolution Modes:**
- **Contest Mode:** Combat, duels, social conflict (extra successes = more impact)
- **Threshold Mode:** Travel, crafting, investigation (extra successes = quality/speed)

---

## Action Tiers
*base impacts and outcomes need work, this may be over generalized but a good starting point*

| Tier | Threshold | Required | Base Impact | Examples |
|------|-----------|----------|-------------|----------|
| **Basic** | 2+ | 1 | 1 HD | All weapons, cantrips |
| **Advanced** | 3+ | 2 | 2 HD | Class abilities, spells |
| **Expert** | 4+ | 3 | 3 HD | Powerful techniques |
| **Legendary** | 5+ | 3 | 4 HD | Epic abilities |
| **Ultimate** | 6 only | 4 | 5 HD | Reality-warping |

---

## Combat Quick Reference

### Your Turn
- **Movement:** 10 yards base (doesn't cost an action; some classes/paths/abilities grant additional movement)
- **Actions:** Up to 2 standard actions (player characters; NPCs vary)
- **Exertion per Action:** Each action has independent Proficiency exertion pool
  - Max exertion per action = Proficiency
  - Max exertion per turn = Proficiency × 2 (if taking 2 actions)
  - Unused exertion does NOT carry between actions
- **Free Actions:** Drop item, speak briefly (GM discretion)

### Defense Rolls

**Defense Capacity = Proficiency**

| Level | Prof | Defense Rolls Per Attack |
|-------|------|-------------------------|
| 1-2 | 1 | 1 roll |
| 3-4 | 2 | 2 rolls |
| 5-6 | 3 | 3 rolls |
| 7-8 | 4 | 4 rolls |
| 9-10 | 5-6 | 5-6 rolls |

**CRITICAL: Defense = Armor = Hit Dice. Same resource pool.**

**Layered Hit Dice (outermost to innermost):**
1. Magical barriers (d12 Hit Dice) — outermost
2. Armor (d6/d8/d10 Hit Dice) — middle
3. Body (d6/d8/d10 Hit Dice) — innermost

**Defense Roll Rules (per attack taken):**
- Each attack gives you fresh Defense Capacity rolls
- Damage resolved **one HD at a time**
- For each HD of damage: either **roll one die** (if rolls remain) or **auto-fail** (if capacity exhausted)
- Roll die type matching outermost layer (d12 barrier → d10/d8/d6 armor → d10/d8/d6 body)
- **5+ = Sustain** (that Hit Die survives, 1 damage cancelled)
- **4- = Fail** (lose one die from that layer)
- When layer depletes (all dice gone), move to next layer inward
- **No explosive dice on defense** (6s, 8s, 10s, 12s = 1 success only)
- **No exertion, no Affinity Dice allowed**

**Example:** Take 3 HD damage with Defense Capacity 1. Roll 1st HD (use your 1 roll), auto-fail 2nd HD (no rolls left), auto-fail 3rd HD (no rolls left). Result: lose 2-3 armor dice.

**Success Rates by Die Type:**
- d6: 33% per die | d8: 38% per die | d10: 40% per die | d12: 50% per die

**Defend Action:** Gain +2d6 bonus defense dice until your next turn

---

## Weapon Properties & Armor

**Armor:**
- **Light:** 2d6 temp HD
- **Medium:** 2d8 temp HD
- **Heavy:** 2d10 temp HD

---

## Resolve

**Player Character Resolve = 5** *(constant for all levels)*  
**NPC Resolve = Varies** *(typically equals Proficiency, but can be higher or lower)*

### Gain 1 Resolve when:
- You roll initiative (and are not surprised) in any encounter (max 5)

### Lose 1 Resolve when:
- You lost HD this round
- You used maximum exertion this round
- You failed an Expert+ action

### At 0 Resolve:
- Cannot initiate Expert+ actions

### At -1 Resolve:
- You must retreat, collapse, surrender, or panic, or disadvantage and extra severe penalties

### Social Encounters:
- Characters with Resolve below 2 cannot participate in social encounters

---

*May your dice roll high and your adventures be legendary.*
