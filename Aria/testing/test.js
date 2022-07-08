function a() {
    const markup = `<div class="person">
    <h2>
        asasasa
    </h2>
    <p class="location">asasa</p>
    <p class="bio">asasa</p>
 </div>`
  const para = document.createElement("p");
  const node = document.createTextNode("This is a paragraph.");
  para.appendChild(node);

  document.getElementById("a").appendChild(para);
  document.body.insertAdjacentHTML('afterbegin', `<div class="person">
  <h2>
      zzz
  </h2>
  <p class="location">zz</p>
  <p class="bio">zzz</p>
</div>`);
document.body.insertAdjacentHTML('afterbegin', `<div class="person">
<h2>
    aaa
</h2>
<p class="location">aa</p>
<p class="bio">aaa</p>
</div>`); document.body.insertAdjacentHTML('afterbegin', `<div class="person">
<h2>
    bbb
</h2>
<p class="location">bb</p>
<p class="bio">bbb</p>
</div>`);

document.body.innerHTML +=  `<div class="person">
<h2>
    asasasa
</h2>
<p class="location">asasa</p>
<p class="bio">asasa</p>
</div>`;


}
a();
