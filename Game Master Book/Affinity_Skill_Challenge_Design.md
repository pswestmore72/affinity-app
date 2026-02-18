# Skill Challenge Design
## The Complete Reference for Setting Difficulty

*This document defines the mathematics and design philosophy behind skill challenges in Affinity.*

---

## The Two-Axis Difficulty System

Skill challenges in Affinity have **two independent difficulty axes**:

| Axis | What It Represents | Range |
|------|-------------------|-------|
| **Pip Threshold** | How hard is each die to convert to a success? | 2+, 3+, 4+, 5+, 6 only |
| **Success Count** | How much collective effort is needed? | 1+ (scales with context) |

These axes are **independent**. You can have:
- Easy pip threshold (2+) with high success count = "Anyone can help, but we need a lot of effort"
- Hard pip threshold (5+) with low success count = "Only skilled attempts matter, but one good roll does it"
- Any combination in between

---

## Core Math: Expected Successes Per Die

**Rule: A 6 always counts as 2 successes, regardless of pip threshold.**

| Threshold | Chance of 1 Success | Chance of 2 (on 6) | Expected Successes/Die |
|-----------|--------------------|--------------------|------------------------|
| **2+** | 4/6 (67%) | 1/6 (17%) | **1.00** |
| **3+** | 3/6 (50%) | 1/6 (17%) | **0.83** |
| **4+** | 2/6 (33%) | 1/6 (17%) | **0.67** |
| **5+** | 1/6 (17%) | 1/6 (17%) | **0.50** |
| **6 only** | 0% | 1/6 (17%) | **0.33** |

**Interpretation:**
- At **2+**, every die produces ~1 success on average
- At **5+** (standard), you need about 2 dice per success
- At **6 only**, you need about 3 dice per success

---

## The Master Matrix

**No math required.** Find your dice pool, pick a difficulty row, read the (pip threshold, success target) tuple.

**Dice Pool = Players × Proficiency** (add domain bonuses if relevant)

*Values sorted easiest (top) to hardest (bottom). Pick any tuple in your pool column.*

```
                       DICE POOL (Players × Proficiency) →
           │   3       4       5       6       8      10      12      15+   
___________________________________________________________________________
  EASY     │ (2+,2)  (3+,2)  (4+,2)  (5+,2)  (5+,3)  (5+,4)  (5+,4)  (5+,6)
           │ (3+,2)  (4+,2)  (5+,2)  (4+,3)  (4+,4)  (4+,5)  (4+,6)  (4+,8)
           │ (4+,2)  (5+,2)  (3+,3)  (2+,4)  (3+,5)  (3+,6)  (3+,9)  (3+,9)
           │ (5+,2)  (5+,2)  (6,2)   (6,2)   (6,2)   (6,4)   (6,4)   (6,6) 
           │ (6,2)   (4+,3)  (4+,3)  (5+,3)  (5+,4)  (5+,5)  (5+,6)  (5+,8) 
           │ (3+,3)  (4+,3)  (5+,3)  (4+,4)  (4+,5)  (4+,7)  (4+,8)  (4+,10)
           │ (4+,3)  (4+,4)  (4+,4)  (4+,4)  (4+,5)  (4+,7)  (4+,8)  (4+,10)
           │ -----   (6,2)   (6,2)   (6,2)   (6,4)   (5+,6)  (5+,7)  (6,6) 
           │ -----   (5+,3)  (5+,3)  (5+,4)  (5+,5)  (5+,6)  (5+,8)  (5+,9) 
           │ -----   (5+,3)  (5+,3)  (6,4)   (4+,6)  (4+,8)  (4+,10) (4+,13)
           │ -----   -----   (6,4)   (6,4)   (6,6)   (6,6)   (6,6)   (6,8) 
           │ -----   -----   -----   (5+,5)  (5+,6)  (5+,8)  (6,6)   (5+,11)
  IMPOSS.  │ -----   -----   -----   -----   (6,8)   (6,8)   (6,8)   (6,10)
```

### How to Use

1. **Calculate dice pool:** Players × Proficiency (e.g., 4 players × Prof 2 = 8 dice)
2. **Find your column** (round to nearest if between values)
3. **Pick a tuple** from top (easiest) to bottom (hardest)
4. **Read the tuple:** (pip threshold, success target) — that's your challenge!

### Pip Threshold Flavor Guide

Pick based on the *nature* of the task:

| Pip | When to Use | Flavor |
|-----|-------------|--------|
| **2+** | Anyone can help, lots of small contributions | Hauling, searching, group intimidation |
| **3+** | Moderate skill helps | Climbing, basic tracking, social pressure |
| **4+** | Training matters | Picking locks, medical care, crafting |
| **5+** | Expertise required | Arcane research, surgery, masterwork |
| **6** | Only perfection counts | Threading a needle, one-shot deception |

### Quick Reference: Common Party Pools

| Players | Prof 1 | Prof 2 | Prof 3 | Prof 4 | Prof 5 |
|---------|--------|--------|--------|--------|--------|
| **3** | 3 | 6 | 9 | 12 | 15 |
| **4** | 4 | 8 | 12 | 16 | 20 |
| **5** | 5 | 10 | 15 | 20 | 25 |
| **6** | 6 | 12 | 18 | 24 | 30 |

---

## Quick Reference: The Formula (Optional)

If you need values outside the matrix:

**Expected Successes = Dice Pool × Multiplier**

