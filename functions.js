function add(a, b) {
    return a + b;
}
function f(a) {
    return a.trim().toUpperCase();
}
function position(a, b) {
    if (!a && !b) {
        return { x: undefined, y: undefined };
    }
    if (a && !b) {
        return { x: a, y: undefined, "default": a.toString() };
    }
    return { x: a, y: b };
}
position();
position(10);
position(12, 3);
