﻿const copyToClipboard = () => {
  const outputElement = document.getElementById('out');
  outputElement.select();
  outputElement.setSelectionRange(0, 99999);
  document.execCommand('copy');
  document.getElementById('copy').className = '';
  document.getElementById('copy').innerHTML = '🇦🇱';
  setTimeout(() => {
    document.getElementById('copy').className = 'fa-solid fa-clone';
    document.getElementById('copy').innerHTML = '';
  }, 1000);
};

const paste = () => {
  var inputField = document.getElementById("inp");
  navigator.clipboard.readText().then(function (text) {
    inputField.value = text;
    convert();
    document.getElementById('paste').className = '';
    document.getElementById('paste').innerHTML = '🇦🇱';
    setTimeout(() => {
      document.getElementById('paste').className = 'fa-solid fa-paste';
      document.getElementById('paste').innerHTML = '';
    }, 1000);
  });
};

async function loadGitInfo() {
  try {
      const response = await fetch('/version.json');
      const data = await response.json();
      updateFooter(data.branch, data.commit);
  } catch (error) {
      console.error('error in getting git-information', error);
  }
}

function updateFooter(branch, commit) {
  const footerElement = document.getElementById('gitinfo');
  footerElement.textContent = `version: ${branch}-${commit}`;
}

window.addEventListener('DOMContentLoaded', (event) => {
  loadGitInfo();
});
