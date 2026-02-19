import { useState } from 'react';
import '../styles/Cosmology.css';

type CosmologyTab = 'realms' | 'custodial' | 'deities' | 'affinities';

export default function Cosmology() {
  const [activeTab, setActiveTab] = useState<CosmologyTab>('realms');

  return (
    <div className="cosmology-page">
      <header className="cosmology-header">
        <h1>◇ Cosmology of Aeralon</h1>
        <p className="design-intent">
          A cosmic geography of planes, powers, and the forces that shape reality
        </p>
      </header>

      <nav className="cosmology-tabs">
        <button
          className={`tab ${activeTab === 'realms' ? 'active' : ''}`}
          onClick={() => setActiveTab('realms')}
        >
          Realms
        </button>
        <button
          className={`tab ${activeTab === 'custodial' ? 'active' : ''}`}
          onClick={() => setActiveTab('custodial')}
        >
          Custodial Powers
        </button>
        <button
          className={`tab ${activeTab === 'deities' ? 'active' : ''}`}
          onClick={() => setActiveTab('deities')}
        >
          Deities
        </button>
        <button
          className={`tab ${activeTab === 'affinities' ? 'active' : ''}`}
          onClick={() => setActiveTab('affinities')}
        >
          Affinities
        </button>
      </nav>

      <section className="cosmology-content">
        {activeTab === 'realms' && <RealmsSection />}
        {activeTab === 'custodial' && <CustodialSection />}
        {activeTab === 'deities' && <DeitiesSection />}
        {activeTab === 'affinities' && <AffinitiesSection />}
      </section>
    </div>
  );
}

function RealmsSection() {
  return (
    <div className="cosmology-section">
      <h2>◇ The Shape of the Cosmos</h2>
      <p>
        All existence is suspended within <strong>the Veil Beyond</strong>, the absolute outer boundary—a 
        lightless metaphysical expanse that separates reality from unreality. Within the Veil drift the 
        <strong> Realms</strong>, vast metaphysical territories shaped by belief, principle, and primordial force.
      </p>

      <div className="lore-quote">
        "Between the Realms flows the Ethereal Void, the navigable emptiness. It has no substance, 
        no time, no direction—only relative distance measured in will and intent."
      </div>

      <h2>◇ The Reflected Realms</h2>
      <p>Three echoes of one truth—<strong>mortality, growth, and ending</strong>—bound together in a reflection that cannot be broken without unmaking all three.</p>

      <div className="realm-card reflected">
        <h3>The Mortal Weave</h3>
        <p className="realm-subtitle">Realm of Balance, Memory, and Mortality</p>
        <p>
          The core Plane of existence. Most inhabitants born here are mortal beings—a payment for living 
          on the only Plane to encompass elements from all other Inner and Outer Planes. The Mortal Weave 
          is full of life and death, and this balance makes it unique.
        </p>
        <div className="creatures-block">
          <strong>Common Creatures:</strong> All non-magical creatures originate here. Crownstags, 
          river-serpents, ash bears, glass-winged hawks.
        </div>
      </div>

      <div className="realm-card reflected">
        <h3>The Gloam</h3>
        <p className="realm-subtitle">Realm of Death, Endings, and Mercy</p>
        <p>
          A reflection of the Mortal Weave shrouded in heavy mist and perpetual darkness. The entire realm 
          is filled with pale darkness, save for a dim ever-present moon and faint distant stars. The Gloam 
          asks only: <em>What did this mean?</em>
        </p>
        <p>
          This is not a land of the dead. It is the weight of endings, given geography. The Gloam experiences 
          <strong> Mourning States</strong>—emotional weather that rolls across the landscape: The Vigil, 
          The Remembrance, The Release, and The Hollow.
        </p>
        <div className="creatures-block">
          <strong>Common Creatures:</strong> Vampires, ghouls, ghosts, revenants, banshees, mournbats, 
          pall-wolves, candlewights, bone moths, veil-cats.
        </div>
      </div>

      <div className="realm-card reflected">
        <h3>The Verdant Verge</h3>
        <p className="realm-subtitle">Realm of Excess Life, Growth, and Wild Magic</p>
        <p>
          The "opposite" to the Gloam—full of unchecked vitality, biological excess, and generative chaos. 
          Despite its beauty, this is a dangerous and hostile Plane. Often called the Faerie Plane.
        </p>
        <p>
          The Verdant Verge does not have rulers—it has <strong>ecological imperatives given will</strong>: 
          The Bloom (unstoppable growth), The Withering (necessary decay), The Tempest (creative chaos), 
          and The Buried Root (slow endurance).
        </p>
        <div className="creatures-block">
          <strong>Common Creatures:</strong> Fey, nymphs, satyrs, centaurs, pixies, dryads, Eladrin, 
          halflings, goblins, trolls, thorn-elks, laughing foxes.
        </div>
      </div>

      <h2>◇ The Sovereign Realms</h2>
      <p>Seats of divine authority where the gods maintain their highest power. These Planes are filled with Divine magic.</p>

      <div className="realm-card sovereign">
        <h3>The Empyreal Accord</h3>
        <p className="realm-subtitle">Realm of Law, Unity, and Sacred Obligation</p>
        <p>
          The largest of the Outer Planes, composed of four demi-Planes: The Golden Hills, Brightwater, 
          Arvandor, and the House of Knowledge. This is the Plane of pure Celestial existence.
        </p>
        <div className="creatures-block">
          <strong>Common Creatures:</strong> Unicorns, angels, aasimar, pegasi, guardinals, lillendi, 
          asuras, luminarch gryphons, oath-lions.
        </div>
      </div>

      <div className="realm-card fracture">
        <h3>The Schism-Scarred (The Engine)</h3>
        <p className="realm-subtitle">Realm of Eternal Debt, Infernal Law, and Contract</p>
        <p>
          Once a single realm, now fractured by cosmic betrayal. The Engine runs on broken promises and 
          unfulfilled obligations—every debt feeds its hungry gears. Azravael rules here through 
          contract-magic older than mercy.
        </p>
        <div className="creatures-block">
          <strong>Common Creatures:</strong> Devils, imps, cambions, chain-wraiths, contract-hounds, 
          debt-collectors, soul-brokers.
        </div>
      </div>
    </div>
  );
}

