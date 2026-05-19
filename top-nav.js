(function () {
  var STYLE = [
    '.tn-status-bar{width:393px;height:54px;background:#fff;display:flex;align-items:center;',
      'justify-content:space-between;padding:14px 20px 0;position:relative;z-index:10;}',
    '.tn-time{font-size:15px;font-weight:600;color:#282d34;}',
    '.tn-status-icons{display:flex;gap:6px;align-items:center;}',
    '.tn-status-icons svg,.tn-status-icons img{display:block;}',
    '.tn-nav-bar{width:393px;height:44px;display:flex;align-items:center;',
      'justify-content:space-between;padding:9px 20px;background:#fff;',
      'position:relative;z-index:10;}',
    /* Mode 1 & 2: hamburger dot-grid (left side) */
    '.tn-menu{width:20px;height:20px;display:grid;',
      'grid-template-columns:repeat(3,3.7px);grid-template-rows:repeat(3,3.7px);',
      'gap:3.2px;padding:2px;}',
    '.tn-menu span{width:3.7px;height:3.7px;border-radius:50%;background:#282d34;}',
    '.tn-menu span.dim{background:#c2c7d0;}',
    /* Mode 2: center pill */
    '.tn-center{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);',
      'background:#f4f5f6;border-radius:50px;padding:7px 12px;',
      'display:flex;align-items:center;gap:4px;}',
    '.tn-center-text{font-size:12px;font-weight:600;color:#282d34;white-space:nowrap;}',
    '.tn-center-icon{width:14px;height:14px;opacity:0.6;}',
    /* Mode 1: search bar */
    '.tn-search{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);',
      'background:#f4f5f6;border-radius:8px;height:36px;width:281px;',
      'display:flex;align-items:center;gap:8px;padding:0 12px;overflow:hidden;}',
    '.tn-search-ticker-wrap{overflow:hidden;height:20px;position:relative;flex:1;min-width:0;}',
    '.tn-search-ticker{display:flex;flex-direction:column;',
      'transition:transform 0.4s cubic-bezier(0.4,0,0.2,1);}',
    '.tn-search-ticker span{height:20px;line-height:20px;font-size:14px;',
      'color:#c2c7d0;font-weight:400;white-space:nowrap;}',
    /* Mode 3: back + title (left side) */
    '.tn-left-title{display:flex;align-items:center;gap:12px;}',
    '.tn-back{width:20px;height:20px;cursor:pointer;display:flex;align-items:center;justify-content:center;}',
    '.tn-title-text{font-size:20px;font-weight:600;color:#282d34;line-height:28px;}',
    '.tn-center-title{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);',
      'font-size:20px;font-weight:600;color:#282d34;line-height:28px;white-space:nowrap;}',
    /* Shared right side */
    '.tn-right{display:flex;align-items:center;gap:20px;flex-shrink:0;}',
    '.tn-right img{width:20px;height:20px;display:block;cursor:pointer;}',
  ].join('');

  var STATUS_ICONS = [
    '<svg width="17" height="12" viewBox="0 0 17 12" fill="#282d34">',
      '<rect x="0" y="6" width="3" height="6" rx="1"/>',
      '<rect x="4.5" y="4" width="3" height="8" rx="1"/>',
      '<rect x="9" y="2" width="3" height="10" rx="1"/>',
      '<rect x="13.5" y="0" width="3" height="12" rx="1"/>',
    '</svg>',
    '<svg width="16" height="12" viewBox="0 0 16 12" fill="none">',
      '<path d="M8 9.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill="#282d34"/>',
      '<path d="M4.2 7.1a5.3 5.3 0 017.6 0l1.3-1.3a7.2 7.2 0 00-10.2 0l1.3 1.3z" fill="#282d34"/>',
      '<path d="M1.2 4.1a9.5 9.5 0 0113.6 0L16 2.8A11.4 11.4 0 000 2.8l1.2 1.3z" fill="#282d34" opacity=".3"/>',
    '</svg>',
    '<svg width="25" height="12" viewBox="0 0 25 12">',
      '<rect x="0.5" y="0.5" width="21" height="11" rx="3.5" stroke="#282d34" stroke-opacity="0.35" fill="none"/>',
      '<rect x="2" y="2" width="17" height="8" rx="2" fill="#282d34"/>',
      '<path d="M23 4v4a2 2 0 000-4z" fill="#282d34" opacity="0.4"/>',
    '</svg>',
  ].join('');

  var MENU_DOTS = [
    '<span></span><span></span><span></span>',
    '<span></span><span></span><span class="dim"></span>',
    '<span></span><span class="dim"></span><span class="dim"></span>',
  ].join('');

  var DEFAULT_CENTER_ICON = '<svg class="tn-center-icon" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 7l2 2 4-4" stroke="#282d34" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  var DEFAULT_RIGHT_ICON = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2C8.4 2 7 3.1 6.6 4.6C4.6 5.2 3 7 3 9.2V13L1.5 14.5V15.5H18.5V14.5L17 13V9.2C17 7 15.4 5.2 13.4 4.6C13 3.1 11.6 2 10 2Z" stroke="#282d34" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 15.5C8 16.6 8.9 17.5 10 17.5C11.1 17.5 12 16.6 12 15.5" stroke="#282d34" stroke-width="1.4" stroke-linecap="round"/></svg>';

  var BACK_ICON = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><line x1="16" y1="10" x2="4" y2="10" stroke="#282d34" stroke-width="1.8" stroke-linecap="round"/><path d="M9 5L4 10L9 15" stroke="#282d34" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  function injectStyles() {
    var s = document.createElement('style');
    s.textContent = STYLE;
    document.head.appendChild(s);
  }

  function render(opts) {
    opts = opts || {};

    // ── Right icon(s) ──────────────────────────────────────────────
    var rightIcon = opts.rightIcons
      ? opts.rightIcons.map(function(ic) { return '<img src="' + ic.src + '" alt="' + (ic.alt || '') + '"' + (ic.href ? ' onclick="location.href=\'' + ic.href + '\'"' : '') + '>'; }).join('')
      : opts.rightIconSvg
        ? opts.rightIconSvg
        : opts.rightIconSrc
          ? '<img src="' + opts.rightIconSrc + '" alt="">'
          : DEFAULT_RIGHT_ICON;

    // ── Mode 3: pure title (back arrow + title text, no center) ────
    if (opts.showTitle) {
      var titleText = opts.titleText || '';
      var leftHtml, titleCenterHtml = '';
      if (opts.centerTitle) {
        leftHtml = '<div class="tn-back" onclick="history.back()">' + BACK_ICON + '</div>';
        titleCenterHtml = titleText ? '<span class="tn-center-title">' + titleText + '</span>' : '';
      } else {
        leftHtml =
          '<div class="tn-left-title">' +
            '<div class="tn-back" onclick="history.back()">' + BACK_ICON + '</div>' +
            (titleText ? '<span class="tn-title-text">' + titleText + '</span>' : '') +
          '</div>';
      }
      var rightHtml = opts.hideRight ? '' : '<div class="tn-right">' + rightIcon + '</div>';
      var wrap3 = document.createElement('div');
      wrap3.innerHTML =
        '<div class="tn-status-bar">' +
          '<span class="tn-time">9:41</span>' +
          '<div class="tn-status-icons">' + STATUS_ICONS + '</div>' +
        '</div>' +
        '<div class="tn-nav-bar">' +
          leftHtml +
          titleCenterHtml +
          rightHtml +
        '</div>';
      var frag3 = document.createDocumentFragment();
      while (wrap3.firstChild) frag3.appendChild(wrap3.firstChild);
      var container3 = document.querySelector(opts.container || '.page-scroll') || document.body;
      container3.insertBefore(frag3, container3.firstChild);
      return;
    }

    // ── Mode 1 & 2: hamburger left, center search or pill ──────────
    var centerText = opts.centerText || 'Account';
    var centerIcon = opts.centerIconSrc
      ? '<img class="tn-center-icon" src="' + opts.centerIconSrc + '" alt="">'
      : DEFAULT_CENTER_ICON;

    var SEARCH_ICON = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="7" cy="7" r="4.5" stroke="#c2c7d0" stroke-width="1.3"/><line x1="10.2" y1="10.2" x2="13.5" y2="13.5" stroke="#c2c7d0" stroke-width="1.3" stroke-linecap="round"/></svg>';
    var searchTickers = opts.searchTickers || ['🔥 ETHUSD', '🔥 BTCUSD', '🔥 SOLUSD'];
    var searchTickerHtml = searchTickers.map(function(t) { return '<span>' + t + '</span>'; }).join('');

    var centerHtml = opts.hideCenter ? '' :
      opts.showSearch
        ? '<div class="tn-search" id="tn-search-bar">' +
            SEARCH_ICON +
            '<div class="tn-search-ticker-wrap">' +
              '<div class="tn-search-ticker" id="tn-search-ticker">' + searchTickerHtml + '</div>' +
            '</div>' +
          '</div>'
        : '<div class="tn-center">' +
            '<span class="tn-center-text">' + centerText + '</span>' +
            centerIcon +
          '</div>';

    var wrap = document.createElement('div');
    wrap.innerHTML =
      '<div class="tn-status-bar">' +
        '<span class="tn-time">9:41</span>' +
        '<div class="tn-status-icons">' + STATUS_ICONS + '</div>' +
      '</div>' +
      '<div class="tn-nav-bar">' +
        (opts.showBack
          ? '<div class="tn-back" onclick="history.back()">' + BACK_ICON + '</div>'
          : '<div class="tn-menu" onclick="location.href=\'' + (opts.menuHref || 'profile.html') + '\'" style="cursor:pointer">' + MENU_DOTS + '</div>') +
        centerHtml +
        '<div class="tn-right">' + rightIcon + '</div>' +
      '</div>';

    var frag = document.createDocumentFragment();
    while (wrap.firstChild) frag.appendChild(wrap.firstChild);
    var container = document.querySelector(opts.container || '.page-scroll') || document.body;
    container.insertBefore(frag, container.firstChild);

    if (opts.showSearch && !opts.hideCenter) {
      var ticker = document.getElementById('tn-search-ticker');
      if (ticker) {
        var items = ticker.querySelectorAll('span');
        var idx = 0;
        setInterval(function() {
          idx = (idx + 1) % items.length;
          ticker.style.transform = 'translateY(-' + (idx * 20) + 'px)';
        }, 2000);
      }
    }
  }

  window.TopNav = {
    init: function (opts) {
      injectStyles();
      render(opts);
    }
  };
})();
