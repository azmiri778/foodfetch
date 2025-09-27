const input = document.getElementById("inp");
const button = document.getElementById("btn");
const container  = document.getElementById("cont");
button.addEventListener("click", async () => {
    const country = input.value.trim();
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`);
      const obj = await res.json();
    console.log(obj);
    const food = obj.meals;
    cont.innerHTML = "";
    food.forEach(meal => {
        const card = document.createElement("div");
        card.classList.add("card",
  "bg-white",
  "rounded-xl",
  "shadow-lg",
  "p-4",
  "m-4",
  "w-64",
  "text-center",
        );
        const img = document.createElement("img");
        img.src = meal.strMealThumb;
        img.alt = meal.strMeal;
        const title = document.createElement("h2");
        title.textContent = meal.strMeal;
        card.appendChild(img);
        card.appendChild(title);
        cont.appendChild(card);
 });

})

















