function changeOuterLinks() {
  const targetLinks = document.querySelectorAll('nav#link-list a');
  targetLinks.forEach(link => {
    if (link.innerHTML.includes('outer-link')) {
      link.setAttribute('target', '_blank');
      link.innerHTML = `<strong>${link.innerHTML}</strong>`;
    }
  })

  document.querySelectorAll("nav").forEach((e) => {
    e.style.display = "flex";
    e.style.flexDirection = "column";
    e.style.margin = "0px auto";
    e.style.width = "30%";
    e.style.border = "1px solid blue";
    e.style.padding = "16px";
  });
}

changeOuterLinks()

export { changeOuterLinks };