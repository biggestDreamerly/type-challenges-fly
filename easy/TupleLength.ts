type TupleLength<T extends any[]> = T['length']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

type teslaLength = TupleLength<spaceX>  // expected 4