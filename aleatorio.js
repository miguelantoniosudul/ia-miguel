const nomes = ["Ana luiza", "Miguel", "Grazielly", "Kaike","Lana","marcela","Eduardo","Fabiane","guilherme","ruan"       ];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)