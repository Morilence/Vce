export default {
    config: {
        primary_text_rgb: "48, 49, 51",
        regular_text_rgb: "96, 98, 102",
        secondary_text_rgb: "144, 147, 153",
        placeholder_rgb: "192, 196, 204"
    },
    set(el, cfg = {}) {
        Object.assign(this.config, cfg);
        Object.keys(this.config).forEach(prop => {
            el.style.setProperty(`--${prop}`, this.config[prop]);
        });
    }
};
