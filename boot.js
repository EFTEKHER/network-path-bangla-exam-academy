(() => {
  const app = document.getElementById('app');
  const initial = app.firstElementChild;
  function showFailure() {
    if (app.firstElementChild !== initial) return;
    app.innerHTML = '<main style="padding:40px;font-family:system-ui;max-width:600px;margin:auto"><h1>Network Path</h1><p>সাইটের ফাইল লোড করা যায়নি। ইন্টারনেট সংযোগ দেখে আবার চেষ্টা করুন।</p><p>Some files could not load. Check your connection and try again.</p><button type="button">আবার চেষ্টা করুন / Retry</button></main>';
    app.querySelector('button').addEventListener('click', () => location.reload());
  }
  const timer = setTimeout(showFailure, 40000);
  import('./app.js').then(() => clearTimeout(timer)).catch(error => {
    clearTimeout(timer);
    console.error('Academy startup failed:', error);
    showFailure();
  });
})();
