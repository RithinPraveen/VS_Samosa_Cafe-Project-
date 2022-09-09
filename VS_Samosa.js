let samosa = {
    typesOfSamosa: [
        {
            recipes: "Chole Samosa",
            makingRecipes: {
                step1: "Mix an make Dough",
                step2: "Making Structure",
                step3: "Prepare to chenna dal ",
                step4: "Fill and Fried"
            }
        },
        {
            recipes: "Chocolate Samosa",
            makingRecipes: {
                step1: "Mix an make Dough",
                step2: "Making Structure",
                step3: "Prepare to Chocolate ",
                step4: "Fill and Fried"
            }
        },
        {
            recipes: "Pasta Samosa",
            makingRecipes: {
                step1: "Mix an make Dough",
                step2: "Making Structure",
                step3: "Prepare to Pasta  ",
                step4: "Fill and Fried"
            }
        },
        {
            recipes: "Punjabi Samosa",
            makingRecipes: {
                step1: "Mix an make Dough",
                step2: "Making Structure",
                step3: "Prepare to Masala ",
                step4: "Fill and Fried"
            }
        },
        {
            recipes: "Cauliflower Samosa",
            makingRecipes: {
                step1: "Mix an make Dough",
                step2: "Making Structure",
                step3: "Prepare to Cauliflower Masala ",
                step4: "Fill and Fried"
            }
        },
        {
            recipes: "Mushroom Samosa",
            makingRecipes: {
                step1: "Mix an make Dough",
                step2: "Making Structure",
                step3: "Prepare to Mushroom Masala",
                step4: "Fill and Fried"
            }
        },
        {
            recipes: "Potato Samosa",
            makingRecipes: {
                step1: "Mix an make Dough",
                step2: "Making Structure",
                step3: "Prepare to Potato Masala",
                step4: "Fill and Fried"
            }
        },

    ],
    sideDish: [
        {
            dish: "MINT",
            makingDish: {
                step1: "Grinding Mint, oil and Salt ",
                step2: "Cooking with add Oil and Black Mustard"
            }
        },
        {
            dish: "TOMATO SAUCE",
            makingDish: {
                step1: "Grinding fresh Tomato ",
                step2: "Adding additional incretance"
            }
        },
        {
            dish: "MAYONNAISE",
            makingDish: {
                step1: "Grinding Oil and Ginger",
                step2: "Adding incretance Vingar and Sugar"
            }
        },
    ]
}



//===============================================| Choice of Samosa |======================================================

//⬇️⬇️ Taking user input of Samosa ⬇️⬇️ 
userRecipeSelection = "Chocolate Samosa"


function seletionOfRecipe(menu, recipeChoice) {
    return menu.filter(n => n.recipes == recipeChoice);
}

//⬇️⬇️ Implementing of Samosa according to user Input in - Making of Recipe ⬇️⬇️
 makingOfRecipe(userRecipeSelection)

function makingOfRecipe(userRecipe) {
    DishSteps = []
    seletionOfRecipe(samosa.typesOfSamosa, userRecipe).forEach(recipe => {
        DishSteps.push(Object.values(recipe.makingRecipes))
    });
    setTimeout(() => {
        console.log('⌜‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾⌝');
        console.log(`   Please Wait, Your ${userRecipe} is Preparing    `)
        console.log('⌞____________________________________________________⌟')
        let counting = 0
        let intervals = setInterval(() => {
            console.log(`Step ${counting+1} ▶️ ${DishSteps[0][counting]}`)
            counting++
            if (counting == DishSteps[0].length) {
                clearInterval(intervals)
            }
        }, 4000);
    }, 3000)


}

//=================================================| Choice of Side Dish |====================================================

function seletionOfDish(menu, DishChoice) {
    return menu.filter(n => n.dish == DishChoice);
}

function choiceMint(userChoice) {
    seletionOfDish(samosa.sideDish, userChoice).forEach(Idish => {
        setTimeout(() => {
            console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
            console.log(`   Side Dish '${userChoice}' is Preparing  `)
            console.log('___________________________________________')
            setTimeout(() => {
                console.log(`Step 1 ▶️ ${Idish.makingDish.step1}`)
                setTimeout(() => {
                    console.log(`Step 2 ▶️ ${Idish.makingDish.step2}`)
                }, 4000)
            }, 4000)
        }, 22000)
    });
}

function choiceTomatoSauce(userChoice) {
    seletionOfDish(samosa.sideDish, userChoice).forEach(Idish => {
        setTimeout(() => {
            console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾')
            console.log(`   Side Dish '${userChoice}' is Preparing  `)
            console.log('___________________________________________')
            setTimeout(() => {
                console.log(`Step 1 ▶️ ${Idish.makingDish.step1}`)
                setTimeout(() => {
                    console.log(`Step 2 ▶️ ${Idish.makingDish.step2}`)
                }, 4000)
            }, 4000)
        }, 32000)
    });
}

function choiceMayonnaise(userChoice) {
    seletionOfDish(samosa.sideDish, userChoice).forEach(Idish => {
        setTimeout(() => {
            console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾')
            console.log(`   Side Dish '${userChoice}' is Preparing  `)
            console.log('___________________________________________')
            setTimeout(() => {
                console.log(`Step 1 ▶️ ${Idish.makingDish.step1}`)
                setTimeout(() => {
                    console.log(`Step 2 ▶️ ${Idish.makingDish.step2}`)
                }, 4000)
            }, 4000)
        }, 42000)
    });
}

//=================================================| Choice of Yes or No |====================================================

//⬇️⬇️ Implementing of Side Dish according to user Input in - Side Dish Choice Mint ⬇️⬇️
sideDishChoiceMint(choiceMint, choiceTomatoSauce, choiceMayonnaise) 

function sideDishChoiceMint(Imint, ItomatoSauce, Imayonnaise) {
    console.log(`Do you want ${samosa.sideDish[0].dish}? ( YES , NO )`)
    isMintNeeded = "yes"
    if (isMintNeeded.toLowerCase() === "yes") {
        Imint("MINT")
        sideDishChoiceTomatoSauce(ItomatoSauce, Imayonnaise)
    } else if (isMintNeeded.toLowerCase() === "no") {
        sideDishChoiceTomatoSauce(ItomatoSauce, Imayonnaise)
    }
}

function sideDishChoiceTomatoSauce(ItomatoSauce, Imayonnaise) {
    console.log(`Do you want ${samosa.sideDish[1].dish}? ( YES , NO )`)
    isTomatoSauceNeeded = "yes"
    if (isTomatoSauceNeeded.toLowerCase() === "yes") {
        ItomatoSauce("TOMATO SAUCE");
        sideDishChoiceMayonnaise(Imayonnaise)
    } else if (isTomatoSauceNeeded.toLowerCase() === "no") {
        sideDishChoiceMayonnaise(Imayonnaise)
    }
}

function sideDishChoiceMayonnaise(Imayonnaise) {
    console.log(`Do you want ${samosa.sideDish[2].dish}? ( YES , NO )`)
    isMayonnaiseNeeded = "yes"
    if (isMayonnaiseNeeded.toLowerCase() === "yes") {
        console.log("_-_-_-_-_Thank You, Your Order is been Placed_-_-_-_-_")
        Imayonnaise("MAYONNAISE");
    } else if (isMayonnaiseNeeded.toLowerCase() === "no") {
        console.log("_-_-_-_-_Thank You, Your Order is been Placed_-_-_-_-_")
    }
}