export const state = () => ({
    _load: null,
    _loaded: true,
});

export const getters = {
    getloadstate(state) {
        return state._load
    },
    getloaded(state) {
        return state._loaded
    }
}

export const mutations = {
    statustrue(state) {
        state._load = true
    },
    statusfalse(state) {
        state._load = false;
    },
    loadedtrue(state) {
        state._loaded = true;
    },
    loadedfalse(state) {
        state._loaded = false;
    },
}

export const actions = {
    changetrue({ commit }) {
        commit('statustrue');
    },
    changefalse({ commit }) {
        commit('statusfalse');
    },
    trueloaded({ commit }) {
        commit('loadedtrue');
    },
    falseloaded({ commit }) {
        commit('loadedfalse');
    },

}