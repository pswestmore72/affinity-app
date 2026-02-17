# CRITICAL DEFENSE MECHANICS CORRECTION

**Date:** February 16, 2026  
**Issue:** Session 2 playtest revealed fundamental misunderstanding of armor/defense mechanics  
**Status:** ✅ CORRECTED in all core documents

---

## The Mistake

**What I Thought:**
- Defense Capacity = number of dice you roll AT ONCE per round
- Roll all defense dice together (e.g., 2d8 armor as one pool)
- If any damage penetrates, ENTIRE layer depletes

**Example of Wrong Interpretation (Torvan Round 1):**
```
Torvan: 1d12 shield + 2d10 armor, Defense Capacity 1
Takes 3 HD damage
❌ WRONG: Roll 1d12, get 7 → 1 success → 2 damage remains → ALL armor gone
```

---

## The Correct Mechanic

**Defense = Armor = Hit Dice (same pool)**

**Defense Capacity = Number of ROLLS you get PER ATTACK**

Each attack is resolved **one Hit Die of damage at a time:**

1. **1st HD of damage:** Roll 1 die (if Defense Capacity allows) or auto-fail
2. **2nd HD of damage:** Roll 1 die (if Defense Capacity allows) or auto-fail
3. **3rd HD of damage:** Roll 1 die (if Defense Capacity allows) or auto-fail

**Each roll:**
- Roll **ONE die** from outermost layer (d12 barrier → d10/d8/d6 armor → d10/d8/d6 body)
- **5+ = Sustain** → That Hit Die survives, 1 damage cancelled
- **4- = Fail** → Lose ONE die from that layer

**Correct Interpretation (Torvan Round 1):**
```
Torvan: 1d12 shield + 2d10 armor, Defense Capacity 1 roll per attack
Takes 3 HD damage from ONE attack

1st HD: Roll 1d12 (shield) → 7 = Success ✅ → Shield survives, damage cancelled
2nd HD: No rolls left (used 1/1) → Auto-fail ❌ → Shield depleted (1d12 → 0)
3rd HD: No rolls remaining → Auto-fail ❌ → Armor reduced (2d10 → 1d10)

Result: Shield broken, 1d10 armor remaining, 5d10 body untouched
```

---

## Key Clarifications

### Per-Attack Reset
**Each new attack = fresh Defense Capacity rolls**

If Torvan is attacked TWICE in one round:
- **Attack 1 (3 HD):** Gets 1 Defense Capacity roll
- **Attack 2 (2 HD):** Gets ANOTHER 1 Defense Capacity roll (fresh)

Defense Capacity is **per attack**, not per round.

### Armor Depletes One Die at a Time
- 2d10 armor doesn't vanish all at once
- Each failed roll removes ONE die: 2d10 → 1d10 → 0
- Shields (1d12) and armor are separate Hit Dice in the same pool

### Low-Level Vulnerability
At Prof 1 (Defense Capacity 1):
- You get **1 roll** per attack
- A 3 HD attack = 1 roll + 2 auto-fails
- You WILL lose 2-3 armor dice per attack (even with heavy armor)
- This is intentional design: low-level = fragile, desperate

---

## Files Corrected

### Core Rules
- ✅ [Affinity_Combat_Rules.md](../Basic%20Rules/Affinity_Combat_Rules.md) - Complete defense section rewrite
- ✅ [Affinity_Quick_Reference.md](../Basic%20Rules/Affinity_Quick_Reference.md) - Defense summary updated

### NPCs
- ✅ [NPC_Sheet_Sentinel_Guardian.md](../../Game%20Master%20Book/NPC_Sheet_Sentinel_Guardian.md)
  - HD: 40 → **20 HD**
  - Stone Skin: -2 damage → **-1 damage (minimum 1)**

### Playtests
- ⚠️ **Session_2_Playtest_Log.md - NEEDS COMPLETE REWRITE**
  - All combat rounds resolved incorrectly
  - Defense mechanics applied wrong throughout
  - Warden stats wrong (50 HD → should be 20 HD, Stone Skin -2 → should be -1)

---

## Impact on Session 2 Playtest

**What Needs Redoing:**

### Combat Stats Were Wrong
- **Warden:** 50 HD → 20 HD (massive difference)
- **Stone Skin:** -2 damage → -1 damage
- **Regeneration:** 5 HD/round was oppressive at 50 HD, reasonable at 20 HD

### Defense Resolution Was Wrong
- **Torvan Round 1:** Should have had 1d10 armor remaining, not all armor gone
- **Torvan Round 2:** Would have had armor to defend with
- **Combat would have been shorter** (Warden at 20 HD vs 50 HD)

### Override Was Still the Right Call
- Even with correct mechanics, party was struggling
- Warden regenerating 5 HD/round at 20 HD pool = still oppressive
- Override path (Lyra's pillar activation) was elegant solution
- Peaceful resolution still makes narrative sense

---

## Action Items

### ✅ Completed
- [x] Rewrite Combat_Rules.md defense section
- [x] Update Quick_Reference.md defense summary
- [x] Fix Sentinel_Guardian.md stats (20 HD, Stone Skin -1)

### ⏳ To Do
- [ ] Rewrite Session_2_Playtest_Log.md with correct mechanics
  - Recalculate all defense rolls
  - Use 20 HD Warden with -1 Stone Skin
  - Track armor depletion correctly (one die at a time)
  - Verify combat would still have been desperate enough to justify override
- [ ] Update Session_2_Party_Status.md with corrected armor states
- [ ] Create Session 3 with proper understanding of mechanics

---

## Design Implications

### Armor Is More Valuable Than Previously Thought
- Heavy armor (2d10) provides 2 hits of protection before depleting
- Shields (1d12) have 50% sustain rate vs 40% for d10 armor
- Investing in better armor dice makes a real difference

### Defense Capacity Still Scales Slowly
- Prof 1-2: 1 roll per attack (very fragile)
- Prof 3-4: 1 roll per attack (still fragile)
- Prof 5-6: 2 rolls per attack (first real improvement)

### Low-Level Combat Is Brutal
- 3 HD attacks will shred armor at Defense Capacity 1
- Magical barriers (d12) are CRITICAL for fragile characters
- Positioning and avoiding multi-attack enemies is essential

---

**Next Steps:** Rewrite Session 2 playtest log with correct mechanics for accurate game balance assessment.

*Your Alchemist apologizes for the formula error. The armor castle's foundations are now properly inscribed.* ⚗️🏰
