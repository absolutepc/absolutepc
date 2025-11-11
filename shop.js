document.addEventListener("click", ({target}) =>
{
  if (target.tagName !== "BUTTON")
  {
    return;
  }
  
  const wrapper = target.closest(".colors");
  if (wrapper === null)
  {
    return;
  }
  
  const image = wrapper.querySelector(".pic img");
  const activeButton = wrapper.querySelector("button.active");
  if (image === null || activeButton === null)
  {
    return;
  }
  
  const button = target;
  button.classList.add("active");
  
  image.src = button.dataset.src; 
});