import { init } from 'https://unpkg.com/@waline/client@v3/dist/waline.js';
document.addEventListener('DOMContentLoaded', () => {
  init({ 
    el: '#waline',
    serverURL: "https://waline.yingyu5658.me", // 替换真实地址
    path: '{{ .RelPermalink }}',
    lang: 'zh-CN',
    meta: ['nick','mail','link'],
    requiredMeta: ['nick'],
    pageSize: 10,
    imageUploader: false, // 关闭图片上传减少错误
    login: 'enable',
  });
});