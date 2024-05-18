function getKeyElementId(code) {
    switch (code) {
        case "Backquote": return "`";
        case "Digit1": return "1";
        case "Digit2": return "2";
        case "Digit3": return "3";
        case "Digit4": return "4";
        case "Digit5": return "5";
        case "Digit6": return "6";
        case "Digit7": return "7";
        case "Digit8": return "8";
        case "Digit9": return "9";
        case "Digit0": return "0";
        case "Minus": return "-";
        case "Equal": return "equals";
        case "Backspace": return "back";
        case "Tab": return "tab";
        case "KeyQ": return "q";
        case "KeyW": return "w";
        case "KeyE": return "e";
        case "KeyR": return "r";
        case "KeyT": return "t";
        case "KeyY": return "y";
        case "KeyU": return "u";
        case "KeyI": return "i";
        case "KeyO": return "o";
        case "KeyP": return "p";
        case "BracketLeft": return "[";
        case "BracketRight": return "]";
        case "Backslash": return "backslash";
        case "CapsLock": return "caps";
        case "KeyA": return "a";
        case "KeyS": return "s";
        case "KeyD": return "d";
        case "KeyF": return "f";
        case "KeyG": return "g";
        case "KeyH": return "h";
        case "KeyJ": return "j";
        case "KeyK": return "k";
        case "KeyL": return "l";
        case "Semicolon": return "semicolon";
        case "Quote": return "quote";
        case "Enter": return "enter";
        case "ShiftLeft": return "shift";
        case "ShiftRight": return "rshift"
        case "KeyZ": return "z";
        case "KeyX": return "x";
        case "KeyC": return "c";
        case "KeyV": return "v";
        case "KeyB": return "b";
        case "KeyN": return "n";
        case "KeyM": return "m";
        case "Comma": return "comma";
        case "Period": return "period";
        case "Slash": return "slash";
        case "ControlLeft": return "ctrl";
        case "ControlRight": return "rctrl";
        case "AltLeft": return "alt";
        case "AltRight": return "ralt";
        case "Space": return "space";
        case "ContextMenu": return "menu";
        default: return null;
    }
}

document.addEventListener("keydown", function (event) {
    var code = event.code;
    var elementId = getKeyElementId(code);

    if (elementId) {
        document.getElementById(elementId).style.backgroundColor = "rgba(39, 245, 234, 0.6)";
        document.getElementById(elementId).style.transform = "translateY(2px)";

        event.preventDefault();
    }
});

document.addEventListener("keyup", function (event) {
    var code = event.code;
    var elementId = getKeyElementId(code);

    if (elementId) {
        document.getElementById(elementId).style.backgroundColor = "rgb(196, 196, 196)";
        document.getElementById(elementId).style.color = "black"
        document.getElementById(elementId).style.transform = "translateY(0px)";
        event.preventDefault();
    }
});
