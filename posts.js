function loadRandomIframe() {
  const iframes = [
    'https://weixiaogithub.github.io/.io/web/colorful.html',
    'https://weixiaogithub.github.io/.io/web/planewar.html',
    'https://weixiaogithub.github.io/.io/web/blackhole.html',
    'https://weixiaogithub.github.io/.io/web/luopan1.html',
    'https://weixiaogithub.github.io/.io/web/luopan3',
    'https://weixiaogithub.github.io/.io/web/sb-bird',
    'https://weixiaogithub.github.io/.io/web/starmouse.html',
    
  ];

  const randomIndex = Math.floor(Math.random() * iframes.length);
  const randomIframeSrc = iframes[randomIndex];

  const randomIframeElement = document.getElementById('random-iframe');
  const iframeHtml = `<iframe src="${randomIframeSrc}" frameborder="0" width="100%" height="500"></iframe>`;
  randomIframeElement.innerHTML = iframeHtml;
}

// 将 loadRandomIframe() 函数绑定到 window.onload 事件上
window.onload = loadRandomIframe;
