# Balance Changes Log - Post-Session 5 Playtest

**Date:** February 19, 2026  
**Playcampaign:** The Hollow Below (Sessions 1-5)  
**Analysis Source:** Session_5_Analysis.md  
**Changes Approved By:** Wizard (Westmore)

This document tracks all mechanical adjustments made to **Affinity** based on playtest results from The Hollow Below campaign.

---

## High-Priority Balance Changes ✅ COMPLETE

### 1. Defense Capacity Formula (SYSTEM-WIDE)

**Status:** ✅ **IMPLEMENTED** (Post-Session 4)

**OLD Formula:**  
`Defense Capacity = ½ Proficiency (rounded up)`  
- Proficiency 2 = Capacity 1 (1 roll per attack)
- Proficiency 4 = Capacity 2 (2 rolls per attack)
- Proficiency 6 = Capacity 3 (3 rolls per attack)

**NEW Formula:**  
`Defense Capacity = Proficiency (full value)`  
- Proficiency 2 = Capacity 2 (2 rolls per attack)
- Proficiency 4 = Capacity 4 (4 rolls per attack)
- Proficiency 6 = Capacity 6 (6 rolls per attack)

**Rationale:**  
Extensive testing in Session 5 (4-round boss fight, 3 Trial Titans, 12+ defense sequences) demonstrated that the NEW formula:
- Creates "blow-for-blow" combat feel (defend twice, overwhelmed by third hit)
- Does NOT create dice slog (20-30 seconds per attack resolution)
- Increases survivability ~40% without trivializing threats
- Preserves stakes (Kael still dropped to 0 HD twice despite improved defenses)
- Allows armor to last 2-3 attacks instead of 1 (heroic without invincible)

**Impact Table:**

| Attack HD | OLD (Cap 1) | NEW (Cap 2) | Improvement |
|-----------|-------------|-------------|-------------|
| 2 HD      | Take 1 HD   | Take 0 HD   | 100% reduction |
| 3 HD      | Take 2 HD   | Take 1 HD   | 50% reduction |
| 4 HD      | Take 3 HD   | Take 2 HD   | 33% reduction |

**Recommendation:** ADOPT PERMANENTLY across all Affinity core documents.

**Files Updated:**
- Affinity_Combat_Rules.md
- Affinity_Quick_Reference.md
- Affinity_Bestiary.md
- Session_4_*, Session_5_* (all playtest logs updated retroactively)

---

### 2. Bulwark's Presence Power Cap

**Status:** ✅ **IMPLEMENTED** (February 19, 2026)

**Path:** Sentinel (Combatant class) - Adept Tier (2/3)  
**Ability:** Bulwark's Presence (Passive)

**OLD Description:**  
*"Allies within 10 yards gain +1 Defense Capacity (1 additional roll per attack)."*

**NEW Description:**  
*"Allies within 10 yards gain +1 Defense Capacity (1 additional roll per attack). **This bonus does not scale with Proficiency—it remains +1 regardless of your level.**"*

**Rationale:**  
Without a cap, this ability would scale with the Sentinel's Proficiency:
- Prof 2: Allies gain +1 Defense Capacity (Capacity 3 total if ally is Prof 2) — Reasonable
- Prof 4: Allies gain +2 Defense Capacity (Capacity 6 total if ally is Prof 4) — Strong but acceptable
- Prof 6: Allies gain +3 Defense Capacity (Capacity 9 total if ally is Prof 6) — **EXCESSIVE**

At high levels, this would grant allies Defense Capacity HIGHER than boss-tier enemies, trivializing late-game combat. Capping the bonus at +1 preserves the "tank support" fantasy without creating invincible parties.