function CustodialSection() {
  return (
    <div className="cosmology-section">
      <h2>◇ The Custodial Powers</h2>
      <p>
        Ancient entities that maintain the fundamental laws and structures of reality. They are not gods 
        in the traditional sense—they are <em>functions</em>, cosmic roles that must be filled.
      </p>

      <div className="power-grid">
        <div className="power-card">
          <h3>The Concordant Halls</h3>
          <p className="power-domain">◇ Oaths, Purpose, Commitment</p>
          <p>
            Keepers of sworn purpose. The Halls do not judge what is sworn—only that commitment is real.
            Paladins, mercenaries, executioners—all walk the Halls equally if their purpose is true.
            Morality is for gods. The Halls recognize only <strong>will made manifest</strong>.
          </p>
          <p className="power-classes">
            <strong>Connected Classes:</strong> Combatant, Priest
          </p>
        </div>

        <div className="power-card">
          <h3>The Living Accord</h3>
          <p className="power-domain">◇ Nature, Balance, Life and Death Cycles</p>
          <p>
            Maintains the balance between growth and decay, predation and preservation. The Accord 
            recognizes no difference between nurturing and culling—both are necessary for balance.
          </p>
          <p className="power-classes">
            <strong>Connected Classes:</strong> Ranger, Shaman
          </p>
        </div>

        <div className="power-card">
          <h3>The Curator Arcanum</h3>
          <p className="power-domain">◇ Knowledge, Understanding, Patterns</p>
          <p>
            Keepers of knowledge and humility. The Curator teaches that knowledge without humility 
            ends the world, but interpretation of this lesson varies. Understanding something 
            completely is the first step to controlling it.
          </p>
          <p className="power-classes">
            <strong>Connected Classes:</strong> Scholar, Weaver
          </p>
        </div>

        <div className="power-card">
          <h3>The Black Reliquary</h3>
          <p className="power-domain">◇ Endings, Final Accounting, Necessary Destruction</p>
          <p>
            Keepers of the Final Accounting. They record how each soul lived, how it ended, and whether 
            the ending matched the life. Not judges—archivists whose records cannot be falsified, even by gods.
          </p>
          <p className="power-classes">
            <strong>Location:</strong> The Gloam
          </p>
        </div>

        <div className="power-card">
          <h3>The Verdant Synod</h3>
          <p className="power-domain">◇ Living Processes, Ecological Moderation</p>
          <p>
            Custodians who attempt to moderate the Excesses and prevent total ecological collapse 
            in the Verdant Verge. They are gardeners of impossible scale.
          </p>
          <p className="power-classes">
            <strong>Location:</strong> The Verdant Verge
          </p>
        </div>

        <div className="power-card">
          <h3>The Loom of Fates</h3>
          <p className="power-domain">◇ Possibility, Paths Not Taken</p>
          <p>
            Archivists of Possibility. They do not weave fate—they record the paths not taken, so that 
            the dead may understand what their choices cost and what they earned.
          </p>
          <p className="power-classes">
            <strong>Location:</strong> The Gloam
          </p>
        </div>
      </div>
    </div>
  );
}

