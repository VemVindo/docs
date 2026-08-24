export type TeamMember = {
  nome: string;
  usuarioGithub: string;
};

function urlPerfil(usuarioGithub: string): string {
  return `https://github.com/${usuarioGithub}`;
}

function urlAvatar(usuarioGithub: string): string {
  return `https://github.com/${usuarioGithub}.png`;
}

export const team: TeamMember[] = [
  {nome: 'Ana Luiza Komatsu Aroeira', usuarioGithub: 'luluaroeira'},
  {nome: 'Felipe de Oliveira Motta', usuarioGithub: 'M0tt1nh4'},
  {nome: 'Guilherme Flyan Araujo', usuarioGithub: 'GFlyan'},
  {nome: 'Camila Silva Cavalcante', usuarioGithub: 'CamilaSilvaC'},
  {nome: 'Isaque Camargos Nascimento', usuarioGithub: 'isaqzin'},
  {nome: 'Luisa de Souza Ferreira', usuarioGithub: 'luisa12ll'},
  {nome: 'Diogo Oliveira Ferreira', usuarioGithub: 'Diogo-Olivv'},
];

export {urlPerfil, urlAvatar};
