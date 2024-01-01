function loadRandomIframe() {
  const iframes = [
    'https://weixiaogithub.github.io/.io/colorful.html',
    'https://weixiaogithub.github.io/.io/planewar.html',
    'https://weixiaogithub.github.io/.io/blackhole.html',
    'https://weixiaogithub.github.io/.io/luopan1.html',
    'https://weixiaogithub.github.io/.io/luopan2',
    'https://weixiaogithub.github.io/.io/luopan3',
    'https://weixiaogithub.github.io/.io/sb-bird',
    'https://weixiaogithub.github.io/.io/time.html',
    'https://weixiaogithub.github.io/.io/starmouse.html',
    
  ];

  const randomIndex = Math.floor(Math.random() * iframes.length);
  const randomIframeSrc = iframes[randomIndex];

  const randomIframeElement = document.getElementById('random-iframe');
  const iframeHtml = `<iframe src="${randomIframeSrc}" width="100%" height="400"></iframe>`;
  randomIframeElement.innerHTML = iframeHtml;
}

// 将 loadRandomIframe() 函数绑定到 window.onload 事件上
window.onload = loadRandomIframe;
