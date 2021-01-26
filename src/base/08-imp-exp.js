import heroes from '../data/heroes';

export const getHeroesById = (id) => heroes.find((heroe) => heroe.id === id);

export const GetHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);
