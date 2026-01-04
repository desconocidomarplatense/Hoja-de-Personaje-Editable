const e={layouts:{lg:[{w:1,h:1,x:0,y:0,i:"New Widget",moved:!1,static:!0,isDraggable:!1,isResizable:!1},{w:1,h:1,x:0,y:1,i:"EubFsmS5K3",moved:!1,static:!1}],md:[],sm:[],xs:[{w:1,h:1,x:0,y:0,i:"New Widget",moved:!1,static:!0,isDraggable:!1,isResizable:!1},{w:8,h:26,x:0,y:1,i:"EubFsmS5K3",moved:!1,static:!1}],xxs:[{w:1,h:1,x:0,y:0,i:"New Widget",moved:!1,static:!0,isDraggable:!1,isResizable:!1},{w:4,h:36,x:0,y:1,i:"EubFsmS5K3",moved:!1,static:!1}]},widgets:[{id:"EubFsmS5K3",content:`# Dice Rolling In Dashboard Maker

***

The following are examples of what currently works to trigger dice notation. If you write these notations out in the same way and then hit space, and you should get the same outcomes as the examples below.

* Regular old dice rolls: :dice[1d4], :dice[1d6], :dice[1d8], :dice[1d10], :dice[1d12], :dice[1d20], :dice[1d100]
* Roll any dice with \`+\`/\`*\`/\`-\`/\`/\` modifiers: :dice[1d12+4]
* Roll multiple different dice: :dice[1d6+1d4]
* Roll multiple different dice, with modifiers: :dice[1d4+2+1d6-3]
* Roll if 1 dice is greater (\`>\`) or less than (\`<\`) a target: :dice[1d20>10]
* "DC" Notation (does the same as the example above): :dice[DC10]{isDCNotation="true"}
* "Modifier" Notation: :dice[+7]{isModNotation="true"}
* Roll if multiple dice that are greater or less than the target: :dice[6d6>3]
* Roll and keep highest: :dice[2d20kh1]
* Roll and keep lowest: :dice[2d20kl1]
* Roll and drop highest: :dice[2d20dh1]
* Roll and drop lowest: :dice[2d20dl1]
* Exploding dice (it rerolls crits): :dice[8d6!]
* Labelling a dice roll: :dice[1d6+3+1d8#Might]



You can also now display ALIAS TEXT for any dice roll. Before you hit space, type "@" at the end of the dice notation, followed by the text you want to display, then hit space.

Example:

:dice[4d4#Healing!]{alias="InstaHeal"}

> *Try other notations/combinations of notations at your own peril! They probs won't work right. But if there's something you really wish you could still do with this dice notation feature, lemme know about it on the Owlbear Rodeo Discord!*`}],isLocked:!0,columns:8};export{e as default};
