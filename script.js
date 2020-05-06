const toggleSwitch = document.getElementById('toggle-switch');

toggleSwitch.onchange = e => {
  document.documentElement.classList.toggle('dark-mode');
};