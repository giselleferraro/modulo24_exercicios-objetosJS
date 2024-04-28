function FilmesESeries(nome, ano_lancamento, genero) {
    this.nome = nome;
    this.ano_lancamento = ano_lancamento;
    this.genero = genero;
}

function Filme(nome, ano_lancamento, genero,  duracao) {
    FilmesESeries.call(this, nome, ano_lancamento, genero);
    this.duracao = duracao;
}

function Serie(nome, ano_lancamento, genero, temporadas) {
    FilmesESeries.call(this, nome, ano_lancamento, genero);
    this.temporadas = temporadas;
}

const Filme1 = new Filme("The Exorcist", 1973, "Terror", "122min");
const Serie1 = new Serie("Friends", 1994, "Sitcom", "10 temporadas");
const Filme2 = new Filme("Legally Blonde", 2001, "Comédia/Romance", "93min");
const Serie2 = new Serie("Grey's Anatomy", 2005, "Drama", "20 temporadas");

console.log(Filme1);
console.log(Serie1);
console.log(Filme2);
console.log(Serie2);
