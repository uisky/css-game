export function crel(tag: string, options?: {class?: string, html?: string}): HTMLElement {
    const el = document.createElement(tag);
    if (options?.class) el.className = options.class;
    if (options?.html) el.innerHTML = options.html;
    return el;
}
