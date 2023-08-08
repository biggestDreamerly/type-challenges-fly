type FristOfArray<T extends any[]> = T['length'] extends 0 ? never : T[0]
type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type head1 = FristOfArray<arr1> // expected to be 'a'
type head2 = FristOfArray<arr2> // expected to be 3 