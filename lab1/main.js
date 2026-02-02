console.log("leg -> катет \nhypotenuse -> гіпотенуза \nadjacent angle -> прилеглий до катета кут \nopposite angle -> протилежний до катета кут \nangle -> один з двох гострих кутів");
console.log("angle використовується для підрахунку з гіпотенузою, для катетів використовується *adjacent* та *opposite* angles")

function toDeg(rad) {
    return rad * (180 / Math.PI);
}

function toRad(deg) {
    return deg * (Math.PI / 180);
}

function Legs(a, b) {
    const c = Math.sqrt(a ** 2 + b ** 2);
    const alpha = toDeg(Math.atan(a / b));
    const beta = 90 - alpha;
    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(alpha) || isNaN(beta) || a <= 0 || b <= 0 || c <= 0 || alpha <= 0 || beta <= 0) {
        console.log("неможливі значення");
        return false;
    }
    console.log(
        "a:", a, "\n",
        "b:", b, "\n",
        "c:", c, "\n",
        "alpha:", alpha, "\n",
        "beta:", beta, "\n"
    );
    return true;
}

function LegHypotenuse(a, c) {
    if (a >= c) {
        console.log("Гіпотенуза рівна/менша за катет");
        return false;
    }
    const b = Math.sqrt(c ** 2 - a ** 2);
    const alpha = toDeg(Math.asin(a / c));
    const beta = 90 - alpha;
    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(alpha) || isNaN(beta) || a <= 0 || b <= 0 || c <= 0 || alpha <= 0 || beta <= 0) {
        console.log("неможливі значення");
        return false;
    }
    console.log(
        "a:", a, "\n",
        "b:", b, "\n",
        "c:", c, "\n",
        "alpha:", alpha, "\n",
        "beta:", beta, "\n"
    );
    return true;
}

function LegAdjacentAngle(a, beta) {
    const c = a / Math.cos(toRad(beta));
    const b = a * Math.tan(toRad(beta));
    const alpha = 90 - beta;
    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(alpha) || isNaN(beta) || a <= 0 || b <= 0 || c <= 0 || alpha <= 0 || beta <= 0) {
        console.log("неможливі значення");
        return false;
    }
    console.log(
        "a:", a, "\n",
        "b:", b, "\n",
        "c:", c, "\n",
        "alpha:", alpha, "\n",
        "beta:", beta, "\n"
    );
    return true;
}

function HypotenuseAngle(c, alpha) {
    const a = c * Math.sin(toRad(alpha));
    const b = c * Math.cos(toRad(alpha));
    const beta = 90 - alpha;
    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(alpha) || isNaN(beta) || a <= 0 || b <= 0 || c <= 0 || alpha <= 0 || beta <= 0) {
        console.log("неможливі значення");
        return false;
    }
    console.log(
        "a:", a, "\n",
        "b:", b, "\n",
        "c:", c, "\n",
        "alpha:", alpha, "\n",
        "beta:", beta, "\n"
    );
    return true;
}

function LegOppositeAngle(a, alpha) {
    const c = a / Math.sin(toRad(alpha));
    const b = Math.sqrt(c ** 2 - a ** 2);
    const beta = 90 - alpha;
    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(alpha) || isNaN(beta) || a <= 0 || b <= 0 || c <= 0 || alpha <= 0 || beta <= 0) {
        console.log("неможливі значення");
        return false;
    }
    console.log(
        "a:", a, "\n",
        "b:", b, "\n",
        "c:", c, "\n",
        "alpha:", alpha, "\n",
        "beta:", beta, "\n"
    );
    return true;
}

function triangle(firstValue, firstType, secondValue, secondType) {
    if (firstValue <= 0 || secondValue <= 0) {
        return "zero or nagative input"
    }
    let res = true;
    const type = (firstType + " " + secondType).toLowerCase();
    switch (type) {
        case "leg leg":
            res = Legs(firstValue, secondValue);
            break;
        case "leg hypotenuse":
            res = LegHypotenuse(firstValue, secondValue);
            break;
        case "hypotenuse leg":
            res = LegHypotenuse(secondValue, firstValue);
            break;
        case "leg adjacent angle":
            res = LegAdjacentAngle(firstValue, secondValue);
            break;
        case "adjacent angle leg":
            res = LegAdjacentAngle(secondValue, firstValue);
            break;
        case "angle hypotenuse":
            res = HypotenuseAngle(secondValue, firstValue);
            break;
        case "hypotenuse angle":
            res = HypotenuseAngle(firstValue, secondValue);
            break;
        case "leg opposite angle":
            res = LegOppositeAngle(firstValue, secondValue);
            break;
        case "opposite angle leg":
            res = LegOppositeAngle(secondValue, firstValue);
            break;
        default:
            console.log("неможлива комбінація или опечатка");
            return "failed";
    }
    return res ? "success" : "failed";
}

