// |jit-test| --enable-weak-refs
fullcompartmentchecks(true);
var g37 = newGlobal({
    newCompartment: true
});
new g37.WeakRef({});