| Threshold | Multiplier |
|-----------|------------|
| 2+ | 1.00 |
| 3+ | 0.83 |
| 4+ | 0.67 |
| 5+ | 0.50 |
| 6 | 0.33 |

**Difficulty Ratios:**
- EASY: Target = 75% of expected
- MEDIUM: Target = 100% of expected  
- HARD: Target = 125% of expected
- V.HARD: Target = 150% of expected
- IMPOSSIBLE: Target = 200% of expected

---

## Choosing Which Axis to Adjust

**Raise Pip Threshold (harder individual dice) when:**
- The task requires specialized knowledge or training
- Untrained attempts are unlikely to help
- You want to reward domain bonuses more

**Raise Success Count (more collective effort) when:**
- The task is large-scale or time-consuming
- Many hands make light work
- You want to encourage group participation

**Lower Both when:**
- The task is routine for capable adventurers
- You want to move quickly past the challenge

**Raise Both when:**
- The task is both specialized AND massive
- This should be rare — represents legendary challenges

---

## Mixing Thresholds in Multi-Phase Challenges

Some challenges have multiple stages with different thresholds:

**Example: Infiltrating a Fortress**

| Phase | Domain | Threshold | Target | Rationale |
|-------|--------|-----------|--------|-----------|
| Scout perimeter | Awareness | 3+ | 4 | Moderate attention needed |
| Scale walls | Agility | 4+ | 3 | Skilled climbing required |
| Avoid patrols | Agility | 5+ | 2 | Precision stealth |
| Disable alarm | Craft | 4+ | 3 | Technical work |

Each phase is a separate group roll. Failure on any phase triggers consequences (alarms, combat, harder next phase).

---

## Domain Bonuses and Their Impact

Characters may have domain bonuses (+1 to +3 dice in specific domains).

**Effect on Expected Successes:**

| Bonus | Extra Expected (5+) | Extra Expected (4+) | Extra Expected (3+) |
|-------|--------------------|--------------------|---------------------|
| +1 | +0.5 | +0.67 | +0.83 |
| +2 | +1.0 | +1.33 | +1.67 |
| +3 | +1.5 | +2.0 | +2.5 |

**Design Consideration:** If 2+ players have domain bonuses, you can set slightly higher targets to account for their advantage without making the roll trivial.

---

## Exertion's Role in Skill Challenges

Players can exert (burn HD) to add dice. At Prof 1, each exertion die adds:
- **2+:** +1.0 expected successes
- **5+:** +0.5 expected successes

**But exertion carries risk:** Rolling a 1 on an exertion die destroys an HD.

This creates meaningful tension:
- Easy challenges: Don't bother exerting
- Medium challenges: Light exertion is efficient
- Hard challenges: Heavy exertion needed, real cost
- Very Hard: Full commitment, accept losses

---

## Partial Success System

Instead of binary pass/fail, consider setting multiple thresholds:

| Result | Outcome |
|--------|---------|
| **Below 50%** | Failure with complication |
| **50-99%** | Partial success / success with cost |
| **100%+** | Full success |
| **150%+** | Critical success / bonus |

**Example: Navigating a Treacherous Pass (Medium, 4+ threshold, 8 successes)**
- 0-3 successes: Lost, trigger encounter, lose supplies
- 4-7 successes: Arrive but exhausted (no Recover benefit)
- 8-11 successes: Arrive safely
- 12+ successes: Arrive with shortcut knowledge for future

---

## Individual vs Group Roll Decision Tree

```
Is this a group effort where everyone can contribute?
├── YES → Group Roll (pool successes)
│   └── Does the fiction support everyone acting together?
│       ├── YES → Single group roll
│       └── NO → Sequential group rolls (phases)
│
└── NO → Individual Roll
    └── Who rolls?
        ├── Spotlight character (player choice)
        ├── Most relevant domain bonus
        └── Highest stakes character
```

**Group Rolls (Default):**
- Sneaking past guards (everyone contributes to stealth)
- Convincing a council (multiple voices, pooled arguments)
- Climbing a cliff face (helping hands, ropes)
- Research montage (splitting texts)

**Individual Rolls:**
- Resisting a targeted spell
- Personal initiative in combat
- Solo scouting (character choice)
- Contested actions (opposed rolls)

---

## Quick Reference: The 2×2 Difficulty Grid

For fast design, pick one of these four basic profiles:

| Profile | Pip Threshold | Success Target | When to Use |
|---------|---------------|----------------|-------------|
| **Routine** | 3+ | Low (50% expected) | Background tasks, easy wins |
| **Standard** | 4+ | Medium (100% expected) | Most challenges |
| **Specialized** | 5+ | Medium (100% expected) | Requires expertise |
| **Epic** | 5+ or 6 | High (150%+ expected) | Campaign-defining moments |

---

## Summary

1. **Two axes of difficulty:** Pip threshold (how hard each die) + Success target (how many total)
2. **6 = 2 successes** at all pip thresholds
3. **Group rolls are default** — pool successes, win or fail together
4. **Use the Master Matrix** — find dice pool and pip threshold, read expected successes
5. **Set targets by ratio** — 0.75× = Easy, 1× = Medium, 1.25× = Hard
6. **Top-left is easy, bottom-right is hard** — low pip + low target vs high pip + high target
7. **Domain bonuses and exertion shift the pool** — recalculate expected as needed

*This system scales across all party sizes and levels. GM has full control over both difficulty levers.*
7. **Use partial success** to create interesting outcomes beyond pass/fail

*This system keeps challenges fair across all party sizes and levels while giving GMs clear tools for setting appropriate difficulty.*
