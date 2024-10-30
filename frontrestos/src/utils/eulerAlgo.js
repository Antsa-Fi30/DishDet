export function tauxEvolution(t, P, recrutement, depart) {
  return recrutement(t) - depart(t);
}

export function euler(t0, P0, h, n, recrutement, depart) {
  let t = t0;
  let w = P0;
  const resultats = [];

  for (let i = 0; i < n; i++) {
    resultats.push({ t, w });
    w = w + h * tauxEvolution(t, w, recrutement, depart);
    t = t + h;
  }

  return resultats;
}