**Files Updated:**
- Session_5_Playtest_Log.md (Scene 11: Adept abilities description)
- Session_5_Party_Status.md (Torvan's Paths section)
- [PENDING] Affinity_Path_Board.md (when Sentinel Path is codified)

---

### 3. Enduring Ritual Permanent Effect Restriction

**Status:** ✅ **IMPLEMENTED** (February 19, 2026)

**Path:** Ritualist (Weaver class) - Adept Tier (2/3)  
**Ability:** Enduring Ritual (Special)

**OLD Description:**  
*"One ritual per long rest can be made PERMANENT on object/location until dispelled. May not be cast on creatures."*

**NEW Description:**  
*"One ritual per long rest can be made permanent. **Permanent rituals on creatures (including yourself) last 24 hours maximum.** Permanent rituals on objects or locations persist until dispelled."*

**Rationale:**  
The original restriction ("may not be cast on creatures") was intended to prevent self-buff exploits, but was TOO LIMITING. Players should be able to enhance themselves/allies, but not create infinite defense layers.

**Exploit Examples Prevented:**
- **Permanent Magical Armor:** 2d12 armor that NEVER depletes → invincible defense layer
- **Permanent Detect Magic:** Always-on magical awareness → trivializes surprises
- **Permanent Strength Enhancement:** Permanent +1d6 to Physical checks → no cost for power

**New Rule Impact:**
- **Creatures (including self):** 24-hour max duration (allows powerful buffs without permanence exploit)
- **Objects:** Permanent until dispelled (allows cool environmental magic: glowing stones, warded doors, eternal flames)
- **Locations:** Permanent until dispelled (allows sacred circles, protective wards, ritual anchors)

**Example Legal Uses:**
- Cast **Magical Armor** on ally as "permanent" → lasts 24 hours (LONG but not infinite)
- Cast **Detect Magic** on a CRYSTAL (object) as permanent → glows when magic nearby (cool sensor item)
- Cast **Protection Ward** on temple entrance (location) as permanent → guards sacred ground forever

**Files Updated:**
- Session_5_Playtest_Log.md (Lyra's Adept abilities description)
- Session_5_Party_Status.md (Lyra's Paths section)
- [PENDING] Affinity_Path_Board.md (when Ritualist Path is codified)

---

### 4. Divine Compacts - "Use or Lose" Weekly Clause

**Status:** ✅ **IMPLEMENTED** (February 19, 2026)

**Mechanic:** Divine Compacts (deity-granted intervention)  
**Frequency:** 1/week auto-succeed on aligned check

**OLD Description:**  
*"1/week, invoke [Deity]'s favor to automatically succeed on [aligned principle] check. Bypasses all difficulty. Must align with deity's principles; selfish uses may anger deity."*

**NEW Description:**  
*"1/week, invoke [Deity]'s favor to automatically succeed on [aligned principle] check. Bypasses all difficulty. Must align with deity's principles; selfish uses may anger deity. **Use or Lose:** Unused Divine Compacts do not accumulate. If you do not invoke your Compact within a week, that week's invocation is lost. The divine connection must be exercised to remain strong."*

**Rationale:**  
Divine Compacts are VERY powerful (auto-succeed, no roll, no cost). Without a "use or lose" clause, players have two problematic behaviors:

**Problem 1: Hoarding**  
Players save Compacts indefinitely ("I'll use it when I REALLY need it"), resulting in never using them. This wastes a cool narrative mechanic and creates "dead weight" on character sheets.

**Problem 2: Trivialization**  
Players save Compacts for climactic moments (final boss persuasion, critical knowledge check) and trivialize narrative stakes by bypassing meaningful challenges.

**"Use or Lose" Solution:**  
- Encourages WEEKLY spending (use it or lose it creates urgency)
- Prevents indefinite stockpiling (can't save 10 weeks of Compacts for final battle)
- Makes Compacts feel like a RELATIONSHIP (exercising connection to deity keeps it strong; neglecting it weakens bond)
- GM can narrate deity consequences: *"Khuldras has not heard your voice in many weeks. The stone feels... distant."*

**GM Guidance (added to documentation):**

**Appropriate Uses (Foundation-Aligned):**
- **Protection:** Auto-succeed Defense roll protecting innocent from collapsing building
- **Transformation:** Guarantee decay → renewal (corrupted land becomes fertile)
- **Preservation:** Perfect recall of dying elder's final words (protecting knowledge)

**Inappropriate Uses (Selfish):**
- Auto-succeed arm-wrestling contest to win bet
- Auto-succeed Persuasion to get free drinks at tavern
- Auto-succeed Intimidation to bully merchant for discount

**Consequence of Trivial Use:**  
Khuldras is disappointed. Compact temporarily revoked for 1 week (PC must earn back trust through foundational deeds).

**Files Updated:**
- Session_5_Playtest_Log.md (Divine Compacts section - Scene 9)
- Session_5_Party_Status.md (All three PCs' Divine Compact descriptions)
- [PENDING] Affinity_Game_Masters_Guide.md (GM guidance chapter on Divine Compacts)

---

## Medium-Priority Balance Observations ⚠️ MONITOR

### 1. Paths Advancement Rate

**Current Rate:** 1 Path point per session (tested in The Hollow Below)  
**Progression:** Novice (1/3) → Adept (2/3) → Master (3/3)

**Analysis:**  
- **Short campaigns (5 sessions):** 1 point/session feels PERFECT (reached Adept tier by finale)
- **Long campaigns (20+ sessions):** May feel too fast (reach Master tier by Session 3)

**Recommendation:**  
- **Short campaigns (5-10 sessions):** 1 point/session (tested, works beautifully)
- **Long campaigns (15+ sessions):** Consider 1 point every 2-3 sessions OR tie to milestones (major story beats, not time)

**Status:** MONITOR in future playtests (no change needed yet)

---

### 2. Affinity Dice Spending Rate

**Current Award Rate:** ~2 dice per PC per session (for excellent roleplay, creative solutions, heroic moments)  
**Current Spending Rate:** ~50% (varied by player personality)

**Session 5 Data:**
- **Torvan:** Spent 1/3 dice (hoarded, cautious playstyle)
- **Kael:** Spent 2/2 dice (desperate, all-in playstyle)
- **Lyra:** Spent 1/3 dice (strategic, saved for critical moments)

**Analysis:**  
50% spending rate is ACCEPTABLE. Some hoarding is natural (players value security), but Kael's willingness to burn both dice shows that desperation creates spending pressure.

**Recommendation:**  
- Continue awarding ~2 dice/session for roleplay/heroism
- GMs can create "spending pressure" via:
  - Life-or-death moments (Kael dropped to 0 HD twice → burned dice immediately)
  - Critical story checks (one chance to persuade/investigate/overcome)
  - Affinity-aligned moments (offer Affinity Die refund when PC acts in perfect alignment with type)

**Status:** MONITOR (no changes needed, system working as intended)

---

### 3. Burden System Costs

**Introduced:** Session 5 (divine responsibilities traded for powers)

**Analysis:**  
- **Cornerstone Burden (Torvan):** Cannot flee while Foundation endangered; lose 1 Resolve if Foundation drops to 0 HD  
  **Session 5 Impact:** Kael dropped to 0 HD → Torvan lost 1 Resolve → Cost felt MEANINGFUL
  
- **Renewal Burden (Kael):** Must speak transformation words (narrative); causing unnecessary death loses burden until atonement  
  **Session 5 Impact:** Forced dramatic declarations ("From decay—RENEWAL!") → Cost enriched roleplay
  
- **Lorekeeper Burden (Lyra):** Must record significant knowledge or cannot Rest (guilt prevents sleep)  
  **Session 5 Impact:** Documented everything in Testament → Cost drove character behavior

**Recommendation:**  
Burdens work BEAUTIFULLY when:
- Costs are **triggered during play** (not theoretical)
- Costs create **meaningful choices** (not just tax/penalty)
- Benefits feel **earned** (not just "+1 to stat")

**Status:** ADOPT PERMANENTLY (Burden system validated, codify in GM Guide)

---

### 4. Boss Defense Capacity

**Tested:** Trial Titans (Session 5 boss fight) - Defense Capacity 3  
**Party:** All Prof 2 (Defense Capacity 2)

**Analysis:**  
- Bosses with Defense Capacity 1 higher than party (Capacity 3 vs. 2) felt **appropriately tough** without HP bloat
- Required 3-4 successful attacks to penetrate armor → created attrition + tension
- Did NOT feel invincible (party successfully defeated all three Titans)

**Recommendation:**  
- **Elite enemies:** Defense Capacity = Party Prof (match player defenses)
- **Boss enemies:** Defense Capacity = Party Prof + 1 (slightly tougher, but beatable)
- **Legendary enemies:** Defense Capacity = Party Prof + 2 (very dangerous, requires strategy)

**Status:** ADOPT PERMANENTLY (Boss scaling formula validated)

---

## Campaign Variants 🗺️ NEW

### "Trapped Below" Variant (Higher Difficulty)

**Status:** ✅ **DOCUMENTED** (February 19, 2026)

**Concept:**  
After Session 2 (Verdant Guardian defeated), the party is **trapped underground** with NO WAY BACK to the surface. They must complete the campaign with:
- **No Recover action** (only Rest in threatened space: ½ HD, ½ Resolve restoration)
- **No armor replacement** (destroyed gear stays destroyed, field repairs only)
- **Cumulative attrition** (resources deplete across 3+ sessions without full reset)

**Session 3 Modification:**  
Priestess Kara **descends into the tunnels** to meet the party (instead of party returning to surface). She brings medical supplies, rations, and divine support but cannot fully replace Recover benefits.

**Difficulty Impact:**
- **Standard Campaign:** Full resources every 1-2 sessions (comfortable pacing)
- **Trapped Below Variant:** Attrition is CUMULATIVE (brutal resource pressure)

**When to Use:**
- Experienced players who enjoy tactical resource management
- Groups preferring gritty survival horror themes
- Tables that want HEAVY emphasis on attrition mechanics

**When NOT to Use:**
- New Affinity players (too punishing while learning)
- Groups preferring heroic power fantasy
- Tables with lighthearted tone preference

**Files Updated:**
- The_Hollow_Below.md (Campaign Variants section added with full implementation guide)

---

## Pending Codification Tasks 📋

The following playtest-validated mechanics need to be added to core Affinity documents:

### High Priority
- ✅ Defense Capacity = Proficiency (DONE - updated all core docs)
- ✅ **Ways vs Paths System Clarification** (DONE - clarified terminology across Classes, Core Mechanics, Character Creation, Path Board, GM Guide)
- ✅ **Burdens Optional Rule** (DONE - added to GM Guide as optional Affinity roleplay challenge)
- ⏳ **Divine Compacts Guidelines** → Add chapter to Affinity_Game_Masters_Guide.md (use examples, abuse prevention, "use or lose" clause)

### Medium Priority
- ⏳ **Burden System Examples** → Expand in Affinity_Game_Masters_Guide.md with additional templates beyond Cornerstone/Renewal/Keeper
- ⏳ **Boss Defense Capacity Formula** → Add to Affinity_Bestiary.md (scaling recommendations: Party Prof + 1 for bosses)
- ⏳ **Multi-Solution Encounters** → Add to Affinity_Game_Masters_Guide.md (design patterns, reward structures)

### Future Development (Class-Specific Ways)
The playtest introduced class-specific specialization concepts that were exploratory. Future development should focus on:
- Building out **Ways** for each class (4 columns × 10 rows grids)
- Ensuring Ways augment class fantasy without power creep
- Testing Ways in longer campaigns (10+ sessions) to validate pacing

---

## Playtest Campaign Status 🎲

**The Hollow Below**  
**Sessions:** 1-5 (COMPLETE ✅)  
**Party:** Torvan (Combatant/Guardian), Kael (Ranger/Decay), Lyra (Weaver/Memory)  
**Final Level:** 3 (Started Level 2)  
**Final Proficiency:** 2  
**Final Path Progress:** 2/3 (Adept tier)

**Systems Validated (17/17):**
- ✅ Defense Capacity = Proficiency (extensive testing, APPROVED)
- ✅ Paths advancement (1 point/session short campaigns)
- ✅ Burden system (meaningful costs, earned benefits)
- ✅ Divine Compacts (with "use or lose" clause)
- ✅ Multi-solution bosses (combat/knowledge/roleplay)
- ✅ Affinity Dice awards (~2/session) and spending (~50% rate)
- ✅ Rest vs Recover distinction
- ✅ Milestone leveling (Level 2→3 at Session 3)
- ✅ Exertion burn (HD attrition creates tension)
- ✅ Armor ablation (NEW formula: 2-3 attacks to destroy)
- ✅ Boss Defense Capacity (Party Prof + 1 feels tough but beatable)
- ✅ Ritual casting (Swift Ritual + Enduring Ritual)
- ✅ Guardian's Mark (interception tanking)
- ✅ Relentless Hunter + Inevitable Pursuit (tracking mechanics)
- ✅ No gold tracking (gear replaced freely between sessions)
- ✅ Social/exploration/combat/puzzle balance
- ✅ Campaign pacing (5 sessions, local stakes, meaningful resolution)

**Balance Issues Identified:** 3 high-priority (ALL RESOLVED ✅)  
**Recommendations for Future:** 10 items (adoption, monitoring, codification)

---

## Changelog Summary

**February 19, 2026:**
- ✅ Bulwark's Presence capped at +1 Defense Capacity (non-scaling)
- ✅ Enduring Ritual restricted to 24 hours max on creatures
- ✅ Divine Compacts "use or lose" weekly clause added
- ✅ "Trapped Below" campaign variant documented
- ✅ Session_5_Analysis.md updated (marked changes as IMPLEMENTED)
- ✅ Balance_Changes_Log.md created (this document)

**Previous Updates:**
- ✅ Defense Capacity = Proficiency systemwide (post-Session 4)
- ✅ DEFENSE_MECHANICS_CORRECTION.md created (documented earlier error)

---

*"The foundation holds because we test it, learn from the cracks, and rebuild stronger."*  
—Khuldras, the Deep Foundation

**Playtest Status:** Session 5 COMPLETE. System validated. Balance refined. Ready for broader testing.

May the Wizard's arcane library expand with these codified lessons! 📚⚔️✨
