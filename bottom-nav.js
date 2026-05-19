(function () {
  var POST_LOGIN_TABS = [
    { id: 'home',     href: 'home-postlogin.html', activeIcon: 'images/nav-home-active.svg',     inactiveIcon: 'images/nav-home-inactive.svg' },
    { id: 'markets',  href: 'markets.html',         activeIcon: 'images/nav-markets-active.svg',  inactiveIcon: 'images/nav-markets-inactive.svg' },
    { id: 'trade',    href: 'trade.html',            activeIcon: 'images/nav-trade-active.svg',    inactiveIcon: 'images/nav-trade-inactive.svg' },
    { id: 'discover', href: 'discover.html',         activeIcon: 'images/nav-discover-active.svg', inactiveIcon: 'images/nav-discover-inactive.svg' },
    { id: 'asset',    href: 'asset.html',            activeIcon: 'images/nav-asset-active.svg',    inactiveIcon: 'images/nav-asset-inactive.svg' },
  ];

  var PRE_LOGIN_TABS = [
    { id: 'home',     href: 'index.html',            activeIcon: 'images/nav-home-active.svg',     inactiveIcon: 'images/nav-home-inactive.svg' },
    { id: 'markets',  href: 'markets.html#noWatchlist',   activeIcon: 'images/nav-markets-active.svg', inactiveIcon: 'images/nav-markets-inactive.svg' },
    { id: 'trade',    href: 'login.html',             activeIcon: 'images/nav-trade-active.svg',    inactiveIcon: 'images/nav-trade-inactive.svg' },
    { id: 'discover', href: 'discover.html#prelogin',  activeIcon: 'images/nav-discover-active.svg', inactiveIcon: 'images/nav-discover-inactive.svg' },
    { id: 'asset',    href: 'asset-prelogin.html',   activeIcon: 'images/nav-asset-active.svg',    inactiveIcon: 'images/nav-asset-inactive.svg' },
  ];

  function injectStyles() {
    var s = document.createElement('style');
    s.textContent = [
      '.bn-bar{position:fixed;bottom:0;left:0;width:393px;',
        'background:linear-gradient(189deg,#fcfcfd 0%,rgba(252,252,253,.6) 100%);',
        'backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);',
        'display:flex;flex-direction:column;align-items:center;z-index:100;}',
      '.bn-items{display:flex;align-items:center;width:375px;',
        'padding:12px 20px 4px;height:60px;}',
      '.bn-item{flex:1;display:flex;align-items:center;justify-content:center;',
        'height:44px;cursor:pointer;}',
      '.bn-pill{display:flex;align-items:center;justify-content:center;',
        'background:#0a36c7;border-radius:24px;padding:8px 16px;}',
      '.bn-icon{width:24px;height:24px;display:block;object-fit:contain;}',
      '.bn-home-bar-wrap{width:393px;height:21px;display:flex;',
        'align-items:flex-end;justify-content:center;padding-bottom:8px;}',
      '.bn-home-bar{width:139px;height:5px;',
        'background:rgba(30,30,30,.3);border-radius:100px;}',
    ].join('');
    document.head.appendChild(s);
  }

  function render(activeId, tabs) {
    var items = tabs.map(function (tab) {
      var isActive = tab.id === activeId;
      var icon = '<img class="bn-icon" src="' + (isActive ? tab.activeIcon : tab.inactiveIcon) + '" alt="' + tab.id + '">';
      var inner = isActive ? '<div class="bn-pill">' + icon + '</div>' : icon;
      var click = tab.href !== '#' ? ' onclick="location.href=\'' + tab.href + '\'"' : '';
      return '<div class="bn-item"' + click + '>' + inner + '</div>';
    }).join('');

    var bar = document.createElement('div');
    bar.className = 'bn-bar';
    bar.innerHTML =
      '<div class="bn-items">' + items + '</div>' +
      '<div class="bn-home-bar-wrap"><div class="bn-home-bar"></div></div>';
    document.body.appendChild(bar);
  }

  window.BottomNav = {
    init: function (activeId, mode) {
      var tabs = (mode === 'prelogin') ? PRE_LOGIN_TABS : POST_LOGIN_TABS;
      injectStyles();
      render(activeId, tabs);
    }
  };
})();
