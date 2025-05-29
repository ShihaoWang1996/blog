// js/main.js
function getKey() {
    const date = document.getElementById("date").value;
    return `entry_${date}`;
  }
  
  function saveEntry() {
    const key = getKey();
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
  
    if (!key || !title || !content) {
      alert("请填写完整！");
      return;
    }
  
    const data = {
      title,
      content
    };
  
    localStorage.setItem(key, JSON.stringify(data));
    alert("保存成功！");
  }
  
  function loadEntry() {
    const key = getKey();
    const raw = localStorage.getItem(key);
    const output = document.getElementById("output");
  
    if (!raw) {
      output.innerHTML = "<p>这天还没有内容。</p>";
      return;
    }
  
    const data = JSON.parse(raw);
    output.innerHTML = `
      <h3>${data.title}</h3>
      <p>${data.content.replace(/\n/g, "<br>")}</p>
    `;
  }
  