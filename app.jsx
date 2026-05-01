/* global React, ReactDOM, useTweaks, TweaksPanel, TweakSection, TweakColor, TweakRadio,
   PortfolioPage, PortfolioBackBar, HomepageA, HomepageB, HomepageC,
   DesignCanvas, DCSection, DCArtboard */

const TWEAKS_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#C9A572",
  "density": "spacious",
  "heroLayout": "video",
  "showAll": true
}/*EDITMODE-END*/;

const HOMEPAGES = {
  a: { Comp: HomepageA, letter: 'A', title: 'Cinematic Premium' },
  b: { Comp: HomepageB, letter: 'B', title: 'Industrial Precision' },
  c: { Comp: HomepageC, letter: 'C', title: 'Editorial Calm' },
};

function useHashRoute() {
  const parse = () => {
    const h = (window.location.hash || '').replace(/^#/, '').toLowerCase();
    if (h === 'a' || h === 'b' || h === 'c') return h;
    if (h === 'canvas') return 'canvas';
    return 'portfolio';
  };
  const [route, setRoute] = React.useState(parse);
  React.useEffect(() => {
    const onChange = () => {
      setRoute(parse());
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  const navigate = React.useCallback((id) => {
    window.location.hash = id ? `#${id}` : '';
  }, []);
  return [route, navigate];
}

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAKS_DEFAULTS);
  const [route, navigate] = useHashRoute();
  const { accent, density, heroLayout } = tweaks;

  let view;
  if (route === 'portfolio') {
    view = <PortfolioPage accent={accent} density={density} onSelect={navigate} />;
  } else if (route === 'canvas') {
    view = (
      <DesignCanvas title="Line Systems Oy — Verkkosivuehdotus" subtitle="Kolme suuntaa · sukitusala · FI · EN · SV · DA · NO" background="#16151a">
        <DCSection id="homepages" title="Etusivu — kolme suuntaa">
          <DCArtboard id="a" label="A · Cinematic premium" width={1440} height={5400}>
            <HomepageA accent={accent} density={density} heroLayout={heroLayout} forceDesktop={true} />
          </DCArtboard>
          <DCArtboard id="b" label="B · Industrial precision" width={1440} height={5200}>
            <HomepageB accent={accent} density={density} heroLayout={heroLayout} forceDesktop={true} />
          </DCArtboard>
          <DCArtboard id="c" label="C · Editorial calm" width={1440} height={6000}>
            <HomepageC accent={accent} density={density} heroLayout={heroLayout} forceDesktop={true} />
          </DCArtboard>
        </DCSection>
      </DesignCanvas>
    );
  } else {
    const { Comp, letter, title } = HOMEPAGES[route];
    view = (
      <>
        <PortfolioBackBar accent={accent} letter={letter} title={title} onBack={() => navigate('')} />
        <Comp accent={accent} density={density} heroLayout={heroLayout} />
      </>
    );
  }

  return (
    <>
      <main>{view}</main>

      <TweaksPanel title="Tweaks">
        <TweakSection title="Brand">
          <TweakColor label="Accent (kulta/pronssi)" value={tweaks.accent} onChange={v => setTweak('accent', v)} />
        </TweakSection>
        <TweakSection title="Layout">
          <TweakRadio label="Tiheys" value={tweaks.density} onChange={v => setTweak('density', v)} options={[
            { value: 'dense', label: 'Tiheä' },
            { value: 'normal', label: 'Normaali' },
            { value: 'spacious', label: 'Väljä' },
          ]} />
          <TweakRadio label="Hero" value={tweaks.heroLayout} onChange={v => setTweak('heroLayout', v)} options={[
            { value: 'video', label: 'Video' },
            { value: 'image', label: 'Kuva' },
            { value: 'logo', label: 'Logo' },
          ]} />
        </TweakSection>
        <TweakSection title="Quick swatches">
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {[
              ['#C9A572', 'Pronssi'],
              ['#D4B57A', 'Vaalea kulta'],
              ['#A8854A', 'Tumma pronssi'],
              ['#E8DCC0', 'Bone'],
              ['#B8956A', 'Antiikkikupari'],
            ].map(([c, n]) => (
              <button key={c} onClick={() => setTweak('accent', c)} style={{
                padding: '8px 12px', background: c, color: '#0B0B0C', border: 0,
                fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600,
                cursor: 'pointer',
              }}>{n}</button>
            ))}
          </div>
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
