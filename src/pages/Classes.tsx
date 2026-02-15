function Classes() {
  return (
    <div className="page">
      <h1>Classes</h1>
      
      <div className="class-list">
        <div className="class-card">
          <h2>Combatant (d10)</h2>
          <p className="class-subtitle">Oath-Bound Warrior, Battlefield Master</p>
          <p>
            <strong>Custodial Connection:</strong> The Concordant Halls
          </p>
          <p>
            Warriors who have bound themselves to something greater than survival. Through oaths that carry
            metaphysical weight, Combatants master armor, weaponry, and battlefield control. They are durable,
            skilled, and when they speak their oath aloud, reality itself reinforces their will.
          </p>
          <h3>Key Abilities</h3>
          <ul>
            <li><strong>Weapon Strike:</strong> All weapon attacks are Basic (2+) tier</li>
            <li><strong>Battlefield Awareness:</strong> Advantage on tactical assessment</li>
            <li><strong>War Cries:</strong> Rally allies, hold the line, unbreakable will</li>
          </ul>
        </div>

        <div className="class-card">
          <h2>Priest (d8)</h2>
          <p className="class-subtitle">Invoker, Resolve Anchor, Space Sanctifier</p>
          <p>
            <strong>Custodial Connection:</strong> Any Custodial Power
          </p>
          <p>
            Mortal vessels who channel powers far beyond themselves. Through Power Words, they speak reality
            into compliance, steadying the collapsing, sanctifying the profane, transforming loss into sacrifice
            with purpose. They are conduits between the mortal and the infinite.
          </p>
          <h3>Key Abilities</h3>
          <ul>
            <li><strong>Power Word: Endure:</strong> Restore HD and Resolve</li>
            <li><strong>Power Word: Smite:</strong> Devastating divine judgment</li>
            <li><strong>Sanctify Space:</strong> Claim areas as patron's domain</li>
          </ul>
        </div>

        <div className="class-card">
          <h2>Ranger (d8)</h2>
          <p className="class-subtitle">Wilderness Master, Terrain Controller, Hunter</p>
          <p>
            <strong>Custodial Connection:</strong> The Living Accord
          </p>
          <p>
            Those who have learned to read the natural world's code and rewrite the rules of engagement.
            Rangers don't fight in the wilds—they make the wilds fight for them. They decide where the
            battle happens and who suffers along the way.
          </p>
          <h3>Key Abilities</h3>
          <ul>
            <li><strong>Nature's Treaty:</strong> Auto-succeed Basic wilderness checks</li>
            <li><strong>Mark Prey:</strong> Track and hunt with supernatural precision</li>
            <li><strong>Killing Ground:</strong> Weaponize terrain against enemies</li>
          </ul>
        </div>

        <div className="class-card">
          <h2>Scholar (d8)</h2>
          <p className="class-subtitle">Knowledge Weaponizer, Pattern Identifier</p>
          <p>
            <strong>Custodial Connection:</strong> The Curator Arcanum
          </p>
          <p>
            Those who understand patterns reveal inevitability. Scholars see hidden structures that govern
            behavior, predict outcomes before they unfold, and weaponize information itself. Understanding
            something completely is the first step to controlling it.
          </p>
          <h3>Key Abilities</h3>
          <ul>
            <li><strong>Analyze:</strong> Identify weaknesses and vulnerabilities</li>
            <li><strong>Exploit Weakness:</strong> Devastating strikes against studied foes</li>
            <li><strong>Crafting Mastery:</strong> Create items and augments</li>
          </ul>
        </div>

        <div className="class-card">
          <h2>Weaver (d6)</h2>
          <p className="class-subtitle">Reality Bender, Spell Supremacist</p>
          <p>
            <strong>Custodial Connection:</strong> The Curator Arcanum
          </p>
          <p>
            Those who rewrite the laws of reality through applied understanding. Weavers are the only class
            capable of casting Ultimate tier spells. Fragile but devastating, they trade durability for the
            ability to reshape existence itself.
          </p>
          <h3>Key Abilities</h3>
          <ul>
            <li><strong>Spell Supremacy:</strong> Can cast Ultimate tier spells</li>
            <li><strong>Arcane Flexibility:</strong> Largest spell selection</li>
            <li><strong>Reality Manipulation:</strong> Bend fundamental laws</li>
          </ul>
        </div>

        <div className="class-card">
          <h2>Shaman (d6)</h2>
          <p className="class-subtitle">Spirit Speaker, Threshold Walker</p>
          <p>
            <strong>Custodial Connection:</strong> The Veiled Threshold
          </p>
          <p>
            Those who commune with spirits and walk between worlds. Shamans negotiate with entities that
            exist beyond mortal perception, channeling their power through rituals and bargains. They are
            fragile but connected to forces most cannot perceive.
          </p>
          <h3>Key Abilities</h3>
          <ul>
            <li><strong>Spirit Communion:</strong> Channel spirit aid</li>
            <li><strong>Threshold Sight:</strong> See through veils</li>
            <li><strong>Ritual Mastery:</strong> Powerful ceremonies</li>
          </ul>
        </div>

        <div className="class-card">
          <h2>Sovereign (d10)</h2>
          <p className="class-subtitle">Self-Sufficient Master, Balance Keeper</p>
          <p>
            <strong>Custodial Connection:</strong> None (intentionally unbound)
          </p>
          <p>
            Warriors who master themselves rather than serve greater powers. Sovereigns are resource
            efficiency experts who convert between HD, Resolve, and other resources. They need no patron,
            no custodian—only perfect discipline and understanding of their own limits.
          </p>
          <h3>Key Abilities</h3>
          <ul>
            <li><strong>Internal Alchemy:</strong> Convert between resources</li>
            <li><strong>Centered Strike:</strong> Economy bonuses at peak efficiency</li>
            <li><strong>Efficient Recovery:</strong> Resource restoration mastery</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Classes;
