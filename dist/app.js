/* global React, ReactDOM, useTweaks, TweaksPanel, TweakSection, TweakColor, TweakRadio,
   PortfolioPage, PortfolioBackBar, HomepageA, HomepageB, HomepageC,
   DesignCanvas, DCSection, DCArtboard */

const TWEAKS_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#C9A572",
  "density": "spacious",
  "heroLayout": "video",
  "showAll": true
} /*EDITMODE-END*/;
const HOMEPAGES = {
  a: {
    Comp: HomepageA,
    letter: 'A',
    title: 'Cinematic Premium'
  },
  b: {
    Comp: HomepageB,
    letter: 'B',
    title: 'Industrial Precision'
  },
  c: {
    Comp: HomepageC,
    letter: 'C',
    title: 'Editorial Calm'
  }
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
      window.scrollTo({
        top: 0,
        behavior: 'auto'
      });
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  const navigate = React.useCallback(id => {
    window.location.hash = id ? `#${id}` : '';
  }, []);
  return [route, navigate];
}
function App() {
  const [tweaks, setTweak] = useTweaks(TWEAKS_DEFAULTS);
  const [route, navigate] = useHashRoute();
  const {
    accent,
    density,
    heroLayout
  } = tweaks;
  let view;
  if (route === 'portfolio') {
    view = /*#__PURE__*/React.createElement(PortfolioPage, {
      accent: accent,
      density: density,
      onSelect: navigate
    });
  } else if (route === 'canvas') {
    view = /*#__PURE__*/React.createElement(DesignCanvas, {
      title: "Line Systems Oy \u2014 Verkkosivuehdotus",
      subtitle: "Kolme suuntaa \xB7 sukitusala \xB7 FI \xB7 EN \xB7 SV \xB7 DA \xB7 NO",
      background: "#16151a"
    }, /*#__PURE__*/React.createElement(DCSection, {
      id: "homepages",
      title: "Etusivu \u2014 kolme suuntaa"
    }, /*#__PURE__*/React.createElement(DCArtboard, {
      id: "a",
      label: "A \xB7 Cinematic premium",
      width: 1440,
      height: 5400
    }, /*#__PURE__*/React.createElement(HomepageA, {
      accent: accent,
      density: density,
      heroLayout: heroLayout,
      forceDesktop: true
    })), /*#__PURE__*/React.createElement(DCArtboard, {
      id: "b",
      label: "B \xB7 Industrial precision",
      width: 1440,
      height: 5200
    }, /*#__PURE__*/React.createElement(HomepageB, {
      accent: accent,
      density: density,
      heroLayout: heroLayout,
      forceDesktop: true
    })), /*#__PURE__*/React.createElement(DCArtboard, {
      id: "c",
      label: "C \xB7 Editorial calm",
      width: 1440,
      height: 6000
    }, /*#__PURE__*/React.createElement(HomepageC, {
      accent: accent,
      density: density,
      heroLayout: heroLayout,
      forceDesktop: true
    }))));
  } else {
    const {
      Comp,
      letter,
      title
    } = HOMEPAGES[route];
    view = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PortfolioBackBar, {
      accent: accent,
      letter: letter,
      title: title,
      onBack: () => navigate('')
    }), /*#__PURE__*/React.createElement(Comp, {
      accent: accent,
      density: density,
      heroLayout: heroLayout
    }));
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("main", null, view), /*#__PURE__*/React.createElement(TweaksPanel, {
    title: "Tweaks"
  }, /*#__PURE__*/React.createElement(TweakSection, {
    title: "Brand"
  }, /*#__PURE__*/React.createElement(TweakColor, {
    label: "Accent (kulta/pronssi)",
    value: tweaks.accent,
    onChange: v => setTweak('accent', v)
  })), /*#__PURE__*/React.createElement(TweakSection, {
    title: "Layout"
  }, /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Tiheys",
    value: tweaks.density,
    onChange: v => setTweak('density', v),
    options: [{
      value: 'dense',
      label: 'Tiheä'
    }, {
      value: 'normal',
      label: 'Normaali'
    }, {
      value: 'spacious',
      label: 'Väljä'
    }]
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Hero",
    value: tweaks.heroLayout,
    onChange: v => setTweak('heroLayout', v),
    options: [{
      value: 'video',
      label: 'Video'
    }, {
      value: 'image',
      label: 'Kuva'
    }, {
      value: 'logo',
      label: 'Logo'
    }]
  })), /*#__PURE__*/React.createElement(TweakSection, {
    title: "Quick swatches"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, [['#C9A572', 'Pronssi'], ['#D4B57A', 'Vaalea kulta'], ['#A8854A', 'Tumma pronssi'], ['#E8DCC0', 'Bone'], ['#B8956A', 'Antiikkikupari']].map(([c, n]) => /*#__PURE__*/React.createElement("button", {
    key: c,
    onClick: () => setTweak('accent', c),
    style: {
      padding: '8px 12px',
      background: c,
      color: '#0B0B0C',
      border: 0,
      fontSize: 11,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, n))))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));