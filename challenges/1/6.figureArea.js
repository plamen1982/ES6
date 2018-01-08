function figureArea(w, h, W, H) {
    let [area1, area2, area3] = [w*h, W*H, Math.min(h, H) * Math.min(w, W)]
    return area1 + area2 - area3
}

console.log(figureArea(2, 4, 5, 3))
