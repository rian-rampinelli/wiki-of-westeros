export function capitalizarNome(nome) {
  return nome
    .split(" ")
    .map(
      (palavra) => palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase()
    )
    .join(" ");
}

export function pegarNomeCasas(str) {
  return str.replace("House ", "");
}

export function casaParaRota(casa) {
  let base = casa.replace("House ", "").toLowerCase().replace(/\s+/g, "");
  return "/" + base + "s";
}