function DeitiesSection() {
  return (
    <div className="cosmology-section">
      <h2>◇ Greater Deities</h2>
      <p>
        Beyond the Custodial Powers exist gods—entities with personality, agenda, and mortal followers.
        Every god reaches toward the Mortal Weave, yet none may claim it.
      </p>

      <div className="deity-section">
        <h4>Order &amp; Protection</h4>
        <ul className="deity-list">
          <li><strong>Aubret the Unbent</strong> — Law, justice, incorruptibility</li>
          <li><strong>Nyroth Stonebound</strong> — Oaths, bonds, communal strength</li>
          <li><strong>Caerith the Dawnwarden</strong> — Protection, guardianship, mercy-in-action</li>
          <li><strong>Korthane the Coinbound</strong> — Trade, finite obligation, fair exchange</li>
        </ul>
      </div>

      <div className="deity-section">
        <h4>Memory &amp; Passage</h4>
        <ul className="deity-list">
          <li><strong>Aluneth</strong> — Memory, tides, continuity (resides in Mortal Weave)</li>
          <li><strong>Murien of a Thousand Names</strong> — Stories, identity, craft</li>
          <li><strong>Thalos of the Even Hand</strong> — Consequence, choice, fate's weight</li>
          <li><strong>Aralys the Veilbearer</strong> — Death's mercy, final remembrance</li>
        </ul>
      </div>

      <div className="deity-section">
        <h4>Life &amp; Cycle</h4>
        <ul className="deity-list">
          <li><strong>Thymera, the Verdant-Mother</strong> — Growth, healing, inevitability</li>
          <li><strong>Darthun, the Coil Below</strong> — Decay, cycles, necessity</li>
          <li><strong>Balemor the Hearth-Walker</strong> — Comfort within process, solace for the lost</li>
        </ul>
      </div>

      <div className="deity-section">
        <h4>Hearth &amp; Community</h4>
        <ul className="deity-list">
          <li><strong>Ilyra the Hearthbound</strong> — Home, community, survival (presence only, never manifests)</li>
          <li><strong>Beryn the Laughing Dawn</strong> — Joy, family, renewal</li>
        </ul>
      </div>

      <div className="deity-section">
        <h4>Change &amp; Becoming</h4>
        <ul className="deity-list">
          <li><strong>Iosyx the Twin-Flame</strong> — Chaos, elemental flux, cosmic change</li>
          <li><strong>Zarun the Unshaped</strong> — Personal transformation, identity, freedom</li>
        </ul>
      </div>

      <div className="deity-section">
        <h4>Tyranny &amp; Corruption</h4>
        <ul className="deity-list">
          <li><strong>Azravael</strong> — Rewritten obligation, eternal debt, infernal law</li>
          <li><strong>Gephorix the Many-Masked</strong> — Pain-as-truth, suffering, despair</li>
          <li><strong>Velkir the Ash-Tongued</strong> — Corruption through knowledge, whispered shortcuts</li>
        </ul>
      </div>

      <div className="lore-quote">
        "Every god reaches toward the Mortal Weave, yet none may claim it. The Balance exists because they cannot agree."
      </div>
    </div>
  );
}

function AffinitiesSection() {
  return (
    <div className="cosmology-section">
      <h2>◇ The Affinity System</h2>
      <p>
        Characters possess <strong>Affinities</strong>—connections to fundamental virtues and cosmic principles 
        that grant bonus dice when embodied through action. Each Affinity represents a philosophy, a way of 
        engaging with reality that resonates with specific cosmic forces.
      </p>

      <div className="affinity-grid">
        <div className="affinity-tag">
          <h4>◇ Guardian</h4>
          <p>Protection, duty, steadfastness</p>
        </div>
        <div className="affinity-tag">
          <h4>◇ Freedom</h4>
          <p>Liberation, choice, independence</p>
        </div>
        <div className="affinity-tag">
          <h4>◇ Memory</h4>
          <p>Preservation, truth, remembrance</p>
        </div>
        <div className="affinity-tag">
          <h4>◇ Knowledge</h4>
          <p>Understanding, patterns, humility</p>
        </div>
        <div className="affinity-tag">
          <h4>◇ Chaos</h4>
          <p>Change, flux, transformation</p>
        </div>
        <div className="affinity-tag">
          <h4>◇ Order</h4>
          <p>Structure, law, stability</p>
        </div>
        <div className="affinity-tag">
          <h4>◇ Life</h4>
          <p>Growth, healing, vitality</p>
        </div>
        <div className="affinity-tag">
          <h4>◇ Death</h4>
          <p>Endings, mercy, passage</p>
        </div>
      </div>

      <h2>◇ Affinity Dice</h2>
      <div className="realm-card">
        <h3>Earning Affinity Dice</h3>
        <p>
          When you act in accordance with your Affinity—truly embodying its principles rather than 
          simply invoking them—you gain <strong>Affinity Dice</strong> that can be added to future rolls.
        </p>
        <p>
          These dice do <strong>not</strong> burn HD on 1s (unlike Exertion Dice). They represent cosmic 
          alignment, the brief synchronization between your will and the forces that shaped reality.
        </p>
        <p>
          Affinity Dice are earned through roleplay and GM judgment. They cannot be hoarded—unspent 
          Affinity Dice fade at the end of each session.
        </p>
      </div>

      <div className="lore-quote">
        "To have an Affinity is not to serve it. It is to recognize that some part of you has always 
        resonated with a fundamental truth—and in moments of alignment, that truth lends you its weight."
      </div>
    </div>
  );
}
