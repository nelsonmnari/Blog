function toggleRecipe() {
  const recipe = document.getElementById("recipe-details");
  recipe.style.display = recipe.style.display === "none" ? "block" : "none";
}

let likeCount = 0;

function likeRecipe() {
  likeCount++;
  document.getElementById("like-count").textContent = likeCount;
  document.getElementById("like-btn").classList.add("liked");
}
