let val1 = "";
let val2 = "";
let operator = null;
let num1 = true;
let display = "";

/**
 * Memorisation des valeurs numérique et mise à jour affichage
 * @param {number} num 
 */
const addValue = (num) => {
  if (num1) {
    val1 = val1 + num;
  } else {
    val2 = val2 + num;
  };
  updateDisplay(num);
}

/**
 * Mise à jour de l'opérateur et de l'affichage
 * @param {string} signe 
 */
const addOperator = (signe) => {
  if (val1.length > 0) {
    operator = signe;
    num1 = false;
    updateDisplay(` ${operator} `);
  } else {
    setMsg('Vous devez entrer un nombre')
  }
}

/**
 * Mise à zéro des données (Réinitialisation)
 */
const resetValue = () => {
  val1 = "";
  val2 = "";
  operator = null;
  num1 = true;
}

/**
 * Calcul du résultat si le 2ème nombre est renseigné
 */
const calcul = () => {
  if (val2.length > 0) {
    resetDisplay();
    switch (operator) {
      case "+":
        updateDisplay(parseInt(val1) + parseInt(val2))
        break;
      case "-":
        updateDisplay(parseInt(val1) - parseInt(val2))
        break;
      case "*":
        updateDisplay(parseInt(val1) * parseInt(val2))
        break;
      case "/":
        updateDisplay(parseInt(val1) / parseInt(val2))
        break;
      default:
        break;
    }
  } else {
    setMsg("Vous devez entrer un deuxième nombre");
  }
}

/**
 * Mise à zéro de l'affichage
 */
const resetDisplay = () => {
  display = "";
}

/**
 * Mise à jour de l'affichage
 * @param {string} newValue 
 */
const updateDisplay = (newValue) => {
  display = display + newValue;
  document.getElementById('result').innerText = display;
}

/**
 * Réinitialisation complète des valeurs et de l'affichage
 */
const fullReset = () => {
  resetDisplay();
  updateDisplay("");
  resetValue();
}

/**
 * Mise en place d'un msg d'aide à l'utilisateur selon le cas
 * Suppression du message àprès 2,5 secondes
 * @param {string} msg 
 */
const setMsg = (msg) => {
  const msgHtml = document.getElementById('msg');
  msgHtml.innerText = msg;
  setTimeout(() => {
    msgHtml.innerText = "";
  }, 2500)
}
