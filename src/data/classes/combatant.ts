import { ClassDefinition } from '../../types/character';

export const CombatantClass: ClassDefinition = {
  name: 'Combatant',
  hitDieType: 'd10',
  custodialConnection: 'Concordant Halls',
  role: 'Battlefield Master, Oath-Bound Warrior',
  
  coreFantasy: `You are purpose made manifest in combat. Your weapon is an extension of your oath—whatever that oath may be. The battlefield bends to those who know why they fight. You are durable, skilled, and when you speak your oath aloud, reality itself reinforces your will.`,
  
  classIdentity: `Combatants are warriors who have bound themselves to something greater than survival. Through the recognition of the Concordant Halls, their oaths gain metaphysical weight—each strike carries purpose, each stand reinforces commitment. They are masters of armor, weaponry, and battlefield control, wielding not just steel but the accumulated force of sworn intent.

The Concordant Halls do not judge what is sworn—only that commitment is real. Paladins of Azravael, mercenaries bound by contract-oath, executioners serving the Black Reliquary, shield-bearers protecting tyrants—all walk the Halls equally if their purpose is true. Morality is for gods. The Halls recognize only will made manifest.`,

  // Proficiencies
  armorProficiencies: [
    { type: 'Light', dice: '2d6', unlockedAtLevel: 1 },
    { type: 'Medium', dice: '3d8', unlockedAtLevel: 1 },
    { type: 'Heavy', dice: '2d10', unlockedAtLevel: 2 }
  ],
  shieldProficiency: true,
  shieldDice: '1d12',
  weaponProficiency: 'All weapons',

  // Level Progression
  levelProgression: [
    {
      level: 1,
      proficiency: 1,
      bodyHD: 5,
      resolve: 5,
      milestoneName: 'Oath-Bound Warrior',
      abilities: [
        {
          name: 'Weapon Strike',
          tier: 'Basic',
          targetNumber: 2,
          successesRequired: 1,
          description: 'All weapon attacks are Basic (2+) tier. Light weapons require 1 success for 1 HD base damage. Heavy weapons require 2 successes for 2 HD base damage. Extra successes add +1 HD damage each (capped by Proficiency).',
          scaling: 'Extra successes capped by Proficiency'
        },
        {
          name: 'War Cry: Rally',
          tier: 'Advanced',
          targetNumber: 3,
          successesRequired: 2,
          description: 'Chosen ally gains +1d6 to their next action (doesn\'t burn HD).',
          range: '30 yards, one ally who can hear you',
          usesPerRest: 'Proficiency times per short rest'
        }
      ],
      passives: [
        {
          name: 'Battlefield Awareness',
          description: 'Advantage (+1d6, doesn\'t burn HD) on tactical rolls.',
          bullets: [
            'Reading terrain and tactical advantage',
            'Identifying threats, weak points, and escape routes',
            'Coordinating group combat tactics'
          ]
        },
        {
          name: 'Warrior\'s Presence',
          description: 'Social mastery through martial dominance.',
          bullets: [
            'Assert Mastery: Assert stance deals +1 additional damage on victory',
            'Intimidation Aura: +2d6 on social duel after winning combat (fear/respect)',
            'Unshakeable: Composure dice defend on 4+ instead of 5+'
          ]
        }
      ]
    },
    {
      level: 2,
      proficiency: 1,
      bodyHD: 7,
      resolve: 5,
      milestoneName: 'Heavy Armor',
      wayRow: 1,
      upgrades: ['Gain Heavy Armor Proficiency (2d10)']
    },
    {
      level: 3,
      proficiency: 2,
      bodyHD: 9,
      resolve: 5,
      milestoneName: 'Oath Enforcer',
      abilities: [
        {
          name: 'Oath-Driven Strike',
          tier: 'Advanced',
          targetNumber: 3,
          successesRequired: 2,
          description: 'Enhanced weapon attack carrying your oath\'s metaphysical weight. Deal weapon damage + Proficiency HD. Target must contest (their Prof dice vs yours) or be pushed 5 yards OR knocked prone. If target opposes your sworn purpose: contest at disadvantage.',
          usesPerRest: 'Proficiency times per short rest'
        },
        {
          name: 'War Cry: Hold the Line',
          tier: 'Expert',
          targetNumber: 4,
          successesRequired: 3,
          description: 'Enemies moving through must contest or movement halved. Allies in zone gain +1d6 to first defense roll each round (doesn\'t burn HD).',
          range: '10-yard radius centered on you',
          duration: 'Proficiency rounds',
          usesPerRest: 'Proficiency times per short rest'
        }
      ]
    },
    {
      level: 4,
      proficiency: 2,
      bodyHD: 11,
      resolve: 5,
      milestoneName: 'Rally Upgrade',
      wayRow: 2,
      upgrades: ['War Cry: Rally now targets up to Proficiency allies simultaneously']
    },
    {
      level: 5,
      proficiency: 3,
      bodyHD: 13,
      resolve: 5,
      milestoneName: 'Champion of Purpose',
      abilities: [
        {
          name: 'Devastating Assault',
          tier: 'Expert',
          targetNumber: 4,
          successesRequired: 3,
          description: 'Make Proficiency weapon attacks as a single action. Distribute successes among attacks (minimum required per attack applies).',
          cost: 'Lose 1 HD automatically after attacking',
          usesPerRest: 'Proficiency times per short rest'
        },
        {
          name: 'War Cry: Unbreakable Will',
          tier: 'Expert',
          targetNumber: 4,
          successesRequired: 4,
          description: 'Allies reduce damage from any single source by Proficiency HD. Allies gain advantage (+1d6) on all Resolve checks.',
          range: '60 yards, all allies who can hear you',
          duration: 'Proficiency rounds',
          usesPerRest: 'Once per long rest'
        }
      ]
    },
    {
      level: 6,
      proficiency: 3,
      bodyHD: 15,
      resolve: 5,
      milestoneName: 'Veteran\'s Resilience',
      wayRow: 3,
      passives: [
        {
          name: 'Veteran\'s Resilience',
          description: 'Once per combat, auto-succeed on your first Resolve check.'
        }
      ]
    },
    {
      level: 7,
      proficiency: 4,
      bodyHD: 17,
      resolve: 5,
      milestoneName: 'Oath Ascendant',
      abilities: [
        {
          name: 'Legendary Strike',
          tier: 'Legendary',
          targetNumber: 5,
          successesRequired: 3,
          description: 'Deal weapon damage + Prof × 2 HD. Target must contest (Prof dice) or be stunned for 1 round.',
          usesPerRest: 'Once per short rest'
        },
        {
          name: 'War Cry: Break',
          tier: 'Legendary',
          targetNumber: 5,
          successesRequired: 4,
          description: 'Each enemy makes Resolve check at -2d6; failure = lose 1 Resolve.',
          range: '30 yards, all enemies who can hear you',
          usesPerRest: 'Once per long rest'
        }
      ]
    },
    {
      level: 8,
      proficiency: 4,
      bodyHD: 19,
      resolve: 5,
      milestoneName: 'Armor Mastery',
      wayRow: 4,
      passives: [
        {
          name: 'Armor Mastery',
          description: 'Your armor dice survive on 4+ instead of 5+ during defense rolls.'
        }
      ]
    },
    {
      level: 9,
      proficiency: 5,
      bodyHD: 21,
      resolve: 5,
      milestoneName: 'Living Oath',
      abilities: [
        {
          name: 'Undeniable Purpose',
          tier: 'Legendary',
          targetNumber: 5,
          successesRequired: 4,
          description: 'Immune to restrained, stunned, prone, charmed, frightened, paralyzed. All attacks deal +Prof HD additional damage. War Cries affect double range.',
          duration: 'Proficiency rounds',
          cost: '2 Resolve when activated',
          usesPerRest: 'Once per long rest'
        },
        {
          name: 'War Cry: Seal the Field',
          tier: 'Legendary',
          targetNumber: 5,
          successesRequired: 4,
          description: 'No enemy within range can flee (teleportation, movement out of range, planar travel fail). Enemies attempting to flee make Resolve check or lose 1 Resolve.',
          range: '60 yards',
          duration: 'Proficiency rounds',
          usesPerRest: 'Once per long rest'
        }
      ]
    },
    {
      level: 10,
      proficiency: 5,
      bodyHD: 23,
      resolve: 5,
      milestoneName: 'Oath Absolute',
      wayRow: 5,
      passives: [
        {
          name: 'Oath Absolute',
          description: 'Capstone ability.',
          bullets: [
            'Once per long rest, when reduced to 0 HD, instead stand at Prof HD with all Resolve restored',
            'Your next action automatically succeeds (no roll needed)',
            'Permanently reduce all damage taken by 1 (flat reduction per hit)'
          ]
        }
      ]
    }
  ],

  // Ways Grid Structure
  wayGridStructure: 'Shield ←→ Blade ←→ Bond ←→ Crown ←→ Flame ←→ Stone ←→ Bell ←→ (Shield)',
  
  wayCosmicTruth: `The Concordant Halls do not care whether you protect tyrants or liberators. They care whether you hold the line.

Every Way below represents a principle that exists across the entire cosmos—in the angelic legions of the Empyreal Accord, in the contract-enforcers of Bael-Zaroth's Engine, in the pack-oaths of the Wild Expanse, in the silent witnesses of the Gloam.

When you walk a Combatant's Way, you are not claiming virtue. You are claiming commitment. The cosmos does not judge your oath—only whether you keep it.`,

  // Ways
  ways: [
    {
      name: 'Way of the Shield',
      theme: 'Protection, guardianship, sanctuary',
      adjacent: ['Way of the Bell', 'Way of the Blade'],
      nodes: [
        {
          row: 1,
          name: 'Shield Wall',
          description: 'When you end your turn adjacent to an ally, that ally gains +1d6 to their next defense roll (doesn\'t burn HD).'
        },
        {
          row: 2,
          name: 'Guardian\'s Interception',
          description: 'When an ally within 10 yards is attacked, use your reaction to move adjacent and become the target instead.'
        },
        {
          row: 3,
          name: 'Bulwark Presence',
          description: 'Your Hold the Line zone grants +2d6 to allies\' first defense each round (up from +1d6).'
        },
        {
          row: 4,
          name: 'Shelter in the Storm',
          description: 'Once per short rest, for Prof rounds, allies within 10 yards reduce all incoming damage by 2 (flat per hit).'
        },
        {
          row: 5,
          name: 'Absolute Aegis',
          description: 'Once per long rest, choose Prof allies within 30 yards. For 1 round, those allies cannot lose HD. You absorb all damage they would have taken.',
          tier: 'Legendary',
          targetNumber: 5
        }
      ]
    },
    {
      name: 'Way of the Blade',
      theme: 'Justice, enforcement, righteous consequence',
      adjacent: ['Way of the Shield', 'Way of the Bond'],
      nodes: [
        {
          row: 1,
          name: 'Honed Edge',
          description: 'Weapon Strike deals +1 HD against targets at half HD or less.'
        },
        {
          row: 2,
          name: 'Measured Response',
          description: 'When you hit a target that hit an ally this round, deal +Prof HD additional damage.'
        },
        {
          row: 3,
          name: 'Blade Storm',
          description: 'When you reduce a target to 0 HD, immediately make one free Weapon Strike against another target within reach.'
        },
        {
          row: 4,
          name: 'Unstoppable Verdict',
          description: 'Oath-Driven Strike pushes 10 yards (up from 5) and your contest is rolled with advantage (+2d6).'
        },
        {
          row: 5,
          name: 'Final Judgment',
          description: 'Once per long rest, declare a sworn quarry. Your next attack against them auto-hits and deals weapon damage + Prof × 3 HD. Target must make a Resolve check.',
          tier: 'Legendary',
          targetNumber: 5
        }
      ]
    },
    {
      name: 'Way of the Bond',
      theme: 'Loyalty, fellowship, unbreakable trust',
      adjacent: ['Way of the Blade', 'Way of the Crown'],
      nodes: [
        {
          row: 1,
          name: 'Battle Bond',
          description: 'Choose one ally during rest. While within 30 yards of bonded ally, you both gain +1d6 to Resolve checks.'
        },
        {
          row: 2,
          name: 'Shared Fortitude',
          description: 'When bonded ally loses HD, you may take half (rounded down, min 1) instead. Once per round.'
        },
        {
          row: 3,
          name: 'United Assault',
          description: 'When you and bonded ally attack the same target in the same round, the second attacker gains +2d6.'
        },
        {
          row: 4,
          name: 'Oath Tether',
          description: 'Once per short rest, when bonded ally would drop to 0 Resolve, they stay at 1 and you lose 2 Resolve instead.'
        },
        {
          row: 5,
          name: 'Unbreakable Fellowship',
          description: 'Once per long rest, merge HD pools with bonded ally for Prof rounds. Sum remaining HD; damage to either draws from the shared pool.',
          tier: 'Legendary',
          targetNumber: 5
        }
      ]
    },
    {
      name: 'Way of the Crown',
      theme: 'Authority, command, burden of leadership',
      adjacent: ['Way of the Bond', 'Way of the Flame'],
      nodes: [
        {
          row: 1,
          name: 'Commanding Presence',
          description: 'Your Rally targets Prof allies simultaneously (this stacks with L4 upgrade).'
        },
        {
          row: 2,
          name: 'Tactical Directive',
          description: 'Once per round (free action), grant one ally within 30 yards 10 yards of movement that doesn\'t provoke.'
        },
        {
          row: 3,
          name: 'Warlord\'s Authority',
          description: 'Allies in your Hold the Line zone may use YOUR Proficiency dice for contests within the zone.'
        },
        {
          row: 4,
          name: 'Burden of Command',
          description: 'When you use any War Cry, also restore 1 Resolve to yourself.'
        },
        {
          row: 5,
          name: 'Sovereign Commander',
          description: 'Once per long rest, issue Absolute Command. All allies within 60 yards immediately take one free action (attack, move, or cast Basic spell).',
          tier: 'Legendary',
          targetNumber: 5
        }
      ]
    },
    {
      name: 'Way of the Flame',
      theme: 'Defiance, renewal, hope against despair',
      adjacent: ['Way of the Crown', 'Way of the Stone'],
      nodes: [
        {
          row: 1,
          name: 'Defiant Stand',
          description: 'At half HD or less, Weapon Strike deals +1 HD damage.'
        },
        {
          row: 2,
          name: 'Burning Resolve',
          description: 'When you fail a Resolve check, gain +2d6 to your next attack (doesn\'t burn HD).'
        },
        {
          row: 3,
          name: 'Undying Flame',
          description: 'First time per combat you would drop to 0 HD, stay at 1 HD and gain +Prof to next action\'s damage.'
        },
        {
          row: 4,
          name: 'Ignite Purpose',
          description: 'Once per short rest, when an ally within 30 yards drops to 0 HD/Resolve, gain a free action and +3d6 to your next roll (doesn\'t burn HD).'
        },
        {
          row: 5,
          name: 'Eternal Flame',
          description: 'Once per long rest, enter Blazing State for Prof rounds. Cannot drop below 1 HD. All attacks deal +Prof HD fire/radiant. When it ends, make a Resolve check.',
          tier: 'Legendary',
          targetNumber: 5
        }
      ]
    },
    {
      name: 'Way of the Stone',
      theme: 'Tradition, foundation, enduring memory',
      adjacent: ['Way of the Flame', 'Way of the Bell'],
      nodes: [
        {
          row: 1,
          name: 'Rooted Stance',
          description: 'If you haven\'t moved this round, gain +1d6 to defense (doesn\'t burn HD). Cannot be pushed or knocked prone.'
        },
        {
          row: 2,
          name: 'Cornerstone',
          description: 'Allies within 10 yards who can see you gain +1d6 to Resolve checks (doesn\'t burn HD).'
        },
        {
          row: 3,
          name: 'Immovable',
          description: 'Your Hold the Line zone cannot be ended by enemy effects. Reduce forced movement against you by 10 yards (minimum 0).'
        },
        {
          row: 4,
          name: 'Stonemind',
          description: 'Immune to fear, charm, and mental domination. Resolve checks against these auto-succeed.'
        },
        {
          row: 5,
          name: 'Monolith',
          description: 'Once per long rest, become immovable for Prof rounds. Double your current armor pool. Cannot move, but immune to attacks dealing less than Prof × 2 HD. Cornerstone extends to 30 yards.',
          tier: 'Legendary',
          targetNumber: 5
        }
      ]
    },
    {
      name: 'Way of the Bell',
      theme: 'Witness, truth-telling, accountability',
      adjacent: ['Way of the Stone', 'Way of the Shield'],
      nodes: [
        {
          row: 1,
          name: 'Witness Strike',
          description: 'On hit, learn target\'s exact HD and whether they have active magical effects.'
        },
        {
          row: 2,
          name: 'Truth of Battle',
          description: 'Cannot be surprised. Gain +2d6 to initiative.'
        },
        {
          row: 3,
          name: 'Accountability',
          description: 'Once per short rest, when you witness an enemy attack an ally, mark them. Your next attack against them gains +Prof damage and bypasses magical defenses (only armor/body dice apply).'
        },
        {
          row: 4,
          name: 'Toll the Bell',
          description: 'Once per short rest, as reaction when an enemy within 60 yards attempts to flee, they must make Resolve check or cannot move for 1 round.'
        },
        {
          row: 5,
          name: 'Final Witness',
          description: 'Once per long rest, ring the metaphysical Bell. All creatures within 60 yards: illusions end, invisible creatures revealed, disguises fail, lies from the last hour exposed. Choose one target: Resolve check at -3d6 or lose 2 Resolve.',
          tier: 'Legendary',
          targetNumber: 5
        }
      ]
    }
  ]
};

// Helper function to get starting character stats for Combatant at a given level
export function getCombatantAtLevel(level: number) {
  const milestone = CombatantClass.levelProgression.find(m => m.level === level);
  if (!milestone) return null;
  
  return {
    class: 'Combatant' as const,
    hitDieType: 'd10' as const,
    maxHD: milestone.bodyHD,
    currentHD: milestone.bodyHD,
    proficiency: milestone.proficiency,
    maxResolve: milestone.resolve,
    currentResolve: milestone.resolve,
    defenseCapacity: milestone.proficiency,
    armorProficiencies: CombatantClass.armorProficiencies.filter(a => a.unlockedAtLevel <= level)
  };
}
